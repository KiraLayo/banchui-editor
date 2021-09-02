<template>
  <el-input
    v-if="isInputComponent"
    :value="value"
    :type="type"
    :placeholder="placeholder"
    clearable
    @change="onChange"
    @input="$emit('input', $event)"
    @focus="$emit('focus')"
    @blur="$emit('blur')"
  >
    <template v-if="prepend" #prepend>
      {{ prepend }}
    </template>
    <template v-if="append" #append>
      {{ append }}
    </template>
  </el-input>
  <el-input-number
    v-else-if="isInputNumberComponent"
    :value="value"
    :placeholder="placeholder"
    @input="$emit('input', $event)"
    @change="$emit('change', $event)"
    @focus="$emit('focus')"
    @blur="$emit('blur')"
  />
</template>

<script>
export default {
  name: "FMCInput",
  props: {
    type: {
      // text、textarea、number
      type: String,
      default: "text",
    },
    value: [String, Number],
    placeholder: String,
    prepend: String,
    append: String,
    formatter: {
      type: Object,
      default: () => {
        return {
          trim: true,
        };
      },
    },
  },
  computed: {
    isInputComponent() {
      return this.type == "text" || this.type == "textarea";
    },
    isInputNumberComponent() {
      return this.type == "number";
    },
  },
  methods: {
    onChange(val) {
      var inputVal = val;
      if (
        this.inputVal &&
        this.inputVal instanceof String &&
        this.formatter &&
        this.formatter.trim
      ) {
        inputVal = inputVal.trim();
      }
      this.$emit("change", inputVal);
    },
  },
};
</script>