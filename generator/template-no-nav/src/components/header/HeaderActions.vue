<template lang="pug">
  ul.ods-actions-menu__ul.ods-actions-menu--header__ul
    router-link(
      tag="li"
      to="/")
      a
        ods-icon(name="list")
        | Subsection
    li.ods-actions-menu__separator
    router-link(
      tag="li"
      to="/")
      a
        ods-icon(name="info")
        | Subsection
    router-link(
      tag="li"
      to="/")
      a
        ods-icon(name="clock")
        | Subsection
    li.ods-actions-menu__separator
    router-link(
      tag="li"
      to="/")
      a
        ods-icon(name="store")
        | Subsection
    router-link(
      tag="li"
      to="/")
      a
        ods-icon(name="broadcast")
        | Subsection
    router-link(
      tag="li"
      to="/")
      a
        ods-icon(name="book")
        | Subsection
</template>
