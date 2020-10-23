const appNav = {
  template: `
		<ul id="nav-output" class="nav">
			<li v-for="item in items">
				<a :href="item.href" @click="render(item.text)">{{ item.text }}</a>
			</li>
		</ul>
	`,

  methods: {
    render(view) {
      this.view = view;
    },
  },

  data() {
    return {
      view: "users",
      items: [
        {
          text: "users",
          href: "#users",
        },
        {
          text: "products",
          href: "#products",
        },
      ],
    };
  },
};
export default appNav;
