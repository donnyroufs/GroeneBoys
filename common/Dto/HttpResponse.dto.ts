export interface IHttpResponseDto {
  statusCode: number;
  data: unknown;
  error: boolean;
  message?: string;
}
