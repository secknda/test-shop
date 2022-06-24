import { Component, OnInit } from '@angular/core';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public totalItem :number=0;

  constructor(private cardService:CardService) { }

  ngOnInit(): void {(
    this.cardService.getProducts()
        .subscribe(res=>{
            this.totalItem=res.lenght;
          }
        ))
  }

}
