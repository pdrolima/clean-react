import { AccountModel } from '../models/account-model'

export type AuthenticationParams = {
  email: string
  password: string
}

/**
 * Criamos um model, pois caso a API mude, nao precisamos alterar o nosso caso de uso.
 */
export interface Authentication {
  auth: (params: AuthenticationParams) => Promise<AccountModel>
}
