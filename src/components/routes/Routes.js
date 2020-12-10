import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ChatRoom from "../pages/ChatRoom/ChatRoom";
import Home from "../pages/Home/Home";

const Routes = () => {
   return (
      <div>
         <Router>
            <Switch>
               <Route path="/home" component={Home} />
               <Route path="/chatroom" component={ChatRoom} />
            </Switch>
         </Router>
      </div>
   );
};

export default Routes;
