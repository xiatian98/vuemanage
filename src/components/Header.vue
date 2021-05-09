<template>
    <div class="header">
        <!--  mode:"horizontal"垂直模式  -->
        <el-menu
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#409EFF">
            <el-menu-item index="1">
                <i class="el-icon-circle-plus"></i>
                网上报名
            </el-menu-item>

            <el-submenu index="2">
                <template slot="title"><i class="el-icon-question"></i>了解信息</template>
                <el-menu-item index="2-1">英语四级</el-menu-item>
                <el-menu-item index="2-2">英语六级</el-menu-item>
                <el-submenu index="2-3">
                    <template slot="title">专业英语</template>
                    <el-menu-item index="2-3-1">专四</el-menu-item>
                    <el-menu-item index="2-3-2">专八</el-menu-item>
                </el-submenu>
            </el-submenu>

            <el-submenu index="3">
                <template slot="title"><i class="el-icon-office-building"></i>简介</template>
                <el-menu-item index="3-1">网站简介</el-menu-item>
                <el-menu-item index="3-2">规划</el-menu-item>
            </el-submenu>

            <el-menu-item index="4">
                <i class="el-icon-news"></i>
                <a href="https://www.ele.me" target="_blank" style="text-decoration: none">订单管理</a>
            </el-menu-item>

            <el-submenu index="5">
                <template slot="title"><i class="el-icon-document"></i>信息公开</template>
                <el-menu-item index="5-1">报名流程</el-menu-item>
                <el-menu-item index="5-2">报名条件</el-menu-item>
                <el-menu-item index="5-3">历史信息</el-menu-item>
            </el-submenu>

            <el-menu-item index="6">
                <router-link to="/" style="text-decoration: none">
                    <i class="el-icon-s-home"></i>
                    回到首页
                </router-link>
            </el-menu-item>

            <el-menu-item index="7">
                <router-link to="/about" style="text-decoration: none">
                    <i class="el-icon-help"></i>
                    关于我们
                </router-link>
            </el-menu-item>
            <el-menu-item index="8">
                <router-link to="/student" style="text-decoration: none">
                    <i class="el-icon-setting"></i>
                    管理
                </router-link>
            </el-menu-item>
        </el-menu>
        <hr/>
    </div>
</template>

<script>
    // 将头部抽取出来，其他页面可以复用
    // 直接使用<Header></Header>标签在所要引用的地方就可以使用
    export default {
        name: "Header"
    }
</script>

