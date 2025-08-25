export const isAuthenticated = (): boolean => {
  if (typeof window === "undefined") return false
  const authStatus = localStorage.getItem("isAuthenticated")
  const loginTime = localStorage.getItem("loginTime")

  if (authStatus === "true" && loginTime) {
    const loginDate = new Date(loginTime)
    const now = new Date()
    const hoursDiff = (now.getTime() - loginDate.getTime()) / (1000 * 60 * 60)

    if (hoursDiff > 24) {
      // Session expired, clear auth
      logout()
      return false
    }

    return true
  }

  return false
}

export const logout = (): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("isAuthenticated")
    localStorage.removeItem("loginTime")
  }
}

export const getLoginTime = (): string | null => {
  if (typeof window === "undefined") return null
  return localStorage.getItem("loginTime")
}

export const requiresReauth = (): boolean => {
  if (typeof window === "undefined") return false
  const loginTime = localStorage.getItem("loginTime")

  if (loginTime) {
    const loginDate = new Date(loginTime)
    const now = new Date()
    const hoursDiff = (now.getTime() - loginDate.getTime()) / (1000 * 60 * 60)

    return hoursDiff > 12 // Suggest re-auth after 12 hours
  }

  return false
}
