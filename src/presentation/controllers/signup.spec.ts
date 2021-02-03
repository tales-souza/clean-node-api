import { SignUpController } from './signup'
import { MissingParamError } from '../errors/missing-param-error'
import { InvalidParamError   } from '../errors/missing-param-error'


//factory
const makeSut = (): any => {
  
  class EmailValidatorStub {
    isValid (email: string): boolean{
      return true
    }
  }

  const emailValidatorStub = new EmailValidatorStub
  const sut = new SignUpController(emailValidatorStub)

  return {
    sut,
    emailValidatorStub
  }
}

describe('SignUp Controller', () => {
  test('Should return 400 if no name is provide ', ()  => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        email:'tales.monteiro@hotmail.com',
        password:'tales123',
        passwordConfirmation: 'tales123',
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })

  test('Should return 400 if no email is provide ', ()  => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        password:'tales123',
        passwordConfirmation: 'tales123',
        name:'teste' 
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })

  test('Should return 400 if no password is pr  ovide ', ()  => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        email:'teste@teste.com',
        passwordConfirmation: 'tales123',
        name:'teste' 
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
  })


  test('Should return 400 if an invalid email is provided ', ()  => {
    const { sut, emailValidatorStub } = makeSut()
    jest.spyOn(emailValidatorStub, 'isValid').mockReturnValueOnce(false)
    const httpRequest = {
      body: {
        email:'teste@teste.com',
        password:'tales123',
        passwordConfirmation: 'tales123',
        name:'teste' 
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new InvalidParamError('email'))
  })

})