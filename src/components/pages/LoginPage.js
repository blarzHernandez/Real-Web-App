import React from "react";
import LoginForm from "../forms/LoginForm";
import propTypes from "prop-types";
import { connect } from "react-redux";
import{ login } from "../../actions/auth";
class LoginPage extends React.Component {


    //handles submit event
    submit = data => this.props.login(data).then(()=>{
        this.props.history.push("/");
    });
  
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
LoginPage.propTypes = {

    history:propTypes.shape({
        push:propTypes.func.isRequired
    }).isRequired,
    login:propTypes.func.isRequired
}
export default connect(null,{login})(LoginPage);