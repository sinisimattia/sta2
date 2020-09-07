<template>
  <div>
    <Section
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
  },
}
</script>
