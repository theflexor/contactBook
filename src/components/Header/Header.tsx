import { useDispatch } from 'react-redux'

import { useTypedSelector } from '@hooks/index'
import { Box, styled, TextField } from '@mui/material'
import { setSearch } from '@store/bookSlice/bookSlice'

export const Header = () => {
    const text = useTypedSelector((state) => state.bookSlice.search)
    const dispatch = useDispatch()
    return (
        <Styled>
            <Box>
                <TextField
                    value={text}
                    onChange={(e) => dispatch(setSearch(e.target.value))}
                    variant="standard"
                />
            </Box>
        </Styled>
    )
}

const Styled = styled(Box)`
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
`
