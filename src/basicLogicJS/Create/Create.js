export { CreateObj, CreateAdditObj, CreateMaker }

function CreateObj (it) {
  this.id = it.id
  this.availability = it.availability
}

function CreateAdditObj (el) {
  this.availability = el.quantity > 0
  this.ranting = 0
  this.reviews = []
  this.characteristic = !el.characteristic ? [] : []
}

function CreateMaker (it) {
  this.maker = it.maker
}
