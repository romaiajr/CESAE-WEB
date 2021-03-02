<template>
  <div id="social-media">
    <div class="container">
      <div id="buttons_social">
        <vs-button
          icon
          color="facebook"
          href="https://m.facebook.com/CFQAE/?ref=bookmarks"
          blank
        >
          <i class="bx bxl-facebook-square"></i>
        </vs-button>
        <vs-button icon href="/" blank color="youtube">
          <i class="bx bxl-youtube"></i>
        </vs-button>
        <vs-button
          icon
          color="slack"
          href="https://instagram.com/cesaegrupodeestudos?igshid=w67glpz6247p"
          blank
        >
          <i class="bx bxl-instagram"></i>
        </vs-button>
      </div>
    </div>
  </div>
</template>
<style>
#social-media {
  box-sizing: border-box;
  width: 100%;
  padding: 12px 0px;
  background: var(--primary-light-color);
}
#buttons_social {
  display: flex;
  align-items: center;
  justify-content: center;
}
#buttons_social .bx {
  font-size: 48px !important;
}
#buttons_social button {
  margin: 0px 8px !important;
}
@media screen and (max-width: 760px) {
  #buttons_social .bx {
    font-size: 36px !important;
  }
  #buttons_social button {
    margin: 0 8px !important;
  }
}
</style>
