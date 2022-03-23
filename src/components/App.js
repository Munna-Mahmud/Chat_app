import React from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { AuthProvider } from "../contexts/AuthContexts"
import Login from "./Login"
// import home from "./home";
import Chats from './Chats';


function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/chats" component={Chats} />
            <Route path="/" component={Login} />
            {/* <Route path="/home" component={home} /> */}
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  )
}

export default App
