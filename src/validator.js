export default class Validator {
  validate(value, rules) {
    if (!Array.isArray(rules)) {
      console.error('传入的rules必须为数组');
      return;
    }
    for (let i = 0; i < rules.length; i++) {
      const rule = rules[i];
      const { message, pattern, required, type, min, max } = rule;
      // 如果有required，优先校验
      if (required) {
        if (!value && value !== 0) {
          return message || '内容不可为空';
        }
      }
      if (pattern) {
        if (!pattern.exec(value)) {
          return message || '值不符合要求';
        }
      }
      if (min && value.length < min) {
        return message || `长度不可少于${min}个字符`;
      }
      if (max && value.length > max) {
        return message || `长度不可多于${max}个字符`;
      }
      if (type === 'email') {
        return this.validateEmail(value);
      }
      if (type && this[type]) {
        return this[type](value);
      } else if (type && !this[type]) {
        return '没有您输入的type类型，请自行添加';
      }
    }
    return;
  }

  add(type, fn) {
    Validator.prototype[type] = fn;
  }

  delete(type) {
    Validator.prototype[type] = undefined;
  }

  validateEmail(value) {
    if (!/^.+@.+$/g.exec(value)) {
      return '邮箱格式不正确';
    }
    return;
  }
}