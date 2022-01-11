export type ResponseType = {
  data?: any,
  page?: number,
  limit?: number,
  total?: number,
  error?: { message: string, statusCode?: number },
}