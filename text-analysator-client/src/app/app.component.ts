import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TogglesComponent } from './toggles/toggles.component';
import { SendTextComponent } from './send-text/send-text.component';
import { DisplayResultComponent } from './display-result/display-result.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,

    //import components
    TogglesComponent,
    SendTextComponent,
    DisplayResultComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    
    //provideClientHydration(),
    // provideHttpClient(withFetch()),
  ]
})

//app component
export class AppComponent {
  programTitle = 'Text Analysator';

  //handle emited event(toggle switch event) from child 
  scriptChecked: boolean = false;
  onScriptCheckedChange(scriptChecked: boolean) {
    this.scriptChecked = scriptChecked;
    // console.log("in parent scriptChecked: ", this.scriptChecked)
  }

  //handle emited event(radio selection) from child 
  selectedRadioOption: string = 'V';
  onRadioSelectedChange(selectedRadioOption: string) {
    // console.log("in parent selectedRadioOption: ", selectedRadioOption)
    this.selectedRadioOption = selectedRadioOption
  }

}
