import { AxiosHttpClient } from './axios-http-client'
import { mockAxios } from '@/infra/http/test'
import axios from 'axios'
import { mockPostParams } from '@/data/test'

jest.mock('axios')

type SutTypes = {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxios()
  return { sut, mockedAxios }
}

describe('AxiosHttpClient', () => {
  test('should call axios with correct values', async () => {
    const request = mockPostParams()
    const { sut, mockedAxios } = makeSut()
    await sut.post(request)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })
  test('should return the correct statusCode and body', () => {
    const { sut, mockedAxios } = makeSut()
    const promise = sut.post(mockPostParams())
    expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
  })
})
