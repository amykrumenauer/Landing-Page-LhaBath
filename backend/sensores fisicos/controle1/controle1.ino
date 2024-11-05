const int trig = 5;
const int echo = 18;

//definindo medidas para medições
#define velocidadeDoSom 0.034

long duracao;
float distanceCm;

void setup() {
  Serial.begin(115200); // Serial de comunicação, verifique se não bate com nenhum outro arduino
  pinMode(trig, OUTPUT); // trig como Output
  pinMode(echo, INPUT); // echo como Input
  Serial.println("Verificando micro-controlador...")
}

void loop() {
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