<template>
    <div class="home">
        <!--  显示日期  -->
        <Welcome></Welcome>
        <!--  显示导航栏  -->
        <Header></Header>
        <!--  显示侧边栏和图片  -->
        <ContentBody></ContentBody>
    </div>
</template>

<script>
    // @ 就是 /src目录
    import HelloWorld from '@/components/HelloWorld.vue';
    import Header from "@/components/Header";
    import ContentBody from "../../components/ContentBody";
    import Welcome from "../../components/Welcome";

    export default {
        name: 'Home',
        components: {
            Welcome,
            ContentBody,
            Header,
            HelloWorld
        }
        //,
        // methods: {
        //     handleSelect(key, keyPath) {
        //         console.log(key, keyPath);
        //     }
        // }
    }
</script>

