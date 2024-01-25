import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OpcionesEPPage } from './opciones-ep.page';

describe('OpcionesEPPage', () => {
  let component: OpcionesEPPage;
  let fixture: ComponentFixture<OpcionesEPPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OpcionesEPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
