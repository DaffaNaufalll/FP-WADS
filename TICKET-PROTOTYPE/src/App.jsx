import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import CreateTicketPage from './components/pages/CreateTicketPage';
import UserDashboard from './components/pages/UserDashboard';
import ViewTicketsPage from './components/pages/ViewTicketsPage';
import TicketDetailPage from './components/pages/TicketDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/create-ticket" element={<CreateTicketPage />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/view-tickets" element={<ViewTicketsPage />} />
        <Route path="/ticket/:id" element={<TicketDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
