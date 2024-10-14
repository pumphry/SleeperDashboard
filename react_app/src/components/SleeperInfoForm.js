import React, { useState } from 'react';

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField' 

const SleeperInfoForm = props => {
  const [formUserName, setFormUserName] = useState("");
  const [formLeagueName, setFormLeagueName] = useState("");

  // Handle Sleeper user info submission button click.
  const handleSleeperUserInfoSubmissionClick = () => {
    props.onUserNameUpdate(formUserName);
    props.onLeagueNameUpdate(formLeagueName);
  };

  return (
    <div>
      <h2>Input Your Sleeper Info</h2>
      <form>
        <TextField id="userNameTxtField" 
                    label="User Name" 
                    variant="outlined" 
                    value={formUserName} 
                    onChange={(e) => setFormUserName(e.target.value)}>
        </TextField>
        <br></br>
        <br></br>
        <TextField id="leagueNameTxtField" 
                    label="League Name" 
                    variant="outlined" 
                    value={formLeagueName} 
                    onChange={(e) => setFormLeagueName(e.target.value)}>
        </TextField>
        <br></br>
        <br></br>
        <Button onClick={handleSleeperUserInfoSubmissionClick}>Generate Report</Button>
      </form>
    </div>
  );
}

export default SleeperInfoForm;