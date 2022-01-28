import { HttpPostParams } from '@/data/protocols/http/http-post-client'
import faker from '@faker-js/faker'

export const mockPostParams = (): HttpPostParams<any> => {
  return {
    url: faker.internet.url(),
    body: faker.random.randomWords(100)
  }
}
