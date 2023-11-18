import { Link, Route, Routes, useNavigate } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Invoice from './pages/Invoice';
import InvoiceDetail from './pages/InvoiceDetail';

function App() {
  function TestNavigateHome() {
    const navigate = useNavigate();
    
    return (
      <button onClick={() => navigate('/')}>
        Test navigate home
      </button>
    );
  }

  return (
    <>
      <h1>Bookkeeper</h1>
      
      <ul>
        
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/invoice">Invoice</Link>
        </li>
        
      </ul>

      <main>
        <TestNavigateHome />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/invoice" element={<Invoice />}>
            <Route path=":id" element={<InvoiceDetail/>} />
          </Route>
        </Routes>
        
      </main>
    </>
  )
}

export default App
