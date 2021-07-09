import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommoncodeComponent } from './commoncode.component';

describe('CommoncodeComponent', () => {
  let component: CommoncodeComponent;
  let fixture: ComponentFixture<CommoncodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommoncodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommoncodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
