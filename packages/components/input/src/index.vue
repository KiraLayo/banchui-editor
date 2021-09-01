<template>
  <!-- el-from-item prop关联表单属性 -->
  <el-form-item
    :label="label"
    :rules="rules"
    :prop="formName"
  >
    <!-- el-input本身没有formatter故自己实现 -->
    <el-input
      :value="value"
      :type="type"
      :placeholder="placeholder"
      :readonly="readonly"
      clearable
      :show-password="type == 'password'"
      @input="onInput"
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
  </el-form-item>
</template>

<script>
import propsMixin from "~/components/mixins/props-mixin";
export default {
  name: "BCInput",
  mixins: [propsMixin],
  props: {
    value: [String, Number],
    placeholder: String,
    // text、number、textarea，password
    type: {
      type: String,
      default: "text",
    },
    readonly: Boolean,
    prepend: String,
    append: String,
    formatter: {
      type: Object,
      default: ()=>{
        return {
          trim: true,
          parrent: ""
        }
      }
    }
  },
  methods: {
    onInput(val) {
      var inputVal = val;
      if (this.inputVal && this.formatter) {
        inputVal = this.formatter(inputVal);
      }
      this.$emit("input", inputVal);
    },
  },
};
</script>