import React, { useState, useEffect } from 'react';
import './App.css';
import CandidateRegistration from './components/CandidateRegistration';
import VoterRegistration from './components/VoterRegistration';
import VoterLogin from './components/VoterLogin';
import Result from './components/Result';
import CandidateList from './components/CandidateList';
import Admin from './components/CreateElection';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LiveElectionView from './components/LiveElectionView';
import CompletedElectionView from './components/CompletedElectionView';
import AdminRegistration from './components/AdminRgistration';
import AdminLogin from './components/AdminLogin';
import SuccessfullyVoted from './components/SuccessfullyVoted';
import SuccessfullyElectionCreated from './components/SuccessfullyElectionCreated';
import SuccessfullyRegisterCandidate from './components/SuccessfullyRegisterCandidate';
import UpcomingElectionView from './components/UpcomingElectionView';

function App() {
 
  return (
    <div className="App">
              <Router>
            <div>
                <nav>
                    <ul>
                    <li>
                            <Link to="/admin-registration">Admin Registration</Link>
                        </li>
                        <li>
                            <Link to="/admin-login">Admin Login</Link>
                        </li>
                       
                        <li>
                            <Link to="/upcoming-election">Candidate Registration</Link>
                        </li>
                        <li>
                            <Link to="/voter-registration">Voter Registration</Link>
                        </li>
                        <li>
                            <Link to="/voter-login">Voter Login</Link>
                        </li>
                        <li>
                            <Link to="/completed-election">View Result</Link>
                        </li>
                    </ul>
                </nav>
                
                <Routes>
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/admin-registration" element={<AdminRegistration />} />
                    <Route path="/admin-login" element={<AdminLogin />} />
                    <Route path="/voter-registration" element={<VoterRegistration />} />
                    <Route path="/candidate-registration" element={<CandidateRegistration />} />
                    <Route path="/voter-login" element={<VoterLogin  />} />
                    <Route path="/" element={<VoterLogin  />} />
                    <Route path="/result" element={<Result />} />
                    <Route path="/candidates" element={<CandidateList />} />
                    <Route path="/live-election" element={<LiveElectionView />} />
                    <Route path="/upcoming-election" element={<UpcomingElectionView />} />
                    <Route path="/completed-election" element={<CompletedElectionView />} />
                    <Route path="/successfully-voted" element={<SuccessfullyVoted/>} />
                    <Route path="/successfully-election-created" element={<SuccessfullyElectionCreated/>} />
                    <Route path="/successfully-register-candidate" element={<SuccessfullyRegisterCandidate/>} />
                    {/* <Route path="/successfully-voted" element={<SuccessfullyVoted/>} /> */}
        
           
                </Routes>
                
            </div>
        </Router>
          </div>
  );
}

export default App;
