import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTipoInmuebleComponent } from './editar-tipo-inmueble.component';

describe('EditarTipoInmuebleComponent', () => {
  let component: EditarTipoInmuebleComponent;
  let fixture: ComponentFixture<EditarTipoInmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarTipoInmuebleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarTipoInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
