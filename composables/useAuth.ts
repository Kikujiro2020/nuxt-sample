import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
  } from 'firebase/auth'
  
  export const useAuth = () => {
    //トークンを初期化
    const token = useState<string>('token', () => null)
    
    //サインアップ処理
    async function signUp(email:string, password:string){
      
      return new Promise((resolve)=>{
        const auth = getAuth()
          createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              // サインアップ
              const currentUser = userCredential.user;
              resolve("success")
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              resolve(errorCode)
          });            
      })
  }  
    //サインイン処理
    async function signIn(email: string, password: string) {
      return await new Promise<void>((resolve, reject) => {
        const auth = getAuth()
        return signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            userCredential.user
              .getIdToken()
              .then((idToken) => {
                token.value = idToken
                resolve()
              })
              .catch(reject)
          })
          .catch(reject)
      })
    }
  
    async function logOut() {
      return await new Promise<void>((resolve, reject) => {
        const auth = getAuth()
        signOut(auth)
          .then(() => {
            token.value = null
            resolve()
          })
          .catch((error) => {
            reject(error)
          })
      })
    }
  
    async function checkAuthState() {
      return await new Promise<void>((resolve, reject) => {
        // client only
        if (process.server) return resolve()
        const auth = getAuth()
        onAuthStateChanged(
          auth,
          (user) => {
            if (user) {
              user
                .getIdToken()
                .then((idtoken) => {
                  token.value = idtoken
                  resolve()
                })
                .catch(reject)
            } else {
              token.value = null
              resolve()
            }
          },
          (error) => {
            reject(error)
          }
        )
      })
    }
  
    return {
      signUp,
      signIn,
      logOut,
      token,
      checkAuthState,
    }
  }