'use strict'
const Quest = use('App/Models/Quest')
const DB = use('Database')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with quests
 */
class QuestController {
  /**
   * Show a list of all quests.
   * GET quests
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    //
    const quests = await Quest.query().with('children').fetch()
    return quests
  }

  /**
   * Render a form to be used for creating a new quest.
   * GET quests/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new quest.
   * POST quests
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only(['name'])
    const quest = await Quest.create(data)
    return quest
  }

  /**
   * Display a single quest.
   * GET quests/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing quest.
   * GET quests/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update quest details.
   * PUT or PATCH quests/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a quest with id.
   * DELETE quests/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const register = await Quest.findBy('id', params.id)
    if (!register) {
      return response.status(401).json({
        message: 'Erro! não encontrado!'
      })
    }
    await register.delete()
    return response.status(200).json({
      message: 'Removido com sucesso!'
    })
  }
}

module.exports = QuestController
