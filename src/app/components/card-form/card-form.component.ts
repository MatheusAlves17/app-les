import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ICard } from 'src/app/interfaces/Card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent {

  @Input() btnText!: string;
  @Input() data: ICard | null = null;
  @Output() onSubmit = new EventEmitter<ICard>()

  cardForm!: FormGroup;
  id: string | null = '';

  constructor(
    private route: ActivatedRoute,
    private cardService: CardService
  ) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id') ? this.route.snapshot.paramMap.get('id') : '';

    this.cardForm = new FormGroup({
      external_id: new FormControl('',[ Validators.required]),
      first_four_digits: new FormControl('', [Validators.required]),
      last_four_digits: new FormControl('', [Validators.required]),
      brand: new FormControl('', [Validators.required]),
      holder_name: new FormControl('', [Validators.required]),
    })

    this.cardService.getCard(this.id).subscribe(((data: any) => {
      this.cardForm = new FormGroup({
        external_id: new FormControl(data.external_id,[ Validators.required]),
        first_four_digits: new FormControl(data.first_four_digits, [Validators.required]),
        last_four_digits: new FormControl(data.last_four_digits, [Validators.required]),
        brand: new FormControl(data.brand, [Validators.required]),
        holder_name: new FormControl(data.holder_name, [Validators.required]),
      })
    }),(err: any) => {
      console.log(`erro: ${err.error.message}`);

    })
  }



  get first_four_digits () {
    return this.cardForm.get('first_four_digits')!;
  }

  get last_four_digits () {
    return this.cardForm.get('last_four_digits')!;
  }

  get brand () {
    return this.cardForm.get('brand')!;
  }

  get holder_name () {
    return this.cardForm.get('holder_name')!;
  }

  submit(){
    const {value, valid} = this.cardForm;
      this.onSubmit.emit(value)
      // console.log(`data: ${value}`);
  }


}
