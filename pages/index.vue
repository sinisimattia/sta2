<template>
  <div>
    <div class="intersection">
      <div class="hero is-large">
        <div class="hero-body">
          <div class="container section">
            <div class="columns is-vcentered">
              <div class="column">
                <h1 class="title is-0-desktop is-light is-still">
                  <span>{{ title }}</span>
                </h1>
                <h2 class="subtitle is-4">{{ subtitle }}</h2>
              </div>

              <div class="column">
                <img :src="banner_illustration" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="has-background-primary">
        <div class="container">
          <div class="section">
            <div class="tile is-ancestor">
              <div class="tile is-parent is-vertical">
                <div class="tile is-child notification is-info has-shadow">
                  <p class="title is-1">Coming soon</p>
                </div>

                <div class="tile is-child notification is-dark">
                  <p>Sooner than you might think.</p>
                </div>
              </div>

              <div class="tile is-parent">
                <div class="tile is-child notification is-content">
                  <p>But, for now. It remains empty</p>

                  <p>
                    This new release will be open, so anyone can create their
                    own blog for free!
                  </p>

                  <p>Please, be patient. I'm still working on it.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { identity } from '~/snisni.config.json'
import illustration from '~/assets/img/illustrations/work_together.svg'

export default {
  data() {
    return {
      title: identity.name,
      subtitle: identity.slogan,
      banner_illustration: illustration,
    }
  },
}
</script>
