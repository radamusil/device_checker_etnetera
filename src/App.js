import React , {useState, useEffect, createContext} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Login from './components/login';
import DeviceList from './components/DeviceList';
import CreateDevice from './components/CreateDevice';
import Header from './components/Header';

import './App.css';

export const TokenContext = createContext({token: null});
//export const UserContext = createContext({user: null});

function App() {

  const [user, setUser] = useState(localStorage.getItem('user') || '');
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [type, setType] = useState(localStorage.getItem('type') || '');
  const [redirect, setRedirect] = useState('');
/*   const [devices, setDevices] = useState(null);


  const getDevices = async () => {
  
  const response = await axios.get('https://js-test-api.etnetera.cz/api/v1/phones', {
      headers: {
        'Content-Type': 'application/json',
        'Auth-Token':  token,
        
      }},);
      const data = response.data;

      setDevices(data);

      console.log(data);
  
  }



   useEffect(() => {
    getDevices();
  }, []);  */



  const handleLogout = () => {
    localStorage.clear();
    setUser('');
    setToken('');
    setType('');
    setRedirect('/')
    window.location.reload(false);
  };


  return (

      <div className="App">
        <Router>
          <Header token={token} type={type} handleLogout={ handleLogout }/>
          <main>
            <Switch>
              <Route exact path="/" children={<Login />}/>
              <Route path="/device_list" children={<DeviceList /* getDevices = {getDevices} devices={ devices } */ user={user} token={token}/>}/>
              <Route path="/create_device" children={<CreateDevice type={type} token={token}/>}/>
            </Switch>
          </main>
          <Redirect to={ redirect } />
        </Router>

      </div>
  );
}

export default App;
