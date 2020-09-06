<template>
  <div>
    <div
      class="hero"
      v-for="(section, index) in sections"
      :key="index"
      :class="section.type ? `is-${section.type}` : null"
      :id="section.id"
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
                  <span
                    v-for="(paragraph, p) in section.content.paragraphs"
                    :key="p"
                  >
                    <p v-if="paragraph">{{ paragraph }}</p>
                  </span>
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
export default {
  props: {
    sections: {
      type: Array,
      required: true,
    },
  },
}
</script>
