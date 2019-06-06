<template lang="pug">
  div.header-notifications__wrapper
    span.unread-notifications__badge {{ unreadNotifications }}
    ods-actions-menu.header-notifications(
      icon="notification"
      customClass="header-notifications__popover"
      width="360"
      :onShowEvent="true"
      :onHideEvent="true"
      @show="showMobileOverlay"
      @hide="hideMobileOverlay"
      boundariesElement=".ods-main-header")
      ul.ods-actions-menu__ul.ods-actions-menu__ul--notifications
        li.ods-actions-menu__notifications__item.ods-actions-menu__notifications__item--title
          .notification__inner
            h6.notification__title {{ $t('notifications.popoverTitle') }}
              span.notifications-counter {{ unreadNotifications }}
        li.ods-actions-menu__notifications__item(
          v-for="(notification, index) in notifications"
          :key="notification.title + index"
          :class="{'ods-actions-menu__notifications__item--unread': !notification.status}")
          .notification__inner
            h6.notification__title {{ notification.title }}
            p.notification__content {{ notification.content | truncate(150, '...') }}
            time.notification__date(
              :datetime="notification.date") {{ notification.date }}
            component.notification__link(
              :is="linkTag(notification)"
              v-bind="properties") {{ notification.linkText }}
</template>

<script>
import * as _ from 'lodash'
import notificationsDemo from '../../../public/notificationsDemo.json'
import cssVars from '@/assets/scss/main.scss'

export default {
  name: 'HeaderNotifications',
  data () {
    return {
      isPhone: window.matchMedia(`(max-width: ${cssVars.phoneBreakpoint})`).matches
    }
  },
  computed: {
    notifications () {
      return _.orderBy(notificationsDemo, ['status', 'date'], ['asc', 'desc'])
    },
    unreadNotifications () {
      return this.notifications.filter(e => !e.status).length
    }
  },
  methods: {
    linkTag (notification) {
      if (this.$router && !notification.url.includes('http')) {
        this.properties = {
          to: notification.url
        }
        return 'router-link'
      } else {
        this.properties = {
          href: notification.url,
          target: '_blank'
        }
        return 'a'
      }
    },
    showMobileOverlay () {
      this.$parent.showMobileOverlay()
    },
    hideMobileOverlay () {
      this.$parent.hideMobileOverlay()
    }
  }
}
</script>

<style lang="scss" scoped>
  .header-notifications__wrapper {
    position: relative;
    .unread-notifications__badge {
      $--badge-size: 16px;
      position: absolute;
      right: 1px;
      top: 1px;
      width: $--badge-size;
      height: $--badge-size;
      background: $--color-primary;
      color: $--color-white;
      font-size: rem(9);
      line-height: $--badge-size;
      text-align: center;
      font-weight: 500;
      border-radius: 50%;
    }
  }
</style>
