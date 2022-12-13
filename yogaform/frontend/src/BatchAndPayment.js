import { useEffect, useState } from "react";
import axiosInstance from './axiosInstance';


const BatchAndPayment = () => {
    const [userBatch, setUserBatch] = useState(0);
    const [alreadyEnrolled, setAlreadyEnrolled] = useState(false)
    const [paid, setPaid] = useState((localStorage.getItem('paymentDone')==="true"? true: false));

    const correctAlreadyEnrolled = () => {
        const enrolledBatch = localStorage.getItem('batch')
        if(enrolledBatch == "0" || enrolledBatch == "1" || enrolledBatch == "2" || enrolledBatch == "3") {
            return true
        } else {
            return false;
        }
    }
    // setUserBatch(correctAlreadyEnrolled())
    useEffect(() => {
        setAlreadyEnrolled(correctAlreadyEnrolled())
        var x = localStorage.getItem('batch')
        if(x !== "undefined" && x != "-1") {
            setUserBatch(x);
        }
    }, [])
    const completePayment = () => {
        axiosInstance.post('/api/v1/completePayment',{email: localStorage.getItem('email')}).then(
            (resp) => {
                if(!resp.data.paymentDone) {
                    alert(resp.data.error)
                    return;
                }
                setPaid(true)
            }
        )
    }

    const enroll = () => {
        axiosInstance.post('/api/v1/enrollInBatch',{email: localStorage.getItem('email'), newBatch: userBatch})
        .then((resp) => {
            console.log(resp)
            if(!resp.data.enrolled) {
                alert(resp.data.error)
                return;
            }
            localStorage.setItem('batch', userBatch)
            setAlreadyEnrolled(true);
        })
    }

    return (
        <div className="App">
        <div className="container">
          <form >
            <p>Please select your batch and make payment</p>
            <label htmlFor="batch">Batch:&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <select disabled={alreadyEnrolled} id="batches" name="batches" value={userBatch} onChange={(event) => {setUserBatch(event.target.value)}}>
                <option value="0">6 AM to 7 AM</option>
                <option value="1">7AM to 8AM</option>
                <option value="2">8 AM to 9AM</option>
                <option value="3">5 PM to 6 PM</option>
              </select><br/>
              {!alreadyEnrolled && (<input type="button" onClick={()=>{enroll()}} value={alreadyEnrolled?"Enrolled":"Enroll"}/>)}
              <br/>
            {!!alreadyEnrolled && (
                <><br/>You are already enrolled in a batch for this month<br/><br/></>
            )}
            <input disabled={paid} type="button" value={paid?"Already paid":"Yet to pay"}
                onClick={()=>{completePayment()}}/><br/>
            <a href="https://flexmoney-umber.vercel.app/TandC">Terms and Conditions</a>
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

export default BatchAndPayment
