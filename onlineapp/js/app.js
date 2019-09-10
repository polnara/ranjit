function handleLogin(){
	var userName = document.getElementById("uname").value;
	var pwd = document.getElementById("pwd").value;
	console.log("User Name :: "+userName);
	console.log("Password :: "+pwd);
	
	if(userName==undefined || userName ==""){
		document.getElementById("errMsg").innerHTML = "User Name invalid";
		return
	}
	
	if(pwd==undefined || pwd ==""){
		document.getElementById("errMsg").innerHTML = "Password invalid";
		return
	}
	
	if(userName=="Harish" && pwd=="Harish"){
		window.location.href="http://www.google.com";
	}else{
		document.getElementById("errMsg").innerHTML = "Invalid Credentials";
		return
	}
}