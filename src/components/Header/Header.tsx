import styles from './Header.module.css'
import SearchModule from "../Input/SearchModule.tsx";
import {useState} from "react";
import UserCard from "../UserCard/UserCard.tsx";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";


interface User {
    id: number;
    name: string;
    passport: string;
    reason: string;
}

const Header = () => {
    const [users, setUsers] = useState<User[]>([
        {
            id: 1,
            name: 'Иван Иванов',
            passport: '1234 567890',
            reason: 'Нарушение правил компании'
        },
        {
            id: 2,
            name: 'Петр Петров',
            passport: '0987 654321',
            reason: 'Мошенничество'
        },
        {
            id: 3,
            name: 'Петр Петров',
            passport: '0987 654321',
            reason: 'Мошенничество'
        },
        {
            id: 4,
            name: 'Петр Петров',
            passport: '0987 654321',
            reason: 'Мошенничество'
        },
        {
            id: 5,
            name: 'Петр Петров',
            passport: '0987 654321',
            reason: 'Мошенничество'
        },
        {
            id: 6,
            name: 'Петр Петров',
            passport: '0987 654321',
            reason: 'Мошенничество'
        },
        {
            id: 7,
            name: 'Петр Петров',
            passport: '0987 654321',
            reason: 'Мошенничество'
        }, {
            id: 8,
            name: 'Петр Петров',
            passport: '0987 654321',
            reason: 'Мошенничество'
        },


    ])
    const [filteredUsers, setFilteredUsers] = useState<User[]>(users)
    const [open, setOpen] = useState(false)
    const [newUser, setNewuser] = useState<User>({
        id: 0,
        name: '',
        passport: '',
        reason: '',
    })
    const handleSearch = (query: string) => {
        const filtered = users.filter(user =>user.name.toLowerCase().includes(query.toLowerCase()) ||
        user.passport.toLowerCase().includes(query.toLowerCase()) ||
        user.reason.toLowerCase().includes(query.toLowerCase()));
        setFilteredUsers(filtered);
    }
    const handleClickOpen = () =>{
        setOpen(true);
    }
    const handleClose = () =>{
        setOpen(false);
    }
    const handleAddUser =() =>{
        const updateUsers = [...users, {...newUser, id: users.length+1}]
        setUsers(updateUsers)
        setFilteredUsers(updateUsers)
        setNewuser({id: 0, name: '', passport: '', reason: ''})
        handleClose()
    }
    return (
<>
        <div className={styles.header}>
            {/*<img className={styles.logo} src={logo}/>*/}

            <h1 className={styles.logo__title}>Black List</h1>
            <SearchModule onSearch={handleSearch}/>
            <Button variant='outlined' onClick={handleClickOpen} color='primary'>Добавить пользователя</Button>

            {/*<h2 className={styles.sign}> Войти</h2>*/}
        </div>
    <div className={styles.user__card}>
        {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user}/>
        ))}
    </div>
        <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
            <DialogTitle id='form-dialog-title'>Добавить пользователя</DialogTitle>
            <DialogContent>
                <TextField id='name' autoFocus={true}
                margin='dense'
                label='Имя'
                type='text'
                fullWidth={true}
                value={newUser.name}
                onChange={(e) => setNewuser({...newUser, name: e.target.value})}/>
                <TextField id='passport'
                margin='dense'
                type='text'
                label='Паспортные данные'
                fullWidth={true}
                onChange={(e) => setNewuser({...newUser, passport: e.target.value})}/>
                <TextField
                margin='dense'
                label='Причина поппадания в черный список'
                type='text'
                fullWidth={true}
                value={newUser.reason}
                onChange={(e) => setNewuser({...newUser, reason: e.target.value})}
                />
            </DialogContent>
            <div className={styles.button__box}>
                <button onClick={handleAddUser}>добавить</button>
                <button className={styles.button__close} onClick={handleClose}>Х</button>

            </div>
        </Dialog>
</>

    )
        ;
};

export default Header;