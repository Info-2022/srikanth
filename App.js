// import forgotpassword from "./forgotpassword";

function App() {

  const btnClick = (e) => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const id = e.currentTarget.id;

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
    

  return (
  <>
      <div>
        <label>Username:</label>
        <input id={"username"} placeholder="Enter Username" type="text" required autoFocus/>
      </div>
        
      <div>
        <label>Password:</label>
        <input id="password" placeholder="Enter Password" type="password" required />
      </div>

      <div>
       <a href="./forgotpassword.js">Forgot Password?</a> 
      </div>
        
      <div>
        <button type="button" onClick={btnClick} id="user" >User Login</button>
        <button type="button" onClick={btnClick} id="admin" >Admin Login</button>
      </div>
    
  </>
  );
}

export default App;
