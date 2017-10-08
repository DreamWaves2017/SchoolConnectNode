var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var GenerateSchema = require('generate-schema');

mongoose.connect('mongodb://localhost:27017/schoolConnectdb');

var teacherSchema = new Schema({
 ID :
 {
    type : Number,
    required : true
 },
 
  name: {
    type: String,
    required: true
  },
  
    teacherUniqueId : {
    type : String,
    index : true,
    required : true,
  },
  PrimaryClass : {
    type : String,
    required : true,
  },

  SecondaryClass : [
      {
          className : { type : String,
          required : true}
      }

  ],

  emergencyNumber: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  Onboarding: {
    type: Date,
    required: true
  },
  createdAt: Date
});

var Teacher = mongoose.model('Teacher', teacherSchema);

module.exports.saveFromJson = function (body, callback) {
    var obj = body;
    delete obj._id;
console.log(obj);
    Student.update({ID : obj.ID}, obj,{upsert: true}, function(err, resp){
      if(err) callback(err);
    });
}

