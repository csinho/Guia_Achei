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
  public cliente = [];
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

    this.cliente = [
      {
        "img": "assets/imgs/padaria_agostino.jpg",
        "nome": "Padaria Agostinho",
        "vaga": "Padeiro",
        "e-mail": "pada.agostinho@gmail.com",
        "descricao": "Temos produtos de ótima qualidade de produção própria de maneira natural. Venha nos conhece!",
        "informacao": "Possui estacionamento",
        "forma_pagamento": "VISA",
        "endereco": {
          "cep": "41.300-400",
          "pais": "Brasil",
          "estado": "Bahia",
          "cidade": "Salvador",
          "bairro": "Valéria",
          "rua": "Rua da Matriz",
          "numero": "35"
        },
        "contato": {
          "fixo": "71 3325-6585",
          "celular": "71 99654-8555"
        },
        "redes_sociais": {
          "facebook": "",
          "instagram": "",
        },
      },
      {
        "img": "assets/imgs/pet_style.jpg",
        "nome": "Pet Stile Shopp",
        "vaga": "veterinário",
        "e-mail": "pet.shop@gmail.com",
        "descricao": "Um dia descobrimos que beijar uma pessoa para esquecer outra, é bobagem. Você não só não esquece a outra pessoa como pensa muito mais nela...   Um dia nós percebemos que as mulheres têm instinto caçador e fazem qualquer homem sofrer ...        Um dia descobrimos que se apaixonar é inevitável...         Um dia percebemos que as melhores provas de amor são as mais simples...         Um dia percebemos que o comum não nos atrai...        Um dia saberemos que ser classificado como bonzinho não é bom... ",
        "informacao": "Possui estacionamento",
        "forma_pagamento": "VISA",
        "endereco": {
          "cep": "41.300-324",
          "pais": "Brasil",
          "estado": "Bahia",
          "cidade": "Salvador",
          "bairro": "Valéria",
          "rua": "Rua borges",
          "numero": "535"
        },
        "contato": {
          "fixo": "71 3325-6532",
          "celular": "71 96325-8555"
        },
        "redes_sociais": {
          "facebook": "",
          "instagram": "",
        },
      },
      {
        "img": "assets/imgs/barber_shopp.png",
        "nome": "Baber Shopp",
        "vaga": "Serviços Gerais",
        "e-mail": "baber@gmail.com",
        "descricao": "Temos produtos de ótima qualidade de produção própria de maneira natural. Venha nos conhece!",
        "informacao": "Possui estacionamento",
        "forma_pagamento": "VISA",
        "endereco": {
          "cep": "41.300-120",
          "pais": "Brasil",
          "estado": "Bahia",
          "cidade": "Salvador",
          "bairro": "Valéria",
          "rua": "Rua da Glória",
          "numero": "35"
        },
        "contato": {
          "fixo": "71 3325-6545",
          "celular": "71 96524-8555"
        },
        "redes_sociais": {
          "facebook": "",
          "instagram": "",
        },
      },
      {
        "img": "assets/imgs/dois_irmao.png",
        "nome": "Mercados 2 irmãos",
        "vaga": "Repositor",
        "e-mail": "m.dois@gmail.com",
        "descricao": "Temos produtos de ótima qualidade de produção própria de maneira natural. Venha nos conhece!",
        "informacao": "Possui estacionamento",
        "forma_pagamento": "MASTER",
        "endereco": {
          "cep": "41.650-400",
          "pais": "Brasil",
          "estado": "Bahia",
          "cidade": "Salvador",
          "bairro": "Valéria",
          "rua": "Rua a",
          "numero": "355"
        },
        "contato": {
          "fixo": "71 3265-8585",
          "celular": "71 96547-8555"
        },
        "redes_sociais": {
          "facebook": "",
          "instagram": "",
        },
      },
      {
        "img": "assets/imgs/chapadao.jpg",
        "nome": "Chapadão Matérial de Construção",
        "vaga": "Atendente",
        "e-mail": "mt.construcao@gmail.com",
        "descricao": "Temos produtos de ótima qualidade de produção própria de maneira natural. Venha nos conhece!",
        "informacao": "Possui estacionamento",
        "forma_pagamento": "ELO",
        "endereco": {
          "cep": "41.300-600",
          "pais": "Brasil",
          "estado": "Bahia",
          "cidade": "Salvador",
          "bairro": "Valéria",
          "rua": "Rua nove de julho",
          "numero": "653"
        },
        "contato": {
          "fixo": "71 3325-6584",
          "celular": "71 96325-8555"
        },
        "redes_sociais": {
          "facebook": "",
          "instagram": "",
        },
      }
    ];

  }
}
