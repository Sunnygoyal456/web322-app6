/********************************************************************************* 
*  WEB322 – Assignment 6 
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.   
*  No part of this assignment has been copied manually or electronically from any other source 
*  (including web sites) or distributed to other students. 
*  
*  Name: ____Pratham_Garg_________________ Student ID: __117900217____________ Date: ____12-12-2022____________ 
* 
*  Online (Cyclic) URL: ___________https://long-teal-chick-kilt.cyclic.app (this the cyclic link for Asssignment 6)

                        ____https://tan-magnificent-camel.cyclic.app/register (this is the cyclin link for Assignment 5 )________________________________________ 
* 
********************************************************************************/


var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Pratham Garg - 117900217");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);