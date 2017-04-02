var mongoose = require('mongoose');
var Schema = mongoose.Schema;


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

function returnSingleStudent(callback) {
  Student.count({
    name: 'Dinesh'
  }, function (err, c) {
    if (err) throw callback(err, null);
    if (c == 1) {
      Student.find().lean().exec(function (err, students) {
        callback(null, JSON.stringify(students));
      });
    } else {
      var newStudent = Student({
        name: 'Dinesh',
        rollNo: 1,
        className: 'Ece A',
      });
      newStudent.save(function (err) {
        if (err) throw callback(err, null);
        Student.find().lean().exec(function (err, students) {
          return callback(null, JSON.stringify(students));
        });
      });
    }
  });
}

module.exports.printStudent = returnSingleStudent;
// module.exports.findAll = findAll;
module.exports.Student = Student;