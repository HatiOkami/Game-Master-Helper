import { FormArray } from '@angular/forms';

type ICreatable = new (prop: any) => any;

export class FormUtils {
  public static toFormArray(object: any, property: string, type: ICreatable): FormArray {
    const exists = !!(object && object[property]);
    return new FormArray(exists ? [].concat(object[property]).map(p => new type(p)) : []);
  }
}
