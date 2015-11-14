package pl.edu.pw.elka.optimization.rolnik.domain;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Aneta Skoniecka on 2015-11-11.
 */
public class Optimization {

    private Integer deliveryCost;
    private Integer purchasingCost;
    private Integer totalDistance;
    private Integer totalShops;
    private List<OptimizedShop> shops;

    public Optimization() {
    }

    public Optimization(Integer deliveryCost, Integer purchasingCost, Integer totalDistance,
                        Integer totalShops, List<OptimizedShop> shops) {
        this.deliveryCost = deliveryCost;
        this.purchasingCost = purchasingCost;
        this.totalDistance = totalDistance;
        this.totalShops = totalShops;
        this.shops = shops;
    }

    public void prepareExample() {
        List<OptimizedProduct> products = new ArrayList();
        for(Integer i = 0 ; i < 3 ; i++) {
            products.add(new OptimizedProduct("prod"+i.toString(), i.toString()+" kg", 3, 3));
        }
        List<OptimizedShop> shops = new ArrayList();
        for(Integer i = 0 ; i < 3 ; i++ ) {
            shops.add(new OptimizedShop(33,33,"nazwa"+i.toString(),45, products));
        }

        this.setDeliveryCost(34);
        this.setPurchasingCost(34);
        this.setShops(shops);
        this.setTotalDistance(56);
        this.setTotalShops(3);
    }


    public Integer getDeliveryCost() {
        return deliveryCost;
    }

    public void setDeliveryCost(Integer deliveryCost) {
        this.deliveryCost = deliveryCost;
    }

    public Integer getPurchasingCost() {
        return purchasingCost;
    }

    public void setPurchasingCost(Integer purchasingCost) {
        this.purchasingCost = purchasingCost;
    }

    public Integer getTotalDistance() {
        return totalDistance;
    }

    public void setTotalDistance(Integer totalDistance) {
        this.totalDistance = totalDistance;
    }

    public Integer getTotalShops() {
        return totalShops;
    }

    public void setTotalShops(Integer totalShops) {
        this.totalShops = totalShops;
    }

    public List<OptimizedShop> getShops() {
        return shops;
    }

    public void setShops(List<OptimizedShop> shops) {
        this.shops = shops;
    }

    public class OptimizedShop {
        private Integer deliveryCost;
        private Integer purchasingCost;
        private String shopName;
        private Integer totalDistance;
        private List<OptimizedProduct> products;

        public OptimizedShop() {
        }

        public OptimizedShop(Integer deliveryCost, Integer purchasingCost, String shopName,
                             Integer totalDistance, List<OptimizedProduct> products) {
            this.deliveryCost = deliveryCost;
            this.purchasingCost = purchasingCost;
            this.shopName = shopName;
            this.totalDistance = totalDistance;
            this.products = products;
        }

        public Integer getDeliveryCost() {
            return deliveryCost;
        }

        public void setDeliveryCost(Integer deliveryCost) {
            this.deliveryCost = deliveryCost;
        }

        public Integer getPurchasingCost() {
            return purchasingCost;
        }

        public void setPurchasingCost(Integer purchasingCost) {
            this.purchasingCost = purchasingCost;
        }

        public String getShopName() {
            return shopName;
        }

        public void setShopName(String shopName) {
            this.shopName = shopName;
        }

        public Integer getTotalDistance() {
            return totalDistance;
        }

        public void setTotalDistance(Integer totalDistance) {
            this.totalDistance = totalDistance;
        }

        public List<OptimizedProduct> getProducts() {
            return products;
        }

        public void setProducts(List<OptimizedProduct> products) {
            this.products = products;
        }

    }

    public class OptimizedProduct {
        private String name;
        private String unit;
        private Integer count;
        private Integer cost;

        public OptimizedProduct() {
        }

        public OptimizedProduct(String name, String unit, Integer count, Integer cost) {
            this.name = name;
            this.unit = unit;
            this.count = count;
            this.cost = cost;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getUnit() {
            return unit;
        }

        public void setUnit(String unit) {
            this.unit = unit;
        }

        public Integer getCount() {
            return count;
        }

        public void setCount(Integer count) {
            this.count = count;
        }

        public Integer getCost() {
            return cost;
        }

        public void setCost(Integer cost) {
            this.cost = cost;
        }
    }
}
