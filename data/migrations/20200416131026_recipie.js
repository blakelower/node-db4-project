
exports.up = function(knex) {
  return (knex.schema
  .createTable("recipies", tbl => {
      tbl.string("id", 255).primary();
      tbl.string("name");
    })
    .createTable("ingredients", tbl => {
        tbl.string("id", 255).primary();
        tbl.string("name");
        tbl.float("quantity");
    })
    .createTable("recipie_ingredients", tbl => {
        tbl.primary(["recipie_id", "ingredient_id"]);

        tbl.integer("recipie_id")
        .unsigned()
        .references("id")
        .inTable("recipies")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")

        tbl.integer("ingredient_id")
        .unsigned()
        .references("id")
        .inTable("ingredients")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("instructions", tbl => {
        tbl.increments()
        tbl.text("instructions");

        tbl.integer("recipie_id")
        .unsigned()
        .references("id")
        .inTable("recipies")
        .onDelete("RESTRICT")
        .onUpdate("CASCASE")
    })
  );
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("recipies")
  .dropTableIfExists("ingredients")
  .dropTableIfExists("recipie_ingredients")
  .dropTableIfExists("instructions");
};
