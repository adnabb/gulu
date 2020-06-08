export default class Validator {
  validate(value, rules) {
    let error;
    if (typeof value === 'object' && typeof rules === 'object' && !Array.isArray(rules)) {
      const keys = Object.keys(rules);
      keys.forEach(key => {
        if (!value.hasOwnProperty(key)) {
        } else {
          if (!error) error = {};
          error[key] = validate.call(this, value[key], rules[key]);
        }
      });
    } else {
      error = validate.call(this, value, rules);
    }
    return error;
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

function validate(value, rules) {
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
};