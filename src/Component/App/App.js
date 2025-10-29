// import logo from './logo.svg';
import Contact from '../ContactUs/Contact';
import ContactList from '../ContactList/ContactList'
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Contact/>}/>
        <Route path='contactlist' element={ <ContactList/>}/>
      </Routes>

    </Router>
  
    
  );
}

export default App;
