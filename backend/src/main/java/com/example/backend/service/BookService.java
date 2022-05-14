package com.example.backend.service;

import com.example.backend.exception.ResourceNotFoundException;
import com.example.backend.model.Book;
import com.example.backend.model.BookReviewDto;
import com.example.backend.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public List<Book> getAllBooksWithKeyword(String keyword) {
        return bookRepository.getAllByTitleContaining(keyword);
    }

    public ResponseEntity<Book> getBookById(Long id) {
        Book book = bookRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Book not exist with id:" + id));
        return ResponseEntity.ok(book);
    }

    public Book saveBook(Book book) {
        return bookRepository.save(book);
    }

    public ResponseEntity<Book> updateBook(Long id, Book book) {
        Book book1 = bookRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No books exist with id:" + id));
        book1.setAuthor(book.getAuthor());
        book1.setDescription(book.getDescription());
        book1.setNumberOfBooksLeft(book.getNumberOfBooksLeft());
        book1.setTitle(book.getTitle());
        book1.setTotalBorrow(book.getTotalBorrow());
        book1.setYear(book.getYear());
        book1.setImage(book.getImage());
        Book updatedBook = bookRepository.save(book1);
        return ResponseEntity.ok(updatedBook);
    }

    public ResponseEntity<Map<String, Boolean>> deleteBook(Long id) {
        Book book = bookRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("No books exist with id:" + id));
        bookRepository.delete(book);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", true);
        return ResponseEntity.ok(response);
    }

    public List<BookReviewDto> getBookReviewByUserId(Long userId) {
        return bookRepository.findBookReviewByUserId(userId);
    }
}
