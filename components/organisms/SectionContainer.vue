<template>
  <div
    :class="{ 'columns section-column': columns }"
    class="is-gapless is-vcentered is-marginless"
  >
    <Section
      :class="{ column: columns }"
      :section="section"
      v-for="(section, index) in sections"
      :key="index"
    />
  </div>
</template>

<script>
import Section from '@/components/molecoles/Section'

export default {
  components: {
    Section,
  },
  props: {
    sections: {
      type: Array,
      required: true,
    },
    columns: {
      type: Boolean,
      default: false,
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
