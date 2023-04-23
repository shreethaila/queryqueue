import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerpageComponent } from './answerpage.component';

describe('AnswerpageComponent', () => {
  let component: AnswerpageComponent;
  let fixture: ComponentFixture<AnswerpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
