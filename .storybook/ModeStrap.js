import {create} from '@storybook/theming'
import { version } from '../package.json';

export default create({
    base: 'light',
    brandTitle: `ModeStrap v${version}`,
    brandUrl: 'http://localhost:6008/'
});