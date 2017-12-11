import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {SwUpdate} from "@angular/service-worker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {


    constructor(private swUpdate:SwUpdate) {

    }

    ngOnInit() {

        this.swUpdate.checkForUpdate();

    }


}

