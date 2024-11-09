import User, { IUser } from './user.model';

export const isAdmin = async (userId: string): Promise<boolean> => {
    const user = await User.findById(userId);
    return user ? user.role === 'admin' : false;
};

export const findUserByEmail = async (email: string): Promise<IUser | null> => {
    return await User.findOne({ email });
};
