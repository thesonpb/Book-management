package com.example.backend.controller;

import com.example.backend.model.Book;
import com.example.backend.model.BookReviewDto;
import com.example.backend.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1")
public class BookController {

    @Autowired
    private BookService service;

    @GetMapping("/books")
    public List<Book> getAllBooks(@RequestParam(required = false) String keyword) {
        if (keyword == null) return service.getAllBooks();
        return service.getAllBooksWithKeyword(keyword);
    }

    @GetMapping("/books/{id}")
    public ResponseEntity<Book> getOneBook(@PathVariable Long id) {
        return service.getBookById(id);
    }

    @PostMapping("/addbooks")
    public Book addBook(@RequestBody Book book) {
        return service.saveBook(book);
    }

    @PutMapping("/editbooks/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable Long id, @RequestBody Book book) {
        return service.updateBook(id, book);
    }

    @DeleteMapping("/deletebooks/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteBook(@PathVariable Long id) {
        return service.deleteBook(id);
    }

    @GetMapping("/books/reviews/{userId}")
    public List<BookReviewDto> getBookReviewByUserId(@PathVariable Long userId) {
        return service.getBookReviewByUserId(userId);
    }
}
