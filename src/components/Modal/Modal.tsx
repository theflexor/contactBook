import { ChangeEvent, FormEvent, useLayoutEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { Button, Modal, styled, TextField, Typography } from '@mui/material'
import { setChangeBook } from '@store/bookSlice/bookSlice'
import { BookTypes } from '@typess/book.types'

import { FlexBetween } from '..'

interface MyModalProps {
    open: boolean
    editContact: BookTypes
    handleClose: () => void
}

export const MyModal = ({ open, handleClose, editContact }: MyModalProps) => {
    const dispatch = useDispatch()
    const [contact, setContact] = useState<BookTypes>(editContact)
    useLayoutEffect(() => {
        setContact(editContact)
    }, [editContact])

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        switch (e.target.id) {
            case 'address':
                setContact({
                    ...contact,
                    address: {
                        ...contact.address,
                        [e.target.name]: e.target.value,
                    },
                })
                break
            case 'geo':
                setContact({
                    ...contact,
                    address: {
                        ...contact.address,
                        geo: {
                            ...contact.address.geo,
                            [e.target.name]: e.target.value,
                        },
                    },
                })
                break
            case 'company':
                setContact({
                    ...contact,
                    company: {
                        ...contact.company,
                        [e.target.name]: e.target.value,
                    },
                })
                break
            default:
                setContact({
                    ...contact,
                    [e.target.name]: e.target.value,
                })
                break
        }
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(setChangeBook(contact))
        handleClose()
    }

    return (
        <Styled open={!!open} onClose={handleClose}>
            <form onSubmit={handleSubmit} className="box">
                <Typography className="modal-title" variant="h6">
                    Edit contact
                </Typography>
                <FlexBetween className="modal-row">
                    <TextField
                        variant="standard"
                        value={contact.name}
                        label="name"
                        name="name"
                        id="main"
                        onChange={(e) => handleChange(e)}
                    />
                    <TextField
                        variant="standard"
                        value={contact.username}
                        label="username"
                        name="username"
                        id="main"
                        onChange={(e) => handleChange(e)}
                    />
                </FlexBetween>
                <FlexBetween className="modal-row">
                    <TextField
                        id="main"
                        onChange={(e) => handleChange(e)}
                        variant="standard"
                        about="main"
                        value={contact.phone}
                        label="phone"
                        name="phone"
                    />
                    <TextField
                        variant="standard"
                        value={contact.website}
                        label="website"
                        name="website"
                        id="main"
                        onChange={(e) => handleChange(e)}
                    />
                </FlexBetween>
                <FlexBetween className="modal-row">
                    <TextField
                        variant="standard"
                        label="email"
                        name="email"
                        value={contact.email}
                        id="main"
                        onChange={(e) => handleChange(e)}
                    />
                    <TextField
                        variant="standard"
                        value={contact.address.city}
                        label="city"
                        name="city"
                        id="address"
                        onChange={(e) => handleChange(e)}
                    />
                </FlexBetween>
                <FlexBetween className="modal-row">
                    <TextField
                        variant="standard"
                        value={contact.address.suite}
                        label="suite"
                        name="suite"
                        id="address"
                        onChange={(e) => handleChange(e)}
                    />
                    <TextField
                        variant="standard"
                        value={contact.company.bs}
                        label="bs"
                        name="bs"
                        id="company"
                        onChange={(e) => handleChange(e)}
                    />
                </FlexBetween>
                <FlexBetween className="modal-row">
                    <TextField
                        variant="standard"
                        value={contact.company.catchPhrase}
                        label="catchPhrase"
                        name="catchPhrase"
                        id="company"
                        onChange={(e) => handleChange(e)}
                    />
                </FlexBetween>
                <FlexBetween className="modal-row">
                    <TextField
                        variant="standard"
                        value={contact.address.street}
                        label="street"
                        name="street"
                        id="address"
                        onChange={(e) => handleChange(e)}
                    />
                    <TextField
                        variant="standard"
                        value={contact.address.zipcode}
                        label="zipcode"
                        name="zipcode"
                        id="address"
                        onChange={(e) => handleChange(e)}
                    />
                </FlexBetween>
                <FlexBetween className="modal-row">
                    <TextField
                        variant="standard"
                        label="lat"
                        name="lat"
                        id="geo"
                        onChange={(e) => handleChange(e)}
                        value={contact.address.geo.lat}
                    />
                    <TextField
                        variant="standard"
                        label="lng"
                        name="lng"
                        id="geo"
                        onChange={(e) => handleChange(e)}
                        value={contact.address.geo.lng}
                    />
                    <TextField
                        variant="standard"
                        label="companyName"
                        name="name"
                        id="company"
                        onChange={(e) => handleChange(e)}
                        value={contact.company.name}
                    />
                </FlexBetween>
                <FlexBetween className="modal-buttons">
                    <Button type="submit">Save</Button>
                    <Button onClick={handleClose}>Exit</Button>
                </FlexBetween>
            </form>
        </Styled>
    )
}

const Styled = styled(Modal)`
    .box {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 500px;
        width: 100%;
        background: white;
        border: 2px solid #000;
        padding: 2rem;
        border-radius: 5px;
        border: none;
    }
    .modal-row {
        margin-top: 0.5rem;
        flex-wrap: wrap;
    }
    .modal-buttons {
        justify-content: end;
        margin-top: 1.2rem;
    }
`
