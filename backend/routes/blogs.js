const router = require('express').Router();
const Todo = require("../models/blogs");

//Test Route
router.get('/api/test', async(req,res)=>{
    res.json("router connection");
});

//All Routes
router.get('/api/blog', async (req,res)=>{
    try{
        const blogs = await Todo.find();
        res.json(blogs);
    }
    catch(error){
        res.status(500).json({
            message:error.message
        });
    }
});

router.get('/api/blog/:id',(req,res)=>{
    const id = req.params.id
    Todo.findById({_id:id})
    .then(show =>res.json(show))
    .catch(error => console.log(error))
})

module.exports = router;