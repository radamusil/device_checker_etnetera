import React, { useState } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import './style.css'




const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState('');
    

    //const dispatch = useDispatch();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        let login = {};

        
        login.login= username;
        login.password= password ;

        

         const response = await axios.post('https://js-test-api.etnetera.cz/api/v1/login', login, {
            headers: {
                'Content-Type': 'application/json'
            }},);

        const response_data = response.data;
        

        localStorage.setItem('user', response_data.login);
        localStorage.setItem('type', response_data.type);
        localStorage.setItem('token', response_data.token); 
        if (response.status === 200) {
            setRedirect('/device_list');
        }
    }

    return (
        <div className="loginHolder">
            
            <form  className="login" onSubmit={handleSubmit}>
                <input className="logininput" type='text' placeholder="Přihlašovací Jméno" name='username' onChange={ handleUsernameChange }/>
                
                <input className="logininput" type='password' placeholder="Heslo" name='password' onChange={ handlePasswordChange }/>

                <button className="loginBtn">Přihlásit se</button>
            </form>
            <Redirect to={ redirect } />
        </div>
        );
}

export default Login;