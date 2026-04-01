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




app.listen(3000, () => {
    console.log('Server is running on port 3000');
});