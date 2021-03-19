<template lang="">
    <div class="recipes">
        <button @click="getRandomRecipe">random recipe</button>
        <img v-model="recipeImg" v-bind:src='recipeImg'></img>
        <h3 v-model="recipeTitle">{{this.recipeTitle}}</h3>
        <h4>instructions</h4>
        <div class="recipeInstructions" v-html="recipeInstructions"></div>
    </div>
</template>
<script>
import Nav from '@/components/Nav'
import AuthenticationServices from '@/services/AuthenticationServices'
import Api from '@/services/Api'


export default {
    data(){
        return{
            recipeTitle: '',
            recipeImg: '',
            recipeInstructions: '',
        }
    },
    components:{
        
    },
    methods:{
        async getRandomRecipe(){
            try{
                const response = await Api().get('recipes')
                this.recipeTitle = response.data.recipes[0].title
                this.recipeImg = response.data.recipes[0].image
                this.recipeInstructions = response.data.recipes[0].instructions


                console.log(response.data.recipes[0])
            } catch(err){
                console.log(err)
            }
        }
    }
}
</script>
<style lang="">
    .recipes{
        margin-top: 2em;
        display: flex;
        align-items: center;
        flex-direction: column;
        height: 100vh;
    }

    button{
        margin-bottom: 2em;
    }

    img{
        border-style: solid;
        border-width: 1px;
        width: 50%;
    }

    .recipeInstructions{
        width: 80%;
    }

</style>