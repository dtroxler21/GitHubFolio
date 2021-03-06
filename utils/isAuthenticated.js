module.exports = {
  isAuthenticated: (req, res, next) => {
    return req.isAuthenticated()
      ? next()
      : res.status(401).redirect('/')
  },
  isAuthenticatedBoolean: (req) => {
    return !!req.isAuthenticated()
  }
}
