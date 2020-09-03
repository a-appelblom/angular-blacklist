import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  name = new FormControl('');
  email = new FormControl('');
  phone = new FormControl('');
  scammerpaste = new FormControl('');

  onSubmit() {
    console.log(
      this.name.value,
      this.email.value,
      this.phone.value,
      this.scammerpaste.value
    );
  }

  constructor() {}

  ngOnInit(): void {}
}
