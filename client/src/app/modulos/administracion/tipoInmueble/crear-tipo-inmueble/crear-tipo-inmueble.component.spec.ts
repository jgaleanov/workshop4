import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTipoInmuebleComponent } from './crear-tipo-inmueble.component';

describe('CrearTipoInmuebleComponent', () => {
  let component: CrearTipoInmuebleComponent;
  let fixture: ComponentFixture<CrearTipoInmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTipoInmuebleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearTipoInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
