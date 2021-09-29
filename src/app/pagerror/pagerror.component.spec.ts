import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagerrorComponent } from './pagerror.component';

describe('PagerrorComponent', () => {
  let component: PagerrorComponent;
  let fixture: ComponentFixture<PagerrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagerrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagerrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
