import { Component, Inject } from "@angular/core"
import { MAT_DIALOG_DATA } from "@angular/material/dialog"

@Component({
  selector: 'app-stop-training',
  templateUrl: './stop-training.component.html'
})
export class StopTrainingComponent{
  // in order to pass the progress number into the open dialog:
  // we need to inject the information into the dialog using 
  // '@Inject(MAT_DIALOG_DATA)' where mat_dialog_data is 
  // a constant used internally by angular to make this happen
  //  and @Inject is a typical constructor injection (like services)
  // but no class is passed, only a custom object.
  constructor(@Inject(MAT_DIALOG_DATA) public passedData:any){

  }
}