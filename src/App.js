import FirstAttemp from "./Pages/FirstAttemp";
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Home from "./Pages/Home";
import Welcome from './Pages/Welcome'
import NewTrip from "./Pages/NewTrip";
import CreateProfile from "./Pages/CreateProfile";


function App() {

  const userProfile = useSelector(state => state.userProfile)
  console.log(userProfile.name.first.length)
  return (
    <Router>

      <div className="app-container">
        <Routes>

          <Route path="/" element={userProfile.name.first.length == 0 ? <Welcome /> : <Home />} />
          <Route path="/Welcome" element={<Welcome />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/create-profile" element={<CreateProfile />} />
          <Route path="/new-trip" element={<NewTrip />} />

        </Routes>
      </div>

    </Router>

  );
}

export default App;
