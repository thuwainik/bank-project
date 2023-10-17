import React, { useState } from "react";

import Deposit from "../Components/Deposit";
import Withdraw from "../Components/Withdraw";
import Transfer from "../Components/Transfer";

const Profile = () => {
  const [showD, setShowD] = useState(false);
  const [showW, setShowW] = useState(false);
  const [showT, setShowT] = useState(false);

  return (
    <div className="">
      {/* Add note button */}
      <div className="">
        <button onClick={() => setShowD(true)} className="">
          Deposit
        </button>
        <button onClick={() => setShowW(true)} className="">
          Withdraw
        </button>
        <button onClick={() => setShowT(true)} className="">
          Transfer
        </button>
      </div>

      <Deposit show={showD} onClose={() => setShowD(false)} onSave={() => {}} />
      <Withdraw
        show={showW}
        onClose={() => setShowW(false)}
        onSave={() => {}}
      />
      <Transfer
        show={showT}
        onClose={() => setShowT(false)}
        onSave={() => {}}
      />
    </div>
  );
};

export default Profile;
