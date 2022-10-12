<template>
	<div class="center">
		<h2>Get all books</h2>
		<p><button v-on:click="logout">Logout</button></p>
		<h4>จํานวน book {{ books.length }}</h4>
		<p><button v-on:click="navigateTo('/book/create')">สร้าง book</button></p>
		<div v-for="book in books" v-bind:key="book.id">
			<p>id: {{ book.id }}</p>
			<p>title: {{ book.title }}</p>
			<p>content: {{ book.content }}</p>
			<p>category: {{ book.category }}</p>
			<p>status: {{ book.status }}</p>
			<p>
				<button v-on:click="navigateTo('/book/' + book.id)">ดู book</button>
				<button v-on:click="navigateTo('/book/edit/' + book.id)">
					แก้ไข book
				</button>
				<button v-on:click="deleteBook(book)">ลบข้อมูล</button>
			</p>
			<hr />
		</div>
	</div>
</template>
<script>
import BooksService from "@/services/BooksService";
export default {
	data() {
		return {
			books: [],
		};
	},
	async created() {
		this.books = (await BooksService.index()).data;
	},
	methods: {
		logout() {
			this.$store.dispatch("setToken", null);
			this.$store.dispatch("setBlog", null);
			this.$router.push({
				name: "login",
			});
		},
		navigateTo(route) {
			this.$router.push(route);
		},
		async deleteBook(blog) {
			let result = confirm("Want to delete?");
			if (result) {
				try {
					await BooksService.delete(book);
					this.refreshData();
				} catch (err) {
					console.log(err);
				}
			}
		},
		async refreshData() {
			this.books = (await BooksService.index()).data;
		},
	},
};
</script>
<style scoped>
center{
	margin-left: 20px;
}
</style>
