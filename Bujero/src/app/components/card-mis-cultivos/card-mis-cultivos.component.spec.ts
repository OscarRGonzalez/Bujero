import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMisCultivosComponent } from './card-mis-cultivos.component';

describe('CardMisCultivosComponent', () => {
  let component: CardMisCultivosComponent;
  let fixture: ComponentFixture<CardMisCultivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMisCultivosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMisCultivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
