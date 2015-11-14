package pl.edu.pw.elka.optimization.rolnik.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import pl.edu.pw.elka.optimization.rolnik.domain.Optimization;
import pl.edu.pw.elka.optimization.rolnik.domain.OptimizationParams;
import pl.edu.pw.elka.optimization.rolnik.services.OptimizationService;

import static org.springframework.http.MediaType.*;

/**
 * Created by Aneta Skoniecka on 2015-11-11.
 */
@RestController(value = "api/optimize")
public class OptimizationController {

    OptimizationService optimizationService;

    @Autowired
    public OptimizationController(OptimizationService optimizationService) {
        this.optimizationService = optimizationService;
    }

    @RequestMapping
    public Optimization optimizeProducts(@RequestBody OptimizationParams optimizationParams) {
        Optimization opt = new Optimization();
        opt.prepareExample();
        return opt;
    }
}
