import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortffolioComponent } from './portffolio.component';

describe('PortffolioComponent', () => {
  let component: PortffolioComponent;
  let fixture: ComponentFixture<PortffolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortffolioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PortffolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
