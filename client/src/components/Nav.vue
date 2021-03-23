<template lang="">
    <div class="navigation">
        <img class="hamburger-menu" src="https://img.icons8.com/ios-filled/20/000000/menu--v3.png"/>
        <div class = "main-nav">
            <div class="home">
                <a href="/">Home</a>
                <img class="img-home" src="https://img.icons8.com/ios-filled/18/000000/home.png"/>
            </div>
            <div class="recipes">
                <a href="#/recipes">Recipes</a>
                <img class ="img-recipes" src="https://img.icons8.com/material-rounded/18/000000/ingredients.png"/>
            </div>
            <div class="randomrecipes">
                <a href="#/randomrecipes">Random Recipe</a>
                <img class="img-random-recipes" src="https://img.icons8.com/ios-glyphs/18/000000/question-mark.png"/>
            </div>
        </div>
        <div class="search-login-container">
            <input class="search-bar" placeholder="search">
            <img class="img-search" src="https://img.icons8.com/pastel-glyph/20/000000/search--v1.png"/>
            <a class="login" href="#/register">log in/ signup</a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Nav'
}
</script>
<style scoped>
.navigation{
    display: flex;
    justify-content: space-between;
    align-items: center; 
    margin: 0;
    padding: 2em;
    background-color: rgb(86, 145, 96);
    border-bottom: solid;
    border-color: rgb(26, 49, 3);
    font-family: 'Lato', sans-serif;
    font-size: 14px;



}
.main-nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    width: 75%;
    height: 20px;
}

.search-login-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    margin-left: 1em;
    padding: 0;
    width: auto;
    height: 20px;  
}

input{
    margin-left: 2em;
    width: 60%;
    height: 20px;
}



a{
    color: #020303;
    text-decoration: none;
    font-weight: 400;
    cursor: pointer;
    color: rgb(0, 0, 0);

}

.img-search{
    position: relative;
    right: 25px;
}

.home{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    width: 6em;
}

.hamburger-menu{
    display: none;
}

.recipes{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    width: 6em;
}

.randomrecipes{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    width: 6em;
}

@media only screen and (max-width: 375px) {
    .main-nav{
        width: 0;
    }
    .home{
        display: none;
    }
    .recipes{
        display: none;
    }
    .randomrecipes{
        display: none;
    }

    .search-login-container{
        flex-direction: row-reverse;
    }
    input{
        width: 100%;
    }
    .login{
        display: none;
    }
    .img-search{
        display: none;
    }

    .hamburger-menu{
        display: flex;
    }
}

</style>