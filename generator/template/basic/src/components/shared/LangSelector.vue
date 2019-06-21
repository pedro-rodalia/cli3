<template lang="pug">
  ods-select(
    v-model="$i18n.locale"
    :class="cssClass")
    ods-option(
      v-for="lang in langs"
      :key="lang"
      :value="lang"
      :label="getLabel(lang)")
</template>

<script>
export default {
  name: 'LangSelector',

  props: {
    cssClass: {
      type: String
    },
    mobile: {
      type: Boolean
    }
  },

  computed: {
    langs () {
      return Object.keys(this.$i18n.messages)
    }
  },

  methods: {
    getLabel (lang) {
      return this.mobile ? this.$i18n.messages[lang].labelMobile : this.$i18n.messages[lang].label
    }
  }
}
</script>
