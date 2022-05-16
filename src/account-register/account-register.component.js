import { Dependency } from '@/core/dependency';
import Component from 'vue-class-component';

@Component
export default class AccountRegisterComponent extends Dependency {
  constructor() {
    super(['AccountsManager']);
  }

  data() {
    return {
      accountData: null,
      e1: 1,
      selectedRoleIdx: 0
    }
  }
  
  mounted() {
    this.AccountsManager.getInitialData().subscribe(r => {

      this.$data.accountData = r;
   });
  }
}