import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdpComponent } from './productdp.component';

describe('ProductdpComponent', () => {
  let component: ProductdpComponent;
  let fixture: ComponentFixture<ProductdpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductdpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
