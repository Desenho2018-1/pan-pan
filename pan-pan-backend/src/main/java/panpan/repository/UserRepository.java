package panpan.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

import panpan.model.User;

@Component
public interface UserRepository extends CrudRepository<User, Long> {

}