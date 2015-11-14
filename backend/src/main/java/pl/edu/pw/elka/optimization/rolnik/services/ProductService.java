package pl.edu.pw.elka.optimization.rolnik.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.edu.pw.elka.optimization.rolnik.persistance.Product;
import pl.edu.pw.elka.optimization.rolnik.persistance.ProductRepository;

import java.util.List;

/**
 * Created by Aneta Skoniecka on 2015-11-11.
 */
@Service
public class ProductService {

    private ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> searchProducts(String searchParam) {
        return productRepository.findByNameContaining(searchParam);
    }

    public List<Product> getProducts() {
        return productRepository.findAll();
    }
}
