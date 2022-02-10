import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthBtnComponent } from './auth-btn.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthModule} from '@auth0/auth0-angular';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { HttpClient } from '@angular/common/http';


describe('AuthBtnComponent', () => {
  let component: AuthBtnComponent;
  let fixture: ComponentFixture<AuthBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule, AuthModule.forRoot({
        domain: 'random',
        clientId: 'doesntmatter'
      })],
      declarations: [ AuthBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
