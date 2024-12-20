import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmobiliariaPageComponent } from './inmobiliaria-page.component';

describe('InmobiliariaPageComponent', () => {
  let component: InmobiliariaPageComponent;
  let fixture: ComponentFixture<InmobiliariaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InmobiliariaPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InmobiliariaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
