package pl.edu.pw.elka.optimization.rolnik.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import pl.edu.pw.elka.optimization.rolnik.persistance.Product;
import pl.edu.pw.elka.optimization.rolnik.services.ProductService;

import java.util.List;

/**
 * Created by Aneta Skoniecka on 2015-11-11.
 */
@RestController
@RequestMapping(value = "api/products")
public class ProductController {

    private ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @RequestMapping(value = "/{searchParam}", method = RequestMethod.GET)
    public List<Product> getSearchProducts(@PathVariable String searchParam) {
        return productService.searchProducts(searchParam);
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Product> getProducts() {
        return productService.getProducts();
    }

}
