package com.example.backend.model;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Table(name = "book")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private String author;
    private String year;
    private Integer numberOfBooksLeft;
    private Integer totalBorrow;
    private String image;

    @OneToMany(mappedBy = "bookId", cascade = CascadeType.ALL)
    private Collection<Review> reviews;


    public Book() {
    }

    public Book(String title, String description, String author, String year, Integer numberOfBooksLeft, Integer totalBorrow, String image) {
        this.title = title;
        this.description = description;
        this.author = author;
        this.year = year;
        this.numberOfBooksLeft = numberOfBooksLeft;
        this.totalBorrow = totalBorrow;
        this.image = image;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public Integer getNumberOfBooksLeft() {
        return numberOfBooksLeft;
    }

    public void setNumberOfBooksLeft(Integer numberOfBooksLeft) {
        this.numberOfBooksLeft = numberOfBooksLeft;
    }

    public Integer getTotalBorrow() {
        return totalBorrow;
    }

    public void setTotalBorrow(Integer totalBorrow) {
        this.totalBorrow = totalBorrow;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
