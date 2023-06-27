import React from "react";


export default class LoginForm extends React.Component {
    render() {
        return (<div className="AppLoginForm">
            <header>
                <form>
                    <input className="AppUsername" id="txtUsernane" type="text" placeholder="Enter username/email... " />
                    <input className="AppPassword" id="txtUsernane" type="password" placeholder="Enter password... " autoComplete="true" />
                    <input className="AppLoginButton" id="btnLoginButton" type="button" value="Login" />


                </form>


            </header>


        </div>);

    }

}