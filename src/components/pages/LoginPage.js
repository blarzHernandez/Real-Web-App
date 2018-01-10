import React from "react";
import LoginForm from "../forms/LoginForm";

class LoginPage extends React.Component {


    submit=data => {
        console.log(data);
    }

    //rendering component 
    render(){
        return(
            <div>
                <h1>Login Form</h1>
                <LoginForm submit ={this.submit}/>
             </div>
        )
    }
 
}
export default LoginPage;