import { TestBed } from '@angular/core/testing';
// Http testing module and mocking controller
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { Enrollee } from '../interfaces/enrollee';
import { mockEnrollees, mockEnrollee } from '../mocks/enrollees-mock';

describe('EnrollmentListService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  const testUrl = '/data';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ HttpClient ],
    });

    // Inject the http service and test controller for each test
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  describe('getEnrollees', () => {
    it('should return all enrollees', () => {
      const enrollees: Enrollee[] = [...mockEnrollees];

      httpClient.get<Enrollee[]>(testUrl).subscribe((data) =>
        // When observable resolves, result should match test data
        expect(data).toEqual(enrollees)
      );

      // The following `expectOne()` will match the request's URL.
      // If no requests or multiple requests matched that URL
      // `expectOne()` would throw.
      const req = httpTestingController.expectOne(testUrl);

      // Assert that the request is a GET.
      expect(req.request.method).toEqual('GET');

      // Respond with mock data, causing Observable to resolve.
      // Subscribe callback asserts that correct data was returned.
      req.flush(enrollees);

      // Finally, assert that there are no outstanding requests.
      httpTestingController.verify();
    });
  });

  describe('updateEnrollee', () => {
    it('should update the enrollee', () => {
      const enrollee: Enrollee = {...mockEnrollee};

      httpClient.put<Enrollee>(testUrl, enrollee).subscribe((data) =>
        // When observable resolves, result should match test data
        expect(data).toEqual(enrollee)
      );

      // The following `expectOne()` will match the request's URL.
      // If no requests or multiple requests matched that URL
      // `expectOne()` would throw.
      const req = httpTestingController.expectOne(testUrl);

      // Assert that the request is a GET.
      expect(req.request.method).toEqual('PUT');

      // Respond with mock data, causing Observable to resolve.
      // Subscribe callback asserts that correct data was returned.
      req.flush(enrollee);

      // Finally, assert that there are no outstanding requests.
      httpTestingController.verify();
    });
  });
});
