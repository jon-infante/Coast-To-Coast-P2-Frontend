import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrawingPageComponent } from './drawing-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing';
import { AuthModule } from '@auth0/auth0-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


describe('DrawingPageComponent', () => {
  let component: DrawingPageComponent;
  let fixture: ComponentFixture<DrawingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule, AuthModule.forRoot({
        domain: 'random',
        clientId: 'doesntmatter'
      })],
      declarations: [ DrawingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
