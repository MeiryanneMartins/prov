'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AskSchema extends Schema {
  up () {
    this.create('asks', (table) => {
      table.increments()
      table.string('name').notNullable()
      table
        .integer('quest_id')
        .unsigned()
        .references('id')
        .inTable('quests')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('asks')
  }
}

module.exports = AskSchema
