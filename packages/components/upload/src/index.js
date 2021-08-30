import propsMixin from "~/components/mixins/props-mixin";

export default {
  name: "BCUpload",
  mixins: [propsMixin],
  props: {
    value: Array, // [{name: "name", url: "url", status: "status"}]
    onBeforeRead: Function,
    onAfterRead: Function, //to upload
    onPreview: Function,
    onDelete: Function
  }
}