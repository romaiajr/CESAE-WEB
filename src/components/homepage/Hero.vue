<template>
  <div id="hero"></div>
</template>

<style>
#hero {
  width: 100%;
  height: 800px;
  background: url("../../assets/img/Hero.png");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

@media screen and (max-width: 760px) {
  #hero {
    height: 200px;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
}
@media screen and (max-width: 1140px) and (min-width: 761px) {
  #hero {
    height: 400px;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
}
</style>
