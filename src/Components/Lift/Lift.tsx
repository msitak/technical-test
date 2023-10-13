import React, { useState } from 'react';
import LiftEdit from '../LiftEdit/LiftEdit';

const Lift: React.FC<any> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex border-2 bg-sky-200 border-sky-200 m-3 p-4 items-center rounded-xl">
      <div className="w-64 text-lg">
        <p className="font-medium">{props.name}</p>
        <p>{props.elevationGain}</p>
      </div>
      <p>{props.status}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 ml-auto stroke-1 hover:stroke-2 hover:cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
        />
      </svg>
      <LiftEdit {...props} setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
};

export default Lift;
