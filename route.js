'use strict';
var path = require('path');
var route = require('./config');
var router = route.router;
var fs = require("fs");
var dateTime = require("node-datetime");

//var token = require("./twilio");
//var randomUserName = require("./randos");

var basicRoute = function (model) {

  router.get("/",function (req,res) {
    if(req.user){
     switch(req.user.type){
        case "Doctor":
         res.render("profile",{"person":req.user});
         break;
        case "Patient":
          res.render("patient",{"userInfo": req.user});
          break;
        case "Pharmacy":
          res.render("pharmacy",{"userInfo":req.user});
          break;
        case "Laboratory":
          res.render("laboratory",{"userInfo":req.user});
          break;
        case "Radiology":
          res.render("radiology",{"userInfo":req.user});
          break;              
        default:
         res.render("medical",{"userInfo":req.user});
         break;

         //do for fitness center and physiotherapy
     }
    } else {
     res.render('index',{"message":""});
    }
  });

  router.get("/home",function (req,res) {    
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
  });

  router.get("/medical-center/pharmacy",function(req,res){
      if(req.user){
         res.render("pharmacy",{"userInfo": req.user});        
      } else {
        res.redirect('/');
      }
  });

  router.get("/medical-center/radiology",function(req,res){
      if(req.user){
         res.render("radiology",{"userInfo": req.user});        
      } else {
        res.redirect('/');
      }
  })

  router.get("/medical-center/laboratory",function(req,res){
      if(req.user){
         res.render("laboratory",{"userInfo": req.user});        
      } else {
        res.redirect('/');
      }
  })//do for fitness center and physiotherapy



  /*router.get("/medical-center/view",function(req,res){
      if(req.user){
         res.render("pharmacy",{"userInfo": req.user});
        switch(req.user.type){
          case "Pharmacy":
           res.render("pharmacy",{"userInfo": req.user});
           break;
          case "Laboratory":
            res.render("laboratory",{"userInfo": req.user});
            break;
          case "Radiology":
            res.render("radiology",{"userInfo": req.user});
            break;
          default:
          res.redirect("/home");
          break;
       }
      } else {
        res.redirect('/');
      }
  })*/
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

  router.get('/download/scan-image/:filename',function(req,res){
    console.log(req.params)
    var file = __dirname + "/uploads/" + req.params.filename;
    res.download(file); // Set disposition and send it.
  });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
                var pic = "/download/profile_pic/"  + req.files[0].filename;      
                res.send(pic);   //repalce with "success" as fallback               
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
    // fetch data for patient profile update inner page
    router.get("/profile/getDetails",function(req,res){
        if(req.user) {
            res.send({
                profile_pic_url: req.user.profile_pic_url,
                firstname: req.user.firstname,
                lastname: req.user.lastname,
                age: req.user.age,
                gender: req.user.gender,
                address: req.user.address,
                state: req.user.state,
                city: req.user.city,
                marital_status: req.user.marital_status,
            })
        } else {
            res.end("error: Not authorized")
        }
    });
    // put updated data to the database.
    router.put("/patient-profile/update", function(req,res){
        if(req.user){
            model.user.update({email: req.user.email},req.body,function(err,info){
                console.log(info)
                res.send("updated");
            });
        } else {
            res.end("error: Not authorized")
        }
    })

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
            case "pharmacy":
                model.user.find({type:"Pharmacy"},{firstname:1,lastname:1,address:1,profile_url:1,profile_pic_url: 1},function(err,data){
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
                        case "Pharmacy":
                           allUsers.total_pharmacy++;
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
        { "$push": { doctor_notification: requestData} },
        function(err,info) {          
           res.send("notified");
        }
        );
        } else {
            res.send("not allowed");
        }
        
    });

    //this route gets all the notifications for the doctor that just logged in
    router.get("/doctor/notifications",function(req,res){
         if(req.user){
         model.user.findOne({email:req.user.email},{doctor_notification:1,_id:0},function(err,data){                
                res.send(data);
         })
        } else {
            res.send("not allowed");
        }
    });

     router.get("/doctor/get-patient-prescription-request",function(req,res){
         if(req.user){
         model.user.findOne({email:req.user.email},{doctor_prescriptionRequest:1,_id:0},function(err,data){                
            res.send(data);
         })
        } else {
            res.send("not allowed");
        }
    });

    router.put("/doctor/acceptance",function(req,res){
         if(req.user){           
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
    

    //this router gets all the patient medical records and prescriptions and send it to the front end as soon as the patient logs in. 
    //the data is sent as json and the controller that receives it on the front end is "patientPanelController" .
    router.get("/patient-panel/get-medical-record",function(req,res){
      if(req.user) {
        model.user.findOne({email: req.user.email},{medical_records: 1,medications:1},function(err,data){
          res.json({medical_records: data.medical_records,prescriptions: data.medications})
          //Note from model, medications holds all prescriptions while medical_records holds all laboratory and radiology tests
          // though there is prescription property on medical_record obj but not used yet.
        })
      } else {
        res.end("Unauthorized access!!")
      }
    });

    //this route send all notification to the front end as soon as the patient logs in.
    router.get("/patient/get-notification",function(req,res){
      // You can set time interval on this block to notify patients on real time.
      if(req.user) {
        model.user.findOne({email:req.user.email},{patient_notification:1},function(err,patient_notification){
          if(err) throw err;
          res.send(patient_notification);
        });
        
      } else {
        res.end("Unauthorized access! Please log in")
      }
    });

    //this route gets all referral for a pharmacy.
    router.get("/pharmacy/get-referral",function(req,res){
      if(req.user){
        model.user.findOne({email:req.user.email},{referral:1},function(err,referral){
          res.send(referral);
        });        
      } else {
        res.end("Unauthorized access!! Please log in")
      }
    });

    //this route gets a notifications for the fn getAllNotification for pharmacy on the client.
    
    //11/4/2016
    router.put("/doctor/specific-patient",function(req,res){
      if(req.user){
        var projection = {
            firstname: 1,
            lastname: 1,
            profile_pic_url: 1,       
            address: 1,
            city: 1,
            country: 1,
            age: 1,
            gender: 1,
            body_weight: 1,
            medical_records: 1,
            user_id: 1,
            type: 1

        }
        model.user.findOne({ user_id: req.body.id},projection,function(err,data){
            if(err) throw err;
            res.send(data);
        });

      } else {
        res.end("Not allowed");
      }
    });

    router.put("/doctor/get-patient/medication",function(req,res){
      if(req.user) {        
        model.user.findOne({user_id: req.body.id},{medications:1},function(err,prescriptions){
          if(err) throw err;
          prescriptions.user = req.user.user_id;
          res.json({medications:prescriptions.medications,user: req.user.user_id});
        });
      } else {
        res.end("Unauthorized access!!!")
      }
    });

    router.put("/doctor/get-patient/medical-record",function(req,res){
      if(req.user){
        model.user.findOne({user_id: req.body.id},{medical_records:1},function(err,records){
          res.send(records);
        });
      } else {
        res.end("Unauthorized access!! Please Log in ");
      }
    });

    router.put("/patient/acceptance",function(req,res){
         if(req.user){         
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
                    for (var i = 0; i < result.patient_notification.length; i++) {
                        if (result.patient_notification[i].doctor_id === req.body.doctor_id) {
                            result.accepted_doctors.push(req.body);
                            deleteFromPatientNotification(i);
                            updateDoctorPatientList();
                        }
                    }

                    function deleteFromPatientNotification(index) {
                        result.patient_notification.splice(index,1);                                  
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

    router.put("/patient/acceptance/prescription",function(req,res){
      if(req.user){                  
        model.user.findOne(
                {
                    email: req.user.email
                },
                {                    
                    patient_notification: 1
                    
                }
            )
            .exec(function(err,result){
              for (var i = 0; i < result.patient_notification.length; i++) {
                  if (result.patient_notification[i].doctor_id === req.body.doctor_id) {                      
                      deleteFromPatientNotification(i);                      
                  }
              }

              function deleteFromPatientNotification (index) {
                result.patient_notification.splice(index,1);               
              }

              result.save(function(err){
                  if(err) throw err;                                                      
                  res.send("deleted");
              });
            });
      } else {
        res.end("Unauthorized Access");
      }

    });

  // this route runs when the patients wants to view his prescription track record. ie patient wants to see 
    //where all his prescriptions has been send sent to.
    router.get("/patient/get-prescription/track-record",function(req,res){
      if(req.user){
        console.log(req.user.prescription_tracking);
        res.send(req.user.prescription_tracking);
      } else {
        res.end("Unauthorized access");
      }
    });

    router.put("/patient/specific-doctor",function(req,res){
        //finds specific doctor and sends to the client.
        if(req.user){
          var projection = {
              firstname: 1,
              lastname: 1,
              profile_pic_url: 1,
              office_hour: 1,
              profile_url: 1,
              specialty: 1,
              date: 1,
              address: 1,
              work_place: 1
          }
          model.user.findOne({ user_id: req.body.id},projection,function(err,data){
              if(err) throw err;
              res.send(data);
          })
        }
    });

    //patient searching for a pharmacy to forward his prescription route handlers.
    router.get("/patient/getAllPharmacy",function(req,res){
        //gets all pharmacy in the database based on patient's location.
        if(req.user){
          var projection = {
              name: 1,
              address: 1,
              city: 1,
              country: 1,
              rating: 1,
              profile_pic_url: 1,
              user_id: 1,
              type:1
          }
          model.user.find({type:"Pharmacy",city:'Enugu'},projection,function(err,data){ //remenber to replace "Enugu" with req.user.city
              if(err) throw err;
              res.send(data);
          });
        } else {
          res.end("Unauthorized access!")
        }
    });

    router.put("/patient/pharmacy/refined-search",function(req,res){
        //coming from thesame controller as above. finds the pharmacy based on the patient search criteria in the req.body.
        console.log(req.body)
        var projection = {
            name: 1,
            address: 1,
            city: 1,
            country: 1,
            rating: 1,
            profile_pic_url: 1,
            user_id: 1,
            type: 1
        }
        model.user.find(req.body,projection,function(err,data){
            if(err) throw err;
            res.send(data);
        })
    });

    router.put("/patient/pharmacy/referral-by-patient",function(req,res){
      //this route handle patients sending his prescription to a pharmacy by himself.Therefore the prescription obj already exist. justs to
      //add the prescription object to the chosen pharmacy.
      if(req.user){
        console.log(req.body)
        model.user.findOne(
          {
            user_id: req.body.user_id
          },
          {
            referral: 1,
            diagnostic_center_notification:1,
            city:1,
            name:1,
            country:1

          }).exec(function(err,pharmacy){
            var date = new Date();
            var ref_id = Math.floor(Math.random() * 9999999);
            var title = (req.user.type === "Doctor") ? 'Dr.': "";            
            var refObj = {
              ref_id: ref_id,
              referral_firstname: req.user.firstname,
              referral_lastname: req.user.lastname,
              referral_title: title,
              referral_id: req.body.id,    
              date: date,
              pharmacy: req.body
            }
            var pharmacyNotification = {
              sender_firstname: req.user.firstname,
              sender_lastname: req.user.lastname,
              sender_title : title,
              sent_date: date,
              ref_id: ref_id,
              note_id: ref_id,
              sender_profile_pic_url: req.user.profile_pic_url,
              message: 'Hi, I need your services'
            }

            var track_record = {
                date: date,
                center_name: pharmacy.name,
                address: pharmacy.address,
                ref_id: ref_id,
                city: pharmacy.city,
                country: pharmacy.country,
                prescriptionId: req.body.prescriptionId
            };

            model.user.findOne({user_id: req.user.user_id},{prescription_tracking:1}).exec(function(err,patient){
              patient.prescription_tracking.unshift(track_record);
              patient.save(function(err,info){
                if(err) throw err;
                console.log(info);
              });
            });

            pharmacy.referral.push(refObj);
            pharmacy.diagnostic_center_notification.push(pharmacyNotification);

            pharmacy.save(function(err,info){
              if(err) throw err;
              console.log(info);
            });

           res.send({success:true,ref_id: ref_id}); 
          });

      } else {
        res.end("Unauthorized access. You need to log in")
      }

    });

    router.put("/patient/pharmacy/referral-by-pharmacy",function(req,res){
      //this route takes runs when a pharmacy wish to forward unavailable drugs in the center to another pharmacy.
      if(req.user){
        model.user.findOne(
          {
            user_id: req.body.user_id
          },
          {
            referral: 1,
            diagnostic_center_notification:1,
            name:1,
            city:1,
            address:1,
            country: 1

          }).exec(function(err,pharmacy){
            var date = new Date();
            var note_id = Math.floor(Math.random() * 9999999);
            var title = (req.user.type === "Doctor") ? 'Dr.': req.user.name;            
            var refObj = {
              ref_id: req.body.ref_id,              
              referral_title: title,
              referral_id: req.user.user_id,    
              date: date,
              pharmacy: req.body.pharmacy 
            }
            var pharmacyNotification = {              
              sender_firstname : title,
              sent_date: date,
              ref_id: req.body.ref_id,
              note_id: note_id,
              sender_profile_pic_url: req.user.profile_pic_url,
              message: 'Hi, please we dont have the following drugs,maybe you can help.'
            }

            var track_record = {
                date: date,
                center_name: pharmacy.name,
                address: pharmacy.address,
                city: pharmacy.city,
                country: pharmacy.country,
                ref_id: req.body.ref_id,
                prescriptionId: req.body.pharmacy.prescriptionId
            };

            model.user.findOne({user_id:req.body.pharmacy.patient_id},{prescription_tracking:1}).exec(function(err,patient){
              if(err) throw err;
              patient.prescription_tracking.unshift(track_record);
              patient.save(function(err,info){
                if(err) throw err;
                console.log("track record save " + "----" + info)
              })
            })

            pharmacy.referral.push(refObj);
            pharmacy.diagnostic_center_notification.push(pharmacyNotification);
            pharmacy.save(function(err,info){
              if(err) throw err;
              console.log(info);
            });

           res.send({success:true,ref_id: req.body.ref_id}); 
          });

      } else {
        res.end("Unauthorized access. You need to log in")
      }
    });

    router.put("/patient/pharmacy/referral",function(req,res){
      //if prescription is forwarded by a doctor to a pharmacy it talks different form. ie doctor can send prescription
      //straight to a pharmacy. later the patient will be notified. 
      //this block represents doctor action by forwarding prescription to a pharmacy.
      //any data sent to a diagnostic center other than to the patient himself is seens a a referral by this application.      
      if(req.user){        
         model.user.findOne(
          {
            user_id: req.body.user_id
          },
          {
            referral: 1,
            name:1,
            address:1,
            diagnostic_center_notification:1,
            city:1,
            country:1

          }).exec(function(err,pharmacy){ 
          console.log(pharmacy)           
            if(err) throw err;            
            var date = new Date();
            var ref_id = Math.floor(Math.random() * 9999999);

            var preObj = {              
              allergy: req.body.allergy,
              date: date,
              prescriptionId: req.body.prescriptionId,
              doctor_firstname: req.user.firstname,
              doctor_lastname: req.user.lastname,
              doctor_address: req.user.address,   
              doctor_id: req.user.user_id,
              doctor_work_place: req.user.work_place,
              doctor_city: req.user.city,
              doctor_country: req.user.country,
              lab_analysis: req.body.lab_analysis,
              scan_analysis: req.body.scan_analysis,
              Doctor_profile_pic_url: req.user.profile_pic_url,
              patient_id : req.body.patient_id,
              patient_profile_pic_url: req.body.patient_profile_pic_url,
              patient_firstname: req.body.firstname,
              patient_lastname: req.body.lastname,
              patient_address: req.body.address,
              patient_gender: req.body.gender,
              patient_age: req.body.age,
              patient_city: req.body.city,
              patient_country: req.body.country,
              prescription_body: req.body.prescriptionBody
            }

            var title = (req.user.type === "Doctor") ? 'Dr.': "";                        
            var refObj = {
              ref_id: ref_id,
              referral_firstname: req.user.firstname,
              referral_lastname: req.user.lastname,
              referral_title: title,
              referral_id: req.body.id,    
              date: date,
              pharmacy: preObj
            }

            var pharmacyNotification = {
              sender_firstname: req.user.firstname,
              sender_lastname: req.user.lastname,
              sender_title : title,
              sent_date: date,
              ref_id: ref_id,
              note_id: ref_id,
              sender_profile_pic_url: req.user.profile_pic_url,
              message: 'Please kindly administer the following prescriptions to my patient.'
            }

            pharmacy.referral.push(refObj);
            pharmacy.diagnostic_center_notification.push(pharmacyNotification);

            model.user.findOne(
              {user_id: req.body.patient_id},{patient_notification:1,firstname:1,lastname:1,prescription_tracking:1,medications:1}
              ).exec(function(err,data){
              if(err) throw err;
              console.log(data);
               var date = new Date();
               var msg = "your prescription has been forwarded to " + pharmacy.name + " @ " + pharmacy.address +
                " by Dr. " + req.user.firstname + req.user.lastname +
               " on " + date + "<br/>" + " Referrence number is " + ref_id;        
                data.patient_notification.push({
                doctor_firstname: req.user.firstname,
                doctor_lastname: req.user.lastname,
                doctor_profile_pic_url: req.user.profile_pic_url,
                doctor_specialty: req.user.specialty,
                doctor_id: req.user.user_id,
                date: date,
                message: msg,

              });

              var track_record = {
                date: date,
                center_name: pharmacy.name,
                address: pharmacy.address,
                ref_id: ref_id,
                city: pharmacy.city,
                country: pharmacy.country,
                prescriptionId: req.body.prescriptionId
              };

              data.medications.push(preObj);
              data.prescription_tracking.unshift(track_record);

              data.save(function(err,info){
                if(err) throw err;
                console.log("patient notified");            
              });
            });

            pharmacy.save(function(err,info){             
              if(err) throw err;             
              console.log("prescription saved");                           
            });

            res.send({success:true,ref_id: ref_id}); 
        });        
     
      } else {
        res.end("Unauthorized Access");
      }   
    });    

    //prescription foewarded by the doctor to a patient inbox
    router.put("/patient/forwarded-prescription",function(req,res){     
      if(req.user){         
        model.user.findOne(
          {
            user_id: req.body.id
          },           
          {
            medications: 1,          
          }).exec(function(err,result){            
            if(err) throw err;            
            var date = new Date();                
            var preObj = {              
              allergy: req.body.allergy,
              date: date,
              prescriptionId: req.body.prescriptionId,
              doctor_firstname: req.user.firstname,
              doctor_lastname: req.user.lastname,
              doctor_address: req.user.address,   
              doctor_id: req.user.user_id,
              doctor_work_place: req.user.work_place,
              doctor_city: req.user.city,
              doctor_country: req.user.country,
              lab_analysis: req.body.lab_analysis,
              scan_analysis: req.body.scan_analysis,
              Doctor_profile_pic_url: req.user.profile_pic_url,
              patient_id: req.body.patient_id,
              patient_profile_pic_url: req.body.patient_profile_pic_url,
              patient_firstname: req.body.firstname,
              patient_lastname: req.body.lastname,
              patient_address: req.body.address,
              patient_gender: req.body.gender,
              patient_age: req.body.age,
              patient_city: req.body.city,
              patient_country: req.body.country,
              prescription_body: req.body.prescriptionBody
            }           
            result.medications.push(preObj);
            result.save(function(err,info){             
              if(err) throw err;             
              console.log("prescription saved");          
            });
        });

        model.user.findOne({user_id: req.body.id},{patient_notification:1,firstname:1,lastname:1}).exec(function(err,data){
          if(err) throw err;
           var date = new Date(); 
            data.patient_notification.push({
            doctor_firstname: req.user.firstname,
            doctor_lastname: req.user.lastname,
            doctor_profile_pic_url: req.user.profile_pic_url,
            doctor_specialty: req.user.specialty,
            doctor_id: req.user.user_id,
            date: date,
            message: "You have new unread prescription!"
          });

          data.save(function(err,info){
            if(err) throw err;            
            res.send("success! prescription forwarded to " + data.firstname + " " + data.lastname);                 
          });
        });
                     
      }
    });

    //this route gets all patients accepted doctors
    router.get("/patient/my-doctors",function(req,res){
      if(req.user){
        model.user.findOne({email: req.user.email},{accepted_doctors:1,_id:0},function(err,data){
          if(err) throw err;
          res.send(data);
        });
      } else {
        res.end("Unauthorized access!!!");
      }
    });

    //this route the patient forward his test result to his doctor for prescription.
    router.put("/patient/test-result/forward",function(req,res){
      if(req.user) {
        model.user.findOne({user_id: req.body.doctorId},{doctor_prescriptionRequest:1}).exec(function(err,data){
          if(err) throw err;
          req.body.sender_firstname = req.user.firstname;
          req.body.sender_lastname = req.user.lastname;
          req.body.sender_profile_pic_url = req.user.profile_pic_url;
          req.body.sender_id = req.user.user_id;
          req.body.status = "new";
          data.doctor_prescriptionRequest.push(req.body)
          data.save(function(err,info){
            if(err) throw err;
          });
          res.json({status: "success"})
        });
      } else {
        res.end("Unauthorized access!!!");
      }
    });

    //this route gets the lists of all prescription request from the doctor's patients
    router.get("/doctor/get-patient-request",function(req,res){
      if(req.user){
        model.user.findOne({email: req.user.email},{doctor_prescriptionRequest:1,_id:0},function(err,data){
          res.send(data.doctor_prescriptionRequest);
        });
      } else {
        res.end("Unauthorized access!!!")
      }
    });

    //this route deletes already attended prescription request from doctor_prescriptionRequest list and save to the database.
    router.delete("/doctor/delete-request",function(req,res){

    });
    
    //this router takes call of pahrmacy search for a patient prescription from the data base;
    router.put("/pharmacy/find-patient/prescription",function(req,res){
       if(req.user){     
        model.user.findOne({email:req.user.email},{referral:1},function(err,data){
            if (err) throw err;           
              switch(req.body.criteria) {
                case "refIdCriteria":
                  var toNum = parseInt(req.body.ref_id);                
                  var elementPos = data.referral.map(function(x) {return x.ref_id; }).indexOf(toNum);
                  var objectFound = data.referral[elementPos];
                  console.log(objectFound)
                  if(objectFound === undefined) {
                   res.send({error: "Patient prescription not found"})
                  } else {
                    res.send({data: objectFound});
                  }
                  break;

                case "phoneCriteria":
                  var elementPos = data.referral.map(function(x) {return x.phone; }).indexOf(req.body.phone);
                  var objectFound = data.referral[elementPos];
                  if(objectFound === undefined) {
                   res.send({error: "Patient prescription not found"})
                  } else {
                    res.send({data: objectFound});
                  }
                  break;

                default:
                  res.send({error: "Please enter search creteria"});
                  break
              }            
        });
      } else {
        res.end("Unauthorized access");
      }
    });

    router.put("/laboratory/find-patient/lab-test",function(req,res){
      if(req.user){     
        model.user.findOne({email:req.user.email},{referral:1},function(err,data){
            if (err) throw err;           
              switch(req.body.criteria) {
                case "refIdCriteria":
                  var toNum = parseInt(req.body.ref_id);                
                  var elementPos = data.referral.map(function(x) {return x.ref_id; }).indexOf(toNum);
                  var objectFound = data.referral[elementPos];
                  console.log(objectFound)
                  if(objectFound === undefined) {
                   res.send({error: "Patient lab test not found"})
                  } else {
                    res.send({data: objectFound});
                  }
                  break;

                case "phoneCriteria":
                  var elementPos = data.referral.map(function(x) {return x.phone; }).indexOf(req.body.phone);
                  var objectFound = data.referral[elementPos];
                  if(objectFound === undefined) {
                   res.send({error: "Patient lab test not found"})
                  } else {
                    res.send({data: objectFound});
                  }
                  break;

                default:
                  res.send({error: "Please enter search creteria"});
                  break;
              } 
        });
      } else {
        res.end("Unauthorized access");
      }
    });

    router.get("/laboratory/get-referral",function(req,res){
      if(req.user){
        model.user.findOne({password:req.user.password},{referral:1,_id:0},function(err,data){
          res.send(data.referral);
        })
      } else {
        res.end("Unauthorized access")
      }

    });

    router.get("/radiology/get-referral", function(req,res){
       if(req.user){
        model.user.findOne({password:req.user.password},{referral:1,_id:0},function(err,data){
          res.send(data.referral);
        })
      } else {
        res.end("Unauthorized access")
      }
    });

    //this route handles test result sent by a laboratory to update existing doctor/patient session that initiated such test request.
    router.put("/laboratory/test-result/session-update",function(req,res){
      //note that sms will be sent to patient and doctor when a lab test result is available.
      if(req.user) {       
        model.user.findOne({"doctor_patient_session.session_id": req.body.laboratory.session_id},{doctor_patient_session:1}).exec(function(err,data){
          if(err) throw err;
          var elementPos = data.doctor_patient_session.map(function(x) {return x.session_id; }).indexOf(req.body.laboratory.session_id);
          var objectFound = data.doctor_patient_session[elementPos];         

          

          var pos = objectFound.diagnosis.laboratory_test_results.map(function(x) { return x.test_id;}).indexOf(req.body.laboratory.test_id)
          var theObj = objectFound.diagnosis.laboratory_test_results[pos];         
          theObj.receive_date = req.body.laboratory.date;
          theObj.test_to_run = req.body.laboratory.test_to_run;
          theObj.report = req.body.laboratory.report;
          theObj.conclusion = req.body.laboratory.conclusion;
          theObj.sent_date = req.body.date;
          theObj.test_ran_by = req.user.name;
           
          
          //the doctors session for a patient is updated, and patient dashboard is called for update.
          //objectFound.diagnosis.laboratory_test_results.unshift(testResult);          
          data.save(function(err,info){
            if(err) {
              res.send({status: "error"})
            } else {         
              updatePatient();
              updateTheCenter();
            }
          });        

        });

        function updatePatient() {
          //here patient test result is updated.
          model.user.findOne({user_id: req.body.laboratory.patient_id},{medical_records: 1}).exec(function(err,data){
            if(err) throw err;
            var elementPos = data.medical_records.laboratory_test.map(function(x) {return x.session_id; }).indexOf(req.body.laboratory.session_id);
            var objectFound = data.medical_records.laboratory_test[elementPos];           
            objectFound.report = req.body.laboratory.report || objectFound.report;
            objectFound.conclusion = req.body.laboratory.conclusion || objectFound.conclusion;
            objectFound.test_to_run = req.body.laboratory.test_to_run || objectFound.test_to_run;
            objectFound.sent_date = req.body.date || objectFound.sent_date;
            objectFound.test_ran_by = req.user.name;
            objectFound.receive_date = req.body.laboratory.date;

            data.save(function(err,info){
              if(err) res.send({status: "error"});           
              res.send({status: "success"});
            });
          });
        }

        function updateTheCenter() {
          model.user.findOne({email: req.user.email},{referral:1}).exec(function(err,data){
            if(err) throw err;
            var elementPos = data.referral.map(function(x) {return x.session_id; }).indexOf(req.body.laboratory.session_id);
            var objectFound = data.referral[elementPos];
            objectFound.laboratory.attended = true; // this makes a lab that has been sent to a doctor and no longer on the pending list of front end

            data.save(function(err,info){
              if(err) throw err;
            });
          });
        }

      } else {
        res.end("Unauthorized access");
      }
    });

    
    //updating radiology result in doctor's treatment page with patient.
    router.put("/radiology/test-result/session-update",function(req,res){      
      if(req.user) {        
        model.user.findOne({"doctor_patient_session.session_id": req.body.radiology.session_id},{doctor_patient_session:1}).exec(function(err,data){
          if(err) throw err;
          var elementPos = data.doctor_patient_session.map(function(x) {return x.session_id; }).indexOf(req.body.radiology.session_id);
          var objectFound = data.doctor_patient_session[elementPos];     

          //the doctors session for a patient is updated, and patient dashboard is called for update.
          var pos = objectFound.diagnosis.radiology_test_results.map(function(x) { return x.test_id;}).indexOf(req.body.radiology.test_id)
          var theObj = objectFound.diagnosis.radiology_test_results[pos];         
          theObj.receive_date = req.body.radiology.date;
          theObj.test_to_run = req.body.radiology.test_to_run;
          theObj.report = req.body.radiology.report;
          theObj.conclusion = req.body.radiology.conclusion;
          theObj.sent_date = req.body.date;
          theObj.test_ran_by = req.user.name;
          theObj.files = req.body.radiology.filesUrl;


          data.save(function(err,info){
            if(err) res.send({status: "error"});         
            updatePatient();
            updateTheCenter();
          });        

        });

        function updatePatient() {         
          //here patient test result is updated.
          model.user.findOne({user_id: req.body.radiology.patient_id},{medical_records: 1}).exec(function(err,data){
            if(err) throw err;
            var elementPos = data.medical_records.radiology_test.map(function(x) {return x.session_id; }).indexOf(req.body.radiology.session_id);
            var objectFound = data.medical_records.radiology_test[elementPos];           
            objectFound.report = req.body.radiology.report || objectFound.report;
            objectFound.conclusion = req.body.radiology.conclusion || objectFound.conclusion;
            objectFound.test_to_run = req.body.radiology.test_to_run || objectFound.test_to_run;
            objectFound.sent_date = req.body.date || objectFound.sent_date;
            objectFound.receive_date = req.body.radiology.date;
            objectFound.files = req.body.radiology.filesUrl;


            data.save(function(err,info){
              if(err) res.send({status: "error"});           
              res.send({status: "success"});
            });
          });
        }

        function updateTheCenter() {
          model.user.findOne({email: req.user.email},{referral:1}).exec(function(err,data){
            if(err) throw err;
            var elementPos = data.referral.map(function(x) {return x.session_id; }).indexOf(req.body.radiology.session_id);
            var objectFound = data.referral[elementPos];
            objectFound.radiology.attended = true; // this makes a lab that has been sent to a doctor and no longer on the pending list of front end

            data.save(function(err,info){
              if(err) throw err;
            });
          });
        }

      } else {
        res.end("Unauthorized access");
      }

    });

    router.put("/radiology/upload-scan",function(req,res){
      if(req.user){        
        console.log(req.files)
        console.log(req.body)
        var fileUrl = [];
        for(var i = 0; i < req.files.length; i++) {
          var url = "/download/scan-image/" + req.files[i].filename;
          fileUrl.push(url)
        }
        res.send(fileUrl)
      } else {
        res.end('Unauthorized access!!!')
      }
    })
    
    //route for funding wallet
    router.patch("/user/fundwallet",function(req,res){
      model.user.updateOne({ email: req.user.email},function(err,result){
        if(err) throw err;
        console.log("wallet funded");
        console.log(result);
        res.end();
      });
    });

    
    router.get("/doctor/call",function(req,res){
      if(req.user){
        res.render("video-chat",{"person":req.user})
      } else {
        res.end("Unauthorized access!")
      }

    });

    router.get("/patient/call",function(req,res){
      if(req.user){
        res.render("video-chat2",{"person":req.user})
      } else {
        res.end("Unauthorized access!")
      }

    });

    router.get("/chat",function(req,res){
      
    });

    //doctor creates session with a patient
    router.post("/doctor/patient-session",function(req,res){
      console.log(req.body)
      if(req.user){        
        var session_id = Math.floor(Math.random() * 99999999999999922888);

        var connectObj = {
          presenting_complain: req.body.complain,
          history_of_presenting_complain: req.body.historyOfComplain,
          past_medical_history: req.body.pastMedicalHistory,
          social_history: req.body.socialHistory,
          family_history: req.body.familyHistory,
          drug_history: req.body.drugHistory,
          summary: req.body.summary,
          provisional_diagnosis: req.body.provisionalDiagnosis,
        }

        if(req.body.appointment){
          var getNames = {
            firstname : req.body.appointment.firstname,
            lastname: req.body.appointment.lastname,
            patient_id: req.body.patient_id
          }
          req.body.appointment.firstname = req.user.firstname;
          req.body.appointment.lastname = req.user.lastname;
          req.body.appointment.address = req.body.appointment.address || req.user.address;
          req.body.appointment.title = "Dr";
          req.body.appointment.profilePic = req.user.profile_pic_url;   
          model.user.findOne({user_id:req.body.patient_id},{appointment:1}).exec(function(err,result){            
            if(err) throw err;
            result.appointment.unshift(req.body.appointment);
            result.save(function(err,info){
              if(err) throw err;
              if(info)
                tellDoctor(getNames);
            });
          });
        }

        var tellDoctor = function(names){          
          req.body.appointment.last_meeting = req.body.date;
          req.body.appointment.firstname = names.firstname;
          req.body.appointment.lastname = names.lastname;
          req.body.appointment.session_id = session_id;
          req.body.appointment.typeOfSession = req.body.typeOfSession,
          req.body.appointment.profilePic = req.body.appointment.profilePic;        
          model.user.findOne({user_id: req.user.user_id},{appointment:1}).exec(function(err,result){
            result.appointment.unshift(req.body.appointment);
            result.save(function(err,info){
              if(err) throw err;
              console.log(info);              
            });
          });
        }

        model.user.findOne({email:req.user.email},{doctor_patient_session:1}).exec(function(err,result){
          if(err) throw err;          
          req.body.session_id = session_id;
          result.doctor_patient_session.unshift(req.body);
          result.doctor_patient_session[0].diagnosis = connectObj;
          result.save(function(err,info){
            if(err) throw err;
            if(req.body.typeOfSession === "In-person meeting") {
              res.json({success: "success",session_id:session_id})
            } else {
              res.send("success");
            }            
          });
        });
      } else {
        res.end("Unauthorized access!");
      }
    });

    router.put("/doctor/appointment/view",function(req,res){
      if(req.user){
        model.user.findOne({"appointment.session_id": req.body.id},{appointment:1,_id:0},function(err,data){     
          if(err) throw err;
          var elementPos = data.appointment.map(function(x) {return x.session_id; }).indexOf(req.body.id);
          var objectFound = data.appointment[elementPos];          
          res.send(objectFound);         
        });
      } else {
        res.end("Unauthorized access")
      }
    });

    router.post("/doctor/get-session",function(req,res){
      if(req.user){
        model.user.findOne({"doctor_patient_session.session_id": req.body.sessionId},{doctor_patient_session:1},function(err,data){
          if(err) throw err;
          var elementPos = data.doctor_patient_session.map(function(x) {return x.session_id; }).indexOf(req.body.sessionId);
          var objectFound = data.doctor_patient_session[elementPos];      
          var sessionData = {
            typeOfSession: objectFound.typeOfSession,
            session_id: objectFound.session_id,
            patient_id: objectFound.patient_id,
            diagnosis: objectFound.diagnosis
          }
          
          res.send(sessionData);         
        });
      } else {
        res.end("Unauthorized access");
      }
    });

    router.put("/doctor/get-patient-sessions",function(req,res){
    console.log(req.body)      
      if(req.user){
         model.user.findOne({email: req.user.email},{doctor_patient_session:1},function(err,data){
          var data = data.doctor_patient_session;
          var allSession = [];        
          for(var i = 0; i < data.length; i++){
            if(data[i].patient_id === req.body.patient_id){
               allSession.push(data[i]);
            }
          }
          res.send(allSession);  
        });
      } else {
        res.end("Unauthorized access!!!")
      }
    });

    router.get("/treatment",function(req,res){
      if(req.user){
        model.user.findOne({email:req.user.email},function(err,user){
          if(err) throw err;
          res.render("treatment",{"person":user});
        });     
      } else {
        res.end("Unauthorized access!");
      }
    });

    //doctor updates changes doctor made when consulting the patient. based on the patient presenting complain and others
    router.put("/doctor/session-update/save-changes",function(req,res){
      if(req.user){
        model.user.findOne({"doctor_patient_session.session_id": req.body.session_id},{doctor_patient_session:1}).exec(function(err,data){
          if(err) throw err;
          var elementPos = data.doctor_patient_session.map(function(x) {return x.session_id; }).indexOf(req.body.session_id);
          var objectFound = data.doctor_patient_session[elementPos];

          if(req.body.general_examination)
            objectFound.diagnosis.general_examination = req.body.general_examination;

          if(req.body.systemic_examination)
            objectFound.diagnosis.systemic_examination = req.body.systemic_examination;

          if(req.body.final_diagnosis)
            objectFound.diagnosis.final_diagnosis = req.body.final_diagnosis; 

          objectFound.diagnosis.presenting_complain = req.body.presenting_complain;
          objectFound.diagnosis.history_of_presenting_complain = req.body.history_of_presenting_complain;
          objectFound.diagnosis.past_medical_history = req.body.past_medical_history;
          objectFound.diagnosis.social_history = req.body.social_history;
          objectFound.diagnosis.family_history = req.body.family_history;
          objectFound.diagnosis.drug_history = req.body.drug_history;
          objectFound.diagnosis.summary = req.body.summary;
          objectFound.diagnosis.provisional_diagnosis = req.body.provisional_diagnosis;


          data.save(function(err,info){
            if(err) {
              res.send({error:"failed"})
            } else {
              res.send({success:"success"})
            }
          });
        });

      } else {
        res.end("Unauthorized access!!!")
      }
    })

    //doctor finds the patient's lab tests if
    router.put("/doctor/get-test-result",function(req,res){
        if(req.user){         
          model.user.findOne({email: req.user.email},{doctor_patient_session:1}).exec(function(err,data){
            if(err) throw err;
            var elementPos = data.doctor_patient_session.map(function(x) {return x.session_id; }).indexOf(req.body.id);
            var objectFound = data.doctor_patient_session[elementPos];
            var sentObjArr = [];
            var count = 0;
            
            
            while(objectFound.diagnosis.laboratory_test_results.length > count) {             
              var ranTest = [];
              var testAndReport = [];
              var objectArr = objectFound.diagnosis.laboratory_test_results.map(function(x) {return x });              
              var objFound = objectArr[count];
             
              for(var i = 0; i < objFound.test_to_run.length; i++) {                
                if(objFound.test_to_run[i].select === true){
                  ranTest.push(objFound.test_to_run[i]);
                }
              }
              var splitReport = objFound.report.split(",");                            
              for(var j = 0; j < splitReport.length; j++) {
                var testObj = {};
                var seperateTestAndReport = splitReport[j].split(":");
                testObj['test'] = seperateTestAndReport[0];
                testObj['report'] = seperateTestAndReport[1];
                testAndReport.push(testObj);                
              }
              
              
              objFound.refinedReport = testAndReport;
              objFound.ranTest = ranTest;
              count++;
              
              var newObjToSend = {};
              newObjToSend.report = testAndReport;
              newObjToSend.ranTest = ranTest;
              newObjToSend.test_to_run = objFound.test_to_run;
              newObjToSend.conclusion = objFound.conclusion;
              newObjToSend.receive_date = objFound.receive_date;
              newObjToSend.sent_date = objFound.sent_date;

              sentObjArr.push(newObjToSend);           
            }
            
            res.json({result:sentObjArr});
          });
        } else {
          res.end("Unauthorized access!")
        }
    });
    //doctors finds the patient's scan if any
    router.put("/doctor/get-scan-result",function(req,res){/////////////////////////////
        if(req.user){
          console.log("radio test result ran broooooooooooooooo")
          model.user.findOne({email: req.user.email},{doctor_patient_session:1}).exec(function(err,data){
            if(err) throw err;
            var elementPos = data.doctor_patient_session.map(function(x) {return x.session_id; }).indexOf(req.body.id);
            var objectFound = data.doctor_patient_session[elementPos];
            var sentObjArr = [];
            var count = 0;
            

            
            while(objectFound.diagnosis.radiology_test_results.length > count) {             
              var ranTest = [];
              var testAndReport = [];
              var objectArr = objectFound.diagnosis.radiology_test_results.map(function(x) {return x });              
              var objFound = objectArr[count];
             
              for(var i = 0; i < objFound.test_to_run.length; i++) {                
                if(objFound.test_to_run[i].select === true){
                  ranTest.push(objFound.test_to_run[i]);
                }
              }
              var splitReport = objFound.report.split(",");                            
              for(var j = 0; j < splitReport.length; j++) {
                var testObj = {};
                var seperateTestAndReport = splitReport[j].split(":");
                testObj['test'] = seperateTestAndReport[0];
                testObj['report'] = seperateTestAndReport[1];
                testAndReport.push(testObj);                
              }
              
              
              objFound.refinedReport = testAndReport;
              objFound.ranTest = ranTest;
              count++;
              
              var newObjToSend = {};
              newObjToSend.report = testAndReport;
              newObjToSend.ranTest = ranTest;
              newObjToSend.test_to_run = objFound.test_to_run;
              newObjToSend.conclusion = objFound.conclusion;
              newObjToSend.receive_date = objFound.receive_date;
              newObjToSend.sent_date = objFound.sent_date;

              sentObjArr.push(newObjToSend);

            }

            res.json({result:sentObjArr})

          });
        } else {
          res.end("Unauthorized access!")
        }
    });


    router.get("/doctor/find-laboratory",function(req,res){
      if(req.user){
        model.user.find({type: "Laboratory",city: req.user.city,country: req.user.country},
          {name:1,address:1,user_id:1,city:1,country:1,profile_pic_url:1,type:1},
          function(err,data){
          if(err) throw err;
          res.send(data);
        }).limit(5000);
      } else {
        res.end("Unauthorized access!");
      }
    });

    router.put("/doctor/find-laboratory/search",function(req,res){
      if(req.user){
          if(!req.body.country)
            req.body.country = req.user.country;
          if(!req.body.city) 
            req.body.city = req.user.city;

          model.user.find({type: "Laboratory",city: req.body.city,country: req.body.country},
            {name:1,address:1,user_id:1,city:1,country:1,profile_pic_url:1,type:1},
            function(err,data){
            if(err) throw err;
            res.send(data);
          }).limit(5000);
        } else {
          res.end("Unauthorized access!")
        }
    });
    
    //this route takes care doctor sending new test to a laboratory.
    router.post("/doctor/send-test",function(req,res){
        if(req.user) {  
        var random = Math.floor(Math.random() * 9999999);
        var testId = Math.floor(Math.random() * 9999999999999999);       
        model.user.findOne({user_id: req.body.user_id},{diagnostic_center_notification:1,referral:1,address:1,name:1,city:1,country:1,phone:1,user_id:1})        
        .exec(function(err,result){
          if(err) throw err;        

          //center address and name obj to be passed to the patient.
          var centerObj = {
            name: result.name,
            address: result.address,
            city: result.city,
            country: result.country,
            phone: result.phone,
            id: result.user_id
          }

          var refObj = {
            ref_id: random,
            referral_firstname: req.user.firstname,
            referral_lastname: req.user.lastname,
            referral_title: req.user.title,
            referral_id: req.user.user_id,    
            date: req.body.date,        
            laboratory: {
              test_to_run : req.body.lab_test_list,
              patient_firstname: req.body.patient_firstname,
              patient_lastname: req.body.patient_lastname,
              patient_profile_pic_url: req.body.patient_profilePic,
              patient_title: req.body.patient_title,
              patient_phone: req.body.phone,
              session_id: req.body.session_id,
              patient_id: req.body.patient_id,
              test_id: testId,
              attended: false
            }                         
          }

          //this is notification for the center.
          var refNotification = {
            sender_firstname: req.user.firstname,
            sender_lastname: req.user.lastname,
            sender_title : req.user.title,
            sent_date: req.body.date,
            ref_id: random,
            note_id: random,
            sender_profile_pic_url: req.user.profile_pic_url,
            message: "Please run the test for my patient"
          }

          result.referral.push(refObj);
          result.diagnostic_center_notification.push(refNotification);

          result.save(function(err,info){
            if(err) throw err;            
          });
          tellPatient(centerObj);
        });

        var tellPatient = function(centerInfo){
          //remember sms will be sent to the patient
          model.user.findOne({user_id: req.body.patient_id},{medical_records: 1,user_id:1}).exec(function(err,record){            
            if(err) throw err;     
            var recordObj = {
              center_name: centerInfo.name,
              test_to_run: req.body.lab_test_list,
              center_address: centerInfo.address,
              center_city: centerInfo.city,
              center_country: centerInfo.country,
              center_phone: centerInfo.phone,
              center_id: centerInfo.id,
              patient_id: record.user_id,
              ref_id: random,
              referral_firstname: req.user.firstname,
              referral_lastname: req.user.lastname,
              referral_title: req.user.title,
              sent_date: req.body.date,
              session_id: req.body.session_id,
              test_id: testId,
              report: "Pending",
              conclusion: "Pending"
            }
            record.medical_records.laboratory_test.unshift(recordObj);
            record.save(function(err,info){
              if(err) {
                throw err;
                res.end('500: Internal server error')
              }
              updateSession(req.body.session_id);
              res.json({success:true,ref_no:random});
            });

          });
        }

        var updateSession = function(session_id) {//////////////////////////////////////////////////////////////////////////
          model.user.findOne({email: req.user.email},{doctor_patient_session:1}).exec(function(err,data){
            if(err) throw err;           
            var elementPos = data.doctor_patient_session.map(function(x) {return x.session_id; }).indexOf(session_id);
            var objFound = data.doctor_patient_session[elementPos];            
            var testResult = {
              test_to_run: req.body.lab_test_list,
              receive_date: "Pending",
              sent_date: req.body.date,
              report: "Pending",
              test_id: testId,
              conclusion: "Pending"
            }          
           
            objFound.diagnosis.laboratory_test_results.unshift(testResult); 
            data.save(function(err,info){
              if(err) throw err;
            })
          });
        }
      } else {
        res.end("Unauthorized access!")
      }
    });

  

    //this route takes care of  un ran test which was forwarded to another center by a center.
    router.post("/center/send-test",function(req,res){    
        model.user.findOne({user_id: req.body.user_id},{diagnostic_center_notification:1,referral:1,address:1,name:1,city:1,country:1,phone:1,user_id:1})
        .exec(function(err,result){
          if(err) throw err;
         

          //center address and name obj to be passed to the patient.
          var centerObj = {
            name: result.name,
            address: result.address,
            city: result.city,
            country: result.country,
            phone: result.phone,
            id: result.user_id
          }

          var refObj = {
            ref_id: req.body.ref_id,
            referral_firstname: req.user.firstname,
            referral_lastname: req.user.lastname,
            referral_title: req.user.title,
            referral_id: req.user.user_id,    
            date: req.body.date,            
            laboratory: {
              test_to_run : req.body.laboratory.test_to_run,
              patient_firstname: req.body.laboratory.patient_firstname,
              patient_lastname: req.body.laboratory.patient_lastname,
              patient_profile_pic_url: req.body.laboratory.patient_profilePic,
              patient_title: req.body.laboratory.patient_title,
              patient_phone: req.body.laboratory.phone,
              session_id: req.body.laboratory.session_id,
              patient_id: req.body.laboratory.patient_id,
              attended: false
            }             
          }

          //this is notification for the center.
          var refNotification = {
            sender_firstname: req.user.firstname,
            sender_lastname: req.user.lastname,
            sender_title : req.user.title,
            sent_date: req.body.date,
            ref_id: req.body.ref_id,
            note_id: req.body.ref_id,
            sender_profile_pic_url: req.user.profile_pic_url,
            message: "Please run the test for my patient"
          }

          result.referral.push(refObj);
          result.diagnostic_center_notification.push(refNotification);

          result.save(function(err,info){
            if(err) throw err;            
          });
          tellPatient(centerObj);
        });

        var tellPatient = function(centerInfo){
          //remember sms will be sent to the patient
          model.user.findOne({user_id: req.body.laboratory.patient_id},{medical_records: 1,user_id}).exec(function(err,record){
            if(err) throw err;     
            var recordObj = {
              test_to_run: req.body.laboratory.test_to_run,
              center_address: centerInfo.address,
              center_city: centerInfo.city,
              center_country: centerInfo.country,
              center_name: centerInfo.name,
              center_phone: centerInfo.phone,
              center_id: centerInfo.id,
              patient_id: record.user_id,
              ref_id: req.body.ref_id,
              referral_firstname: req.user.firstname,
              referral_lastname: req.user.lastname,
              referral_title: req.user.title,
              sent_date: req.body.date,
              session_id: req.body.session_id,
              report: "Pending",
              conclusion: "Pending"
            }
            record.medical_records.laboratory_test.unshift(recordObj);
            record.save(function(err,info){
              if(err) {
                throw err;
                res.end('500: Internal server error')
              }
              res.json({success:true,ref_no:req.body.ref_id});
            });

          });
        }
    });


    //radiology continued

    router.put("/radiology/find-patient/scan-test",function(req,res){
      if(req.user){     
        model.user.findOne({email:req.user.email},{referral:1},function(err,data){
            if (err) throw err;           
              switch(req.body.criteria) {
                case "refIdCriteria":
                  var toNum = parseInt(req.body.ref_id);                
                  var elementPos = data.referral.map(function(x) {return x.ref_id; }).indexOf(toNum);
                  var objectFound = data.referral[elementPos];
                  if(objectFound === undefined) {
                   res.send({error: "Patient scan test not found"})
                  } else {
                    res.send({data: objectFound});
                  }
                  break;

                case "phoneCriteria":
                  var elementPos = data.referral.map(function(x) {return x.phone; }).indexOf(req.body.phone);
                  var objectFound = data.referral[elementPos];
                  if(objectFound === undefined) {
                   res.send({error: "Patient scan test not found"})
                  } else {
                    res.send({data: objectFound});
                  }
                  break;

                default:
                  res.send({error: "Please enter search creteria"});
                  break;
              } 
        });
      } else {
        res.end("Unauthorized access");
      }

    });

//doctor activities for radiology centers.
  router.get("/doctor/find-radiology",function(req,res){
      if(req.user){
        model.user.find({type: "Radiology",city: req.user.city,country: req.user.country},
          {name:1,address:1,user_id:1,city:1,country:1,profile_pic_url:1,type:1},
          function(err,data){
          if(err) throw err;
          res.send(data);
        }).limit(5000);
      } else {
        res.end("Unauthorized access!");
      }
    });

    router.put("/doctor/find-radiology/search",function(req,res){
      if(req.user){
          if(!req.body.country)
            req.body.country = req.user.country;
          if(!req.body.city) 
            req.body.city = req.user.city;

          model.user.find({type: "Radiology",city: req.body.city,country: req.body.country},
            {name:1,address:1,user_id:1,city:1,country:1,profile_pic_url:1,type:1},
            function(err,data){
            if(err) throw err;
            res.send(data);
          }).limit(5000);
        } else {
          res.end("Unauthorized access!")
        }
    });
    
    //this route takes care doctor sending new test to a radiology.
    router.post("/doctor/radiology/send-test",function(req,res){  
        if(req.user) {
        console.log(req.body)  
        var random = Math.floor(Math.random() * 9999999);
        var testId = Math.floor(Math.random() * 9999999999999999);       
        model.user.findOne({user_id: req.body.user_id},{diagnostic_center_notification:1,referral:1,address:1,name:1,city:1,country:1,phone:1,user_id:1})        
        .exec(function(err,result){
          if(err) throw err;        

          //center address and name obj to be passed to the patient.
          var centerObj = {
            name: result.name,
            address: result.address,
            city: result.city,
            country: result.country,
            phone: result.phone,
            id: result.user_id
          }

          var refObj = {
            ref_id: random,
            referral_firstname: req.user.firstname,
            referral_lastname: req.user.lastname,
            referral_title: req.user.title,
            referral_id: req.user.user_id,    
            date: req.body.date,        
            radiology: {
              test_to_run : req.body.lab_test_list,
              patient_firstname: req.body.patient_firstname,
              patient_lastname: req.body.patient_lastname,
              patient_profile_pic_url: req.body.patient_profilePic,
              patient_title: req.body.patient_title,
              patient_phone: req.body.phone,
              session_id: req.body.session_id,
              patient_id: req.body.patient_id,
              test_id: testId,
              attended: false
            }                         
          }

          //this is notification for the center.
          var refNotification = {
            sender_firstname: req.user.firstname,
            sender_lastname: req.user.lastname,
            sender_title : req.user.title,
            sent_date: req.body.date,
            ref_id: random,
            note_id: random,
            sender_profile_pic_url: req.user.profile_pic_url,
            message: "Please run the test for my patient"
          }

          result.referral.push(refObj);
          result.diagnostic_center_notification.push(refNotification);

          result.save(function(err,info){
            if(err) throw err;            
          });
          tellPatient(centerObj);
        });

        var tellPatient = function(centerInfo){
          //remember sms will be sent to the patient
          model.user.findOne({user_id: req.body.patient_id},{medical_records: 1,user_id:1}).exec(function(err,record){            
            if(err) throw err;     
            var recordObj = {
              test_to_run: req.body.lab_test_list,
              center_address: centerInfo.address,
              center_city: centerInfo.city,
              center_country: centerInfo.country,
              center_name: centerInfo.name,
              center_phone: centerInfo.phone,
              center_id: centerInfo.id,
              patient_id: record.user_id,
              ref_id: random,
              referral_firstname: req.user.firstname,
              referral_lastname: req.user.lastname,
              referral_title: req.user.title,
              sent_date: req.body.date,
              session_id: req.body.session_id,
              test_id: testId,
              report: "Pending",
              conclusion: "Pending"
            }
            record.medical_records.radiology_test.unshift(recordObj);
            record.save(function(err,info){
              if(err) {
                throw err;
                res.end('500: Internal server error')
              }
              updateSession(req.body.session_id);
              res.json({success:true,ref_no:random});
            });

          });
        }

        var updateSession = function(session_id) {
          model.user.findOne({email: req.user.email},{doctor_patient_session:1}).exec(function(err,data){
            if(err) throw err;           
            var elementPos = data.doctor_patient_session.map(function(x) {return x.session_id; }).indexOf(session_id);
            var objFound = data.doctor_patient_session[elementPos];
                       
            var testResult = {
              test_to_run: req.body.lab_test_list,
              receive_date: "Pending",
              sent_date: req.body.date,
              report: "Pending",
              test_id: testId,
              conclusion: "Pending"
            }          
           
            objFound.diagnosis.radiology_test_results.unshift(testResult); 
            data.save(function(err,info){
              if(err) throw err;
              console.log("OK!")
            })
          });
        }
      } else {
        res.end("Unauthorized access!")
      }
    });
  

    //this route takes care of  un ran test which was forwarded to another center by a center.
    router.post("/center/radiology/send-test",function(req,res){    
        model.user.findOne({user_id: req.body.user_id},{diagnostic_center_notification:1,referral:1,address:1,name:1,city:1,country:1,phone:1,user_id:1})
        .exec(function(err,result){
          if(err) throw err;         

          //center address and name obj to be passed to the patient.
          var centerObj = {
            name: result.name,
            address: result.address,
            city: result.city,
            country: result.country,
            phone: result.phone,
            id: result.user_id
          }

          var refObj = {
            ref_id: req.body.ref_id,
            referral_firstname: req.user.firstname,
            referral_lastname: req.user.lastname,
            referral_title: req.user.title,
            referral_id: req.user.user_id,    
            date: req.body.date,            
            radiology: {
              test_to_run : req.body.radiology.test_to_run,
              patient_firstname: req.body.radiology.patient_firstname,
              patient_lastname: req.body.radiology.patient_lastname,
              patient_profile_pic_url: req.body.radiology.patient_profilePic,
              patient_title: req.body.radiology.patient_title,
              patient_phone: req.body.radiology.phone,
              session_id: req.body.radiology.session_id,
              patient_id: req.body.radiology.patient_id,
              attended: false
            }             
          }

          //this is notification for the center.
          var refNotification = {
            sender_firstname: req.user.firstname,
            sender_lastname: req.user.lastname,
            sender_title : req.user.title,
            sent_date: req.body.date,
            ref_id: req.body.ref_id,
            note_id: req.body.ref_id,
            sender_profile_pic_url: req.user.profile_pic_url,
            message: "Please run the test for my patient"
          }

          result.referral.push(refObj);
          result.diagnostic_center_notification.push(refNotification);

          result.save(function(err,info){
            if(err) throw err;            
          });
          tellPatient(centerObj);
        });

        var tellPatient = function(centerInfo){
          //remember sms will be sent to the patient
          model.user.findOne({user_id: req.body.laboratory.patient_id},{medical_records: 1,user_id:1}).exec(function(err,record){
            if(err) throw err;     
            var recordObj = {
              test_to_run: req.body.radiology.test_to_run,
              center_address: centerInfo.address,
              center_city: centerInfo.city,
              center_country: centerInfo.country,
              center_name: centerInfo.name,
              center_phone: centerInfo.phone,
              center_id: centerInfo.id,
              patient_id: record.user_id,
              ref_id: req.body.ref_id,
              referral_firstname: req.user.firstname,
              referral_lastname: req.user.lastname,
              referral_title: req.user.title,
              sent_date: req.body.date,
              session_id: req.body.session_id,
              report: "Pending",
              conclusion: "Pending"
            }
            record.medical_records.laboratory_test.unshift(recordObj);
            record.save(function(err,info){
              if(err) {
                throw err;
                res.end('500: Internal server error')
              }
              res.json({success:true,ref_no:req.body.ref_id});
            });

          });
        }
    });

    

    /*router.get("/gcamon",function(req,res){
        var identity = "gcamon";
        res.send(JSON.stringify({ token: token(identity), identity: identity }))
    });*/

    router.get("/center/notification",function(req,res){
      if(req.user) {
        model.user.findOne({email:req.user.email},{diagnostic_center_notification:1},function(err,data){
          if(err) throw err;
          res.send(data.diagnostic_center_notification);
        })
      } else {
        res.end("Unauthorized access");
      }
    });

    router.delete("/center/delete-notification",function(req,res){
      if(req.user){        
        model.user.findOne({email: req.user.email},{diagnostic_center_notification:1}).exec(function(err,data){
          if(err) throw err;
          req.body.forEach(function(note){
            console.log(note)
            var elementPos = data.diagnostic_center_notification.map(function(x) {return x.ref_id; }).indexOf(note.ref_id);                      
            data.diagnostic_center_notification.splice(elementPos,1); 
            data.save(function(err,info){
              if(err) throw err;
            });   
          });
        });
      } else {
        res.end("Unauthorized access")
      }
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
