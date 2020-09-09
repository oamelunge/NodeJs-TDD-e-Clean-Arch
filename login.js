/* const express = require ('express')
const router = express.Router()

//login file
module.exports = () => {
  const router = new SignupRouter()
  router.post('/signup', ExpressrouterAdapter.adapt(router))
}

//adapter file
class ExpressrouterAdapter{
  static adapt(router){
    //router

    return async(req, res)=>{
        const httpRequest={
          body:req.body
        }

        const httpResponse = router.route(httpRequest)
        res.status(httpResponse).json(body);
    }
  }
}

//PRESENTATION LAYER
//Signup -- Router otro archivo
class SignupRouter{
  async route (httpRequest) {
    const {email, password, repeatPassword} = httpRequest.body
    const user = new SignupUseCase.signup(email, passwor, repeatPassword)
    return {
        statuCode:200,
        body: user
    }
  }
}

//DOMAIN
//signup-uscase
class SignupUseCase{
  async signUp(email, password, repeatPassword){

      if(password === repeatPassword){
        new AddAccountRepository.add(email, passwor, repeatPassword)
    }
  }
}

//INFRA LAYER
//AddAccountRepository
const mongoose = require ('mongoose')
const AccountModel = mongoose.model('Account')
class AddAccountRepository{
  async add(email, password, repeatPassword){/
      const user = await AccountModel.create({email,password})
      return user
    }
  }
*/
