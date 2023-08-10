package com.app.Entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Digits;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "combineUserOrder")
public class CombineUserOrder {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int coid;

	@NotEmpty
	@Pattern(regexp = "^[a-zA-Z ]{2,50}$", message="firstName must be within the range 2 to 50 characters")
	@Column(name = "first_name", length = 50)
	private String firstName;
	
	@NotEmpty
	@Pattern(regexp = "^[a-zA-Z ]{2,50}$", message="lastName must be within the range 2 to 50 characters")
	@Column(name = "last_name", length = 50)
	private String lastName;
	
	@Email
	@Column(length = 30)
	private String email;

	@Pattern(regexp = "[0-9]+")
	@NotEmpty
	@Column(length = 15)
	private String phone;


	@NotEmpty
	@Pattern(regexp = "^[a-zA-Z ]{2,50}$", message="city name must be within the range 2 to 50 characters")
	@Column(length = 50)
	private String city;


	@NotEmpty
	@Pattern(regexp = "^[a-zA-Z ]{2,30}$", message="state name must be within the range 2 to 10 characters")
	@Column(length = 30)
	private String state;


	@NotEmpty
	@Pattern(regexp = "^[a-zA-Z ]{2,50}$", message="product Name must be within the range 2 to 50 characters")
	@Column(length = 50)
	private String productName;

	@NotNull
	@Digits(integer = 5, fraction = 2 ,message = "items price must be within the ranges")
	private float itemsPrice;

	@NotNull
	@Digits(integer = 5, fraction = 2 ,message = "tax price must be within the ranges")
	private float taxPrice;

	@NotNull
	@Digits(integer = 5, fraction = 2,message = "items price must be within the ranges")
	private float shippingPrice;

	@NotNull
	@Digits(integer = 5, fraction = 2,message = "items price must be within the ranges")
	private float totalPrice;

	@NotEmpty
	@Pattern(regexp = "^[a-zA-Z ]{2,50}$", message="status must be within the range 2 to 50 characters")
	private String status = "Order Placed";
//^[a-zA-Z \\s]*{2,50}$
	@JsonIgnore
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "Id")
	private Users couser;
	
//	@OneToMany(mappedBy = "couser", cascade = CascadeType.MERGE)
//	@JsonIgnore
//	private List<CombineUserOrder> combineOrderlist;
//	
//	@JsonIgnore //orderList
//	@ManyToOne(cascade = CascadeType.MERGE)
//	@JoinColumn(name = "pid")
//	private Product produ;


	

	public int getCoid() {
		return coid;
	}

	public void setCoid(int coid) {
		this.coid = coid;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public float getItemsPrice() {
		return itemsPrice;
	}

	public void setItemsPrice(float itemsPrice) {
		this.itemsPrice = itemsPrice;
	}

	public float getTaxPrice() {
		return taxPrice;
	}

	public void setTaxPrice(float taxPrice) {
		this.taxPrice = taxPrice;
	}

	public float getShippingPrice() {
		return shippingPrice;
	}

	public void setShippingPrice(float shippingPrice) {
		this.shippingPrice = shippingPrice;
	}

	public float getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(float totalPrice) {
		this.totalPrice = totalPrice;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Users getCouser() {
		return couser;
	}

	public void setCouser(Users couser) {
		this.couser = couser;
	}
	
	
	
	
	




}
