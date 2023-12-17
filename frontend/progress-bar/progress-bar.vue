<template>
  <!-- Outer container for the progress bar -->
  <div class="progress">
    <!-- Inner div representing the progress bar -->
    <div
      class="progress-bar"
      :style="{ width: `${clampedValue}%` }"
      role="progressbar"
      :aria-valuenow="clampedValue"
      :aria-valuemin="MIN"
      :aria-valuemax="MAX"
    >
      <!-- Display the current clamped value as text inside the progress bar -->
      {{ clampedValue }}%
    </div>
  </div>
</template>

<script>
export default {
  // Define the props that the component accepts
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
  // Define data properties used within the component
  data() {
    return {
      MIN: 0, // Minimum value for the progress bar
      MAX: 100, // Maximum value for the progress bar
    };
  },
  // Define computed properties that are derived from data or props
  computed: {
    // Compute the clamped value to ensure it falls within the [MIN, MAX] range
    clampedValue() {
      return Math.min(Math.max(this.value, this.MIN), this.MAX);
    },
  },
};
</script>

<style scoped>
/* Scoped styles specific to this component */
body {
  font-family: sans-serif;
}

.progress {
  /* Styles for the outer container */
  background-color: rgb(233, 236, 239);
  border: 1px solid #c5c5c5;
  border-radius: 8px;
  height: 20px;
}

.progress-bar {
  /* Styles for the progress bar */
  background-color: #0d6efd;
  color: #fff;
  height: 100%;
  overflow: hidden;
  text-align: center;
}
</style>
