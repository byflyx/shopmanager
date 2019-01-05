<template>
  <div class="login-wrap">
    <el-form class="form" label-position="top" label-width="80px" :model="formdata">
      <el-form-item label="用户名">
        <el-input v-model="formdata.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formdata.password"></el-input>
      </el-form-item>
      <el-button type="primary" class="btn" @click="handleLogin()">登录按钮</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formdata: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async handleLogin(){
      const res=await this.$http.post('login',this.formdata)
        const {data:{data,meta:{msg,status}}}=res
        console.log(res);
        if(status === 200) {
          // 在登录成功是保存token值
          localStorage.setItem('token',data.token);
          // this.$message.success(msg)
          this.$router.push({
            name: 'home'
          })
        }else{
          this.$message.error(msg)
        }
    }
    
  }
}
</script>

<style>
.login-wrap{
  height: 100%;
  background-color:#324152;
  display: flex;
  justify-content: center;
  align-items: center;

}
.login-wrap .form{
  width: 400px;
  padding: 30px;
  background-color: #FFFFFF;
  border-radius: 4px;
}
.login-wrap .form .btn{
  width: 100%;
}
</style>
