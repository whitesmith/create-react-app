import { combineEpics } from 'redux-observable'
import { exampleEpic } from './example'

export const rootEpic = combineEpics(
  exampleEpic
)
