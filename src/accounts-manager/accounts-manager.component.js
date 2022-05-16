import { Dependency } from '@/core/dependency';
import Component from 'vue-class-component';

@Component
export default class AccountsManagerComponent extends Dependency {
  constructor() {
    super(['AccountsManager']);
  }

  data() {
      return {
        account: null,
        roleToAdd: ''
      }
  }

  mounted() {
    this.AccountsManager.getInitialData().subscribe(r => {
      this.$data.account = r;
    });
  }

  addRoleToAccount() {
    this.AccountsManager.addRoleToAccount(this.roleToAdd);
    this.roleToAdd = '';
  }
}