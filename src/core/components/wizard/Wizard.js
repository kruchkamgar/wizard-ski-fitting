import ButtonNavigation from '../ui/ButtonNavigation.js'
import onAction from './onAction.js';
import {calcGoal, calcProgress} from '../../lib/progress.js'

import { useState, useMemo } from 'react'
import CombinedCircularProgress from '../ui/CombinedCircularProgress.js'
import PropTypes from 'prop-types'

const Wizard = ({header={}, steps=[], wizardData={}, onComplete=()=>{} }) => {
  const end = steps.length
  const [step, setStep] = useState(0)
  const actionParams = [step, setStep, end, onComplete]
  // const [stepComponent, setStepComponent] = useState(null)

  const goalMetric = useMemo(() => { return calcGoal(steps) }, [steps])
  const progress = calcProgress(wizardData, goalMetric)

  //TODO: add function to store values from form into data upon [clicking] navigation

  // const initializeComponent = (Component, data) => {
  //   const InitializedComponent = Component && data ?
  //     <Component data={data}/> : null;
  //   return InitializedComponent }

  // useEffect(() => {
    // setStepComponent(steps[step])
      // StepComponent = initializeComponent(stepComponent, wizardData)
  // }, [step, steps])

  // const StepComponent = initializeComponent(steps[step], wizardData)

  const StepComponent = steps[step].template

  // const display = StepComponent ? <StepComponent data={wizardData}/>
  //    : <div>StepComponent</div>;

  const displayStep = StepComponent ?
    <StepComponent config={steps[step]} wizardData={wizardData}/> : <div>StepComponent</div>;

  return (
    <div className="wizard">
      <div className="header">
        <h1>{header}</h1>
        <CombinedCircularProgress value={progress}/> {/* calculate progress as percentage of required data elements (derived from config file) */}
      </div>
      {displayStep}
      <ButtonNavigation onAction={onAction} actionParams={actionParams}/>
    </div>
  )
}

Wizard.propTypes = {
  header: PropTypes.string.isRequired, // felt short on reasons to use a function for header
  steps: PropTypes.array.isRequired,
  wizardData: PropTypes.object.isRequired,
  onComplete: PropTypes.func.isRequired
};

export default Wizard
