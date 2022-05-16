<template>
  <v-container>    
    <v-btn @click="testBtn">Test btn UP</v-btn>
    {{testProp}}
    <div v-if="accountData != null" style="background-color: lime">
      {{accountData.roles}}
    </div>
    <account-summary-component />
    <account-register-component />
  </v-container>
</template>

<script src="./dash-board.component.js"></script>
<style scoped>
  @import './dash-board.component.scss';
</style>