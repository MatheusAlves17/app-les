import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.css']
})
export class NewCardComponent {
  btnText: string = 'Salvar';
  message: string = "";
  data!: any;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cardService: CardService
  ){}

  async submit(data: any){
    console.log(`data: ${data}`);
    data.external_id = `${data.holder_name}-${data.last_four_digits}`
    const id = this.route.snapshot.paramMap.get('id')

    await this.cardService.createCard(data).subscribe((data: any) => {
      console.log(`cadastrado com sucesso! ${data}`);
      this.message = "Cadastrado com sucesso!"
      this.router.navigate([`/cartoes/${id}`])

    })

    console.log(`event: ${event}`);

  }
}
