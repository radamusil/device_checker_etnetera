import React, { useState, useEffect } from 'react';
import DeviceCard from '../DeviceCard';
import axios from 'axios';

const DeviceList = (props) => {
    //const devices = props.devices;
    const user = props.user;
    const token = props.token;

    //const [user, setUser] = useState(localStorage.getItem('user') || '');
    //const [token, setToken] = useState(localStorage.getItem('token') || '');
    //const [type, setType] = useState(localStorage.getItem('type') || '');
    //const [redirect, setRedirect] = useState('');
    const [devices, setDevices] = useState(null);
  
  
    const getDevices = async () => {
    
    const response = await axios.get('https://js-test-api.etnetera.cz/api/v1/phones', {
        headers: {
          'Content-Type': 'application/json',
          'Auth-Token':  token,
          
        }},);
        const data = response.data;
  
        setDevices(data);
  
    
    }
  
  
  
      useEffect(() => {
      getDevices();
    }, []); 



    return(
        <div className="deviceList">
            {devices ? devices.map((device, id) => (
                <DeviceCard key={id} device={ device } user={user} token={token}/>
            )): <div></div>}
        </div>
    )

}

export default DeviceList;