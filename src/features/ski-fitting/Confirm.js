import {SkierDisposition, SkiStyle, SkiConditions} from './config.js';

const Confirm = ({wizardData, config}) => {
  const skiConditions = wizardData['conditions'] ?
    SkiConditions[wizardData['conditions']].width : '(no conditions entered)'
  const skiStyle = SkiStyle[wizardData['style preference']]

  const weight = wizardData['weight']
  const skierDisposition = SkierDisposition[wizardData['skier disposition']]
  // insert formula for logarithmic scale
  const skierIndex = weight * skierDisposition

  /* calculate indices:
    stiffness: weight, disposition, style and conditions,
       - weight ++, disposition ++, style +/-, conditions +/-
       (styling based on level [and direction] of contribution)
    length: conditions, and weight,
      - conditions ++/--, weight +/-, height?
    width: disposition, conditions, and weight,
      - disposition 0.5 +/-,
    shape: style, conditions
      - slalom, mogul: shaped, downhill, GS: less shape,
      - groomed: more, powder: less, allMountain: medium
  */

const skiModel = () => {
  // match indices to skis
  return "waiting on ski data"
}

  return (
    <form className={`form ${config.name}`} action="">
      <h3>{config.header}</h3>
      <div className="body calculation">stiffness: {skierIndex}, {skiStyle}, {skiConditions}</div>
      <div className="body calculation">length, width: {weight}, {skiConditions}</div>
      <div className="body calculation">shape: {skiStyle}, {skiConditions}</div>
      <hr/>
      <div className="body result">recommendation: {
        skierIndex && skiStyle ?
          skiModel() : <span className="advisement">please enter ski style, weight and skier type</span> }</div>
    </form>
  )
}

export default Confirm
