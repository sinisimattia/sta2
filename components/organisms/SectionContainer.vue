<template>
  <div :class="{ columns: columns }" class="is-gapless is-vcentered is-widescreen-only">
    <Section
      :class="{ column: columns }"
      :section="section"
      v-for="(section, index) in sections"
      :key="index"
      class="is-fullheight"
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
