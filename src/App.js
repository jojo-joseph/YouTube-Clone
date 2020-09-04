import React from 'react';
import Header from "./Header";
import './App.css';
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom";
import SearchPage from "./SearchPage";

function App() {
  return (
    <div className="App">      
      <Router>
        <Header />
        <Switch>

           <Router path="/search/:searchTerm">
                <div className="app_page">
                  <Sidebar />
                  <SearchPage />
                  
                </div>
            </Router>

            <Router path="/">
              
                <div className="app_page">
                  <Sidebar />
                  <RecommendedVideos />
                </div>

            </Router>
            

            
        </Switch>

      </Router>
      
      
     

    </div>
  );
}

export default App;
