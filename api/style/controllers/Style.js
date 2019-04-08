'use strict';

/**
 * Style.js controller
 *
 * @description: A set of functions called "actions" for managing `Style`.
 */

module.exports = {

  /**
   * Retrieve style records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.style.search(ctx.query);
    } else {
      return strapi.services.style.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a style record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.style.fetch(ctx.params);
  },

  /**
   * Count style records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.style.count(ctx.query);
  },

  /**
   * Create a/an style record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.style.add(ctx.request.body);
  },

  /**
   * Update a/an style record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.style.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an style record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.style.remove(ctx.params);
  }
};
