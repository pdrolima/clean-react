export interface HttpPostClient {
  post: (url) => Promise<void>
}
