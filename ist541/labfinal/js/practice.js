// JavaScript Document
$( function() {
   $("map area").click( function(){

      if ($(this).attr("id") == "hook") {
         $("#feedback").css("color","black");
         $("#feedback").html("This is the hook.");
      }
	 if ($(this).attr("id") == "thesis") {
         $("#feedback").css("color","black");
         $("#feedback").html("This is the thesis. Notice how it has 3 main points");
      }
      if ($(this).attr("id") == "topicsentence") {
         $("#feedback").css("color","black");
         $("#feedback").html("This is the topic sentence. Notice how this first sentence tells us what to expect in the paragraph.");
      }

      if ($(this).attr("id") == "concludingsentence") {
         $("#feedback").css("color","black");
         $("#feedback").html("This is the concluding sentence. It is the last sentence that doesn't introduce anything new other than what is mentioned in the paragraph already.");
      }

  $("#feedback").css("backgroundColor","antiquewhite");
$('#myModal').modal("show");
   });
}); //end main jQuery function// JavaScript Document