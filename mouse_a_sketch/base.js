console.log("this is a sanity check");

$(document).ready(function(){
  console.log("Let's get coding!")

	function colorMe() {
		$(this).css("background", $("input").val());
	}

	$("td").mouseover(colorMe)

})

