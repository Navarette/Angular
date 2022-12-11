import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaprenotazioniComponent } from './listaprenotazioni.component';

describe('ListaprenotazioniComponent', () => {
  let component: ListaprenotazioniComponent;
  let fixture: ComponentFixture<ListaprenotazioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaprenotazioniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaprenotazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
