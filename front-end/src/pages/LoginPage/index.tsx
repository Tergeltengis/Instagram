import React, { useEffect,useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from 'reactstrap';
import Cookies from "js-cookie";

import classNames from "classnames";

import { loginUser } from "../../redux/user/userActions"
import { useAppSelector, useAppDispatch } from '../../redux/hooks'

const LoginPage = () => {
  const token = Cookies.get("token");
  const user = useAppSelector(state => state.userReducer); 
  const dispatch = useAppDispatch();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(true);
  // const [userValid, setUserValid] = useState(false);
  // const [passValid, setPassValid] = useState(false);

 
  var loginButtonClass = classNames({
    'login__submit-btn': true,
    'login__submit-btn-active': submitDisabled,
  })
 

  useEffect(()=>{
    
  },[]);


const changeUserName = (e: any)=>{
  setUserName(e.target.value);
  user.error = false;
  
  }
const changePassword = (e: any) => {
  setPassword(e.target.value);
  user.error = false;
}
  const login = ()=>{
    dispatch(loginUser(username, password) as any);
  }
  return (
    <>
    
    {token && user.token && <Redirect to="/"/>}

    <div className="login">
    <div className="login__image-section">
      <div className="login__iphone-header">
        <div className="login__iphone-image">
        <img className="RP4i1 JtrJi " src="https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg" alt=""/>
        </div>
      </div>
      <div className="login__section">
    <div className="login__container">
      <div className="login__form">
      <div className="login__header">
        <h1 className="login__header-img login__header-text">
          Instagram
        </h1>
      </div>
      {user.error ? (<div className="login__errorMessage">{user.errorMessage}</div>) : null}
    <form>
      <div className="login__username">
        <label>
      <input id="username" onChange={changeUserName} className="login__username-text" type="text" name="name" placeholder="Phone number, username, or email"/>
      </label>
      </div>
  
    <div className="login__password">
      <label className="login__password-label">
      <input onChange={changePassword} className="login__password-text" type="password" name="name" placeholder="Password"/>
      </label>
    </div>
    <div className="login__submit">
      <label>
     
      <Button className={loginButtonClass} onClick={login} disabled={!submitDisabled}>Login In</Button>
  
      </label>
   
    </div>
    
  </form>
  <div className="login__forget">
   
   <div className="login__line">
      <div className="login__line-abstract">
    </div>
  <div className="login__text-or">or</div>
  <div className="login__line-abstract">
  </div>
  </div>
    <div className="login__forget-text">
    Forgot password?
  </div>
  </div>
 
  </div>
  <div className="login__signup">
    <p>Don't have an account? Sign up</p>
  </div>
  </div>
  
  </div>
  </div>
 </div>
 </>
  );
}

export default LoginPage;