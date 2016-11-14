'use strict';
var path = require('path');
var route = require('./config');
var router = route.router;
var fs = require("fs");
var dateTime = require("node-datetime");
var token = require("./twilio");
var randomUserName = require("./randos");

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
          console.log(req.user)
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
         model.user.findOne({email:req.user.email},{doctor_notification:1},function(err,data){                
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
      res.json({medical_records: req.user.medical_records,prescriptions:req.user.medications})
    });

    //this route send all notification to the front end as soon as the patient logs in.
    router.get("/patient/get-notification",function(req,res){
      res.send(req.user.patient_notification);
    });

    //this route gets all referral for a pharmacy.
    router.get("/pharmacy/get-referral",function(req,res){
      res.send(req.user.referral);
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
    
    //this router takes call of pahrmacy search for a patient prescription from the data base;
    router.put("/pharmacy/find-patient/prescription",function(req,res){
      model.user.findOne({email:req.user.email},{referral:1},function(err,data){
        console.log(data);
        res.send(data);
      });
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

    router.get("/gcamon",function(req,res){
        var identity = "gcamon";
        res.send(JSON.stringify({ token: token(identity), identity: identity }))
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
