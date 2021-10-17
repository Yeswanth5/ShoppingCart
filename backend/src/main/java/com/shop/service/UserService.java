package com.shop.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.shop.model.a;
import com.shop.model.User;
import com.shop.repository.UserRepository;
import java.util.List;
import java.util.Optional;
@Service
public class UserService {
@Autowired
private UserRepository userRepository;
public a register(User user) {
userRepository.save(user);
return a.SUCCESS;
}
public Boolean existsByEmail(String email){ 
	return userRepository.existsByEmail(email);
} //This method is used to check if the credentials passed by the user are valid or not
public boolean CredentialValid(String email, String password) {
Boolean user = userRepository.existsByEmail(email);
return user;
}
}

