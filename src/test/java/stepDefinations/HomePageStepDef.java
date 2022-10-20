package stepDefinations;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class HomePageStepDef {
	
	WebDriver driver = Hooks.driver;
	
	@Given("I have the application launched")
	public void i_have_the_application_launched() {
	}
	
	@And("I insert the correct username and password")
	public void i_insert_the_correct_username_and_password() {
		WebElement UserName = driver.findElement(By.id("user-name"));
		UserName.sendKeys("standard_user");
		
		WebElement Password = driver.findElement(By.id("password"));
		Password.sendKeys("secret_sauce");
	}

	@And("I click button to login")
	public void i_click_button_to_login() {
		WebElement LoginBtn = driver.findElement(By.id("login-button"));
		LoginBtn.click();
	}

	@When("I click Add To cart on product {string}")
	public void i_click_Add_To_cart_on_product(String productName) throws InterruptedException {
		String buttonXpath = "//div[text()='" + productName + "']//following::button[1]";
		WebElement product = driver.findElement(By.xpath(buttonXpath));
		product.click();
	}

	@Then("Basket item number should be {int}")
	public void basket_item_number_should_be(Integer itemCount) {
		WebElement cart = driver.findElement(By.xpath("//span[@class='shopping_cart_badge']"));
		String itemNumber = cart.getText();
		Assert.assertEquals(Integer.valueOf(itemNumber), itemCount);
		
		
	}


}
