import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  id: string | null = '';
  cards: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cardService: CardService,
  ){}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') ? this.route.snapshot.paramMap.get('id') : '';
    this.getAllCards()
  }

  getAllCards(){
    this.cardService.getAllCards().subscribe((data: any) => {
      this.cards = data.results;
    })
  }

  goToNewCard(){
    this.router.navigate([`novo-cartao/${this.id}`]);
  }

  goToEditCard(id: string){
    this.router.navigate([`editar-cartao/${id}`]);
  }

  delete(id: string){
    this.cardService.deleteCard(id).subscribe((data: any) => {
      console.log(`deletado com sucesso! ${data}`);
      this.getAllCards()
    }, (err: any) => {
      console.log(`erro: ${err.error.message}`);

    })
  }

}
