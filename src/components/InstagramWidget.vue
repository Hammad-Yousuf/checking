<template>
  <div>
    <div class="editor-content instagram-widget " :class="{'dark': editor.styles.theme === 'dark'}">
      <div v-if="profileFetchState === 'fetching' || profileFetchState === 'error'" class="fetch_loader">
        <b-spinner v-if="profileFetchState === 'fetching'"></b-spinner>
        <h3 v-if="profileFetchState === 'error'" class="error_fetching">{{ profileFetchMessage }}</h3>
      </div>
      <div v-if="profileFetchState === '' || profileFetchState === 'success'">
        <div v-if="posts_type === 'profile'">
          <div v-if="editor.layout.show_profile_details">
            <div :style="{ backgroundColor: editor.styles.header_bg, color: editor.styles.header_text }"
                 class="profile_details_container">
              <div class="profile_details_left">
                <div v-if="editor.layout.profile_details.profile_image"
                     class="profile_picture_container rounded rounded-circle">
                  <img
                      :src="(profile.profile_picture_url) ? profile.profile_picture_url : '/images/widget-layouts/profile.jpg'"
                      class="profile_picture">
                </div>
                <div class="profile_names_container">
                  <div class="username_container">
                    <h3 v-if="editor.layout.profile_details.name" class="name"
                        :style="{ color: editor.styles.header_text }">{{ profile.name }}</h3>
                  </div>
                  <div class="username_container">
                    <h3 v-if="editor.layout.profile_details.username" class="username"
                        :style="{ color: editor.styles.header_text }">
                      {{ profile.username }}
                    </h3>
                  </div>

                </div>
              </div>
              <div class="profile_insights_container">
                <p v-if="editor.layout.profile_details.post_count" class="insight_count_tag"
                   :style="{ color: editor.styles.header_text }">
                  <strong class="post_count" :style="{ color: editor.styles.header_text }">{{
                      profile.media_count
                    }}</strong>
                  posts
                </p>
                <p v-if="editor.layout.profile_details.followers" class="insight_count_tag"
                   :style="{ color: editor.styles.header_text }">
                  <strong class="followers_count"
                          :style="{ color: editor.styles.header_text }">{{ profile.followers_count }}</strong>
                  followers
                </p>
                <p v-if="editor.layout.profile_details.following" class="insight_count_tag"
                   :style="{ color: editor.styles.header_text }">
                  <strong class="following_count" :style="{ color: editor.styles.header_text }">{{
                      profile.follows_count
                    }}</strong>
                  following
                </p>
              </div>
              <div class="follow_button_container">
                <button v-if="editor.layout.profile_details.follow_button" class="follow_button"
                        @click="redirectToProfile"
                        :style="{ backgroundColor: editor.styles.follow_button_bg, color: editor.styles.follow_button_text }">
                  <i class="uil uil-instagram"></i> Follow
                </button>
              </div>
            </div>
          </div>
        </div>
        <div v-if="editor.layout.layoutStyle === 'grid'" class="posts_container grid_layout_posts_container"
             :style="{
                gridTemplateColumns: `repeat(${editor.layout.columns}, 1fr)`,
                gap: editor.layout.padding + 'px',
              }">
          <div v-for="post in visiblePosts" :key="post.id" class="post image_card" @click="post_action(post)">
            <div v-if="editor.post_style.post_style === 'image_card' && post.media_url">
              <div class="media_wrapper">
                <i class="media_icon"
                   :class="{'uil uil-play': post.media_type === 'VIDEO', 'uil uil-layers': post.media_type == 'CAROUSEL_ALBUM' }"></i>
                <img v-if="post.media_type === 'IMAGE' && post.media_product_type === 'FEED'" :src="post.media_url"
                     class="post_image" alt="Post image">
                <img v-else-if="post.media_type === 'IMAGE'" :src="post.media_url" class="post_image"
                     alt="Post image">
                <img v-else-if="post.media_type === 'CAROUSEL_ALBUM'" :src="post.media_url" class="post_image"
                     alt="Post image">

                <video v-if="post.media_type === 'VIDEO' && post.media_product_type === 'REELS'"
                       :src="post.media_url" class="post_image"></video>
                <video v-else-if="post.media_type === 'VIDEO'" :src="post.media_url" class="post_image"></video>
              </div>
              <div class="post_insights_container">
                          <span class="d-flex gap-5">
                            <p class="post_like">
                              <i class="uil uil-heart-alt"></i>{{ post.like_count }}
                            </p>
                            <p class="post_like ml-3">
                              <i class="uil uil-comment"></i>{{ post.comments_count }}
                            </p>
                          </span>
              </div>
            </div>
            <div v-if="editor.post_style.post_style === 'expanded' && post.media_url"
                 :key="post.id"
                 class="post expanded">
              <div class="post_header justify-content-between align-items-center">
                <div class="d-flex justify-content-start align-items-center">
                  <div v-if="editor.post_style.post_details.profile_image" class="profile_image_container">
                    <img
                        :src="(profile.profile_picture_url) ? profile.profile_picture_url : '/images/widget-layouts/profile.jpg'"
                        :alt="profile.name" class="profile_image">
                  </div>
                  <div v-if="editor.post_style.post_details.username" class="post_username_container mx-1">
                    <h3 class="username">{{ profile.username }}</h3>
                  </div>
                </div>
                <div class="font-size-24 mx-2">
                  <a :href="'https://instagram.com/' + profile.username" target="_blank">
                    <i class="uil uil-instagram instagram_icon"></i>
                  </a>
                </div>
              </div>
              <div class="post_image_container" @click="post_action(post)">
                <div class="media_wrapper">
                  <i class="media_icon"
                     :class="{'uil uil-play': post.media_type === 'VIDEO', 'uil uil-layers': post.media_type == 'CAROUSEL_ALBUM' }"></i>
                  <img v-if="post.media_type === 'IMAGE' && post.media_product_type === 'FEED'"
                       :src="post.media_url"
                       class="post_image" alt="Post image">
                  <img v-else-if="post.media_type === 'IMAGE'" :src="post.media_url" class="post_image"
                       alt="Post image">
                  <img v-else-if="post.media_type === 'CAROUSEL_ALBUM'" :src="post.media_url" class="post_image"
                       alt="Post image">

                  <video v-if="post.media_type === 'VIDEO' && post.media_product_type === 'REELS'"
                         :src="post.media_url" class="post_image"></video>
                  <video v-else-if="post.media_type === 'VIDEO'" :src="post.media_url" class="post_image"></video>
                </div>
              </div>
              <div class="post_footer" @click="post_action(post)">
                <div class="post_insights_container">
                    <span class="d-flex gap-5">
                      <p v-if="editor.post_style.post_details.likes_count" class="post_like">
                        <i class="uil uil-heart-alt"></i>{{ post.like_count }}
                      </p>
                      <p v-if="editor.post_style.post_details.comments_count" class="post_like ml-2">
                        <i class="uil uil-comment"></i>{{ post.comments_count }}
                      </p>
                    </span>
                </div>
                <div v-if="editor.post_style.post_details.caption" class="post_caption_container">
                  <p class="caption">{{ post.caption }}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div v-if="showLoadMore" class="load_more_container">
          <button @click="loadMore"
                  class="load_more_button"
                  :style="{ backgroundColor: editor.styles.load_more_button_bg, color: editor.styles.load_more_button_text }"
          >Load More
          </button>
        </div>
        <div v-if="editor.layout.layoutStyle === 'slider'" class="posts_container slider_layout_posts_container">
          <Swiper
              :slides-per-view="editor.layout.columns"
              :space-between="editor.layout.padding"
              :modules="modules"
              navigation
              :loop="true"
              class="mySwiper"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
          >
            <SwiperSlide v-for="post in posts" :key="post.id">
              <div v-if="editor.post_style.post_style == 'image_card' && post.media_url"
                   @click="post_action(post.id)"
                   class="post image_card">
                <div class="media_wrapper">
                  <i class="media_icon"
                     :class="{'uil uil-play': post.media_type === 'VIDEO', 'uil uil-layers': post.media_type == 'CAROUSEL_ALBUM' }"></i>
                  <img v-if="post.media_type === 'IMAGE' && post.media_product_type === 'FEED'"
                       :src="post.media_url"
                       class="post_image" alt="Post image">
                  <img v-else-if="post.media_type === 'IMAGE'" :src="post.media_url" class="post_image"
                       alt="Post image">
                  <img v-else-if="post.media_type === 'CAROUSEL_ALBUM'" :src="post.media_url" class="post_image"
                       alt="Post image">

                  <video v-if="post.media_type === 'VIDEO' && post.media_product_type === 'REELS'"
                         :src="post.media_url" class="post_image"></video>
                  <video v-else-if="post.media_type === 'VIDEO'" :src="post.media_url" class="post_image"></video>
                </div>
                <div class="post_insights_container">
                  <p class="post_like">
                    <i class="uil uil-heart-alt"></i> {{ post.like_count }}
                  </p>
                </div>
              </div>
              <div v-if="editor.post_style.post_style == 'expanded' && post.media_url" class="post expanded"
                   @click="post_action(post.id)">
                <div class="post_header">
                  <div class="profile_image_container">
                    <img
                        :src="(profile.profile_picture_url) ? profile.profile_picture_url : '/images/widget-layouts/profile.jpg'"
                        :alt="profile.name" class="profile_image">
                  </div>
                  <div class="post_username_container">
                    <h3 class="username">{{ profile.username }}</h3>
                  </div>
                </div>
                <div class="post_image_container">
                  <div class="media_wrapper">
                    <i class="media_icon"
                       :class="{'uil uil-play': post.media_type === 'VIDEO', 'uil uil-layers': post.media_type == 'CAROUSEL_ALBUM' }"></i>
                    <img v-if="post.media_type === 'IMAGE' && post.media_product_type === 'FEED'"
                         :src="post.media_url"
                         class="post_image" alt="Post image">
                    <img v-else-if="post.media_type === 'IMAGE'" :src="post.media_url" class="post_image"
                         alt="Post image">
                    <img v-else-if="post.media_type === 'CAROUSEL_ALBUM'" :src="post.media_url" class="post_image"
                         alt="Post image">

                    <video v-if="post.media_type === 'VIDEO' && post.media_product_type === 'REELS'"
                           :src="post.media_url" class="post_image"></video>
                    <video v-else-if="post.media_type === 'VIDEO'" :src="post.media_url"
                           class="post_image"></video>
                  </div>
                </div>
                <div class="post_footer">
                  <div class="post_insights_container">
                    <span class="d-flex gap-5">
                      <p class="post_like">
                        <i class="uil uil-heart-alt"></i>{{ post.like_count }}
                      </p>
                      <p class="post_like ml-2">
                        <i class="uil uil-comment"></i>{{ post.comments_count }}
                      </p>
                    </span>
                  </div>
                  <div class="post_caption_container">
                    <p class="caption">{{ post.caption }}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <b-modal v-model="showPostModal" :hide-footer="true" title="Posts"
                 :header-class="{'dark': editor.styles.theme === 'dark'}" size="lG">
          <div v-for="post in posts" :key="post.id" :id="'post_' + post.id"
               :ref="'post_' + post.id"
               :class="{'dark': editor.styles.theme === 'dark'}"
               class="modal_posts_container">
            <div v-if="post.media_url">

              <div class="post expanded">
                <div class="post_header d-flex justify-content-between">
                  <div class="post_header_left d-flex align-items-center">
                    <div class="profile_image_container">

                      <img
                          :src="(profile.profile_picture_url) ? profile.profile_picture_url : '/images/widget-layouts/profile.jpg'"
                          :alt="profile.name" class="profile_image" @click="redirectToProfile">
                    </div>
                    <div class="post_username_container ml-2">
                      <h3 class="username" @click="redirectToProfile">{{ profile.username }}</h3>
                    </div>
                  </div>
                  <button class="follow_btn_post" @click="redirectToProfile">Follow</button>
                </div>
                <div class="post_image_container">
                  <div class="media_wrapper">
                    <i class="media_icon"
                       :class="{'uil uil-play': post.media_type === 'VIDEO', 'uil uil-layers': post.media_type == 'CAROUSEL_ALBUM' }"></i>
                    <img v-if="post.media_type === 'IMAGE' && post.media_product_type === 'FEED'"
                         :src="post.media_url"
                         class="post_image" alt="Post image">
                    <img v-else-if="post.media_type === 'IMAGE'" :src="post.media_url" class="post_image"
                         alt="Post image">
                    <img v-else-if="post.media_type === 'CAROUSEL_ALBUM'" :src="post.media_url" class="post_image"
                         alt="Post image">

                    <video v-if="post.media_type === 'VIDEO' && post.media_product_type === 'REELS'"
                           :src="post.media_url" class="post_image"></video>
                    <video v-else-if="post.media_type === 'VIDEO'" :src="post.media_url" class="post_image"></video>
                  </div>
                </div>
                <div class="post_footer">
                  <div class="post_insights_container">
                    <span class="d-flex gap-5">
                      <p class="post_like">
                        <strong>{{ post.like_count }} Likes</strong>
                      </p>
                    </span>
                  </div>
                  <div class="post_caption_container">
                    <p class="caption"><strong>{{ profile.username }}</strong> {{ post.caption }}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </b-modal>

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {Swiper, SwiperSlide} from 'swiper/swiper-vue.mjs';
import 'swiper/swiper-bundle.css';
import {BSpinner} from 'bootstrap-vue';
axios.defaults.baseURL = (process.env.NODE_ENV === 'production' ? window.location.origin.includes('staging.') ? 'http://127.0.0.1:8000/' : 'http://127.0.0.1:8000/' : 'http://127.0.0.1:8000/') + 'api/v1';

export default {
  name: "InstagramWidget",
  components: {
    BSpinner,
    Swiper,
    SwiperSlide,
  },
  props: {
    widgetId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      profileFetchState: '',
      profileFetchMessage: '',
      profile: {
        username: '',
        name: '',
        profile_picture_url: '',
        followers_count: '',
        follows_count: '',
        media_count: '',
      },
      tokens: {
        accessToken: '',
        igID: ''
      },
      posts: [{
        'id': '',
        'like_count': '',
        'comments_count': '',
        'caption': '',
        'media_url': '',
      }],
      posts_type: 'profile',
      // widgetId: 8,
      editor: {
        source: {
          username: '',
          type: '',
        },
        layout: {
          layoutStyle: 'grid',
          rows: 3,
          columns: 3,
          show_profile_details: true,
          profile_details: {
            profile_image: true,
            username: true,
            name: true,
            follow_button: true,
            post_count: true,
            followers: true,
            following: true,
          },
          padding: 5,
        },
        post_style: {
          post_style: 'image_card',
          post_details: {
            profile_image: true,
            username: true,
            likes_count: true,
            comment_count: true,
            caption: true,
          },
          post_action: 'instagram'
        },
        editing: 'layout',
        styles: {
          theme: 'light',
          header_bg: '#ffffff',
          header_text: '#000000',
          follow_button_bg: '#0081ff',
          follow_button_text: '#ffffff',
          load_more_button_bg: '#0081ff',
          load_more_button_text: '#ffffff',

        }
      },
      gettingWidget: false,
      additionalPostsToShow: 0,
      widgets: [],
      selectedWidget: null,
      showPostModal: false,
    }
  },

  mounted() {
    this.getWidget()
  },

  computed: {
    visiblePostCount() {
      return (this.editor.layout.columns * this.editor.layout.rows) + this.additionalPostsToShow;
    },
    visiblePosts() {
      const maxPosts = (this.editor.layout.columns * this.editor.layout.rows) + this.additionalPostsToShow;
      const filteredPosts = this.posts.filter(post => post.media_url);
      return filteredPosts.slice(0, maxPosts);
    },
    showLoadMore() {
      console.log(this.visiblePostCount)
      console.log(this.posts.length)
      return this.visiblePostCount < this.posts.length;
    }
  },

  methods: {
    loadMore() {
      this.additionalPostsToShow += this.editor.layout.columns;

      console.log(this.additionalPostsToShow)
    },

    async getWidgetSettings(widgetId) {
      try {
        const res = await this.$store.dispatch('igwidget/getWidgetSettings', {widgetId});
        this.editor = JSON.parse(res.widget_settings);
      } catch (error) {
        console.error(error);
      }
    },
    async getWidget() {
      await this.getWidgetSettings(this.widgetId);
      const username = this.editor.source?.username ?? 'elonreevmusk'; // Handle nullish values safely
      this.gettingWidget = true;
      this.profileFetchState = 'fetching';
      if (this.editor.source.type === 'username') {
        try {
          const res = await this.$store.dispatch('igwidget/getIgWidget', {username});
          if (res.businessDetails) {
            this.profile = res.businessDetails;
            this.posts = res.businessDetails.media.data;
            this.profileFetchState = 'success';
            this.posts_type = 'profile';
          } else {
            this.handleFetchError('Invalid Username or You\'re trying to access a private account');
          }
        } catch (error) {
          this.handleFetchError(error);
        } finally {
          this.gettingWidget = false;
        }
      } else {
        try {
          const res = await this.$store.dispatch('igwidget/searchKeyword', {username});
          this.posts = res;
          this.profileFetchState = 'success';
          this.posts_type = 'hashtag';
        } catch (error) {
          this.handleFetchError(error);
        } finally {
          this.gettingWidget = false;
        }
      }
    },

    handleFetchError(message) {
      console.error(message);
      this.profileFetchState = 'error';
      this.profileFetchMessage = message;
    },

    post_action(post) {
      if (this.editor.post_style.post_action === 'instagram') {
        window.open(post.permalink, '_blank');
      } else {
        this.showPostModal = true;
        this.$nextTick(() => {
          setTimeout(() => {
            const postId = 'post_' + post.id;
            const postElement = document.getElementById(postId);
            if (postElement) {
              postElement.scrollIntoView({behavior: 'smooth'});
            }
          }, 300);
        });
      }
    },

    redirectToProfile() {
      if (this.profile && this.profile.username) {
        // Redirect to user's Instagram profile
        window.open(`https://www.instagram.com/${this.profile.username}`, '_blank');
      }
    },

  },
}
</script>

<!--WIdget Styles-->
<style scoped>

.fetch_loader {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.customer_select {
  border: 1px solid #8a8a8a;
  border-radius: 4px;
  color: #000;

  * {
    color: #000;
  }
}

.source_input {
  width: 100%;
  padding: .5rem;
  border-radius: 4px;
  border: 2px solid #456db9;
  font-size: 1.1rem;
}

.source_button {
  height: 100%;
  background: #284273;
  color: #fff;
  border: none;
  padding: .5rem;
  font-size: 1.1rem;
}

.v-select {
  cursor: pointer !important;

  * {
    cursor: pointer !important;
  }
}

.layouts_wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.layout-item {

  .btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: fit-content;

    img {
      display: inline-block;
      width: 5rem;
    }

    label {
      display: inline-block;
      font-size: 12px;
    }
  }

}

.instagram-widget {
  max-height: 93vh;
  overflow-y: scroll;

  .profile_details_container {
    padding: 2rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;

    .profile_details_left {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .profile_picture_container {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    .profile_picture {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }

    .profile_names_container {
      justify-self: flex-start;

      .name {
        margin-bottom: .2rem;
        color: #222
      }

      .username {
        font-size: 16px;
        font-weight: 400;
        margin-block: 0;
        color: #555;
      }

      .username::before {
        content: '@';
      }
    }


    .follow_button {
      background: #007FFF;
      color: #fff;
      padding: .5rem 1rem;
      border-radius: 4px;
      border: none;
    }

    .profile_insights_container {
      display: flex;
      justify-content: center;
      align-items: center;

      .insight_count_tag {
      //display: inline-block; margin-inline: .5rem; font-size: 18px; margin-bottom: 0; color: #555; line-height: 1; text-transform: capitalize;

        strong {
          display: block;
          text-align: center;
          color: #222;
          font-size: 22px;
          margin-bottom: .2rem;
        }
      }
    }

  }

  .posts_container {
    padding: 1rem 2rem;
  }

  .grid_layout_posts_container {

    display: grid;
  //grid-template-columns: repeat( , 1fr); justify-content: center; gap: .5rem;
  }

  .post {
    cursor: pointer;
  }

  .media_wrapper {
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
    position: relative;
    background: #0a0a0a;

    .media_icon {
      position: absolute;
      right: 1rem;
      top: 1rem;
      color: #fff;
      font-size: 2rem;
      font-weight: 700;
    }
  }

  .post.image_card:hover .post_insights_container {
    display: grid;
    place-items: center;
  }

  .post.image_card {
    width: 100%;
    position: relative;

    img.post_image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    video.post_image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .post_insights_container {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.5);
      display: none;

      .post_like {
        font-size: 1.5rem;
        color: #fff
      }
    }
  }

  .post.expanded {
    width: 100%;
    overflow: hidden;

    .post_header {
      display: flex;
      gap: .3rem;
      margin-bottom: .5rem;

      .profile_image {
        width: 50px;
        border-radius: 50%;
      }

      .username {
        font-size: .9rem;
        font-weight: 700;
        color: #111;
      }
    }

    .post_image_container {
      width: 100%;

      .media_wrapper {
        width: 100%;
        height: 100%;
        aspect-ratio: 1;
        position: relative;

        img.post_image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        video.post_image {
          width: 100%;
          height: 100%;
        }
      }
    }

    .post_footer {

      .post_insights_container {
        p {
          margin-block: 0.5rem;
          font-size: 1.2rem;
          color: #111;
        }
      }

      .post_caption_container {
        .caption {
          color: #111;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          line-clamp: 3;
          -webkit-box-orient: vertical;
        }
      }

    }

  }

  .load_more_container {
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
    text-align: center;

    .load_more_button {
      background: #007FFF;
      color: #fff;
      padding: .5rem 1rem;
      border-radius: 4px;
      border: none;
      margin-inline: auto;
      margin-block: .5rem;
      font-size: 1.1rem;

    }
  }

}

.modal-body {
  .media_wrapper {
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
    position: relative;

    .media_icon {
      position: absolute;
      right: 1rem;
      top: 1rem;
      color: #fff;
      font-size: 2rem;
      font-weight: 700;
    }

    img.post_image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    video.post_image {
      width: 100%;
      height: 100%;
    }
  }
}

.modal_posts_container .post.expanded {
  width: 100%;
  overflow: hidden;
  border-bottom: 1px solid #cecece;

  .post_header {
    display: flex;
    gap: .3rem;
    padding-block: .5rem;
    cursor: pointer;

    .profile_image {
      width: 40px;
      border-radius: 50%;
    }

    .username {
      font-size: .9rem;
      font-weight: 700;
      color: #111;
    }

    .follow_btn_post {
      border: none;
      background: transparent;
      color: #0e8dc7;
      font-size: .9rem;
    }
  }

  .post_image_container {
    width: 100%;

    img.post_image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    video.post_image {
      width: 100%;
      height: 100%;
    }
  }

  .media_wrapper {
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
    position: relative;

    .media_icon {
      position: absolute;
      right: 1rem;
      top: 1rem;
      color: #fff;
      font-size: 2rem;
      font-weight: 700;
    }
  }

  .post_footer {

    .post_insights_container {
      p {
        margin-block: 0.5rem;
        font-size: 1.2rem;
        color: #111;
      }
    }

    .post_caption_container {
      .caption {
        color: #111;
      //overflow: hidden; //display: -webkit-box; //-webkit-line-clamp: 3; //line-clamp: 3; //-webkit-box-orient: vertical;
      }
    }

  }
}

li:has( .profile_details) {
  justify-content: flex-start !important;

  .profile_details {
    width: 100%;
  }

  li {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: .5rem;
  }
}

.instagram-widget.dark {
  background: #1b1b1b !important;

  * {
    color: #fff !important;
  }

  .post {
    border: 1px solid #1f1d10;
  }

  .post * {
    color: #fff !important;
  }

  .media_wrapper {
    background: #0a0a0a;
  }

  .media_icon {
    color: #fff;
  }
}


.modal-header.dark {
  background: #1b1b1b !important;

  * {
    color: #fff !important
  }
}

.modal-body:has(.dark) {
  background: #1b1b1b !important;
  color: #fff !important;

  .dark * {
    color: #fff !important
  }
}
</style>
