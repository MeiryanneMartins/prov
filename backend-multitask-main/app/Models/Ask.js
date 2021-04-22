'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Ask extends Model {
  quest () {
    return this.belongsTo('App/Models/Quest')
  }
}

module.exports = Ask
