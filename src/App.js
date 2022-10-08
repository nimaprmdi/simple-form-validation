import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/signup" component={SignUp} />
                <Route path="/login" component={Login} />
                <Route path="/" component={SignUp} />
                <Redirect path="*" to="/" />
            </Switch>
        </div>
    );
}

export default App;
