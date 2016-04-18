import q from 'q'

/*******************************************************************************
Create
*******************************************************************************/
export function crudCreate ( model, body ){
  let dfd = q.defer()
  new model(body).save()
    .then(result => {
      return dfd.resolve(result)
    })
    .catch(err => {
      return dfd.reject(err)
    })
    return dfd.promise
}

/*******************************************************************************
Read
*******************************************************************************/
export function crudReadOne( model, query ){
  let dfd = q.defer()
  model.findOne( query )
    .then( result => {
      if(!result){
        return dfd.reject(`No Result`)
      }
      return dfd.resolve(result)
    })
    .catch( err => {
      return dfd.reject(err)
    })
  return dfd.promise
}

export function crudReadAll( model, query = {} ){
  let dfd = q.defer()
  model.find({})
    .then( result => {
      if(!result || result.length === 0){
        return dfd.reject(`No result`)
      }
      return dfd.resolve(result)
    })
    .catch( err => {
      return dfd.reject(err)
    })
  return dfd.promise
}

/*******************************************************************************
Update
*******************************************************************************/
export function crudUpdate( model, query, body ){
  let dfd = q.defer()
  model.findOneAndUpdate(query, body, {}, (err, result) => {
    if(err)
      return dfd.reject(err)
    return dfd.resolve(result)
  })
  return dfd.promise
}

/*******************************************************************************
Delete
*******************************************************************************/
export function crudDelete( model, query = {}){
  let dfd = q.defer()
  model.find(query).remove()
    .then( result => {
      return dfd.resolve(`Delete Successful`)
    })
    .catch( err => {
      return dfd.reject(`Could Not Delete`)
    })
  return dfd.promise
}
