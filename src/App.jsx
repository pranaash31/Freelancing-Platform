import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import ServiceCategoryPage from './ServiceCategoryPage';
import Graphics from './Graphics';
import GraphicsProfile from './GraphicsProfile';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/service/Website Development" element={<ServiceCategoryPage />} />
        <Route path="/service/Graphics-Design" element={<Graphics />} />
        <Route path="/services/:id" element={<GraphicsProfile />} />
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

