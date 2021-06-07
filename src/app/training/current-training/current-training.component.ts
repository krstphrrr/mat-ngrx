import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingComponent } from './stop-training.component'

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.sass']
})
export class CurrentTrainingComponent implements OnInit {
  @Output() trainingExit=new EventEmitter<void>()
  progress=0

  timer?: number | any;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.startOrResumeTimer()
  }

  startOrResumeTimer(){
    this.timer = setInterval(()=>{
      this.progress = this.progress + 5;
      if(this.progress>=100){
        clearInterval(this.timer)
      }
    }, 1000)
  }
  onStop(){
    clearInterval(this.timer)
    const dialogRef = this.dialog.open(StopTrainingComponent,{data:{
      progress: this.progress
    }})
    // afterClosed method from the MatDialog module will return an observable
    // with whatever was bound to the 'mat-dialog-close' directive (templateless components)
    // in this case, a boolean was bound in the dialog template with the 'mat-dialog-close' 
    // directive, thus when we subscribe to the observable returned by the 'afterClosed()' 
    // method, we get that boolean.
    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        //  if result is true, emit contentless signal
        // this signal will be detected by the training (parent) component, 
        // and set its 'ongoingTraining' property to false
        // which triggers the ngIf directive to conditionally show 
        // components
        this.trainingExit.emit()
      } else {
        this.startOrResumeTimer()
      }
      console.log(result)
    }

    )
  }

}
