<template>
  <div style="margin: 20px 0;">
    <g-form>
      <g-form-item required label="用户名" :error="error.username">
        <g-input :value.sync="form.username"></g-input>
      </g-form-item>
      <g-form-item required label="密码" :error="error.password">
        <g-input type="password" :value.sync="form.password"></g-input>
      </g-form-item>
      <g-form-item>
        <g-button @click="onSubmit">提交</g-button>
        <g-button @click="onReset">重置</g-button>
      </g-form-item>
    </g-form>
  </div>
</template>

<script>
import Form from '../../../src/form/index';
import FormItem from '../../../src/form/form-item';
import Input from '../../../src/input';
import Button from '../../../src/button';
import FormMixin from '../../../src/form.mixin';
export default {
  components: {
    'g-form': Form,
    'g-form-item': FormItem,
    'g-input': Input,
    'g-button': Button,
  },
  mixins: [FormMixin],
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true }],
        password: [{ required: true }]
      }
    };
  },
  methods: {
    onSubmit() {
      this.validate(this.form, this.rules);
    },
    onReset() {
      this.error = '';
      this.form.username = '';
      this.form.password = '';
    }
  }
};
</script>

<style scoped>
.g-button {
  margin-right: 10px;
}
</style>