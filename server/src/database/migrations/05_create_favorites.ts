import Knex from "knex";

export async function up(knex: Knex) {
	return knex.schema.createTable("favorites", (table) => {
		table.integer("id").primary();
		table.integer("user").notNullable();
		table.integer("class").notNullable();
	});
}

export async function down(knex: Knex) {
	return knex.schema.dropTable("favorites");
}
