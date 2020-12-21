import React from 'react';
import axios from 'axios';

const ReturnPhone = (props) => {
    const device = props.device;
    const token = props.token;

    const handleReturn = async () => {
        const response = await axios.post('https://js-test-api.etnetera.cz/api/v1/phones/' + device.id + '/return', '', {
            headers: {
              'Content-Type': 'application/json',
              'Auth-Token': token,
              
            }},);
    
            console.log(response);
        
    }
   
    return(
        <button onClick={ handleReturn }>
            Vrátit
        </button>
    )
}

export default ReturnPhone;