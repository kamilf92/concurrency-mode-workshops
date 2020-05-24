import React, { Suspense } from 'react';
import { getFakeItem } from '../api';

function Item ({ fakeItem, children }) {
  fakeItem.read();

  return children;
}

export function UserHistoryItemAsync({ children }) {
  const fakeItem = getFakeItem();
  return (
    <Suspense fallback="Loading item...">
      <Item children={children} fakeItem={fakeItem} />
    </Suspense>
  );
};