import { Link, Outlet } from 'react-router-dom'

function Invoice() {

  return (
    <div className='invoice'>
      <ul>
        <li>
          <Link to="/invoice/12">Santa Monica</Link>
        </li>
        <li>
          <Link to="/invoice/2">Hau Nguyen</Link>
        </li>
        <li>
          <Link to="/invoice/3">Tony Nguyen</Link>
        </li>
      </ul>
      
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Invoice