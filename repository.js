
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


mongoose.connect('mongodb://localhost:27017/nodejsdb');

var studentSchema = new Schema({
	name : { type: String, required: true},
	rollNo : { type : Number, required: true, unique : true},
	className : {type : String},
	createdAt : Date
});

var Student = mongoose.model('Student', studentSchema);


function printStudent() {
  var newStudent =  Student({
    name : 'Dinesh',
    rollNo : 1,
    className : 'Ece A',
  });
  newStudent.save(function(err){
    if(err) throw err;
    console.log('user created !');
  });
  return "Repository js working !";
};

module.exports.printStudent = printStudent;
module.exports.Student = Student;
