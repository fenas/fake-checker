import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportFakeComponent } from './report-fake.component';

describe('ReportFakeComponent', () => {
  let component: ReportFakeComponent;
  let fixture: ComponentFixture<ReportFakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportFakeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportFakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
