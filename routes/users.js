var mongoose =require('mongoose');

var plm=require('passport-local-mongoose');

mongoose.connect('mongodb://localhost/blogapps2ss');

var userSchema= mongoose.Schema({
  username:String,
  password:String,
  email:String
});

userSchema.plugin(plm);

module.exports=mongoose.model('user', userSchema);