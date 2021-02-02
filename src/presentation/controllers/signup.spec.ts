import { SignUpController } from './signup'
describe('SignUp Controller', () => {
  test('Should return 400 if no name is provide ', ()  => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email:'tales.monteiro@hotmail.com',
        password:'tales123',
        passwordConfirmation: 'tales123',
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Mising param: name'))
  })

  test('Should return 400 if no email is provide ', ()  => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        password:'tales123',
        passwordConfirmation: 'tales123',
        name:'teste' 
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Mising param: email'))
  })


})