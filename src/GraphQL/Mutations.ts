import { gql } from '../__generated__';

export const SET_LIFT_STATUS = gql(`
  mutation SetLiftStatus($id: ID!, $status: LiftStatus! ) {
    setLiftStatus(id: $id, status: $status) {
      status
      trailAccess {
        name
        status
      }
      name
      elevationGain
      id
    }
  }
`);
