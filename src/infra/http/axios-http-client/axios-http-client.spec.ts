import { AxiosHttpClient } from './axios-http-client'
import axios from 'axios'
import faker from '@faker-js/faker'
import { HttpPostParams } from '@/data/protocols/http/http-post-client'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

const mockPostParams = (): HttpPostParams<any> => {
  return {
    url: faker.internet.url(),
    body: faker.random.randomWords(100)
  }
}
describe('AxiosHttpClient', () => {
  test('should call axios with correct url and verb', async () => {
    const request = mockPostParams()
    const sut = makeSut()
    await sut.post(request)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url)
  })
})
