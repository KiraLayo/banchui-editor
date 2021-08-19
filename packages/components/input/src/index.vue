<template>
  <van-cell 
    v-if="$_BC_isMobile && !hidden" 
    :title="label">
    <template #label>
      <van-field
        :value="value"
        :type="type == 'password' ? $_vant_type : type"
        :placeholder="placeholder"
        :name="formName"
        :disabled="disabled"
        :rules="rules"
        :formatter="formatter"
        :readonly="readonly"
        clearable
        @input="$emit('input', $event)"
        @focus="$emit('focus')"
        @blur="$emit('blur')"
      >
        <template v-if="type == 'password'" #button>
          <van-icon name="eye-o" 
            @click="$_BC_showPassword = !$_BC_showPassword" 
          />
        </template>
        <template v-if="prepend" #left-icon>
          {{ prepend }}
        </template>
        <template v-if="append" #right-icon>
          {{ append }}
        </template>
      </van-field>
    </template>
  </van-cell>
  <!-- el-from-item prop关联表单属性 -->
  <el-form-item
    v-else-if="!$_BC_isMobile && !hidden"
    :label="label"
    :rules="rules"
    :prop="formName"
  >
    <!-- el-input本身有name属性，所以也使用 -->
    <!-- el-input本身没有formatter故自己实现 -->
    <el-input
      :value="value"
      :type="type"
      :placeholder="placeholder"
      :name="formName"
      :disabled="disabled"
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
import componentMixin from "~/components/mixins/component-mixin";
export default {
  name: "bc-input",
  mixins: [componentMixin],
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
    append: String
  },
  data() {
    return {
      // 只针对vant组件处理password
      $_BC_showPassword: true
    }
  },
  computed: {
    // 只针对vant组件处理password
    $_vant_type() {
      if (this.$_BC_showPassword) {
        return this.type;
      }
      return "text";
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