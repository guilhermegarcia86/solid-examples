import { Attendant } from "../interface/attendant.interface";
import { ReportManagement } from "../interface/report-management.interface";

export class AttendantService implements Attendant, ReportManagement {
    alterarDadosRES (reseller: any): void {
        console.log('Alterando dados do reseller');
    }
    realizarVenda (order: any): void {
        console.log('Realizando venda');
    }
    gerarRelatorio (reseller: any): void {
        console.log('Gerando relatório');
    }
}