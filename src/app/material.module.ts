import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button"
import { MatIconModule } from "@angular/material/icon"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule} from "@angular/material/input"
import { MatSidenavModule } from "@angular/material/sidenav"
import { MatDatepickerModule } from "@angular/material/datepicker"
import { MatNativeDateModule } from "@angular/material/core"
import { MatCheckboxModule } from "@angular/material/checkbox"
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatCardModule } from "@angular/material/card"



@NgModule({
  imports: [MatButtonModule,
            MatIconModule,
            MatFormFieldModule,
            MatInputModule,
            MatSidenavModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatCheckboxModule,
            MatToolbarModule,
            MatCardModule,
            
          ],
  exports: [MatButtonModule,
            MatIconModule,
            MatFormFieldModule,
            MatInputModule,
            MatSidenavModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatCheckboxModule,
            MatToolbarModule,
            MatCardModule,
            


          ]
})
export class MaterialModule {}