<script>
export default{
  name:'App',
  components:{

  },
  data(){
    return {
      btn: {
        skillsDetail: {
        },
        portfolio: {
        },
        aboutme: {
        },
        hardware: {
        },
        firmware: {
        },
        software: {
        },
      },
      whatIcan: {
        display: "flex",
        position: "absolute",
        marginTop: "5%",
        width: "50%",
        justifyContent: "space-between",
      },
      controlObj: {
        whatIcan: false,
      },
    }
  }
}
</script>

<template>
  <div class="topMenu">
      <div class="skillsDetail">
          <router-link to="/" v-bind:style="btn.skillsDetail" v-on:mouseover="ontopMenu(0)" v-on:mouseleave="closeDetail(0)">Skills Detail</router-link>
      </div>
      <transition name="fade">
          <div class="whatIcan" v-bind:style="whatIcan" v-show="controlObj.whatIcan">
                  <router-link to="/" v-bind:style="btn.hardware" v-on:mouseover="onsubMenu(1)" v-on:mouseleave="closeDetail(1)">Hardware</router-link>
                  <router-link to="/" v-bind:style="btn.firmware" v-on:mouseover="onsubMenu(2)" v-on:mouseleave="closeDetail(2)">Firmware</router-link>
                  <router-link to="/" v-bind:style="btn.software" v-on:mouseover="onsubMenu(3)" v-on:mouseleave="closeDetail(3)">Software</router-link>
          </div>
      </transition>
      <div class="Portfoilo">
          <router-link to="/portfolio" v-bind:style="btn.portfolio" v-on:mouseover="ontopMenu(4)" v-on:click="gotoPortfoilo()" v-on:mouseleave="closeDetail(4)">Portfoilo</router-link>
      </div>
      <div class="aboutMe">
          <router-link to="/aboutme" v-bind:style="btn.aboutme" v-on:mouseover="ontopMenu(5)" v-on:mouseleave="closeDetail(5)">AboutMe</router-link>
      </div>
  </div>
</template>

<style>
  .topMenu{
    display: "flex";
    justify-content: "space-around";
    height: "10%";
    width: "100%";
  }

  .topMenu a{
    font-family: "Noto Sans KR, sans-serif";
    font-size: "1.5rem";
    text-align: "center";
    color: "white";
    display: "inline-block";
    width: "auto";
    border: "none";
    background-color: "black";
  }

  .fade-enter-active{
  	transition: 1s;
  }

  .fade-leave-active{
    transition: opacity 1s;
    transition-delay: 0.4s;
  } 

  /* .fade-leave{
    transition: opacity 1s;
  } */

  .fade-enter, .fade-leave-to {
      opacity: 0;
  }

</style>
