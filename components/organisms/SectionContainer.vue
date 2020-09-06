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
        <Section :section="section"/>
      </div>
    </div>
  </div>
</template>

<script>
import Section from '@/components/molecoles/Section'

export default {
  components: {
    Section
  },
  props: {
    sections: {
      type: Array,
      required: true,
    },
  },
}
</script>
