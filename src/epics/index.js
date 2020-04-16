import 'rxjs';
import { map, mergeMap,takeUntil, catchError, filter } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';

const FETCH_USER = 'FETCH_USER';
const FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED';
const FETCH_USER_REJECTED = 'FETCH_USER_REJECTED';
const FETCH_USER_CANCELLED = 'FETCH_USER_CANCELLED';

const fetchUserFulfilled = payload => ({ type: FETCH_USER_FULFILLED, payload });

export const fetchUserEpic = action$ => action$.pipe(
  ofType(FETCH_USER),
  mergeMap(action => ajax('http://jsonplaceholder.typicode.com/users').pipe(
    map(response => fetchUserFulfilled(response)),
    takeUntil(action$.pipe(
      filter(action => action.type === FETCH_USER_CANCELLED)
    )),
    catchError( (err) => {
      // handle error- read redux observable docs
      // work with 'FETCH_USER_REJECTED'
    })
  ))
);

