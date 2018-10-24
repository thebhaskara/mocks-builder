
import Broken from "broken";
import _ from "lodash";

import css from "./panel.scss";
import html from "./panel.html";

import Store from "../../utilities/store";



var Panel = function () {
    this.set('selectedComponent', Store);
    this.watch(Store, 'selectedItem', selectedItem => {
        this.set('selectedComponent', selectedItem);
    })
}

Panel.prototype = {
    name: "panel",
    html: html,
    css: css,
    initWatches: {
        addDiv: function () {
            this.add({
                tagName: 'div'
            })
        },
        addButton: function () {
            this.add({
                tagName: 'button',
                text: 'button',
            })
        }
    },
    add: ['selectedComponent', function (selectedComponent, comp) {
        selectedComponent.set('add', comp);
    }]
}

export default Broken.ViewModel.make(Panel);
