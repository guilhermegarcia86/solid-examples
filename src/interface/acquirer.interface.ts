export interface Acquirer {
    pay(data: any): string
}