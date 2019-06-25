<style lang="scss" scoped>
  /deep/ .ods-form-item__error {
    display: none;
  }

  .login-form__form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 475px;
    max-width: 100%;
    min-height: 490px;
    background: $--color-white;
    box-sizing: border-box;
    padding: rem(65) rem(65) rem(50);
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .05);
    @media screen and (max-height:$--bp-desktop-sm-height) {
      min-height: 445px;
      width: 425px;
      padding: rem(40);
    }
  }

  .login-form__title {
    color: $--color-black;
    font-size: rem(32);
    margin-bottom: rem(24);
    font-family: soho-light;
    @media screen and (max-height:$--bp-desktop-sm-height) {
      margin-bottom: rem(16);
    }
  }

  .ods-form, .ods-input__inner {
    background-color: $--color-white;
  }

  .ods-form-item:last-child {
    margin-bottom: 0;
  }

  .login-form__actions {
    width: 100%;
    min-height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      margin-left: 30px;
    }
  }

  .login-form__form--password {
    .login-form__actions {
      justify-content: flex-end;
    }
  }

  .login-form__errors {
    min-height: 35px;
  }

  /deep/ .ods-form-item__label {
    line-height: rem(16);
  }

  /deep/ .ods-input.error {
    .ods-input__inner {
      border-color: $--color-danger;
    }
  }

  .login-form__small {
    font-size: rem(12);
  }

  .password-messages {
    min-height: 375px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    p {
      font-size: rem(14);
      width: rem(250);
      margin: rem(30) auto;
      line-height: 1.75;
    }
  }
  @media screen and (max-width: $--bp-mobile-lg) {
    .login-form__form {
      padding: rem(20);
      min-height: initial;
      box-shadow: none;
      background: transparent;
    }
    .login-form__actions {
      margin-top: rem(30);
    }
    .login-form__title {
      margin-bottom: rem(16);
      margin-top: rem(16);
    }
  }
  @media screen and (max-width:$--bp-mobile-sm) {
    /deep/ .ods-checkbox__label {
      font-size: rem(10);
    }
    .ods-button.is-round {
      padding: rem(10) rem(20);
    }
    .login-form__form {
      padding-top: 0;
    }
  }
</style>
<style lang="scss">
  .ods-notification__content {
    p {
      line-height: 1.4;
      text-align: left;
      letter-spacing: .3px;
      margin-top: 10px;
      padding-right: 30px;
    }
  }
  .ods-loading-spinner.ods-loading-spinner {
    .pulse {
      &::before {
        background-color: $--color-secondary;
      }
      &::after {
        content: '';
        display: block;
        margin: 0 auto;
        width: 30px;
        height: 30px;
        border-radius: 25px;
        background-color: $--color-secondary;
        z-index: 4;
        -webkit-animation: loading-pulse 3s infinite reverse cubic-bezier(.55,0,.1,1);
        animation: loading-pulse 3s infinite reverse cubic-bezier(.55,0,.1,1);
        opacity: .8;
        position: relative;
        top: -40px;
      }
    }
  }
</style>
