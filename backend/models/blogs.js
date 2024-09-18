const mongoose = require('mongoose');
const express = require('express');

const app = express();

//Middlewares
app.use(express.json());

const todoSchema = new mongoose.Schema({
    id: String,
    name: String,
    description: String,
    tools: String,
    master: String
});

const Todo = mongoose.model('todolistcollection',todoSchema);

module.exports = Todo;