async function factory (pkgName) {
  const me = this

  return class WaibuSwagger extends this.lib.BajoPlugin {
    constructor () {
      super(pkgName, me.app)
      this.alias = 'wswagger'
      this.dependencies = ['waibu-rest-api']
      this.config = {
        swagger: {
          openapi: {
            info: {
              title: 'API Documentation'
            },
            components: {
              securitySchemes: {}
            },
            security: []
          },
          hideUntagged: true
        },
        swaggerUi: {
          routePrefix: 'documentation',
          uiConfig: {
            deepLinking: true,
            displayRequestDuration: true,
            filter: true
          },
          staticCSP: true,
          transformSpecificationClone: true,
          exposeRoute: true,
          theme: {
            title: 'API Documentation'
          }
        }
      }
    }
  }
}

export default factory
