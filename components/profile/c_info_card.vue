<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-start wrap>
      <v-flex xs12 md3 sm12 class="mt-0 ml-0 ">
        <v-container py-0>
          <v-layout wrap>
            <v-flex xs12 md12 class="pa-0 ma-0">
              <v-card class="mx-auto" outlined>
                <v-img
                  :src="entityThumbNail"
                  lazy-src="https://i.stack.imgur.com/l60Hf.png"
                  aspect-ratio="1"
                  class="grey lighten-2 align-end"
                  height="200px"
                  max-height="200px"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                  <v-card-title>
                    <v-list three-line flat>
                      <v-list-item>
                        <v-list-item-avatar>
                          <v-img :src="entityThumbNail"></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-title>
                            {{ userdata.first_name }}</v-list-item-title
                          >
                          <v-list-item-subtitle
                            v-if="userdata.contactsInformation"
                            v-html="userdata.contactsInformation.city"
                          ></v-list-item-subtitle>
                          <v-list-item-subtitle
                            v-else
                            v-html="userdata.country"
                          >
                          </v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-icon>
                          <div class="text-center">
                            <v-dialog
                              v-model="uploaddialog"
                              persistent
                              max-width="600"
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                  color="warning"
                                  fab
                                  x-small
                                  dark
                                  v-if="entityThumbNail != null"
                                  @click.stop="deletePatientProfilePic()"
                                >
                                  <v-icon>mdi-trash-can-outline</v-icon>
                                </v-btn>
                                <v-btn
                                  v-else
                                  fab
                                  color="primary"
                                  dark
                                  v-bind="attrs"
                                  v-on="on"
                                  x-small
                                >
                                  <v-icon>mdi-progress-upload</v-icon>
                                </v-btn>
                              </template>
                              <v-card>
                                <v-card-title class="headline">
                                  Changing {{ userdata.first_name }}&nbsp;{{
                                    userdata.last_name
                                  }}
                                  profile picture
                                </v-card-title>
                                <v-card-text>
                                  <v-file-input
                                    label="Profile picture"
                                    accept="image/png, image/jpeg, image/bmp"
                                    prepend-icon="mdi-camera"
                                    show-size
                                    @change="selectFile"
                                  >
                                    <template v-slot:selection="{ text }">
                                      <v-chip small label color="primary">
                                        {{ text }}
                                      </v-chip>
                                    </template>
                                  </v-file-input>
                                </v-card-text>
                                <v-card-actions>
                                  <v-spacer></v-spacer>
                                  <v-btn
                                    color="primary"
                                    @click.stop="uploaddialog = false"
                                    x-small
                                  >
                                    Cancel
                                  </v-btn>
                                  <v-btn
                                    color="warning"
                                    x-small
                                    shaped
                                    @click="uploadPatientImage()"
                                  >
                                    Save
                                  </v-btn>
                                </v-card-actions>
                              </v-card>
                            </v-dialog>
                          </div>
                        </v-list-item-icon>
                      </v-list-item>
                    </v-list>
                  </v-card-title>
                </v-img>
                <v-card-text>
                  <v-flex xs12 md12 class="ma-0 pa-0">
                    <v-type-divider type="Info"></v-type-divider>
                  </v-flex>
                  <v-flex xs12 md12 class="ma-0 pa-0">
                    <v-btn
                      x-small
                      rounded
                      color="primary"
                      v-if="address"
                      :to="`/patients/${userdata.id}/contacts/`"
                      >View contacts</v-btn
                    >
                    <v-btn
                      x-small
                      rounded
                      color="primary"
                      v-else
                      :to="`/patients/${userdata.id}/contacts/add`"
                    >
                      Add contacts
                    </v-btn>
                    <v-btn
                      :to="`/patients/${userdata.id}/contacts/edit`"
                      x-small
                      rounded
                      v-if="address"
                      >Edit Contacts</v-btn
                    >
                  </v-flex>
                  <v-flex xs12 md12 class="ma-0 pa-0" v-if="address !== null">
                    <v-address-card :address="address"></v-address-card>
                  </v-flex>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
      <v-flex xs12 md9 sm12 class="ma-0 pa-0 lighten-2">
        <v-card outlined flat class="pa-0">
          <v-list class="ma-0 pa-0">
            <v-list-item-group color="primary">
              <v-list-item two-line inactive :ripple="false">
                <v-list-item-content>
                  <v-list-item-title>
                    <v-row>
                      <v-col>
                        <span class="font-weight-bold text-h5">
                          {{ userdata.first_name }}&nbsp;
                          {{ userdata.last_name }}
                          <v-icon color="primary" size="20" v-show="true"
                            >mdi-check-decagram</v-icon
                          ></span
                        >
                      </v-col>
                      <v-col v-if="userdata.contactsInformation !== null">
                        <span class="font-weight-light text-caption"
                          ><v-icon>mdi-map-marker</v-icon
                          >{{ userdata.contactsInformation.city }}</span
                        >
                      </v-col>
                    </v-row>
                  </v-list-item-title>
                  <v-list-item-subtitle
                    class="primary--text text-caption font-weight-medium"
                  >
                    {{ userdata.role }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item inactive class="ma-0 pa-0" :ripple="false">
                <v-list-item-content class="ma-0 pa-0">
                  <v-tabs left grow center-active class="elevation-2">
                    <v-tab class="font-weight-light">
                      <span><v-icon small left>mdi-eye</v-icon>Bio</span>
                    </v-tab>
                    <v-tab class="font-weight-light">
                      <span><v-icon small left>mdi-account</v-icon>Doctor</span>
                    </v-tab>
                    <v-tab
                      class="font-weight-light"
                      @click.stop="getThisUserPosts()"
                    >
                      <v-icon small left>mdi-medical-bag</v-icon>
                      History
                    </v-tab>
                    <v-tab
                      class="font-weight-light"
                      @click.stop="getThisUserComments()"
                    >
                      <v-icon small left>mdi-medical-bag</v-icon>
                      Comments
                    </v-tab>
                    <v-tab
                      class="font-weight-light"
                      @click.stop="getThisPersonFollowers"
                    >
                      <v-icon small left
                        >mdi-format-list-bulleted-triangle</v-icon
                      >
                      Followers
                    </v-tab>
                    <v-tab
                      class="font-weight-light"
                      @click.stop="getThisPersonFollowings()"
                    >
                      <v-icon small left>mdi-chat</v-icon>
                      Followings
                    </v-tab>

                    <v-tab-item>
                      <v-card flat>
                        <v-card-text>
                          <p>
                            Sed aliquam ultrices mauris. Donec posuere vulputate
                            arcu. Morbi ac felis. Etiam feugiat lorem non metus.
                            Sed a libero.
                          </p>

                          <p>
                            Nam ipsum risus, rutrum vitae, vestibulum eu,
                            molestie vel, lacus. Aenean tellus metus, bibendum
                            sed, posuere ac, mattis non, nunc. Aliquam lobortis.
                            Aliquam lobortis. Suspendisse non nisl sit amet
                            velit hendrerit rutrum.
                          </p>

                          <p class="mb-0">
                            Phasellus dolor. Fusce neque. Fusce fermentum odio
                            nec arcu. Pellentesque libero tortor, tincidunt et,
                            tincidunt eget, semper nec, quam. Phasellus blandit
                            leo ut odio.
                          </p>
                        </v-card-text>
                      </v-card>
                    </v-tab-item>
                    <v-tab-item>
                      <v-row justify="start" align="start">
                        <v-col cols="12" md="8" v-if="physician !== null">
                          <v-card class="mx-auto ml-2" outlined>
                            <v-list three-line>
                              <v-list-item>
                                <v-list-item-avatar width="80" height="80">
                                  <v-img
                                    max-height="150"
                                    max-width="250"
                                    src="https://www.nicepng.com/png/detail/26-260551_femscare-benifits-doctor-image-png-hd.png"
                                  ></v-img>
                                </v-list-item-avatar>

                                <v-list-item-content>
                                  <v-list-item-title class="title">
                                    {{ physician.firstname }} &nbsp;{{
                                      physician.lastname
                                    }}
                                  </v-list-item-title>
                                  <v-list-item-subtitle>{{
                                    physician.specialities
                                  }}</v-list-item-subtitle>
                                </v-list-item-content>
                              </v-list-item>
                            </v-list>
                          </v-card>
                        </v-col>
                        <v-col cols="12" sm="3" md="4">
                          <v-select
                            dense
                            solo
                            :items="physicians"
                            v-model="selectedPhysicianId"
                            item-text="firstname"
                            item-value="id"
                            label="Select Physicians to assign"
                            persistent-hint
                            return-object
                            single-line
                            hint="Re/Assign Physicians"
                            @change="selectedPhysicianChanged()"
                          >
                            <template slot="selection" slot-scope="data">
                              {{ data.item.firstname }},
                              {{ data.item.lastname }}
                            </template>
                            <template slot="item" slot-scope="data">
                              {{ data.item.firstname }},
                              {{ data.item.lastname }}
                            </template>
                          </v-select>
                        </v-col>
                      </v-row>
                    </v-tab-item>
                    <v-tab-item>
                      <v-row>
                        <v-col align="center" v-if="diagnoses === null">
                          <v-progress-circular
                            :width="2"
                            color="primary"
                            size="20"
                            indeterminate
                          ></v-progress-circular>
                        </v-col>
                        <v-col v-else-if="diagnoses.length !== 0">
                          <v-timeline reverse dense class="ml-1 pl-1">
                            <v-slide-x-reverse-transition group hide-on-leave>
                              <v-timeline-item
                                v-for="(diagnose, index) in diagnoses"
                                :key="index"
                                large
                              >
                                <template v-slot:icon>
                                  <v-avatar>
                                    <img :src="entityThumbNail" alt="" />
                                  </v-avatar>
                                </template>
                                <post-card :post="diagnose"></post-card>
                              </v-timeline-item>
                            </v-slide-x-reverse-transition>
                          </v-timeline>
                        </v-col>
                        <p v-else></p>
                      </v-row>
                    </v-tab-item>
                    <v-tab-item>
                      <v-row>
                        <v-col align="center" v-if="comments === null">
                          <v-progress-circular
                            :width="2"
                            color="primary"
                            size="20"
                            indeterminate
                          ></v-progress-circular>
                        </v-col>
                        <v-col
                          v-else-if="comments.results.length !== 0"
                          cols="12"
                          lg="6"
                          md="6"
                          sm="12"
                          wrap
                          v-for="(comment, index) in comments.results"
                          :key="index"
                        >
                          <post-card :post="comment"></post-card>
                        </v-col>
                        <p v-else></p>
                      </v-row>
                    </v-tab-item>
                    <v-tab-item>
                      <v-row>
                        <v-col align="center" v-if="followers === null">
                          <v-progress-circular
                            :width="2"
                            color="primary"
                            size="20"
                            indeterminate
                          ></v-progress-circular>
                        </v-col>
                        <v-col
                          v-else-if="followers.results.length !== 0"
                          cols="12"
                          lg="6"
                          md="6"
                          sm="12"
                          wrap
                          v-for="(follower, index) in followers.results"
                          :key="index"
                        >
                          <v-follows :follow="follower"></v-follows>
                        </v-col>
                        <p v-else></p>
                      </v-row>
                    </v-tab-item>
                    <v-tab-item>
                      <v-row>
                        <v-col align="center" v-if="followings === null">
                          <v-progress-circular
                            :width="2"
                            color="primary"
                            size="20"
                            indeterminate
                          ></v-progress-circular>
                        </v-col>
                        <v-col
                          v-else-if="followings.results.length !== 0"
                          sm="12"
                          wrap
                          v-for="(follow, index) in followings.results"
                          :key="index"
                        >
                          <v-follows :follow="follow"></v-follows>
                        </v-col>
                        <p v-else></p>
                      </v-row>
                    </v-tab-item>
                  </v-tabs>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script lang="js">
import c_type_divider from "@/components/profile/c_type_divider";
import c_address_card from "@/components/profile/c_address_card";
import medicalInfoCard from "@/components/medical/medical_info_card"
import c_follows from "@/components/follows/c_follows";

export default {
  props: {
    userdata:{
      type: Object,
      default: null
    }
    },
  components: {
    'post-card': medicalInfoCard,
    'v-type-divider': c_type_divider,
    'v-address-card': c_address_card,
    'v-follows': c_follows
  },
  data() {
    return {
      dialog: false,
      uploaddialog: false,
      currentFile: undefined,
      rate: false,
      tab: null,
      rating: 2,
      posts: null,
      comments: null,
      followers: null,
      followings: null,
      selectedPhysicianId: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      emptyIcon: 'mdi-star-outline',
      fullIcon: 'mdi-star',
      halfIcon: 'mdi-star-half-full',
      address: null,
      physician:null,
      diagnoses: null,

      rules: [
        value => !value || value.size < 500 || 'Avatar size should be less than 500 KB!',
      ],


    }
  },
  created() {
    this.address = this.userdata.contactsInformation;
    this.physician = this.userdata.physician;
    this.diagnoses = this.userdata.diagnoses;
    this.$store.dispatch("retrievephysicians");
  },
  computed:{
      entityThumbNail: function() {
            return this.userdata.imageThumbnail;
    },
     physicians: {
      get() {
        return this.$store.getters.physicians;
      }
    }
  },
  methods: {

    selectFile(file) {
      this.progress = 0;
      this.currentFile = file;
    },
    async getThisUserPosts() {
      console.log("Clicked" + this.$route.params.id)
      return await this.$api.$get(`users/${this.$route.params.id}/posts/?type=post`)
        .then(response => {
          this.posts = response;
        }).catch(error => {
          console.log(error);

        });
    },
    async selectedPhysicianChanged(){
      console.log(this.selectedPhysicianId);
      return await this.$api.$put(`patients/${this.$route.params.id}/${this.selectedPhysicianId.id}/`)
        .then(response => {
          if (response !== null) {
             this.$router.push("/patients/" + this.$route.params.id);
          }
        }).catch(error => {
          console.log(error);

        });
    },
    async getThisUserComments() {
      console.log("Clicked" + this.$route.params.id)
      return await this.$api.$get(`users/${this.$route.params.id}/comments/`)
        .then(response => {
          this.comments = response;
        }).catch(error => {
          console.log(error);

        });
    },
    async uploadPatientImage() {
      const formData = new FormData();
      formData.append("file", this.currentFile )

      return await this.$api.$patch(`/patients/${this.$route.params.id}/images/`,formData)
        .then(response => {
          if (response !== null) {
            this.uploaddialog = false
            this.$parent.viewusedata();
          }
        }).catch(error => {
          console.log(error);

        });

    },
    async deletePatientProfilePic() {
      console.log(this.userdata.imageThumbnail.split('/').pop());
      return await this.$api.$delete(`/patients/${this.$route.params.id}/images/${this.userdata.imageThumbnail.split('/').pop()}`)
        .then(response => {
          if (response !== null) {
            this.$parent.viewusedata();
          }
        }).catch(error => {
          console.log(error);

        });

    },
    async getThisPersonFollowers() {
      return await this.$api.$get(`users/${this.$route.params.id}/follows/`)
        .then(response => {
          if (response !== null) {
            this.followers = response;
          }
        }).catch(error => {
          console.log(error);

        });
    },
    async getThisPersonFollowings() {
      return await this.$api.$get(`users/${this.$route.params.id}/following/`)
        .then(response => {
          if (response !== null) {
            this.followings = response;
            this.followings = response;
          }
        }).catch(error => {
          console.log(error);

        });
    },
    addRating() {
      this.rate = true;
    },
    async rateThisPersonLanderProfile() {
      let rate_dta = {
        "profile": parseInt(this.userdata.lender_profile.id),
        "score": Math.round(this.rating)
      };
      return await this.userdata.lender_profile.my_rating ? this.$api.$patch(`/lender-profile-ratings/${this.$route.params.id}/`, rate_dta) : this.$api.$post(`/lender-profile-ratings/`, rate_dta)
        .then(response => {
          if (response !== null) {
            this.$parent.viewusedata();
          }
        }).catch(error => {
          console.log(error);
        });
    }

  }
}
</script>
<style>
.basil {
  background-color: #fffbe6 !important;
}

.basil--text {
  color: #356859 !important;
}
</style>
