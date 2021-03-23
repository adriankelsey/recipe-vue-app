<template lang="">
    <div class="grid">
        <div class="grid-ingredients">
            <button @click="getRandomRecipe">Generate</button>
            <h4 class="recipeIngredients">Ingredients</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus consectetur velit, suscipit scelerisque tortor feugiat id. Integer aliquam et odio et lacinia. Nam eget metus et sapien accumsan elementum. Integer vehicula elit sagittis, luctus justo et, volutpat neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non turpis at tellus faucibus commodo. In sed egestas urna. Mauris sed arcu risus. Nulla nec rutrum turpis. Aliquam vitae consequat ligula. Mauris sagittis vestibulum lorem, nec eleifend felis luctus condimentum.

            Duis vel sem non tortor rhoncus fringilla a et velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam maximus arcu non ante mollis, vitae semper enim auctor. Sed in enim tortor. Praesent id dictum lacus, sed imperdiet velit. Aliquam erat volutpat. Vivamus commodo mauris sit amet nulla pellentesque ultrices a in turpis. Vivamus ex mauris, viverra ac mauris et, ultrices tristique justo. Aenean nunc ligula, consectetur vitae aliquam quis, hendrerit pharetra velit. Nulla gravida, dui sed sagittis elementum, augue ipsum tempor sem, vitae semper dui odio lobortis leo.</p>
            <div class="recipeIngredients" v-html="recipeIngridients"></div>
        </div>
        <div class="grid-recipe">
            <img v-model="recipeImg" v-bind:src='recipeImg' class="recipe-img"></img>
            <h3 v-model="recipeTitle">{{this.recipeTitle}}</h3>
            <h4>instructions</h4>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus consectetur velit, suscipit scelerisque tortor feugiat id. Integer aliquam et odio et lacinia. Nam eget metus et sapien accumsan elementum. Integer vehicula elit sagittis, luctus justo et, volutpat neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non turpis at tellus faucibus commodo. In sed egestas urna. Mauris sed arcu risus. Nulla nec rutrum turpis. Aliquam vitae consequat ligula. Mauris sagittis vestibulum lorem, nec eleifend felis luctus condimentum.

            Duis vel sem non tortor rhoncus fringilla a et velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam maximus arcu non ante mollis, vitae semper enim auctor. Sed in enim tortor. Praesent id dictum lacus, sed imperdiet velit. Aliquam erat volutpat. Vivamus commodo mauris sit amet nulla pellentesque ultrices a in turpis. Vivamus ex mauris, viverra ac mauris et, ultrices tristique justo. Aenean nunc ligula, consectetur vitae aliquam quis, hendrerit pharetra velit. Nulla gravida, dui sed sagittis elementum, augue ipsum tempor sem, vitae semper dui odio lobortis leo.</p>
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
                const response = await Api().get('randomrecipes')
                let ingredientsArray = []
                let ul = '<ul class="ingredientUL">'
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
                ul += '</ul>';

                this.recipeIngridients = ul

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
        grid-template-columns: 20% 80%;
        width: 100%;
        height: 100vh;
    }
    .grid-recipe{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2em;

    }
    .grid-ingredients{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 1em;
        padding-right: 0.5em;
        background-color: rgba(206, 206, 206, 0.568);
    }
    .grid-ingredients h4{
        border-bottom: solid;
        border-width: 1px;
        align-items: center;
        width: 85%;
    }
    .grid-recipe h4{
        border-bottom: solid;
        margin-bottom: 1em;
    }

    button{
        cursor: pointer;
        font-family: 'Fjalla One', sans-serif;
        font-size: 12px;
        font-weight: 800;
        margin: 1em;
        margin-bottom: 3em;
        width: 80%;
        padding: 0.5em;
        background-color: rgb(255, 255, 255);
        color: black


    }

    .recipe-img{
        border-width: 1px;
        width: 60%;
    }

    .recipeInstructions{
        width: 100%;
        text-align: start;
        width: 100%;
        margin-top: -1em;
    }
    .recipeIngredients{
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: 1em;
        text-align: start;
        border-bottom: solid;
    }
    .ingredientUL{
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 0;
    }

    @media  only screen and (max-width: 1280px)  {
        .grid{
        grid-template-columns: 30% 70%;
        }
    }

     @media  only screen and (max-width: 720px)  {
        .grid{
        grid-template-columns: 40% 60%;
        }
    }

    @media  only screen and (max-width: 414px)  {
        .grid{
        grid-template-columns: 50% 50%;
        }
    }

     @media  only screen and (max-width: 375px)  {
        .grid{
            grid-template-columns: 35% 65%;
        }
        .recipeIngredients{
            margin: 1em;
            font-size: 12px;
        }
        button{
            width: 100%;
            height: 40px;
            font-size: 10px;
            padding: 0;
        }
        .grid-ingredients{
            right: 2px;
        }
        .recipeInstructions{
            font-size: 14px;
        }
    }

</style>