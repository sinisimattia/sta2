<template>
  <div>
    <span
      v-if="title"
      class="title is-0-desktop has-text-centered is-block is-wide is-marginless section"
    >{{title}}</span>
    <div class="is-block">
      <hooper v-if="mode == 'slider'" :itemsToShow="3" centerMode infiniteScroll autoPlay>
        <slide
          v-for="(section, index) in sections"
          :key="index"
          :index="index"
        >
          <Section :section="section" />
        </slide>
      </hooper>

      <div
        v-else
        :class="{ 'columns section-column': (mode == 'columns') }"
        class="is-gapless is-vcentered is-marginless"
      >
        <Section
          :class="{ 'column': (mode == 'columns') }"
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
    sections: {
      type: Array,
      required: true,
    },
    mode: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.columns.section-column {
  flex-direction: row;
  align-items: stretch;
}
</style>
