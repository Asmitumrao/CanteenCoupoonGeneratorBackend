import {Router}  from 'express';
import {register, login, logout,viewProfile,} from '../controller/auth.controller.js';

const router= Router();



router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.post('/profile', viewProfile);



export default router;