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
          :title="$t('login.loginError')"
          type="error"
          :closable="false")
      ods-form-item(:label="$t('login.username')" prop='username')
        ods-input(
          :class="{ error: errors }"
          type="text"
          v-model="loginForm.username")
      ods-form-item.ods-mb-3(:label="$t('login.password')" prop="password")
        ods-input(
          :class="{ error: errors }"
          type="password"
          v-model="loginForm.password")
      div.login-form__router
        router-link(to="/login/password" tag="div")
          ods-button.ods-p-0(type="text") {{ $t('login.forgotPassword') }}
        router-link(to="/login/register" tag="div")
          ods-button.ods-p-0(type="text") {{ $t('login.register') }}
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

  inject: [ 'passwordReg', 'useSocialLogin' ],

  components: {
    SocialLogin
  },

  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, message: this.$t('login.rules.username'), trigger: 'submit' }],
        password: [{ required: true, message: this.$t('login.rules.password'), trigger: 'submit' }]
      },
      keepMeLogged: true,
      errors: false
    }
  },

  methods: {

    ...mapActions([ 'login', 'confirmRegister' ]),

    async submitForm (formName) {
      try {
        await this.$refs[formName].validate().catch(e => { throw new Error('Validation failed!') })
        await this.login({ ...this.loginForm, keepMeLogged: this.keepMeLogged })
        this.$router.push({ name: 'Home' })
      } catch (error) {
        console.error(error)
        this.errors = true
      }
    },

    async submitConfirm () {
      try {
        const token = this.$route.query.token
        if (!token) return
        await this.confirmRegister({ token })
      } catch (e) {
        console.error(e)
        // TODO: Notify failure on registry confirmation
      }
    }

  },

  created () {
    this.submitConfirm()
  }

}

</script>
