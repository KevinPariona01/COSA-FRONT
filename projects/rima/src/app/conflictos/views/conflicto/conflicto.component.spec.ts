import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConflictoComponent } from './conflicto.component';

describe('ConflictoComponent', () => {
  let component: ConflictoComponent;
  let fixture: ComponentFixture<ConflictoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConflictoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConflictoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
