<template lang="pug">
  ods-main-navigation(
    :navigation="navigation"
    ref="navigation")
    template(slot="suites")
      suites-menu
    template(slot="isPhone-user-menu")
      user-menu.is-phone__user-menu
</template>

<script>
import navigationConfig from '@/components/nav/config.json'
import SuitesMenu from '@/components/header/SuitesMenu'
import UserMenu from '@/components/header/UserMenu'

export default {
  name: 'NavContent',
  components: {
    SuitesMenu,
    UserMenu
  },
  data () {
    return {
      navigation: navigationConfig
    }
  },
  watch: {
    '$i18n.locale': {
      handler (val) {
        const assignName = item => {
          this.$set(item, 'name', item.langs[this.$i18n.locale])
          if (item.children && Object.keys(item.children).length) {
            for (const key in item.children) {
              assignName(item.children[key])
            }
          }
        }
        for (const key in this.navigation) {
          assignName(this.navigation[key])
        }
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .ods-main-nav {
    /deep/ .no-scrolling-wrapper,
    /deep/ .scrollbar__wrap {
      height: $--nav-height;
    }
    &.has-top-bar {
      /deep/ .no-scrolling-wrapper,
      /deep/ .scrollbar__wrap {
        height: $--nav-height--topbar;
      }
    }
  }
</style>
