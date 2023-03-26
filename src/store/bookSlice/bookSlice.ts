import { createSlice } from '@reduxjs/toolkit'
import { bookSliceTypes } from '@typess/book.types'

import { BookTypes } from './../../types/book.types'

const initialState: bookSliceTypes = {
    list: [],
    modal: false,
    search: '',
    sort: 'default',
    editContact: {
        address: {
            city: '',
            geo: {
                lat: '',
                lng: '',
            },
            street: '',
            suite: '',
            zipcode: '',
        },
        company: {
            bs: '',
            catchPhrase: '',
            name: '',
        },
        email: '',
        id: 0,
        name: '',
        phone: '',
        username: '',
        website: '',
    },
}

export const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setList(state, action) {
            state.list = action.payload
        },
        setChangeBook(state, action) {
            state.list = state.list.map((book) => {
                if (book.id === action.payload.id) {
                    return action.payload
                }
                return book
            })
        },
        setChangeEditContact(state, action) {
            state.editContact = action.payload
        },
        setSearch(state, action) {
            state.search = action.payload
        },
        setTypeSort(state,action){
            state.sort = action.payload
        }
    },
})

export const { setChangeBook, setList, setChangeEditContact, setSearch,setTypeSort } = bookSlice.actions
export default bookSlice.reducer
