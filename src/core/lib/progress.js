export const calcGoal = (steps) => {
  let goal = 0
  for( const step of steps ){
    let fields = step.inputs ? step.inputs : [];
    fields = step.selects ? fields.concat(step.selects) : fields;

    for( const field of fields.flat() ) {
      goal = field.attributes && field.attributes.required ?
        goal + 1 : goal; } }
  return goal }

export const calcProgress = (wizardData, goalMetric) => {
  const objects = [{...wizardData}]
  let tally = [], count = 0
  do {
    for( const [key, value] of Object.entries(objects[count]) ){
      if(typeof value === "object") {
        objects.push(value) }
      else if(value) {
        tally.push(value) } }
    count++
  } while(count !== objects.length)
  const progress = tally.length
  return Math.round( progress*10/goalMetric ) * 10
}
