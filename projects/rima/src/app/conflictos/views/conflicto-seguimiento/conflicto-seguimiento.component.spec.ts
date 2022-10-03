import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConflictoSeguimientoComponent } from './conflicto-seguimiento.component';

describe('ConflictoSeguimientoComponent', () => {
  let component: ConflictoSeguimientoComponent;
  let fixture: ComponentFixture<ConflictoSeguimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConflictoSeguimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConflictoSeguimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
