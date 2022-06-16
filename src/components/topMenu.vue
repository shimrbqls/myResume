<script>
export default{
  name:'topMenu',
  components:{
  },  
  data() {
    return {
        menuObj: {
            className: ["skillsdetail", "portfolio", "aboutme"],
            contact: ["Skills Detail", "Portfoilo", "About Me"],
        },

        subMenuObj: {
            className: ["WhatIcan"],
            contact: ["Hardware", "Firmware", "Software"],
        },

        topMenu: {
            display: "flex",
            justifyContent: "space-around",
            height: "10%",
            width: "100%",
        },

        btn: {
            default:{
                fontFamily: "Noto Sans KR, sans-serif",
                fontSize: "1.5rem",
                textAlign: "center",
                color: "white",
                display: "inline-block",
                width: "auto",
                border: "none",
                backgroundColor: "black",
            },
            whatIcan: {
                display: "flex",
                position: "absolute",
                marginTop: "5%",
                width: "50%",
                justifyContent: "space-between",
            },

            skillsDetail: {
                fontFamily: "Noto Sans KR, sans-serif",
                fontSize: "1.5rem",
                textAlign: "center",
                color: "white",
                display: "inline-block",
                width: "auto",
                border: "none",
                backgroundColor: "black",
            },
            portfolio: {
                fontFamily: "Noto Sans KR, sans-serif",
                fontSize: "1.5rem",
                textAlign: "center",
                color: "white",
                display: "inline-block",
                width: "auto",
                border: "none",
                backgroundColor: "black",
            },
            aboutme: {
                fontFamily: "Noto Sans KR, sans-serif",
                fontSize: "1.5rem",
                textAlign: "center",
                color: "white",
                display: "inline-block",
                width: "auto",
                border: "none",
                backgroundColor: "black",
            },
            hardware: {
                fontFamily: "Noto Sans KR, sans-serif",
                fontSize: "1.5rem",
                textAlign: "center",
                color: "white",
                display: "inline-block",
                width: "auto",
                border: "none",
                backgroundColor: "black",
            },
            firmware: {
                fontFamily: "Noto Sans KR, sans-serif",
                fontSize: "1.5rem",
                textAlign: "center",
                color: "white",
                display: "inline-block",
                width: "auto",
                border: "none",
                backgroundColor: "black",
            },
            software: {
                fontFamily: "Noto Sans KR, sans-serif",
                fontSize: "1.5rem",
                textAlign: "center",
                color: "white",
                display: "inline-block",
                width: "auto",
                border: "none",
                backgroundColor: "black",
            },
        },

        colorObj: {
            defaultColor: {
            },

            selectColor: {
                color: "orange",
            },
        },

        controlObj: {
            whatIcan: false,
            selectMenu: ,
        },
    }
  },

  created: function () {
  },

  mounted: function () {
  },

  methods: {
    setColor: function (name) {
          var btnColor = this.btn[`${name}`];
          btnColor.color = this.colorObj.selectColor.color;
    },

    setOffColor: function (name,action) {
          var btnColor = this.btn[`${name}`];
          if(action == "leave") btnColor.color = "white";
          this.controlObj.whatIcan = false;
    },

    ontopMenu: function (num) {
        if (!((num==4)||(num==5))) this.controlObj.whatIcan = true;
        else this.controlObj.whatIcan = false;

        switch (num) {
        case 0:
          this.setColor("skillsDetail");
          break;
        case 1:
          this.setColor("hardware");
          break;
        case 2:
          this.setColor("firmware");
          break;
        case 3:
          this.setColor("software");
          break;
        case 4:
          this.setColor("portfolio");
          break;
        case 5:
          this.setColor("aboutme");
          break;
        }
    },

    openDetail: function (num) {
      switch (num) {
        case 0:
          this.controlObj.whatIcan = true;
          break;
        case 1:
          this.setColor("hardware");
          this.controlObj.whatIcan = true;
          break;
        case 2:
          this.setColor("firmware");
          this.controlObj.whatIcan = true;
          break;
        case 3:
          this.setColor("software");
          this.controlObj.whatIcan = true;
          break;
        case 4:
          this.controlObj.whatIcan = false;
          break;
        case 5:
          break;
        }
    },

    closeDetail: function (num,action) {
      switch (num) {
        case 0:
          this.setOffColor("skillsDetail",action);
          break;
        case 1:
          this.setOffColor("hardware",action);
          break;
        case 2:
          this.setOffColor("firmware",action);
          break;
        case 3:
          this.setOffColor("software",action);
          break;
        case 4:
          this.setOffColor("portfolio",action);
          break;
        case 5:
          this.setOffColor("aboutme",action);
          break;
      }
    },
  },

  updated: function () {
    if(this.controlObj.whatIcan == false){
      this.whatIcan == "none";
    }
  },
}
</script>

<template>
    <div class="topMenu" v-bind:style="topMenu">
        <div class="skillsDetail">
            <router-link to="/" v-bind:style="btn.skillsDetail" v-on:mouseover="ontopMenu(0)" v-on:mouseleave="closeDetail(0,'leave')" v-on:click="closeDetail(0,'click')">Skills Detail</router-link>
        </div>
        <transition name="fade">
            <div class="whatIcan" v-bind:style="btn.whatIcan" v-show="controlObj.whatIcan">
                    <router-link to="/hw" v-bind:style="btn.hardware" v-on:mouseover="openDetail(1)" v-on:mouseleave="closeDetail(1,'leave')" v-on:click="closeDetail(1,'click')">Hardware</router-link>
                    <router-link to="/fw" v-bind:style="btn.firmware" v-on:mouseover="openDetail(2)" v-on:mouseleave="closeDetail(2,'leave')" v-on:click="closeDetail(2,'click')">Firmware</router-link>
                    <router-link to="/sw" v-bind:style="btn.software" v-on:mouseover="openDetail(3)" v-on:mouseleave="closeDetail(3,'leave')" v-on:click="closeDetail(3,'click')">Software</router-link>
            </div>
        </transition>
        <div class="Portfoilo">
            <router-link to="/portfolio" v-bind:style="btn.portfolio" v-on:mouseover="ontopMenu(4)" v-on:mouseleave="closeDetail(4,'leave')" v-on:click="closeDetail(4,'click')">Portfoilo</router-link>
        </div>
        <div class="aboutMe">
            <router-link to="/aboutMeKor" v-bind:style="btn.aboutme" v-on:mouseover="ontopMenu(5)" v-on:mouseleave="closeDetail(5,'leave')" v-on:click="closeDetail(5,'click')">AboutMe</router-link>
        </div>
    </div>
</template>

<style>
    .fade-enter-active{
        transition: 0.5s;
    }

    .fade-leave-active{
        transition: opacity 0.5s;
        transition-delay: 0.4s;
    } 

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
