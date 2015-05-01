var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var postsSchema = new Schema({
    title: {type:String, require:true},
    slug: {type:String, require:true},
    content: String
});

var Post = mongoose.model('Post', postsSchema);

module.exports = Post;