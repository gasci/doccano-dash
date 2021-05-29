<template>
  <v-card>
    <v-card-title>
      {{ $t("projectHome.welcome") }}
    </v-card-title>
    <v-stepper v-model="e6" vertical non-linear>
      <div v-for="(item, index) in filteredItems" :key="index">
        <v-stepper-step :complete="e6 > index + 1" :step="index + 1" editable>
          {{ item.title }}
        </v-stepper-step>
        <v-stepper-content :step="index + 1">
          <v-card
            v-if="e6 === index + 1"
            class="mb-12"
            width="560"
            height="315"
          >
            <youtube ref="youtube" :video-id="item.videoId" />
          </v-card>
          <!-- <v-btn color="primary mt-5" @click="next">
            {{ $t("generic.continue") }}
          </v-btn>
          <v-btn class="mt-5" text @click="prev">
            {{ $t("generic.cancel") }}
          </v-btn> -->
        </v-stepper-content>
      </div>
    </v-stepper>
  </v-card>
</template>

<script>
export default {
  layout: "project",

  data() {
    return {
      e6: 1,
    };
  },

  computed: {
    filteredItems() {
      const items = [
        {
          title: this.$t("projectHome.importData"),
          videoId: "dA4ID1DSxCE",
          adminOnly: true,
        },
        {
          title: this.$t("projectHome.createLabels"),
          videoId: "1bSML270quU",
          adminOnly: true,
        },
        {
          title: this.$t("projectHome.addMembers"),
          videoId: "NI09dcBz-qA",
          adminOnly: true,
        },
        {
          title: this.$t("projectHome.defineGuideline"),
          videoId: "AvvX3Xs32nA",
          adminOnly: true,
        },
        {
          title: this.$t("projectHome.annotateDataset"),
          videoId: "F3XoSdyiMhA",
          adminOnly: false,
        },
        {
          title: this.$t("projectHome.viewStatistics"),
          videoId: "kfRpa0mNQMY",
          adminOnly: true,
        },
        {
          title: this.$t("projectHome.exportDataset"),
          videoId: "Pfy_QcHEeQ4",
          adminOnly: true,
        },
      ]
      return items.filter(item => this.isVisible(item))
    }
  },

  methods: {
    isVisible(item) {
      return !item.adminOnly
    },
    toLabeling() {
      const query = this.$services.option.findOption(this.$route.params.id)
      this.$router.push({
        path: this.localePath(this.link),
        query
      })
    },
    next() {
      this.e6 = Math.max(1, (this.e6 + 1) % (this.items.length + 1));
    },
    prev() {
      this.e6 = Math.max(1, this.e6 - 1);
    },
  },

  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
};
</script>
