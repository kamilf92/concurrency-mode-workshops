import React, { Fragment, useState, useTransition, Suspense } from 'react';

import { getUserHistory } from "../../../api";

export default function UserHistory({ data }) {
  const history = data.read();

  return (
    <Fragment>
      {history.map((item) => <p>{item.customer}</p>)}
    </Fragment>
  );
};