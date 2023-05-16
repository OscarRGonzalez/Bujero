import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisCultivosComponent } from './mis-cultivos.component';

describe('MisCultivosComponent', () => {
  let component: MisCultivosComponent;
  let fixture: ComponentFixture<MisCultivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisCultivosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisCultivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
