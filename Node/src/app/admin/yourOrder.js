 
const express = require("express");
const {MongoClient} = require.("mongodb");
const client = new MongoClient("mongodb://localhost:27017") 
exports.yourOrder = async (req,res)=>{
  try{
    const db = client.db("foodadda");
    const myData = await db.collection("orders").find().toArray();
    res.json(myData)
  }
  catch (err){
    console.log("err");
    res.status(500).send("Internal server error")
  }
};