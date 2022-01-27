export class InvalidCredentialsErrors extends Error {
  constructor () {
    super('Credenciais invalidas')
    this.name = 'InvalidCredentialsErrors'
  }
}
