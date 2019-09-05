<template lang="pug">
  ods-form.login-form__form.login-form__form--password(
    :model='passwordForm'
    :rules='rules'
    ref='passwordForm'
    :hide-required-asterisk="true")
    template(v-if="emailSent === 0")
      div
        h1.login-form__title {{ $t('password.title') }}
        p.ods-mb-5
          small.login-form__small {{ $t('password.message') }}
        .login-form__errors.ods-mb-5
          ods-alert(
            v-show="errors"
            :title="$t('password.error')"
            type="error"
            :closable="false")
        ods-form-item(:label="$t('password.email')" prop='email')
          ods-input(
            type="text"
            v-model="passwordForm.email")
      div.ods-mt-8.login-form__actions
        router-link(to="/login" tag="div")
          ods-button.ods-p-0(type="text") {{ $t('password.goBack') }}
        ods-button(
          type='primary'
          native-type="submit"
          @click.prevent="submitForm('passwordForm')") {{ $t('password.submitButton') }}
    div.password-messages(v-else)
      div
        template(v-if="emailSent === 1")
          img(src="../../assets/images/login/email-sent.svg")
          p {{ $t('password.emailSubmitted') }}
        template(v-else-if="emailSent === -1")
          img(src="../../assets/images/login/email-error.svg")
          p {{ $t('password.emailError') }}
        template(v-else-if="emailSent === -2")
          img(src="../../assets/images/login/email-error.svg")
          p {{ $t('serverError') }}
        p(v-if="passwordForm.email") {{ passwordForm.email }}
      router-link(to="/login" tag="div")
        ods-button(type='primary') {{ $t('password.done') }}
</template>

<script>
import FormStyles from './LoginFormStyles.vue'
import { mapActions } from 'vuex'
export default {

  name: 'LoginPasswordForm',

  mixins: [ FormStyles ],

  inject: [ 'emailReg' ],

  data () {
    return {
      passwordForm: {
        email: 'test@test.es'
      },
      rules: {
        email: [
          { required: true, message: this.$t('password.rules.email'), trigger: 'change' },
          { validator: this.validateEmail, message: this.$t('password.rules.email'), trigger: 'change' }
        ]
      },
      errors: false,
      emailSent: 0
    }
  },

  methods: {

    ...mapActions([ 'resetPassword' ]),

    validateEmail (_, message, callback) {
      if (this.emailReg.test(this.passwordForm.email)) callback()
      return callback(new Error(message))
    },

    async submitForm (formName) {
      try {
        const { email } = this.passwordForm
        const valid = await this.$refs[formName].validate().catch(e => { throw new Error('Validation failed!') })
        await this.resetPassword({ email })
        this.emailSent = 1
      } catch (error) {
        console.error(error)
        this.errors = true
      }
    }

  }

}
</script>
