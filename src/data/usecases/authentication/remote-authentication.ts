import { HttpPostClient } from '@/data/protocols/http/http-post-client'
import { AuthenticationParams } from '@/domain/usecases/authentication'
import { HttpStatusCode } from '@/data/protocols/http/http-response'
import { InvalidCredentialsErrors } from '@/domain/errors/invalid-credentials-errors'
import { UnexpectedError } from '@/domain/errors/unexpected-error'
import { NotFoundError } from '@/domain/errors/not-found-error'
import { InternalServerError } from '@/domain/errors/internal-server-error'
import { AccountModel } from '@/domain/models/account-model'

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpPostClient<AuthenticationParams, AccountModel>
  ) {}

  async auth (params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpClient.post({ url: this.url, body: params })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.OK: break
      case HttpStatusCode.unauthorized: throw new InvalidCredentialsErrors()
      case HttpStatusCode.notFound: throw new NotFoundError()
      case HttpStatusCode.internalServerError: throw new InternalServerError()
      default: throw new UnexpectedError()
    }
  }
}
