
exports.up = function(knex) {
    return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl.string("name").notNullable();
    })
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl.string("name").notNullable();
      tbl.float("quantity").notNullable();
    })
    .createTable("recipe_ingredients", tbl => {
      tbl.primary(["recipe_id", "ingredient_id"]);

      // foriegn key
      tbl.integer("recipe_id")
        .unsigned()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      // foriegn key
      tbl.integer("ingredient_id")
        .unsigned()
        .references("id")
        .inTable("ingredients")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("instructions", tbl => {
      tbl.increments();
      tbl.text("instructions").notNullable();

      // foriegn key
      tbl.integer("recipe_id")
        .unsigned()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("instructions");
};
