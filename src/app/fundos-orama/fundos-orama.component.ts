import { ListaFundosModel } from 'src/app/model/lista-fundos.model';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ListaFundosService } from 'src/services/lista-fundos.service';
import { filter, reduce} from 'rxjs/operators';
import { FundMainStrategyModel } from '../model/fund-main-strategy.model';




@Component({
  selector: 'app-fundos-orama',
  templateUrl: './fundos-orama.component.html',
  styleUrls: ['./fundos-orama.component.scss']
})
export class FundosOramaComponent implements OnInit {

  listaFundos: ListaFundosModel[];
  pesquisa2: string = '';
  err: any;
  values: string = '';
  listaFundosConst: ListaFundosModel[];
  listaTipoFundos: FundMainStrategyModel[] = [];

  screen: boolean;
  
  @ViewChild('pesquisa') paramPesquisa: ElementRef;
   
  constructor(private fundosService: ListaFundosService) {

    this.getListaFundos();
    this.checkScreenSize();
    
   }

  ngOnInit() {       

  
  }


  checkScreenSize(){
    if (window.screen.availWidth < 850) {
      this.screen = true; // dimensão de tela acima de 850px      
    } else {
      this.screen = false; // dimensão de tela abaixo de 850px
      
    }
    console.log('checkScreenSize:' + this.screen);  
  }

  
  onResize(event) {    
    event.target.innerWidth;
    if (event.target.innerWidth < 850) {
      this.screen = true; // dimensão de tela acima de 850px
    } else {
      this.screen = false; // dimensão de tela abaixo de 850px
    }
    console.log('onResize: ' +this.screen);
  }
  

  getListaFundos(){
    this.fundosService.getListaFundos().subscribe(
      (dadosFundos) => {
        this.listaFundosConst = dadosFundos;
        this.listaFundos = this.listaFundosConst;
        console.log(this.listaFundos);
        this.listaTipoFundos = Array.from(this.listaFundosConst.filter(data => { 
         return data.specification.fund_macro_strategy.id === 1
        }).reduce((m, t) => m.set(t.specification.fund_main_strategy.name, t.specification.fund_main_strategy), new Map()).values()); 
        console.log(this.listaTipoFundos);
        console.log(this.pesquisa2);
      },
      (error: any) => {
        this.err = error;
        console.log(this.err);
      }
    )
  }

  mapperFundosRisco(valor: number) {    
    switch (valor) {
      case 1 : {return 'fundos risco-1'};
      case 2 : {return 'fundos risco-2'};
      case 3 : {return 'fundos risco-3'};
      case 4 : {return 'fundos risco-4'};
      case 5 : {return 'fundos risco-5'};
      case 6 : {return 'fundos risco-6'};
      case 7 : {return 'fundos risco-7'};
      case 8 : {return 'fundos risco-8'};
      case 9 : {return 'fundos risco-9'};
      case 10 : {return 'fundos risco-10'};
      case 11 : {return 'fundos risco-11'};
      case 12 : {return 'fundos risco-12'};
      default : {return 'fundos'};
    }
  }

  mapperFundosRiscoMobile(valor: number) {    
    switch (valor) {
      case 1 : {return 'card risco-mobile-1'};
      case 2 : {return 'card risco-mobile-2'};
      case 3 : {return 'card risco-mobile-3'};
      case 4 : {return 'card risco-mobile-4'};
      case 5 : {return 'card risco-mobile-5'};
      case 6 : {return 'card risco-mobile-6'};
      case 7 : {return 'card risco-mobile-7'};
      case 8 : {return 'card risco-mobile-8'};
      case 9 : {return 'card risco-mobile-9'};
      case 10 : {return 'card risco-mobile-10'};
      case 11 : {return 'card risco-mobile-11'};
      case 12 : {return 'card risco-mobile-12'};
      default : {return 'card'};
    }
  }
}
