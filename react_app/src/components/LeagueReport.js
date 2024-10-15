import React, { useState } from 'react';

import { QueryClient, useQuery, useQueryClient, useMutation } from '@tanstack/react-query'

const LeagueReport = props => {

    // State info for this component.
    const [userData, setUserData] = useState({});
    
    // Query the user's Sleeper username data.
    const { data: userInfo, error: userInfoError, isLoading: userInfoLoading, isSuccess: userInfoSuccess } = useQuery({
      queryKey: ['sleeperUsernameData'],
      queryFn: async () =>
        fetch('https://api.sleeper.app/v1/user/' + props.userName).then((res) =>
          res.json()
        ), 
    });

    if (userInfoLoading) return 'Loading...'

    if (userInfoError) return 'An error has occurred: ' + userInfoError.message

    if (userInfoSuccess) {
      console.log(userInfo.user_id.toString())
    }

    const userId = userInfo?.user_id;

    // Query the user's Avater image after we've queried and gotten their basic user info.
    const { data: avatarImage, status, fetchStatus, error: userAvatarError, isLoading: userAvatarLoading, isSuccess: userAvatarSuccess } = useQuery({
      queryKey: ['sleeperAvatarImage'],
      queryFn: async () =>
        fetch('https://sleepercdn.com/avatars/thumbs/' + userInfo.avatar.toString()).then((res) =>
          res.json()
        ),
      enabled: !!userId,
    });

    if (userAvatarLoading) return 'Loading...'

    if (userAvatarError) return 'An error has occurred: ' + userAvatarError.message

    if (userAvatarSuccess) {
      console.log(avatarImage.toString())
    }

    // Render report info via JSX
    return (
      <div>
        <h2>Sleeper Team Report</h2>
        <p>Username: { userInfo?.username }</p>
      </div>
    );
  }
  
  export default LeagueReport;