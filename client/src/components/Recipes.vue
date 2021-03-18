<template lang="">
    <div>
        <Nav/>
        <h3 v-model="recipeTitle">{{this.recipeTitle}}</h3>
        <img v-model="recipeImg" src='cookingTime'></img>
        <button @click="getRandomRecipe">random recipe</button>
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
            recipeImg: ''
        }
    },
    components:{
        Nav
    },
    methods:{
        async getRandomRecipe(){
            try{
                const response = await Api().get('recipes')
                this.recipeTitle = response.data.recipes[0].title
                this.recipeImg = response.data.recipes[0].image
                console.log(response.data.recipes[0].image)
            } catch(err){
                console.log(err)
            }
        }
    }
}
</script>
<style lang="">
    
</style>