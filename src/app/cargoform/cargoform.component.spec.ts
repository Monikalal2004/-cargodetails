import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoformComponent } from './cargoform.component';

describe('CargoformComponent', () => {
  let component: CargoformComponent;
  let fixture: ComponentFixture<CargoformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CargoformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
