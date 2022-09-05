import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";
import MainNvaigation from "./shared/components/Navigation/MainNavigation";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <MainNvaigation />
        <main>
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/:userId/places"  element={<UserPlaces />}/>
            <Route path="/places/new" element={<NewPlace />} />
            <Route path="/*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </Router>
    </React.Fragment>
  );
};

export default App;
