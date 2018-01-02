import { Observable } from 'rxjs';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';

const fetchData = url =>
	Observable.fromPromise(
		fetch(url).then(response => response.json)
  )

export const exampleEpic = (action$, store) =>
	action$.ofType('FETCH_EXAMPLE_DATA')
	.debounceTime(2000)
	// if another action comes, previous one is cancelled
	.switchMap(action =>
    fetchData(action.url)
    .map(data => ({ type: 'EXAMPLE_DATA_FETCHED', data }))
	)
