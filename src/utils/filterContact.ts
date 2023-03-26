import { useTypedSelector } from '@hooks/index'

import { BookTypes } from './../types/book.types'

export const sortAndFilterContact = (list: BookTypes[]): BookTypes[] => {
    const { search } = useTypedSelector((state) => state.bookSlice)
    const filteredContact  = list.filter((contact) => contact.name.toLowerCase().includes(search))
    return sortContact(filteredContact)
}

export const sortContact = (list: BookTypes[]): BookTypes[] => {
    const { sort } = useTypedSelector((state) => state.bookSlice)

    if (sort == '1') {
        return list.sort((a, b) => {
            if (a.name[0].toLowerCase() > b.name[0].toLowerCase()) {
                return -1
            }
            if (a.name[0].toLowerCase() < b.name[0].toLowerCase()) {
                return 1
            }
            return 0
        })
    }

    if (sort == '2') {
        return list.sort((a, b) => {
            if (a.name[0].toLowerCase() < b.name[0].toLowerCase()) {
                return -1
            }
            if (a.name[0].toLowerCase() > b.name[0].toLowerCase()) {
                return 1
            }
            return 0
        })
    }

    return list
}
