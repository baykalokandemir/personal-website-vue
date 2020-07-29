<template>
  <div class="info">
    <div class="text">
      <h1>Hello There!</h1>
      <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda repudiandae commodi quo placeat eum, beatae facere recusandae, quod possimus asperiores deleniti! Alias voluptatum, perspiciatis minima exercitationem assumenda perferendis numquam nisi.</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SideText',
  components: {
  }
}
</script>

<style scoped>
.info {
  display: grid;
  width: 100%;
  height: 100%;
}

.text {
  margin: auto;
  color: var(--text);
}

h1 {
  font-size: 3rem;
  font-weight: 600;
}

p {
  font-size: 1.5rem;
}

</style>