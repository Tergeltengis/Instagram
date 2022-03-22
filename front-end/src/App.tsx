import React, {  Suspense, lazy } from 'react';
import { Switch, Route} from 'react-router-dom';

import PrivateRoute from "./routes/PrivateRoute";
import { LogOut } from "./components";

import LoadingPage from './pages/LoadingPage';

const LoginPage = lazy(()=> import('./pages/LoginPage'));
const Feed = lazy(() => import('./pages/Feed'));



function App() {

  const renderApp = ()=>{
    // const token = Cookies.get("token");
    // const token = sessionStorage.getItem("token");
   return( 
    <>
   <Switch>
      <Route path="/login" exact={false} component={LoginPage}/>
      <Route path="/logout" exact={false} component={LogOut}/>
      <PrivateRoute path="/feed" exact={false} component={Feed}/>
      <PrivateRoute path="/" exact={false} component={Feed}/>
    </Switch>
    </>
   );
  };

  return (
      <Suspense fallback={<LoadingPage />}>
        {renderApp()}
      </Suspense>
  );
}

export default App;
