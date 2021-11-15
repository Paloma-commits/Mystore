import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSubItemComponent } from './cart-sub-item.component';

describe('CartSubItemComponent', () => {
  let component: CartSubItemComponent;
  let fixture: ComponentFixture<CartSubItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartSubItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartSubItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
