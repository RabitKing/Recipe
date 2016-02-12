/* Javascript to be in here */

// Site will have certain functionality.

$(document).ready(function(){
  //Allows the user to switch on and of the directions
  //User has full control of recipe as they bake
   $(".header").click(function(){
   	 $(".cook").slideToggle("slow");

  });

   // User can hide the images when they click button
   $("#hide").click(function(){
   	  if ($("img").is (":visible")){
   	  	 $("img").hide();
   	  } else {
         $("img").show();
   	  }
   });

});