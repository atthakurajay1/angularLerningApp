import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, FormArray } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './app-reactive-form.component.html',
  styleUrls: ['./app-reactive-form.component.css']
})
export class AppReactiveFormComponent implements OnInit {

  @Input("config")
  formConfigutaion: any = {};

  @Input("elementList")
  configList: Array<any> = [];

  @Output("instance")
  sendFormInstance: EventEmitter<FormGroup> = new EventEmitter();


  coreForm: FormGroup;

  createFormGroup(configList: Array<any>): FormGroup {
    let groupObject = this.fb.group({});
    for (let element of configList) {
      if (element.groupElement) {
        let nestedGroup = this.createFormGroup(element.groupElement)
        groupObject.addControl(element.name, nestedGroup);
      } else if (element.isFormArrayEnabled) {
        let nestedGroup = this.createFormGroup(element.groupArrayElement)
        let formArrayGroup = this.fb.array([nestedGroup]);
        groupObject.addControl(element.name, formArrayGroup);
      } else {
        let validations = this.getValidationList(element.validations, element.inputType);
        let control = this.fb.control(element.value, validations);
        groupObject.addControl(element.name, control);
      }
    }

    return groupObject;
  }

  addFormGroup(groupElement: Array<any>, key: string): void {
    let arrayForm = this.getArrayForm(key);
    arrayForm.push(this.createFormGroup(groupElement));
  }

  getArrayForm(key: string): FormArray {
    return <FormArray>this.coreForm.get(key);
  }

  removeFormGroup(index: number, key) {
    let arrayForm = this.getArrayForm(key);
    arrayForm.removeAt(index);
  }

  getValidationList(validationsList: Array<any>, elementType: string): Array<any> {
    let list = [];
    for (let validation of validationsList) {
      switch (validation.name) {
        case "required": if (validation.value) list.push(Validators.required); break;
        case "minLength": list.push(Validators.minLength(Number(validation.value))); break;
        case "maxLength": list.push(Validators.maxLength(Number(validation.value))); break;
        case "min": list.push(Validators.min(Number(validation.value))); break;
        case "max": list.push(Validators.max(Number(validation.value))); break;
        case "pattern": list.push(Validators.pattern(validation.value)); break;
        case "email": list.push(Validators.email(validation.value)); break;
      }

    }

    return list;
  }

  elementInstance(name: string, formName: any): FormControl {
    if (formName) {
      return <FormControl>this.coreForm.get(formName).get(name);
    } else {
      return <FormControl>this.coreForm.get(name);
    }
  }

  getErrorMessage(elementItem, formName?: string): string {
    let msg = "message not found";
    if (this.elementInstance(elementItem.name, formName).hasError("required")) {
      let validateObj = elementItem.validations.find(x => x.name === "required");
      return validateObj.errorMsg || `${elementItem.name} is required.`
    }
    if (this.elementInstance(elementItem.name, formName).hasError("min")) {
      let validateObj = elementItem.validations.find(x => x.name === "min");
      return validateObj.errorMsg || `minimum number is ${validateObj.value}`;
    }

    if (this.elementInstance(elementItem.name, formName).hasError("max")) {
      let validateObj = elementItem.validations.find(x => x.name === "max");
      return validateObj.errorMsg || `maximum number is ${validateObj.value}`
    }

    if (this.elementInstance(elementItem.name, formName).hasError("minlength")) {
      let validateObj = elementItem.validations.find(x => x.name === "minLength");
      return validateObj.errorMsg || `minimum length is ${validateObj.value}`
    }

    if (this.elementInstance(elementItem.name, formName).hasError("maxlength")) {
      let validateObj = elementItem.validations.find(x => x.name === "maxLength");
      return validateObj.errorMsg || `minimum length is ${validateObj.value}`
    }

    return msg;
  }

  constructor(private fb: FormBuilder) { }


  addEventListener() {
    for (let ele of this.configList) {
      if (ele.onChange) {
        this.coreForm.get(ele.name).valueChanges.subscribe(ele.onChange);
      }
    }
  }

  ngOnInit(): void {
    this.coreForm = this.createFormGroup(this.configList);
    this.sendFormInstance.emit(this.coreForm);
  }

}
