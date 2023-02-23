
function btnClick(id){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(id === "admin"){
        if(username === "info@gmail.com" && password === "info@123"){
            alert("This is admin login");
        }
        else if(username === "" && password === ""){
            alert("Please Enter valid username and password");
        }
        else{
            alert("Your credentials are incorrect");
        }
    }
    else if(id === "user"){
        if(username === "merica@gmail.com" && password === "merica@123"){
            alert("This is admin login");
        }
        else if(username === "" && password === ""){
            alert("Please Enter valid username and password");
        }
        else{
            alert("Your credentials are incorrect");
        }
    }

}