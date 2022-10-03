import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XsSyncToastComponent } from './xs-sync-toast.component';

describe('XsSyncToastComponent', () => {
  let component: XsSyncToastComponent;
  let fixture: ComponentFixture<XsSyncToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XsSyncToastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XsSyncToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
