<template lang="pug">
  ods-form.login-form__form.login-form__form--password(
    :model='passwordForm'
    :rules='rules'
    ref='passwordForm'
    :hide-required-asterisk="true")
    template(v-if="emailSent===0")
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
            :class="{error: errors}"
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
        template(v-if="emailSent===1")
          img(src="../../assets/images/login/email-sent.svg")
          p {{ $t('password.emailSubmitted') }}
        template(v-else-if="emailSent===-1")
          img(src="../../assets/images/login/email-error.svg")
          p {{ $t('password.emailError') }}
        template(v-else-if="emailSent===-2")
          img(src="../../assets/images/login/email-error.svg")
          p {{ $t('serverError') }}
        p(v-if="userEmail") {{ userEmail }}
      router-link(to="/login" tag="div")
        ods-button(type='primary') {{ $t('password.done') }}
</template>

<script>
import FormStyles from './LoginFormStyles.vue'
import { mapActions } from 'vuex'
export default {
  name: 'LoginPasswordForm',
  mixins: [ FormStyles ],
  data () {
    return {
      passwordForm: {
        email: 'test@test.es'
      },
      rules: {
        email: [
          { required: true, message: this.$t('password.rules.email'), trigger: 'submit' }
        ]
      },
      errors: false,
      emailSent: 0,
      userEmail: ''
    }
  },
  methods: {
    ...mapActions([
      'login',
      'loader'
    ]),
    submitForm (formName) {
      let _this = this
      const emailReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      this.$refs[formName].validate(async valid => {
        if (valid & emailReg.test(this.passwordForm.email)) {
          this.loader({loader: true, password: true})
          const response = await this.login({email: this.passwordForm.email})
          const isError = response instanceof Error
          /********************************************
          // Elimina este setTimeout! Es sólo para demo
          ********************************************/
          setTimeout(() => {
            if (!isError) {
              this.errors = false
              this.$notify.closeAll()
              this.emailSent = 1
              this.loader({loader: false, password: true})
              this.userEmail = response.data.email
            } else {
              this.errors = true
              this.$notify.closeAll()
              this.$notify({
                title: 'Error',
                message: _this.$t('password.error'),
                type: 'error',
                position: 'top-right',
                duration: 5000
              })
              this.emailSent = -1
              this.loader({loader: false, password: true})
              this.userEmail = this.passwordForm.email
            }
          }, 2500)
          /*   /setTimeout */
        } else {
          console.log('error submit!!')
          this.errors = true
          return false
        }
      })
    }
  }
}
</script>
