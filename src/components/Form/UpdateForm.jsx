import React, { useState } from 'react'
import PropTypes from 'prop-types'

const UpdateForm = ({ classes, actions }) => {
   const [newValue, setNewValue] = useState('')

   const handleUpdate = async () => {
      try {
         const response = await fetch('https://app.artem.monster/api.php', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               table: 'about',
               column: 'title',
               newValue: newValue,
            }),
         })
         actions()
         const data = await response.json()
         console.log(data)
      } catch (error) {
         console.error('Failed to update value', error)
      }
   }

   return (
      <>
         <div className={classes}>
            <input type="text" placeholder="New Value" onChange={(e) => setNewValue(e.target.value)} />
         </div>
         <button
            onClick={handleUpdate}
            className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
         >
            Update Value
         </button>
      </>
   )
}

UpdateForm.propTypes = {
   classes: PropTypes.string,
   actions: PropTypes.func,
}

export default UpdateForm
