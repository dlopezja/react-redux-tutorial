package com.login.backend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "*")
public class ProductController {
    private List<String> products = new ArrayList<String>();
    @GetMapping()
    public List<String> index() {
        if(products.size()==0) {
            products.add("The Lord of the Rings");
            products.add("The Hobbit");
            products.add("The Catcher in the Rye");
            products.add("The Lord of the Rings2");
        }
        return products;
    }
}