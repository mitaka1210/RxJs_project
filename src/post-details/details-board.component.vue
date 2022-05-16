<template>
  <v-container>
    Account details
    <div class="balance-container12" v-if="accountDataAdditional != null">
      <div>Telephone - {{accountDataAdditional.telephone}}</div>
      <div>Balance - {{accountDataAdditional.balance}}</div>
    </div>
  </v-container>
</template>

<script src="./details-board.component.js"></script>
<style lang="scss">
@import './details-bard.component.scss';
</style>