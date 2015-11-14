package pl.edu.pw.elka.optimization.rolnik;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import pl.edu.pw.elka.optimization.rolnik.persistance.Product;
import pl.edu.pw.elka.optimization.rolnik.persistance.ProductRepository;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Aneta Skoniecka on 2015-11-11.
 */
@Configuration
public class H2Populate {

    @Autowired
    public void populateH2(ProductRepository productRepository) {
        for(Integer i = 1 ; i < 11 ; i++) {
            productRepository.save(new Product("nazwa"+i.toString(),i.toString()+" kg"));
        }
    }
}

