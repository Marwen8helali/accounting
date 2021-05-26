import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyComptableComponent } from './key-comptable.component';

describe('KeyComptableComponent', () => {
  let component: KeyComptableComponent;
  let fixture: ComponentFixture<KeyComptableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyComptableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyComptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
