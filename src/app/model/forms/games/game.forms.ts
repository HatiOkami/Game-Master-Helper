import { FormControl, FormGroup } from '@angular/forms';

import { Game } from '../../entities';

import { AdjectiveForm } from './adjective.form';

export class GameForm extends FormGroup {
  private instance: Game;

  constructor(object: Game) {
    const group: any = {
      title: new FormControl(object.title),
      description: new FormControl(object.description),
      image: new FormControl(object.image),
      adjectiveForm: new AdjectiveForm(object.adjectives),
    };

    super(group);

    this.instance = object;

    this.valueChanges.subscribe(() => this.updateObject());
  }

  protected updateObject() {
    this.instance.title = this.title.value;
    this.instance.description = this.description.value;
    this.instance.image = this.image.value;
    this.instance.adjectives = this.adjectiveForm.value;
  }

  get title(): FormControl {
    return this.get('title') as FormControl;
  }
  get description(): FormControl {
    return this.get('description') as FormControl;
  }
  get image(): FormControl {
    return this.get('image') as FormControl;
  }
  get adjectiveForm(): AdjectiveForm {
    return this.get('adjectiveForm') as AdjectiveForm;
  }
}
