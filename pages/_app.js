import '@/styles/globals.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase.js';
import Login from './login.js';

function App({ Component, pageProps }) {

  const [user] = useAuthState(auth);
  if (!user) return <Login />;

  return <Component {...pageProps} />;
}

export default App;