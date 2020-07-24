import { ListaFundosModel } from 'src/app/model/lista-fundos.model';
import { Component, OnInit } from '@angular/core';
import { ListaFundosService } from 'src/services/lista-fundos.service';
import { FundMainStrategyModel } from '../model/fund-main-strategy.model';
import { MessageService } from 'src/services/message.service';


@Component({
  selector: 'app-fundos-orama',
  templateUrl: './fundos-orama.component.html',
  styleUrls: ['./fundos-orama.component.scss']
})
export class FundosOramaComponent implements OnInit {

  listaFundos: ListaFundosModel[];
  paramPesquisa: string = '';
  paramFiltro: number = 0;
  err: any;
  values: string = '';
  listaFundosConst: ListaFundosModel[];
  listaTipoFundos: FundMainStrategyModel[] = [];
  listaIds: number[] = [];

  screen: boolean;

  constructor(private fundosService: ListaFundosService, private messageService: MessageService) {

    this.checkScreenSize();
    this.getListaFundos();

  }

  ngOnInit() {

  }

  confirmModal() {
    this.messageService.confirm(
      'Para aplicar neste Fundo, faça o seu cadastro online e sem custo.',
      'Já é cadastrado? Acesse sua conta.',
      ['Yes', 'No']);
  }


  checkScreenSize() {
    if (window.screen.availWidth < 850) {
      this.screen = true; // dimensão de tela acima de 850px
    } else {
      this.screen = false; // dimensão de tela abaixo de 850px
    }
  }

  onResize(event) {
    event.target.innerWidth;
    if (event.target.innerWidth < 850) {
      this.screen = true; // dimensão de tela acima de 850px
    } else {
      this.screen = false; // dimensão de tela abaixo de 850px
    }
  }

  getListaFundos() {
    this.fundosService.getListaFundos().subscribe(
      (dadosFundos) => {
        this.listaFundosConst = dadosFundos;
        // this.listaFundos = this.listaFundosConst;
        this.listaFundos = this.listaFundosConst.filter(data => { return data.specification.fund_macro_strategy.id === 1 });

        this.listaTipoFundos = Array.from(this.listaFundosConst.filter(data => { return data.specification.fund_macro_strategy.id === 1 }).reduce((m, t) => m.set(t.specification.fund_main_strategy.name, t.specification.fund_main_strategy), new Map()).values());
      },
      (error: any) => {
        this.err = error;

      }
    )
  }

  filtroFundos(dataFundos) {
    let listaFundosAUX: ListaFundosModel[];
    this.listaFundos = [];
    if (dataFundos.checked == true) {
      this.listaIds.push(dataFundos.value);
    } else {
      this.listaIds = this.listaIds.filter(obj => obj !== dataFundos.value);
    }
    this.listaIds.map(data => {
      listaFundosAUX = this.listaFundosConst.filter(d => { return d.specification.fund_main_strategy.id === data });

      listaFundosAUX.map(item => {
        this.listaFundos.push(item)
      })
    })

  }

  mapperFundosRisco(valor: number) {
    switch (valor) {
      case 1: { return 'fundos risco-1' };
      case 2: { return 'fundos risco-2' };
      case 3: { return 'fundos risco-3' };
      case 4: { return 'fundos risco-4' };
      case 5: { return 'fundos risco-5' };
      case 6: { return 'fundos risco-6' };
      case 7: { return 'fundos risco-7' };
      case 8: { return 'fundos risco-8' };
      case 9: { return 'fundos risco-9' };
      case 10: { return 'fundos risco-10' };
      case 11: { return 'fundos risco-11' };
      case 12: { return 'fundos risco-12' };
      default: { return 'fundos' };
    }
  }

  mapperFundosRiscoMobile(valor: number) {
    switch (valor) {
      case 1: { return 'card risco-mobile-1' };
      case 2: { return 'card risco-mobile-2' };
      case 3: { return 'card risco-mobile-3' };
      case 4: { return 'card risco-mobile-4' };
      case 5: { return 'card risco-mobile-5' };
      case 6: { return 'card risco-mobile-6' };
      case 7: { return 'card risco-mobile-7' };
      case 8: { return 'card risco-mobile-8' };
      case 9: { return 'card risco-mobile-9' };
      case 10: { return 'card risco-mobile-10' };
      case 11: { return 'card risco-mobile-11' };
      case 12: { return 'card risco-mobile-12' };
      default: { return 'card' };
    }
  }
}
