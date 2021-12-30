const express = require('express');
const router = express.Router();


router.post('/',(req,res)=>{
    console.log("Hello notes page");
    res.send("Hello notes page");
})

module.exports = router;