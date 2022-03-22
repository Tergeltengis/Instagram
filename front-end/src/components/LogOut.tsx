import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { logOut } from "../redux/user/userActions"

export const LogOut = ()=>{
    useAppSelector(state => state.userReducer); 
    const dispatch = useAppDispatch();

    //dispatch(logOut() as any);
    useEffect(() => { 
                      dispatch(logOut() as any); 
                        }, 
          [dispatch]);

      return <Redirect to="/login" />;
}