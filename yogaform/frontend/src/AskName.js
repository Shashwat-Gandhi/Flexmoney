import {useState} from 'react';
import axios from './axiosInstance';
import { useNavigate } from 'react-router-dom';

const AskName = () => {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState();
    const navigate = useNavigate();

    const submitForm = () => {
        axios.post('/api/v1/addUserNameAge', {email: localStorage.getItem('email'),  userName, userAge}).then((resp) => {
            if(!resp.data.userAdded) {
                alert(resp.data.error)
            }
            else {
                localStorage.setItem('userName', userName)
                localStorage.setItem('userAge', userAge);
                navigate('/batchSelect')
            } 
        });
    }

    return (
        <div className="App">
      
        <div className="container">
          <form >
            <p>Please tell us your good name</p>
            <input type="text" placeholder="Name" onChange={(event)=>{setUserName(event.target.value)}} value={userName}/><br/>
            <input type="number" placeholder="Age" onChange={(event)=>{setUserAge(event.target.value)}} value={userAge}/><br/>
            <input type="button" value="Enter" onClick={() => {submitForm()}}/><br/>
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

export default AskName