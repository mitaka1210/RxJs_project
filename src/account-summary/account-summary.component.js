import AccountDetailsComponent from "@/account-details/account-details.component.vue";
import DetailsBoardComponent from "@/post-details/details-board.component.vue";
import AccountsManagerComponent from "@/accounts-manager/accounts-manager.component.vue";
import Component from 'vue-class-component';
import { Dependency } from '@/core/dependency';

@Component( {
  components: {
    AccountDetailsComponent,
    AccountsManagerComponent,
    DetailsBoardComponent
  }
})
export default class AccountSummaryComponent extends Dependency {
  constructor() {
    super(['AccountsManager']);
  }

  data() {
    return {
      accountData: null
    }
  }
  
  mounted() {
    this.AccountsManager.getInitialData().subscribe(r => {
       this.$data.accountData = r;
    });
  }
}