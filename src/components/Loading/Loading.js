import React from 'react'
import logo from '../../assets/logo/logo2.png'
import './Loading.css'

function Loading() {
    return (<div className='loading-container'>
        <img src={logo} alt="" height={70} className='logo-loading' />
    </div>)
}

export default Loading;
