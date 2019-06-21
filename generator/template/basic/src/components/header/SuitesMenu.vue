<template lang="pug">
  ul.ods-actions-menu__ul.ods-actions-menu--suites__ul
    li.suites__title
      suite-logo
      small.suites__text suite
    router-link.suites__item(
      tag="li"
      to="/")
      a
        span producto | módulo
    router-link.suites__item(
      tag="li"
      to="/")
      a
        span producto | módulo
    router-link.suites__item(
      tag="li"
      to="/")
      a
        span producto | módulomuylargomódulo
    router-link.suites__item(
      tag="li"
      to="/")
      a
        span producto | módulo
    router-link.suites__item(
      tag="li"
      to="/")
      a
        span producto | módulo
    router-link.suites__item(
      tag="li"
      to="/")
      a
        span producto | módulo
</template>

<script>
import SuiteLogo from './SuiteLogo'
export default {
  name: 'SuitesMenu',
  components: {
    SuiteLogo
  }
}
</script>

<style lang="scss">
  .ods-actions-menu--suites__ul {
    padding: 8px;
    .suites__title {
      background-color: $--color-onesait-logo;
      color: $--color-white;
      min-height: 40px;
      padding: 8px 8px 8px 16px;
      box-sizing: border-box;
      margin-bottom: 8px;
    }
    .suites__logo {
      width: 72px;
      vertical-align: bottom;
      margin-right: 8px;
    }
    .suites__text {
      line-height: 21px;
    }
    .suites__item {
      padding: 0;
      a {
        padding: 0 8px 0 16px;
        box-sizing: border-box;
        color: $--color-onesait-logo;
        font-size: 14px;
        line-height: 40px;
        &:before {
          content: '';
          background-image: url('../../assets/images/header/onesait-dimension-main-header.svg');
          width: 13px;
          height: 23px;
          display: inline-block;
          background-size: cover;
          background-repeat: no-repeat;
          margin-right: 8px;
          vertical-align: middle;
        }
        span {
          display: inline-block;
          vertical-align: middle;
          max-width: 160px;
          white-space: pre;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      &:last-child {
        margin-bottom: 8px;
      }
    }
  }
</style>
