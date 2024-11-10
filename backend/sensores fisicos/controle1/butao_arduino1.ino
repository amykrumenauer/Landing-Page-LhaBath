const int butao1 = 2;
const int butao2 = 3;
const int butao3 = 4;

int contador = 0; 

void setup() {
  Serial.begin(9600);
  pinMode(butao1, INPUT);
  pinMode(butao2, INPUT);
  pinMode(butao3, INPUT);
  Serial.print("contador");
}

void loop() {

if (digitalRead(butao1) == HIGH){
  contador += 1;
}
else if (digitalRead(butao2) == HIGH){
  contador = 0;
}
else if (digitalRead(butao3) == HIGH){
  contador -= 1;
}

Serial.println(contador);
}