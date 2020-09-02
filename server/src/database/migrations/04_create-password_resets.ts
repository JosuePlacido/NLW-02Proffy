import Knex from "knex";

export async function up(knex: Knex) {
	return knex.schema.createTable("resets_passwords_token", (table) => {
		table.integer("userId").primary();
		table.string("token").notNullable();
		table.dateTime("expire").notNullable();
	});
}

export async function down(knex: Knex) {
	return knex.schema.dropTable("resets_password_tokens");
}
