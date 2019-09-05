<template lang="pug">
  ods-form.login-form__form.login-form__form--password(
    :model='passwordResetForm'
    :rules='rules'
    ref='passwordResetForm'
    :hide-required-asterisk="true")
    template
      div
        h1.login-form__title {{ $t('passwordReset.title') }}
        p.ods-mb-5
          small.login-form__small {{ $t('passwordReset.message') }}
        .login-form__errors.ods-mb-5
          ods-alert(
            v-show="errors"
            :title="$t(`passwordReset.rules.password`)"
            type="error"
            :closable="false")
        ods-form-item(:label="$t('passwordReset.password')" prop='password')
          ods-input(
            type="password"
            v-model="passwordResetForm.password")
        ods-form-item(:label="$t('passwordReset.confirmPassword')" prop='confirmPassword')
          ods-input(
            type="password"
            v-model="passwordResetForm.confirmPassword")
      div.ods-mt-8.login-form__actions
        router-link(to="/login" tag="div")
          ods-button.ods-p-0(type="text") {{ $t('passwordReset.goBack') }}
        ods-button(
          type='primary'
          native-type="submit"
          @click.prevent="submitForm('passwordResetForm')") {{ $t('passwordReset.submitButton') }}
</template>

<script>
import FormStyles from './LoginFormStyles.vue'
import { mapActions } from 'vuex'
export default {

  name: 'LoginPasswordResetForm',

  mixins: [ FormStyles ],

  inject: [ 'passwordReg' ],

  data () {
    return {
      passwordResetForm: {
        password: '',
        confirmPassword: ''
      },
      rules: {
        password: [
          { required: true, message: this.$t('passwordReset.rules.password'), trigger: 'change' },
          { validator: this.validatePassword, message: this.$t('register.rules.password'), trigger: 'change' }
        ],
        confirmPassword: [
          { required: true, message: this.$t('passwordReset.rules.confirmPassword'), trigger: 'change' },
          { validator: this.validatePasswordMatch, message: this.$t('passwordReset.rules.passwordMatch'), trigger: 'change' }
        ]
      },
      errors: false
    }
  },

  methods: {

    ...mapActions([ 'generatePassword' ]),

    validatePasswordMatch (_, message, callback) {
      const { password, confirmPassword } = this.passwordResetForm
      return password === confirmPassword ? callback() : callback(new Error(message))
    },

    validatePassword (_, message, callback) {
      if (this.passwordReg.test(this.passwordResetForm.password)) callback()
      return callback(new Error(message))
    },

    async submitForm (formName) {
      try {
        const { password } = this.passwordResetForm
        const { token } = this.$route.query
        await this.$refs[formName].validate().catch(e => { throw new Error('Validation failed!') })
        await this.generatePassword({ password, token })
        this.$router.push({ name: 'Login' })
      } catch (error) {
        console.error(error)
        this.errors = true
      }
    }

  },

  created () {
    if (!this.$route.query.token) this.$router.push({ name: 'Login' })
  }

}
</script>
