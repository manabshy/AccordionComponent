import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionComponent } from './accordion.component';

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle accordion', () => {
    spyOn(component, 'toggleMenu')
    const mockEvent: Event = <Event><any>{
      currentTarget: {
        parentElement: null
      },
      target: {
          value: 42
      }
    };
    component.toggleMenu(mockEvent);
    expect(component.toggleMenu).toHaveBeenCalledWith(mockEvent)
  })

  it('should able tp toggle accordion items', () => {
    const mockEvent: Event = <Event><any>{
      currentTarget: {
        parentElement: null
      },
      target: {
          value: 42
      }
    };
    component.toggleMenu(mockEvent);
    expect(mockEvent.currentTarget).toBeDefined();
  })

  it(`should able to render accordion items`, () => {
    expect(component.items.length).toEqual(5);
  });
});
