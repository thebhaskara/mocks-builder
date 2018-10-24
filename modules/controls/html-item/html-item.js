
import Broken from "broken";
import _ from "lodash";

import css from "./html-item.scss";
import html from "./html-item.html";

import Store from "../../utilities/store";

let tagNameRegex = new RegExp("tagName", "g");
let HtmlItemByTagName = {};

let GetHtmlItem = function (component) {
    let tagName = (component && component.tagName) || 'div';
    let Item = HtmlItemByTagName[tagName];
    if (!Item) {

        var HtmlItem = function () {
            this.watch(Store, 'selectedItem', selectedItem => {
                this.set('classes.selected', this._id == selectedItem._id);
            })
        }

        HtmlItem.prototype = {
            name: [tagName, "item"].join('-'),
            html: html.replace(tagNameRegex, tagName),
            css: css,
            initWatches: {
                'config.text': function (text) {
                    if (text) {
                        this.set('text', text);
                    }
                },
                'clicked': function (event) {
                    event.stopPropagation();
                    Store.set('selectedItem', this);
                },
                'add': function (comp) {
                    let items = this.get('items') || [];
                    let item = GetHtmlItem(comp);
                    items.push(item);
                    this.set('items', items)
                    item.set('config', comp);
                }
            }
        }

        Item = HtmlItemByTagName[tagName] = Broken.ViewModel.make(HtmlItem);
    }

    let item = new Item();
    // item.set('config', component);
    return item;
};

export default GetHtmlItem;