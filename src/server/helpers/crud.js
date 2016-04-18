import q from 'q'

const populateModel = ( Model, query,  popString ) => {
  popString = popString.replace(/,/g, ' ')
  return Model.findOne(query)
  .populate(popString)
  .exec((err, result) => {
    if(err){
      throw new Error(`Error populating model ${err}`)
    }
    return result
  })
}

/*******************************************************************************
Create
*******************************************************************************/
export function crudCreate ( Model, body ){
  let dfd = q.defer()
  new Model(body).save()
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
export function crudReadOne( Model, query, populate = {} ){
  let dfd = q.defer()
  Model.findOne( query )
    .then( result => {
      if(!result){
        return dfd.reject(`No Result`)
      }
      if(Object.keys(populate).length === 2){
        let query =  {}
        query[populate.idName] = result[populate.idName]
        return dfd.resolve(populateModel( Model, query, populate.str ))
      }
      return dfd.resolve(result)
    })
    .catch( err => {
      return dfd.reject(err)
    })
  return dfd.promise
}

export function crudReadAll( Model, query = {}, populate = {} ){
  let dfd = q.defer()
  Model.find(query)
    .then( result => {
      if(!result || result.length === 0){
        return dfd.reject(`No result`)
      }
      if(Object.keys(populate).length > 0){
        let query =  {}
        query[populate.idName] = result[populate.idName]
        return dfd.resolve(populateModel( Model, query, populate.str ))
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
export function crudUpdate( Model, query, body, populate = {} ){
  let dfd = q.defer()
  Model.findOneAndUpdate(query, body, {}, (err, result) => {
    if(err)
      return dfd.reject(err)
    if(Object.keys(populate).length > 0){
      let query =  {}
      query[populate.idName] = result[populate.idName]
      return dfd.resolve(populateModel( Model, query, populate.str ))
    }
    return dfd.resolve(result)
  })
  return dfd.promise
}

/*******************************************************************************
Delete
*******************************************************************************/
export function crudDelete( Model, query = {}){
  let dfd = q.defer()
  Model.find(query).remove()
    .then( result => {
      return dfd.resolve(`Delete Successful`)
    })
    .catch( err => {
      return dfd.reject(`Could Not Delete`)
    })
  return dfd.promise
}
