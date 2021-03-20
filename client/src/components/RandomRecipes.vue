<template lang="">
    <div class="grid">
        <div class="grid-ingredients">
            <button @click="getRandomRecipe">random recipe</button>
            <h4>ingredients</h4>
            <div class="recipeIngredients" v-html="recipeIngridients"></div>
        </div>
        <div class="grid-recipe">
            <img v-model="recipeImg" v-bind:src='recipeImg' class="recipe-img"></img>
            <h3 v-model="recipeTitle">{{this.recipeTitle}}</h3>
            <h4>instructions</h4>
            <div class="recipeInstructions" v-html="recipeInstructions"></div>
        </div>

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
            recipeIngridients: '',
        }
    },
    components:{
        
    },
    methods:{
        async getRandomRecipe(){
            try{
                const response = await Api().get('recipes')
                let ingredientsArray = []
                let str = '<ul class="ingredientUL">'
                this.recipeTitle = response.data.recipes[0].title
                this.recipeImg = response.data.recipes[0].image
                this.recipeInstructions = response.data.recipes[0].instructions

                for (let ingredients = 0; ingredients < response.data.recipes[0].extendedIngredients.length; ingredients++) {
                    let element = response.data.recipes[0].extendedIngredients[ingredients].name;
                    ingredientsArray.push(element)
                }

               
                ingredientsArray.forEach(function(i){
                    str += '<li>' + i + '</li>'
                })
                str += '</ul>';

                this.recipeIngridients = str

                console.log(response.data.recipes[0])

            } catch(err){
                console.log(err)
            }
        }
        
    },
    mounted(){
        this.getRandomRecipe()

    }
}
</script>
<style lang="">
    .grid{
        display: grid;
        grid-template-columns: 30% 70%;

        margin-top: 1em;
        width: 100%;
    }
    .grid-recipe{
        display: flex;
        flex-direction: column;
        align-items: center;

    }
    .grid-ingredients{
        border-right: solid;
        border-width: 1px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .grid-ingredients h4{
        border-bottom: solid;
        border-width: 1px;
        width: 85%;
    }

    button{
        margin: 1em;
        width: 50%;

    }

    .recipe-img{

        border-width: 1px;
        width: 50%;
    }

    .recipeInstructions{
        width: 80%;
    }
    .recipeIngredients{
        display: flex;
        flex-direction: column;
        width: 70%;
        text-align: start;
    }
    .ingredientUL{
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 0;
    }

</style>