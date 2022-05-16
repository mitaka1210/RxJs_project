import { Subject, zip } from 'rxjs';
import { map } from 'rxjs/operators';
import { Dependency } from '@/core/dependency';

export default class usersManager extends Dependency {
    constructor() {
        super(['UsersProvider']);
    }

    pencho = new Subject();

    init = false;

    accountData = {
        roles: ['admin12']
    };

    getInitialData() {
        if (!this.init) {
            const usersDataSubscription = this.UsersProvider.usersDataObservable().pipe(map((v, i) => {
                console.log('az sum services', v);
                return v;
            }));
            zip(usersDataSubscription).subscribe(response => {
                this.accountData = {...response};
                this.pencho.next(this.accountData);
                console.log('tuk e r',  this.accountData);
            });
            this.init = true;
        } else {
            this.pencho.next(this.accountData);
        }
        return this.pencho.asObservable();
    }
}