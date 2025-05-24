
window.Home = {
  template: `
    <v-col cols="12">
      <v-card class="mt-4" :elevation="2">
        <v-card-title>{{ title }}</v-card-title>
        <v-card-subtitle>{{ welcomeMessage }}</v-card-subtitle>
        <v-card-text>
        <v-row>
          <v-col cols="12">
            <p>Current count: {{ count }}</p>
          </v-col>
        </v-row>
         <v-row>
          <v-col cols="12">
            <v-btn @click="changeMessage" color="primary">Click me to change count</v-btn>
          </v-col>
        </v-row>
          
        </v-card-text>
      </v-card>
    </v-col>
  `,
  data() {
    return {
      title: "Home Page",
      count:0,
      welcomeMessage: "Welcome to the home page!"
    };
  },
  methods: {
    changeMessage() {
      this.count++;
    }
  }
};
