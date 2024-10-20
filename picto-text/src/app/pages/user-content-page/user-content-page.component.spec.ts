import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContentPageComponent } from './user-content-page.component';

describe('UserContentPageComponent', () => {
  let component: UserContentPageComponent;
  let fixture: ComponentFixture<UserContentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserContentPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserContentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
