package pl.edu.pw.elka.optimization.rolnik.services;

import org.springframework.stereotype.Service;
import pl.edu.pw.elka.optimization.rolnik.domain.Optimization;
import pl.edu.pw.elka.optimization.rolnik.domain.OptimizationParams;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Aneta Skoniecka on 2015-11-11.
 */
@Service
public class OptimizationService {

    public Optimization optimize(OptimizationParams optimizationParams) {
        Optimization opt = new Optimization();
//        opt.getExample();
        return opt;
    }

}
