import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoEditarComponent } from './catalogo-editar.component';

describe('CatalogoEditarComponent', () => {
  let component: CatalogoEditarComponent;
  let fixture: ComponentFixture<CatalogoEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
