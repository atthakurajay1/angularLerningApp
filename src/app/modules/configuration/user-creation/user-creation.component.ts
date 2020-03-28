import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
//import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css']
})
export class UserCreationComponent implements OnInit {


  formConfig = {
    "title": "User Profile Form",
    "subtitle": "Basic Information",
    "appearance": "outline",
    "enabledResetButton": true,
    "submitButtonName": "Enter",
    "submit": this.submitForm,
    "isMultiFormGroup": true
  }

  setFormData = {
    "fname": "Rajdeep Singh",
    "lname": "Thakurrrrr",
    "age": "29",
    "state": "MP",
    "district": "Sagar",
    "skills": [
      "JavaScript",
      "Type Script"
    ],
    "dob": "2020-07-08T18:30:00.000Z",
    "address": {
      "emial": "rajdeepthakur@innoeye.com",
      "moNumber": "9584007579",
      "website": "www.rajdeepthakur.com"
    },
    "eduction": {
      "matricSchool": "sarashwati shishu mandir",
      "secondySchool": "nutan higher",
      "graducation": "be",
      "mastergraduation": "mcom",
      "diploma": [
        "pgdca",
        "javacertification"
      ]
    }
  }

  userFormInstance: FormGroup;

  getFormInstance(formInstance) {
    this.userFormInstance = formInstance;
    this.userFormInstance.get("state").valueChanges.subscribe(value => {
      if (value === "MP") {
        let index = this.elementList.findIndex(x => x.name === "district");
        let skilsindex = this.elementList.findIndex(x => x.name === "skills");
        this.elementList[index].optionList = [{ "key": "Sagar", "value": "Sagar" }];
        this.elementList[skilsindex].disabled = true;
      } else {
        let skilsindex = this.elementList.findIndex(x => x.name === "skills");
        this.elementList[skilsindex].disabled = false;
      }
    });
    // this.userFormInstance.setValue(this.setFormData);
  }

  submitForm(formData) {
    console.log(formData);
  }


  elementList: Array<any> = [
    {
      "inputType": "text",
      "flex": "20",
      "value": "ajay",
      "placeholder": "Ajay thakur",
      "label": "First Name",
      "disabled": true,
      "show": true,
      "name": "fname",
      "validations": [{ "name": "required", "value": true, "errorMsg": "This is Required" }, { "name": "min", "value": 10, "errorMsg": "Minumum 10" }, { "name": "max", "value": 20, "errorMsg": "" }, { "name": "minLength", "value": "10", "errorMsg": "Minumum user input 10" }, { "name": "maxLength", "value": "20", "errorMsg": "" }]
    },
    {
      "inputType": "text",
      "flex": "20",
      "value": "thakur",
      "placeholder": "last name",
      "label": "last Name",
      "disabled": false,
      "show": true,
      "name": "lname",
      "validations": [{ "name": "required", "value": true, "errorMsg": "This is Required" }, { "name": "min", "value": 10, "errorMsg": "Minumum 10" }, { "name": "max", "value": 20, "errorMsg": "" }, { "name": "minLength", "value": "10", "errorMsg": "Minumum user input 10" }, { "name": "maxLength", "value": "20", "errorMsg": "" }],
    },
    {
      "inputType": "number",
      "flex": "20",
      "value": "18",
      "placeholder": "18-60",
      "label": "Age",
      "disabled": false,
      "show": true,
      "name": "age",
      "validations": [{ "name": "required", "value": true, "errorMsg": "This is Required" }, { "name": "min", "value": 18, "errorMsg": "Minumum age 18" }, { "name": "max", "value": 60, "errorMsg": "" }],
    },
    {
      "inputType": "select",
      "flex": "20",
      "value": "a",
      "placeholder": "State",
      "label": "Select State",
      "disabled": false,
      "show": true,
      "name": "state",
      "validations": [{ "name": "required", "value": "true", "errorMsg": "State Name is Required" }],
      "optionList": [{ "key": "Raj", "value": "Rajsthan" }, { "key": "Madhay Pradesh", "value": "MP" }, { "key": "Utter Pradesh", "value": "UP" }]
    },
    {
      "inputType": "select",
      "flex": "20",
      "value": "a",
      "placeholder": "District",
      "label": "Select District",
      "disabled": false,
      "show": true,
      "name": "district",
      "validations": [{ "name": "required", "value": "true", "errorMsg": "State Name is Required" }],
      "optionList": []
    },
    {
      "inputType": "multiselect",
      "flex": "20",
      "value": [],
      "placeholder": "Skils",
      "label": "Select Skils",
      "disabled": false,
      "show": false,
      "name": "skills",
      "validations": [{ "name": "required", "value": "true", "errorMsg": "It is Required" }],
      "optionList": [{ "key": "java", "value": "Java" }, { "key": "javaScript", "value": "JavaScript" }, { "key": "typescript", "value": "Type Script" }]
    },
    {
      "inputType": "date",
      "flex": "20",
      "placeholder": "Date of Birth",
      "label": "xyz",
      "value": "",
      "disabled": false,
      "show": true,
      "name": "dob",
      "dateVarient": "year",
      "validations": [{ "name": "required", "value": true, "errorMsg": "It is Required" }, { "name": "minDate", "value": new Date, "errorMsg": "It is Required" }, { "name": "maxDate", "value": new Date, "errorMsg": "It is Required" }]
    },
    {
      "inputType": "textarea",
      "flex": "100",
      "value": "",
      "placeholder": "Write Comments",
      "label": "Comments",
      "disabled": true,
      "show": true,
      "name": "comments",
      "validations": [{ "name": "required", "value": true, "errorMsg": "This is Required" }, { "name": "min", "value": 10, "errorMsg": "Minumum 50" }, { "name": "max", "value": 20, "errorMsg": "" }, { "name": "minLength", "value": "50", "errorMsg": "Minumum user input 50" }, { "name": "maxLength", "value": "200", "errorMsg": "" }]
    },
    {
      "name": "address",
      "isFormArrayEnabled": true,
      "isNestedGroup": false,
      "title": "Addess",
      "subtitle": "",
      "groupArrayElement": [{
        "inputType": "text",
        "flex": "20",
        "value": "",
        "placeholder": "Email",
        "label": "Email",
        "disabled": true,
        "show": true,
        "name": "emial",
        "validations": [{ "name": "required", "value": true, "errorMsg": "This is Required" }]
      },
      {
        "inputType": "text",
        "flex": "20",
        "value": "",
        "placeholder": "Mobile Number",
        "label": "Number",
        "disabled": true,
        "show": true,
        "name": "moNumber",
        "validations": [{ "name": "required", "value": true, "errorMsg": "This is Required" }, { "name": "minLength", "value": "10", "errorMsg": "Please Enter minimum 10" }, { "name": "maxLength", "value": "15", "errorMsg": "Please Enter maximum 15" }]
      },
      {
        "inputType": "text",
        "flex": "20",
        "value": "",
        "placeholder": "www.com",
        "label": "Website",
        "disabled": true,
        "show": true,
        "name": "website",
        "validations": [{ "name": "required", "value": true, "errorMsg": "This is Required" }, { "name": "minLength", "value": "10", "errorMsg": "Please Enter minimum 10" }, { "name": "maxLength", "value": "100", "errorMsg": "Please Enter maximum 100" }]
      }
      ]
    },
    {
      "name": "eduction",
      "isNestedGroup": true,
      "title": "Qualification",
      "subtitle": "",
      "groupElement": [{
        "inputType": "text",
        "flex": "20",
        "value": "",
        "placeholder": "School",
        "label": "High School Name",
        "disabled": true,
        "show": true,
        "name": "matricSchool",
        "validations": [{ "name": "required", "value": true, "errorMsg": "This is Required" }]
      },
      {
        "inputType": "text",
        "flex": "20",
        "value": "",
        "placeholder": "Secondry School",
        "label": "Secondry School Name",
        "disabled": true,
        "show": true,
        "name": "secondySchool",
        "validations": [{ "name": "required", "value": true, "errorMsg": "This is Required" }, { "name": "minLength", "value": "10", "errorMsg": "Please Enter minimum 10" }, { "name": "maxLength", "value": "15", "errorMsg": "Please Enter maximum 15" }]
      },
      {
        "inputType": "select",
        "flex": "20",
        "value": "",
        "placeholder": "Graduation",
        "label": "Graduation",
        "disabled": false,
        "show": true,
        "name": "graducation",
        "validations": [{ "name": "required", "value": true, "errorMsg": "This is Required" }],
        "optionList": [{ "key": "B.Com", "value": "bcom" }, { "key": "BCA", "value": "bca" }, { "key": "BE", "value": "be" }]
      },
      {
        "inputType": "select",
        "flex": "20",
        "value": "",
        "placeholder": "Master Graduation",
        "label": "Master Graduation",
        "disabled": false,
        "show": true,
        "name": "mastergraduation",
        "validations": [{ "name": "required", "value": true, "errorMsg": "This is Required" }],
        "optionList": [{ "key": "M.Com", "value": "mcom" }, { "key": "MCA", "value": "mca" }, { "key": "M.tech", "value": "mtech" }]
      },
      {
        "inputType": "select",
        "flex": "20",
        "value": "",
        "placeholder": "Diploma",
        "label": "Diploma",
        "disabled": false,
        "show": true,
        "name": "diploma",
        "validations": [{ "name": "required", "value": true, "errorMsg": "This is Required" }],
        "optionList": [{ "key": "NCC", "value": "NCC" }, { "key": "PGDCA", "value": "pgdca" }, { "key": "Java certification", "value": "javacertification" }]
      }
      ]
    }
  ];


  constructor() { }

  ngOnInit(): void {

  }

}
