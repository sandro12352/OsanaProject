import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquitecturaPageComponent } from './arquitectura-page.component';

describe('ArquitecturaPageComponent', () => {
  let component: ArquitecturaPageComponent;
  let fixture: ComponentFixture<ArquitecturaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArquitecturaPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArquitecturaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
