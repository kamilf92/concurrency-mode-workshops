import React, { useTransition } from 'react';
import { Button as MuiButton } from '@material-ui/core';

export function Button({ children, onClick, timeoutMs, disabled, ...restProps }) {
  const [startTransition, isPending] = useTransition({
    timeoutMs
  });

  function handleClick() {
    startTransition(() => {
      onClick();
    });
  }

  return (
    <>
      <MuiButton
        onClick={handleClick}
        disabled={isPending || disabled}
        {...restProps}
      >
        {isPending ? "Loading..." : children}
      </MuiButton>
    </>
  );
}