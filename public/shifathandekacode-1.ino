#include <LiquidCrystal.h> //for the lcd

// wiring section
// Signal Wire: Pin A0 (Analog)
// LCD RS=12, E=11, D4=5, D5=4, D6=3, D7=2

LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

const int sensorPin = A0;

int sensorValue = 0; //stores the last reading

int threshold = 200; //cutoff voltage to show that the pulse is present

int beatCount = 0; //function for counting the beat

bool isBeat = false; //by default, not beating yet

//Beat timing control
unsigned long lastBeatTime = 0; //for millisecond time

const unsigned long minBeatInterval = 300; // minimum time between beats should be 200BPM (not too sensitive and well filtered)

//bpm states (from research)
String getBPMState(int bpm) {
  if (bpm <= 55) return "Resting";
  else if (bpm <= 70) return "Normal";
  else if (bpm <= 100) return "Light Act.";
  else if (bpm <= 140) return "Moderate";
  else if (bpm <= 170) return "Intense";
  else if (bpm <= 200) return "Peak";
  else return "Danger";
}

void setup() {
  Serial.begin(9600);
  lcd.begin(16, 2);

  lcd.clear();
  lcd.print("Place finger");
  lcd.setCursor(0, 1);
  lcd.print("Hold still...");
  delay(3000);

  measureHeartRate();
}

void loop() {
  // Press RESET to measure again
}

void measureHeartRate() {
  unsigned long startTime = millis();
  unsigned long duration = 10000; // 10 seconds

  beatCount = 0;
  isBeat = false;
  lastBeatTime = 0;

  lcd.clear();
  lcd.print("Measuring...");
  lcd.setCursor(15, 0);
  lcd.print(" ");

  while (millis() - startTime < duration) {

    sensorValue = analogRead(sensorPin);

    // --- ASTERISK FLICKER (MATCHES LED) ---
    if (sensorValue > threshold) {
      lcd.setCursor(15, 0);
      lcd.print("*");
    } else {
      lcd.setCursor(15, 0);
      lcd.print(" ");
    }

    // detecting the beat and updating the count
    if (sensorValue > threshold &&
        !isBeat &&
        millis() - lastBeatTime > minBeatInterval) {

      beatCount++;
      isBeat = true;
      lastBeatTime = millis();

      Serial.print("Beat Count: ");
      Serial.println(beatCount);
    }
    else if (sensorValue < threshold) {
      isBeat = false; 
    }
  }

  // showing the final beat count
  lcd.clear();
  lcd.print("Final Count:");
  lcd.setCursor(0, 1);
  lcd.print(beatCount);
  delay(2000);

  // calculating the bpm from the beat count
  int bpm = beatCount * 6;
  String state = getBPMState(bpm);

  // displaying the BPM and state
  lcd.clear();
  lcd.print("BPM: ");
  lcd.print(bpm);

  lcd.setCursor(0, 1);
  lcd.print(state);

  // --- SERIAL OUTPUT ---
  Serial.print("Final BPM: ");
  Serial.println(bpm);
}
