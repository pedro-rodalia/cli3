<template lang="pug">
  footer.login__footer
    ul
      router-link(
      v-for="link in $t('login.footerLinks')"
      :key="link"
      :to="`/${link}`"
      tag="li")
        a {{ link }}
</template>

<script>
/* eslint-disable */
export default {
  name: 'LoginFooter'
}
</script>

<style lang="scss" scoped>
  .login__footer {
    padding: 0 rem(50) 0;
    li {
      display: inline-block;
      margin-right: 15px;
    }
    a {
      text-transform: uppercase;
      color: $--color-black;
      font-size: .9rem;
      opacity: 1;
      transition: opacity .2s;
      &:hover {
        opacity: .7;
      }
    }
  }
  @media screen and (max-width:767px) {
    .login__footer {
      padding: 0 rem(20) 0;
      a {
        font-size: .75rem;
      }
    }
  }
</style>
