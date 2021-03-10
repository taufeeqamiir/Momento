import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PeacefulPage } from './peaceful.page';

describe('PeacefulPage', () => {
  let component: PeacefulPage;
  let fixture: ComponentFixture<PeacefulPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeacefulPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PeacefulPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
