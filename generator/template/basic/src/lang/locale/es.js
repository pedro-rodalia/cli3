import esLocale from '@onesait/onesait-ds/lib/locale/lang/es'

export default {
  ...esLocale,
  label: 'Español',
  labelMobile: 'ES',
  serverError: 'Ha ocurrido un error inesperado en el servidor. Inténtalo de nuevo.',
  <%_ if(options.addMenu) { _%>
  breadcrumb: {
    home: 'Inicio',
    dashboard: 'Escritorio',
    tasks: 'Tareas',
    users: 'Usuarios',
    randomUser: 'Usuario random ',
    randomString: 'Random string param: ',
    editProfile: 'Editar mi perfil',
    myUser: 'Mi usuario',
    editUser: 'Editar usuario'
  }
  <%_ } _%>
}
