function check(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if(username!=null && username!="" && password!=null && password!=""){
    alert("You Log in Successfully!");
     location.href = "index1.html";
}else{
  alert("All fields required");
  document.getElementById("msg1").innerHTML="All fields are required";
}

}
