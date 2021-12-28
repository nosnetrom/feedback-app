import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import {FeedbackProvider} from './context/FeedbackContext';
import ContactPage from './pages/ContactPage';

function App() {

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path='/' element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
              </>
            }>
            </Route>
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App;