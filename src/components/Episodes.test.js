import React from 'react';
import { render } from '@testing-library/react';
import Episodes from './Episodes';

test('rendering without any episodes at all', () => {
	render(<Episodes episodes={[]} />);
});

test('it renders list of the episodes', () => {
	const mockEpisode = [
		{ id: 'id909342', name: 'Chapter Two: Trick or Treat, Freak' },
	];
	const { queryAllByText, rerender } = render(<Episodes episodes={[]} />);

	let allEpisodes = queryAllByText(/season/i);
	expect(allEpisodes).toHaveLength(0);

	rerender(<Episodes episodes={mockEpisode} />);
	allEpisodes = queryAllByText(/season/i);
	expect(allEpisodes).toHaveLength(1);
});