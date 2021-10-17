package com.shop.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.shop.model.Login;
import com.shop.model.a;
import com.shop.model.User;
import com.shop.repository.UserRepository;
import com.shop.service.UserService;
@RestController
@CrossOrigin("*")
public class UserController
{
@Autowired
private UserService userService;
@Autowired
private UserRepository userRepository;
@PostMapping("/signUp")
public a signUp(@RequestBody User newUser)
{
	
	return this.userService.register(newUser);
} //this method is for valid
@PostMapping("/signin")
public a validate(@RequestBody Login l) {
if (userService.CredentialValid(l.getEmail(), l.getPassword())) {
return a.SUCCESS;
}
else {
return a.FAILURE;
}
}
}
