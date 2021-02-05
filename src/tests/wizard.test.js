import onAction from '../core/components/wizard/onAction.js'

const end = 2, onComplete = ()=>{}

test('step responds to onAction', () => {
  let step = 0, setStep = (newStep) => step = newStep
  let action = "next"

  onAction(action, step, setStep, end, onComplete)
  expect(step).toStrictEqual(1)

  action = "prev"
  onAction(action, step, setStep, end, onComplete)
  expect(step).toStrictEqual(0)
})

test('step resists negative values', () => {
  let step = 0, setStep = (newStep) => step = newStep
  const action = "prev";

  onAction(action, step, setStep, end, onComplete)
  expect(step).toStrictEqual(0)
})
