'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QuestsSchema extends Schema {
  up () {
    this.create('quests', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('quests')
  }
}

module.exports = QuestsSchema
