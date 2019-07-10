import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Screen1Page } from '../screen1/screen1';
import { Screen2Page } from '../screen2/screen2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  /* Variaveis Globais */
  public categorias = [];
  public banner_premium = [];
  public banner_cliente = [];
  public Empregos_vagas = [];

  /*--------------------------------------*/

  constructor(public navCtrl: NavController) {

    /* Acionando e Disparando tudo que esteja dentro da Função */
    this.Categoria();

  }


  irPara(item) {

    var comer = "Lugares para Comer";
    var ir = "Lugares para Ir";
    var beber = "Lugares para Beber";

    if (item === "c") {
      this.navCtrl.push(Screen1Page, { title: comer });
    }
    if (item === "i") {
      this.navCtrl.push(Screen1Page, { title: ir });
    }
    if (item === "b") {
      this.navCtrl.push(Screen1Page, { title: beber });
    }
  }

  buscarGuias(item) {
    this.navCtrl.push(Screen1Page, { title: item });
  }

  detalhes(item) {
    this.navCtrl.push(Screen2Page, { item: item });
  }

  Categoria() {
    this.categorias = [

      {
        "cate": "Profissionais",
        "icon": "ios-construct-outline"
      },
      {
        "cate": "Alimentos",
        "icon": "ios-restaurant-outline"
      },
      {
        "cate": "Disk Delivery",
        "icon": "ios-pizza-outline"
      },
      {
        "cate": "Decoração",
        "icon": "ios-contract-outline"
      },
      {
        "cate": "Esportes",
        "icon": "ios-football-outline"
      },
      {
        "cate": "Festas",
        "icon": "ios-color-wand-outline"
      },
      {
        "cate": "Moda",
        "icon": "ios-cut-outline"
      },
      {
        "cate": "Veículos",
        "icon": "ios-car-outline"
      },
      {
        "cate": "Informática",
        "icon": "ios-laptop-outline"
      },
      {
        "cate": "Educação",
        "icon": "ios-school-outline"
      },
      {
        "cate": "Turismo",
        "icon": "ios-plane-outline"
      },
      {
        "cate": "Fretes",
        "icon": "ios-trending-up-outline"
      },
      {
        "cate": "Mídia",
        "icon": "ios-musical-notes-outline"
      }
    ];

    this.banner_premium = [
      {
        "img": "assets/imgs/anuncio1.jpg",
        "nome": "Padaria Agostinho"
      }, {
        "img": "assets/imgs/bb.png",
        "nome": "Material de Construção"
      }, {
        "img": "assets/imgs/anuncio2.jpg",
        "nome": "Mercados 2 irmãos"
      }, {
        "img": "assets/imgs/banne.png",
        "nome": "Baber Shopp"
      }, {
        "img": "assets/imgs/ban.png",
        "nome": "Pet Stile Shopp"
      }
    ];

    this.banner_cliente = [
      {
        "img": "assets/imgs/padaria_agostino.jpg",
        "nome": "Padaria Agostinho",
        "vaga": "Padeiro",
      }, {
        "img": "assets/imgs/chapadao.jpg",
        "nome": "Chapadão Matérial de Construção",
        "vaga": "Atendente",
      }, {
        "img": "assets/imgs/dois_irmao.png",
        "nome": "Mercados 2 irmãos",
        "vaga": "Repositor",
      }, {
        "img": "assets/imgs/barber_shopp.png",
        "nome": "Baber Shopp",
        "vaga": "Serviços Gerais",
      }, {
        "img": "assets/imgs/pet_style.jpg",
        "nome": "Pet Stile Shopp",
        "vaga": "veterinário",
      }
    ];

  }
}
