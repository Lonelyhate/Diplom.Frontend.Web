export interface IBaseResponse<T> {
    isSuccess: boolean
    statusCode: number
    data?: T
    displayMessage?: string
    errorMessage?: string
}