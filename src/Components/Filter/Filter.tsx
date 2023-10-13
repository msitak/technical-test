import React, { Dispatch, SetStateAction } from 'react';

const Filter: React.FC<{ setStatus: Dispatch<SetStateAction<null>> }> = ({
  setStatus,
}) => {
  const handleSelectChange = (event: any) => {
    const value = event.target.value;
    setStatus(value === 'null' ? null : value);
  };

  return (
    <div className="flex flex-col items-end mb-4">
      <label htmlFor="statuses">Filter per status</label>
      <select
        id="statuses"
        onChange={handleSelectChange}
        className="bg-gray-50 border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-40"
      >
        <option value="null">ALL</option>
        <option value="OPEN">OPEN</option>
        <option value="CLOSED">CLOSED</option>
        <option value="HOLD">HOLD</option>
      </select>
    </div>
  );
};

export default Filter;
