import React, { useState } from 'react'

type Props = {}

const ToggleButton = (props: Props) => {
    const [on, setOn] = useState(false);
  return (
    <button onClick={() => setOn(!on)}> 
        {on ?"ON": "OFF"}
    </button>
  )
}

export default ToggleButton