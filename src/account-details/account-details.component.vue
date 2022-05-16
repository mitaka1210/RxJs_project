<template>
  <v-container>
    Account details
    <div class="balance-container" v-if="accountDataAdditional != null">
      <div>Telephone - {{accountDataAdditional.telephone}}</div>
      <div>Balance - {{accountDataAdditional.balance}}</div>
    </div>
  </v-container>
</template>

<script src="./account-details.component.js"></script>
<style lang="scss">
  @import './account-details.component.scss';
</style>