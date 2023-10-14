import { Link, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Invoice from './pages/Invoice';

function App() {

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/invoice" element={<Invoice />}>
            <Route path=":id" element={<div>invoice detail</div>} />
          </Route>
        </Routes>
        
      </main>
    </>
  )
}

export default App
