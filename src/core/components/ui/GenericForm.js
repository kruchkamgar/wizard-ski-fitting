import Select from './Select.js'
import Input from './Input.js'
import PropTypes from 'prop-types'

const GenericForm = ({wizardData, config}) => {
  // store values in wizardData
  const modifyData = (event) => {
    const root = config.contextKey ?
      wizardData[config.contextKey] : wizardData;
    root[event.target.name] = event.target.value }

  const makeAttributes = (props) => {
    return {
      onBlur: (event) => {
        modifyData(event)
        const form = document.querySelector(`form[class*=${config.name}]`)
        form.addEventListener('invalid', (event) =>{
          if(event.target.tagName === 'input') {
            event.preventDefault(); }})
        // document.querySelector(`form[class*='${config.name}']`).requestSubmit()
      },
      ...props } }

  const makeOptions = (options) => {
      return [(<option key={"select"}>(select)</option>)]
        .concat(
          Object.entries(options)
          .map( option => {
            const name = option[0], code = option[1]
            return <option key={name}>{name}</option> }))
  }
  const makeSelect = (select) => {
    return <Select key={select.name}
        name={select.name}
        attributes={makeAttributes(select.attributes)}>
        {makeOptions(select.options)}</Select>
  }

  const makeInput = (input) => {
    // add stored values from wizardData [case: navigate to previous form]
    const value = config.contextKey ?
      wizardData[config.contextKey][input.name] : wizardData[input.name];

    return <Input key={input.name}
      name={input.name}
      attributes={ makeAttributes(input.attributes) }
      defaultValue={value}/> }

  const selects = config.selects ?
    config.selects.map( select => {
      return makeSelect(select) }) :
    [];
  const inputs = config.inputs ?
    config.inputs.map( (input, index) => {
      if(Array.isArray(input)){
        return <div key={index}>
          {input.map(grouped => {
            return makeInput(grouped) })}</div> }
      return makeInput(input) }) :
      [];
  const display = [].concat(inputs, selects)

  return (
    <form key={config.name} className={`form ${config.name}`} action="">
      <h3>{config.header}</h3>
      <div>{display}</div>
    </form>
  )
}

GenericForm.propTypes = {
  wizardData: PropTypes.object.isRequired }

export default GenericForm
