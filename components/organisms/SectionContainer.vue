<template>
  <div>
    <div v-if="title" class="hero" :class="`is-${type}`">
      <span
        class="title is-0-desktop has-text-centered is-block is-wide is-marginless section"
        >{{ title }}</span
      >
    </div>

    <div class="is-block">
      <hooper
        v-if="mode == 'slider'"
        class="has-auto-height"
        :settings="sliderSettings"
        centerMode
        infiniteScroll
        autoPlay
      >
        <slide
          v-for="(section, index) in sections"
          :key="index"
          :index="index"
          class="thumbnail is-vcentered"
        >
          <Section :section="section" />
        </slide>
      </hooper>

      <div
        v-else
        :class="{ 'columns section-column': mode == 'columns' }"
        class="is-gapless is-vcentered is-marginless"
      >
        <Section
          :class="{ column: mode == 'columns' }"
          :section="section"
          v-for="(section, index) in sections"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Section from '@/components/molecoles/Section'
import { Hooper, Slide } from 'hooper'
export default {
  components: {
    Section,
    Hooper,
    Slide,
  },
  props: {
    title: {
      type: String,
    },
    type: {
      type: String,
      default: 'light',
    },
    sections: {
      type: Array,
      required: true,
    },
    mode: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      sliderSettings: {
        breakpoints: {
          0: {
            itemsToShow: 1,
          },
          900: {
            itemsToShow: 2,
          },
          1210: {
            itemsToShow: 3,
          },
        },
      },
    }
  },
}
</script>

<style scoped>
.columns.section-column {
  flex-direction: row;
  align-items: stretch;
}
</style>
