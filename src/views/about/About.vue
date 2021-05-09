<template>
    <div class="about">
        <Welcome></Welcome>
        <Header></Header>
        <h1>关于我们</h1>
    </div>
</template>

<script>
    import Header from "../../components/Header";
    import Welcome from "../../components/Welcome";

    export default {
        components: {Welcome, Header}
    }

</script>

<style>
    .about {
        text-align: center;
    }
</style>
