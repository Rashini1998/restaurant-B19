import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFinComponent } from './order-fin.component';

describe('OrderFinComponent', () => {
  let component: OrderFinComponent;
  let fixture: ComponentFixture<OrderFinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderFinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
