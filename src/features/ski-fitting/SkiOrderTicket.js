import {Fragment} from 'react'
const SkiOrderTicket = ({data={}, header}) => {

  const {name, street, city, state, zip} = data.customer;

  return (
    <Fragment>
      <div className="ticket">
        <h1>{header}</h1>
        <div className="customer">
          <h3>Customer</h3>
          <div className="body">name: {name}</div>
          <div className="body">street: {street}</div>
          <div className="body">city: {city}</div>
          <div className="body">state: {state}</div>
          <div className="body">zip code: {zip}</div>
        </div>
        <div className="skierOption">
          <h4>Skier Options</h4>
          <div className="body">ski option: {data.skierOption}</div>
        </div>
      </div>
    </Fragment>
  )
}

export default SkiOrderTicket
