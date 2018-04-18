package com.desenho.panpan;

import com.desenho.panpan.model.User;
import com.desenho.panpan.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {
    private final UserRepository userRepository;

    @Autowired
    public DatabaseLoader(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @Override
    public void run(String... string) throws Exception{
        this.userRepository.save(new User("hugonxc@mail.com", "senhaforte"));
    }
}

