import AccountSummaryComponent from '@/account-summary/account-summary.component.vue';
import AccountRegisterComponent from '@/account-register/account-register.component.vue';
import { Dependency } from '@/core/dependency';
import Component from 'vue-class-component';

@Component(
  {
    components: {
      AccountSummaryComponent,
      AccountRegisterComponent
    }
  }
)
export default class DashBoardComponent extends Dependency {
  name = 'DashBoardComponent'
  
  constructor() {
    super(['AccountsManager']);
  }

  data() {
    return {
      testProp: 15,
      accountData: null
    }
  }

  testBtn() {
    this.AccountsManager.testMethodFromInject();
  }

  mounted() {
    this.AccountsManager.getInitialData().subscribe(r => {
      this.$data.accountData = r;
   });
  }
}