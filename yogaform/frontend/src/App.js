import './App.css';
import axiosInstance from './axiosInstance'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';


const App = () => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState();
  const navigate = useNavigate();

  const submitForm = (event) => {
   axiosInstance.post('/api/v1/enterUser',{userData: {email: email, phoneNumber: phoneNumber}}).then((resp) => {
    console.log(resp)
    if(!resp.data.userEntered) {
      alert(resp.data.error)
      return;
    }
    localStorage.setItem('email', email);
    localStorage.setItem('phoneNumber', phoneNumber)
    if(resp.data.userThere) {
      console.log(resp)
      // router to batch select page
      const {userAge, userName, batch, paymentDone} = resp.data.userData;
      localStorage.setItem('userAge', userAge);
      localStorage.setItem('userName', userName);
      localStorage.setItem('batch', batch);
      localStorage.setItem('paymentDone', paymentDone);
      navigate('/batchSelect')
    } else {
      // route to ask name page
      navigate('/askName')
    }
   })
  
    
  }

  return (
    <div className="App">

        <div className="container">
          <form >
            <p>Welcome</p>
            <input type="email" placeholder="Email" onChange={(event)=>{setEmail(event.target.value)}} value={email}/><br/>
            <input type="number" placeholder="Phone number" onChange={(event)=>{setPhoneNumber(event.target.value)}} value={(phoneNumber == 0 ? '': phoneNumber)}/> <br/>
            <input type="button" value="Enter" onClick={submitForm}/><br/>
            <a href="https://flexmoney-umber.vercel.app//TandC">Terms and Conditions</a>
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
