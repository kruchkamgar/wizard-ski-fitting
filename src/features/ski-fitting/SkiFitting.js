import Wizard from '../../core/components/wizard/Wizard.js'
import SkiOrderTicket from './SkiOrderTicket.js'
import {stepsConfig} from './config.js'

import { useState } from 'react';

const SkiFitting = () => {

  const headerConfig = {skiFitting: 'Ski Fitting Questionnaire', ticket: 'Ski Fitting'}
  const data = { customer:{} }
  const onComplete = () => {
    setDisplay(<SkiOrderTicket header={headerConfig.ticket} data={data}/>)
 }

  const [display, setDisplay] = useState(
    <Wizard steps={stepsConfig} header={headerConfig.skiFitting} wizardData={data} onComplete={onComplete}/> );
  return (
    display
  )
}

export default SkiFitting
