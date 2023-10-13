import React from 'react';
import Modal from 'react-modal';
import {
  Lift as LiftType,
  LiftStatus,
  Trail,
} from '../../__generated__/graphql';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { SET_LIFT_STATUS } from '../../GraphQL/Mutations';
import { ALL_LIFTS } from '../../GraphQL/Queries';

interface IProps extends Omit<LiftType, 'night' | 'capacity'> {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IFormInput {
  status: LiftStatus;
}

const LiftEdit: React.FC<IProps> = (props: any) => {
  const { register, handleSubmit } = useForm<IFormInput>();

  // eslint-disable-next-line no-empty-pattern
  const [setLiftStatus, {}] = useMutation(SET_LIFT_STATUS, {
    refetchQueries: [ALL_LIFTS, 'AllLifts'],
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setLiftStatus({ variables: { status: data.status, id: props.id } }).then(
      () => props.setIsOpen(false),
    );
  };

  return (
    <Modal
      closeTimeoutMS={500}
      className="absolute right-0 w-1/2 p-4 border-l-2 border-sky-800 h-screen bg-white outline-0"
      isOpen={props.isOpen}
      onRequestClose={() => props.setIsOpen(false)}
      ariaHideApp={false}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center"
      >
        <p className="text-xl font-bold">{props.name}</p>
        <p className="text-xl mb-4">{props.elevationGain}</p>

        <label htmlFor="status">Update status</label>
        <select
          {...register('status', { required: true })}
          className="block w-1/3 font mt-1 bg-white border border-gray-300 rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          id="status"
          defaultValue=""
        >
          <option value=""></option>
          <option value="OPEN">OPEN</option>
          <option value="CLOSED">CLOSED</option>
          <option value="HOLD">HOLD</option>
        </select>

        <div className="mx-auto p-6 m-12 shadow-xl w-4/5 rounded bg-sky-100 border border-sky-300 h-[40rem] overflow-auto scrollbar-thin scrollbar-thumb-sky-200 scrollbar-thumb-rounded-xl scrollbar-thumb-p2">
          {props.trailAccess.map((trail: Trail, i: number) => (
            <div
              key={i}
              className="flex justify-between border-2 bg-sky-200 border-sky-200 m-3 p-4 items-center rounded-xl"
            >
              <p>{trail.name}</p>
              <p>{trail.status}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-10">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Save
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => props.setIsOpen(false)}
          >
            Close
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default LiftEdit;
