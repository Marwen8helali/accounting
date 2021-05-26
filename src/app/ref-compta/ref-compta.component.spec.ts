import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefComptaComponent } from './ref-compta.component';

describe('RefComptaComponent', () => {
  let component: RefComptaComponent;
  let fixture: ComponentFixture<RefComptaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefComptaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefComptaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
