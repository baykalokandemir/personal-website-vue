<template>
  <div>
    <label class="label">
      <div class="toggle">
        <input class="toggle-state" type="checkbox" name="check" value="check" v-model="darkMode"/>
        <div class="indicator"> {{ themeText }} mode</div>
      </div>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'ThemeToggle',
    data() {
      return {
          darkMode: false,
          themeText: ''
      }
    },
    mounted() {
      this.themeText = 'light';
      let htmlElement = document.documentElement;
      let theme = localStorage.getItem("theme");

      if (theme === 'dark') {
        htmlElement.setAttribute('data-theme', 'dark')
        this.darkMode = true
      } else {
        htmlElement.setAttribute('data-theme', 'light');
        this.darkMode = false
      }
    },
    watch: {
      darkMode: function () {
        if (this.darkMode) {
          localStorage.setItem("theme", 'dark');
          document.documentElement.setAttribute('data-theme', 'dark');
          this.themeText = 'dark';
        } else {
          localStorage.setItem("theme", 'light');
          document.documentElement.setAttribute('data-theme', 'light');
          this.themeText = 'light';
        }
      }
    }
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
    height: calc(2rem * var(--toggle-fraction));
    width: calc(7.5rem * var(--toggle-fraction));
    border-radius: calc(1rem * var(--toggle-fraction));
    overflow: hidden;
    box-shadow:
      -0.5rem  -0.25rem 0.5rem  0.1rem var(--light),
       0.5rem   0.25rem 0.75rem 0.1rem var(--shadow),
       0.25rem  0.25rem 0.25rem 0.1em var(--shadow) inset,
      -0.25rem -0.25rem 0.25rem 0.1rem var(--light) inset;
  }

  .toggle-state {
    display: none;
  }
  
  .indicator {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-size: calc(0.75rem * var(--toggle-fraction));
    font-weight: bold;
    height: 100%;
    width: calc(5rem * var(--toggle-fraction));
    background: var(--light);
    border-radius: calc(1rem * var(--toggle-fraction));
    transform: translate3d(0%, 0, 0);
    transition: transform var(--transition) cubic-bezier(0.85, 0.05, 0.18, 1.35);
    box-shadow:
      -0.5rem -0.25rem 0.5rem  0rem var(--light),
       0.5rem  0.25rem 0.75rem 0rem var(--main);
  }

  .toggle-state:checked ~ .indicator {
    transform: translate3d(50%, 0, 0);
  }
</style>