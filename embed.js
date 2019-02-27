var mongoose = require("mongoose");
mongoose .connect("mongodb://localhost/blog_demo", { useNewUrlParser: true });



var postScheama = new mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model("Post", postScheama);


var userSchema =    new mongoose.Schema({
    email: String,
    name: String,
    posts:[postScheama]
});
var User = mongoose.model("User", userSchema);



// var newUser = new User({
//     email: "world@anc.com",
//     name: "wow"
// });

// newUser.posts.push({
//     title: "cljhbcadfk.",
//     content: "ascndlcbscjejiuqnfhkd"
// });

// newUser.save(function(err, user) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// var newPost = new Post({
//     title: "dsjkcdnsakd",
//     content: "dfjldsjkskjdj"
// });

// newPost.save(function(err, post) {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

User.findOne({name:"wow"}, function(err, user) {
    if(err) {
        console.log(err);
    } else {
      user.posts.push({
          title: "asbhhsdl",
          content: "bhjcalucbyh"
      });
      user.save(function(err, user) {
          if(err){
              console.log(err);
          } else {
              console.log(user);
          }
      })
    }
})