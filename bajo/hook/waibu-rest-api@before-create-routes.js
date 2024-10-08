import swagger from '@fastify/swagger'
import swaggerUi from '@fastify/swagger-ui'

async function waibuRestApiBeforeCreateRoutes (ctx) {
  this.log.debug('Rest API documentation is running')
  const { cloneDeep } = this.app.bajo.lib._
  const opts = cloneDeep(this.config.swagger)
  const optsUi = cloneDeep(this.config.swaggerUi)
  if (!optsUi.transformStaticCSP) optsUi.transformStaticCSP = (header) => header
  if (!optsUi.transformSpecification) optsUi.transformSpecification = (obj, req, reply) => (obj)
  if (!opts.openapi.info.version) opts.openapi.info.version = this.config.pkg.version
  if (!opts.openapi.info.description) opts.openapi.info.description = this.config.pkg.description
  await ctx.register(swagger, opts)
  await ctx.register(swaggerUi, optsUi)
}

export default waibuRestApiBeforeCreateRoutes
