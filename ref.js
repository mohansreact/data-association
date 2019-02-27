var mongoose = require("mongoose");

mongoose .connect("mongodb://localhost/blog_demo_2", { useNewUrlParser: true });

var Post = require("./models/post");
var User = require("./models/user");



Post.create({
    title: "salajsla;sasakldjsjlsak",
    content: "sadwdasdwds;lksd;;kdj"
}, function(err, post) { 
    User.findOne({email: "abc@xyz.com"}, function(err, foundUser) {
        if(err) {
            console.log(err);
        } else {
            foundUser.posts.push(post);
            foundUser.save(function(err, data) {
                if(err) {
                    console.log(err);
                } else {
                    console.log(data);
                }
            });
        }
    })
});


// User.findOne({email: "abc@xyz.com"}).populate("posts").exec(function(err,user) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });