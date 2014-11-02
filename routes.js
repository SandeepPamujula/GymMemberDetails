
var express = require('express');
var nm = require('express-namespace');
var ObjectID = require('mongodb').ObjectID;
var BSON = require('mongodb').BSONPure;
var myDB = null;
var users = null;


var dbConn = require('./mongodb');
dbConn.getDBConnection(function(db) {
  myDB = db;
  users = myDB.collection('gymdb');
});

exports.handle_all = function(express)
{
  // app
  //   .use('/static', express.static('./static'))

  express.namespace('/members', function(){
    
    express.get('/', function(req, res) {

      var query = {};

      var number = req.query.number;
      console.log("number: "+req.query.number);
      if (undefined !== number )
      {
           query = {number: req.query.number};

      }
     
      var cursor = users.find(query);
      cursor.toArray(function(err, itemArr) {
        console.log("get res: "+itemArr);
            res.send(itemArr);
          
      });
  

     
        
    });

    express.post('/',function(req, res) {
      
    //  console.log(JSON.parse(req.body));
      var user1 = {
                    username: req.body.username,
                    number: req.body.number,
                    doj: req.body.doj,
                    amountPaid: req.body.amountPaid,
                    packageType: req.body.packageType,
                    packageEndDate: req.body.packageEndDate,
                    age: req.body.age,
                    gender: req.body.gender,
                    weight: req.body.weight,
                    height: req.body.height,
                    food: req.body.food,
                    medicalProblem: req.body.medicalProblem,
                    muscleMass: req.body.muscleMass,
                    viceralFat: req.body.viceralFat,
                    bodyFat: req.body.bodyFat,
                    tbw: req.body.tbw,
                    boneWeight: req.body.boneWeight,
                    Dateone:req.body.Dateone,
                    Neckone: req.body.Neckone,
                    Chestone: req.body.Chestone,
                    Shouldersone: req.body.Shouldersone,
                    BicepsNormalone: req.body.BicepsNormalone,
                    BicepsFlexone: req.body.BicepsFlexone,
                    UpperAbsone: req.body.UpperAbsone,
                    LowerAbsone: req.body.LowerAbsone,
                    Waistone: req.body.Waistone,
                    Hipsone: req.body.Hipsone,
                    Thighone: req.body.Thighone,
                    Calfone: req.body.Calfone,
                    Datetwo:req.body.Datetwo,
                    Necktwo: req.body.Necktwo,
                    Chesttwo: req.body.Chesttwo,
                    Shoulderstwo: req.body.Shoulderstwo,
                    BicepsNormaltwo: req.body.BicepsNormaltwo,
                    BicepsFlextwo: req.body.BicepsFlextwo,
                    UpperAbstwo: req.body.UpperAbstwo,
                    LowerAbstwo: req.body.LowerAbstwo,
                    Waisttwo: req.body.Waisttwo,
                    Hipstwo: req.body.Hipstwo,
                    Thightwo: req.body.Thightwo,
                    Calftwo: req.body.Calftwo,
                    Datethree:req.body.Datethree,
                    Neckthree: req.body.Neckthree,
                    Chestthree: req.body.Chestthree,
                    Shouldersthree: req.body.Shouldersthree,
                    BicepsNormalthree: req.body.BicepsNormalthree,
                    BicepsFlexthree: req.body.BicepsFlexthree,
                    UpperAbsthree: req.body.UpperAbsthree,
                    LowerAbsthree: req.body.LowerAbsthree,
                    Waistthree: req.body.Waistthree,
                    Hipsthree: req.body.Hipsthree,
                    Thighthree: req.body.Thighthree,
                    Calfthree: req.body.Calfthree,
                    Datefour:req.body.Datefour,
                    Neckfour: req.body.Neckfour,
                    Chestfour: req.body.Chestfour,
                    Shouldersfour: req.body.Shouldersfour,
                    BicepsNormalfour: req.body.BicepsNormalfour,
                    BicepsFlexfour: req.body.BicepsFlexfour,
                    UpperAbsfour: req.body.UpperAbsfour,
                    LowerAbsfour: req.body.LowerAbsfour,
                    Waistfour: req.body.Waistfour,
                    Hipsfour: req.body.Hipsfour,
                    Thighfour: req.body.Thighfour,
                    Calffour: req.body.Calffour
                  };

        console.log("in post method.");
        console.log("user num: "+req.body.number);

        users.findOne({number: req.body.number}, function(err, user) {
           //users.findOne({_id: req.body.id}, function(err, user) {
          
            if (user) {

              console.log("user num: "+user1.number);
              console.log("user name: "+user1.name);
              // res.send("User Found!");

              users.update(user, {$set:user1}, function(err, result) {
                  if (err) { console.log(err);}
                  else {console.log("user updated.");}

            
              });
              res.send("res: User updated!");

              
            } else {

               users.save(user1, {w:1}, function(err, results) {

                  if (err) {   res.send(err);   }
                  else { console.log("user added."); res.send("user added"); }

                });

            }


        });

        
      
    });

    express.put('/',function(req, res) {
        
        console.log("old number: "+ req.body.oldNumber);
        console.log("new number: "+ req.body.newNumber);
       // var objid = ObjectID(req.params.id);
       //var id = ""+ req.params.id;
      // var objid = BSON.ObjectID.createFromHexString(id);
       // console.log("id:   "+ req.body.id+"   objid"+objid);
        users.findOne({number: req.body.oldNumber}, function(err, user) {
           //users.findOne({_id: req.body.id}, function(err, user) {
          
            if (user) {

              console.log("user num: "+user.number);
              // res.send("User Found!");

              users.update({number:req.body.oldNumber}, {$set:{number:req.body.newNumber}}, function(err, result) {
                  if (err) { console.log(err);}
                  else {console.log("user updated.");}

            
              });
              res.send("res: User updated!");

                 // users.remove({number: user.number}, function(err) {

                 //    if (err) {
                 //      res.send(err);
                 //    }
                 //    else {

                 //      res.send("res: User  deleted!");
                 //    }
                 // });

            } else {

               req.session.msg = 'User Not Found!';
               res.send("User Not Found!");

            }


        });

    });        

    express.delete('/',function(req, res) {
        
        console.log("number: "+ req.body.number);
       // var objid = ObjectID(req.params.id);
       //var id = ""+ req.params.id;
      // var objid = BSON.ObjectID.createFromHexString(id);
       // console.log("id:   "+ req.body.id+"   objid"+objid);
        users.findOne({number: req.body.number}, function(err, user) {
           //users.findOne({_id: req.body.id}, function(err, user) {
          
            if (user) {

              console.log("user num: "+user.number);
              // res.send("User Found!");

                 users.remove({number: user.number}, function(err) {

                    if (err) {
                      res.send(err);
                    }
                    else {

                      res.send("res: User  deleted!");
                    }
                 });

            } else {

               req.session.msg = 'User Not Found!';
               res.send("User Not Found!");

            }


        });
      
    });


});

};


