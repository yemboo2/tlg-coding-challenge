import type { Meta, StoryObj } from '@storybook/react';

import AddTemplate from './AddTemplate';
import { IAnimalData } from '@/interfaces/animals';

const meta = {
  title: 'Templates/AddTemplate',
  component: AddTemplate,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AddTemplate>;

export default meta;
type Story = StoryObj<typeof AddTemplate>;

const monkeyOption: IAnimalData = {
  name: 'Monkey',
  characteristics: { diet: 'Fruits', weight: '40kg' },
};

const mountainMonkeyOption: IAnimalData = {
  name: 'Mountain Monkey',
  characteristics: { diet: 'Fruits&Insects', weight: '50kg', climbing: 'yes' },
};

export const Add: Story = {
  args: {
    search: () => console.log('search'),
    submit: () => console.log('submit'),
    goBack: () => console.log('goBack'),
    animalOptions: [monkeyOption, mountainMonkeyOption],
  },
};
