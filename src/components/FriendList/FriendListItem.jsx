import { Item, Status, Avatar, Name } from "./FriendList.styled";

export const FriendListItem = ({ friends }) => {
    return (
        <>
            {friends.map(({ avatar, name, isOnline, id }) => (

                <Item key={id}>
                    <Status>{isOnline}</Status>
                    <Avatar src={avatar} alt="User avatar" width="48" />
                    <Name>{name}</Name>
                </Item>

            ))}
        </>
    );

};