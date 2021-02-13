import { AddAccountRepository } from '../../../../data/protocols/add-account-repository'
import { AccountModel } from '../../../../domain/models/account'
import { AddAccountModel } from '../../../../domain/usecases/add-account'

export class AccountMongoRepository implements AddAccountRepository {
  async add (account: AddAccountModel): Promise<AccountModel> {
    return await new Promise(resolve => resolve({
      id: 'string',
      name: 'any_name',
      email: 'any_name@gmail.com',
      password: 'any_password'
    }))
  }
}
