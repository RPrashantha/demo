import React from 'react';
import './login.css';




class Login extends React.Component {
    constructor(props) {
        super(props);

    }


    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="login">
                <div className="">
                    <form>
                        <div className="logincontainer">
                            <div >
                                <input type="text" name="username" className="form-control" placeholder="Username" />
                            </div>
                            <div >
                                <input type="password" name="password" className="form-control" placeholder="Password" />
                            </div>
                            <div className="btn btn-md login-btn">
                                <button className="btn">Login</button>
                            </div>
                        </div>
                    </form>
                </div>



            </div>
        );
    }
}

export default Login;