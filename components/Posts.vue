<template>
  <div>
    <AppHeader/>
    <div class="AllPostsContainer">
      <div class="EachPost">
        <img src='../images/Post.png' alt="post">
        <div class="SubEachPost">
          <p class="EachPostTitle">Blockchain developer best practices on innovationchain</p>
          <div class="PostInfo">
            <div class="PostInfoImg">
              <img src='../images/Avatars.png'/>
              <div>
                <p class="PostOwner">Pavel Gvay</p>
                <p class="PostDuration">3 weeks ago</p>
              </div>
            </div>
            <div class="CommentsContainer" @click="openModal">
              <img src='../images/comment.svg' class="CommentImg"/>
              <p class="Comments">comments</p>
            </div>
            <img src='../images/Love.png'/>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div v-if="isModalOpen" class="modal">
        <div class="modalContent">
          <!-- Close button (x) to close the modal -->

          <!-- Your modal content goes here -->
          <div class="CommentContainer">
     <button  @click.stop="closeModal"> <img src='../images/close.svg' class="closeButton"/></button>

            <img src='../images/Avatars.png'/>
            <div class="infoComments">
              <div class="SubinfoComments">
                <p class="PostOwner">Pavel Gvay</p>
                <p class="PostDuration">just now</p>
              </div>
              <p class="CommentContent">Place your text here </p>
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
import AppHeader from './Header.vue'
import Footer from './Footer.vue'
import '../CSS/Posts.css'

export default {
  name: 'ProductsList',
  components: {
    AppHeader,
    Footer,
  },
  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
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
</style>
