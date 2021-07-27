import React,{useState} from 'react'
import Form from '../components/form'
import HeaderContainer from './headercontainer'
import { loginCredentials } from '../constants/loginDetails'
import * as ROUTES from '../constants/routes'
import { Route, useHistory } from 'react-router'


const Signincontainer = () => {

    const history= useHistory();
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const isInvalid= emailAddress === '' || password === '';

    const SubmitHandler =(event)=>{
        event.preventDefault();
        if(loginCredentials.username === emailAddress && loginCredentials.password === password){
            localStorage.setItem('isUserLoggedIn',true);
            history.push(ROUTES.EMPLOYEEPAGE);
            setError(null);
        }else if(loginCredentials.username !== emailAddress && loginCredentials.password !== password){
            setError('Both emailAddress and password are wrong');
        }else if(loginCredentials.username !== emailAddress){
            setError('Given emailAddress is wrong');
        }else if(loginCredentials.password !== password){
            setError('Given password is wrong');
        }
        setEmailAddress('');
        setPassword('');
    }

    return (
        <>
        <HeaderContainer>
            <Form>
                <Form.Title>Sign In</Form.Title>
                <Form.Base onSubmit={SubmitHandler} method='POST'>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Input 
                        type='email'
                        placeholder='emailaddress'
                        value={emailAddress}
                        onChange={({target})=>setEmailAddress(target.value)}
                        required
                    />
                    <Form.Input 
                        type='password'
                        placeholder='password'
                        value={password}
                        onChange={({target})=>setPassword(target.value)}
                        autocomplete='off'
                        required
                    />
                    <Form.Submit
                        type='submit'
                        disabled={isInvalid}
                    >Sign In</Form.Submit>
                </Form.Base>
            </Form>
            </HeaderContainer>
        </>
    )
}

export default Signincontainer
