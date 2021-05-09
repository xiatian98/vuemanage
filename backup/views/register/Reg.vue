<template>
    <div>
        <h2>注册用户</h2>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="请输入学号" prop="sno">
                <el-input v-model="ruleForm.sno"></el-input>
            </el-form-item>
            <el-form-item label="请输入姓名" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="输入密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item label="请选择性别" prop="sex">
                <el-select v-model="ruleForm.sex" placeholder="请选择性别">
                    <el-option label="男" value="man"></el-option>
                    <el-option label="女" value="woman"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="请选择年级" prop="grade">
                <el-select v-model="ruleForm.grade" placeholder="请选择年级">
                    <el-option label="大一" value="1"></el-option>
                    <el-option label="大二" value="2"></el-option>
                    <el-option label="大三" value="3"></el-option>
                    <el-option label="大四" value="4"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="请输入电话" prop="phoneNumber">
                <el-input v-model="ruleForm.phoneNumber"></el-input>
            </el-form-item>
            <el-form-item label="请输入地址" prop="address">
                <el-input v-model="ruleForm.address"></el-input>
            </el-form-item>
            <el-form-item label="出生日期" required>
                <el-col :span="11">
                    <el-form-item prop="date1">
                        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"
                                        style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
                <!--                <el-col class="line" :span="2">-</el-col>-->
                <!--                <el-col :span="11">-->
                <!--                    <el-form-item prop="date2">-->
                <!--                        <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>-->
                <!--                    </el-form-item>-->
                <!--                </el-col>-->
            </el-form-item>
            <el-form-item label="请输入邮箱" prop="email">
                <el-input v-model="ruleForm.email"></el-input>
            </el-form-item>

            <el-form-item label="身份证号" prop="identitycard">
                <el-input v-model="ruleForm.identitycard"></el-input>
            </el-form-item>
            <!--            <el-form-item label="即时配送" prop="delivery">-->
            <!--                <el-switch v-model="ruleForm.delivery"></el-switch>-->
            <!--            </el-form-item>-->
            <!--            <el-form-item label="活动性质" prop="type">-->
            <!--                <el-checkbox-group v-model="ruleForm.type">-->
            <!--                    <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>-->
            <!--                    <el-checkbox label="地推活动" name="type"></el-checkbox>-->
            <!--                    <el-checkbox label="线下主题活动" name="type"></el-checkbox>-->
            <!--                    <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>-->
            <!--                </el-checkbox-group>-->
            <!--            </el-form-item>-->
            <!--            <el-form-item label="特殊资源" prop="resource">-->
            <!--                <el-radio-group v-model="ruleForm.resource">-->
            <!--                    <el-radio label="线上品牌商赞助"></el-radio>-->
            <!--                    <el-radio label="线下场地免费"></el-radio>-->
            <!--                </el-radio-group>-->
            <!--            </el-form-item>-->
            <!--            <el-form-item label="活动形式" prop="desc">-->
            <!--                <el-input type="textarea" v-model="ruleForm.desc"></el-input>-->
            <!--            </el-form-item>-->
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Reg",
        data() {
            let validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            let validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            let phone = (rule, value, callback) => {
                if (value && (!(/^[1][345789]\d{9}$/).test(value) || !(/^[1-9]\d*$/).test(value) || value.length !== 11)) {
                    callback(new Error('请输入正确的手机号码'))
                } else {
                    callback()
                }
            };
            let idCardValidity = (rule, code, callback) => {
                var city = {
                    11: "北京",
                    12: "天津",
                    13: "河北",
                    14: "山西",
                    15: "内蒙古",
                    21: "辽宁",
                    22: "吉林",
                    23: "黑龙江 ",
                    31: "上海",
                    32: "江苏",
                    33: "浙江",
                    34: "安徽",
                    35: "福建",
                    36: "江西",
                    37: "山东",
                    41: "河南",
                    42: "湖北 ",
                    43: "湖南",
                    44: "广东",
                    45: "广西",
                    46: "海南",
                    50: "重庆",
                    51: "四川",
                    52: "贵州",
                    53: "云南",
                    54: "西藏 ",
                    61: "陕西",
                    62: "甘肃",
                    63: "青海",
                    64: "宁夏",
                    65: "新疆",
                    71: "台湾",
                    81: "香港",
                    82: "澳门",
                    91: "国外 "
                };
                var tip = ""
                var pass = true

                if (!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)) {
                    tip = "身份证号格式错误"
                    pass = false;
                } else if (!city[code.substr(0, 2)]) {
                    tip = "地址编码错误"
                    pass = false
                } else {
                    // 18位身份证需要验证最后一位校验位
                    if (code.length === 18) {
                        code = code.split('')
                        // ∑(ai×Wi)(mod 11)
                        // 加权因子
                        var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
                        // 校验位
                        var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]
                        var sum = 0
                        var ai = 0
                        var wi = 0
                        for (var i = 0; i < 17; i++) {
                            ai = code[i]
                            wi = factor[i]
                            sum += ai * wi
                        }
                        var last = parity[sum % 11];
                        if (parity[sum % 11] != code[17]) {
                            tip = "校验位错误"
                            pass = false
                        }
                    }
                }
                if (!pass) {
                    callback(new Error(tip))
                } else {
                    callback()
                }
            };

            //
            return {
                ruleForm: {
                    sno: '',
                    name: '',
                    pass: '',
                    checkPass: '',
                    // pwd: '',
                    sex: '',
                    grade: '',
                    phoneNumber: '',
                    address: '',
                    date1: '',
                    date2: '',
                    email: '',
                    identitycard: '',
                    // delivery: false,
                    // type: [],
                    // resource: '',
                    // desc: ''
                },
                rules: {
                    sno: [
                        {required: true, message: '请输入学号', trigger: 'blur'},
                        {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
                    ],
                    name: [
                        {required: true, message: '请输入姓名', trigger: 'blur'}
                        // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    pass: [
                        {validator: validatePass, trigger: 'blur'},
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur'}
                    ],
                    checkPass: [
                        {validator: validatePass2, trigger: 'blur'},
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur'}
                    ],

                    sex: [
                        {required: true, message: '请选择性别', trigger: 'change'}
                    ],
                    grade: [
                        {required: true, message: '请选择年级', trigger: 'change'}
                    ],
                    phoneNumber: [
                        {required: true, message: '请输入电话号码', trigger: 'blur'},
                        {validator: phone, trigger: 'blur'}
                    ],
                    address: [
                        {required: false}
                    ],
                    date1: [
                        {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
                    ],
                    // date2: [
                    //     { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                    // ],
                    email: [
                        {required: true, message: '请输入邮箱', trigger: 'blur'},
                        {type: 'email', message: '请输入正确的邮箱', trigger: ['blur', 'change']}
                    ],
                    identitycard: [
                        {required: true, message: '请输入身份证号', trigger: 'blur'},
                        // {validator: null, message: '请输入正确的身份证号', trigger: 'blur'},
                        {
                            pattern: /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/,
                            message: '请输入正确的证件号', trigger: 'blur'
                        },
                        {validator: idCardValidity, trigger: 'blur'}
                    ]
                    // ,
                    // type: [
                    //     { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                    // ],
                    // resource: [
                    //     { required: true, message: '请选择活动资源', trigger: 'change' }
                    // ],
                    // desc: [
                    //     { required: true, message: '请填写活动形式', trigger: 'blur' }
                    // ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        // alert('提交成功!');
                        this.$message({
                            message: '恭喜哦，提交成功',
                            type: 'success'
                        })
                    } else {
                        // console.log('提交失败!!');
                        this.$message({
                            message: '警告哦，提交失败',
                            type: 'warning'
                        })
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>
    h2 {
        text-align: center;
    }
</style>
