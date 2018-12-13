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
            <strong class="display-4 font-weight-regular mr-4">14</strong>
            <v-layout column justify-end>
              <div class="headline font-weight-light">Friday</div>
              <div class="text-uppercase font-weight-light">December 2018</div>
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
              <strong>Finnegans Cove</strong>
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
