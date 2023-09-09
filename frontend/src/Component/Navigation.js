import React from 'react';
import { useDispatch , useSelector  } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../http/index.js';
import { setAuth } from '../store/authSlice';



const Navigation = () => {
    const brandStyle = {
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '22px',
        display: 'flex',
        alignItems: 'center',
    };

    const logoText = {
        marginLeft: '10px',
    };

    const dispatch = useDispatch();
    const { isAuth, user } = useSelector((state) => state.auth);
    async function logoutUser() {
        try {
            const { data } = await logout();
            dispatch(setAuth(data));
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <nav className={`${'Nav_navbar'} container`}>
            <Link style={brandStyle} to="/">
                <img src="/images/logo.png" alt="logo" />
                <span style={logoText}>RemoteDriver</span>
            </Link>
            {isAuth && (
            <div className='Nav_navRight'>
                <h3>{user?.name}</h3>
                <Link to = '/'>
                    <img 
                    className={'Nav_avatar'}
                    src ={
                        user.avatar
                         ? user.avatar 
                         : '/img/man.png'
                        } 
                    width="40" 
                    height ="40"
                     alt ="avatar" />
                </Link>
            
           <button className={"Nav_logoutUser"} onClick ={logoutUser}>
           <img src = "/img/logout.png" alt="logout" />
           </button>
           </div>
            )} 
        </nav>
       
    );
};

export default Navigation;