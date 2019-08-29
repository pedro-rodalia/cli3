import enLocale from '@onesait/onesait-ds/lib/locale/lang/en'

export default {
  ...enLocale,
  label: 'English',
  labelMobile: 'EN',
  serverError: 'Unexpected server error. Try again.',
  <%_ if(options.addMenu) { _%>
  breadcrumb: {
    home: 'Home',
    dashboard: 'Dashboard',
    tasks: 'Tasks',
    users: 'Users',
    randomUser: 'Random user ',
    randomString: 'Random string param: ',
    editProfile: 'Edit user',
    myUser: 'My user',
    editUser: 'Edit user'
  },
  <%_ } _%>
  <%_ if(options.addLogin) { _%>
  login: {
    title: 'Login',
    user: 'Username',
    password: 'Password',
    submitButton: 'Send',
    rules: {
      user: 'Please, type a user name',
      password: 'Please, type a password'
    },
    logging: 'Loading...',
    loginErrorTitle: 'Validation Error',
    loginError: 'Invalid user or wrong password.',
    forgotPassword: 'Forgot your password?',
    keepMeLogged: 'Keep me logged in',
    login: 'Login',
    footerLinks: ['faq', 'terms', 'conditions'],
    social: {
      title: 'Login with'
    }
  },
  password: {
    title: 'Reset password',
    message: 'Type your account\'s email to proceed',
    email: 'Email',
    submitButton: 'Submit',
    goBack: 'Go back',
    error: 'Email not found',
    sending: 'Sending...',
    rules: {
      email: 'Email not found'
    },
    emailSubmitted: 'We\'ve sent an email with the instructions to reset your password to: ',
    done: 'Finish',
    emailError: 'We can\'t find any account with this email:'
  },
  <%_ } _%>
}
