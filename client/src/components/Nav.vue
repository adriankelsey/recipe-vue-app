<template lang="">
    <div class="navigation">
        <nav>
            <ul>
                <a href="/">Home</a>
                <a href="#/recipes">Recipes</a>
                <a href="#/register">log in/ signup</a>
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
template{
    margin: 0;
}
.navigation{
    margin: 0;
}

nav{
    text-decoration: none;
    display: flex;
    flex-direction: row;
}
ul{
    list-style: none;
    display: flex;
    cursor: pointer;
    display: flexbox;
    width: 100%;
    justify-content: space-between;
    margin: 1em;
}

a{
    color: black;
    text-decoration: none;
}
    
</style>