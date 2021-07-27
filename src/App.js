import * as ROUTES from './constants/routes'
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import HeaderContainer from './container/headercontainer'
import Signincontainer from './container/signincontainer';
import TableContainer from './container/tablecontainer';

function App() {

  return (
    <>
      <Router>
        <Route exact path={ROUTES.HOME}    component={HeaderContainer}/>
        <Route exact path={ROUTES.SIGNIN} component={Signincontainer}/>
        <Route exact path={ROUTES.EMPLOYEEPAGE} component={TableContainer}/>
      </Router>
    </>
  );
}

export default App;
