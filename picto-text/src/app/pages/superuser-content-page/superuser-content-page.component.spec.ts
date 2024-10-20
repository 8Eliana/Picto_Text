import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperuserContentPageComponent } from './superuser-content-page.component';

describe('SuperuserContentPageComponent', () => {
  let component: SuperuserContentPageComponent;
  let fixture: ComponentFixture<SuperuserContentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuperuserContentPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperuserContentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
