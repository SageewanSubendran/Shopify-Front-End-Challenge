$(document).ready(function(){
	$(".sign-up-button").bind("click", validate);
});

//Function used to assist validation
function validateEmail(email) {
  var te = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return te.test(email);
}

//Validation function
function validate() {
  $("#invalid").text("");
  var email = $("#email").val();
  var interest = $("#interest :selected").text();
  if (validateEmail(email)) {    
	console.log(email, interest);		//Submits log to console
  } else {
    $("#invalid").text("Please enter a valid email address");		//Outputs 'invalid' message
  }
  return false;
}