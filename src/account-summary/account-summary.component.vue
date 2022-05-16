<template>
  <v-container>
    Account summary
    <div v-if="accountData != null">
      <div>Email - {{accountData.emailAddress}}</div>
      <div>Username - {{accountData.userName}}</div>
      <div>Roles - {{accountData.roles}}</div>
    </div>
    <account-details-component />
    <accounts-manager-component />
    <details-board-component/>
  </v-container>
</template>

<script src="./account-summary.component.js">  
</script>
<style lang="scss">
  @import './account-summary.component.scss';
</style>