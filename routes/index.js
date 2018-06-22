var express = require('express');
var router = express.Router();
var Car = require("../model/cars")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Save car details
router.post('/saveCarDetails', function(req, res) {
  if(req && !req.body.make){
    return res.status(403).json({msg : "Please provide proper input"})
  }
  var carObj = new Car(req.body);

  carObj.save(function(err,data){
    if(err){
      res.status(403).json({msg : "Something went wrong", err : err})
    }else{
      res.status(200).json({msg : "Car record saved successfully",id : data.id})
    }
  })
});

//Get all Car detail with id
router.get('/getAllCarDetail', function(req, res) {
  Car.find({},function(err,results){
    if(err){
      res.status(403).json({msg : "Something went wrong", err : err})
    }else{
      res.status(200).json({msg : "Car records fetched successfully",data : results})
    }
  })
});

//Get Car detail with id
router.get('/getCarDetail/:id', function(req, res) {
  Car.find({_id : req.params.id},function(err,results){
    if(err){
      res.status(403).json({msg : "Something went wrong", err : err})
    }else{
      res.status(200).json({msg : "Car records fetched successfully",data : results})
    }
  })
});


module.exports = router;
