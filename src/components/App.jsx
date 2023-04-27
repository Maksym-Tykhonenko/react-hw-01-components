import { Profile } from "./Profile/Profile";
import user  from './data/user.json';

import { Statistics } from './Statistics/Statistics';
import data from './data/data.json';

import {FriendList } from './FriendList/FriendList';
import friends from './data/friends.json';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './data/transactions.json';

import { Block } from './App.styled';



export const App = () => {
  return (
    <Block>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar }
        stats={user.stats} />
      
      <Statistics data={data} title="Upload Stats" />

      <FriendList friends={friends} />
      
      <TransactionHistory items={transactions } />
    </Block>
  );
};
