<template>
    <div class="content">
        <el-row class="tac" style="min-height: 300px">
            <el-col :span="5">
                <h4>网上服务</h4>
                <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-user-solid"></i>
                            <span>
<!--<a href="https://www.ele.me" target="_blank" style="text-decoration: none">-->

                                <router-link to="/login" style="text-decoration: none; color: black">登录账号</router-link>
                                <!--                                </a>-->
                            </span>
                        </template>
                        <!--                        <el-menu-item-group>-->
                        <!--                            <template slot="title">分组一</template>-->
                        <!--                            <el-menu-item index="1-1">选项1</el-menu-item>-->
                        <!--                            <el-menu-item index="1-2">选项2</el-menu-item>-->
                        <!--                        </el-menu-item-group>-->
                        <!--                        <el-menu-item-group title="分组2">-->
                        <!--                            <el-menu-item index="1-3">选项3</el-menu-item>-->
                        <!--                        </el-menu-item-group>-->
                        <!--                        <el-submenu index="1-4">-->
                        <!--                            <template slot="title">选项4</template>-->
                        <!--                            <el-menu-item index="1-4-1">选项1</el-menu-item>-->
                        <!--                        </el-submenu>-->
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <router-link to="/reg" style="text-decoration: none; color: black">注册账号</router-link>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-printer"></i>
                        <span slot="title">打印服务</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-document"></i>
                        <span slot="title">其他服务</span>
                    </el-menu-item>
                </el-menu>
            </el-col>

            <el-carousel :interval="2000" arrow="always">
                <el-carousel-item v-for="item in imagesBox" :key="item.id">
                    <img :src="item.idView" class="image">
                </el-carousel-item>
            </el-carousel>
        </el-row>

        <hr/>
    </div>
</template>

<script>
    export default {
        name: "ContentBody",
        data() {
            return {
                imagesBox: [
                    {id: 0, idView: require("@/assets/banner/1.jpg")},
                    {id: 1, idView: require("../assets/banner/2.jpg")},
                    {id: 2, idView: require("../assets/banner/3.jpg")},
                    {id: 3, idView: require("../assets/banner/4.jpg")}
                ]
            }
        }
    }

</script>

<style scoped>
    .content {
        text-align: center;
    }
</style>
