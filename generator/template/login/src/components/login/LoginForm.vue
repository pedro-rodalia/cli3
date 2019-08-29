<template lang="pug">
  ods-form.login-form__form(
    :model="loginForm"
    :rules="rules"
    ref="loginForm"
    :hide-required-asterisk="true")
    div
      h1.login-form__title {{ $t('login.title') }}
      .login-form__errors.ods-mb-5
        ods-alert(
          v-show="errors"
          :title="errorInfo || $t('login.loginError')"
          type="error"
          :closable="false")
      ods-form-item(:label="$t('login.user')" prop='user')
        ods-input(
          :class="{error: errors}"
          type="text"
          v-model="loginForm.user")
      ods-form-item.ods-mb-3(:label="$t('login.password')" prop="password")
        ods-input(
          :class="{error: errors}"
          type="password"
          v-model="loginForm.password")
      router-link(to="/login/password" tag="div")
        ods-button.ods-p-0(type="text") {{ $t('login.forgotPassword') }}
    div.login-form__actions
      ods-checkbox(v-model="keepMeLogged") {{ $t('login.keepMeLogged') }}
      ods-button(type="primary" native-type="submit" @click.prevent="submitForm('loginForm')") {{ $t('login.login') }}
    social-login(v-if="useSocialLogin")
</template>

<script>
import FormStyles from '@/components/login/LoginFormStyles.vue'
import SocialLogin from '@/components/login/SocialLogin.vue'
import { mapActions } from 'vuex'
export default {
  name: 'LoginForm',
  mixins: [ FormStyles ],
  components: {
    SocialLogin
  },
  data () {
    return {
      loginForm: {
        user: 'admin',
        password: 'admin'
      },
      rules: {
        user: [
          { required: true, message: this.$t('login.rules.user'), trigger: 'submit' }
        ],
        password: [
          { required: true, message: this.$t('login.rules.password'), trigger: 'submit' }
        ]
      },
      keepMeLogged: true,
      errors: false,
      errorInfo: '',
      useSocialLogin: true
    }
  },
  methods: {
    ...mapActions([
      'login',
      'loader'
    ]),
    submitForm (formName) {
      let _this = this
      this.$refs[formName].validate(async valid => {
        if (valid) {
          this.loader({loader: true})
          const data = {
            username: this.loginForm.user,
            password: this.loginForm.password
          }
          const response = await this.login(data)
          const isError = response instanceof Error
          /********************************************
          // Elimina este setTimeout! Es sólo para demo
          ********************************************/
          setTimeout(() => {
            if (!isError) {
              this.$notify.closeAll()
              sessionStorage.sessionToken = response.data.token
              sessionStorage.userId = response.data.userId
              this.loader({loader: false})
              this.$router.push({ name: 'Home' })
            } else {
              this.errorInfo = `${this.$t('login.loginError')}`
              this.$notify.closeAll()
              this.$notify({
                title: _this.$t('login.loginErrorTitle'),
                message: this.errorInfo,
                type: 'error',
                position: 'top-right',
                duration: 5000
              })
              this.loader({loader: false})
              this.errors = true
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
