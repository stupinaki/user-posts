<template>
  <div class="post">
    <div class="postUserName">
        {{getUsername}}:
    </div>
    <div class="postContent">
        {{getPost}}
    </div>
    <ul class="postComments">
      <li
          v-for="comment in getComments"
          :key="comment.id"
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
    }
  },

  computed:{
    getPostId(){
      const {id} = this.$route.params;
      return +id.slice(1);
    },
    getUsername(){
      const postId = this.getPostId;
      const posts = this.$data.posts;
      if(posts.length === 0){
        return 'тут будет имя пользователя'
      }
      const targetPost = posts.find(post=> post.id === postId);
      const userId = targetPost.userId;
      const users = this.$data.users;
      const targetUser = users.find(user => user.id === userId);
      return targetUser.username;
    },
    getPost(){
      const postId = this.getPostId;
      const posts = this.$data.posts;
      if(posts.length === 0){
        return 'тут будет пост'
      }
      const targetPost = posts.find(post=> post.id === postId);
      return targetPost.body;
    },
    getComments(){
      const postId = this.getPostId;
      const comments = this.$data.comments;
      if(comments.length === 0){
        return 'тут будут комментарии'
      }
      const commentsArr = comments.filter(comment => comment.postId === postId);
      return commentsArr.map(comment => {
        return {
          name: comment.name,
          body: comment.body,
          id: comment.id,
        }
      })
    }
  },
  mounted: async function(){
    this.$data.posts = await fetchPosts();
    this.$data.users = await fetchUsers();
    this.$data.comments = await fetchComments();
  },
}
</script>

<style scoped>
.post{
  margin: 12px;
}
.postUserName{
  font-weight: bold;
}
</style>