package stepDefinations;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginStepDef {
	
	WebDriver driver = Hooks.driver;
	
	@Given("I have launched the application")
	public void i_have_launched_the_application() {
	}
	
	@When("I enter the correct username and password")
	public void i_enter_the_correct_username_and_password() {
		WebElement UserName = driver.findElement(By.id("user-name"));
		UserName.sendKeys("standard_user");
		
		WebElement Password = driver.findElement(By.id("password"));
		Password.sendKeys("secret_sauce");
	}

	@When("I click on the login button")
	public void i_click_on_the_login_button() throws InterruptedException {
		WebElement LoginBtn = driver.findElement(By.id("login-button"));
		LoginBtn.click();		
	}

	@Then("I should land on the home page")
	public void i_should_land_on_the_home_page() {
	}

	@When("I enter the incorrect username and password")
	public void i_enter_the_incorrect_username_and_password() {
		WebElement UserName = driver.findElement(By.id("user-name"));
		UserName.sendKeys("standard_User");
				
		WebElement Password = driver.findElement(By.id("password"));
		Password.sendKeys("secret_sauce");
	}
	
	@And("I click on button to login")
	public void i_click_on_button_to_login() throws InterruptedException {
		WebElement LoginBtn = driver.findElement(By.id("login-button"));
		LoginBtn.click();
	}

	@Then("I should get the error message {string}")
	public void i_should_get_the_error_message(String ExpError) throws InterruptedException {
		WebElement Error = driver.findElement(By.xpath("//h3[@data-test=\"error\"]"));		
	    String ActError = Error.getText();
		Assert.assertEquals(ExpError, ActError);
	}

}
