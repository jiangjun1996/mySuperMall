<template>
  <div id="login">
    <el-row :gutter="20">
      <el-col :span="8" :offset="8">
        <!--form登录表单-->
        <el-form
          label-width="80px"
          :model="formData"
          :rules="rules"
          ref="dynamicValidateForm"
          :hide-required-asterisk="true"
        >
          <el-form-item label="用户名" prop="username">
            <el-input type="text" v-model="formData.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="formData.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('dynamicValidateForm')"
              >登录</el-button
            >
            <el-button @click="resetForm('dynamicValidateForm')"
              >重置</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "login",
  data: () => {
    return {
      formData: {
        username: "",
        password: "",
      },
      rules: {
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // const { username, password } = this.formData;
          //console.log(username, password);
          // if (username == "admin" && password == "123") {
          //   this.$router.push("./tree");
          // }
           this.$router.push("./tree");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style>
.el-row {
  margin-top: 250px;
}

#login {
  background: url("../assets/img/西施.jpg") no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}
</style>