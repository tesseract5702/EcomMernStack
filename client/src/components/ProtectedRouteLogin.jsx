import React from 'react'
import { useNavigate,Navigate} from 'react-router-dom'

export default function ProtectedRouteLogin(props) {
    const navigate = useNavigate();
    console.log(props.isLoggedIn);
    console.log(props.flag)
    console.log(props.userRole,"reqAuth")
    if(props.userRole === '')
    {
        return props.children;
    }
    if(props.flag && props.isLoggedIn)
    {
        if(props.userRole === 'user')
        return <Navigate to ='/home' replace/>;
        else if(props.userRole === 'admin')
        return <Navigate to ='/admin' replace/>;
        else return <Navigate to ='/seller' replace/>;
    }
    return props.children;
    
}
