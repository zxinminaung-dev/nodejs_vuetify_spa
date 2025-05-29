
window.About = {
  template: `
        <v-col cols="12" :elevation="2">
          <v-card>
            <v-card-title>{{ title }}</v-card-title>
            <v-card-subtitle>{{ description }}</v-card-subtitle>
            <v-card-text>
              <v-data-table :items="userList"></v-data-table>
            </v-card-text>
          </v-card>
        </v-col>
  `,
  data() {
    return {
      title: "About Page",
      description: "Welcome to the about page!",
      userList: []
    };
  },
  created() {
    this.GetUserList();
  },
  methods: {
    GetUserList() {
      axios.get('https://nodejsvuetifyspa-production.up.railway.app/api/user')
        .then(response => {
          this.userList = response.data;
        })
        .catch(error => {
          console.error("There was an error fetching the user list!", error);
        });
    }
  },
};
