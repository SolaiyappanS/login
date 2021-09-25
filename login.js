var userNames = ['Solaiyappan','Sundaram','Joker','Professional','SolaiyappaTce'];
var passwords = ['solai2701','jokerr31','ms130','Solai@2701','1125927'];

function login(){
  var userName = document.getElementById("oldUser").value;
  var password = document.getElementById("oldPass").value;
  if(userName=="" || password==""){
    document.getElementById("result").style.color = "orange";
    document.getElementById("result").innerHTML = "*All fields are mandatory";
  }
  else if(userNames.indexOf(userName)==-1){
    document.getElementById("result").style.color = "red";
    document.getElementById("result").innerHTML = "Invalid User Name";
  }
  else if(password != passwords[userNames.indexOf(userName)]){
    document.getElementById("result").style.color = "red";
    document.getElementById("result").innerHTML = "Incorrect Password";
  }
  else {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("signupPage").style.display = "none";
    document.getElementById("homePage").style.display = "contents";
    document.getElementById("result").innerHTML = "";
  }
}

function signupSetup(){
  document.getElementById("loginPage").style.display = "none";
  document.getElementById("signupPage").style.display = "contents";
  document.getElementById("homePage").style.display = "none";
  document.getElementById("result").innerHTML = "";
}

function signup(){
  var userName = document.getElementById("newUser").value;
  var password = document.getElementById("newPass").value;
  if(userNames.indexOf(userName) != -1){
    document.getElementById("result").style.color = "orange";
    document.getElementById("result").innerHTML = "User Name already exists";
  }
  else if(userName=="" || password==""){
    document.getElementById("result").style.color = "orange";
    document.getElementById("result").innerHTML = "*All fields are mandatory";
  }
  else{
    userNames.push(userName);
    passwords.push(password);
    document.getElementById("result").style.color = "green";
    document.getElementById("result").innerHTML = "Account Created Successfully<br>Login again with the new account";
  }
}

function initialSetup(){
  document.getElementById("loginPage").style.display = "contents";
  document.getElementById("signupPage").style.display = "none";
  document.getElementById("homePage").style.display = "none";
  document.getElementById("result").innerHTML = "";
}

function showPassword(){
  var password = document.getElementsByClassName("checkbox");
  if(document.getElementById("oldPass").type === "password"
  && document.getElementById("newPass").type === "password"){
    document.getElementById("oldPass").type = "text";
    document.getElementById("newPass").type = "text";
    password[0].checked = true;
    password[1].checked = true;
  }
  else{
    document.getElementById("oldPass").type = "password";
    document.getElementById("newPass").type = "password";
    password[0].checked = false;
    password[1].checked = false;
  }
}