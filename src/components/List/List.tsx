import React, { Dispatch, SetStateAction } from 'react'

import { Box, styled } from '@mui/material'
import { BookTypes } from '@typess/book.types'

import { MyCard } from '..'

interface ListProps {
    list: BookTypes[]
    setOpen: Dispatch<SetStateAction<boolean>>
}

export const List: React.FC<ListProps> = ({ list, setOpen }) => {
    return (
        <Styled>
            {list.map((book) => (
                <MyCard key={book.id} book={book} setOpen={setOpen} />
            ))}
        </Styled>
    )
}

const Styled = styled(Box)`
    display: flex;
    flex-wrap: wrap;
    gap: 1.4rem;
    /* padding: 0 1.5rem; */
`
