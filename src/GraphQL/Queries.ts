import { gql } from '../__generated__';

export const ALL_LIFTS = gql(`
  query AllLifts($status: LiftStatus) {
    allLifts(status: $status) {
      id
      name
      status
      elevationGain
      trailAccess {
        name
        status
      }
    }
  }
`);
