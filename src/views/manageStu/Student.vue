<template>
    <!--  Vue只允许有一个根节点  -->
    <div>
        <Welcome></Welcome>
        <Header></Header>
        <el-table
                :data="student"
                height="auto"
                border
                stripe
                style="width: 100%"
        >
            <el-table-column
                    type="selection"
                    width="55">
            </el-table-column>
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
                    width="50"
                    :formatter="formatterSex">
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

            <el-table-column
                    fixed="right"
                    width="120">
                <template slot="header" slot-scope="scope">
                    <el-input
                            v-model="search"
                            size="mini"
                            @focus="focus"
                            @blur="blur"
                            placeholder="搜索"/>
                </template>
                <template slot-scope="scope">
                    <el-button
                            @click.native.prevent="editRow(scope.$index, student)"
                            type="primary"
                            size="small"
                            icon="el-icon-edit">
                    </el-button>
                    <el-button
                            @click.native.prevent="deleteRow(scope.$index, student)"
                            type="danger"
                            size="small"
                            icon="el-icon-delete">
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <div style="margin-top: 20px">
            <el-button @click="downloadExcel" type="primary" icon="el-icon-download">导出</el-button>
        </div>
    </div>

</template>

<script>

    import Header from "../../components/Header";
    import Welcome from "../../components/Welcome";

    // script中读取Json数据
    export default {
        name: "Student",
        components: {Welcome, Header},
        methods: {
            formatterSex(row) {
                return row.sex===1 ? '男' : row.sex === 0 ? '女' : '无';
            },
            editRow(index, rows) {

            },
            deleteRow(index, rows) {
                rows.splice(index, 1);
            },
            downloadExcel() {
                require.ensure([], () => {
                    const {export_json_to_excel} = require('../../download/export2Excel');
                    // 这里深拷贝，修改值时不会影响到原对象
                    const list = JSON.parse(JSON.stringify(this.student));
                    list.map((item) => { // 这里修改要下载的字段内容
                        item.num ? item.num = '是' : item.num = '否'
                        return item;
                    });
                    const filterVal = ['studentno', 'studentname', 'sex', 'gradeid', 'phone', 'address', 'birthdate', 'email', 'identitycard'];// 取出要下载的表头字段
                    const tHeader = ['学号', '姓名', '性别', '年级', '电话', '地址', '出生日期', '邮箱', '身份证号'];// 把表头字段定义成想要的中文或英文
                    const data = this.formatJson(filterVal, list);
                    export_json_to_excel(tHeader, data, '学生列表');// 定义excel下载成功的表名
                });
            },
            //格式转换,不需要改动
            formatJson(filterVal, jsonData) {
                return jsonData.map(v => filterVal.map(j => v[j]))
            }
        },

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
