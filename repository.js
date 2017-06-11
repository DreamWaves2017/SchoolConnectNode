var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var GenerateSchema = require('generate-schema');

mongoose.connect('mongodb://localhost:27017/nodejsdb');

var studentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  rollNo: {
    type: Number,
    required: true,
    unique: true
  },
  className: {
    type: String
  },
  createdAt: Date
});

var Student = mongoose.model('Student', studentSchema);

module.exports.saveStudentToDB = function (name, rollNo, className, callback) {
  Student.count({
    rollNo: rollNo
  }, function (err, count) {
    if (err) throw callback(err, null);
    if (count == 1) {
      console.log(name + ' already present in Database. Skipping Insert')
    } else {
      var newStudent = Student({
        name: name,
        rollNo: rollNo,
        className: className,
      });
      saveFromModel(newStudent, callback);
    }
  });
}

function saveFromModel(newStudent, callback) {
    newStudent.save(function (err) {
        if (err) throw callback(err, null);
        console.log(newStudent.name + ' saved Successfully')
      });
}

module.exports.saveFromJson = function (body, callback) {
    var obj = body;
    delete obj._id;
console.log(obj);
    Student.update({rollNo : obj.rollNo}, obj,{upsert: true}, function(err, resp){
      if(err) callback(err);
    });
}

module.exports.allStudents = function(callback) {
  Student.find().lean().exec(function(err, students){
    return callback(null, JSON.stringify(students));
  })
}
