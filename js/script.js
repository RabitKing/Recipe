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
   	  	 $("img").hide("slow");
   	  } else {
         $("img").show("5000");
   	  }
   });
//******************************

// User will be able to mark the ingredient once they have bought it.
// Ingredients go green indicating they have been bought.
  $(" section li").click(function(){
  	 $(this).css("color", "green");
  });
  });   