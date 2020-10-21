const appNav = {
  template: `
		<ul id="nav-output" class="nav">
			<li v-for="item in items">
				<a href="#">{{ item.text }}</a>
			</li>
		</ul>
	`,

  data() {
    return {
      items: [
        {
          text: "username",
          href: "#",
        },
        {
          text: "product",
          href: "#",
        },
        {
          text: "search",
          href: "#",
        },
      ],
    };
  },
};
export default appNav;
