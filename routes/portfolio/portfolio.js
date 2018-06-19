require('babel-register')({
  presets: ['react']
})
const express = require('express')
const router = express.Router()
const { findOneByGitHubId } = require('../../controllers/UserController')
const React = require('react')
// const ReactDOMServer = require('react-dom/server')
const { renderToStaticMarkup } = require('react-dom/server')
const htmlTemplate = require('../../utils/ssr')

// https://www.youtube.com/watch?v=k66bOHX8MnY

// Jumble everything into one file to get it working, will modularize later

/**
 * Public Routes - '/portfolio'
 */

/**
 * Psuedocode:
 *   1) Endpoint receives a GET request
 *   2) Extract req param
 *   3) Grab data about user from DB
 *   4) Feed data into component
 *   5) Work some SSR magic
 *   6) Send response of static assets
 */

// React Server Side Rendering, send fully rendered page
router.route('/user/:gitHubId')
  .get((req, res, next) => {
    findOneByGitHubId({ gitHubId: req.params.gitHubId })
      .then(userData => {
        // Destructure for user data
        const { template, color, pinnedRepositories, bio, displayName, email, location, photo, profileUrl } = userData
        const user = { template, color, pinnedRepositories, bio, displayName, email, location, photo, profileUrl }
        const html = renderToStaticMarkup(
          React.createElement(htmlTemplate, { user })
        )
        res.send(`<!DOCTYPE html>${html}`)
      })
      .catch(err => res.json({ ssrBroke: err }))

    // const { gitHubId } = req.params
    // findOneByGitHubId({ gitHubId })
    //   .then(userData => res.json(userData))
    //   .catch(err => res.json(err))
  })

/**
 * Psuedocode:
 *   1) Endpoint receives a GET request
 *   2) Extract req param
 *   3) Grab data about user from DB
 *   4) Feed data into component
 *   5) Work some SSR magic
 *   6) Create zip file with rendered output
 *   7) Send response of zip file
 */

// React Server Side Rendering, send zip file of fully rendered page
router.route('/ssr/:gitHubId')
  .get((req, res, next) => {
    res.send(`Got 'emmmmmmmm`)
  })

module.exports = router
