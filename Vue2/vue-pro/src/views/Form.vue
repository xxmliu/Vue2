<template>
  <div>
    <h3>用户注册</h3>
    <hr />
    用户账号：<input type="text" v-model="form.username" />
    <p>{{ errorMsg.userMsg }}</p>
    <hr />
    用户密码：<input type="password" v-model="form.password" />
    <p>{{ errorMsg.pwdMsg }}</p>
    <hr />
    注册手机：<input type="text" v-model="form.phone" />
    <p>{{ errorMsg.phoneMsg }}</p>
    <hr />
    注册邮箱：<input type="text" v-model="form.email" />
    <p>{{ errorMsg.emailMsg }}</p>
    <hr />
    选择性别：
    <input value="男" type="radio" v-model="form.gender" /> 男
    <input value="女" type="radio" v-model="form.gender" /> 女
    <hr />
    选择爱好:
    <input value="健身" type="checkbox" v-model="form.hobby" /> 健身
    <input value="游泳" type="checkbox" v-model="form.hobby" /> 游泳
    <input value="拉丁" type="checkbox" v-model="form.hobby" /> 拉丁
    <hr />
    选择籍贯：
    <select v-model="form.pro">
      <option value="河南省">河南省</option>
      <option value="河北省">河北省</option>
      <option value="山东省">山东省</option>
      <option value="山西省">山西省</option>
    </select>
    <hr />
    <button @click="btn()">注册</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "test",
        password: "",
        phone: "",
        email: "",
        gender: "", // 性别
        hobby: ['游泳','健身'],  // 爱好 多选框空数组
        pro: '山西省',    // 籍贯
      },
      errorMsg: {
        userMsg: "",
        pwdMsg: "",
        phoneMsg: "",
        emailMsg: "",
      },
    };
  },
  methods: {
    btn() {
      console.log(this.form);

      let user = /\b[a-zA-Z0-9]{6,15}\b/;
      if (user.test(this.form.username)) {
        this.errorMsg.userMsg = "";
      } else {
        this.errorMsg.userMsg = "用户名格式不正确";
      }

      // let pwd = /\d{6}/
      // if(pwd.test(this.form.password)){
      //   this.errorMsg.pwdMsg = ''
      // }else{
      //   this.errorMsg.pwdMsg = '密码格式不正确'
      // }

      let reg = /^1[3-9]\d{9}$/;
      if (reg.test(this.form.phone)) {
        this.errorMsg.phoneMsg = "";
      } else {
        this.errorMsg.phoneMsg = "手机号格式不正确";
      }

      let ema = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (ema.test(this.form.email)) {
        this.errorMsg.emailMsg = "";
      } else {
        this.errorMsg.emailMsg = "邮箱格式不正确";
      }
    },
  },

  watch: {
    "form.password": function (newValue, oldValue) {
      console.log(newValue);
      if (newValue.length == 6) {
        // 表单验证
        if (/\d{6}/.test(newValue)) {
          this.errorMsg.pwdMsg = ""; // 清空错误消息
        } else {
          this.errorMsg.pwdMsg = "格式不正确";
        }
      } else {
        this.errorMsg.pwdMsg = ""; // 清空错误消息
      }
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  color: red;
}
</style>
