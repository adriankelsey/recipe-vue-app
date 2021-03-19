<template lang="">
    <div>
        <div class="register">
            <h1> Register </h1>
            <input 
                type="email" 
                name="email" 
                placeholder= "enter email"
                v-model="email"
            />
            </br>
            <input 
                type="password"
                name="password"
                placeholder="enter password"
                v-model="password"
            />
            </br>
            <button 
            @click= "submit">submit</button>
        </div>
    </div>
</template>
<script>
import AuthenticationServices from '@/services/AuthenticationServices'
import Nav from '@/components/Nav'
export default {
    data(){
        return{
            email: '',
            password: ''
        }
    },
    components:{
        Nav
    },
    methods: {
        async submit(){
            try{
                const response = await AuthenticationServices.register({
                    email: this.email,
                    password: this.password
                })
                console.log(response.data)

            } catch(err) {
                console.log(err)
            }
        }
    },
}
</script>
<style lang="">
    .register{
        margin: 1em;
        margin-top: 2em;
    }

    input{
        margin: 5px;
        width: 100%;
        height: 25px;
    }

    button{
        margin-top: 1em;
        
    }
</style>