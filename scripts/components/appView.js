const getUsers = $.ajax({
  async: false,
  method: "post",
  url: "/api/?getUsers",
  dataType: "json",
}).responseJSON.response;

const getProducts = $.ajax({
  async: false,
  method: "post",
  url: "/api/?getProducts",
  dataType: "json",
}).responseJSON.response;

const appView = {
  props: {
    view: {
      required: true,
      type: String,
      default: "products",
    },
  },

  template: `
		<div v-if="view === 'users'">
			<form @click.prevent="addProduct">
				<div class="inputBox">
					<span class="mdi mdi-account-search mdi-24px"></span>
					<input type="text" v-model="search" required />
					<label>search user</label>
				</div>
			</form>

			<table>
				<tr>
					<th>name</th>
					<th>username</th>
					<th>email</th>
					<th>address</th>
					<th>phone</th>
					<th>website</th>
					<th>company</th>
				</tr>
				<tr v-for="user in users">
					<td>{{ user.name }}</td>
					<td>{{ user.username }}</td>
					<td>{{ user.email }}</td>
					<tr v-for="v, k in user.address">
						<td v-if="k != 'geo'">{{ k }}: {{ v }}</td>
					</tr>
					<td>{{ user.phone }}</td>
					<td>
						<a :href="user.website">{{ user.website }}</a>
					</td>
					<tr v-for="v, k in user.company">
						<td>{{ k }}: {{ v }}</td>
					</tr>
				</tr>
			</table>

			<form @click.prevent="addProduct">
				<div class="inputBox">
					<span class="mdi mdi-account mdi-24px"></span>
					<input type="text" v-model="newUser" required />
					<label>username</label>
				</div>
				<input type="submit" />
			</form>
		</div>

		<div v-if="view === 'products'">
			<table>
				<tr>
					<th class="id">nr.</th>
					<th>name</th>
					<th>price</th>
				</tr>
				<tr v-for="item in products">
					<td class="id">{{ item.id }}</td>
					<td>{{ item.name }}</td>
					<td class="price">{{ item.price }} $</td>
				</tr>
				<tr>
					<td></td>
					<td></td>
					<td class="price">{{ total() }} $</td>
				</tr>
			</table>

			<form @click.prevent="addProduct">
				<div class="inputBox">
					<span class="mdi mdi-label mdi-24px"></span>
					<input type="text" v-model="product" required />
					<label>product</label>
				</div>
				<div class="inputBox">
					<span class="mdi mdi-currency-usd mdi-24px"></span>
					<input type="number" v-model="price" required />
					<label>price</label>
				</div>
				<input type="submit" />
			</form>
		</div>
	`,

  methods: {
    addUser() {
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

    searchUser() {
      if (!this.search) {
        return false;
      }
    },

    addProduct() {
      let product = {
        id: this.products.length + 1,
        name: this.product,
        price: this.price,
      };

      if (!(product.name && product.price)) {
        return false;
      }

      let reqInsert = $.ajax({
        async: false,
        method: "post",
        url: "/api/?insertProduct",
        data: product,
        dataType: "json",
      }).responseJSON.response;

      if (reqInsert) {
        this.products.push(product);
        this.product = null;
        this.price = null;
      }
    },

    total() {
      let total = 0;

      for (let i = 0; i < this.products.length; i++)
        total += parseFloat(this.products[i].price);

      return total;
    },
  },

  data() {
    return {
      search: "",
      newUser: "",
      users: getUsers,

      product: "",
      price: "",
      products: getProducts,
    };
  },
};
export default appView;
