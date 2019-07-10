import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SubcategoriasPage } from '../subcategorias/subcategorias';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  public title_escolhido: any;
  public title: string;
  public categorias: string[];
  public icons_start: string;
  public icons_end: string;
  public items: Array<{ title: string, icon_start: string, icon_end: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {


    this.title_escolhido = navParams.get('title');

    if (this.title_escolhido === "Guia Comercial") {
      this.cate();
      this.title = "Categorias"
      //Vamos preencher esta página com algum conteúdo de preenchimento para os funzinhos
      this.icons_start = "ios-albums-outline";
      this.icons_end = "ios-arrow-forward-outline";

      this.items = [];
      for (let i = 0; i < this.categorias.length; i++) {
        this.items.push({
          title: this.categorias[i],
          icon_start: this.icons_start,
          icon_end: this.icons_end
        });
      }
    } if (this.title_escolhido === "Promoções" ) {
      this.title = "Promoções"
    } if (this.title_escolhido === "Notícias" ) {
      this.title = "Notícias"
    } if (this.title_escolhido === "Classificados" ) {
      this.title = "Classificados"
    } if (this.title_escolhido === "Eventos" ) {
      this.title = "Eventos"
    }


  }

  itemTapped(item) {
    this.navCtrl.push(SubcategoriasPage, { item_title: item.title });
  }

  cate() {
    this.categorias =
      [
        "Turismo & Hotéis",
        "Alimentos & Bebidas",
        "Saúde & Bem Estar",
        "Disk Delivery",
        "Construção & Decoração",
        "Esporte & Lazer",
        "Eventos & Festas",
        "Moda & Estilo",
        "Veículos",
        "Informática & Escritório",
        "Educação & Cultura",
        "Serviços & Profissionais",
        "Igrejas",
        "Móveis & Eletro",
        "Fretes & Transportes",
        "Mídia & Publicidade",
        "Indústrias e Ferragens",
        "Variedade"
      ];
  }
}




