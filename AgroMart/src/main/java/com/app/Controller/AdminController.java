package com.app.Controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.Entity.CombineUserOrder;
import com.app.Entity.Users;
import com.app.service.IDeliveryService;
import com.app.service.UserServiceImpl;

@CrossOrigin
@RestController
@RequestMapping("/admin")
public class AdminController {
	
	
	@Autowired
	private UserServiceImpl userServiceImpl;
	
	
	@Autowired
	private IDeliveryService ideliveryService;

	@GetMapping("/showOrder")
	public List<CombineUserOrder> showOrder() {
		return ideliveryService.showOrder();
	}

	@PostMapping("/getOrderById")
	public CombineUserOrder getOrderById(@RequestBody CombineUserOrder combineUserOrder) {
		return ideliveryService.fetchOrderById(combineUserOrder);
	}

	@PostMapping("/editOrderStatus")
	public void editOrderStatus(@RequestBody CombineUserOrder combineUserOrder) {

		System.out.println(combineUserOrder.getStatus());
		ideliveryService.editByOrderStatus(combineUserOrder);
	}
	
	
	
	@GetMapping(path="/showUsers")
	public List<Users> showUsers()
	{
		return userServiceImpl.fetchUsers();
	}
	
	@PostMapping("/addDeliveryBoy")
	public String addDeliveryBoy(@Valid @RequestBody Users user) {
		userServiceImpl.registerOrEditUser(user);
		return "Added!!!!!!";
	}
	
	@PutMapping("/admindisableuser/{id}")
	public ResponseEntity<?> disableUser(@RequestBody Users user,@PathVariable int id){
		Users u = userServiceImpl.disableUser(user, id);
		return new ResponseEntity<>(u, HttpStatus.OK);
	}

	@PutMapping("/adminenableuser/{id}")
	public ResponseEntity<?> enableUser(@RequestBody Users user, @PathVariable int id) {
		Users u = userServiceImpl.enableUser(user, id);
		return new ResponseEntity<>(u, HttpStatus.OK);
	}
}
