package prg.openqa.selenium.enumerator.test;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org openqa.selenium.htmlunit.HtmlUnitDriver;

public class IP_loc{
    public static void main (String[] args){
    //create new instance of unit driver
    WebDriver driver = new HtmlUnitDriver();

    //go to online ip locator checker
    driver.get("http://www.whereisip.net/");

    //Find element by id
    WebElement element = driver.findElement(By.id("Form1"))
    
    // Enter the IP query 
    WebElement query = driver.findElement(By.name("target"));
   
    //Submit form
    element.submit();

    System.out.println("Checking out" + driver.getTitle());

    driver.quit();
    }

}





