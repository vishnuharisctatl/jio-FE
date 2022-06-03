import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule(
  {
    declarations: [NavbarComponent, FooterComponent],
    imports: [CommonModule, NgbModule],
    exports: [NavbarComponent, FooterComponent]
  }
)
export class SharedModule { }
