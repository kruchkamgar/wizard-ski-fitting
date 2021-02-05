import GenericForm from '../../core/components/ui/GenericForm.js'
import Confirm from './Confirm.js'

const SkierDisposition = {
  relaxed: 1,
  intermediate: 2,
  aggressive: 3 }

const SkiStyle = {
  slalom: 4,
  mogul: 3,
  giantSlalom: 2,
  downhill: 1 }

const SkiConditions = {
  powder: {width: 3},
  groomed: {width: 1},
  allMountain: {width: 2}
}

const stepsConfig = [
  { template: GenericForm,
    name: "getWeight",
    header: "Enter the Approximate Weight for the Skier",
    inputs: [
      { name:"weight",
        attributes: { placeholder: "lbs.", required: true, type: 'number', step:'0.01' } }]
  },
  { template: GenericForm,
    name: "getSnowConditions",
    header: "Enter the Likely Conditions for Ski Usage",
    selects: [
      { name:"conditions",
        options: SkiConditions,
        attributes: { required: true } }]
  },
  { template: GenericForm,
    name: "skierDisposition",
    header: "Enter the Type of Skier",
    selects: [
      { name:"skier disposition",
        options: SkierDisposition,
        attributes: { required: true } },
      { name:"style preference",
        options: SkiStyle,
        attributes: { required: true } }],
    // inputs: [
    //   { name:"skierDisposition",
    //     attributes: { placeholder: "ground (1) or priority (2)", required: true, type: 'number', min: 1, max: 2 } }]
      },
  { template: GenericForm,
    name: "getCustomerAddress",
    contextKey: "customer",
    header: "Enter the Customer's Info",
    inputs: [
      { name:"name",
        attributes: {
          placeholder: "name", required: true, type: 'text', pattern: "[\\w]+ [\\w]+"} },
      [ { name:"street",
        attributes: {
          placeholder: "street address", required: true, type: 'text'} }],
      [ { name:"city",
          attributes: {
            placeholder: "city", required: true, type: 'text' } },
        { name:"state",
          attributes: {
            placeholder: "state", required: true, type: 'text', minLength: "2", maxLength:"2", pattern: "[a-zA-Z]+" } },
        { name:"zip",
          attributes: {
            placeholder: "zip code", required: true, type: 'text', minLength: "5", pattern: "[\\d-]+" } }] ]
  },
  { template: Confirm,
    name: "confirm",
    header: "Confirmation" }
]

export { stepsConfig, SkierDisposition, SkiStyle, SkiConditions}
