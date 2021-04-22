'use strict'
const Ask = use('App/Models/Ask')
const DB = use('Database')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with asks
 */
class AskController {
  /**
   * Show a list of all asks.
   * GET asks
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return await Ask.all()
  }

  /**
   * Render a form to be used for creating a new ask.
   * GET asks/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new ask.
   * POST asks
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only(['name', 'quest_id'])
    const ask = await Ask.create(data)
    return ask
  }

  /**
   * Display a single ask.
   * GET asks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const asks = await DB.select('id', 'name', 'quest_id').from('asks').where('quest_id', params.id)
    return asks
  }

  /**
   * Render a form to update an existing ask.
   * GET asks/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update ask details.
   * PUT or PATCH asks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a ask with id.
   * DELETE asks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const register = await Ask.findBy('id', params.id)
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

module.exports = AskController
