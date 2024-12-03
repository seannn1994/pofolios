package top.gsfhyj.forecastify;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

//GpgSecureKey@2024$Random
//@SpringBootApplication
@SpringBootApplication(exclude = { DataSourceAutoConfiguration.class })
public class ForecastifyApplication {

    public static void main(String[] args) {
        SpringApplication.run(ForecastifyApplication.class, args);
    }

}
