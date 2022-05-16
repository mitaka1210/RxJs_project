import { Subject, zip } from 'rxjs';
import { map } from 'rxjs/operators';
import { Dependency } from '@/core/dependency';

export default class AccountsManager extends Dependency {    
    constructor() {
        super(['AccountsProvider']);
    }

    initialDataSubject12 = new Subject();
    
    init = false;

    accountData = {
        roles: ['admin12']
    };

    getInitialData() {
        if (!this.init) {
            var accountsDataSubscription = this.AccountsProvider.accountsDataObservable().pipe(map((v, i) => {
                return v;
            }));
            
            var accountsDataAdditionalSubscription = this.AccountsProvider.accountsDataAdditionalObservable().pipe(map((v, i) => {
                return v;
            }));

            zip(accountsDataSubscription, accountsDataAdditionalSubscription).subscribe(r => {
                this.accountData = {...this.accountData, ...r[0], ...r[1]};
                this.initialDataSubject12.next(this.accountData);
            });
            this.init = true;
        } else {
            this.initialDataSubject12.next(this.accountData);
        }
        return this.initialDataSubject12.asObservable();
    }

    addRoleToAccount(role) {
        this.AccountsProvider.addRoleToAccount(role).subscribe(r => {
            if (r) {
                this.accountData.roles.push(role);
            }
        });
    }

    testMethodFromInject() {
        console.log('Success!');
    }
}