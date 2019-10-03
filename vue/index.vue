<!--
Copyright 2018 SpinalCom - www.spinalcom.com
This file is part of SpinalCore.
Please read all of the following terms and conditions
of the Free Software license Agreement ("Agreement")
carefully.
This Agreement is a legally binding contract between
the Licensee (as defined below) and SpinalCom that
sets forth the terms and conditions that govern your
use of the Program. By installing and/or using the
Program, you agree to abide by all the terms and
conditions stated or referenced herein.
If you do not agree to abide by these terms and
conditions, do not demonstrate your acceptance and do
not install or use the Program.
You should have received a copy of the license along
with this file. If not, see
<http://resources.spinalcom.com/licenses.pdf>.
-->


<template>
  <v-app>
    <div class="text-xs-right">
      <v-btn outline
             color="indigo">
        Exporter
      </v-btn>
      <v-btn fab
             dark
             small
             color="primary">
        <v-icon dark>add</v-icon>
      </v-btn>
    </div>
    <br><br>
    <v-data-table :headers="headers"
                  :items="list"
                  class="elevation-1"
                  hide-actions>
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs">{{ props.item.infoSpatial.building.name }}</td>
        <td class="text-xs">{{ props.item.infoSpatial.floor.name }}</td>
        <td class="text-xs">{{ props.item.infoSpatial.room.name }}</td>
      </template>
    </v-data-table>
  </v-app>
</template>

<script>
import {
  SpinalGraphService,
  SpinalNode
} from "spinal-env-viewer-graph-service";
import { tabService } from "spinal-env-viewer-plugin-attributes-tabs-services";
export default {
  name: "my_compo",
  data() {
    return {
      headers: [
        {
          text: "Room",
          align: "left",
          value: "name"
        },
        { text: "Building" },
        { text: "Floor" },
        { text: "Room" }
      ],
      selectedNode: undefined,
      selectedNodeContext: undefined,
      list: []
    };
  },
  components: {},
  methods: {
    opened(option) {
      console.log("upen tabs");
      this.selectedNode = option.selectedNode;
      this.selectedNodeContext = option.context;
      tabService
        .getList(this.selectedNode, this.selectedNodeContext)
        .then(list => {
          console.log(list);
          this.list = list;
        });
    },
    removed(option, viewer) {},
    closed(option, viewer) {}
  }
};
</script>