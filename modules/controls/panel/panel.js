
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
        },
        addClass: function () {
            Store.set('addClass', {
                name: this.get('className'),
                content: this.get('classProps'),
            })
            this.set('className', '')
            this.set('classProps', '')
        },
        applyClasses: function () {
            this.applyClasses();
        }
    },
    add: ['selectedComponent', function (selectedComponent, comp) {
        selectedComponent.set('add', comp);
    }],
    applyClasses: ['selectedComponent', "classes", "content", function (selectedComponent, classes, content) {
        selectedComponent.set('config.classes', classes.split(/[ ,.]+/));
        selectedComponent.set('config.text', content || '');
    }],
}

export default Broken.ViewModel.make(Panel);
