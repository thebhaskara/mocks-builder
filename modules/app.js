import Broken from "broken";
import _ from "lodash";

import css from "./app.scss";
import html from "./app.html";

import ControlPanel from "./pages/control-panel";

const App = Broken.ViewModel.create({
    name: 'app',
    html: html,
    css: css
});

App.set('currentPage', new ControlPanel());

Broken.ViewModel.strap(App);