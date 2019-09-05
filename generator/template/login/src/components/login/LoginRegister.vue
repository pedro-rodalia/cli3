<template lang="pug">
  ods-form.login-form__form.login-form__form--password(
    :model="registerForm"
    :rules="rules"
    ref="registerForm"
    :hide-required-asterisk="true")
    template(v-if="emailSent === 0")
      div
        h1.login-form__title {{ $t('register.title') }}
        .login-form__errors.ods-mb-5
          ods-alert(
            v-show="errors"
            :title="$t('register.registerError')"
            type="error"
            :closable="false")
        ods-form-item(:label="$t('register.username')" prop='username')
          ods-input(
            type="text"
            v-model="registerForm.username")
        ods-form-item(:label="$t('register.fullName')" prop='fullName')
          ods-input(
            type="text"
            v-model="registerForm.fullName")
        ods-form-item(:label="$t('register.email')" prop='email')
          ods-input(
            type="email"
            name="email"
            v-model="registerForm.email")
        ods-form-item(:label="$t('register.password')" prop='password')
          ods-input(
            type="password"
            v-model="registerForm.password")
        ods-form-item(:label="$t('register.confirmPassword')" prop='confirmPassword')
          ods-input(
            type="password"
            autocomplete="off"
            v-model="registerForm.confirmPassword")
      div.ods-mt-8.login-form__actions
        router-link(to="/login" tag="div")
          ods-button.ods-p-0(type="text") {{ $t('register.goBack') }}
        ods-button(
          type='primary'
          native-type="submit"
          @click.prevent="submitForm('registerForm')") {{ $t('register.submitButton') }}
      social-login(v-if="useSocialLogin" action="register")
    div.password-messages(v-else)
      div
        img(src="../../assets/images/login/email-sent.svg")
        p {{ $t('register.emailSubmitted') }}
        p(v-if="registerForm.email") {{ registerForm.email }}
      router-link(to="/login" tag="div")
        ods-button(type='primary') {{ $t('password.done') }}
</template>

<script>
import FormStyles from './LoginFormStyles.vue'
import SocialLogin from '@/components/login/SocialLogin.vue'
import { mapActions } from 'vuex'
export default {

  name: 'LoginRegister',

  mixins: [ FormStyles ],

  inject: [ 'passwordReg', 'emailReg', 'useSocialLogin' ],

  components: {
    SocialLogin
  },

  data () {
    return {
      registerForm: {
        username: '',
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      rules: {
        username: [{ required: true, message: this.$t('register.rules.username'), trigger: 'change' }],
        fullName: [{ required: true, message: this.$t('register.rules.fullName'), trigger: 'change' }],
        email: [
          { required: true, message: this.$t('register.rules.email'), trigger: 'change' },
          { validater: this.validateEmail, message: this.$t('register.rules.email'), trigger: 'change' }
        ],
        password: [
          { required: true, message: this.$t('register.rules.password'), trigger: 'change' },
          { validator: this.validatePassword, message: this.$t('register.rules.password'), trigger: 'change' }
        ],
        confirmPassword: [
          { required: true, message: this.$t('register.rules.confirmPassword'), trigger: 'change' },
          { validator: this.validatePasswordMatch, message: this.$t('register.rules.confirmPassword'), trigger: 'change' }
        ]
      },
      errors: false,
      emailSent: 0
    }
  },

  methods: {

    ...mapActions([ 'register' ]),

    validatePasswordMatch (_, message, callback) {
      const { password, confirmPassword } = this.registerForm
      return password === confirmPassword ? callback() : callback(new Error(message))
    },

    validatePassword (_, message, callback) {
      if (this.passwordReg.test(this.registerForm.password)) callback()
      return callback(new Error(message))
    },

    validateEmail (_, message, callback) {
      if (this.emailReg.test(this.registerForm.email)) callback()
      return callback(new Error(message))
    },

    async submitForm (formName) {
      try {
        const valid = await this.$refs[formName].validate()
        const { email, password } = this.registerForm
        if (!valid || !this.emailReg.test(email) || !this.passwordReg.test(password)) throw new Error('Validation failed')
        await this.register(this.registerForm)
        this.emailSent = 1
      } catch (e) {
        this.emailSent = -1
        this.errors = true
      }
    }

  }
}
</script>
