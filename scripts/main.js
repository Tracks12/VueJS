const appNav = {
  template: `
		<ul id="nav-output" class="nav">
			<li v-for="item in items">
				<a href="{{ item.href }}">{{ item.text }}</a>
			</li>
		</ul>
	`,

  data() {
    return {
      items: [
        {
          text: "home",
          href: "#",
        },
        {
          text: "professional xp",
          href: "#",
        },
        {
          text: "formation",
          href: "#",
        },
        {
          text: "portfolio",
          href: "#",
        },
        {
          text: "about us",
          href: "#",
        },
      ],
    };
  },
};

const appView = {
  template: `
		<div>
			<ul id="user-list">
				<li v-for="user in users">{{ user }}</li>
			</ul>
			<form>
				<input type="text" v-model="newUser" />
				<input type="submit" v-on:click.prevent="addUser" />
			</form>
		</div>
	`,

  methods: {
    addUser: function () {
      if (this.newUser) this.users.push(this.newUser);
    },
  },

  data() {
    return {
      users: ["clément", "jean-marc"],
      newUser: "",
    };
  },
};

$(document).ready(() => {
  const app = Vue.createApp({
    components: {
      "app-nav": appNav,
      "app-view": appView,
    },

    data() {
      return {};
    },
  });

  app.mount("#app");
  //app.unmount();
});
