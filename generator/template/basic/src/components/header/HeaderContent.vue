<template lang="pug">
  ods-main-header(
    headerLogoText="product"
    logoUrl="/"
    breadcrumbSeparator=">"
    actionsMenuIcon="overflow-menu"
    :showSuitesMenu="<%_ !!options.headerOptions.multisuits _%>"
    :showBreadcrumbs="true"
    :environment="env"
    :showActionsMenu="<%_ !!options.headerOptions.optionsMenu _%>"
    :showUserMenu="<%_ !!options.headerOptions.userMenu _%>"
    :topBarBackground="cssVars.topBarBg"
    topBarClass="my-top-bar"
    :topBarBorder="false"
    :topBarClosable="true"
    ref="header"
    @closeTopBar="handleTopBar"
    @openTopBar="handleTopBar(true)")
    template(slot="actions")
      header-actions
    template(slot="userAvatar")
      img(src="@/assets/images/header/avatar.svg")
    template(slot="user")
      user-menu
    template(slot="suites")
      suites-menu
    <%_ if(options.headerOptions.logoCliente) { _%>
    template(slot="clientLogo")
      div.ods-main-header__client-logo
        img(
          src="@/assets/images/header/logo-cliente.svg"
          alt="logo")
    <%_ } _%>
    <%_ if(options.headerOptions.configMenu) { _%>
    template(slot="custom")
      header-custom-content
    <%_ } _%> 
    <%_ if(options.headerOptions.alertas) { _%>
    template(slot="notifications")
      header-notifications
    <%_ } _%>
    template(slot="topbar")
      header-top-bar
</template>

<script>
import HeaderActions from '@/components/header/HeaderActions'
import UserMenu from '@/components/header/UserMenu'
import SuitesMenu from '@/components/header/SuitesMenu'
import HeaderCustomContent from '@/components/header/HeaderCustomContent'
import HeaderNotifications from '@/components/header/HeaderNotifications'
import HeaderTopBar from '@/components/header/HeaderTopBar'
import cssVars from '@/assets/scss/base/_variables.scss'

export default {
  name: 'HeaderContent',
  components: {
    HeaderActions,
    UserMenu,
    SuitesMenu,
    HeaderCustomContent,
    HeaderNotifications,
    HeaderTopBar
  },

  data () {
    return {
      cssVars: cssVars
    }
  },

  computed: {
    env () {
      return process.env.ENV_TAG
    }
  },

  methods: {
    handleTopBar (action) {
      if (action) {
        this.$emit('hasTopBar', true)
      } else {
        this.$emit('hasTopBar', false)
      }
    }
  },

  mounted () {
    this.$emit('hasTopBar', this.$refs.header.$slots.topbar)
  }
}
</script>

<style lang="scss" scoped>
  .ods-main-header__client-logo {
    width: 100px;
    img {
      width: 100%;
      max-width: 100%;
    }
  }
</style>
