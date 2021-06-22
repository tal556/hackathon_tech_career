import React from 'react';
//Admin page
import AdminPage from './pages/admin-page'
//Home page
import HomePage from './pages/HomePage/HomePage'
import Home from './pages/HomePage/HomePage'
//HR page
import Student from './pages/student-page/Student'
import SpecificStudent from './components/specificStudent/SpecificStudent'
import HrRegisterForm from './pages/hr-page/Hr-Register'
import LinkdIn from './components/job-cards/LinkdIn'
import JobCards from './pages/CompanyZone/JobCards'
import StuSteps from './components/steps/StuSteps'
import StudentPersonal from './pages/personal-page/StudentPersonal'
import JobEditPage from './pages/CompanyZone/JobEditPage'

import SignIn from './components/chatApp/SignIn'
 
import {
  Switch,
  Route
} from "react-router-dom";
import AddJob from './pages/CompanyZone/AddJob';
import ChatRoom from './components/chatApp/ChatRoom';


function AdminRouter() {



  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/hr">
        <JobCards />
      </Route>
      <Route path="/CompanyJob">
        <JobEditPage />
      </Route>
      <Route path="/addNewJob">
        <AddJob />
      </Route>
      <Route path="/signUp/hr/:token/:id">
        <HrRegisterForm />
      </Route>
      < Route path="/recruiter">
        <LinkdIn />
      </Route>
      < Route path="/recruiter">
        <LinkdIn />
      </Route>
      <Route path="/signUp/company">
      </Route>
      <Route path="/student">
        <Student />
      </Route>
      <Route path="/studentPage/:id">
        <SpecificStudent />
      </Route>
      <Route path="/signUp/student/:token/:id">
        <StuSteps />
      </Route>
      <Route path="/admin">
        <AdminPage />
      </Route>
      <Route path="/privatestudent">
        <StudentPersonal />
      </Route>
      <Route path="/chat">
        <ChatRoom />
      </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
    </Switch>
  )

}

export default AdminRouter;