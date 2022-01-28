export enum HttpStatusCode {
  OK = 200,
  badRequest = 400,
  unauthorized = 401,
  notFound = 404,
  internalServerError = 500,
}

export type HttpResponse<T> = {
  statusCode: number
  body?: T
}
