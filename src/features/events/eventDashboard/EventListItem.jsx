import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Icon, Item, List, Segment } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';
import { deleteEvent } from '../eventAction';

export default function EventListItem({ event }) {
	const dispatch = useDispatch();

	return (
		<Segment.Group>
			<Segment>
				<Item.Group>
					<Item>
						<Item.Image
							size='tiny'
							circular
							src={event.hostPhotoURL}
						/>
						<Item.Content>
							<Item.Header content={event.title} />
							<Item.Description>
								Hosted By {event.hostedBy}
							</Item.Description>
						</Item.Content>
					</Item>
				</Item.Group>
			</Segment>
			<Segment>
				<span>
					<Icon name='clock' /> {event.date}
					<Icon name='marker' /> {event.venue}
				</span>
			</Segment>
			<Segment secondary>
				<List horizontal>
					{event.attendees.map((attendee) => (
						<EventListAttendee
							attendee={attendee}
							key={attendee.id}
						/>
					))}
				</List>
			</Segment>
			<Segment clearing>
				<div>{event.description}</div>
				<Button
					floated='right'
					content='Delete'
					onClick={() => dispatch(deleteEvent(event.id))}
				/>
				<Button
					as={Link}
					to={`/events/${event.id}`}
					color='pink'
					floated='right'
					content='View'
				/>
			</Segment>
		</Segment.Group>
	);
}
