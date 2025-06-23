import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import ServiceCategoryPage from './ServiceCategoryPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services/:category" element={<ServiceCategoryPage />} />
      </Routes>
    </Router>
  );
};

export default App;



/*import React from 'react';
import ServiceCategoryPage from './ServiceCategoryPage';

function App() {
  return (
    <div className="App">
      <ServiceCategoryPage />
    </div>
  );
}

export default App;*/

