const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');


const app=express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}   
));
const FoodModel=require('./models/Food');
mongoose.connect('mongodb://localhost:27017/food', {
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
});

//insert the data

app.post('/insert', async (req, res) => {
    const {foodName,description}=req.body;
    const food=new FoodModel({foodName,description});
    try{
        await food.save();
        res.send('Data Inserted');
    }catch(err){
        console.error(err);
        res.status(500).send('Error inserting data');
    }
});


app.listen(3001, () => {
    console.log('Server is running on port 3000');
});