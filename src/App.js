import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap'; // Importing Bootstrap components
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import PreferencesPage from './pages/PreferencesPage';
import PrivacyPage from './pages/PrivacyPage'; // Make sure to update the file name
import ToSPage from './pages/ToSPage';
import { ChatProvider } from './contexts/ChatContext';
import { useUser } from './contexts/UserContext'; // Import useUser hook
import './App.css';

function App() {
  const { user } = useUser(); // Get the user from the context
  return (
    <ChatProvider>
      <Router basename="/">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand as={Link} to="/">digital Self</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
              <Nav.Link as={Link} to="/preferences">Preferences</Nav.Link>
            </Nav>
            {user && (
              <Nav>
                <img src={user.profilePicture} alt="Profile" width="30" height="30" />
                <span>{user.email}</span>
              </Nav>
            )}
          </Navbar.Collapse>
        </Navbar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/preferences" element={<PreferencesPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/tos" element={<ToSPage />} />
        </Routes>
        <footer className="footer">
          <Container>
            <Row>
              <Col>
                <Nav className="justify-content-center">
                  <Nav.Link as={Link} to="/privacy">Privacy Policy</Nav.Link>
                  <Nav.Link as={Link} to="/tos">Terms of Service</Nav.Link>
                </Nav>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <p>&copy; {new Date().getFullYear()} digital Self</p>
              </Col>
            </Row>
          </Container>
        </footer>
      </Router>
    </ChatProvider>
  );
}

export default App;
