<template>
  <div class="wrapper light">
    <SideText class="placeholder" />
    <VerticalCard class="card" name="Okan Demir Baykal" occupation="High School Senior"/>
  </div>
</template>

<script>
import SideText from './components/SideText.vue'
import VerticalCard from './components/VerticalCard.vue'

export default {
  name: 'App',
  data() {
    return {
      mode: 'dark'
    }
  },
  components: {
    VerticalCard,
    SideText
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap');

  :root {
    --main: #D5E3F0;
    --shadow: #808890;
    --light: #FFFFFF;
    --text: #6b798b;
    --pp-shadow: rgba(0, 0, 0, 0.4);
    --card-bg: linear-gradient(-45deg, rgba(0,0,0,0.1), rgba(255,255,255,0.05));
    --max-card-w: 26rem;
    --max-card-h: 40rem;
    --mobile-fraction: 3 / 4;
    --mobile-fraction-sm: 6 / 9;
    --transition: 0.2s;
    --rem-lg: 2rem;
    --rem-sm: 1rem;
    --rem-lg-neg: -2rem;
    --rem-sm-neg: -1rem;
  }

  .light {
    text-decoration: none;
  }
  
  * {
    padding: none;
    border: none;
    outline: none;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 500;
    text-rendering: geometricPrecision;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    min-height: 100vh;
  }

  .wrapper {
    display: grid;
    grid-template-areas: 'placeholder card';
    grid-template-columns: 3fr 2fr;
    background-color: var(--main);
    grid-gap: 3rem;
    min-height: 100vh;
    padding: 3rem;
  }

  .card {
    grid-area: card;
  }

  .placeholder {
    grid-area: placeholder;
    margin: auto 4rem;
  }

  @media (max-width: 1400px) {
  }
</style>
