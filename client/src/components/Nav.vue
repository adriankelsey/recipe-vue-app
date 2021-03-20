<template lang="">
    <div class="navigation">
        <nav>
            <ul class="main-nav">
                <a href="/">Home</a>
                <a href="#/recipes">Recipes</a>
                <a href="#/randomrecipes">Random Recipe Generator</a>
                <a href="#/register">log in/ signup</a>
            </ul>
            <input class="search-bar" placeholder="search">
            <img src="https://img.icons8.com/pastel-glyph/15/000000/search--v1.png"/>
        </nav>
    </div>
</template>
<script>
export default {
    name: 'Nav'
}
</script>
<style scoped>
.navigation{
    width: 100%;
    margin: 0;
    font-size: 12px;
    background-color: white;
    position: relative;
    padding: 10px;
    bottom: 30px;
}
@media only screen and (max-width: 550px) {
    .navigation{
        font-size: 10px;
    }
    input{
        margin-left: 0;
    }
}

nav{
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
}
input{
    width: 25%;
    height: 15px;
    margin-left: 1em;
}
.main-nav{
    margin: 0;
    list-style: none;
    display: flex;
    width: 80%;
    justify-content: space-between;
}

a{
    color: #020303;
    text-decoration: none;
    font-weight: 400;
    cursor: pointer;
    margin-left: -2em;
}
img{
    position: relative;
    right: 25px;
}
</style>