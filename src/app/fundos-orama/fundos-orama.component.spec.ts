import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundosOramaComponent } from './fundos-orama.component';

describe('FundosOramaComponent', () => {
  let component: FundosOramaComponent;
  let fixture: ComponentFixture<FundosOramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundosOramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundosOramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
