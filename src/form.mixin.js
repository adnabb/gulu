import validator from "./validator";
export default {
  data() {
    return {
      validator: new validator(),
      error: '',
    }
  },
  methods: {
    validate(data, rules) {
      this.error = this.validator.validate(data, rules);
    }
  },
}