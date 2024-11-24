import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from '@alfabitgodoy/input';

const meta: Meta<InputComponent> = {
  component: InputComponent,
};
export default meta;
type Story = StoryObj<InputComponent>;

export const Primary: Story = {
  args: {
    multiline: false,
    label: '',
    id: '',
    disabled: false
  },
};

export const PrimaryDisabled: Story = {
  args: {
    ...Primary.args,
    disabled: true
  },
};

export const PrimaryWithLabel: Story = {
  args: {
    ...Primary.args,
    label: 'Label',
    id: '1'
  },
};

export const PrimaryWithLabelDisabled: Story = {
  args: {
    ...PrimaryWithLabel.args,
    disabled: true
  },
};

export const Multiline: Story = {
  args: {
    ...Primary.args,
    multiline: true
  },
};

export const MultilineWithLabel: Story = {
  args: {
    ...Multiline.args,
    label: 'Label',
    id: '2'
  },
};

export const MultilineWithLabelDisabled: Story = {
  args: {
    ...MultilineWithLabel.args,
    disabled: true
  },
};
