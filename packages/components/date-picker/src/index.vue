<template>
  <el-time-picker
    v-if="type == 'time'"
    :value="value"
    :is-range="range"
    :placeholder="$_BC_placeholder"
    :start-placeholder="$_BC_placeholderStart"
    :end-placeholder="$_BC_placeholderEnd"
    editable
    clearable
    @input="$emit('input', $event)"
  />
  <el-date-picker
    v-else-if="type == 'date' || type == 'datetime'"
    :type="$_BC_type"
    :placeholder="$_BC_placeholder"
    :start-placeholder="$_BC_placeholderStart"
    :end-placeholder="$_BC_placeholderEnd"
    editable
    clearable
    @input="$emit('input', $event)"
  />
</template>

<script>
export default {
  name: "BCDatePicker",
  props: {
    type: String, // date、datetime、time
    isRange: Boolean, // daterange、timerange、datetimerange 是否使用范围选择器
    value: [Array, Date], // 如果是 range 类型，则需要是Array，[Date //开始, Date //结束]
    placeholder: [Array, String], // 如果是 range 类型，则需要是Array，[String //开始, String //结束]
  },
  computed: {
    $_BC_placeholder() {
      if (placeholder instanceof Array) {
        if (this.isRange) {
          return this.placeholder;
        }
        return this.placeholder.length > 0 ? this.placeholder[0] : null;
      }
      if (this.isRange) {
        return [this.placeholder, this.placeholder];
      }
      return this.placeholder;
    },
    $_BC_placeholderStart() {
      if (this.$_BC_placeholder instanceof Array) {
        return this.$_BC_placeholder.length > 0
          ? this._BC_placeholder[0]
          : null;
      }
      return this.$_BC_placeholder;
    },
    $_BC_placeholderEnd() {
      if (this.$_BC_placeholder instanceof Array) {
        return this.$_BC_placeholder.length > 1
          ? this._BC_placeholder[1]
          : null;
      }
      return this.$_BC_placeholder;
    },
    $_BC_type() {
      switch (this.type) {
        case "date":
          {
            if (this.isRange) {
              return "daterange";
            }
            return "date";
          }
          break;
        case "datetime":
          {
            if (this.isRange) {
              return "datetimerange";
            }
            return "datetime";
          }
          break;
        default:
          break;
      }

      return null;
    },
  },
};
</script>

