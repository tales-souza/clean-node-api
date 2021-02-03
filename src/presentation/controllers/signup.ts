import { InvalidParamError, MissingParamError } from '../errors/missing-param-error'
import { HttpRequest, HttpResponse } from '../protocols/http'
import { badRequest } from '../helpers/http-helper'
import { Controller } from '../protocols/controller'
import { EmailValidator } from '../protocols/email-validator'


export class SignUpController implements Controller {

  private readonly emailValidator: EmailValidator
  constructor(emailValidator: EmailValidator){
    this.emailValidator = emailValidator
  }

  handle(httpRequest: HttpRequest): HttpResponse {
    const requireFields = ['name', 'email', 'password']
    for (const field of requireFields){
      if(!httpRequest.body[field]){
        return badRequest(new MissingParamError(field))
      }
    }

    const isValid = this.emailValidator.isValid(httpRequest.body.email)

    if(!isValid){
      return badRequest(new InvalidParamError('email'))
    }

  }

}