<template>
    <HEAD>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>RESUME_MAIN</title>
        <link rel="stylesheet" href="./css/min/font-awesome.min.css" type="text/css">
        <link rel="stylesheet" href="./css/index.css">
    </HEAD>

    <BODY>
        <div id="app" v-bind:style="cssObj.body">
            <div class="topMenu" v-bind:style="cssObj.topMenu">
                <div class="skillsDetail">
                    <button type="button" v-bind:style="cssObj.btn.skillsDetail" v-on:mouseover="ontopMenu(0)" v-on:mouseleave="closeDetail(0)">Skills Detail</button>
                </div>
                <transition name="fade">
                    <div class="whatIcan" v-bind:style="cssObj.whatIcan" v-show="controlObj.whatIcan">
                            <button type="button" v-bind:style="cssObj.btn.hardware" v-on:mouseover="onsubMenu(1)" v-on:mouseleave="closeDetail(1)" v-on:>Hardware</button>
                            <button type="button" v-bind:style="cssObj.btn.firmware" v-on:mouseover="onsubMenu(2)" v-on:mouseleave="closeDetail(2)">Firmware</button>
                            <button type="button" v-bind:style="cssObj.btn.software" v-on:mouseover="onsubMenu(3)" v-on:mouseleave="closeDetail(3)">Software</button>
                    </div>
                </transition>
                <div class="Portfoilo">
                    <router-link to="/portfolio" v-bind:style="cssObj.btn.portfolio" v-on:mouseover="ontopMenu(4)" v-on:click="gotoPortfoilo()" v-on:mouseleave="closeDetail(4)">Portfoilo</router-link>
                </div>
                <div class="aboutMe">
                    <router-link to="/aboutme" v-bind:style="cssObj.btn.aboutme" v-on:mouseover="ontopMenu(5)" v-on:mouseleave="closeDetail(5)">AboutMe</router-link>
                </div>
            </div>
            <router-view></router-view>
            <div class="intro">
                <div>
                    <p>photo</p>
                </div>
                <div>
                    <P>�븞�뀞�븯�꽭�슂! �떖洹쒕퉰�엯�땲�떎.</P>
                    <p>����뒗 媛쒕컻�옄�엯�땲�떎.</p>
                </div>
            </div>
            <div class="summery">
                <div class="summery_contact">
                    <span>Contact Info</span>
                    <div class="summery_contact_info">
                        <p>Phone : 010-4443-2530</p>
                        <p>E-mail : shimrbqls@gmail.com</p>
                    </div>
                </div>
                <div class="summery_skills">
                    <span>SKILLS</span>
                    <div class="summery_skills_info">
                        <div>
                            <p>HARDWARE</p>
                            <p>Cadence</p>
                            <p>Pads</p>
                            <p>Artwork</p>
                            <p>Lab Equipment</p>
                            <!-- <p>Microcontroller</p>
                            <p>Atmega16, Atmega8, PIC18, ESP32</p>
                            <p>Communication</p>
                            <p>RS485, RS232, SPI, BLE</p>
                            <p>Sensor</p>
                            <p>Temperature, Current, Acceleration, Gyroscope</p> -->
                        </div>
                        <div>
                            <p>FIRMWARE</p>
                            <!-- <p>Tools</p>
                            <p>Atmel Studio, MPlab</p> -->
                        </div>
                        <div>
                            <p>SOFTWARE</p>
                            <p>C C++ JavaScript VUE TypeScript</p>
                            <!-- <p>C++</p>
                            <p>JavaScript</p>
                            <p>vue</p>
                            <p>TypeScript</p> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </BODY>
</template>

<style>
body{
	height: 100%;
	width: 100%;
	background-color: black;
	color: white;
}

.intro{
	margin-top: 20%;
	width: 100%;
	display: flex;
	justify-content: space-around;
}

.summery{
	margin-top: 15%;
	display: flex;
	justify-content: space-around;
}

.summery_contact{
	width: 30%;
}

.summery_contact span{
	font-weight: bold;
}

.summery_contact p {
	margin-left: 10%;
}

.summery_skills span{
	text-align: center;
}

.summery_skills_info{
	display: flex;
	justify-content: space-between;
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


 /* .container {
	max-width: none;
	width : 100%;
	height : 100%;
	padding : 0;
	overflow-y: auto;
}

.topMenu{
	position: sticky;
	top: 0;
	display: flex;
	justify-content: space-around;
	background-color: #4C4C4C;
	width : 100%;
	padding-top:0.5em;
	padding-bottom: 0.5em;
}

.topMenu p{
	text-align: center;
	color: #b2b2b2;
	margin-bottom: 0.5em;
}

.topMenu button:focus{
	border: none;
	outline: none;
}

.topMenu img{
	width:100%;
}

.topMenu-eventType {
	display: flex;
	border-right: 1px solid #626262;
	flex-direction: column;
	width: 40%;
}

.topMenu-errorType {
	display: flex;
	border-right: 1px solid #626262;
	flex-direction: column;
	width: 20%;
}

.topMenu-activeType {
	display: flex;
	border-right: 1px solid #626262;
	flex-direction: column;
	width: 15%;
}

.topMenu-atScroll {
	display: flex;
	border-right: 1px solid #626262;
	flex-direction: column;
	width: 10%;
}

.topMenu-create {
	width: 15%;
}

.topMenu-button {
	display: flex;
	justify-content: space-around;
}

.table-Header th{
	padding: 3px 0;
}

.table-Header th:nth-child(1) {
	width: 8%;
	border-right: 1px solid #C8C8C8;
}

.table-Header th:nth-child(2) {
	width: 8%;
	border-right: 1px solid #C8C8C8;
}

.table-Header th:nth-child(3) {
	width: 4%;
	border-right: 1px solid #C8C8C8;
}

.table-Header th:nth-child(4) {
	width: 9%;
	border-right: 1px solid #C8C8C8;
}

.table-Header th:nth-child(5) {
	width: 32%;
	border-right: 1px solid #C8C8C8;
}

.table-Header th:nth-child(6) {
	width: 32%;
	border-right: 1px solid #C8C8C8;
}

.table-Header th:nth-child(7) {
	width: 7%;
}

.table-data td{
	padding: 0px;
	font-size: 13px;
} */
</style>