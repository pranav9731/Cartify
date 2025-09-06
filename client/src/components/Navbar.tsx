import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { useCart } from '../store/cart';
import { useEffect } from 'react';

export function Navbar() {
  const { user, token, logout } = useAuth();
  const { items, fetchCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => { if (token) fetchCart(); }, [token]);

  return (
    <div className="navbar bg-base-100 shadow">
      <div className="container mx-auto">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">Cartify</Link>
        </div>
        <div className="flex-none gap-2">
          <Link to="/" className="btn btn-ghost">Products</Link>
          <Link to="/cart" className="btn btn-ghost">
            Cart
            <div className="badge badge-primary ml-2">{items.reduce((a,b)=>a+b.quantity,0)}</div>
          </Link>
          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost">
                <div className="avatar placeholder">
                  <div className="bg-neutral text-neutral-content rounded-full w-8">
                    <span>{user.name.slice(0,1).toUpperCase()}</span>
                  </div>
                </div>
                <span className="ml-2 hidden sm:inline">{user.name}</span>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-40 p-2 shadow">
                <li><button onClick={()=>{ logout(); navigate('/'); }}>Logout</button></li>
              </ul>
            </div>
          ) : (
            <>
              <Link to="/login" className="btn btn-primary">Login</Link>
              <Link to="/signup" className="btn btn-outline">Sign up</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}