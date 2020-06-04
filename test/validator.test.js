import * as chai from 'chai';
import Validator from '../src/validator';
const { expect } = chai;

describe('validator', () => {
  it('exsit', () => {
    expect(Validator).to.exist;
  });
  it('内容必填检测，报错', () => {
    const validator = new Validator();
    const error = validator.validate('', [
      { required: true }
    ]);
    expect(error).to.equal('内容不可为空');
  });
  it('内容必填检测，正常', () => {
    const validator = new Validator();
    const error = validator.validate('hi', [
      { required: true }
    ]);
    expect(error).to.not.exist;
  });
  it('可以自定义报错的内容', () => {
    const validator = new Validator();
    const error = validator.validate('', [
      { required: true, message: '错啦' }
    ]);
    expect(error).to.equal('错啦');
  });
  it('可以自定义校验规则（输入正则表达式），报错', () => {
    const validator = new Validator();
    const error = validator.validate('', [
      { pattern: /^.+@.+$/ }
    ]);
    expect(error).to.equal('值不符合要求');
  });
  it('可以自定义校验规则（输入正则表达式）， 正常', () => {
    const validator = new Validator();
    const error = validator.validate('vivi@qq.com', [
      { pattern: /^.+@.+$/ }
    ]);
    expect(error).to.not.exist;
  });
  describe('多个规则校验', () => {
    it('不满足必填（优先检测required），报错', () => {
      const validator = new Validator();
      const error = validator.validate('', [
        { required: true, pattern: /^.+@.+$/ }
      ]);
      expect(error).to.equal('内容不可为空');
    });
    it('不满足pattern，报错', () => {
      const validator = new Validator();
      const error = validator.validate('vivi', [
        { required: true, pattern: /^.+@.+$/ }
      ]);
      expect(error).to.equal('值不符合要求');
    });
    it('不满足pattern，正常', () => {
      const validator = new Validator();
      const error = validator.validate('vivi@qq.com', [
        { required: true, pattern: /^.+@.+$/ }
      ]);
      expect(error).to.not.exist;
    });
    describe('多个规则校验并且自定义错误提示，请采用数组的形式', () => {
      it('按顺序报错，报错，请输入内容', () => {
        const validator = new Validator();
        const error1 = validator.validate('', [
          { required: true, message: '请输入内容' },
          { pattern: /^.+@.+$/, message: '请输入正确的规则' },
        ]);
        expect(error1).to.equal('请输入内容');
      });
      it('按顺序报错，报错，请输入规则', () => {
        const validator = new Validator();
        const error1 = validator.validate(0, [
          { required: true, message: '请输入内容' },
          { pattern: /^.+@.+$/, message: '请输入正确的规则' },
        ]);
        expect(error1).to.equal('请输入正确的规则');
      });
      it('正常', () => {
        const validator = new Validator();
        const error1 = validator.validate(0, [
          { required: true, message: '请输入内容' },
          { pattern: /^.+@.+$/, message: '请输入正确的规则' },
        ]);
        expect(error1).to.exist;
      });
    });
    describe('内置校验', () => {
      it('内置邮箱校验， 报错', () => {
        const validator = new Validator();
        const error = validator.validate('vivi', [
          { required: true, type: 'email' }
        ]);
        expect(error).to.equal('邮箱格式不正确');
      });
      it('内置邮箱校验， 正常', () => {
        const validator = new Validator();
        const error = validator.validate('vivi@qq.com', [
          { required: true, type: 'email' }
        ]);
        expect(error).to.equal(undefined);
      });
      it('内置长度校验， 最小报错', () => {
        const validator = new Validator();
        const error = validator.validate('v', [
          { required: true, min: 2, max: 10 }
        ]);
        expect(error).to.equal('长度不可少于2个字符');
      });
      it('内置长度校验， 最大报错', () => {
        const validator = new Validator();
        const error = validator.validate('vcccccccccccccccccccccccccccccccc', [
          { required: true, min: 2, max: 10 }
        ]);
        expect(error).to.equal('长度不可多于10个字符');
      });
      it('内置长度校验， 正常', () => {
        const validator = new Validator();
        const error = validator.validate('123', [
          { required: true, min: 2, max: 10 }
        ]);
        expect(error).to.equal(undefined);
      });
    });
    describe('可以自己定义新的内置规则', () => {
      it('报错', () => {
        const validator = new Validator();
        validator.Array = (value) => {
          if (!Array.isArray(value)) {
            return '值必须为数组类型';
          }
          return;
        };
        const error = validator.validate('vivi', [
          { type: 'Array' }
        ]);
        expect(error).to.equal('值必须为数组类型');
      });
      it('正常', () => {
        const validator = new Validator();
        validator.Array = (value) => {
          if (!Array.isArray(value)) {
            return '值必须为数组类型';
          }
          return;
        };
        const error = validator.validate(['vivi'], [
          { type: 'Array' }
        ]);
        expect(error).to.equal(undefined);
      });
      it('两个validator不会互相干扰', () => {
        const validator = new Validator();
        validator.Array = (value) => {
          if (!Array.isArray(value)) {
            return '值必须为数组类型';
          }
          return;
        };
        const error = validator.validate('', [
          { type: 'Array' }
        ]);
        expect(error).to.equal('值必须为数组类型');

        const validator2 = new Validator();
        const error2 = validator2.validate('', [
          { type: 'Array' }
        ]);
        expect(error2).to.equal('没有您输入的type类型，请自行添加');
      });
      it('可以添加全局属性', () => {
        const validator = new Validator();
        validator.add('Array', (value) => {
          if (!Array.isArray(value)) {
            return '值必须为数组类型';
          }
          return;
        });
        const error = validator.validate('vivi', [
          { type: 'Array' }
        ]);
        expect(error).to.equal('值必须为数组类型');

        const validator2 = new Validator();
        const error2 = validator2.validate([], [
          { type: 'Array' }
        ]);
        expect(error2).to.equal(undefined);

      });
      it('可以删除自己添加的全局属性', () => {
        const validator = new Validator();
        validator.add('Array', (value) => {
          if (!Array.isArray(value)) {
            return '值必须为数组类型';
          }
        });
        validator.delete('Array')
        const error = validator.validate(['vivi'], [
          { type: 'Array' }
        ]);
        expect(error).to.equal('没有您输入的type类型，请自行添加');
      });
    });
  });
});