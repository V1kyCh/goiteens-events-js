import { Event } from "../Event/Event.jsx"

import { List } from "./PageBoard.js"
import { Title } from "./PageBoard.js"

export const PageBoard = ({ data }) => {
    return (
        <section>
            <Title>Upcoming Events</Title>
            <List>
                {data.map(eventData => <Event key={eventData.id} name={eventData.name} start={eventData.time.start} end={eventData.time.end} location={eventData.location} speaker={eventData.speaker} />)}
            </List>
        </section>
    )
}