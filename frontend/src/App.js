import './App.css';
import React, { useEffect, useState } from 'react';
//modules
import { createBrowserHistory } from 'history';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

/// Auth Provider
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

//pages
import Login from './pages/login/Login';
import Reset from './pages/login/Reset'
import Home from './pages/Home/Home';
import UnderConstruction from './pages/Construction/UnderConstruction';
import Unauthorized from './pages/Unauthorized/Unauthorized';
import Sidebar from './components/Sidebar/Sidebar';
import Courses from './pages/Courses/Courses';
import Message from './pages/Message/Message';
import Attendence from './pages/Attendence/Attendence';
import Marks from './components/Marks/Marks';
import AssignCourse from './pages/AssignCourse/AssignCourse';
import ExistingCourse from './pages/ExistingCourse/ExistingCourse';
import CourseDetail from './components/ExistedCourse/CourseDetail';
import StudentFrom from './components/StudentForm/StudentFrom';

// history element
export const appHistory = createBrowserHistory();


function App() {

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  const [checked, setChecked] = useState(true);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.backgroundColor = "#red"
  })
  return (
    <Router>
      {userInfo ? <Sidebar checked={checked} onChange={handleChange} /> : null}
      <Switch>

        {/* Authentication Routes  */}
        <Route
          path="/login"
          exact
          render={() => <Login />}
        />
        <Route
          path="/resetPassword/:token"
          exact
          render={() => <Reset />}
        />

        {/* Route for all */}

        <PrivateRoute
          path="/"
          exact
          roles={["Admin", "Faculty", "Student"]}
          component={() => <Home checked={checked} />}
        />

        {/* Student routes  */}

        <PrivateRoute
          path="/courses"
          exact
          roles={["Student"]}
          component={() => <Courses checked={checked} />}
        />
        <PrivateRoute
          path="/courses/:id"
          exact
          roles={["Student"]}
          component={() => <Marks checked={checked} />}
        />
        <PrivateRoute
          path="/message"
          exact
          roles={["Student", "Faculty"]}
          component={() => <Message checked={checked} />}
        />
        <PrivateRoute
          path="/profile"
          exact
          roles={["Student"]}
          component={() => <StudentFrom checked={checked} />}
        />

        {/* Faculty Routes  */}

        <PrivateRoute
          path="/attendence"
          exact
          roles={["Faculty"]}
          component={() => !userInfo ? <Login /> : <Attendence checked={checked} />}
        />

        {/* admin side */}
        <PrivateRoute
          path="/newassign"
          exact
          roles={["Admin"]}
          component={() => !userInfo ? <Login /> : <AssignCourse checked={checked} />}
        />
        <PrivateRoute
          path="/assign"
          exact
          roles={["Admin"]}
          component={() => !userInfo ? <Login /> : <ExistingCourse checked={checked} />}
        />
        <PrivateRoute
          path="/assign/:id"
          exact
          roles={["Admin"]}
          component={() => !userInfo ? <Login /> : <CourseDetail checked={checked} />}
        />



        {/* error page  */}

        <Route
          path="/underconstruction"
          exact
          render={(props) => !userInfo ? <Login /> : <UnderConstruction checked={checked} />}
        />
        <Route
          path="/*"
          exact
          render={(props) => !userInfo ? <Login /> : < Unauthorized />}
        />
      </Switch>
    </Router>
  );
}

export default App;
