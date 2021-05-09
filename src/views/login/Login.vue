<template>
    <div class="login-wrap">
        <el-form
                class="login-form"
                label-position="top"
                label-width="80px"
                :model="formdata"
                style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)"
        >
            <h2>用户登录</h2>
            <el-form-item label="用户名">
                <el-input v-model="formdata.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="formdata.password" type="password"></el-input>
            </el-form-item>
            <el-button class="login-btn" type="primary" @click="handleLogin"
            >登录
            </el-button
            >
        </el-form>
    </div>
</template>
<script>
    import {Login} from "@/api/user";

    export default {
        name: "Login",
        components: {Header, Welcome},
        data() {
            return {
                formdata: {
                    username: "",
                    password: "",
                },
            };
        },
        methods: {
            handleLogin: function () {


                let loading = this.$loading({
                    lock: true,
                    text: "登录中...",
                    spinner: "el-icon-loading",
                    background: "rgba(0, 0, 0, 0.7)",
                });

                Login({
                    LoginName: this.formdata.username,
                    password: this.formdata.password,
                }).then((res) => {
                    console.log(res);

                    if (res.state == true) {
                        let loginInfo = {
                            token: res.data.authAccessToken.access_token,
                            userName: res.data.user.userName
                        };

                        // 调用setCookie方法，同时传递需要存储的数据，保存天数
                        this.cookie.setCookie(loginInfo, 7);
                        this.$router.replace("/");
                    } else {
                        this.$message.error(res.message);
                    }
                }).finally(loading.close());
            },
        },
    };
</script>
<style scoped>
    body {
        justify-content: center;
        align-items: center;
    }

    h2 {
        color: black;
        text-align: center;
    }

    .login-wrap {
        height: 100%;
        width: auto;
        justify-content: center;
        align-items: center;
    }

    .login-form {
        height: 100%;
        width: 500px;
        /*background: #324152;*/
        border-radius: 5px;
        padding: 30px;
        margin-top: 110px;
        margin: 110px auto;

    }

    .login-btn {
        width: 100%;
    }
</style>
