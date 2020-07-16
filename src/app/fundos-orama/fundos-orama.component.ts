import { Component, OnInit } from '@angular/core';
import { ListaFundosService } from 'src/services/lista-fundos.service';

@Component({
  selector: 'app-fundos-orama',
  templateUrl: './fundos-orama.component.html',
  styleUrls: ['./fundos-orama.component.scss']
})
export class FundosOramaComponent implements OnInit {

  listaFundos: ListaFundosService[] = [];
  err: any;

 
  constructor(private fundosService: ListaFundosService) {

    this.getListaFundos();
   }

  ngOnInit() {

    this.pesquisaFundos()

  }

  getListaFundos(){
    this.fundosService.getListaFundos().subscribe(
      (dadosFundos) => {
        this.listaFundos = dadosFundos;
        console.log(this.listaFundos);


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

  pesquisaFundos(){

    // const nomeFundo = this.listaFundos.filter(nome => (nome.full_name))

    // console.log(nomeFundo)
  }

}
