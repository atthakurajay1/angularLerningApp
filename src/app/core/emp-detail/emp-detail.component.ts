import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, OnInit, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { trigger, state, style, transition, animate, query, keyframes, group } from '@angular/animations';

const simpleAnimation = trigger("addButtonAnimate", [
  state("close", style({
    backgroundColor: "red",
    height: '200px',
    width: '200px',
    transform: 'scale(0.5, 0.5) rotate(45deg)'
  })),
  state("open", style({
    backgroundColor: "green",
    height: '100px',
    width: '100px',
    transform: 'scale(1, 1) rotate(0deg)'
  })),
  transition("open => close", [
    animate("1s ease-in")
  ]),
  transition("close => open", [
    animate("1s ease-out")
  ])
]);

const loading = trigger("loading", [
  state("loading-start", style({
    backgroundColor: "gray"
  })),
  transition("* => loading-start", [
    animate("60s", keyframes([
      style({ backgroundColor: "red", offset: 0 }),
      style({ backgroundColor: "blue", offset: 0.2 }),
      style({ backgroundColor: "orange", offset: 0.3 }),
      style({ backgroundColor: "black", offset: 1 })
    ]))
  ]),
  transition("loading-start => *", [
    animate("1s", keyframes([
      style({ backgroundColor: "red", offset: 0 }),
      style({ backgroundColor: "blue", offset: 0.2 }),
      style({ backgroundColor: "orange", offset: 0.3 }),
      style({ backgroundColor: "black", offset: 1 })
    ]))
  ])
]);

const queryExample = trigger("queryAnimation", [
  transition("* => goAnimation", [
    query("h1", style({ opacity: 0 })),
    query(".content", style({ opacity: 0, width: "50px" })),

    query("h1", animate(1000, style({ opacity: 1 }))),
    query(".content", animate(500, style({ opacity: 1, width: "100px" })))
  ])
])

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
  animations: [
    loading,
    simpleAnimation,
    queryExample
  ]
})
export class EmpDetailComponent implements OnInit, OnChanges {

  // formElement: any = {
  //   empName: new FormControl('RAJDEEP', [Validators.required, Validators.minLength(5)]),
  //   empFName: new FormControl('THAKUR'),
  //   address: new FormGroup({
  //     area: new FormControl(''),
  //     distict: new FormControl('')
  //   })
  // };

  // empForm = new FormGroup(this.formElement);

  exp = ""
  animationName: string = "open";
  load: string = "loading-start";
  ngOnChanges(params) {
    if (params) {
      // this.defaultNameChange.emit(this.defaultName);
    }

  }

  @Input()
  defaultName: string;

  @Output()
  defaultNameChange = new EventEmitter;


  @Input("default-fname")
  defaultFname: string;

  @Output()
  formData = new EventEmitter();

  empForm = this.fb.group({
    empName: ['', [Validators.required, Validators.minLength(5)], this.nameExistValidation],
    empFName: [''],
    address: this.fb.array([this.getAddressGroup()])
  });

  constructor(private fb: FormBuilder) {
    console.log("form Constructor --------->" + this.defaultName)
  }

  nameExistValidation(control: AbstractControl): Observable<ValidationErrors | null> {
    let obser = new Observable(obj => {
      obj.next({ nameExistValidation: { value: control.value, "msg": "exits" } });
      obj.complete();
    });

    return obser;
  }


  addAddress() {
    this.address.push(this.getAddressGroup());
  }

  removeAdd(index: number): void {
    this.address.removeAt(index);
  }

  getAddressGroup(): FormGroup {
    return this.fb.group({
      area: [''],
      distict: ['', [Validators.required, this.validateCity()]]
    })
  }




  validateCity(): ValidatorFn {
    let validCityList: Array<string> = ["Indore", "Sagar", "damoh"];

    return (control: AbstractControl): { [key: string]: any } | null => {
      let validMsg = { value: control.value, requireCity: validCityList }
      return !validCityList.includes(control.value) ? { validateCity: validMsg } : null;
    }
  }

  get address() {
    return this.empForm.get("address") as FormArray;
  }

  sumbitForm() {
    //console.log(this.empForm);
    //console.log(this.defaultFname);
    //console.log(this.defaultName);
    this.defaultName = "radheshyam.innoeye.com";
    this.defaultNameChange.emit(this.defaultName);
    this.formData.emit(this.empForm.value);
  }

  ngOnInit() {
    console.log("form ngOnInit -------->" + this.defaultName);
  }

  changeAnimation() {
    if (this.animationName === "open") {
      this.animationName = "close";
      this.exp = "goAnimation";
    } else {
      this.animationName = "open";
      this.exp = "";
    }

  }

  //get empName() { return this.empForm.get("empName") }
}
