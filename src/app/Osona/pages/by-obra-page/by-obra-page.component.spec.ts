import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByObraPageComponent } from './by-obra-page.component';

describe('ByObraPageComponent', () => {
  let component: ByObraPageComponent;
  let fixture: ComponentFixture<ByObraPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ByObraPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByObraPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
