const SESSION_KEY = 'ticketapp_session';
function fakeDelay(ms=400){ return new Promise(r=>setTimeout(r, ms)); }
export async function login({email, password}){
  await fakeDelay();
  if(email === 'test@example.com' && password === 'Password123'){
    const session = {
      token: 'sess_' + Math.random().toString(36).slice(2),
      user: { id: 'u_1', name: 'Test User', email },
      expiresAt: null
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    return session;
  }
  const err = new Error('Invalid credentials'); err.code='INVALID_CREDENTIALS'; throw err;
}
export async function signUp({ email, password}) {
  await fakeDelay();
    const session = {
      token: "sess_" + Math.random().toString(36).slice(2),
      user: { id: "u_1", name: "Test User", email },
      expiresAt: null,
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    // const err = new Error("account created successfully");
    return session;
}
export function logout(){ localStorage.removeItem(SESSION_KEY); window.location.href = './'; }
export function getSession(){ const raw = localStorage.getItem(SESSION_KEY); if(!raw) return null; try{ return JSON.parse(raw);}catch(e){return null;} }
export function requireAuthOrRedirect(){ if(!getSession()){ window.location.href = '/login.html'; return false;} return true; }
