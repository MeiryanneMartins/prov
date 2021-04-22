'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LocaleSchema extends Schema {
  up () {
    this.create('locales', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('zipCode')
      table.string('street').notNullable()
      table.string('city').notNullable()
      table.string('state').notNullable()
      table.string('neighborn').notNullable()
      table.string('number').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('locales')
  }
}

module.exports = LocaleSchema
