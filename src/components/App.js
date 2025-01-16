import React, { useState,useContext } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import NavBar from './NavBar'
import News from './News'
import AuthState  from '../context/AuthState'
import Weather from './Weather'
import WeatherClassWidget from './WeatherClassWidget'
import SimpleComponent from './SimpleComponent'
import EditProfile from './EditProfile'
import ThemeState from '../context/ThemeState'
import Counter from './Counter'
import ThemeContext from '../context/ThemeContext'

const apiKey = process.env.REACT_APP_API_KEY;
const baseUrl = "https://newsapi.org/v2/top-headlines";
const pageSize = 5;

const App = () => {

  const [progress, setProgress] = useState(0);
  const {theme} = useContext(ThemeContext);

  return (
    <ThemeState>
      <AuthState>
        <div style={{ backgroundColor: theme == 'light' ? '#fff' : '#333' }}>
        <Router>
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress} />
          <NavBar title="Live News" />
          { 
            <div>
              <Routes>
                <Route exact path="/" element={<News setProgress={setProgress} key="business" baseUrl={baseUrl} apiKey={apiKey} pageSize={pageSize} category="general" />} />
                <Route exact path="/business" element={<News setProgress={setProgress} key="business" baseUrl={baseUrl} apiKey={apiKey} pageSize={pageSize} category="business" />} />
                <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" baseUrl={baseUrl} apiKey={apiKey} pageSize={pageSize} category="entertainment" />} />
                <Route exact path="/general" element={<News setProgress={setProgress} key="general" baseUrl={baseUrl} apiKey={apiKey} pageSize={pageSize} category="general" />} />
                <Route exact path="/health" element={<News setProgress={setProgress} key="health" baseUrl={baseUrl} apiKey={apiKey} pageSize={pageSize} category="health" />} />
                <Route exact path="/science" element={<News setProgress={setProgress} key="science" baseUrl={baseUrl} apiKey={apiKey} pageSize={pageSize} category="science" />} />
                <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" baseUrl={baseUrl} apiKey={apiKey} pageSize={pageSize} category="sports" />} />
                <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" baseUrl={baseUrl} apiKey={apiKey} pageSize={pageSize} category="technology" />} />
                <Route exact path="/weather" element={<Weather />} />
                <Route exact path="/weatherClassWidget" element={<WeatherClassWidget />} />
                <Route exact path="/editProfile" element={<Counter />} />
              </Routes>
            </div>
          }
        </Router>
        </div>
        </AuthState>
      </ThemeState>
  );
}

export default App;