import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import "antd/dist/antd.css";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Department from "./pages/Department/Department";
import Employee from "./pages/Employee/Employee";
import DetailEmployee from "./pages/DetailEmployee/Detail";
import StaffType from "./pages/StaffType";
import Level from "./pages/Level";
import Specialize from "./pages/Specialize";
import Role from "./pages/Role";
import AddEmployee from "./pages/AddEmployee";
import Wage from "./pages/Wage/Wage";

const App = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute
          exact
          path="/detail-employee"
          component={DetailEmployee}
        />
        <PrivateRoute exact path="/deparments" component={Department} />
        <PrivateRoute exact path="/employees" component={Employee} />
        <PrivateRoute exact path="/staff-types" component={StaffType} />
        <PrivateRoute exact path="/levels" component={Level} />
        <PrivateRoute exact path="/specializes" component={Specialize} />
        <PrivateRoute exact path="/roles" component={Role} />
        <PrivateRoute exact path="/add-employee" component={AddEmployee} />
        <PrivateRoute exact path="/wage" component={Wage} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
