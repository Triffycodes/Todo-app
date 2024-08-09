 //Schema for DB
 /*
    ** Todo {
        title: string,
        description: string,
        completed: boolean
    }
 */

const mongoose = require('mongoose')

// mongodb+srv://adarshshankar:triffycodes%402097@cluster0.frjqtav.mongodb.net/
// .env
mongoose.connect("mongodb+srv://adarshshankar:triffycodes%402097@cluster0.frjqtav.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo: todo
}