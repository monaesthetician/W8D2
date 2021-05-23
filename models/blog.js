const mongoose = require("mongoose");

console Schema = mongoose.Schema;

const blogSchema = new mongoose.Schema({
    titile: {
        type: String, require: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog;
