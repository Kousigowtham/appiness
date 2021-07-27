import React,{useState} from 'react'
import {Header} from '../components'
import * as ROUTES from '../constants/routes'

const HeaderContainer = ({children}) => {

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(localStorage.getItem('isUserLoggedIn'));

    return (
        <>
        <Header src='/Assets/headerBg6.jpg'>
            <Header.Base>
                <Header.Logo to={ROUTES.HOME} src='/Assets/Logo.png'/>
                { !isUserLoggedIn ?
                    <Header.Button to={ROUTES.SIGNIN}>Sign In</Header.Button>:
                    <Header.Button  onClick={()=> { localStorage.removeItem('isUserLoggedIn'); setIsUserLoggedIn(null) }} to={ROUTES.SIGNIN}>Sign Out</Header.Button>
                }
            </Header.Base>
            {children}
        </Header>
        </>
    )
}

export default HeaderContainer
