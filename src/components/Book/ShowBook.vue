<template>
	<div>
		<h1>Show Book</h1>
		<p>id: {{ book.id }}</p>
		<p>title: {{ book.title }}</p>
		<p>content: {{ book.content }}</p>
		<p>category: {{ book.category }}</p>
		<p>status: {{ book.status }}</p>
		<p>
			<button v-on:click="navigateTo('/book/edit/' + book.id)">
				แก้ไข book
			</button>
			<button v-on:click="navigateTo('/books')">กลั บ</button>
		</p>
	</div>
</template>
<script>
import BooksService from "@/services/BooksService";
export default {
	data() {
		return {
			book: null,
		};
	},
	async created() {
		try {
			let bookId = this.$route.params.blogId;
			this.book = (await BooksService.show(bookId)).data;
		} catch (error) {
			console.log(error);
		}
	},
	methods: {
		navigateTo(route) {
			this.$router.push(route);
		},
	},
};
</script>
<style scoped>
</style>
