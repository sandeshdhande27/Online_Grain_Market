package com.app.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.Entity.UserOrder;

public interface UserOrderRepository extends JpaRepository<UserOrder, Integer> {

}
