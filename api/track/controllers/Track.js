'use strict';

/**
 * Track.js controller
 *
 * @description: A set of functions called "actions" for managing `Track`.
 */

module.exports = {

  /**
   * Retrieve track records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.track.search(ctx.query);
    } else {
      return strapi.services.track.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a track record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.track.fetch(ctx.params);
  },

  /**
   * Count track records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.track.count(ctx.query);
  },

  /**
   * Create a/an track record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.track.add(ctx.request.body);
  },

  /**
   * Update a/an track record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.track.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an track record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.track.remove(ctx.params);
  }
};
