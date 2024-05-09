import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  let reqWithToken = req.clone({
    setHeaders: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcxNTI4NjEwMywiZXhwIjoxNzE1ODkwOTAzfQ.ji_voF26p07yl5SLwmdxlt0ZiNAYGuGv_dInrsZKwb8',
    },
  });

  return next(reqWithToken);
};
