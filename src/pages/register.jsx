import React from "react";
function register()
{
    return 
    <div className="formContainer">
     <div className="formWrapper">
     <span className="logo">Lama Chat</span>
     <span className="title">Register</span>
     <form>
     <input type="text" placeholder="Username"/>
     <input type="email" placeholder="email"/>
     <input type="password" placeholder="password"/>
     <input type="file"/>
     <button>Sign Up</button>
     </form>
     <p>You do have an account? Login</p>
</div>
    </div>
}
export default register;