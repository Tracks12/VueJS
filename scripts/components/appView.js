const onlineUsers = $.ajax({
  async: false,
  method: "post",
  url: "/api?onlineUsers",
  dataType: "json",
}).responseJSON;

const appView = {
  template: `
		<div>
			<form>
				<input type="text" placeholder="username" v-model="search" />
				<input type="submit" value="search" @click.prevent="searchUser" />
			</form>

			<table>
				<tr>
					<th>id</th>
					<th>name</th>
					<th>username</th>
					<th>email</th>
					<th>address</th>
					<th>phone</th>
					<th>website</th>
					<th>company</th>
				</tr>
				<tr v-for="user in users">
					<td>{{ user.id }}</td>
					<td>{{ user.name }}</td>
					<td>{{ user.username }}</td>
					<td>{{ user.email }}</td>
					<tr v-for="v, k in user.address">
						<td v-if="k != 'geo'">{{ k }}: {{ v }}</td>
					</tr>
					<td>{{ user.phone }}</td>
					<td>{{ user.website }}</td>
					<tr v-for="v, k in user.company">
						<td>{{ k }}: {{ v }}</td>
					</tr>
				</tr>
			</table>

			<form>
				<input type="text" placeholder="username" v-model="newUser" />
				<input type="submit" @click.prevent="addUser" />
			</form>

			<table>
				<tr>
					<th>nr.</th>
					<th>name</th>
					<th>price</th>
				</tr>
				<tr v-for="item in products">
					<td>{{ item.id }}</td>
					<td>{{ item.name }}</td>
					<td>{{ item.price }} €</td>
				</tr>
			</table>

			<form>
				<input type="text" placeholder="product" v-model="product" />
				<input type="number" placeholder="price" v-model="price" />
				<input type="submit" @click.prevent="addProduct" />
			</form>
		</div>
	`,

  methods: {
    addUser: function () {
      let newUser = {
        id: this.users.length + 1,
        name: null,
        username: this.newUser,
        email: null,
        address: {
          street: null,
          suite: null,
          city: null,
          zipcode: null,
          geo: {
            lat: 0,
            lng: 0,
          },
        },
        phone: null,
        website: null,
        company: {
          name: null,
          catchPhrase: null,
          bs: null,
        },
      };

      if (!newUser.username) {
        return false;
      }

      this.users.push(newUser);
      this.newUser = null;
    },

    addProduct: function () {
      let product = {
        id: this.products.length + 1,
        name: this.product,
        price: this.price,
      };

      if (!(product.name && product.price)) {
        return false;
      }

      this.products.push(product);
      this.product = null;
      this.price = null;
    },

    searchUser: function () {
      if (!this.search) {
        return false;
      }
    },
  },

  data() {
    return {
      newUser: "",
      users: onlineUsers,

      product: "",
      price: "",
      products: [
        { id: 1, name: "Zalman Z11", price: 52.0 },
        { id: 2, name: "AMD Ryzen 7", price: 347.0 },
        { id: 3, name: "GigaBytes Quantum Z20", price: 77.0 },
      ],
    };
  },
};
export default appView;
