import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarTipoInmuebleComponent } from './eliminar-tipo-inmueble.component';

describe('EliminarTipoInmuebleComponent', () => {
  let component: EliminarTipoInmuebleComponent;
  let fixture: ComponentFixture<EliminarTipoInmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarTipoInmuebleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarTipoInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
