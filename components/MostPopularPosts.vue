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
        <p class="PostText">{{ post.translatedContent }}</p>
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
  watch: {
    '$i18n.locale': function(newLang, oldLang) {
      if (newLang !== oldLang) {
        this.fetchMostPopularPosts();
      }
    }},
  created() {
    this.fetchMostPopularPosts();
  },
  methods: {
    async fetchMostPopularPosts() {
      try {
        const response = await axios.get('http://localhost:6001/postdiscussions/getMost');
        const postsWithTranslations = await Promise.all(response.data.data.map(async (post) => {
          const translatedContent = await this.translateTexts(post.Content);
          return {
            ...post,
            translatedContent,
            fileType: post.File.toLowerCase().endsWith('.mp4') ? 'video' : 'image',
          };
        }));
        this.mostPopularPosts = postsWithTranslations;
      } catch (error) {
        console.error('Error fetching most popular posts:', error);
      }
    }, 
    async translateTexts(message) {
  const langCode = this.$i18n.locale;
  console.log(`Translating to: ${langCode}`);
  const translatedText = await this.translate(message, langCode);
  console.log(`Original: ${message}, Translated: ${translatedText}`);
  return translatedText;
},
    async translate(msg, to) {
    try {
        const response = await axios.post('http://localhost:6001/translate', {
            msg: msg,
            to: to
        });
        // Assuming the translated text is in the response
        console.log(response.data.translation)
        return response.data.translation;
    } catch (error) {
        console.error('Error translating:', error);
        return msg; // Return the original message if translation fails
    }
}
  },
};
</script>

<style scoped>
/* Add any scoped styles here if needed */
</style>
