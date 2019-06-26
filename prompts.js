module.exports = [
  {
    name: `addLogin`,
    type: 'confirm',
    message: '¿Añadir plantilla de login al inicio del proyecto?',
    default: true
  },
  {
    name: `addMenu`,
    type: 'confirm',
    message: '¿Añadir el menú lateral de navegación?',
    default: true
  },
  {
    name: `headerOptions`,
    type: 'checkbox',
    message: '¿Qué plugins quieres preinstalar en la cabecera?',   
    choices: [
      {
        name: `alerts`,
        message: 'Alertas',
        default: false
      },
      {
        name: `notifications`,
        message: 'Notificaciones',
        default: false
      },
      {
        message: `Menu de opciones`,
        name: 'menu',
        default: false
      },
      {
        message: `Avatar con menú de usuario`,
        name: 'usermenu',
        default: true
      }
    ]
  }
]
