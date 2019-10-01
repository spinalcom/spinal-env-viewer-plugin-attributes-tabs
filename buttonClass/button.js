import Vue from 'vue';
const {
  SpinalContextApp
} = require('spinal-env-viewer-context-menu-service');
import {
  SpinalGraphService
} from 'spinal-env-viewer-graph-service';
const {
  spinalPanelManagerService,
} = require('spinal-env-viewer-panel-manager-service');
const {
  SpinalForgeExtention,
} = require('spinal-env-viewer-panel-manager-service_spinalforgeextention');
import {
  typeLst
} from "spinal-env-viewer-room-manager/js/service";
const {
  spinalContextMenuService,
} = require('spinal-env-viewer-context-menu-service');
import attributestabs from '../vue/index.vue';
const circularMenuHookName = 'circularMenu';
const SideBarHookName = 'GraphManagerSideBar';
const namePanel = 'panel-attributes-tabs'
////////////////////////////////////////////////////////////////////////////////////////////////////
//                                Attributes Tabs Panel                                           //
////////////////////////////////////////////////////////////////////////////////////////////////////

export const AttributesTabsExtention = SpinalForgeExtention.createExtention({
  name: namePanel,
  vueMountComponent: Vue.extend(attributestabs),
  // toolbar is optional

  panel: {
    title: 'Group List Attributes',
    classname: 'spinal-pannel',
    closeBehaviour: 'remove', // if something else panel is deleted
  },
  style: {
    left: '405px',
    width: '30vh',
    height: '40vh'
  },
  onload: () => { },
  onUnLoad: () => { },
});

export class AttributesTabsutton extends SpinalContextApp {
  constructor() {
    super("Group Informations Tabs", 'Spinal Documentation description', {
      icon: 'toc',
      icon_type: 'in',
      backgroundColor: '#356BAB',
      fontColor: '#FFFFFF',
    });
  }

  isShown(option) {
    // to do : put some restriction to see if the selectedNode is a BIMObject or an element of geographiqueContext
    return Promise.resolve(true)
    // if (option.selectedNode) {
    //   const type = option.selectedNode.type.get();
    //   if (type === "SpinalService" || type === "SpinalContext" || type ===
    //     "dashboardContext" ||
    //     type === "BimFile" ||
    //     type === "scene")
    //     return (Promise.resolve(-1))
    // }
  }

  action(option) {
    // option.paramSent = "hello from DocumentationCircularMenuButton";
    spinalPanelManagerService.openPanel(namePanel, option);
  }
}

SpinalForgeExtention.registerExtention(namePanel, AttributesTabsExtention);
spinalContextMenuService.registerApp(
  SideBarHookName,
  new AttributesTabsutton(),
  [7]
);