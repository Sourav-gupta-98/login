function check(){

var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

if(username!=null && username!="" && password!=null && password!=""){

  if(password.length<=8){
    alert("Incorrect Password...");
      document.getElementById("msg1").innerHTML="Password must contain atleast 9 characters";
  }else{
    alert("You Log in Successfully!");
    location.href = "index1.html";
  }
}else{
  alert("All fields required");
  document.getElementById("msg1").innerHTML="All fields are required";
}

}
