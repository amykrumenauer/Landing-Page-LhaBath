// site de consulta: https://randomnerdtutorials.com/esp32-http-get-post-arduino/


#include <WiFi.h>
#include <HTTPClient.h>

const char* ssid = "REPLACE_WITH_YOUR_SSID";
const char* password = "REPLACE_WITH_YOUR_PASSWORD";
const int trig = 5;
const int echo = 18;

//definindo medidas para medições
#define velocidadeDoSom 0.034

//Your Domain name with URL path or IP address with path
String serverName = "http://192.168.1.106:1880/update-sensor";

long duracao;
float distanceCm;
// the following variables are unsigned longs because the time, measured in
// milliseconds, will quickly become a bigger number than can be stored in an int.
unsigned long lastTime = 0;
// Timer set to 10 minutes (600000)
//unsigned long timerDelay = 600000;
// Set timer to 5 seconds (5000)
unsigned long timerDelay = 5000;

void dist() {
  digitalWrite(trig, LOW);
  delayMicroseconds(2);
  // aciona trig por 10 microssegundos
  digitalWrite(trig, HIGH);
  delayMicroseconds(10);
  digitalWrite(trig, LOW);
  
  //lê echo, retorna tempo de viagem da onda sonoraem microssegundos
  duracao = pulseIn(echo, HIGH);
  
  // Calculate the distance
  distanceCm = duracao * velocidadeDoSom/2;
  
  // Prints the distance in the Serial Monitor
  Serial.print("Distancia do sensor ultrassonico em CM: ");
  Serial.println(distanceCm);

  
  delay(1000);

}

void setup() {
  Serial.begin(115200); // Serial de comunicação, verifique se não bate com nenhum outro arduino
  pinMode(trig, OUTPUT); // trig como Output
  pinMode(echo, INPUT); // echo como Input
  Serial.println("Verificando micro-controlador...")
}

void loop() {
//Send an HTTP POST request every 10 minutes
  if ((millis() - lastTime) > timerDelay) {
    //Check WiFi connection status
    if(WiFi.status()== WL_CONNECTED){
      HTTPClient http;

      String serverPath = serverName + "?temperature=24.37";
      
      // Your Domain name with URL path or IP address with path
      http.begin(serverPath.c_str());
      
      // If you need Node-RED/server authentication, insert user and password below
      //http.setAuthorization("REPLACE_WITH_SERVER_USERNAME", "REPLACE_WITH_SERVER_PASSWORD");
      
      // Send HTTP GET request
      int httpResponseCode = http.GET();
      
      if (httpResponseCode>0) {
        Serial.print("HTTP Response code: ");
        Serial.println(httpResponseCode);
        String payload = http.getString();
        Serial.println(payload);
      }
      else {
        Serial.print("Error code: ");
        Serial.println(httpResponseCode);
      }
      // Free resources
      http.end();
    }
    else {
      Serial.println("WiFi Disconnected");
    }
    lastTime = millis();
  }
}