import React from 'react';
import { Form, Button , Message } from "semantic-ui-react";
import Validator from 'validator';
import InlineError from '../messages/InlineError'
import  propTypes from "prop-types";


class LoginForm extends React.Component{
    //initial state object
    state = {
        data:{
            email:"",
            password:""
        },
        loading:false,
        errors:{}

    }

    //onChange events -> set new state 
     onChange = e => this.setState({
         data:{...this.state.data,[e.target.name]:e.target.value}
    })


    //onSubmit event
    onSubmit = (data) => {
        //first validate data        
        const errors = this.validate(this.state.data);
        //update errors object in our state
        this.setState({errors});

        if(Object.keys(errors).length === 0){
            this.setState({loading:true});
            this.props.submit(this.state.data)
            .catch(err => this.setState({errors:err.response.data.errors, loading:false}));
        }
    }


    validate = (data) => {
        const errors = {};
        if(!Validator.isEmail(data.email)) errors.email="Invalid email!";
        if(!data.password) errors.password = "Can't be blank";
        return errors;
    }




    //all the react component have a render function
    render(){
        //destructuring state object
        const {data, errors, loading} = this.state;
        
        return (
        <div>
            <Form onSubmit={this.onSubmit}  >
            { errors.global && <Message negative>
                <Message.Header>Something went Wrong!</Message.Header>
                { errors.global }
            </Message> }
                <Form.Field error={!!errors.email}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@example.com"
                        value={data.email}
                        onChange={this.onChange}
                        />
                        {errors.email && <InlineError text={errors.email}/>}
                </Form.Field>
                <Form.Field error={!!errors.password}>
                    <label htmlFor="password">password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Make it secure"
                        value={data.password}
                        onChange={this.onChange}
                        />
                        {errors.password && <InlineError text={errors.password}/> }
                </Form.Field>
                <Button loading={loading} primary>Login</Button>
            </Form>
        </div>
        )
    }
}

LoginForm.propTypes  = {
    submit : propTypes.func.isRequired
} 

export default LoginForm;