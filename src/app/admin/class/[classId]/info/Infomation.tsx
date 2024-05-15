import React from 'react';

interface IinFo {
  role?: string;
  name?: string;
}

const cardInfo = (props: IinFo) => {
  const {role, name} = props;
  return (
    <div>
      <div className="flex justify-between max-w-[500px] ">
        <p className="p-4">{role}</p>
        <div className="bg-cyan-400  p-4 rounded-md min-w-[13rem]">{name}</div>
      </div>
    </div>
  );
};

export default cardInfo;
