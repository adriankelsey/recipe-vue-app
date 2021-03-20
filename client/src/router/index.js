import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/Index";
import Register from "@/components/Register";
import RandomRecipes from "@/components/RandomRecipes";
import Recipes from "@/components/Recipes";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/randomrecipes",
      name: "randomrecipes",
      component: RandomRecipes
    },
    {
      path: "/recipes",
      name: "recipes",
      component: Recipes
    }
  ]
});
