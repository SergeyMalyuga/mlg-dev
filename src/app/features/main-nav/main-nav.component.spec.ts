import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNaComponent } from './main-nav.component';

describe('MainNaComponent', () => {
  let component: MainNaComponent;
  let fixture: ComponentFixture<MainNaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainNaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainNaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
