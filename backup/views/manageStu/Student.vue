<template>
    <!--  Vue只允许有一个根节点  -->
    <div>
        <Welcome></Welcome>
        <Header></Header>
        <el-table
                :data="student"
                height="auto"
                border
                style="width: 100%"
                >
            <el-table-column
                    fixed
                    prop="studentno"
                    label="学号"
                    width="50"
            >
            </el-table-column>
            <el-table-column
                    prop="loginpwd"
                    label="登录密码"
                    width="150">

            </el-table-column>

            <el-table-column
                    prop="studentname"
                    label="姓名"
                    width="100">

            </el-table-column>
            <el-table-column
                    prop="sex"
                    label="性别"
                    width="50">
            </el-table-column>
            <el-table-column
                    prop="gradeid"
                    label="年级"
                    width="80">
            </el-table-column>
            <el-table-column
                    prop="phone"
                    label="电话"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址">
            </el-table-column>
            <el-table-column
                    prop="birthdate"
                    label="出生日期"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="email"
                    label="邮箱">
            </el-table-column>
            <el-table-column
                    prop="identitycard"
                    label="身份证号">
            </el-table-column>
            <el-table-row v-for="item in student">
                {{item.studentno}}
                {{item.loginpwd}}
                {{item.studentname}}
                {{item.sex}}
                {{item.gradeid}}
                {{item.phone}}
                {{item.address}}
                {{item.birthdate}}
                {{item.email}}
                {{item.identitycard}}
            </el-table-row>
        </el-table>
    </div>

</template>

<script>

    import Header from "../../components/Header";
    import Welcome from "../../components/Welcome";

    // script中读取Json数据
    export default {
        name: "Student",
        components: {Welcome, Header},
        data() {
            return {
                student: [
                    {
                        studentno: 1,
                        loginpwd: '123564',
                        studentname: '王五',
                        sex: 0,
                        gradeid: 3,
                        phone: 110,
                        address: '中国北京',
                        birthdate: '1995-01-01 12:00:00',
                        email: 'wangwu@163.com',
                        identitycard: '123654199501011201'
                    },
                    {
                        studentno: 2,
                        loginpwd: '123564',
                        studentname: '王甲',
                        sex: 1,
                        gradeid: 2,
                        phone: 110,
                        address: '中国北京',
                        birthdate: '1995-01-01 12:00:00',
                        email: 'wangwu@163.com',
                        identitycard: '123654199501011201'
                    },
                    {
                        studentno: 3,
                        loginpwd: '123564',
                        studentname: '乙',
                        sex: 0,
                        gradeid: 1,
                        phone: 110,
                        address: '中国北京',
                        birthdate: '1995-01-01 12:00:00',
                        email: 'wangwu@163.com',
                        identitycard: '123654199501011201'
                    },
                    {
                        studentno: 2,
                        loginpwd: '123564',
                        studentname: '王甲',
                        sex: 1,
                        gradeid: 2,
                        phone: 110,
                        address: '中国北京',
                        birthdate: '1995-01-01 12:00:00',
                        email: 'wangwu@163.com',
                        identitycard: '123654199501011201'
                    },
                    {
                        studentno: 2,
                        loginpwd: '123564',
                        studentname: '王1',
                        sex: 1,
                        gradeid: 2,
                        phone: 110,
                        address: '中国北京',
                        birthdate: '1995-01-01 12:00:00',
                        email: 'wangwu@163.com',
                        identitycard: '123654199501011201'
                    },
                    {
                        studentno: 2,
                        loginpwd: '123564',
                        studentname: '王丙',
                        sex: 1,
                        gradeid: 2,
                        phone: 110,
                        address: '中国北京',
                        birthdate: '1995-01-01 12:00:00',
                        email: 'wangwu@163.com',
                        identitycard: '123654199501011201'
                    },
                    {
                        studentno: 2,
                        loginpwd: '123564',
                        studentname: '丁',
                        sex: 1,
                        gradeid: 2,
                        phone: 110,
                        address: '中国北京',
                        birthdate: '1995-01-01 12:00:00',
                        email: 'wangwu@163.com',
                        identitycard: '123654199501011201'
                    },
                    {
                        studentno: 2,
                        loginpwd: '123564',
                        studentname: '子',
                        sex: 1,
                        gradeid: 2,
                        phone: 110,
                        address: '中国北京',
                        birthdate: '1995-01-01 12:00:00',
                        email: 'wangwu@163.com',
                        identitycard: '123654199501011201'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
