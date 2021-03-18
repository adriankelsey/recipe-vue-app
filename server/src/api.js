const fetch = require("node-fetch");

module.exports = api = () => {
    const apiKey = '?apiKey=dda7814c24fc44aaa571525b3d1f6225'
    const apiRandom = `https://api.spoonacular.com/recipes/random${apiKey}`

    return apiRandom
    
}
