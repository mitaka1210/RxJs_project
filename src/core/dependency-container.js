import dependencyResolver from '@/core/dependency-resolver'

// Data providers
import AccountsProvider from '@/accounts-management/accounts-management.provider'
import UsersProvider from "@/post-details-managment/post-details.provider";

// Services
import AccountsManager from '@/accounts-management/accounts-management.service'
import usersManager from "@/post-details-managment/post-details.service";

export default class DependencyContainer {
    async configure() {
        return new Promise(resolve => {
            dependencyResolver.register('AccountsProvider', AccountsProvider)
            dependencyResolver.register('AccountsManager', AccountsManager)
            dependencyResolver.register('UsersProvider', UsersProvider)
            dependencyResolver.register('usersManager', usersManager)
            resolve()
        })
    }
}