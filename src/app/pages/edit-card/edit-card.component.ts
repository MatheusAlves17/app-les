import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.css']
})
export class EditCardComponent {
  btnText: string = 'Salvar';
  message: string = "";
  data!: any;
  id: string = '';


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cardService: CardService
  ) { }

  ngOnInit(): void {
    const urlId = this.route.snapshot.paramMap.get('id');
    this.id = urlId ? urlId : '';
  }

  async submit(data: any) {
    console.log(`data: ${data}`);
    data.external_id = `${data.holder_name}-${data.last_four_digits}`

    await this.cardService.updateCard(this.id, data).subscribe((data: any) => {
      console.log(`cadastrado com sucesso! ${data}`);
      this.message = "Cadastrado com sucesso!"
      this.router.navigate([`/cartoes/${data.user_id}`])
    })

    console.log(`event: ${event}`);

  }
}
