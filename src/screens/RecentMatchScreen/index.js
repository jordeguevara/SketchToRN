import React from 'react';
import {RecentMatchList} from '../../components/RecentMatchList';
import {useFetch} from '../../hooks';
import {token, extractBusinessData, getNestedProperty} from '../../util';
const RecentMatchesScreen: () => React$Node = () => {
  let matchData = [];
  let url =
    'https://profile.callofduty.com/papi-client/crm/cod/v2/title/mw/platform/psn/gamer/smackmeister/matches/days/50';
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Cookie: token,
    },
  };
  const {result, hasError} = useFetch(url, {}, config);
  const value = getNestedProperty(result, 'data', 'matches');
  if (value) {
    matchData = extractBusinessData(value);
  } else if (hasError) {
    console.log('error occured'); // proper error handling could go here
  }

  return <RecentMatchList matchData={matchData} />;
};

export default RecentMatchesScreen;
