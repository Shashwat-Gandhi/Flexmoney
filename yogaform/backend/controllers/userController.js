// this controller is user data validation and storing data on database

const validatePhoneNumber = (phoneNumber) => {
    var validRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
    return validRegex.test(phoneNumber)
}

const validateEmail = (email)  => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return validRegex.test(email)
}

const validateAge = (age) => {
    return (typeof(age) === 'number' && age >= 18 && age <= 65)
}

const validateBatch = (batch) => {
    return (typeof(batch) === 'number' && batch >= 0 && batch <= 4)
}

const validateUserData = (req, res) => {
    const {name, phoneNumber, email, batch, age} = req.body.userData
    
    if(!validatePhoneNumber(phoneNumber))
        res.status(400).send('Invalid phone number')

    if(!validateEmail(email)) {
        res.status(400).send('Invalid email')
    }
    
    if(!validateAge(age)) {
        res.status(400).send('Invalid age')
    }

    if(!validateBatch(batch))  {
        res.status(400).send('Invalid batch')
    }
}

