"use strict";

module.exports = function(model,io) {    
  io.sockets.on('connection', function(socket){  	   
	    console.log('a user connected');

	    socket.on('join', function (data) {
	    	console.log(data)
	      socket.join(data.userId);      
	      console.log("room created");
	    });

  		socket.on("init chat",function(data,cb){

  			var chatId = data.userId + "/" + data.partnerId; //creates chat id for the user and a partner to be saved in the database.

	      model.chats.findOne({chat_id:chatId},function(err,chat){
	      	if(err) throw err;
	      	if(!chat){
	      		var date= + new Date();    		
	      		var newChat = new model.chats({
	      			date_created: date,
	      			chat_id: chatId,
	      			type:"chat",
	      		});
	      		newChat.save(function(err,info){
	      			console.log("chat cn now be saved");
	      			console.log(chatId)
	      		});
	      	} else {
	      		cb(chat.messages);
	      	}
	      });
  		})

	    socket.on("send message",function(data,cb){
	      cb(data);
	      console.log(socket.rooms)     
	      //if(Object.keys(socket.rooms).indexOf(data.to) !== -1)
	       model.user.findOne({user_id: data.to},{set_presence:1},function(err,Obj){
	       	if(err) throw err;	       	
	       	var checkBlocked = Obj.set_presence.particular.indexOf(data.from);	       	
	       	if(checkBlocked === -1){	       		
	       		if(Obj.set_presence.general === true) {	       			
	       			io.sockets.to(data.to).emit('new_msg',data);
	       		}
	       	}
	       	
	       });
	       
	       socket.on("isSent",function(data,cb){
	       	data.isSent = true;
	       	cb(data.isSent);
	       });

	    });

	    socket.on("msg received",function(data){
	    	data.isReceived = true;
	    	io.sockets.to(data.to).emit("isReceived",data.isReceived)
	    })

	    socket.on("user typing",function(data){
	      io.sockets.to(data.to).emit('typing',data.message);
	    });

	    socket.on("save message",function(data){
	    	var chatId = data.userId + "/" + data.partnerId;
	    	model.chats.findOne({chat_id: chatId},{messages:1}).exec(function(err,chats){
	    		if(data.hasOwnProperty('$$hashKey'))
	    			delete data['$$hashKey'];
	    		chats.messages.push(data);
	    		chats.save(function(err,info){
	    			if(err) throw err;
	    			console.log("chat saved!!!")
	    		})
	    	})
	    })

	    //for blocking a user
	    socket.on("block user",function(data){
	    	model.user.findOne({user_id:data.userId},{set_presence:1}).exec(function(err,user){
	    		if(err) throw err;
	    		user.set_presence.particular.push(data.defaulter) // defaulter is the the user-id of the person to be blocked.
	    		user.save(function(err,info){
	    			console.log("somebody blocked!")
	    		})
	    	})
	    });

	    //for unblocking a user
	    socket.on("unblock user",function(data){
	    	model.user.findOne({user_id:data.userId},{set_presence:1}).exec(function(err,user){
	    		if(err) throw err;
	    		var index = user.set_presence.particular.indexOf(data.defaulter) // defaulter is the the user-id of the person to be blocked.
	    		var person = user.set_presence.particular.splice(index,1);
	    		user.save(function(err,info){
	    			console.log( person + " unblocked!")
	    		})
	    	})
	    })

	    socket.on("set presence",function(data,cb){
	    	model.user.findOne({user_id:data.userId},{set_presence:1,presence:1}).exec(function(err,user){
	    		if(err) throw err;
	    		if(data.status === "online"){
	    			user.set_presence.general = true;
	    			user.presence = true;
	    			cb({status: true})
	    		} else if(data.status === "offline"){
	    			user.set_presence.general = false;
	    			user.presence = false;
	    			cb({status: false})
	    		}

	    		user.save(function(err,info){})
	    	})
	    })

	    socket.on("doctor connect",function(data){
	    	model.user.find({"accepted_doctors.doctor_id": data.userId,type:"Patient"},{user_id:1},function(err,list){
	    		if(err) throw err;
	    		var status = {presence: true,doctor_id:data.userId};
	    		list.forEach(function(user){	    			
	    			io.sockets.to(user.user_id).emit("doctor presence",status);
	    		})
	    	})
	    })

	    socket.on("doctor disconnect",function(data){
	    	model.user.find({"accepted_doctors.doctor_id": data.userId,type:"Patient"},{user_id:1},function(err,list){
	    		if(err) throw err;
	    		var status = {presence: false,doctor_id:data.userId};
	    		list.forEach(function(user){	    			
	    			io.sockets.to(user.user_id).emit("doctor presence",status);
	    		})
	    	})
	    })


/////
	    /*socket.on("patient disconnect",function(data){
	    	model.user.find({"doctor_patients_list.patient_id": data.userId,type:"Doctor"},{user_id:1},function(err,list){
	    		if(err) throw err;
	    		var status = {presence: false,patient_id:data.userId};
	    		list.forEach(function(user){	    			
	    			io.sockets.to(user.user_id).emit("patient presence",status);
	    		})
	    	})
	    })*/

		socket.on("request",function(req){
			console.log(req)
			//{type:req.type,message:req.message,time:req.time}
			io.sockets.to(req.to).emit("receive request",req);
		});
  	

  });
  
 }