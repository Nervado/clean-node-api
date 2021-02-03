import { MissingParamError } from '../errors/missing-params-error'
import { badRequest } from '../helpers/http-helper'
import { HttpRequest, HttpResponse } from '../protocols/http'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse | undefined {
    const requiredFields = ['name', 'email']
    for (const field of requiredFields) {
      return badRequest(new MissingParamError(field))
    }
  }
}
