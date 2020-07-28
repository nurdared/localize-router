import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTownComponent } from './home-town.component';

describe('HomeTownComponent', () => {
  let component: HomeTownComponent;
  let fixture: ComponentFixture<HomeTownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
