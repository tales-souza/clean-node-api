export class SignUpController {

  handle(httpRequest: any): any {

    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error('Mising param: name')
      }
    }

    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new Error('Mising param: email')
      }
    }


  }

}