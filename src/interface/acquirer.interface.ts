export interface Acquirer {
    authorize(data: any): string
    pay(data: any): string
}