class Token {
  setToken(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  getToken(key: string) {
    const value = localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  deleteToken(key: string) {
    localStorage.removeItem(key)
  }

  clearToken() {
    localStorage.clear()
  }
}

export const localToken = new Token()
