export class InternalServerError extends Error {
  constructor () {
    super('An internal server error occurred.')
    this.name = 'InternalServerError'
  }
}
