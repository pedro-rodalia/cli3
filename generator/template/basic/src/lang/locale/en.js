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
  }
  <%_ } _%>
}
