<template>
  <div class="card">
      <img src="../assets/img/pp.jpg" alt="" class="avatar">

      <div class="text">
        <h1>{{ name }}</h1>
        <h4>{{ occupation }}</h4>
      </div>

      <div class="btn-lg-container">
        <a class="btn-lg" download> Resume </a>
      </div>

      <div class="btn-sm-container"> <!-- btn-sm-container begins here -->
        <a href="https://github.com/baykalokandemir" target="_blank" class="btn-sm btn-github"><i class="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/okandemirbaykal/" target="_blank"  class="btn-sm btn-linkedin"><i class="fab fa-linkedin-in"></i></a>
        <a href="mailto:sgokan03@gmail.com" class="btn-sm btn-gmail"><i class="far fa-envelope"></i></a>
      </div> 

      <div class="spacer"></div> <!-- spacer begins and ends here, there isn't anything in it -->

  </div>
</template>

<script>
  export default {
    name: 'VerticalCard',
    props: {
      name: String,
      occupation: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card {
    margin: auto;
    display: grid;
    grid-template-rows: 20fr 4fr 6fr 6fr 4fr;
    background: var(--card-bg);
    width: 100%;
    height: 100%;
    max-width: var(--max-vcard-w);
    max-height: var(--max-vcard-h);
    border-radius: var(--rem-lg);
    box-shadow: var(--rem-lg-neg) var(--rem-lg-neg) 4rem var(--light), 
                var(--rem-lg)     var(--rem-lg)     4rem var(--shadow);
    transition: var(--transition);
  }

  .card:hover {
    transform: scale(1.02);
  }

  .card .text {
    display: grid;
    grid-template-rows: 2.5fr 1.5fr;
    color: var(--text);
    margin: auto;
    transition: var(--transition);
  }

  .card h1 {
    text-transform: uppercase;
    font-weight: 700;
    padding-bottom: .2em;
    transition: var(--transition);
  }

  .card h4 {
    margin: auto;
    font-weight: normal;
    transition: var(--transition);
  }

  .avatar {
    max-width: 14rem;
    margin: auto;
    border-radius: 50%;
    box-shadow: 0px 0px 20px var(--pp-shadow);
    transition: var(--transition);
  }

  .btn-lg-container {
    margin: auto;
  }

  .btn-lg {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    width: 16rem;
    border-radius: 1rem;
    margin: auto;
    transition: var(--transition);
    background-size: 200% auto;
    background: var(--main);
    box-shadow:  0.5rem 0.5rem var(--rem-lg) var(--shadow), 
                -0.5rem -0.5rem var(--rem-lg) var(--light);
    font-size: 1.35rem;
    font-weight: 700;
    color: var(--text);
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    text-decoration: none;
  }

  .btn-lg:hover {
    box-shadow:  0.5rem 0.5rem 1rem var(--shadow), 
                -0.5rem -0.5rem 1rem var(--light);
    background-position: center;
    cursor: pointer;
    transform: scale(1.015);
  }

  .btn-lg:active {
    background-position: right center;
    box-shadow:  0.5rem 0.5rem 1.1rem var(--shadow), 
                -0.5rem -0.5rem 1.1rem var(--light);
    cursor: pointer;
    transform: scale(1.007);
  }

  .btn-sm-container {
    margin: auto;
    display: grid;
    grid-gap: 2.75rem;
    grid-template-columns: repeat(3, 1fr);
  }

  .btn-sm {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    border-radius: 1rem;
    margin: auto;
    color: #D5E3F0;
    font-size: 1.4rem;
    transition: var(--transition);
  }

  .btn-sm:hover {
    background-position: center;
    cursor: pointer;
    transform: scale(1.015);
  }

  .btn-sm:active {
    background-position: right center;
    cursor: pointer;
    transform: scale(1.007);
  }

  .btn-github {
    color:#634C85;
    background: var(--main);
    box-shadow: inset 3px 3px 6px var(--shadow), 
                inset -3px -3px 6px var(--light);
    transition: var(--transition);
  }

  .btn-linkedin {
    color: #006BA3;
    background: var(--main);
    transition: var(--transition);
    box-shadow: inset 3px 3px 6px var(--shadow), 
                inset -3px -3px 6px var(--light);
  }

  .btn-gmail {
    color: #D33C30;
    background: var(--main);
    transition: var(--transition);
    box-shadow: inset 3px 3px 6px var(--shadow), 
                inset -3px -3px 6px var(--light);
  }

  @media (max-width: 580px) {
    .wrapper {
      grid-gap: 5rem;
      padding:var(--rem-lg);
    }
    
    .card {
      max-width: calc(var(--max-card-w) * var(--mobile-fraction));
      max-height: calc(var(--max-card-h) * var(--mobile-fraction));
      border-radius: 1.5rem;
      box-shadow:  1.5rem 1.5rem 3rem var(--shadow), 
                  -1.5rem -1.5rem 3rem var(--light);
    
    }
    
    .card h1 {
      padding-bottom: .6em;
      font-size: 1.65em;
    }
    
    .card h4 {
      padding-bottom: .6em;
    }
    
    .avatar {
      max-width: 10rem;
    }

    .btn-lg {
      height: 2.25rem;
      width: 12rem;
      border-radius: 0.75rem;
      font-size: 1.15rem;
      letter-spacing: 0.1rem;
    }
    
    .btn-sm-container {
      grid-gap: 2rem;
    }
    
    .btn-sm {
      width: 2.25rem;
      height: 2.25rem;
      border-radius: 0.75rem;
      font-size: 1rem;
    }
  }
</style>
