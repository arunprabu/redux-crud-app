import 'rxjs';
import { map, mergeMap, takeUntil, catchError, filter } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax'; // rest api client from rxjs

const fetchUserFulfilled = payload => ({ type: 'FETCH_USER_FULFILLED', payload }); // will hit reducer 

const fetchUserRejected = error => ({ type: 'FETCH_USER_REJECTED', error }); // will hit reducer  

export const fetchUserEpic = action$ => action$.pipe(
  ofType('FETCH_USER'),
  mergeMap(action => ajax('http://jsonplaceholder.typicode.com/users').pipe(
    map(response => {
      return fetchUserFulfilled(response);
    }),
    takeUntil(action$.pipe(
      filter(action => action.type === 'FETCH_USER_CANCELLED')
    )),
    catchError( (err) => {
      // handle error- read redux observable docs
      // work with 'FETCH_USER_REJECTED'
      return fetchUserRejected(err)
    })
  ))
);

