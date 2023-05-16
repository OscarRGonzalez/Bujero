import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPlantaComponent } from './info-planta.component';

describe('InfoPlantaComponent', () => {
  let component: InfoPlantaComponent;
  let fixture: ComponentFixture<InfoPlantaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPlantaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
