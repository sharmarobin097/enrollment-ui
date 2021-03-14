import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { AnimationTimes } from "../constants/global-constants";
import { SnackbarService } from "../services/snackbar.service";

@Injectable()
export class HttpErrorInterceptor implements HttpErrorInterceptor {
  constructor(private snackBarService: SnackbarService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        retry(3),
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';
          // if error is a client-side error
          if (error.error instanceof ErrorEvent) {
            errorMessage = `Error: ${error.error.message}`;
          } else {
            // error is a server side error
            errorMessage = `Error Code: ${error.status} Message: ${error.message}`;
          }
          const timeInSeconds = AnimationTimes.SnackBar;
          this.snackBarService.openSnackBar(errorMessage, '', timeInSeconds);
          return throwError(errorMessage);
        })
      );
  }
}
