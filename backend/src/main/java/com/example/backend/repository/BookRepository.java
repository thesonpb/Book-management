package com.example.backend.repository;

import com.example.backend.model.Book;
import com.example.backend.model.BookReviewDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    List<Book> getAllByTitleContaining(String keyword);

    @Query("select new com.example.backend.model.BookReviewDto(b.id, b.title, b.image, b.author, r.createdDate, r.like, r.content)  from Book b join b.reviews r where r.userId = ?1 ")
    List<BookReviewDto> findBookReviewByUserId(Long userId);
}
