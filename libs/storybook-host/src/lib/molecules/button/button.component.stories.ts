import { ButtonComponent } from "@alfabitgodoy/button";
import type { Meta, StoryObj } from "@storybook/angular";

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent
}

export default meta;
type Story = StoryObj<ButtonComponent>;


export const PrimaryButton: Story = {
  args: {
    text: 'Action',
    variant: 'primary',
    disabled: false,
    theme: 'blue'
  }
}

export const PrimaryButtonDisabled: Story = {
  args: {
    ...PrimaryButton.args,
    disabled: true
  }
}

export const SecondaryButton: Story = {
  args: {
    ...PrimaryButton.args,
    variant: 'secondary',
    disabled: false
  }
}

export const SecondaryButtonDisabled: Story = {
  args: {
    ...SecondaryButton.args,
    disabled: true
  }
}

export const TertiaryButton: Story = {
  args: {
    ...PrimaryButton.args,
    variant: 'tertiary',
    disabled: false
  }
}

export const TertiaryButtonDisabled: Story = {
  args: {
    ...PrimaryButton.args,
    variant: 'tertiary',
    disabled: true
  }
}



export const PrimaryButtonViolet: Story = {
  args: {
    ...PrimaryButton.args,
    theme: 'violet'
  }
}

export const PrimaryButtonDisabledViolet: Story = {
  args: {
    ...PrimaryButtonDisabled.args,
    theme: 'violet'
  }
}

export const SecondaryButtonViolet: Story = {
  args: {
    ...SecondaryButton.args,
    theme: 'violet'
  }
}

export const SecondaryButtonDisabledViolet: Story = {
  args: {
    ...SecondaryButtonDisabled.args,
    theme: 'violet'
  }
}

export const TertiaryButtonViolet: Story = {
  args: {
    ...TertiaryButton.args,
    theme: 'violet'
  }
}

export const TertiaryButtonDisabledViolet: Story = {
  args: {
    ...TertiaryButtonDisabled.args,
    theme: 'violet'
  }
}
