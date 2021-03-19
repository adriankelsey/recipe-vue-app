<template lang="">
    <div class="navigation">
        <nav>
            <ul>
                <a href="/">Home</a>
                <a href="#/recipes">Recipes</a>
                <a href="#/register">log in/ signup</a>
                <input class="search-bar" placeholder="search">
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    name: 'Nav'
}
</script>
<style scoped>
div{
    margin: 0;
    font-size: 12px;
    background-color: white;
    width: 100%;
    position: relative;
    padding: 4px;
    bottom: 24px;
}
.navigation{
    margin: 0;
}

nav{
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
input{
    width: 25%;
    height: 15px;
}
ul{
    list-style: none;
    display: flex;
    cursor: pointer;
    display: flexbox;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin: 1em;
}

a{
    color: #020303;
    text-decoration: none;
    font-weight: 400;
}
    
</style>