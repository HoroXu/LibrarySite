import createUUID from './uuid'

const listAddkey = (list=[], key) => {
  list && list.forEach(item => {
    item.key = key ? item[key] : createUUID()
  })
}

export default listAddkey
