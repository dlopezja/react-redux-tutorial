package com.example.demo;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*")
public class UserController {
    private List<User> users = new ArrayList<User>();

    @GetMapping()
    public List<String> index() {
        users.add(new User(1, "John", "email1", "password1"));
        users.add(new User(2, "Jane", "email2", "password2"));
        users.add(new User(3, "Jack", "email3", "password3"));
        return users.stream().map(User::getUsername).collect(Collectors.toList());
//        return users;
    }
    @PostMapping()
    public User login(/*@RequestBody User user*/) {
//        users.add(user);
        User user = new User(1, "John", "email1", "password1");
        return user;
    }

}
