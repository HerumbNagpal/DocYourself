import React from 'react'
import tick from '../images/tick.gif'
import './Styles.css'
export const LoggedIn = () => {
    return (
        <div className='loggedIn' >
            <div className="first">
                <img className='tick' src={tick} alt="tick" />

            </div>
            <div className="second">
                <h1>Great!</h1>
                <h1>Your account has been created sucsessfully</h1>
                <a className='explore' href='http://www.deeptamanohar.life.s3-website.ap-south-1.amazonaws.com/' > Explore </a>
            </div>
        </div>
    )
}
