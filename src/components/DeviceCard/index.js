import React from 'react';
import BorrowPhone from '../BorrowPhone';
import ReturnPhone from '../ReturnPhone';
import './style.css';

const DeviceCard = (props) => {
    const device = props.device;
    const token = props.token;

if (device.borrowed) {
   if (device.borrowed.user.login === props.user) {
    return(
        <div className="card">
            <div className="imgHolder">
                <img className="deviceImg" src={ device.image } alt="Device"/>
            </div>
            <h1>{ device.model }</h1>
            <p>{ device.vendor }</p>
            <p>{ device.os }</p>
            <p>{ device.osVersion }</p>

            <ReturnPhone device={ device } token={token}/>
        </div>
    )} else {
        return(
            <div className="card">
                <div className="imgHolder">
                    <img className="deviceImg" src={ device.image } alt="Device"/>
                </div>
                <h1>{ device.model }</h1>
                <p>{ device.vendor }</p>
                <p>{ device.os }</p>
                <p>{ device.osVersion }</p>
                <button class="borrowed">Vypujčeno</button>
            </div>
        ) } } else {
            return(
                <div className="card">
                    <div className="imgHolder">
                        <img className="deviceImg" src={ device.image } alt="Device"/>
                    </div>
                    <h1>{ device.model }</h1>
                    <p>{ device.vendor }</p>
                    <p>{ device.os }</p>
                    <p>{ device.osVersion }</p>
                    
                    <BorrowPhone device={ device } token={token}/> 
                </div>
            )
        }
}

export default DeviceCard;