<template>
  <v-container>    
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">Name of step 1</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="e1 > 2" step="2">Name of step 2</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3">
          Name of step 3
        </v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card class="mb-12" color="grey lighten-1" height="200px" v-if="accountData != null">
            <div>
              <v-list-item-group v-model="selectedRoleIdx" color="primary">
                <v-list-item v-for="role in accountData.roles" :key="role.key">
                  <v-list-item-content>
                    <v-list-item-title>{{role}}</v-list-item-title>
                    <v-list-item-subtitle>additional info ...</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </div>
            <div>
              Selected role is: {{accountData.roles[selectedRoleIdx]}}
            </div>
          </v-card>
          <v-btn color="primary" @click="e1 = 2">Continue</v-btn>
          <v-btn text>Cancel</v-btn>
        </v-stepper-content>
        <v-stepper-content step="2">
          <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>
          <v-btn color="primary" @click="e1 = 3">Continue</v-btn>
          <v-btn text>Cancel</v-btn>
        </v-stepper-content>
        <v-stepper-content step="3">
          <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>
          <v-btn color="primary" @click="e1 = 1">Continue</v-btn>
          <v-btn text>Cancel</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>

<script src="./account-register.component.js"></script>
<style scoped>
  @import './account-register.component.scss';
</style>