/* tslint:disable:no-unused-variable */
import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterEventsService } from '@got/ng-kit';
import { ComponentSuite, ComponentSuiteElements } from '@got/test-kit';
import { AppComponent } from '@ice-fire-song-app/containers/app/app.component';
import * as fromMediaStubs from '@ice-fire-song-media/stubs';
import { of } from 'rxjs';

const routerEventMock = {
  id: 0,
  url: '',
  route: {
    path: ''
  }
};

const routerEventsServiceMock = jest.fn<RouterEventsService>(() => ({
  filterRouterEvents: jest.fn(() => of(routerEventMock))
}));

@Component({ selector: 'uas-nav-menu', template: '' })
export class NavMenuStubComponent {
  @Input()
  appName: string;
}

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let els: ComponentSuiteElements<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavMenuStubComponent,
        fromMediaStubs.MatSidenavStubComponent,
        fromMediaStubs.MatSidenavContainerStubComponent,
        fromMediaStubs.MatSidenavContentStubComponent
      ],
      imports: [RouterTestingModule],
      providers: [{ provide: RouterEventsService, useClass: routerEventsServiceMock }]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        els = new ComponentSuite<AppComponent>(fixture).elements;
      });
  }));

  it('should match snapshot', () => {
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  });
});
