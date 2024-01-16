<template>
  <div id="MostPopularPostsContainer">
    <p class="PostsTitle">Most Popular Posts</p>
    <div class="SubPostsContainer">
      <div v-for="post in mostPopularPosts" :key="post.id">
        <template v-if="post.fileType === 'image'">
          <img :src="post.File" alt="Post Image/Video" class="PostsImg" />
        </template>
        <template v-else-if="post.fileType === 'video'">
          <video controls :src="post.File" alt="Post Image/Video" class="PostsImg"></video>
        </template>
        <p class="PostTitle"> Title</p>
        <p class="PostText">{{ post.Content }}</p>
        <p class="discussionNumber">{{ post.DiscussionCount }} discussions</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import '../CSS/MostPopularPosts.css';


export default {
  name: 'MostPopularPostsContainer',
  data() {
    return {
      mostPopularPosts: [],
    };
  },
  created() {
    this.fetchMostPopularPosts();
  },
  methods: {
    async fetchMostPopularPosts() {
      try {
        const response = await axios.get('http://localhost:6001/postdiscussions/getMost');
        console.log(response)
        this.mostPopularPosts = response.data.data.map(post => ({
          ...post,
          fileType: post.File.toLowerCase().endsWith('.mp4') ? 'video' : 'image',
        }));
      } catch (error) {
        console.error('Error fetching most popular posts:', error);
      }
    },
  },
};
</script>

<style scoped>
/* Add any scoped styles here if needed */
</style>
