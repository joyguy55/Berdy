import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import { RadioButton } from 'material-ui/RadioButton'
import { Link } from 'react-router'
import './style.scss'

class ReviewFormSub extends React.Component {
 constructor(){
  super()
  this.state = {
    nada: '',
    dataSource: []
  }
 }

render() {
 return(
  <div className="form-wrapper-two">
   <TextField
      className="review"
      hintText="Start writing your review here."
      multiLine={true}
      rows={1}
      rowsMax={4}
    />
   <div className="ranker">
      <Checkbox
        className="checkbox"
        checkedIcon={<i className="material-icons">star_rate</i>}
        uncheckedIcon={<i className="material-icons">star_rate</i>}
      />
      <Checkbox
        className="checkbox"
        checkedIcon={<i className="material-icons">star_rate</i>}
        uncheckedIcon={<i className="material-icons">star_rate</i>}
      />
      <Checkbox
        className="checkbox"
        checkedIcon={<i className="material-icons">star_rate</i>}
        uncheckedIcon={<i className="material-icons">star_rate</i>}
      />
      <Checkbox
        className="checkbox"
        checkedIcon={<i className="material-icons">star_rate</i>}
        uncheckedIcon={<i className="material-icons">star_rate</i>}
      />
      <Checkbox
        className="checkbox"
        checkedIcon={<i className="material-icons">star_rate</i>}
        uncheckedIcon={<i className="material-icons">star_rate</i>}
      />
   </div>
   <RadioButton
      value="light"
      label="Spoiler"
      className="spoiler-btn"
    />
   <div className="btn-wrapper">
     <Link to="/add"><RaisedButton className="back-btn" label="Back" /></Link>
     <Link to="/"><RaisedButton className="submit-btn" label="Submit" /></Link>
   </div>
  </div>
 )
}

}

export default ReviewFormSub
