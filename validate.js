function validate()
{
  var user = document.getElementById('first_name').value;
  var pwd = document.getElementById('password').value;
  var pwd_cnf = document.getElementById('password_confirmation').value;
  var email = document.getElementById('email').value;
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var nameformat= /^[a-zA-Z]/;
  var pwdformat=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]/;
  if(user == "")
    {
      document.getElementById('alert-first_name').innerHTML ="First Name can't be empty";
      document.getElementById('alert-first_name').style.color="red";
      return false;
    }
  if((user.length <= 2) || (user.length > 20)){
      document.getElementById('alert-first_name').innerHTML =" Username lenght must be between 2 and 20";
      document.getElementById('alert-first_name').style.color="red";
      return false;
    }
    if(user.match(nameformat)){
        document.getElementById('alert-first_name').innerHTML ="Valid Name";
        document.getElementById('alert-first_name').style.color="green";
    }
    else{
      document.getElementById('alert-first_name').innerHTML ="The name is invalid";
      document.getElementById('alert-first_name').style.color="red";
      return false;
    }
  if(email == ""){
      document.getElementById('alert-email').innerHTML =" The email field can't be empty";
      document.getElementById('alert-email').style.color="red";
      return false;
    }
    if (email.match(mailformat)) {
        document.getElementById('alert-email').innerHTML ="Valid Email";
        document.getElementById('alert-email').style.color="green";
      }
      else
      {
        document.getElementById('alert-email').innerHTML =" Please enter a valid email";
        document.getElementById('alert-email').style.color="red";
        return false;
      }
    if (pwd.match(pwdformat)){
      document.getElementById('alert-pwd').innerHTML =" Valid Password";
      document.getElementById('alert-pwd').style.color="green";
    }
    else{
      document.getElementById('alert-pwd').innerHTML =" Please enter a valid password";
      document.getElementById('alert-pwd').style.color="red";
      return false;
    }

    if(pwd == ""){
      document.getElementById('alert-pwd').innerHTML =" Please fill the password field";
      document.getElementById('alert-pwd').style.color="red";
      return false;
    }
    if((pwd.length < 8) || (pwd.length > 20)) {
      document.getElementById('alert-pwd').innerHTML =" Passwords lenght must be between  8 and 20";
      document.getElementById('alert-pwd').style.color="red";
      return false;
    }

    if(pwd!=pwd_cnf){
      document.getElementById('alert-pwd_cnf').innerHTML =" Password does not match";
      document.getElementById('alert-pwd_cnf').style.color="red";
      return false;
    }

    if(pwd_cnf == ""){
      document.getElementById('alert-pwd_cnf').innerHTML =" Can't leave the field empty";
      document.getElementById('alert-pwd_cnf').style.color="red";
      return false;
    }
}
