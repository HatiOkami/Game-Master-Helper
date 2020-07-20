import { FormControl, FormGroup } from '@angular/forms';

import { Adjective } from '../../entities';

export class AdjectiveForm extends FormGroup {
  private instance: Adjective;

  constructor(object: Adjective) {
    const group: any = {
      genres: new FormControl(object.genres),
      themes: new FormControl(object.themes),
    };

    super(group);

    this.instance = object;

    this.valueChanges.subscribe(() => this.updateObject());
  }

  protected updateObject() {
    this.instance.genres = this.genres.value;
    this.instance.themes = this.themes.value;
  }

  get genres(): FormControl {
    return this.get('genres') as FormControl;
  }
  get themes(): FormControl {
    return this.get('themes') as FormControl;
  }
}
