import { FundMainStrategyModel } from './fund-main-strategy.model';
import { FundMacroStrategyModel } from './fund-macro-strategy.model';
import { FundRiskProfileModel } from './fund-risk-profile.model';
import { FundSuitabilityProfileModel } from './fund-suitability-profile.model';
export class SpecificationModel{
    public fund_suitability_profile: FundSuitabilityProfileModel;
    public fund_risk_profile: FundRiskProfileModel;
    public fund_macro_strategy: FundMacroStrategyModel;
    public fund_class_anbima: string;
    public fund_main_strategy: FundMainStrategyModel;

}