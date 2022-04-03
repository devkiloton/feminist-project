import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MulheresHistoricasPageComponent } from './mulheres-historicas-page.component';

describe('MulheresHistoricasPageComponent', () => {
  let component: MulheresHistoricasPageComponent;
  let fixture: ComponentFixture<MulheresHistoricasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MulheresHistoricasPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MulheresHistoricasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
