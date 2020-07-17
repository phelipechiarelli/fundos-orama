import { ProfitabilitiesModel } from './profitabilities.model';
import { FundSituationModel } from './fund-situation.model';
import { DescriptionModel } from './description.model';
import { SpecificationModel } from './specification.model';
import { OperabilityModel } from './operability.model';
import { FeesModel } from './fees.model';
import { FundManagerModel } from './fund-manager.model';
export class ListaFundosModel {
    public simple_name: string;
    public fees: FeesModel;
    public operability: OperabilityModel;
    public specification: SpecificationModel;
    public quota_date?: string;
    public cnpj?: string;
    public description: DescriptionModel;
    public fund_situation: FundSituationModel;
    public profitabilities: ProfitabilitiesModel;
    public fund_manager: FundManagerModel;
}   