<template lang="pug">
  #app
    template(v-if="!this.$route.path.includes('login')")
      header-content(@hasTopBar="handleHeigth")
      div.flex-container
        <%_ if(options.addMenu) { _%>
        nav-content
        <%_ } _%>
        ods-main
          ods-scrollbar(:wrapClass="wrapClass")
            router-view
            footer
    template(v-else)
      router-view
</template>

<script>
import HeaderContent from "@/components/header/HeaderContent"
<%_ if(options.addMenu) { _%>
import NavContent from "@/components/nav/NavContent"
<%_ } _%>

export default {
  name: "App",
  components: {
    HeaderContent<%_ if(options.addMenu) { _%>,
    NavContent<%_ } _%>
  },

  data() {
    return {
      wrapClass: ""
    };
  },

  methods: {
    handleHeigth(val) {
      this.wrapClass = val
        ? "ods-scrollbar--main-content has-top-bar"
        : "ods-scrollbar--main-content";
    }
  }
};
</script>

<style lang="scss">
html,
body {
  font-family: "Soho", Helvetica, Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-kerning: none;
  scrollbar-width: none;
  .ods-scrollbar--main-content {
    height: $--main-content-height;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    box-sizing: border-box;
    padding: $--main-content-padding;
    background: $--color-neutral-4;
    &.has-top-bar {
      height: $--main-content-height--topbar;
    }
  }
  .ods-scrollbar__wrap {
    scrollbar-width: none;
  }
}
::-webkit-scrollbar {
  width: 0;
  height: 0;
  background: transparent;
}
</style>
