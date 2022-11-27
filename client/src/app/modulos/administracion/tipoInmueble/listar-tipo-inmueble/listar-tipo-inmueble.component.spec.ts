import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTipoInmuebleComponent } from './listar-tipo-inmueble.component';

describe('ListarTipoInmuebleComponent', () => {
  let component: ListarTipoInmuebleComponent;
  let fixture: ComponentFixture<ListarTipoInmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTipoInmuebleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarTipoInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
