const onAction = (action, step, setStep, end, onComplete) => {
  const WizardAction = { prev: -1, next: 1, end: end}

  if(step + WizardAction[action] === end) { onComplete() }
  else {
    const newStep = (step === 0 && action === "prev") ?
      step : WizardAction[action] + step;
    if(newStep !== step) setStep(newStep) }
}

export default onAction
