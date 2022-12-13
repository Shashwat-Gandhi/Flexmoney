# Development project created for flexmoney internship assignment: 

## About the project
- It is a admission form for yoga classes.
- User can enroll in any one of the four batches :  
	1. 5AM to 6AM
	2. 6AM to 7AM
	3. 7AM to 8AM
	4. 5PM to 6PM

- Once enrolled user cannot change his batch
- User is allowed to pay later in the month


### Workflow of the site: 
- **First** is the **homepage** of the site, which asks for **email address** and **phone number** to **register** the user.
- If any one is already found in the database, it won't proceed further so make sure to give both of them different each time.
[![Home page: App.js](https://github.com/Shashwat-Gandhi/Flexmoney/blob/master/im1.png "Home page: App.js")](https://github.com/Shashwat-Gandhi/Flexmoney/blob/master/im1.png "Home page: App.js")


- Once you are registered on the site, if you are the first time visitor, it takes you to the **second page **where it asks you about your **name and age**.
- If the age is not between 18-65 years , it won't proceed further.
- This process is just to take all the details of the user for the first time. 
[![Second page for Name and Age](https://github.com/Shashwat-Gandhi/Flexmoney/blob/master/im3.png "Second page for Name and Age")](https://github.com/Shashwat-Gandhi/Flexmoney/blob/master/im3.png "Second page for Name and Age")

- After this is the **final page** for **enrolling **in any one of the four batches and completing the **payment**.
- Till the point you have not enrolled in any batch, you will be able to select any batch in the select menu and click on enroll to finalize your submission.

- Only after you have enrolled in a batch, you are allowed to pay for the course.
- To do that just click the button 'Yet to pay' and it will change to 'Already paid' signifying that the payment was successful.

[![Final Page](https://github.com/Shashwat-Gandhi/Flexmoney/blob/master/im2.png "Final Page")](https://github.com/Shashwat-Gandhi/Flexmoney/blob/master/im2.png "Final Page")

### Implementation:
- To implement the above workflow, I have used React.js framework for the frontend and Node.js for the backend.
- For the database, I have used MongoDB and connected to it using the mongoose library.

#### Frontend: 
	In React, I have used the BrowserRouter to move between pages.
	The first page is the App.js, implementing the first form for email and phone number.
	I have deployed the frontend on Netlify
	Because of the lack of time, I have used the localStorage for storing and updating data across components.

#### Backend: 
	The code is separted into : Controller, Routes, Model (Schema), server
	Controller: I have written all the main implementations of the API. For example to register a user ('enterUser') 
	Routes: Which route is to be handled by which controller
	Models(schema): Define the schema for a model
	index.js: The server file to deploy the server

##### Some Deployment Issues
	I have deployed the backend on Vercel, as in Heroku it was declining my Debit Card and Github Student Developer Pack promo also could not help.
	I connected backend on Vercel to MongoDB but the connection seems shaky and often gets broken for no reason.
	For that I have exposed a page to reload to reconnect to the MongoDB server. I did not have time to look for better methods. ('https://flexmoney-umber.vercel.app/)



