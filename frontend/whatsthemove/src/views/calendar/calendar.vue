<template>
  <v-card
    class="mx-auto"
    max-width="fill"
    max-height="fill"
  >
    <v-card
      dark
      flat
    >

      <v-card-title class="pa-2 red">
        <v-btn icon>
          <v-icon>chevron_left</v-icon>
        </v-btn>
        <h3 class="title font-weight-light text-xs-center grow">Calendar</h3>
        <v-btn icon>
          <v-icon>chevron_right</v-icon>
        </v-btn>
      </v-card-title>
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/forest.jpg"
        gradient="to top, rgba(0,0,0,.44), rgba(0,0,0,.44)"
        height="200"
      >
        <v-container fill-height>
          <v-layout align-center>
            <strong class="display-4 font-weight-regular mr-4">{{ format(date, 'D') }}</strong>
            <v-layout column justify-end>
              <div class="headline font-weight-light">{{ format(date, 'dddd') }}</div>
              <div class="text-uppercase font-weight-light">{{ format(date, 'MMMM YYYY') }}</div>
            </v-layout>
          </v-layout>
        </v-container>
      </v-img>
    </v-card>
    <v-card-text class="py-0">
      <v-timeline
        align-top
        dense
      >
        <v-timeline-item
          color="pink"
          large
        >
          <v-layout pt-3>
            <v-flex xs3>
              <strong>5-8pm</strong>
            </v-flex>
            <v-flex>
              <strong>Brickhouse Tavern</strong>
              <div class="caption">1/2 off Pitchers</div>
            </v-flex>
          </v-layout>
        </v-timeline-item>

        <v-timeline-item
          color="teal lighten-3"
          large
        >
          <v-layout wrap pt-3>
            <v-flex xs3>
              <strong>2-9pm</strong>
            </v-flex>
            <v-flex>
<<<<<<< HEAD
              <strong>Brickhouse Tavern</strong>
=======
              <strong>Finnegans Cove</strong>
>>>>>>> de624ec090cb5f54bac376069a1b0f847240bc45
              <div class="caption mb-2">$4 Rail Drinks</div>
            </v-flex>
          </v-layout>
        </v-timeline-item>

        <v-timeline-item
          color="pink"
          large
        >
          <v-layout pt-3>
            <v-flex xs3>
              <strong>6-8pm</strong>
            </v-flex>
            <v-flex>
              <strong>Buffalo Wild Wings</strong>
              <div class="caption">$5 for 20 wings</div>
            </v-flex>
          </v-layout>
        </v-timeline-item>

        <v-timeline-item
          color="teal lighten-3"
          large
        >
          <v-layout pt-3>
            <v-flex xs3>
              <strong>7-9pm</strong>
            </v-flex>
            <v-flex>
              <strong>Gold Crown</strong>
              <div class="caption">First beer is 1¢, the rest are 50¢</div>
            </v-flex>
          </v-layout>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<script>
import { format } from "date-fns";
export default {
  data: () => ({
    date: null
  }),
  methods: {
    format: format
  },
  mounted() {
    let d = this.$route.params.date.split("-");
    this.date = new Date(+d[0], +d[1] - 1, +d[2]);
    console.log(this.$route.params, this.date);
  }
};
</script>
