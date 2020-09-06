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

      <SectionContainer :sections="sections" />
    </div>
  </div>
</template>

<script>
import { identity } from '~/snisni.config.json'
import illustration from '~/assets/img/illustrations/work_together.svg'
import { sections } from '~/config/home.json'
import SectionContainer from '@/components/organisms/SectionContainer'

export default {
  components: {
    SectionContainer
  },
  data() {
    return {
      title: identity.name,
      subtitle: identity.slogan,
      banner_illustration: illustration,
      sections: sections,
    }
  },
}
</script>
