import { FriendListItem } from './FriendListItem';
import {List} from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return (
        <List>  
            <FriendListItem friends={friends} />
        </List>
    );
};

