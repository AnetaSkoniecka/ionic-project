package pl.edu.pw.elka.optimization.rolnik.persistance;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Aneta Skoniecka on 2015-11-11.
 */
@Repository
public interface ProductRepository extends PagingAndSortingRepository<Product, Long> {

    List<Product> findByIdContaining(Long id);
    List<Product> findByNameContaining(String name);
    List<Product> findById(Long id);
    List<Product> findByName(String name);
    List<Product> findAll();

}
