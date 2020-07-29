<template>
  <div>
    <label class="label">
      <div class="toggle">
        <input class="toggle-state" type="checkbox" name="check" value="check"/>
        <div class="indicator">{{ theme }} mode</div>
      </div>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'ThemeToggle',
    props: ['theme']
  }
</script>

<style scoped>
  .label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    color: var(--text);
  }

  .toggle {
    isolation: isolate;
    position: relative;
    height: 2rem;
    width: 10rem;
    border-radius: 0.3rem;
    overflow: hidden;
    box-shadow:
      -0.5rem  -0.25rem 0.5rem  0rem var(--light),
       0.5rem   0.25rem 0.75rem 0rem var(--main),
       0.25rem  0.25rem 0.25rem 0rem var(--main) inset,
      -0.25rem -0.25rem 0.25rem 0rem var(--light) inset;
  }

  .toggle-state {
    display: none;
  }

  .indicator {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-size: .75rem;
    font-weight: bold;
    height: 100%;
    width: 50%;
    background: var(--light);
    border-radius: 0.3rem;
    transform: translate3d(0%, 0, 0);
    transition: transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);
    box-shadow:
      -0.5rem -0.25rem 0.5rem  0rem var(--light),
       0.5rem  0.25rem 0.75rem 0rem var(--main);
  }

  .toggle-state:checked ~ .indicator {
    transform: translate3d(100%, 0, 0);
  }
</style>