import React from 'react'
import { useNavigate,Navigate} from 'react-router-dom'

export default function RequireAuth(props) {
    const navigate = useNavigate();
    console.log(props.isLoggedIn);
    console.log(props.flag)
    console.log(props.userRole,"reqAuth")
    if(props.flag && props.isLoggedIn && (props.role === props.userRole))
    {
        return props.children;
    }
    return <Navigate to = '/' replace/>
    
}
