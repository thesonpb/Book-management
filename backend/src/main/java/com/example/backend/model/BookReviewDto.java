package com.example.backend.model;

import java.text.SimpleDateFormat;
import java.time.Instant;
import java.util.Date;

public class BookReviewDto {
    private Long bookId;
    private String title;
    private String image;
    private String author;
    private String created_at;
    private Integer like;
    private String content;

    public BookReviewDto() {
    }

    public BookReviewDto(Long bookId,String title, String image, String author, Instant created_at, Integer like, String content) {
        this.bookId = bookId;
        this.title = title;
        this.image = image;
        this.author = author;
        SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
        String formattedDate = formatter.format(Date.from(created_at));
        this.created_at = formattedDate;
        this.like = like;
        this.content = content;
    }

    public Long getBookId() {
        return bookId;
    }

    public void setBookId(Long bookId) {
        this.bookId = bookId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getCreated_at() {
        return created_at;
    }

    public void setCreated_at(String created_at) {
        this.created_at = created_at;
    }

    public Integer getLike() {
        return like;
    }

    public void setLike(Integer like) {
        this.like = like;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
