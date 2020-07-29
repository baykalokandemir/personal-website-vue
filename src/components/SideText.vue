<template>
  <div class="info">
    <h1>Lorem ipsum dolor</h1>
    <ul>
      <li> it amet consectetur adipisicing elit.</li>
      <li> Repellendus, voluptates, in inventore</li>
      <li>iste quibusdam laboriosam, doloremque</li>
      <li>unde quam debitis facilis amet earum.</li>
      <li>Distinctio tenetur voluptatem minima</li>
      <li>quia perferendis quaerat facere!</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SideText',
  props: {
    theme: String
  }
}
</script>

<style scoped>
  .info {
    display: grid;
    width: 100%;
    height: 100%;
  }
</style>