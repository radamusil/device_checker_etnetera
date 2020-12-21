import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';


const CreateDevice = (props) => {
    const token = props.token;
    const type = props.type;
    const [code, setCode] = useState();
    const [vendor, setVendor] = useState();
    const [model, setModel] = useState();
    const [os, setOs]= useState();
    const [version, setVersion]= useState();
    const [image, setImage]= useState();
    const [redirect, setRedirect] = useState();
    

    const handleCodeChange = (event) => {
        setCode(event.target.value);
    }

    const handleVendorChange = (event) => {
        setVendor(event.target.value);
    }

    const handleModelChange = (event) => {
        setModel(event.target.value);
    }

    const handleOsChange = (event) => {
        setOs(event.target.value);
    }

    const handleVersionChange = (event) => {
        setVersion(event.target.value);
    }

    const handleImageChange = (event) => {
        setImage(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        let device = {};
        
        device.code= code;
        device.vendor= vendor;
        device.model= model;
        device.os= os;
        device.osVersion= version;
        device.image=image;

        

        const response = await axios.post('https://js-test-api.etnetera.cz/api/v1/phones', device, {
            headers: {
              'Content-Type': 'application/json',
              'Auth-Token':  token,
              
            }},);

    }

    if (type === 'admin'){

    return(
        <div className="form_holder">
            <form className="login" onSubmit={ handleSubmit }>
                <input className="logininput" type="text" placeholder="Kódové označení (identifikátor)" name="code" value={code} onChange={ handleCodeChange }/>
                <input className="logininput" type="text" placeholder="Výrobce" name="vendor" value={vendor} onChange={ handleVendorChange }/>
                <input className="logininput" type="text" placeholder="Model" name="model" value={model} onChange={ handleModelChange }/>
                <input className="logininput" type="text" placeholder="Operační systém" name="os" value={os} onChange={ handleOsChange }/>
                <input className="logininput" type="text" placeholder="Verze operačního systému" name="version" value={version} onChange={ handleVersionChange }/>
                <input className="logininput" type="text" placeholder="Obrázek URL" name="image" value={image} onChange={ handleImageChange }/>
                <button className="loginBtn">Přidat zařízení</button>
            </form>
        </div>
    )} else {
        return (
            <Redirect to='/device_list' />
        )
    }
    
}


export default CreateDevice;