import { useEffect } from 'react'

import { MainAnimation } from '@components/animation/Animation'
import { Box, Container, useMediaQuery } from '@mui/material'
import { styled } from '@mui/system'
import { setList } from '@store/bookSlice/bookSlice'

import instance from './api'
import { Header, Main, SideBar } from './components'
import { useTypedDispatch } from './hooks'

export const App = () => {
    const dispatch = useTypedDispatch()
    const mobile = useMediaQuery('(max-width: 600px)')

    useEffect(() => {
        const getData = async () => {
            const data = await instance.get('/users')
            if (!data.data.length) {
                throw new Error('ошибка')
            }
            dispatch(setList(data.data))
        }
        if (!localStorage.getItem('persist:root')) {
            getData()
        }
    }, [])
    return (
        <>
            <Container>
                <Body className="body">
                    <Header />
                    <Box className="body-wrapper" style={{display: mobile ? 'block': 'flex'}}>
                        <SideBar width="20%"/>
                        <Main />
                    </Box>
                </Body>
            </Container>
            <MainAnimation />
        </>
    )
}

const Body = styled(Box)`
    .body-wrapper {
        justify-content: space-between;
        gap: 2rem;
    }
`
