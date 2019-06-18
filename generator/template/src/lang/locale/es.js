import esLocale from '@onesait/onesait-ds/lib/locale/lang/es'

export default {
  ...esLocale,
  label: 'Español',
  labelMobile: 'ES',
  serverError: 'Ha ocurrido un error inesperado en el servidor. Inténtalo de nuevo.',
  login: {
    title: 'Iniciar sesión',
    user: 'Nombre de usuario',
    password: 'Contraseña',
    submitButton: 'Enviar',
    rules: {
      user: 'Introduzca el usuario',
      password: 'Introduzca la contaseña'
    },
    logging: 'Iniciando sesión...',
    loginErrorTitle: 'Error de validación.',
    loginError: `La combinación usuario/contraseña no es valida.`,
    forgotPassword: '¿Has olvidado tu contraseña?',
    keepMeLogged: 'Mantener sesión iniciada',
    login: 'Entrar',
    footerLinks: ['faq', 'términos', 'condiciones']
  },
  password: {
    title: 'Restablecer contraseña',
    message: 'Introduce una cuenta de correo electrónico vinculada al producto para continuar',
    email: 'Correo electrónico',
    submitButton: 'Enviar',
    goBack: 'Volver',
    error: 'Email no encontrado.',
    sending: 'Enviando...',
    rules: {
      email: 'Email no encontrado'
    },
    emailSubmitted: 'Hemos enviado un correo electrónico con instrucciones para poder restablecer su contraseña a:',
    done: 'Finalizar',
    emailError: 'No existe ninguna cuenta vinculada a este correo electrónico: '
  },
  notifications: {
    popoverTitle: 'Notificaciones'
  },
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
}
