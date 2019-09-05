import esLocale from '@onesait/onesait-ds/lib/locale/lang/es'

export default {
  ...esLocale,
  label: 'Español',
  labelMobile: 'ES',
  serverError: 'Ha ocurrido un error inesperado en el servidor. Inténtalo de nuevo.',
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
  },
  social: {
    login: 'Haz login con',
    register: 'Regístrate con'
  },
  actions: {
    register: 'Registrando usuario...',
    confirm: 'Confirmando usuario...',
    login: 'Iniciando sesión...',
    reset: 'Enviando correo...',
    generate: 'Actualizando la contraseña...'
  },
  login: {
    title: 'Iniciar sesión',
    username: 'Nombre de usuario',
    password: 'Contraseña',
    submitButton: 'Enviar',
    rules: {
      username: 'Introduzca el usuario',
      password: 'Introduzca la contaseña'
    },
    loginErrorTitle: 'Error de validación.',
    loginError: `La combinación usuario/contraseña no es valida.`,
    forgotPassword: '¿Has olvidado tu contraseña?',
    register: 'Crear cuenta',
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
  passwordReset: {
    title: 'Nueva contraseña',
    message: 'Configura tu nueva contraseña',
    password: 'Nueva Contraseña',
    confirmPassword: 'Confirma tu contraseña',
    submitButton: 'Submit',
    goBack: 'Volver',
    sending: 'Enviando...',
    rules: {
      password: 'Introduzca una contraseña válida',
      confirmPassword: 'Confirme la contraseña',
      passwordMatch: 'Las contraseñas no coinciden'
    },
    done: 'Finalizar',
    error: 'Ha ocurrido un error al intentar cambiar la contraseña'
  },
  register: {
    title: 'Registrarse',
    username: 'Nombre de usuario',
    fullName: 'Nombre completo',
    email: 'Email',
    password: 'Contraseña',
    confirmPassword: 'Confirmar contraseña',
    submitButton: 'Enviar',
    goBack: 'Volver',
    rules: {
      username: 'Introduzca un nombre de usuario',
      fullName: 'Introduzca su nombre completo',
      email: 'Introduzca su email',
      password: 'Introduzca una contaseña',
      confirmPassword: 'Debe confirmar la contraseña',
      passwordMatch: 'Las contraseñas no coinciden'
    },
    registerErrorTitle: 'Error de validación.',
    registerError: 'Revise los campos',
    emailSubmitted: 'Hemos enviado un email de confirmación a la dirección de correo:',
    footerLinks: ['faq', 'terms', 'conditions']
  }
}
