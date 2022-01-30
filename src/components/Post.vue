<template>
  <div class="post">
    <div class="postUserName">
      {{ username }}:
    </div>
    <div class="postContent">
      {{ post }}
    </div>
    <form
    >
      <input
          class="comment"
          type="text"
          placeholder="Ваш комментарий"
          v-model="comment"
      >
      <button
          class="publish"
          type="submit"
          @click="handleClick"
          >
        Опубликовать
      </button>
    </form>
    <ul class="postComments list-group-flush">
      <li
          v-for="comment in postComments"
          :key="comment.id"
          class="list-group-item"
      >
        <strong>Имя пользователя: </strong>
        {{comment.name}}
        <br/>
        <strong>Комментарий: </strong>
        {{comment.body}}
      </li>
    </ul>
  </div>
</template>

<script>
import {fetchPosts} from "../api/fetchPosts";
import {fetchUsers} from "../api/fetchUsers";
import {fetchComments} from "../api/fetchComments";


export default {
  name: "Post",
  data(){
    return{
      posts: [],
      users: [],
      comments: [],
      comment: null,
    }
  },

  computed:{
    postId(){
      const {id} = this.$route.params;
      return +id.slice(1);
    },
    username(){
      const postId = this.postId;
      const posts = this.$data.posts;
      if(posts.length === 0){
        return 'тут будет имя пользователя'
      }
      const targetPost = posts.find(post=> post.id === postId);
      const userId = targetPost.userId;
      const users = this.$data.users;
      const targetUser = users.find(user => user.id === userId);
      return targetUser?.username || 'тут будет имя пользователя';
    },
    post(){
      const postId = this.postId;
      const posts = this.$data.posts;
      if(posts.length === 0){
        return 'тут будет пост'
      }
      const targetPost = posts.find(post=> post.id === postId);
      return targetPost.body;
    },
    postComments(){
      const postId = this.postId;
      const comments = this.$data.comments;
      if(comments.length === 0){
        return 'тут будут комментарии'
      }
      return comments.filter(comment => comment.postId === postId);
    }
  },
  mounted: async function(){
    this.$data.posts = await fetchPosts();
    this.$data.users = await fetchUsers();
    this.$data.comments = await fetchComments();
  },
  methods: {
    async handleClick(){
      const comment = this.$data.comment;
      const commentObj = {
        body: comment,
        postId: this.postId,
        name: 'Unknown',
      }
      const response = fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body:  JSON.stringify(commentObj),
      })
      this.$data.comment = '';
      const newComment = await response.json();

      console.log({newComment})
      this.$data.comments.push(newComment);
    },

  }
}
</script>

<style scoped>
.post{
  margin: 12px;
}
.postUserName{
  font-weight: bold;
}
.publish,
.comment {
  margin-bottom: 1rem;
  width: 100%;
  padding: 0.375rem 2.25rem 0.375rem 0.75rem;
  font-size: 1rem;
  color: #212529;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}
.postComments {
  text-decoration: none;
}
.postContent{
  margin-bottom: 12px;
}
</style>