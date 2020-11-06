import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcontentComponent } from './newcontent.component';

describe('NewcontentComponent', () => {
  let component: NewcontentComponent;
  let fixture: ComponentFixture<NewcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
