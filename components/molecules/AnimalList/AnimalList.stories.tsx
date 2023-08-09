import type { Meta, StoryObj } from '@storybook/react';

import { IAnimal } from '@/interfaces/animals';

import AnimalList from './AnimalList';

const meta = {
  title: 'Molecules/AnimalList',
  component: AnimalList,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AnimalList>;

export default meta;
type Story = StoryObj<typeof AnimalList>;

const elephant: IAnimal = {
  name: 'Elephant',
  rating: 5,
  features: { big: true, grey: false, 'long nose': true },
};

const monkey: IAnimal = {
  name: 'Monkey',
  rating: 2,
  features: { climbing: true, brown: false, 'eats bananas': false },
};

export const List: Story = {
  args: {
    animals: [elephant, monkey, elephant, monkey],
  },
};
