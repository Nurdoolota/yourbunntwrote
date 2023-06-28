<template>
  <div>
    <div>
      <label>{{ label }}</label>
      <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        type="text"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "FormInput",
  props: {
    modelValue: String,
    label: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped></style>
