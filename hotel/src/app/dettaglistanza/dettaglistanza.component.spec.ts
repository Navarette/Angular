import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglistanzaComponent } from './dettaglistanza.component';

describe('DettaglistanzaComponent', () => {
  let component: DettaglistanzaComponent;
  let fixture: ComponentFixture<DettaglistanzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettaglistanzaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettaglistanzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
