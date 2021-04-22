'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('cpf').notNullable().unique()
      table.string('cargo').notNullable()
      table.datetime('birthdate').notNullable()
      table
        .integer('locale_id')
        .unsigned()
        .references('id')
        .inTable('locales')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('register_token').notNullable()
      table.boolean('active').default(false)
      table.boolean('has_login').default(true)
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
