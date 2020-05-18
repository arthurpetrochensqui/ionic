import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemsComponent } from './items.component';
import { ItemComponent } from '../item/item.component';
import { TimeAgoPipe } from '../../time-ago.pipe';
import { TestUtils } from '../../TestUtils';
import { By } from '@angular/platform-browser';
/*
this method describe() to create a new test suite.
*/
describe('ItemsComponent', () => {
  let component: ItemsComponent;
  let fixture: ComponentFixture<ItemsComponent>;

  /*the method  beforeEach() is used to add code to execute before
  execution of each spec.
  */
  beforeEach(async(() => {
    /*
    TestBed.configureTestingModule({
      declarations: [ ItemsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();
    fixture = TestBed.createComponent(ItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    */
   /*
    We used TestUtils in beforeEachCompiler() takes a list of components
    and prividers as the input arguments and uses the method configureIonicTestingModule() 
    to configure the testing module.
    The testing module imports Ionic modules and adds Ionic providers. This is required
    to set up the runtime environment for Ionic. After the testing module is configured,
    the components are compiled. After the compilation, the method TestBed.createComponent()
    creates an instance of the first component and returns the component test fixture.
    In the test suite, the returned test fixture and component instance are used for verifications

   */
    TestUtils.beforeEachCompiler([ItemsComponent, ItemComponent, TimeAgoPipe])
    .then(compiled => {
      fixture = compiled.fixture;
      component = compiled.instance;
    });
  }));

  it('should create a list of items', () => {
    component.items = [{
      id: 1,
      title: 'Test item 1',
      url: 'http://www.example.com/test1',
      by: 'user1',
      time: 1478576387,
      score: 242,
    }, {
      id: 2,
      title: 'Test item 2',
      url: 'http://www.example.com/test2',
      by: 'user2',
      time: 1478576387,
      score: 100,
    }];
    fixture.detectChanges();
    const debugElements = fixture.debugElement.queryAll(By.css('h2'));
    expect(debugElements.length).toBe(2);
    expect(debugElements[0].nativeElement.textContent).toContain('Test item 1');
    expect(debugElements[1].nativeElement.textContent).toContain('Test item 2');

  });

  it('should display no items', () => {
     component.items = [];
     fixture.detectChanges();
     const debugElement = fixture.debugElement.query(By.css('p'));
     expect(debugElement).not.toBeNull();
     expect(debugElement.nativeElement.textContent).toContain('No items');

  });
});