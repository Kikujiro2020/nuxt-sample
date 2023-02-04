
//ルートごとの認証チェック処理
export default defineNuxtRouteMiddleware(async () => {
    if (!process.server) { 
      //CSRでの処理
      const { checkAuthState , user } = useAuth()
      await checkAuthState()
     

      if (!user.value) {
        // replaceで遷移
        return navigateTo('/login', { replace: true })
      }
    }
  })