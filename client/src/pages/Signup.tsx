import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';

export function Signup() {
  const { signup, loading } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState(''); const [email, setEmail] = useState(''); const [password, setPassword] = useState(''); const [err, setErr] = useState('');

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault(); setErr('');
    try { await signup(name, email, password); navigate('/'); }
    catch (e: any) { setErr(e?.response?.data?.message ?? 'Signup failed'); }
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="card bg-base-100 shadow">
        <div className="card-body">
          <h2 className="card-title">Create your account</h2>
          <form onSubmit={onSubmit} className="space-y-3">
            <input className="input input-bordered w-full" value={name} onChange={e=>setName(e.target.value)} placeholder="Name" required />
            <input className="input input-bordered w-full" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" type="email" required />
            <input className="input input-bordered w-full" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" required />
            {err && <div className="alert alert-error">{err}</div>}
            <button className="btn btn-primary w-full" disabled={loading} type="submit">{loading ? 'Creating…' : 'Create account'}</button>
          </form>
          <p className="text-sm text-base-content/70 mt-2">Already have an account? <Link to="/login" className="link">Log in</Link></p>
        </div>
      </div>
    </div>
  );
}