<template>
  <div class="level" :class="{ 'is-mobile': fixed }">
    <div class="level-left">
      <div class="level-item">
        <fa v-if="icon" :icon="[pack, icon]" :class="`fa-${size}x`"></fa>
      </div>

      <div class="level-item">
        <span>
          <slot></slot>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    pack: {
      type: String,
      default: 'fas',
    },
    size: {
      type: Number,
      default: 1,
    },
    fixed: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
