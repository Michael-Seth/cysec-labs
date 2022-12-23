import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const checkAdmin = () => {
    const [isAdmin, setIsAdmin] = useState(false)
//this checks if the user is an admin or not 
     const getUser = async () => {
       try {
         const resp = await axios.get("/users/user", {
           headers: {
             authorization: JSON.parse(sessionStorage.getItem("token"))?.token,
           },
         });
           
           
        if (resp.data?.role === "admin") {
          setIsAdmin(true);
          return;
        } else {
          setIsAdmin(false);
        }

         //if user is not logged in no data will be here, so you can redirect them to anywhere.
       } catch (error) {
         console.log(error);
       }
     };
    
    useEffect(() => {
       

       getUser()


   }, [])


    return isAdmin


}


export default checkAdmin