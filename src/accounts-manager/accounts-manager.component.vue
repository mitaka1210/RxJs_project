<template>
  <v-container>
    <div style="border: 1px solid blue">
      <div>Accounts manager</div>
      <div>Roles</div>
      <div v-if="account != null" style="border: 1px solid crimson;">
        {{account.balance}}
      </div>
      <input type="text" v-model="roleToAdd" />
      <v-btn @click="addRoleToAccount">Add role to account</v-btn>
    </div>
  </v-container>
</template>

<script src="./accounts-manager.component.js"></script>
<style lang="scss">
  @import './accounts-manager.component.scss';
</style>