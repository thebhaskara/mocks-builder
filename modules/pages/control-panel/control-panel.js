
import Broken from "broken";
import _ from "lodash";

import css from "./control-panel.scss";
import html from "./control-panel.html";

import GetHtmlItem from "../../controls/html-item";
import Panel from "../../controls/panel";
import Store from "../../utilities/store";

var ControlPanel = function () {

    this.set('panel', new Panel());

    this.watch(Store, 'add', component => {
        let items = this.get('htmlItems') || [];
        let item = GetHtmlItem(component);
        items.push(item);
        this.set('htmlItems', items);
        item.set('config', component);
    })
}

ControlPanel.prototype = {
    name: "control-panel",
    html: html,
    css: css,
    initWatches: {}
}

export default Broken.ViewModel.make(ControlPanel);
