import { Dependency } from '@/core/dependency';
import Component from 'vue-class-component';

@Component
export default class AccountDetailsComponent extends Dependency {
  constructor() {
    super(['AccountsManager']);
  }

  data() {
      return {
          accountDataAdditional: null
      }
  }

  mounted() {
    this.AccountsManager.getInitialData().subscribe(r => {
       this.$data.accountDataAdditional = r;
    });
  }
}