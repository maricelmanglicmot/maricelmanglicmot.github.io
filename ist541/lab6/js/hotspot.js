// JavaScript Document
$( function() {
   $("map area").click( function(){

      if ($(this).attr("id") == "boop") {
         $("#feedback").css("color","green");
         $("#feedback").html("Boop! You have booped Manini's nose.");
      }
	 if ($(this).attr("id") == "blep") {
         $("#feedback").css("color","green");
         $("#feedback").html("Blep... Manini sticks his tongue out at you.");
      }
      if ($(this).attr("id") == "headrub") {
         $("#feedback").css("color","green");
         $("#feedback").html("You gave Manini a head rub!");
      }

      if ($(this).attr("id") == "paw") {
         $("#feedback").css("color","red");
         $("#feedback").html("Grr! Manini doesn't like having his paws touched!");
      }

  $("#feedback").css("backgroundColor","antiquewhite");
$('#myModal').modal("show");
   });
}); //end main jQuery function