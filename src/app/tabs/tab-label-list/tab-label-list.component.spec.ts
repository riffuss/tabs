import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabLabelListComponent } from './tab-label-list.component';

describe('TabLabelListComponent', () => {
  let component: TabLabelListComponent;
  let fixture: ComponentFixture<TabLabelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabLabelListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabLabelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
