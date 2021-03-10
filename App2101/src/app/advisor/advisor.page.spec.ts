import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdvisorPage } from './advisor.page';

describe('AdvisorPage', () => {
  let component: AdvisorPage;
  let fixture: ComponentFixture<AdvisorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvisorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdvisorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
