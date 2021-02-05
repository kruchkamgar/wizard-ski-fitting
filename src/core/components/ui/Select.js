import {Fragment} from 'react'
const Select = ({attributes, name, defaultValue='', children=[]}) => {

  return (
    <Fragment>
      <label htmlFor={name}>
        {name.charAt(0).toUpperCase()+name.slice(1) }:</label>
      <select key={name}
        name={name}
        {...attributes}
        defaultValue={defaultValue}>
        {children}
      </select>
    </Fragment>
  )
}

export default Select
