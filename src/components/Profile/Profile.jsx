import {Block,
     Description,
     Img,
     Location,
     Name,
     Tag,
     StatsList,
     StatsItem,
     Label,
     Quantity } from './Profile.styled';


export const Profile = ({username,
        tag,
        location,
        avatar,
    stats, }) => {
    return (
        <Block>
            <Description>
                <Img
                    src={avatar}
                    alt="User avatar"
                    className="avatar"
                />
                <Name>{username }</Name>
                <Tag>@{tag}</Tag>
                <Location>{location}</Location>
            </Description>

            <StatsList>
                <StatsItem>
                    <Label>Followers</Label>
                    <Quantity>{stats.followers}</Quantity>
                </StatsItem>
                <StatsItem>
                    <Label>Views</Label>
                    <Quantity>{stats.views}</Quantity>
                </StatsItem>
                <StatsItem>
                    <Label>Likes</Label>
                    <Quantity>{stats.likes}</Quantity>
                </StatsItem>
            </StatsList>
        </Block>

    );

}
