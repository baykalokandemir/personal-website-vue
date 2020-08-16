<template>
  <div class="base">
    <div class="wrapper">
      <div class="info-container">
        <SideText />
        <ThemeToggle class="theme-toggle" />
      </div>
      <VerticalCard class="v-card" name="Okan Demir Baykal" occupation="High School Senior"/>
    </div>
    <div class="wrapper-2">        
      <HorizontalCard class="h-card" />
      <HorizontalCard class="h-card" />
      <HorizontalCard class="h-card" />
    </div>
  </div>
</template>

<script>
import SideText from './components/SideText.vue'
import VerticalCard from './components/VerticalCard.vue'
import HorizontalCard from './components/HorizontalCard.vue'
import ThemeToggle from './components/ThemeToggle'


export default {
  name: 'App',
  components: {
    VerticalCard,
    HorizontalCard,
    SideText,
    ThemeToggle
  },
  mounted() {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap');

  :root {
    --pp-shadow: rgba(0, 0, 0, 0.4);
    --card-bg: linear-gradient(-45deg, rgba(0,0,0,0.1), rgba(255,255,255,0.05));
    --max-vcard-sm-w: 21rem;
    --max-vcard-sm-h: 31.5rem;
    --max-vcard-w: 26rem;
    --max-vcard-h: 40rem;
    --max-hcard-w: ;
    --max-hcard-h: ;
    --laptop-fraction: 4 / 15;
    --mobile-fraction: 3 / 4;
    --mobile-fraction-sm: 6 / 9;
    --toggle-fraction: 5 / 4;
    --transition: 0.2s;
    --rem-lg: 2rem;
    --rem-md: 1.5rem;
    --rem-sm: 1rem;
    --rem-lg-neg: -2rem;
    --rem-md-neg: -1.5rem;
    --rem-sm-neg: -1rem;
  }

  html {
    font-size: 20px;
  }

  :root[data-theme="light"] {
    --main: #d5e3f0;
    --shadow: #808890;
    --light: #FFFFFF;
    --text: #6b798b;
  }

  :root[data-theme="dark"] {
    --main: #141414;
    --shadow: #080808;
    --light: #313131;
    --text: #D5E3F0;
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
    transition: var(--transition);
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

  .wrapper-2 {
    display: grid;
    grid-row-gap: 3rem;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(2, auto);
    background-color: var(--main);
    grid-gap: 3rem;
    min-height: 30vh;
    padding: 3rem;
  }

  .v-card {
    grid-area: card;
  }

  .v-card-sm {
    margin: auto;
  }

  .h-card {
    margin: 2rem;
  }

  .info-container {
    grid-area: placeholder;
    padding: 2rem;
    display: grid;
    grid-template-rows: repeat(2, auto);
    grid-gap: 2rem;
    margin: auto 2rem;
  }

  @media (max-width: 2000px){
    html {
      font-size: 18px;
    }
  }

  @media (max-width: 1800px){
    html {
      font-size: 16px;
    }
  }
</style>
