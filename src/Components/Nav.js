
import { auth } from '../Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { GoogleAuthProvider, signInWithRedirect, signOut } from 'firebase/auth';

const Nav = () => {
    const [user] = useAuthState(auth);

    const signUserIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    }

    const signUserOut = () => {
        signOut(auth);
    }
    
    return (
        <nav className="nav">
            <h1>React Chat</h1>
            {
                user ? (
                    <button className="sign-in" type="button" onClick={signUserOut}>
                        Sign Out {user.displayName}
                    </button>
                ) : (
                    <button className="sign-in" type="button" onClick={signUserIn}>
                        Sign In with Google
                    </button>
                )
            }
        </nav>
    )
}

export default Nav