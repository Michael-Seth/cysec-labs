this are the routes you may access and the data/headers to be sent. 


**for users**
base url = localhost:8081/api/v1/users
##Auth
**RESEND EMAIL VERIFICATION TOKEN**
path: /request-token
method: post
data=> {
    requestData: email
}

## open vpn related
**GET OPEN VPN CONFIG FILE**
path: /getconfig 
headers:{
    authorization: userToken stored in cookies
}
method: get


**GET CURRENT VPN IP ADDRESS**
path:   /get-current-ip
method:get
headers:{
    authorization: userToken stored in cookies
}

**START MACHINE**
path:/start-machine
method:post
headers:{
    authorization: userToken stored in cookies
}
data=>{
    machine:{
        name:"name of the machine"
    }
}

**STOP MACHINE**
path:/stop-machine
method:get
headers:{
    authorization: userToken stored in cookies
}

**GET DOWNLOADABLE MACHINES**
path:/get-downloadables
method:get
headers:{
    authorization: userToken stored in cookies
}

**GET ALL MACHINES**
path:/get-machines
method:get
headers:{
    authorization: userToken stored in cookies
}   

**GET A MACHINE**

path:/get-machine/:machineID
method:get
headers:{
    authorization: userToken stored in cookies
} 

**GET RUNNNING INSTANCE**
path:/get-running-instance
method:get
headers:{
    authorization: userToken stored in cookies
}



---------------------------------------------------------




#labs related
**SEARCH LABS**
path : /search
method:post
data=> {
    query
}

**GET ALL LABS**
path:/getlabs
method: get

**GET A LAB **
path: /getlab/:labID 
method:get
headers:{
    authorization: userToken stored in cookies
}

**CHECK TASK ANSWER**
path: /check
data=>{
    taskSubmitted:{
        id: "task id"
        answer: "task answer"
    }
}
method:post
headers:{
    authorization: userToken stored in cookies
}

**CHECK TASK COMPLETION STATUS*
path: /check-completion-status
data=>{
    labInfo:{
        labID:'id of the lab'
    }
}
method:post
headers:{
    authorization: userToken stored in cookies
}

**GET COMPLETED ROOMS**
path:/completed-rooms
method:get
headers:{
    authorization: userToken stored in cookies
}
**GET POPULAR LABS**
path:/popular-labs
method:get
headers:{
    authorization: userToken stored in cookies
}

**GET RECENT LABS**
path: /get-recent-labs
method: get


**GET LEADERBOARD**
path:/get-leaderboard
method: get


**GET ALL COMPETITIONS**
path:/get-competitions
method:get


----------------------------------------------------

**SEND FEED BACK FROM USERS**
path:/send-feedback
method:post
headers:{
    authorization: userToken stored in cookies
}
data=>{
feedbackFromUser:{
    message:"user message"
    
}
}

**ADD USERS TO NEWSLETTERS**
path:/join-newsletter
method:post

data=> {email:"user email"}
