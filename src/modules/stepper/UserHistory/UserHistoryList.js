import React, { Fragment, SuspenseList } from 'react';

import { UserHistoryItemAsync } from '../../../components/UserHistoryItemAsync';

export function UserHistoryList({ data }) {
  const history = data.read();

  return (
    <Fragment>
      <SuspenseList revealOrder="forwards">
        {history.map((item, index) => (
          <UserHistoryItemAsync key={index}>
            <p>{item.customer}</p>
          </UserHistoryItemAsync>)
        )}
      </SuspenseList>
    </Fragment>
  );
};