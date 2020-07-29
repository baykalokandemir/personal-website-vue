<template>
  <div class="card">
    <div class="img-container">
      <img class="img" src="../assets/img/keeb.jpg" alt="">
    </div>
    <div class="content">
      <h1 class="title">Carbon Keyboard</h1>
      <p class="summary">It's carbon. It's fiber. It's keyboard.
        It's all the expensive things in one. It's so expensive 
        you couldn't image. Greatest keyboard of all time. Magical.</p>
      <div class="btn-container">
        <div></div>
        <button class="read-more">read more</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HorizontalCard'
}
</script>

<style scoped>
  .card {
    display: grid;
    grid-template-columns: 3fr 4fr;
    grid-gap: .5rem;
    /* grid-template-rows: 20fr 4fr 6fr 6fr 4fr; */
    background: var(--card-bg);
    width: 100%;
    height: 100%;
    max-width: 35rem;
    max-height: 16.5rem;
    border-radius: var(--rem-lg);
    box-shadow: var(--rem-md-neg) var(--rem-md-neg) 3rem var(--light), 
                var(--rem-md)     var(--rem-md)     3rem var(--shadow);
    transition: var(--transition);
  }

  .card:hover {
    transform: scale(1.02);
  }

  .img {
    border-radius: var(--rem-lg) 0 0 var(--rem-lg);
    object-fit: cover;
    width: 15rem;
    height: 16.5rem;
  }

  .content {
    padding: 1rem 1rem 1rem 0.5rem;
    color: var(--text);
  }

  .title {
    font-weight: 600;
  }

  .summary {
    padding-top: .75rem;
    text-align: justify;
    text-justify: inter-word;

  }

  .btn-container {
    display: grid;
    grid-template-columns: 50% 50%;
  }

  .read-more {
    margin-top: 3.1rem;
    margin-left: .3rem;
    height: 2.5rem;
    width: 8rem;
    border-radius: .75rem;
    background: var(--main);
    box-shadow:  0.5rem 0.5rem var(--rem-lg) var(--shadow), 
                -0.5rem -0.5rem var(--rem-lg) var(--light);
    color: var(--text);
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    text-decoration: none;
  }

  .read-more:hover {
    box-shadow:  0.5rem 0.5rem 1rem var(--shadow), 
                -0.5rem -0.5rem 1rem var(--light);
    background-position: center;
    cursor: pointer;
    transform: scale(1.015);
  }
</style>
