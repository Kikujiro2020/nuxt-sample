

export default defineNuxtRouteMiddleware(async () => {
    if (!process.server) {
      const { checkAuthState, token } = useAuth()
      await checkAuthState()
      if (!token.value) {
        // replaceで遷移
        return await navigateTo('/login', { replace: true })
      }
    }
  })