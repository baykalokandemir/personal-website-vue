<template>
  <div class="card">
    <div class="img-container">
      <img class="img" src="../assets/img/keeb.jpg" alt="">
    </div>
    <div class="content">
      <h1 class="title">Carbon Keyboard</h1>
      <p class="summary">It's carbon. It's fiber. It's keyboard.
        It's all the expensive things in one. It's so expensive 
        you couldn't imagine.</p>
      <div class="btn-container">
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
    /* grid-template-rows: 20fr 4fr 6fr 6fr 4fr; */
    background: var(--card-bg);
    width: 100%;
    height: 100%;
    max-width: calc(30rem * 5/6);
    max-height: calc(16.5rem * 5/6);
    border-radius: var(--rem-md);
    box-shadow: var(--rem-sm-neg) var(--rem-sm-neg) 3rem var(--light), 
                var(--rem-sm)     var(--rem-sm)     3rem var(--shadow);
    transition: var(--transition);
  }

  .card:hover {
    transform: scale(1.02);
  }

  .img {
    border-radius: var(--rem-md) 0 0 var(--rem-md);
    object-fit: cover;
    width: calc(12.85rem * 5/6);
    height: calc(16.5rem * 5/6);
  }

  .content {
    margin: 1rem;
    color: var(--text);
  }

  .title {
    font-weight: 600;
    font-size: 1.5rem;
  }

  .summary {
    padding-top: calc(.5rem * 5/12);
    text-align: justify;
    text-justify: inter-word;
    font-size: 1rem;
  }

  .btn-container {
    display: grid;  
    grid-template-columns: 50% 50%;
  }

  .read-more {
    margin-top: 1rem;
    margin-left: 5.5rem;
    height: calc(2.5rem * 5/6);
    width: calc(8rem * 5/6);
    border-radius: calc(.75rem * 5/6);
    background: var(--main);
    box-shadow:  0.25rem  0.25rem var(--rem-md) var(--shadow), 
                -0.25rem -0.25rem var(--rem-md) var(--light);
    color: var(--text);
    font-size: calc(1rem * 5/6);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: calc(0.1rem * 5/6);
    text-decoration: none;
  }

  .read-more:hover {
    box-shadow:  0.25rem  0.25rem 1rem var(--shadow), 
                -0.25rem -0.25rem 1rem var(--light);
    background-position: center;
    cursor: pointer;
    transform: scale(1.015);
  }

  .read-more:active {
    transform: scale(1.005);
  }
</style>
