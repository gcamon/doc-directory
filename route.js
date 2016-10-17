'use strict';
var path = require('path');
var route = require('./config');
var router = route.router;
var fs = require("fs");
var dateTime = require("node-datetime");

var basicRoute = function (model) {

  router.get("/",function (req,res) {
    res.render('index',{"message":""});
  });
  router.get("/doctor/dashboard",function(req,res){
    if(req.user){     
      res.render("profile",{"person":req.user});
    } else {
      res.redirect("/");
    }
  });
  router.get("/patient/dashboard",function(req,res){
        if(req.user){
          res.render("patient",{"userInfo": req.user});
        } else {
          res.redirect('/');
        }
  });
  router.get("/medical-center/view",function(req,res){
        if(req.user){
          res.render("medical",{"userInfo": req.user});
        } else {
          res.redirect('/');
        }
  })
  router.get("/doctor/update",function(req,res){
    if(req.user){            
      res.render("profile-update",{"person":req.user});
    } else {
      res.redirect("/");
    }
  });    
  router.get("/download/profile_pic/:pic_id", function(req,res){        
    if(req.params.pic_id === "nopic") {
      model.files.findOne({file_id:"nopic"},function(err,data){
        if(err) throw err;               
        var nopic = __dirname + "/uploads/" + data.filename;
        res.download(nopic);
      });
    } else {
        var file = __dirname + "/uploads/" + req.params.pic_id;
        res.download(file); // Set disposition and send it.
    }
  });

  //doctors profile update route
  router.put("/user/update",function(req,res){
    if(req.user){
        switch(req.body.type){
        case "picture":            
            if(req.files.length > 0) {
                model.user.update({email: req.user.email},{$set : {
                "profile_pic.filename": req.files[0].filename,
                "profile_pic.path":  req.files[0].path,
                "profile_pic.mimetype":  req.files[0].mimetype,
                "profile_pic.encoding":  req.files[0].encoding,
                "profile_pic.size":  req.files[0].size,
                "profile_pic.destination":  req.files[0].destination,
                "profile_pic.fieldname":  req.files[0].fieldname,
                "profile_pic.originalname":  req.files[0].originalname,
                profile_pic_url: "/download/profile_pic/" + req.files[0].filename
                }},function(err,info){        
                if(err) throw err;
                console.log(info)         
                res.send("success");                  
                });
            } else {
                res.end();
            }
            break; 
        case "form":
            model.user.findOne(
                {
                    email: req.user.email
                }
            )
            .exec(
                function(err, result){
                    if(req.body.introductory)
                        result.introductory = req.body.introductory;
                    if(req.body.firstname)
                        result.firstname = req.body.firstname;
                    if(req.body.lastname)
                        result.lastname = req.body.lastname;
                    if(req.body.address)
                        result.address = req.body.address;
                    if(req.body.phone)
                        result.phone = req.body.phone;
                    if(req.body.experience)
                        result.experience = req.body.experience;                         
                    for(var i in req.body){                      
                        if(req.body.hasOwnProperty(i) && Object.prototype.toString.call( req.body[i] ) === '[object Array]'){                            
                           switch(i){
                               case "education":
                               pushAll(req.body.education);                                                               
                               break;
                               case "procedure":
                                pushAll(req.body.procedure);                               
                               break;
                               case "subSpecialty":
                                pushAll(req.body.subSpecialty);                               
                               break;
                               case "award":
                                pushAll(req.body.award);                               
                               break;
                               case "office":
                                pushAll(req.body.office);                               
                               break;
                               default:                               
                               break;
                           }
                        }
                        
                    }
                    function pushAll(arr){                        
                            for(var i = 0; i < arr.length; i++){
                                if(Object.keys(arr[i]).length > 2){
                                switch(arr[i].type){
                                case "edu":
                                result.education.push(arr[i]);
                                break;
                                case "pro":
                                result.procedure.push(arr[i]);
                                break;
                                case "ss":
                                result.sub_specialty.push(arr[i]);
                                break;
                                case "ha":
                                result.awards.push(arr[i]);
                                break;
                                case "of":
                                result.office_hour.push(arr[i]);
                                break;
                                default:
                                break;
                                }
                                }
                            } 
                        
                    }
                    result.save(function(err){
                        if(err) throw err;
                        console.log("updated");                        
                        res.send("success");
                    });
                }
            )

            /*for(var i in req.body){
                if(req.body.hasOwnProperty(i)){
                    if(Object.prototype.toString.call( req.body[i] ) === '[object Array]'){
                        model.user.update(
                            {email: req.user.email}, 
                            {$push: {education: {
                                school: "Hello World",
                                certificate: "933ujrfn393r..............????"
                            }}
                        },function(err,info){
                            console.log(info);
                        });
                    } else {
                        var prop = i;
                        model.user.update(
                            {email: req.user.email}, 
                            {$set: {prop: req.body[i]}
                        },function(err,info){
                            console.log(i + ":" + req.body[i])
                            console.log(info);
                        });
                    }
                } 
            }
             res.send("success")
             //
            for(var i in req.body){
                if(req.body.hasOwnProperty(i)){
                    model.user.Update(
                        {email: req.user.email}, 
                        {$push: {education: {
                            school: "Hello World",
                            certificate: "933ujrfn393r"
                        }}
                    }).exec(function(err, post) {
                        console.log(post);
                        res.send(post);
                    });
                }
            }  */             
          break;
          default:
            res.end();
          break;   
        
        }     
    } else {
      res.redirect("/");
    }
  });
    router.get("/doctor/schedule",function(req,res){
        if(req.user){
        res.render("profile",{"person":req.user});
        } else {
        res.sendFile(path.join(__dirname + "/404.html"));
        }
    });
    router.get("/assets", function (req,res) {
        res.send('css');
        res.send('js');
        res.send('images');
    });
    router.get('/account-created',function(req,res){
        res.render("success",{"message":""})
    });
    //navigates to list views accordingly
    router.get("/topview/:name", function (req,res) {
        switch (req.params.name) {
            case "doctors":
                model.user.find(
                    {type:"Doctor"},{
                        firstname:1,
                        lastname:1,
                        address:1,
                        profile_url:1,
                        profile_pic_url: 1,
                        introductory:1,
                        education:1,
                        sub_specialty:1,
                        specialty:1,
                        procedure:1,
                        work_place:1,
                        phone:1,
                        experience:1,
                        country: 1,
                        city:1,
                        user_id:1
                    },function(err,data){
                    if(err) throw err;
                    console.log(data);
                    if(data) {
                        res.render("list-view",{"userInfo":data});
                    }                                  
                }).limit(20);                
                break;
            case "hospitals":
                model.user.find({type:"Hospital"},{firstname:1,lastname:1,address:1,profile_url:1,profile_pic_url: 1,education:1},function(err,data){
                    if(err) throw err;                                     
                    if(data) {
                        res.render("list-view",{"userInfo":data});
                    }             
                }).limit(10);               
                break;
            case "clinics":
                model.user.find({type:"Clinic"},{firstname:1,lastname:1,address:1,profile_url:1,profile_pic_url: 1},function(err,data){
                    if(err) throw err;                                     
                    if(data) {
                        res.render("list-view",{"userInfo":data});
                    }             
                }).limit(10);               
                break;
            case "phamarcy":
                model.user.find({type:"Phamarcy"},{firstname:1,lastname:1,address:1,profile_url:1,profile_pic_url: 1},function(err,data){
                    if(err) throw err;                                     
                    if(data) {
                        res.render("list-view",{"userInfo":data});
                    }             
                }).limit(10);               
                break;
            case "laboratories":
                model.user.find({type:"Laboratory"},{firstname:1,lastname:1,address:1,profile_url:1,profile_pic_url: 1},function(err,data){
                    if(err) throw err;                                    
                    if(data) {
                        res.render("list-view",{"userInfo":data});
                    }             
                }).limit(10);             
                break;
            case "radiology":
                model.user.find({type:"Radiology"},{firstname:1,lastname:1,address:1,profile_url:1,profile_pic_url: 1},function(err,data){
                    if(err) throw err;                                   
                    if(data) {
                        res.render("list-view",{"userInfo":data});
                    }             
                }).limit(10);             
                break;
            case "fitness":
                model.user.find({type:"Fitness"},{firstname:1,lastname:1,address:1,profile_url:1,profile_pic_url: 1},function(err,data){
                    if(err) throw err;                                
                    if(data) {
                        res.render("list-view",{"userInfo":data});
                    }             
                }).limit(10);             
                break;
            default:
                res.sendFile(path.join(__dirname + "/404.html"));            
        }
    });

    router.get("/users/cities",function(req,res){
         model.user.find(
            {},{
                city:1,
                type:1
            },function(err,data){
            if(err) throw err;
            console.log(data);
            if(data) {
                var allUsers = {};
                var allCity = {}; 
                allUsers.cities = [];  
                allUsers.total_doctors = 0;
                allUsers.total_hospitals = 0;
                allUsers.total_clinics = 0;
                allUsers.total_pharmarcy = 0;
                allUsers.total_radiology = 0;
                allUsers.total_laboratory = 0;
                allUsers.total_fitness = 0;
                for(var i = 0; i < data.length; i++){
                    if(!allCity.hasOwnProperty(data[i].city)){
                        allCity[data[i].city] = data[i].city;
                        allUsers.cities.push(data[i].city);
                    }                                                     
                    switch(data[i].type){
                        case "Doctor":
                           allUsers.total_doctors++;
                        break;
                        case "Hospital":
                           allUsers.total_hospitals++;
                        break;
                        case "Clinic":
                           allUsers.total_clinics++;
                        break;
                        case "Phamarcy":
                           allUsers.total_phamarcy++;
                        break;
                        case "Laboratory":
                           allUsers.total_radiology++;
                        break;
                        case "Radiology":
                           allUsers.total_laboratory++;
                        break;
                        case "Fitness":
                           allUsers.total_fitness++;
                        break;
                        default:
                        break;
                    }
                }
                
                res.send(allUsers);
            }                                  
            }).limit(1000);                
    });

  router.get("/ranking/views/:id",function(req,res){
        model.user.findOne({user_id: req.params.id},function(err,user){            
            if(err) throw err;
            res.render("doctor-details",{"userInfo":user});
        });
    });

  

    router.get("/user/find-specialist",function(req,res){
        res.render("list-doctors",{"userInfo":req.user})
    });

    //common search for doctors route
    router.post("/user/find-group",function(req,res){
     if(Object.keys(req.body).length > 0) {
      console.log(req.body);
        model.user.find(
        req.body,{
            firstname:1,
            lastname:1,
            address:1,
            profile_url:1,
            profile_pic_url: 1,
            introductory:1,
            education:1,
            sub_specialty:1,
            specialty:1,
            procedure:1,
            work_place:1,
            phone:1,
            experience:1,
            country: 1,
            city:1,
            user_id:1                
        },function(err,data){
        if(err) throw err;
            res.send(data)               
        }).limit(1000);
     } else {
         res.end();
     }                
    });

    //refine search route for search for doctors
    router.post("/user/refine-find-group",function(req,res){
     if(Object.keys(req.body).length > 0) {
      console.log(req.body);
      var projection = {
            firstname:1,
            lastname:1,
            address:1,
            profile_url:1,
            profile_pic_url: 1,
            introductory:1,
            education:1,
            sub_specialty:1,
            specialty:1,
            procedure:1,
            work_place:1,
            phone:1,
            experience:1,
            country: 1,
            city:1                
        }
        if(req.body.procedure){
            model.user.find(
            {
                city: req.body.city,
                specialty: req.body.specialty,
                "sub_specialty.sub_specialty": req.body.sub_specialty,
                "procedure.procedure_description": req.body.procedure
            },projection,function(err,data){
            if(err) throw err;
                res.send(data)               
            }).limit(1000);
        } else {
             model.user.find(
            {
                city: req.body.city,
                specialty: req.body.specialty,
                "sub_specialty.sub_specialty": req.body.sub_specialty,
            },projection,function(err,data){
                console.log()
            if(err) throw err;
                res.send(data)               
            }).limit(1000);
            }
     } else {
         res.end();
     }                
    });
    
    //route for displaying the selected doctor on the patient dashbord page
    router.put("/user/book",function(req,res){
        if(req.user){
            model.user.findOne(req.body,{firstname:1,lastname:1,profile_url:1,profile_pic_url:1,specialty:1,office_hour:1,address:1,work_place:1,experience:1,education:1},function(err,data){
                console.log(data);
                res.send(data);
            })
        } else {
            res.json({isNotLoggedIn: true, error: "We notice you are NOT logged in!", beNice: "Please Login or Register to make use of these services"})
        }
    });

    //route for qusetions and requsts from patients to a doctor through the modal
    router.put("/patient/doctor/connection",function(req,res){
        if(req.user){
        var requestData = {};
        for(var item in req.body){
            if(req.body.hasOwnProperty(item) && item !== "receiverId") {
                requestData[item] = req.body[item];
            }
        }
        
        model.user.update(
        { _id: req.body.receiverId},
        { "$push": { notification: requestData} },
        function(err,info) {
           console.log(info);
           res.send("notified");// something with the result in here
        }
        );
        } else {
            res.send("not allowed");
        }
        
    });

    //this route gets all the notifications for the doctor that just logged in
    router.get("/doctor/notifications",function(req,res){
         if(req.user){
         model.user.findOne({email:req.user.email},{notification:1},function(err,data){
                console.log(data);
                res.send(data);
         })
        } else {
            res.send("not allowed");
        }
    });

    router.put("/doctor/acceptance",function(req,res){
         if(req.user){
            console.log(req.body)
             model.user.findOne(
                {
                    user_id: req.body.patientId
                },
                {
                    ewallet:1,
                    patient_notification: 1,
                    service_access: 1
                }
            )
            .exec(
                function(err, result){
                    console.log(result)
                    if(result.ewallet.available_amount > 0 && result.ewallet.available_amount >= req.body.consultation_fee) {
                        req.body.service_access = true;
                        result.ewallet.available_amount -= req.body.consultation_fee;
                    }
                    result.patient_notification.push({
                        doctor_id: req.body.doctor_id,
                        doctor_firstname: req.body.doctor_firstname,
                        doctor_lastname: req.body.doctor_lastname,
                        date: req.body.date,
                        consultation_fee: req.body.consultation_fee,
                        service_access: req.body.service_access,
                        doctor_profile_pic_url: req.body.doctor_profile_pic_url,
                        doctor_specialty: req.body.doctor_specialty
                    });

                    result.save(function(err){
                        if(err) throw err;
                        console.log("updated");                        
                        res.send("success");
                    });
                }
            )

            
        } else {
           res.send("not allowed");
        }
    });

    router.put("/patient/acceptance",function(req,res){
         if(req.user){         
            console.log(req.body)
             model.user.findOne(
                {
                    email: req.user.email
                },
                {
                    accepted_doctors : 1,
                    patient_notification: 1
                    
                }
            )
            .exec(
                function(err, result){
                    console.log(result)
                    for(var i = 0; i < result.patient_notification.length; i++){
                        if(result.patient_notification[i].doctor_id === req.body.doctor_id) {
                            result.accepted_doctors.push(req.body);
                            deleteFromPatientNotification(i);
                            updateDoctorPatientList();
                        }
                    }

                    function deleteFromPatientNotification(index) {
                        result.patient_notification.splice(index,1)
                        console.log(result.patient_notification)
                    }

                    function updateDoctorPatientList() {
                      model.user.findOne(
                        {
                          user_id: req.body.doctor_id
                        },
                        {
                          doctor_patients_list:1
                        }
                      )
                      .exec(function(err,data){
                        data.doctor_patients_list.push({
                          patient_firstname: req.user.firstname,
                          patient_lastname: req.user.lastname,
                          patient_id: req.user.user_id,
                          patient_profile_pic_url: req.user.profile_pic_url
                        })

                        data.save(function(err){
                        if(err) throw err;
                        console.log("patient save in doctor's list")
                        })
                      })


                    }
                    
                    result.save(function(err){
                        if(err) throw err;
                        console.log("note deleted");                        
                        res.send("notification deleted");
                    });
                    
                }
            )

            
        } else {
           res.end();
        }
    });
    
    //route for funding wallet
    router.patch("/user/fundwallet",function(req,res){
        model.user.updateOne({ email: req.user.email},function(err,result){
          if(err) throw err;
          console.log("wallet funded");
          console.log(result);
          res.end();
        })
    });

    router.get("/user/webrtc",function(req,res){
        res.send(true);
    });

    router.get("/user/logout",function(req,res){
        req.logout();
        res.redirect('/');
    });
}

module.exports = basicRoute;
/*console.log(req.body);
            console.log(req.files);
            var ima = req.files[0].path;
            var readable = fs.createReadStream(__dirname + "/" + ima);
	        var writable = fs.createWriteStream(__dirname + '/public/images/dashboard/profile.jpg');
            readable.on('data',function(chunk){	
		        writable.write(chunk);
	        });

            ///uploaded no image file just for it to be in the server.
            
            var no_profile_pic = new model.files({
                filename: req.files[0].filename,
                path: req.files[0].path,
                file_id: "nopic"
            });

            no_profile_pic.save(function(err){
                if(err) throw err;
                console.log("file saved");
            })*/
