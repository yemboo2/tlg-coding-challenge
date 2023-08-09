import type { Meta, StoryObj } from '@storybook/react';

import Rating from './Rating';

const meta = {
  title: 'Atoms/Rating',
  component: Rating,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof Rating>;

export const Ratings: Story = {
  args: {
    rating: 1,
  },
};
