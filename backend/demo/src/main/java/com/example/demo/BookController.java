package com.example.demo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/books")
@CrossOrigin(origins = "*")
public class BookController {
        private List<String> books = new ArrayList<String>();

        @GetMapping("/")
        public List<String> index() {
            books.add("The Lord of the Rings");
            books.add("The Hobbit");
            books.add("The Catcher in the Rye");
            return books;
        }

}
