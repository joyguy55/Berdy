import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

const CreateReview = (props) => {
     const options = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={props.close}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onTouchTap={props.close}
      />,
    ]

     return(
      <div>
       <Dialog
         title="Dialog With Actions"
         actions={options}
         modal={true}
         open={props.open}
       >
         Only actions can close this dialog.
       </Dialog>
     </div>
     )

}

export default CreateReview
