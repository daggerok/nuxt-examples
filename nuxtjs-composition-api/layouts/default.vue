<template>
  <div>
    <header>
      <div id="banner">$1Te!</div>
      <!-- TODO: Implement responsive mobile menu icod functionality...  -->
      <ul>
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/ololo">Ololo</nuxt-link></li>
        <li><nuxt-link to="/posts?name=ololo">ololo.md</nuxt-link></li>
        <li><nuxt-link to="/posts?name=trololo">trololo.md</nuxt-link></li>
      </ul>
    </header>
    <!-- content -->
    <div class="container">
      <nuxt />
    </div>
  </div>
</template>

<style lang="scss">
  @import "../assets/variables.scss";

  * {
    padding: 0;
    margin: 0;
  }

  body {
    //font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-family: Roboto, sans-serif;

    header {
      background-color: $primaryBgColor;
      color: $primaryColor;
      padding: 0 10%;
      display: flow-root;

      #banner {
        padding: 1em 1em 1em 0;
        display: inline-block;
      }

      ul {
        float: right;

        li {
          list-style: none;
          display: inline-block;

          a {
            color: $primaryColor;
            text-decoration: none;
            padding: 1em;
            display: inline-block;

            &:hover {
              background-color: darken($primaryBgColor, 5%);
            }
          }
        }
      }
    }

    .container {
      padding: 1em 10%;
    }
  }

  @media (max-width: 515px) {
    body {
      //font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      font-family: Roboto, sans-serif;

      header {
        padding: 0 1em;

        ul {
          li {
            a {
              padding: 1em .5em;
            }

            &:nth-child(4) {
              a {
                padding: 1em 0 1em .5em;
              }
            }
          }
        }
      }

      .container {
        padding: 1em 1em;
      }
    }
  }

  @media (max-width: 370px) {
    body {
      //font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      font-family: Roboto, sans-serif;

      header {
        padding: 0 1em;

        ul {
          display: none;
        }
      }

      .container {
        padding: 1em 1em;
      }
    }
  }
</style>
