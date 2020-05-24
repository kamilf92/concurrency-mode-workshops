import React, { Fragment, useState, useMemo, Suspense, lazy } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { default as MuiStepper} from '@material-ui/core/Stepper';
import { Step, StepLabel, Button } from '@material-ui/core';

import { ErrorBoundary } from '../../components/ErrorBoundary';

import { InitialStep } from './InitialStep';
const UserDetails = lazy(() => import('./UserDetails'));

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(4)
  },
  stepper: {
    borderBottom: '1px solid gray'
  },
  content: {
    minHeight: 400,
    backgroundColor: "#efefef",
    padding: theme.spacing(3)
  }
}));

export default function Stepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const steps = ['Initial Step', 'User details', 'History', 'Last step'];

  const handleNext = ()  => {
    const nextStep = activeStep + 1;

    setActiveStep(nextStep);
  };

  const handleBack = () => {
    const prevStep = activeStep - 1;

    setActiveStep(prevStep);
  };

  const getStepContent = useMemo(() => {
    switch (activeStep) {
      case 0:
        return <InitialStep />
      case 1:
        return <UserDetails />;
      case 2:
        return "History step"
      case 3:
        return 'Congrats! All steps are done';
      default:
        return 'Unknown step';
    }
  }, [activeStep]);

  return (
    <Fragment>
      <MuiStepper activeStep={activeStep} className={classes.stepper}>
        {steps.map((label) => {
          return (
            <Step key={label}>
              <StepLabel classes={{ root: classes.stepperLabel }}>{label}</StepLabel>
            </Step>
          );
        })}
      </MuiStepper>
      <Fragment>
        <div className={classes.content}>
          <ErrorBoundary fallback="Could not fetch data">
            <Suspense fallback="Loading step...">
              {getStepContent}
            </Suspense>
          </ErrorBoundary>
        </div>
        <div>
          <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
            Back
          </Button>

          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            className={classes.button}
            disabled={activeStep === steps.length - 1}
          >
            Next
          </Button>
        </div>
      </Fragment>
    </Fragment>
  );
}