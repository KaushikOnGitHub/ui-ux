import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.css']
})
export class GenericComponent implements OnInit {

  generic: FormGroup;
  TotalRow: number;
  selectedVariables: string ='';
  selectedOperators: string ='';


  selectChangeHandler (event: any){

    this.selectedVariables = event.target.value;
  }

  selectChangeOperators (event: any){

    this.selectedOperators = event.target.value;
  }


  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.generic = this._fb.group({
      itemRows: this._fb.array([this.initItemRow()]),
    });
  }

  initItemRow(){
    return this._fb.group({
      variables: [''],
      operators: ['']
    })
  }

  addNewRow(){
    const control = <FormArray>this.generic.controls['itemRows'];
    control.push(this.initItemRow());
  }

  deleteRow(index: number){
    const control = <FormArray>this.generic.controls['itemRows'];
    if(control != null) {
      this.TotalRow = control.value.length;
    }
    if(this.TotalRow > 1){
      control.removeAt(index);
    } else {
      alert('One record is mandatory.');
      return false;
    }
  }

}
