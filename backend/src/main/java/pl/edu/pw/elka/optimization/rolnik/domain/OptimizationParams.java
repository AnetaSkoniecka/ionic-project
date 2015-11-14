package pl.edu.pw.elka.optimization.rolnik.domain;

import java.util.List;

/**
 * Created by Aneta Skoniecka on 2015-11-11.
 */
public class OptimizationParams {
    private List<Long> productsId;
    private String delivery;
    private Boolean discount;
    private Integer shopsCountRestrictionValue;
    private Boolean shopsCountRestrictionIsSet;
    private Integer distanceRestrictionValue;
    private Boolean distanceRestrictionIsSet;

    public OptimizationParams() {
    }

    public OptimizationParams(List<Long> productsId, String delivery, Boolean discount,
                              Integer shopsCountRestrictionValue, Boolean shopsCountRestrictionIsSet,
                              Integer distanceRestrictionValue, Boolean distanceRestrictionIsSet) {
        this.productsId = productsId;
        this.delivery = delivery;
        this.discount = discount;
        this.shopsCountRestrictionValue = shopsCountRestrictionValue;
        this.shopsCountRestrictionIsSet = shopsCountRestrictionIsSet;
        this.distanceRestrictionValue = distanceRestrictionValue;
        this.distanceRestrictionIsSet = distanceRestrictionIsSet;
    }

    public List<Long> getProductsId() {
        return productsId;
    }

    public void setProductsId(List<Long> productsId) {
        this.productsId = productsId;
    }

    public String getDelivery() {
        return delivery;
    }

    public void setDelivery(String delivery) {
        this.delivery = delivery;
    }

    public Boolean getDiscount() {
        return discount;
    }

    public void setDiscount(Boolean discount) {
        this.discount = discount;
    }

    public Integer getShopsCountRestrictionValue() {
        return shopsCountRestrictionValue;
    }

    public void setShopsCountRestrictionValue(Integer shopsCountRestrictionValue) {
        this.shopsCountRestrictionValue = shopsCountRestrictionValue;
    }

    public Boolean getShopsCountRestrictionIsSet() {
        return shopsCountRestrictionIsSet;
    }

    public void setShopsCountRestrictionIsSet(Boolean shopsCountRestrictionIsSet) {
        this.shopsCountRestrictionIsSet = shopsCountRestrictionIsSet;
    }

    public Integer getDistanceRestrictionValue() {
        return distanceRestrictionValue;
    }

    public void setDistanceRestrictionValue(Integer distanceRestrictionValue) {
        this.distanceRestrictionValue = distanceRestrictionValue;
    }

    public Boolean getDistanceRestrictionIsSet() {
        return distanceRestrictionIsSet;
    }

    public void setDistanceRestrictionIsSet(Boolean distanceRestrictionIsSet) {
        this.distanceRestrictionIsSet = distanceRestrictionIsSet;
    }

}
