import React from 'react'
import Table from '../components/table'
import HeaderContainer from './headercontainer'
import { users } from '../constants/usersDetails'

const TableContainer = () => {
    return (
        <>
            <HeaderContainer>
                <Table>
                    <Table.Base>
                        <Table.Row>
                            <Table.Head>Name</Table.Head>
                            <Table.Head>Age</Table.Head>
                            <Table.Head>Gender</Table.Head>
                            <Table.Head>EmailAddress</Table.Head>
                            <Table.Head>PhoneNumber</Table.Head>
                        </Table.Row>
                        {   
                            users.user.map((u,index)=>(
                                <Table.Row key={index}>
                                    <Table.NonHead>{u.name}</Table.NonHead>
                                    <Table.NonHead>{u.age}</Table.NonHead>
                                    <Table.NonHead>{u.gender}</Table.NonHead>
                                    <Table.NonHead>{u.email}</Table.NonHead>
                                    <Table.NonHead>{u.phoneNo}</Table.NonHead>
                                </Table.Row>
                            ))
                        }
                        
                    </Table.Base>
                </Table>
            </HeaderContainer>
        </>
    )
}

export default TableContainer;
