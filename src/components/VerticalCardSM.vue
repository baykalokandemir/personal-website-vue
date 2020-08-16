<template>
  <div class="card">
    <div class="img-container">
      <img class="img" src="../assets/img/keeb.jpg" alt="">
    </div>
    <div class="content">
      <h1 class="title">Carbon Keyboard</h1>
      <p class="summary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate vitae veniam perferendis necessitatibus soluta a ratione, nesciunt tempore dolore quasi quod eveniet fugiat, labore delectus voluptates aut laudantium at quibusdam!</p>
      <button class="read-more">read more</button>
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
    grid-template-rows: 3fr 4fr;
    /* grid-template-rows: 20fr 4fr 6fr 6fr 4fr; */
    background: var(--card-bg);
    width: 100%;
    height: 100%;
    max-width: var(--max-vcard-sm-w);
    max-height: var(--max-vcard-sm-h);
    border-radius: var(--rem-md) ;
    box-shadow: var(--rem-md-neg) var(--rem-md-neg) 3rem var(--light), 
                var(--rem-md)     var(--rem-md)     3rem var(--shadow);
    transition: var(--transition);
  }

  .card:hover {
    transform: scale(1.02);
  }

  .img {
    border-radius: var(--rem-md) var(--rem-md) 0 0;
    object-fit: cover;
    width: var(--max-vcard-sm-w);
    height: calc(var(--max-vcard-sm-h) * 3/7);
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
    padding-top: calc(.5rem * 5/6);
    text-align: justify;
    text-justify: inter-word;
    font-size: 1rem;
  }

  .read-more {
    height: calc(2.5rem * 5/6);
    width: calc(8rem * 5/6);
    margin-top: 3.5rem;
    margin-left: 11.75rem;
    border-radius: calc(.75rem * 5/6);
    background: var(--main);
    box-shadow:  0.5rem 0.5rem var(--rem-lg) var(--shadow), 
                -0.5rem -0.5rem var(--rem-lg) var(--light);
    color: var(--text);
    font-size: calc(1rem * 5/6);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: calc(0.1rem * 5/6);
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
