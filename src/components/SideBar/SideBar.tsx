import {ChangeEvent} from 'react'
import { useDispatch } from 'react-redux'

import { useTypedSelector } from '@hooks/index'
import { Box, Radio, styled, useMediaQuery } from '@mui/material'
import RadioGroup from '@mui/material/RadioGroup'
import Typography from '@mui/material/Typography/Typography'
import { setTypeSort } from '@store/bookSlice/bookSlice'

export const SideBar = ({ width }: { width: string }) => {
    const value = useTypedSelector((state) => state.bookSlice.sort)
    const mobile = useMediaQuery('(max-width: 600px)')
    const dispatch = useDispatch()

    const handleTypedSord = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch(setTypeSort(e.target.value))
    }
    return (
        <Styled
            width={width}
            style={{
                height: mobile ? 'auto' : '70vh',
                width: mobile ? '100%' : '20%',
                marginBottom: mobile ? '20px' : '0',
            }}
        >
            <RadioGroup
                onChange={(e) => handleTypedSord(e)}
                value={value}
                defaultValue="female"
                name="controlled-radio-buttons-group"
            >
                <Box className="sort-group" style={{ display: mobile ? 'flex' : 'block', gap: '10px' }}>
                    <Box className="sort-group_item">
                        <Radio className="sort-group_radio" size="small" value="0" />
                        <Typography variant="body2" className="sort-group_text">
                            default
                        </Typography>
                    </Box>
                    <Box className="sort-group_item">
                        <Radio className="sort-group_radio" size="small" value="1" />
                        <Typography variant="body2" className="sort-group_text">
                            A-Z
                        </Typography>
                    </Box>
                    <Box className="sort-group_item">
                        <Radio className="sort-group_radio" size="small" value="2" />
                        <Typography variant="body2" className="sort-group_text">
                            Z-A
                        </Typography>
                    </Box>
                </Box>
            </RadioGroup>
        </Styled>
    )
}

const Styled = styled(Box)`
    background: white;
    padding: 10px;
    height: 80vh;
    border-radius: 5px;
    .sort-group {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 7px;
        &_item {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
        }
        &_radio {
            padding: 0;
        }
        &_text {
            width: 60px;
        }
    }
`
