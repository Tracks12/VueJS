const appNav = {
  template: `
		<ul id="nav-output" class="nav">
			<li v-for="item in items">
				<a :href="item.href">{{ item.text }}</a>
			</li>
		</ul>
	`,

  data() {
    return {
      items: [
        {
          text: "username",
          href: "#username",
        },
        {
          text: "product",
          href: "#product",
        },
      ],
    };
  },
};
export default appNav;
