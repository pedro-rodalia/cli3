<template lang="pug">
  ul.ods-actions-menu__ul.ods-actions-menu--user__ul
    li.user-ul__user-name
      | Pedro Páramo
      | pedropáramo@minsait.com
    li.ods-actions-menu__separator
    li
      lang-selector(
        cssClass="user-ul__languages"
        :mobile="mobile")
    li.ods-actions-menu__separator
    router-link(
      tag="li"
      to="/dashboard")
      a
        ods-icon(name="user")
        | Profile
    router-link(
      tag="li"
      to="/dashboard")
      a
        ods-icon(name="setting")
        | Subsection
    router-link(
      tag="li"
      to="/dashboard")
      a
        ods-icon(name="user-role")
        | Account
    li.ods-actions-menu__separator
    router-link(
      tag="li"
      to="/dashboard")
      a
        ods-icon(name="book")
        | Help
    router-link(
      tag="li"
      to="/dashboard")
      a
        ods-icon(name="list")
        | Suggest a feature
    li.ods-actions-menu__separator
    router-link(
      tag="li"
      to="/dashboard")
      a
        ods-icon(name="info")
        | Privacy & cookies
    router-link(
      tag="li"
      to="/dashboard")
      a
        ods-icon(name="info")
        | Software licenses
    router-link(
      tag="li"
      to="/dashboard")
      a
        ods-icon(name="info")
        | Terms & conditions
    li.ods-actions-menu__separator
    router-link(
      tag="li"
      to="/login")
      a
        ods-icon(name="logout")
        | Log out
</template>

<script>
import LangSelector from '@/components/shared/LangSelector'
import { mapGetters } from 'vuex'

export default {
  name: 'UserMenu',
  components: {
    LangSelector
  },
  methods: {
    ...mapGetters({
      isMobile: 'isMobile'
    })
  },
  computed: {
    mobile () {
      return this.isMobile()
    }
  }
}
</script>
