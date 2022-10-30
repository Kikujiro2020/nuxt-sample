<script setup>
const {signUp} = useAuth();
const email = ref('')
const password = ref('')

async function createAccount(){
   
    const res = await signUp(email.value,password.value)
  
    if(res=="success"){
       console.log( '新規アカウント作成完了');
       return navigateTo('/')
    }else if(res=="email-already-in-use"){
       console.log( '既にアカウントを作成されているメールアドレスです');
    }
   
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
    <button @click="createAccount">サインアップ</button>
    
</div>
</template>