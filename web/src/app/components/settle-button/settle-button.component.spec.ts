import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettleButtonComponent } from './settle-button.component';

describe('SettleButtonComponent', () => {
  let component: SettleButtonComponent;
  let fixture: ComponentFixture<SettleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettleButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
