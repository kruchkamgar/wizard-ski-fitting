import {Fragment} from 'react'
const Input = ({attributes, name, defaultValue=''}) => {

  return (
    <Fragment>
      <label htmlFor={name}>{ name.charAt(0).toUpperCase()+name.slice(1) }:</label>
      <input
        {...attributes}
        name={name}
        defaultValue={defaultValue}/>
    </Fragment>
  )
}

export default Input
