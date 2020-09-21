'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
Route.get('/send_email', async() => { 
  const Mail = use('Mail')
  await Mail.send(
    'emails.thankyou',
    {
      content: 'Hello, thank you for signing up on our website!'
    },
    //callback function
    message => {
      message.from('no-reply@email.com')
      message.to('customer@email.com')
      message.subject('Welcome to Our Website!')
    } 
  )
return "Email sent!"
})