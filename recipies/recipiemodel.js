const db = require('../data/migrations/db-config');

module.exports = {
    getRecipies,
    getShoppingList,
    getInstructions,
    getRecipieId
}

function getRecipies(){
    return db("recipies")
}

function getShoppingList(id){
    return db ("recipe_ingredients as rs")
    .join("ingredients as i", "rs.ingredient_id", "i.id")
    .select("i.name", "rs.quantity")
    .where({recipie_id: id});
}

function getInstructions(id){
    return db("recipe_instructions as ri")
    .select("ri.step_number", "ri.instructions")
    .where({recipie_id: id});
}

function getRecipieId(id){
    return db("recipie_instruc_id as riid")
    .select("riid_recipies")
    .where({recipie_id: id})
}