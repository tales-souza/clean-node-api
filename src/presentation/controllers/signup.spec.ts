import { SignUpController } from './signup'
describe('SignUp Controller', () => {
  test('Should return 400 if no name is provide ', ()  => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email:'tales.monteiro@hotmail.com',
        password:'tales123',
        passwordConfirmation: 'tales123' 
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})