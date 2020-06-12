# Form 表单

## 自定义可验证的表单

<ClientOnly>
  <g-form-1></g-form-1>
</ClientOnly>

```vue
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

<script>
import FormMixin from '../../../src/form.mixin';
export default {
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
```