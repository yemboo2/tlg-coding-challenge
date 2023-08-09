import type { Meta, StoryObj } from '@storybook/react';

import { IAnimal } from '@/interfaces/animals';

import HomeTemplate from './HomeTemplate';

const meta = {
  title: 'Templates/HomeTemplate',
  component: HomeTemplate,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof HomeTemplate>;

export default meta;
type Story = StoryObj<typeof HomeTemplate>;

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

const animals = [elephant, monkey, elephant, monkey];

export const Home: Story = {
  args: {
    animals,
  },
};
