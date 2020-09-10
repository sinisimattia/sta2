<template>
  <component :is="component" class="is-block" :to="to" :href="to" noopener>
    <span class="has-text-centered">
      <IconLabel :pack="pack" :icon="icon" :size="size" :fixed="fixed">
        <slot></slot>
      </IconLabel>
    </span>
  </component>
</template>

<script>
import IconLabel from '~/components/atoms/IconLabel'

export default {
  components: {
    IconLabel,
  },
  extends: IconLabel,
  props: {
    to: String,
    internal: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    component() {
      return this.internal && this.to ? 'nuxt-link' : 'a'
    },
  },
}
</script>
