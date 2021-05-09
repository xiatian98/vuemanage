<template>
    <div class="welcome">
        <h3>欢迎访问，现在是：{{currentTime}}</h3>
    </div>
</template>

<script>
    export default {
        name: "Welcome",
        data() {
            return {
                timer: "",//定义一个定时器的变量
                currentTime: new Date(), // 获取当前时间

            }
        },

        created() {
            var vm = this;
            vm.timer = setInterval(() => {
                var y = new Date().getFullYear();
                var m = vm.appendZero(new Date().getMonth() + 1);
                var d = vm.appendZero(new Date().getDate());
                var ho = vm.appendZero(new Date().getHours());
                var mi = vm.appendZero(new Date().getMinutes());
                //修改数据date
                vm.currentTime = y + "年" + m + '月' + d + '日' + ho + '时' + mi + '分';
            }, 1000);

        },

        methods: {
            //时间过滤加0
            appendZero(obj) {
                if (obj < 10) {
                    return "0" + obj;
                } else {
                    return obj;
                }
            },
        },

        beforeDestroy() {
            if (this.timer) {
                clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
            }
        }
    }
</script>

<style scoped>
    .welcome {
        text-align: left;
    }
</style>
