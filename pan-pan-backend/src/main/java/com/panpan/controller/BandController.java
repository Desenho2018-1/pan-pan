package panpan.controller;

//import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.panpan.repository.BandRepository;
import com.panpan.model.Band;
import com.panpan.exception.InvalidRequestException;

@RestController
@RequestMapping(value="/band")
public class BandController {
  @Autowired
  private BandRepository bandRepository;

  @PostMapping(value = "/create")
  public String add(@RequestBody /*@Valid*/ final Band band, BindingResult bindingResult){
    if (!bindingResult.hasErrors()){
      bandRepository.save(band);
      return "Done\n";
    }else{
      throw new InvalidRequestException("Invalid band", bindingResult);
    }

  }
}
