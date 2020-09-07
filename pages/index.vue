<template>
  <div>
    <div>
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
                <img src="~/assets/img/illustrations/work_together.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <SectionContainer v-if="mainSections" :sections="mainSections"/>
      <SectionContainer v-if="cardSections" :sections="cardSections" columns/>
      <SectionContainer v-if="softwareSections" :sections="softwareSections" columns/>
    </div>
  </div>
</template>

<script>
import { identity } from '~/snisni.config.json'
import { sections as mainSections } from '~/config/home.json'
import { sections as cardSections } from '~/config/card.json'
import { sections as softwareSections } from '~/config/software.json'
import SectionContainer from '@/components/organisms/SectionContainer'

export default {
  components: {
    SectionContainer
  },
  data() {
    return {
      title: identity.name,
      subtitle: identity.slogan,
      mainSections: mainSections,
      cardSections: cardSections,
      softwareSections: softwareSections,
    }
  },
}
</script>
