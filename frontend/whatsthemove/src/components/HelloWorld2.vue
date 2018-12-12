<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/wtm.png')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Whats the move!
        </h1>
        <p class="subheading font-weight-regular">
          Cant figure out what you want to do tonight?
          <br>Whats the move?!
          <a href="" target="_blank"></a>
        </p>
      </v-flex>

      <v-flex
        mb-5
        xs12
      >
        <h2 class="headline font-weight-bold mb-3">Please Select a Date</h2>

        <v-layout justify-center>
         <template>
          <div>
            <v-layout row wrap>
              <v-flex xs12 sm3>
                
              </v-flex>
              <v-flex xs12 sm3>
                
              </v-flex>
            </v-layout>

            <v-date-picker v-model="picker" :landscape="landscape" :reactive="reactive"></v-date-picker>
          </div>

</template>
          </a>
        </v-layout>
      </v-flex>

      <v-flex
        xs12
        mb-5
      >
        

        <v-layout justify-center>
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-layout>
      </v-flex>

      <v-flex
        xs12
        mb-5
      >
        

        <v-layout justify-center>
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

    export default {
    data () {
      return {
        picker: new Date().toISOString().substr(0, 10),
        landscape: false,
        reactive: false
      }
    }
  }
</script>

<style>

</style>
