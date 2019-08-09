import React from 'react'

export type Book = {
  id: string
  title: string
  pagesAmount: number
}

type BooksState = {
  books: Book[]
}

export const BooksContext = React.createContext<BooksState>((undefined as any) as BooksState)

export class BooksProvider extends React.Component<any, BooksState> {
  constructor(props: any) {
    super(props)

    this.state = {
      books: [],
    }
  }

  render() {
    return <BooksContext.Provider value={this.state}>{this.props.children}</BooksContext.Provider>
  }

  addBook() {

  }

  removeBook() {

  }

  changeTitle(id: string, title: string) {

  }

  changePagesAmount(id: string, title: string) {

  }
}
