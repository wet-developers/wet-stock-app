import { Component, Inject, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SearchModalComponent } from '../search-modal/search-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  img: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.img = '../../assets/TeamNoLackin.png';
  }
  background: ThemePalette = 'primary';


  openSearchModal() {
    let dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig = { height: "700px", width: "900px" };

    this.dialog.open(SearchModalComponent, dialogConfig);
  }
  
}
