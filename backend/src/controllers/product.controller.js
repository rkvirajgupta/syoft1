const express=require("express");

const jobdetail=require("../models/product.model");

const router=express.Router();


router.get('/data', async(req,res)=>{
    try {
        const job = await jobdetail.find({}).lean().exec();
        return res.status(200).send(job);
    } catch (error) {
        return res.status(500).send(error);
    }
  })


router.post('/data', async(req,res)=>{
    try {
        const job = await jobdetail.create(req.body);
        return res.status(201).send(job)
    } catch (error) {
        return res.status(500).send(error)
    }
})

module.exports= router;