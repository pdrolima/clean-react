export class UnexpectedError extends Error {
  constructor () {
    super('Algo deu errado, tente novamente mais tarde.')
    this.name = 'UnexpectedError'
  }
}
