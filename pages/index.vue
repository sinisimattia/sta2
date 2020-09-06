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

      <div
        class="hero"
        v-for="(section, index) in sections"
        :key="index"
        :class="section.type ? `is-${section.type}` : null"
      >
        <div class="hero-body">
          <div class="container">
            <div class="section">
              <div class="columns is-vcentered">
                <div class="column">
                  <img :src="require(`~/assets/img/${section.image}`)" />
                </div>
                <div class="column">
                  <p class="title is-1" v-if="section.title">
                    {{ section.title }}
                  </p>
                  <p class="subtitle is-4" v-if="section.snippet">
                    {{ section.snippet }}
                  </p>
                  <div class="is-content" v-if="section.content">
                    <p
                      v-for="(paragraph, p) in section.content.paragraphs"
                      :key="p"
                    >
                      {{ paragraph }}
                    </p>
                  </div>
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
import { sections } from '~/config/home.json'

export default {
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
