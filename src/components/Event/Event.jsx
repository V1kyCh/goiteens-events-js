import PropTypes from 'prop-types';

import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";

import { Item } from './Event';
import { Text } from './Event';
import { TextRainbow } from './Event';
import { SmallList } from './Event';
import { SmallListItem } from './Event';
import { WiTime12 } from "react-icons/wi";

export const Event = ({ name, start, end, location, speaker }) => {
    return (
        <Item>
            <TextRainbow>{name}</TextRainbow>
            <Text> <CiLocationOn /> {location}</Text>
            <Text>{speaker} </Text>
            <SmallList>
                <SmallListItem>
                    <span>
                        <IoMdTime />
                    </span>
                    <Text>{start}</Text>
                </SmallListItem>
                <SmallListItem>
                    <span>
                        <WiTime12 />
                    </span>
                    <Text>{end}</Text>
                </SmallListItem>
            </SmallList>
        </Item>
    )
}

// Event.propTypes = {
//     name: PropTypes.
// }