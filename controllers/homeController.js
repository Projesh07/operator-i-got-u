
module.exports = function (app) {

 app.get('/',function(req,res,next){

   console.log("Home");
   res.render('../views/index');
 });


 app.get('/about_us',function(req,res,next){

    res.render('../views/about');

 });

 app.get('/contact',function(req,res,next){

   console.log("contact");

 });

 app.get('/menu',function(req,res,next){

   console.log("menu");
    res.render('../views/menu');

 });


 app.get('/gallery',function(req,res,next){

   console.log("gallery");
    res.render('../views/gallery');

 });

};
