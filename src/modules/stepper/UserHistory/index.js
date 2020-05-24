import React, { Fragment, useState, useTransition, Suspense } from 'react';

import { getUserHistory } from "../../../api";
import { UserHistoryList } from './UserHistoryList';

export default function UserHistory({ data }) {
  const [customer, setCustomer] = useState('');
  const [history, setHistory] = useState(data);

  const [startTransition] = useTransition({
    timeoutMs: 3000
  });

  function handleChange(e) {
    const value = e.target.value;

    // Outside the transition (urgent)
    setCustomer(value);
    
    startTransition(() => {
      // Inside the transition (may be delayed)
      setHistory(getUserHistory({ customer: value }));
    });
  }

  return (
    <Fragment>
      <input
        value={customer}
        onChange={handleChange}
      />
      <Suspense fallback={<p>Loading history...</p>}>
        <UserHistoryList data={history} />
      </Suspense>
    </Fragment>
  );
};