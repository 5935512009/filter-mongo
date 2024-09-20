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


// this route never test routes  **** don't forgot test later.
router.post('/api/blog/create',(req,res)=>{
    Todo.create(req.body)
        .then(post => res.json(post))
        .catch(err=> console.log(err))
})

router.put('/api/blog/update/:id',(req,res)=>{
    const id = req.params.id;
    Todo.findByIdAndUpdate({_id:id},{
        name : req.body.name,
        description : req.body.description,
        tools : req.body.tools
    })  .then(todo => res.json(todo))
        .catch(err => console.log(err))
})

router.delete('/api/blog/delete/:id', (req,res)=>{
    const id = req.params.id;
    Todo.findByIdAndDelete({_id:id})
        .then(todo => res.json(todo))
        .catch(err => console.log(err))
})

module.exports = router;