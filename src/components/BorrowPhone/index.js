import React, { useState } from 'react';
import axios from 'axios';

const BorrowPhone = (props) => {
    const device = props.device;
    //const token = props.token;
    const [token, setToken] = useState(localStorage.getItem('token'));

    const handleBorrow = async () => {
        const response = await axios.post('https://js-test-api.etnetera.cz/api/v1/phones/' + device.id + '/borrow', '', {
            headers: {
              'Content-Type': 'application/json',
              'Auth-Token': token,
              
            }},);
    
        
    }
   
    return(
        <button onClick={ handleBorrow }>
            Vypůjčit
        </button>
    )
}

export default BorrowPhone;