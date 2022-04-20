const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req,res) => {
    res.send('Look mama ! i am node normal smarty');
})

const users=[
    {id:0,name:'abdul alim', job:'khai kalim'},
    {id:1,name:'abdul kalim', job:'khai kalim'},
    {id:2,name:'abdul dalim', job:'khai kalim'},
    {id:3,name:'abdul jolim', job:'khai kalim'},
    {id:4,name:'abdul kolim', job:'khai kalim'},
    {id:5,name:'abdul molim', job:'khai kalim'},
    {id:6,name:'abdul polim', job:'khai kalim'},
]

app.get('/users', (req,res) =>{
    // console.log(req.query);
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user =>user.name.toLowerCase(). includes(search))
        res.send(matched);
    }
    else{
        res.send(users)
    }
    
})

app.get('/user/:id', (req,res) =>{
    // console.log(req.params);
    const id = parseInt(req.params.id);
    // const user = users[id];
    const user = users.find(u=>u.id ===id);
    res.send(user);
})

app.post('/user', (req,res) =>{
    console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user)
})


app.listen(port, () =>{
    console.log('Listening to port' ,port);
})