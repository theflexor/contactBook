import { useState } from 'react'

import { useTypedSelector } from '@hooks/index'
import { Box, styled } from '@mui/material'
import { sortAndFilterContact } from '@utils/filterContact'

import { List, MyModal } from '..'

export const Main = () => {
    const { editContact, list } = useTypedSelector((state) => state.bookSlice)

    const [open, setOpen] = useState<boolean>(false)
    const handleCloseModal = () => setOpen(false)
    const sortedList = sortAndFilterContact(list)
    
    return (
        <Styled>
            <List list={sortedList} setOpen={setOpen} /> 
            <MyModal open={open} editContact={editContact} handleClose={handleCloseModal} />
        </Styled>
    )
}

const Styled = styled(Box)`
    flex: 1;
`
