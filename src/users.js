import { useEffect, useState } from "react";
import axios from 'axios';


const Users = () => {
    const [user,setUser] = useState([])
    useEffect(()=> {
        axios.get('https://reqres.in/api/users')
        .then(function (response) {
            console.log(response.data.data);   
        })
        .catch(function (error) {
            console.log(error);
            
        })
    }, [])
    return(
        <>

        </>
    )
};
export default Users;