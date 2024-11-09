import { Router } from 'express';
import {
    createBook,
    getBooks,
    updateBook,
    deleteBook,
    reserveBook,
    returnBook
} from './book.controller';
import { verifyToken } from '../middleware/auth.middleware';

const router = Router();

router.post('/', verifyToken, createBook); 
router.get('/', verifyToken, getBooks); 
router.put('/:id', verifyToken, updateBook); 
router.delete('/:id', verifyToken, deleteBook); 

router.post('/reserve', verifyToken, reserveBook); 
router.post('/return', verifyToken, returnBook); 

export default router;
