import { Attendant } from "../interface/attendant.interface";

export class Franchise implements Attendant {
    alterarDadosRES (reseller: any): void {
        console.log('Alterando dados do reseller');
    }
    realizarVenda (order: any): void {
        console.log('Realizando venda');
    }

}