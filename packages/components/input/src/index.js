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
  }
};