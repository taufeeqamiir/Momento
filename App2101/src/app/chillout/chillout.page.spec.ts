import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChilloutPage } from './chillout.page';

describe('ChilloutPage', () => {
  let component: ChilloutPage;
  let fixture: ComponentFixture<ChilloutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChilloutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChilloutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
