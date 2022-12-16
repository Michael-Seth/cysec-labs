this are the routes you may access and the data/headers to be sent. 

note: this does not include those used in this react app. you should add those too

**for users**
base url = localhost:8081/api/v1/users

##Auths
forgot password : /forgot

{email: "user email"}

## the user will get a token through an email. they will click on a link where they  will verify token 


verify fogot token: /reset

{
    resetData:{
        token: "reset Token",
        password: "new password"
    }
}



###

### profile
updatepassword : /update-password

 {"passwordData":{
   "currentPassword":"Abc1234",
   "newPassword":"Abc12345",
   "confirmNewPassword":"Abc12345"
}}


update profile pic: /update-profile-picture

** image uploaded somewhere like cloudinary or any cloud based storage **
{
newProfilePicture: "image url"
}










