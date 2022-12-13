// this controller is user data validation and storing data on database

const userModel = require('../models/userModel')

const validatePhoneNumber = (phoneNumber) => {
    var validRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
    return validRegex.test(phoneNumber)
}

const validateEmail = (email)  => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return validRegex.test(email)
}


exports.enterUser = async (req, res) => {
    // check if user exists
    const {email, phoneNumber} = req.body.userData;
    if(!validateEmail(email)) {
        res.status(200).send({userEntered: false, error: 'Invalid email'});
        return;
    }
    if(!validatePhoneNumber(phoneNumber)) {
        res.status(200).send({userEntered: false, error: 'Invalid phone number'})
        return;
    }

    const user = await userModel.find({$or:[{'email':email, 'phoneNumber':phoneNumber}]})
    console.log(user)
    if(!user || user.length == 0) {
        // user does not exits, so add the user
        console.log('user does not exists, adding user')
        await userModel.create({email: email, phoneNumber: phoneNumber})
        console.log('user added')
        res.status(200).send({userEntered: true, userThere: false})
        return ;
    } 
    // user with similar credentials exists
    if(user.length > 1 || user[0].email != email || user[0].phoneNumber != phoneNumber) {
        res.status(200).send({userEntered: false, error: "Email or phone number already registered!"});
        return;
    }
    

    res.status(200).send({userEntered: true, userThere: true, userData:{"email": user[0].email, "phoneNumber": user[0].phoneNumber, "userName": user[0].name, "userAge": user[0].age, "batch": user[0].batch, "paymentDone": user[0].paymentDone}
    })
}

exports.addUserNameAge = async (req, res) => {
    const {email, userName, userAge} = req.body;
    if(userAge > 65 || userAge < 18) {
        res.status(200).send({userAdded: false, error: "Age should be between 18 to 65"});
        return;
    }

    const user = await userModel.findOne({email: email});
    if(!user) {
        res.send({userAdded: false, error: 'Could not find the user in database'});
    }
    try {
        user.age = userAge
        user.name = userName
        await user.save()
        res.send({userAdded:true})
        return;
    } catch(err) {
        res.status(200).send({userAdded:false, error: "Due to some server issure, could not update the details."})
        return;
    }
}

exports.completePayment = async (req, res) => {
    const {email} = req.body;
    var user = userModel.findOne({email: email})
    if(!user) {
        res.send({paymentDone: false, error: "Could not find the user"})
        return;
    }
    if(user.batch == -1) {
        res.send({paymentDone: false, error: "Please enroll in a batch first"})
        return;
    }
    // console.log(user)
    try {
        user.paymentDone = true
        await userModel.updateOne({_id: user._id},{paymentDone: true})
        res.send({paymentDone: true})
        return;
    } catch(err) {
        console.log(err)
        res.send({paymentDone: false, error: 'Due to server issue, we could not complete the payment'})
    }
}

exports.enrollInBatch = async (req, res) => {
    const {email, newBatch} = req.body

    const user = await userModel.findOne({email: email})
    if(!user) {
        res.send({enrolled: false, error: 'Could not find the user'})
        return;
    }

    try {
        console.log(typeof(newBatch))
        user.batch = newBatch;
        user.save();
        res.send({enrolled: true})
    } catch(err) {
        res.send({enrolled: false, error: 'Due to some server issue, we could not enroll you in a batch'})
    }

}