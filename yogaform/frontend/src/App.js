import './App.css';
import axios from 'axios'
import {useState} from 'react'

const App = () => {
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [userBatch, setUserBatch] = useState(0);
  const submitForm = (event) => {
    
  }

  return (
    <div className="App">
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap" rel="stylesheet"/> 

        <div className="container">
          <form >
            <p>Welcome</p>
            <input type="text" placeholder="your name" onChange={(event)=>{setUserName(event.target.value)}}/>{userName}<br/>
            <input type="email" placeholder="Email" onChange={(event)=>{setEmail(event.target.value)}}/><br/>
            <input type="number" placeholder="phone number" onChange={(event)=>{setPhoneNumber(event.target.value)}}/> <br/>
            <input type="number" placeholder="age" onChange={(event)=>{setAge(event.target.value)}}/> <br/>
            <label htmlFor="batch">Batch:&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <select id="batches" name="batches" value={userBatch} onChange={(event) => {setUserBatch(event.target.value)}}>
                <option value="0">6 AM to 7 AM</option>
                <option value="1">7AM to 8AM</option>
                <option value="2">8 AM to 9AM</option>
                <option value="3">5 PM to 6 PM</option>
              </select><br/>
            <input type="button" value="Submit" onClick={submitForm}/><br/>
            <a href="#">Terms and Conditions</a>
          </form>

          <div className="drops">
            <div className="drop drop-1"></div>
            <div className="drop drop-2"></div>
            <div className="drop drop-3"></div>
            <div className="drop drop-4"></div>
            <div className="drop drop-5"></div>
          </div>
        </div>
    </div>
  )
}

export default App;
