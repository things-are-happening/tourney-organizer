import _ from 'lodash'
/**
 * generateKey ( Because I don't like to use `_id` )
 * Generates a unique key
 * @param Model -> Object
 * @param Property Name (I.E. `clientId`) -> String
 * @return Key -> String
**/
export function generateKey(model, propName) {
  // Algorythm for Key
  const keyAlgo = () => {
    return parseInt(Math.floor(Math.random() * 9000) + 1000)
  }
  let key = keyAlgo()

  // Verify Key is unique
  model.find({}, (err, result) => {
    for(var i = 0; i < result.length; i++) {
      if(result[i][propName] === key)
        key = keyAlgo()
    }
  })
  return key.toString()
}

/**
 * errHandler
 * Returns the first error in the object sent from schema plugin
 * @param response
 * @param Number
 * @param Object
 * @return Response
**/
export function errHandler(res, status = 420, errorObj){
  let errKeys = Object.keys(errorObj)
  let errMsg = (errKeys.length > 0) ? errorObj[errKeys[0]].message : `Error`
  return res.status(status).json(errMsg)
}
