<template>
    <div class="page">
        <router-view name="appbar"></router-view>
        <LoginContent></LoginContent>
    </div>
</template>

<script>
const LoginContent = () => import('../login/LoginContent')
export default {
    components:{
        LoginContent
    }
}
</script>