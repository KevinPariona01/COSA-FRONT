import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConflictoEditarComponent } from './conflicto-editar.component';

describe('ConflictoEditarComponent', () => {
  let component: ConflictoEditarComponent;
  let fixture: ComponentFixture<ConflictoEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConflictoEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConflictoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
