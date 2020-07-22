import { FormArray, FormControl, FormGroup } from '@angular/forms';

import { Party } from '../../entities';
import { FormUtils } from '../form.utils';

export class PartyForm extends FormGroup {
  private instance: Party;

  constructor(object: Party) {
    const group: any = {
      currentCampaignId: new FormControl(object.currentCampaignId),
      description: new FormControl(object.description),
      isPrivate: new FormControl(object.isPrivate),
      name: new FormControl(object.name),
      nextScenarioId: new FormControl(object.nextScenarioId),
      nextSessionDate: new FormControl(object.nextSessionDate),
      players: FormUtils.toFormArray(object, 'players', Number),
      prerequisite: new FormControl(object.prerequisite),
      previousSessionDate: new FormControl(object.previousSessionDate),
    };

    super(group);

    this.instance = object;

    this.valueChanges.subscribe(() => this.updateObject());
  }

  protected updateObject() {
    this.instance.currentCampaignId = this.currentCampaignId.value;
    this.instance.description = this.description.value;
    this.instance.isPrivate = this.isPrivate.value;
    this.instance.name = this.name.value;
    this.instance.nextScenarioId = this.nextScenarioId.value;
    this.instance.nextSessionDate = this.nextSessionDate.value;
    this.instance.players = this.players.value;
    this.instance.prerequisite = this.prerequisite.value;
    this.instance.previousSessionDate = this.previousSessionDate.value;
  }

  get currentCampaignId(): FormControl {
    return this.get('currentCampaignId') as FormControl;
  }
  get description(): FormControl {
    return this.get('description') as FormControl;
  }
  get isPrivate(): FormControl {
    return this.get('isPrivate') as FormControl;
  }
  get name(): FormControl {
    return this.get('name') as FormControl;
  }
  get nextScenarioId(): FormControl {
    return this.get('nextScenarioId') as FormControl;
  }
  get nextSessionDate(): FormControl {
    return this.get('nextSessionDate') as FormControl;
  }
  get players(): FormArray {
    return this.get('players') as FormArray;
  }
  get prerequisite(): FormControl {
    return this.get('prerequisite') as FormControl;
  }
  get previousSessionDate(): FormControl {
    return this.get('previousSessionDate') as FormControl;
  }
}
