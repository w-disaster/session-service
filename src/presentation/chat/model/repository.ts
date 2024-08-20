export interface Id {}
export interface Entry<X extends Id, Y> {
  id: X
  value?: Y
}

export class Repository<X extends Entry<Y, Z>, Y extends Id, Z> {
  private array: Array<X>

  constructor(array: Array<X>) {
    this.array = array
  }

  contains(id: Y): boolean {
    return this.array.some((el) => el.id == id)
  }

  add(element: X): boolean {
    if (!this.contains(element.id)) {
      this.array.push(element)
      return true
    }
    return false
  }

  remove(id: Y): boolean {
    if (this.contains(id)) {
      this.array = this.array.filter((el) => el.id == id)
      return true
    }
    return false
  }

  find(id: Y): X | undefined {
    return this.array.find((el) => el.id == id)
  }

  get values(): Array<X> {
    return this.array
  }
}
