import pipe from 'lodash/fp/pipe'
import { modularScale, stripUnit } from 'polished'

export const modularScaleRem = pipe(
  modularScale,
  stripUnit,
  x => `${x}rem`
)
