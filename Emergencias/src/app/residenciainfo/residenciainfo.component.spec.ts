import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidenciainfoComponent } from './residenciainfo.component';

describe('ResidenciainfoComponent', () => {
  let component: ResidenciainfoComponent;
  let fixture: ComponentFixture<ResidenciainfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidenciainfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidenciainfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
