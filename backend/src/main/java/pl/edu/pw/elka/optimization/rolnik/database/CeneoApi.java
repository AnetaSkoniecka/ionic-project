package pl.edu.pw.elka.optimization.rolnik.database;

import org.apache.http.HttpEntity;
import org.apache.http.HttpHost;
import org.apache.http.HttpResponse;
import org.apache.http.auth.AuthScope;
import org.apache.http.auth.UsernamePasswordCredentials;
import org.apache.http.client.AuthCache;
import org.apache.http.client.CredentialsProvider;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.protocol.HttpClientContext;
import org.apache.http.impl.auth.BasicScheme;
import org.apache.http.impl.client.*;
import org.apache.http.util.EntityUtils;

import java.util.ArrayList;
import java.util.List;


/**
 * Created by Aneta Skoniecka on 2015-11-15.
 */
public class CeneoApi {

    private String api_domain = "https://partnerzyapi.ceneo.pl/";

    private String apiKey;
    private Boolean authorized = false;

    private String token;
    private String token_type;
    private String token_expire;

    public CeneoApi(String apiKey) {
        this.apiKey = apiKey;
    }

    public void call() {
        if(!this.isAutorized()) {
            autorize();
        }
    }

    public void autorize() {
        HttpClient httpClient = new DefaultHttpClient();
        HttpGet httpGet = new HttpGet("https://partnerzyapi.ceneo.pl");
        httpGet.addHeader(BasicScheme.authenticate(
                new UsernamePasswordCredentials("user", "password"),
                "UTF-8", false));

        try{
            HttpResponse httpResponse = httpClient.execute(httpGet);
            HttpEntity responseEntity = httpResponse.getEntity();
            responseEntity.getContent();
        } catch (Exception e) {

        }

    }

    public Boolean isAutorized() {
        return false;
    }



}
