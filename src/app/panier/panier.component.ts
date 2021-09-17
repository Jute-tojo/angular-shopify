import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  count = 1;
  panier = [{
    id: 0,
    nom : "NOM PRODUIT",
    description: "d sf qfq dqfd s",
    image: "../../assets/images/UA70AU7000UXFE.jpg",
    prix: 110000,
    qte: 1,
    total: 110000
  },
  {
    id: 1,
    nom : "NOM PRODUIT 2",
    description: "d sf qfq dqfd s",
    image: "../../assets/images/sac_bandouliere5.jpg",
    prix: 15030,
    qte: 1,
    total:15030
  }];
  total:number = 0;
  constructor() { 
    this.totalPrice();
  }

  ngOnInit(): void {
  }

  counterplus(id: number){
      this.panier[id].qte++;
      this.panier[id].total=this.panier[id].prix*this.panier[id].qte;
      this.totalPrice();
  }
  countermoins(id: number){
    if(this.panier[id].qte>1){
      this.panier[id].qte--;
      this.panier[id].total=this.panier[id].prix*this.panier[id].qte;      
      this.totalPrice();
    }    
  }

  totalPrice(){
    this.total=0;
    this.panier.forEach(element => {
      this.total+=element.total;
    });
  }
}
