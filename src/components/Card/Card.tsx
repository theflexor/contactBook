import { Dispatch, SetStateAction } from 'react'
import { useDispatch } from 'react-redux'

import LanguageIcon from '@mui/icons-material/Language'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import MailIcon from '@mui/icons-material/Mail'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import WorkIcon from '@mui/icons-material/Work'
import { Box, styled } from '@mui/material'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { setChangeEditContact } from '@store/bookSlice/bookSlice'
import { BookTypes } from '@typess/book.types'

import { FlexBetween } from '..'

type MyCardProps = {
    book: BookTypes
    setOpen: Dispatch<SetStateAction<boolean>>
}

export const MyCard = ({ book, setOpen }: MyCardProps) => {
    const dispatch = useDispatch()
    const handleOpen = (book: BookTypes) => {
        dispatch(setChangeEditContact(book))
        setOpen(true)
    }
    return (
        <Styled>
            <CardContent>
                <FlexBetween>
                    <Box>
                        <Box className="center">
                            <Typography gutterBottom variant="h5" component="div">
                                {book.name}
                            </Typography>
                        </Box>
                    </Box>
                    <Box className="center">
                        <Typography className="card_text_username" variant="body2" color="text.secondary">
                            {book.username}
                        </Typography>
                    </Box>
                </FlexBetween>
                <FlexBetween>
                    <Box className="card-main_side">
                        <Box className="center">
                            <LocationOnIcon fontSize="small" />
                            <Typography
                                className="card_text_city"
                                gutterBottom
                                variant="body2"
                                component="div"
                            >
                                {book.address.city}
                            </Typography>
                        </Box>
                        <Box className="center">
                            <WorkIcon fontSize="small" />
                            <Typography className="card_text_address" variant="body2" color="text.secondary">
                                {book.company.name}
                            </Typography>
                        </Box>
                    </Box>
                    <Box className="card-main_side">
                        <Box className="center">
                            <PhoneAndroidIcon fontSize="small" />
                            <Typography gutterBottom variant="body2">
                                {book.phone}
                            </Typography>
                        </Box>
                        <Box className="center">
                            <LanguageIcon fontSize="small" />
                            <Typography variant="body2" color="text.secondary">
                                {book.website}
                            </Typography>
                        </Box>
                    </Box>
                </FlexBetween>
                <FlexBetween className="card-address">
                    <Box className="card-address_side">
                        <Typography>Address:</Typography>
                        <Typography variant="body2">
                            <strong className="card-text_title">city: </strong>
                            {book.address.city}
                        </Typography>
                        <Typography variant="body2">
                            <strong className="card-text_title">suite: </strong>
                            {book.address.suite}
                        </Typography>
                    </Box>
                    <Box className="card-address_side">
                        <Typography variant="body2">
                            <strong className="card-text_title">street: </strong>
                            {book.address.street}
                        </Typography>
                        <Typography variant="body2">
                            <strong className="card-text_title">zipcode: </strong>
                            {book.address.zipcode}
                        </Typography>
                        <Typography variant="body2">
                            <strong className="card-text_title">geo: </strong>
                            {book.address.geo.lat} {book.address.geo.lng}
                        </Typography>
                    </Box>
                </FlexBetween>
                <Box>
                    <Typography>Job info:</Typography>
                    <Typography variant="body2">
                        <strong className="card-text_title">catchPhrase: </strong>
                        {book.company.catchPhrase}
                    </Typography>
                    <Typography variant="body2">
                        <strong className="card-text_title">bs: </strong> {book.company.bs}
                    </Typography>
                </Box>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    onClick={() => {
                        handleOpen(book)
                    }}
                >
                    Edit
                </Button>
            </CardActions>
        </Styled>
    )
}

const Styled = styled(Card)`
    /* background: #871717; */
    flex: 1;
    min-width: 300px;
    max-width: 450px;
    .center {
        display: flex;
        gap: 0.3rem;
    }
    .card-address {
        margin: 0.5rem 0;
        &_side {
            flex: 1;
        }
    }
    .card-main_side {
        flex: 1;
    }
`

// export interface BookTypes {
//     id: number
//     name: string
//     username: string
//     email: string
//     address: AdressTypes
//     company: CompanyTypes
//     phone: string
//     website: string
// }

// export interface AdressTypes {
//     street: string
//     suite: string
//     city: string
//     zipcode: string
//     geo: GeoTypes
// }

// export interface GeoTypes {
//     lat: string
//     lng: string
// }

// export interface CompanyTypes {
//     name: string
//     catchPhrase: string
//     bs: string
// }

// export interface bookSliceTypes {
//     list: BookTypes[]
//     modal: boolean
// }
