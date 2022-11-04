<script setup>
const {signIn,errorMessage} = useAuth();
const email = ref('')
const password = ref('') 
async function Login(){
   
    const res = await signIn(email.value,password.value)
    console.log(errorMessage.value) 
}
</script>

<template> 
<div>
    <div class="form-floating m-3">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="email">
        <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating m-3">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="password">
        <label for="floatingPassword">Password</label>
    </div>
    <button @click="Login">Login</button>
    <div>{{errorMessage}}</div>
</div>
</template>