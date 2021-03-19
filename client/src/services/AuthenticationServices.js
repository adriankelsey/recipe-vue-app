import Api from '@/services/Api'

export default{
    register(credentials){
        return Api().post('register', credentials)
    },

    randomRecipe(){
        return Api().get('recipes')
    }
}