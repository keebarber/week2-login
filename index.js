(function() {
var recover = 1;
var buttonState = 1;

//Sets class of user
class user {
  constructor(name) {
				this.name = name;
				this.email = "coolguy@gmail.com";
				this.password = "ILoveCoffee"
  }
}

//Initializes the only known user in the database
grant = new user("Grant Chirpus");


//Sets the event function of the Sign In button
var signinButton = document.getElementById("signin");

signinButton.onclick = function() {
  checkLogin();
}

function checkLogin() {
  passwordCheck = document.getElementById("userpassword");
  passwordEntered = passwordCheck.value;
  
  emailCheck = document.getElementById("useremail");
  emailEntered = emailCheck.value;
  
//Checks button state to ensure login page is loaded
  if (!buttonState) {
    document.getElementById("hello").innerHTML = `Hello, friend.`;
    document.getElementById("useremail").hidden = false;
    document.getElementById("useremail").innerHTML = '';
    document.getElementById("userpassword").hidden = false;
    document.getElementById("signin").hidden = false;
    document.getElementById("signin").innerHTML = "SIGN IN";
    document.getElementById("logout").innerHTML = 'Recover your password';
    document.getElementById("passworderror").innerHTML = 'An email has been sent your address. Please attempt to login again. ';
    buttonState = 1;
  }
  
//If information entered does not match user information, display message  
  else if (passwordEntered !== grant.password || emailEntered !== grant.email) {
    document.getElementById("passworderror").innerHTML = 'The Email and Password do not match. Please try again or Recover your Password.';
        passwordCheck.value = '';
        emailCheck.value = '';
  }
//If user enters correct email + password, display welcome message
  else if (passwordEntered === grant.password && emailEntered === grant.email) {
    document.getElementById("hello").innerHTML = `Hello, ${grant.name}!`;
  
    document.getElementById("useremail").hidden = true;
    document.getElementById("userpassword").hidden = true;
    document.getElementById("signin").hidden = true;
    document.getElementById("passworderror").hidden = true;
    document.getElementById("logout").innerHTML = 'Log Out';
    recover = 0;
    buttonState = 1;
  }
  
//Default display message should some error arise
  else {
    document.getElementById("hello").innerHTML = `Hello, friend.`;
  }
}

//Initializes logout event for link on greeting page after logging in
let logOut = document.getElementById("logout");

logOut.onclick = function() {
  logUserOut();
}

function logUserOut() {
//Checks that link is currently on correct page and outputs to page all necessary elements
//For returning to main page
  if (recover === 0) {
    recover = 1;
      document.getElementById("hello").innerHTML = `Hello, friend.`;
  
    document.getElementById("useremail").hidden = false;
    document.getElementById("userpassword").hidden = false;
    document.getElementById("signin").hidden = false;
    document.getElementById("passworderror").hidden = false;
    document.getElementById("logout").innerHTML = 'Recover your password';
    document.getElementById("passworderror").innerHTML = "";
    
  passwordCheck = document.getElementById("userpassword");
  passwordEntered = passwordCheck.value;
  
  emailCheck = document.getElementById("useremail");
  emailEntered = emailCheck.value;
  
    passwordCheck.value = '';
    emailCheck.value = '';
  }
//For loading email recovery page
  else if (recover === 1) {
    document.getElementById("hello").innerHTML = `Password Recovery`;
    document.getElementById("useremail").hidden = false;
    document.getElementById("userpassword").hidden = true;
    document.getElementById("signin").hidden = false;
    document.getElementById("signin").innerHTML = "SEND EMAIL";
    document.getElementById("logout").innerHTML = 'Go Back';
    document.getElementById("passworderror").innerHTML = 'Please enter your email address. We will send a recovery link to this address.';
    recover = 2;
    buttonState = 0;
        document.getElementById("useremail").innerHTML = '';
  }
//For returning to main page
  else {
    document.getElementById("hello").innerHTML = `Hello, friend.`;
    document.getElementById("useremail").hidden = false;
    document.getElementById("userpassword").hidden = false;
    document.getElementById("signin").hidden = false;
    document.getElementById("signin").innerHTML = "SIGN IN";
    document.getElementById("logout").innerHTML = 'Recover your password';
    document.getElementById("passworderror").innerHTML = '';
    recover = 0;
    buttonState = 0;
  }
}

})();