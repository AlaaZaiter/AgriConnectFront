<template>
  <div>
    <AppHeader/>
    <div class="AllPostsContainer">
      <div v-for="post in posts" :key="post.id" class="EachPost">
        <img :src="post.File" alt="post" class="postImage">

        <div class="SubEachPost">
          <p class="EachPostTitle">post.Title</p>
          <p class="EachPostContent">{{ post.Content }}</p>
          <div class="PostInfo">
            <div class="PostInfoImg">
              <img src='../images/Avatars.png'/>
              <div>
                <p class="PostOwner">Pavel Gvay</p>
                <p class="PostDuration">{{post.created_at}}</p>
              </div>
            </div>
            <div class="CommentsContainer" @click="openModal(post.id)">
              <img src='../images/comment.svg' class="CommentImg"/>
              <p class="Comments"> comments</p>
            </div>
            <img src='../images/Love.png'/>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div v-if="isModalOpen" class="modal">
        <div class="modalContent">
          <button @click.stop="closeModal">
            <img src='../images/close.png' class="closeButton"/>
          </button>

          <div class="CommentContainer" v-for="comment in Comments" :key="comment.id" >
            <img src='../images/Avatars.png'/>
            <div class="infoComments">
              <div class="SubinfoComments">
                <p class="PostOwner">Pavel Gvay</p>
                <p class="PostDuration">{{comment.created_at}}</p>
              </div>
              <p class="CommentContent">{{ comment.content }}</p>
            </div>
          </div>
          <section class="AddCommentSection">
            <form>
              <input type="text" placeholder="send your comment"/>
              <button>
                <img src='../images/Send.png'/>
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import axios from 'axios';
import AppHeader from './Header.vue';
import Footer from './Footer.vue';
import '../CSS/Posts.css';
import { getUserID } from "../Util/Userdata.js";

export default {
  name: 'ProductsList',
  components: {
    AppHeader,
    Footer,
  },
  data() {
    return {
      isModalOpen: false,
      posts: [],
      Comments: [],
      userId: null, // hardcoded value
    };
  },
  async created() {
    await this.fetchId();
    this.fetchPosts();
  },
  methods: {
    openModal(PostId) {
      if (this.userId === null) {
        alert('You cannot interact without logging in.');
      } else {
        this.isModalOpen = true;
        this.fetchComments(PostId);
        console.log(this.userId +"")
      }
    },
    
    async fetchId() {
  this.userId = await getUserID();
  console.log("User ID after fetch:", this.userId); // This should log the fetched ID
}
,
    closeModal() {
      this.isModalOpen = false;
    },
    async fetchPosts() {
      try {
        const response = await axios.get('http://localhost:6001/post/getAll');
        this.posts = response.data.data;
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    },
    async fetchComments(postId) {
      const api = 'http://localhost:6001/postdiscussions/getByPostID/' + postId;
      try {
        const response = await axios.get(api);
        this.Comments = response.data.data;
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    },
  },
};
</script>


<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.modalContent {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.infoComments {
  display: flex;
  flex-direction: column;
}

.SubinfoComments {
  display: flex;
  flex-direction: row;
}

.CommentContent {
  font-family: Arial, Helvetica, sans-serif;
  font-size: small;
  margin-left: 5px;
  margin-top: 10px;
}

.CommentContainer {
  width: 30%;
  display: flex;
  flex-direction: row;
  box-shadow: 0 4px 8px;
  /* Box shadow */
  border-radius: 10px;
  padding:5px;
  margin-bottom: 15px;
}

.AddCommentSection {
  border: 2px solid #355e3b;
  width: 30%;
  display: flex;
  justify-content: center;
  align-self: center;
  border-radius: 10px;   
  margin-top: 30px;
}

input {
  border: none;
  text-align: center;
  
}
form{
      display:flex;
justify-content:center;
}

.closeButton {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 18px;
  background: none;
  border: none;
  cursor: pointer;
  color: #000; 
  width:50px;
  height:50px;
}
.postImage{
  width: 25%;
  display: flex;
justify-content: center;
align-self: center;
  margin-right: 8px;
  border-radius: 10px;
  height: 200px;
}
</style>
