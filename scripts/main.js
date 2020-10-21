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
				<input placeholder="username" type="text" v-model="newUser" />
				<input type="submit" @click.prevent="addUser" />
			</form>

			<table>
				<tr>
					<th>Nr.</th>
					<th>Name</th>
					<th>Price</th>
				</tr>
				<tr v-for="item in products">
					<td>{{ item.id }}</td>
					<td>{{ item.name }}</td>
					<td>{{ item.price }} €</td>
				</tr>
			</table>

			<form>
				<input placeholder="product" type="text" v-model="product" />
				<input placeholder="price" type="number" v-model="price" />
				<input type="submit" @click.prevent="addProduct" />
			</form>
		</div>
	`,

  methods: {
    addUser: function () {
      let newUser = this.newUser;
      if (newUser) {
        this.users.push(newUser);
        this.newUser = null;
      }
    },

    addProduct: function () {
      let product = {
        id: this.products.length + 1,
        name: this.product,
        price: this.price,
      };

      if (product.name && product.price) {
        this.products.push(product);
        this.product = null;
        this.price = null;
      }
    },
  },

  data() {
    return {
      users: ["clément", "jean-marc"],
      newUser: "",
      products: [
        { id: 1, name: "Zalman Z11", price: 52.0 },
        { id: 2, name: "AMD Ryzen 7", price: 347.0 },
        { id: 3, name: "GigaBytes Quantum Z20", price: 77.0 },
      ],
      product: "",
      price: "",
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
