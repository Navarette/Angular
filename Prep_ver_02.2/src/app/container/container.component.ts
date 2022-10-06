import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  m_name: string[];
  constructor() { 
    this.m_name = ['ruspa','escavatore','Bulldozer','betoniera','dumper','gru','rullo compattatore','minipale','Carrello elevatore','trattore']
  }
    
  ngOnInit(): void {
  }

}
