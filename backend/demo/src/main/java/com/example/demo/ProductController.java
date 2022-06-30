package com.example.demo;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "*")
public class ProductController {
    private List<String> products = new ArrayList<String>();

    @GetMapping("/")
    public List<String> index() {
            products.add("The Lord of the Rings");
            products.add("The Hobbit");
            products.add("The Catcher in the Rye");
            return products;
        }


}
