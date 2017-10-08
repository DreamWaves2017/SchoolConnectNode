var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var GenerateSchema = require('generate-schema');

mongoose.connect('mongodb://localhost:27017/schoolConnectdb');

var studentSchema = new Schema({
 firstName : {
    type : String
 },
 
 secondName : {type : String},
 phoneNumber : {type : Number},
  // name: {
  //   type: String,
  //   required: true
  // },
  
  //   studentUniqueId : {
  //   type : String,
  //   required : true,
  // },
  // ClassName : {
  //   type : String,
  //   required : true,
  // },
  // rollNo: {
  //   type: Number,
  //   required: true,
  //  }, 
  // emergencyNumber: {
  //   type: Number,
  //   required: true
  // },
  // address: {
  //   type: String,
  //   required: true
  // },
  // Onboarding: {
  //   type: Date,
  //   required: true
  // },
  // createdAt: Date
});

var Student = mongoose.model('Student', studentSchema);

module.exports.saveFromJson = function (body, callback) {
    var obj = body;
    delete obj._id;
console.log(obj);
    Student.update({firstName : obj.firstName}, obj,{upsert: true}, function(err, resp){
      if(err) callback(err);
    });
}

