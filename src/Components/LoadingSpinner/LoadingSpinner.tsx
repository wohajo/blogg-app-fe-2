import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react'

const LoadingSpinner = () => {

return (
    <div style={{textAlign: "center"}}>
      <CircularProgress color="secondary" />
  </div>
  )
};

export default LoadingSpinner