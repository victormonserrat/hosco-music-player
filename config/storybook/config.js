import centered from '@storybook/addon-centered';
import { withKnobs } from '@storybook/addon-knobs/react';
import { configure, addDecorator } from '@storybook/react';

const loadStories = () => {
    require('@stories/song/List');
    require('@stories/song/Player');
    require('@stories/song/Table');
};

addDecorator(centered);
addDecorator(withKnobs);
configure(loadStories, module);