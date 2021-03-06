import React from 'react';

import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

// import { Button, Welcome } from '@storybook/react/demo';
import store from '../src/store';
import Button from '../src/components/atoms/Button';
import Counter from '../src/components/molecules/Counter';
import Default from '../src/components/templates/Default';

// storiesOf('Welcome', module)
//   .addDecorator(withKnobs)
//   .addDecorator(withInfo({ inline: true }))
//   .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true }))
  .add('with text', () => <Button onClick={action('clicked')}>{text('Label', 'Hello Button')}</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Counter', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true }))
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('Counter', () => <Counter />);

storiesOf('Layout', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true }))
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('Default', () => <Default />);
