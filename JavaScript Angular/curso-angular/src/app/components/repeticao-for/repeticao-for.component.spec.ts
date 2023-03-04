import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeticaoForComponent } from './repeticao-for.component';

describe('RepeticaoForComponent', () => {
  let component: RepeticaoForComponent;
  let fixture: ComponentFixture<RepeticaoForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepeticaoForComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepeticaoForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
