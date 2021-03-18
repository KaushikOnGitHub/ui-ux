import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-loop',
  templateUrl: './loop.component.html',
  styleUrls: ['./loop.component.css']
})
export class LoopComponent implements OnInit {

  looping: FormGroup;
  TotalRow: number;
  selectedCondition: string ='';
  selectedOperators: string ='';
  selectedVariables: string ='';



  selectChangeHandler (event: any){

    this.selectedCondition = event.target.value;
  }

  selectChangeVariables (event: any){

    this.selectedVariables = event.target.value;
  }

  selectChangeOperators (event: any){

    this.selectedOperators = event.target.value;
  }


  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.looping = this._fb.group({
      itemRows: this._fb.array([this.initItemRow()]),
    });
  }

  initItemRow(){
    return this._fb.group({
      looptypes: [''],
      variables: [''],
      operators: ['']
    })
  }

  addNewRow(){
    const control = <FormArray>this.looping.controls['itemRows'];
    control.push(this.initItemRow());
  }

  deleteRow(index: number){
    const control = <FormArray>this.looping.controls['itemRows'];
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
