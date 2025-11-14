import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig.js';
import mostrarLogin from './login.js';

export default function mostrarLogout() {
  signOut(auth)
    .then(() => mostrarLogin())
    .catch(() => mostrarLogin());
}
