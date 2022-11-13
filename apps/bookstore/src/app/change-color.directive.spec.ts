import { Component, DebugElement, ElementRef, Renderer2 } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ChangeColorDirective } from './change-color.directive';

@Component({
  template: `
  <div changeColor>color should be yellow</div>
  <div class="no-directive">no bg color</div>
  `
})
class TestComponent { }

describe('ChangeColorDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let el: DebugElement;
  let elementRefMock: ElementRef;
  let renderer2Mock: Renderer2;

  beforeEach(async(() => {

    TestBed.configureTestingModule({

      declarations: [
        TestComponent, ChangeColorDirective
      ],
      providers: [
        // { provide: ElementRef, useValue: elementRefMock },
        // { provide: Renderer2, useValue: renderer2Mock }
      ]

    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.debugElement.componentInstance;
    el = fixture.debugElement;

    fixture.detectChanges();
  }));

  it('should create an instance', () => {
    const directive = new ChangeColorDirective(elementRefMock, renderer2Mock);
    expect(directive).toBeTruthy();
  });

  it('should change the div background to red', () => {
    const elements = el.query(By.directive(ChangeColorDirective));

    expect(elements).toBeTruthy();

    expect(elements.nativeElement.style.backgroundColor).toEqual('yellow');

    const item = el.query(By.css('.no-directive'));
    expect(item.nativeElement.style.backgroundColor).toEqual('');
  });
});
