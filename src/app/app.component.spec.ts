import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { WorkerService } from './worker.service';

class MockWorkerService extends WorkerService {
  doWork(): void { }
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: WorkerService, useValue: new MockWorkerService() },
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'webworker-in-angular6'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('webworker-in-angular6');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to webworker-in-angular6!');
  }));

  it('should start process in component', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.processInComponent()).toBeDefined
    expect(app.iterations).toBeGreaterThan(0);
  }));

  it('should start process in web worker', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.processInWorker()).toBeDefined
    expect(app.iterations).toEqual(0);
  }));
});
