import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'

export const useAuth = () => {
  const user = useState('user', () => null)
  const errorMessage = ref('')
  //サインアップ処理
  function signUp(email: string, password: string) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        user.value = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        errorMessage.value = error.message;
        // ..
      });
  }
  //サインイン処理
  async function signIn(email: string, password: string) {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        user.value = userCredential.user;
        errorMessage.value = "ログインしました"
        // ...
      })
      .catch((error) => {
        if (error.code == "auth/wrong-password"){
          errorMessage.value = "emailまたはパスワードが違います";
        }else{
          errorMessage.value = error.message;
        }
        
      });
  }

  async function logOut() {
    const auth = getAuth();
    await signOut(auth).then(() => {
      // Sign-out successful.
      user.value = null;
      errorMessage.value = "ログアウトしました"
    }).catch((error) => {
      // An error happened.
      errorMessage.value = error.message
    });
  }

  async function checkAuthState() {
    return await new Promise<void>((resolve, reject) =>{
      // client only
      if (process.server) return resolve()
      const auth = getAuth();
      onAuthStateChanged(
        auth,
         (changeUser) => {
        if (changeUser) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          
          user.value  = changeUser;
          resolve()
          // ...
        } else {
          // User is signed out
          // ...
          user.value  = null
          resolve()
        }
      });

    })
  }

  return {
    signUp,
    signIn,
    logOut,
    checkAuthState,
    user,
    errorMessage
  }
}