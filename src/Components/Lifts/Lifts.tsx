import React from 'react';
import { useQuery } from '@apollo/client';
import { ALL_LIFTS } from '../../GraphQL/Queries';
import Lift from '../Lift/Lift';
import { LiftStatus } from '../../__generated__/graphql';

const Lifts: React.FC<{ _status: LiftStatus | null }> = ({ _status }) => {
  const { loading, error, data } = useQuery(ALL_LIFTS, {
    variables: { status: _status },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="container mx-auto p-12 shadow-xl rounded bg-sky-100 border border-sky-300 h-[40rem] overflow-auto scrollbar-thin scrollbar-thumb-sky-200 scrollbar-thumb-rounded-xl scrollbar-thumb-p2">
      {data && data.allLifts.map((lift) => <Lift {...lift} key={lift.id} />)}
    </div>
  );
};

export default Lifts;
