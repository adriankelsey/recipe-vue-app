<template lang="">
    <div class="recipes">
        <div class="search-container">
            <input class="search" placeholder="search recipes">
            <img class="search-icon" src="https://img.icons8.com/pastel-glyph/20/000000/search--v2.png"/>
        </div>
        <div class="recipes-container">
            <h4 v-html="recipes"></h4>
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
           recipes: []
        }
    },
    components:{
        
    },
    methods:{
       async bulkRecipes(){
           const response = await Api().get('recipes')
           let div = '<div>'
           let recipeTitleArray = []
           
           for (let i = 0; i < response.data.length; i++) {
               let recipeTitle = response.data[i].title
              recipeTitleArray.push(recipeTitle)
               
           }
           recipeTitleArray.forEach(function(i){
               div += '<li>' + i + '</li>'
           })

           div += '</div>'
           console.log(div)
           this.recipes = div
          

       }
    },
    mounted() {
        this.bulkRecipes()
    },
}
</script>
<style lang="">
.recipes{
    display: flexbox;
    flex-direction: column;
    display: flex;
    align-items: flex-start;
    width: 100%;
}
.search-container{

    display: flex;
    justify-content: flex-start;
    align-items: center;

}
.search{
    margin-left: 2em;
}
.search-icon{
    position: relative;
    right: 30px;
}
.recipes-container{
    display: block;
    margin-left: 2em;
    margin-top: 1em;
    width: 90%;
}

</style>