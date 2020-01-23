const db = require("../data/db-config");

module.exports = {
    getRecipes,
    getShoppingList, //(id)
    getInstructions, //(id)
    
  };

  function getRecipes() {
    return db("recipes");
  }


  function getShoppingList(id) {
    return db("recipe_ingredients as rs")
      .join("ingredients as i", "rs.ingredient_id", "i.id")
      .select("i.name", "rs.quantity")
      .where({ recipe_id: id });
  }

  function getInstructions(id) {
    return db("recipe_instructions as ri")
      .select("ri.step_number", "ri.instructions")
      .where({ recipe_id: id });
  }