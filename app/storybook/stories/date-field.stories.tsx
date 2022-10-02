import React from 'react';
import  { DateField } from "lib-ui";

export default {
  title: 'Example/DateField',
  component: DateField,
  argTypes: {
    label: 'label',
    error: 'error',
    value: new Date(),
    onChange: (v: Date) => {}
  },
};

const Template = (args) => <DateField {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'lala',
  error: 'error',
  value: new Date(),
  onChange: (v: Date) => {}
};
