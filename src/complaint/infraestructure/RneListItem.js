import React, { useState } from 'react';
import { View, StyleSheet, Image, FlatList } from 'react-native';
import {
    Text,
    ListItem,
    Avatar,
    Icon,
    Badge,
    ListItemProps,
    Button,
    Switch,
    lightColors
} from '@rneui/themed';

const log = () => console.log('this is an example method');

type List1Data = {
    title: string;
    icon: string;
};
const list1: List1Data[] = [
    {
        title: 'Appointments',
        icon: 'av-timer',
    },
    {
        title: 'Trips',
        icon: 'flight-takeoff',
    },
    {
        title: 'Passwords',
        icon: 'fingerprint',
    },
    {
        title: 'Pitches',
        icon: 'lightbulb-outline',
    },
    {
        title: 'Updates',
        icon: 'track-changes',
    },
];

type List2Data = {
    name: string;
    avatar_url: string;
    subtitle: string;
    linearGradientColors: string[];
};

const list2: Partial<List2Data>[] = [
    {
        name: 'Amy Farha',
        avatar_url: 'https://uifaces.co/our-content/donated/XdLjsJX_.jpg',
        subtitle: 'Vice President',
        linearGradientColors: ['#FF9800', '#F44336'],
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://uifaces.co/our-content/donated/KtCFjlD4.jpg',
        subtitle: 'Vice Chairman',
        linearGradientColors: ['#3F51B5', '#2196F3'],
    },
    {
        name: 'Amanda Martin',
        avatar_url:
            'https://images.unsplash.com/photo-1498529605908-f357a9af7bf5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=047fade70e80ebb22ac8f09c04872c40',
        subtitle: 'CEO',
        linearGradientColors: ['#FFD600', '#FF9800'],
    },
    {
        name: 'Christy Thomas',
        avatar_url: 'https://randomuser.me/api/portraits/women/48.jpg',
        subtitle: 'Lead Developer',
        linearGradientColors: ['#4CAF50', '#8BC34A'],
    },
    {
        name: 'Melissa Jones',
        avatar_url:
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwMDQ0NDk1OV5BMl5BanBnXkFtZTcwNDcxOTExNg@@._V1_UY256_CR2,0,172,256_AL_.jpg',
        subtitle: 'CTO',
        linearGradientColors: ['#F44336', '#E91E63'],
    },
];

type ListComponentProps = ListItemProps;

const Lists2: React.FunctionComponent<ListComponentProps> = () => {
    const [expanded, setExpanded] = React.useState(false);

    const listItemProps = {};
    const RneListItem = ({ item }: { item: List1Data }) => {
        return (
            <ListItem.Swipeable
                onPress={log}
                bottomDivider
                leftContent={
                    <Button
                        title="Info"
                        icon={{ name: 'info', color: 'white' }}
                        buttonStyle={{ minHeight: '100%' }}
                    />
                }
                rightContent={
                    <Button
                        title="Delete"
                        icon={{ name: 'delete', color: 'white' }}
                        buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                    />
                }
            >
                <Icon name={item.icon} />
                <ListItem.Content>
                    <ListItem.Title>{item.title}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem.Swipeable>
        );
    };
    const [switch1, setSwitch1] = useState(true);
    const [checkbox1, setCheckbox1] = useState(true);
    const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

    return (
       
                        <View style={{ paddingVertical: 8 }}>
                            {list2.map((l, i) => (
                                <ListItem
                                    key={i}
                                    // linearGradientProps={{
                                    //     colors: l.linearGradientColors,
                                    //     start: [1, 0],
                                    //     end: [0.2, 0],
                                    // }}
                                    containerStyle={{
                                        marginHorizontal: 16,
                                        marginVertical: 8,
                                        borderRadius: 8,
                                    }}
                                >
                                    <Avatar rounded source={{ uri: l.avatar_url }} />
                                    <ListItem.Content>
                                        <ListItem.Title
                                            style={{ color: 'black', fontWeight: 'bold' }}
                                        >
                                            {l.name}
                                        </ListItem.Title>
                                        <ListItem.Subtitle style={[{ color: 'black' }]}>
                                            {l.subtitle}
                                        </ListItem.Subtitle>
                                    </ListItem.Content>
                                    <ListItem.Chevron color="white" />
                                </ListItem>
                            ))}
                        </View>

               
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        marginTop: 20,
        borderTopWidth: 1,
        borderColor: lightColors.greyOutline,
    },
    subtitleView: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 5,
    },
    ratingImage: {
        height: 19.21,
        width: 100,
    },
    ratingText: {
        paddingLeft: 10,
        color: 'grey',
    },
});

export default Lists2;