import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksCatalogComponent } from './tasks-catalog.component';

describe('TasksCatalogComponent', () => {
  let component: TasksCatalogComponent;
  let fixture: ComponentFixture<TasksCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksCatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
