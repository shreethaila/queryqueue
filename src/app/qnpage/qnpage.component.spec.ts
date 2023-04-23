import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QnpageComponent } from './qnpage.component';

describe('QnpageComponent', () => {
  let component: QnpageComponent;
  let fixture: ComponentFixture<QnpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QnpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QnpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
