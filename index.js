const express = require("express");
const app = express();
const port = 5000;
const client = require("./client");
const { getProduct } = require("./product");

const setKeyAndValue = async (key , value) => {
    try{
        const val = await client.set(key ,  value);
        console.log(val);
    }catch(error){
        console.log("error to set key and value" , error);
    }
}

const getKeyAndValue = async (key) => {
    try{
        const result = await client.mget(key);
        console.log("result ==> " , result)
    }catch(error){
        console.log("error to set key and value" , error);
    }
}

// setKeyAndValue("bike:4" , "hunter 450");
// getKeyAndValue(["bike:1" , "bike:2", "bike:3" , "bike:4"]);

app.get('/products', async (req , res)=> {
    let isExist = await client.exists("products");

    if(isExist){
        console.log("get from cache");
        let data = await client.get("products");
        return res.json({
            data : JSON.parse(data)
        })
    }

    const products = await getProduct();

    await client.set("products" , JSON.stringify(products));

    res.json({
        data: products
    })

})

app.get('/' , (req , res)=> {
    res.send({message : "server is running"})
})

app.listen(port , ()=> {
    console.log("server is running on port 5000");
})