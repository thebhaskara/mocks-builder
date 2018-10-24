import _ from 'lodash';
import Broken from 'broken';
import styles from './sass/index.scss';


var common = Broken.ViewModel.create({
    name: 'common',
    css: styles
});

Broken.ViewModel.strap(common);