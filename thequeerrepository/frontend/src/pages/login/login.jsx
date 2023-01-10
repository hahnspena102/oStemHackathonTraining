import "./login.css"

export default function Login(){
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Username</label>
                <input
                    type="text"
                    className="loginInput"
                    placeholder="username"
                />
                <label>Password</label>
                <input
                    type="password"
                    className="loginInput"
                    placeholder="password"
                />
                <button className="loginButton" type="submit">Login</button>
            </form>
            <button className="loginCreateAccountButton">Create an Account</button>
        </div>
    );
}