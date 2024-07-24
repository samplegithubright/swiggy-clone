const express=require('express');
const path=require('path');
const cors=require('cors');
const app=express();
app.use(cors());
const publicPath=path.join(__dirname,'public');
app.use(express.static('public'));
app.use('/images',express.static('images'));
app.use(express.urlencoded({extended:true}));


app.get('/category',async(req,res)=>{
    res.sendFile(`${publicPath}/category.json`);
});
app.get('/restChain',async(req,res)=>{
    res.sendFile(`${publicPath}/restaurantChains.json`);
})
app.listen(5000);