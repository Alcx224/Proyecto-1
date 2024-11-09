import Book, { IBook } from './book.model';

export const isBookAvailable = async (bookId: string): Promise<boolean> => {
    const book = await Book.findById(bookId);
    return book ? book.available : false;
};

export const reserveBookAction = async (bookId: string, userId: string): Promise<IBook | null> => {
    const book = await Book.findById(bookId);
    if (book && book.available) {
        book.reservations.push({ userId, reservationDate: new Date() });
        book.available = false;
        await book.save();
        return book;
    }
    return null;
};
