<template>
  <div :class="{ columns: columns }" class="is-vcentered">
    <div :class="{ columns: columns }">
      <Section
        :section="section"
        v-for="(section, index) in sections"
        :key="index"
      />
    </div>
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
