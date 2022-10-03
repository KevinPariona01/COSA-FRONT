import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoBaseEditarComponent } from './catalogo-base-editar.component';

describe('CatalogoBaseEditarComponent', () => {
  let component: CatalogoBaseEditarComponent;
  let fixture: ComponentFixture<CatalogoBaseEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoBaseEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoBaseEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
