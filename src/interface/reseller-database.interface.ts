import { Reseller } from "../domain/reseller"

export interface ResellerDatabase {
    authenticate(resellername: string, pass: string): boolean
    createReseller(reseller: Reseller): Reseller
    updateReseller(reseller: Reseller): number
    deleteReseller(resellerId: string): void
}