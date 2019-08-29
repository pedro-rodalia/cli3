<template lang="pug">
  div.social-login
    p.social-login__title {{ $t('login.social.title') }}
    ul.social-login__options
      li.social-login__option(
        v-for="option in options"
        :key="option.name")
        a(:href="option.endpoint")
          img.social-login__icon(
            :src="option.icon"
            alt="option.name")
</template>

<script>
export default {
  name: 'SocialLogin',
  data () {
    return {
      options: [
        {
          name: 'Google',
          endpoint: '#',
          icon: require('@/assets/images/login/google-logo.svg')
        },
        {
          name: 'LinkedIn',
          endpoint: '#',
          icon: require('@/assets/images/login/linkedin-logo.svg')
        },
        {
          name: 'Github',
          endpoint: '#',
          icon: require('@/assets/images/login/github-logo.svg')
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  $--logo-size: 36px;
  .social-login {
    text-align: center;
    margin-top: rem(48);
    &__title {
      font-weight: 500;
      text-transform: uppercase;
      color: $--color-label;
      font-size: rem(10);
    }
    &__options {
      display: flex;
      justify-content: space-evenly;
      margin-top: rem(24);
      padding: 0 rem(32);
    }
    &__icon {
      height: $--logo-size;
      width: $--logo-size;
      object-fit: contain;
      transition: opacity .2s linear;
      &:hover {
        opacity: .7;
      }
    }
  }
</style>
