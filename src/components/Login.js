import React ,{Component} from 'react';
import SignupForm from './SignupForm.js'
import SignIn from './SignIn.js'
import {Switch,Route} from 'react-router-dom'
import Account from './Account'
import SignInExpert from './SignInExpert'
import SignUpExpert from './SignUpExpert'
import AccountExpert from './AccountExpert'
import IssueWarning from './IssueWarning.js'
import govtmain from './govtmain'
;import Vendor from './Vendor'

class Login extends Component {

    
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/"component={SignIn}></Route>
                    <Route  path="/signup" component={SignupForm}></Route>
                    <Route  path="/account" component={Account}></Route>
                    <Route  path="/signinexpert" component={SignInExpert}></Route>
                    <Route  path="/signupexpert" component={SignUpExpert}></Route>
                    <Route  path="/accountexpert" component={AccountExpert}></Route>
                    <Route  path="/issuewarning" component={IssueWarning}></Route>
                    <Route  path="/Vendor" component={Vendor}></Route>
                    <Route  path="/govtmain" component={govtmain}></Route>
                    
                </Switch>

            </div>
        )
    }
}
export default Login;
