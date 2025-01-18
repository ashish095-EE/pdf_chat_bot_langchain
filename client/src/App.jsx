
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UploadFile from './Pages/UploadFile';
import AskBotPage from './Pages/AskBotPage';
import HomePage from './Pages/HomePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<UploadFile />} />
        <Route path="/bot" element={<AskBotPage />} />
      </Routes>
    </Router>
  );
};

export default App;
