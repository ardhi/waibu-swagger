async function factory (pkgName) {
  const me = this

  class WaibuSwagger extends this.lib.Plugin {
    static alias = 'wswagger'
    static dependencies = ['waibu-rest-api']

    constructor () {
      super(pkgName, me.app)
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

  return WaibuSwagger
}

export default factory
