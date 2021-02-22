function validate()
{
  var user = document.getElementById('first_name').value;
  var pwd = document.getElementById('password').value;
  var pwd_cnf = document.getElementById('password_confirmation').value;
  var email = document.getElementById('email').value;
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if(user == "")
    {
      document.getElementById('alert-first_name').innerHTML ="Please fill the username field";
      return false;
    }
  if((user.length <= 2) || (user.length > 20)){
      document.getElementById('alert-first_name').innerHTML =" Username lenght must be between 2 and 20";
      return false;
    }
    if(!isNaN(user)){
      document.getElementById('alert-first_name').innerHTML =" only characters are allowed";
      return false;
    }
  if(email == ""){
      document.getElementById('alert-email').innerHTML =" The email field can't be empty";
      return false;
    }
    if (email.match(mailformat)) {
        document.getElementById('email').style.color='green';
      }
      else
      {
        document.getElementById('alert-email').innerHTML =" Please enter a valid email";
        return false;
      }

    if(pwd == ""){
      document.getElementById('alert-pwd').innerHTML =" Please fill the password field";
      return false;
    }
    if((pwd.length < 8) || (pwd.length > 20)) {
      document.getElementById('alert-pwd').innerHTML =" Passwords lenght must be between  8 and 20";
      return false;
    }

    if(pwd!=pwd_cnf){
      document.getElementById('alert-pwd_cnf').innerHTML =" Password does not match";
      return false;
    }

    if(pwd_cnf == ""){
      document.getElementById('alert-pwd_cnf').innerHTML =" Can't leave the field empty";
      return false;
    }
}
