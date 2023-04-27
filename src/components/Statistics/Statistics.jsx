import { Section, Title, List, Item, Point } from './Statistics.styled';

export const Statistics = ({data, title}) => {

    return (
        <Section>

            {title && <Title>{title }</Title>}

            <List>
                {data.map(({id, label, percentage}) => (
                    <Item key={id}>
                        <Point>{label}</Point>
                        <Point>{percentage}</Point>
                    </Item>
                ))}
            </List>
            
        </Section>
    );
};
