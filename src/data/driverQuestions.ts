export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export const driverQuestions: Question[] = [
  {
    id: 1001,
    question: "Under Minnesota law, what is the default speed limit on urban or town roads unless otherwise posted?",
    options: [
      "20 mph",
      "30 mph",
      "40 mph",
      "45 mph"
    ],
    correctAnswerIndex: 1,
    explanation: "According to the Minnesota Driver's Manual, the default speed limit on urban or town roads is 30 mph unless traffic signs state otherwise."
  },
  {
    id: 1002,
    question: "In Minnesota, what is the maximum speed limit in any public alley unless otherwise posted?",
    options: [
      "10 mph",
      "15 mph",
      "20 mph",
      "25 mph"
    ],
    correctAnswerIndex: 0,
    explanation: "The default legal speed limit in any alleyway in Minnesota is strictly 10 mph."
  },
  {
    id: 1003,
    question: "When two vehicles reach an uncontrolled intersection at approximately the same time, which vehicle has the right-of-way?",
    options: [
      "The vehicle turning left has priority over the vehicle going straight",
      "The driver on the left must yield to the driver on the right",
      "The driver on the right must yield to the driver on the left",
      "Whichever vehicle is larger or traveling faster has priority"
    ],
    correctAnswerIndex: 1,
    explanation: "At an uncontrolled intersection, the driver on the left must yield the right-of-way to the vehicle on the right."
  },
  {
    id: 1004,
    question: "Under Minnesota law, you must turn on your headlights when visibility is reduced to how many feet?",
    options: [
      "1,000 feet or less",
      "750 feet or less",
      "500 feet or less",
      "300 feet or less"
    ],
    correctAnswerIndex: 2,
    explanation: "Minnesota law dictates that headlights must be on whenever visibility is reduced to 500 feet or less, as well as between sunset and sunrise, and during rain, snow, sleet, or hail."
  },
  {
    id: 1005,
    question: "What is the legal limit for Blood Alcohol Concentration (BAC) for drivers age 21 or older operating a non-commercial vehicle in Minnesota?",
    options: [
      "0.02%",
      "0.05%",
      "0.08%",
      "0.10%"
    ],
    correctAnswerIndex: 2,
    explanation: "In Minnesota, a Blood Alcohol Concentration (BAC) of 0.08% or higher is the legal threshold for driving under the influence (DWI)."
  },
  {
    id: 1006,
    question: "What does Minnesota's 'Not a Drop' law state for drivers under the age of 21?",
    options: [
      "Underage drivers can drive with a BAC up to 0.02% as long as they aren't swerving",
      "It is illegal for underage drivers to operate a vehicle with any detectable amount of alcohol in their system",
      "Underage drivers are only penalized if their BAC is 0.05% or higher",
      "Underage drivers can have alcohol as long as an adult supervisor is in the passenger seat"
    ],
    correctAnswerIndex: 1,
    explanation: "Minnesota's 'Not a Drop' law makes it illegal for anyone under age 21 to drive with *any* detectable level of alcohol in their blood or body."
  },
  {
    id: 1007,
    question: "Under 'Vanessa's Law', an unlicensed teen driver under age 18 who commits a crash-related violation or alcohol violation cannot receive a license/permits until they are:",
    options: [
      "17 years old, after paying a standard $50 court filing fee",
      "18 years old, after fully completing classroom training, behind-the-wheel, and retaking the tests",
      "21 years old under a special continuous probationary check",
      "They are permanently blacklisted from driving in Minnesota"
    ],
    correctAnswerIndex: 1,
    explanation: "Under Vanessa's Law, unlicensed teens who commit crash-related or alcohol violations cannot get an instruction permit or license until age 18. At 18, they must pass classroom and behind-the-wheel training, pay reinstatement fees (up to $680), and retake both written and practice exams."
  },
  {
    id: 1008,
    question: "When approaching a school bus with its red lights flashing and stop arm extended, how far back must you stop your vehicle?",
    options: [
      "At least 10 feet",
      "At least 20 feet",
      "At least 30 feet",
      "At least 50 feet"
    ],
    correctAnswerIndex: 1,
    explanation: "Under Minnesota law, you must stop your vehicle at least 20 feet away from a school bus that has its red lights flashing and stop arm extended."
  },
  {
    id: 1009,
    question: "When are you NOT required to stop for a school bus with flashing red lights and stop arm extended?",
    options: [
      "When you are traveling on the opposite side of a physically separated, multi-lane divided highway",
      "When the bus is parked on a city street and unloading children on the sidewalk side",
      "When you are running late and verify that no pedestrians are actively crossing",
      "When you are in a construction zone with a flagger present"
    ],
    correctAnswerIndex: 0,
    explanation: "You are not required to stop if you are traveling in the opposite direction on a physically divided highway (e.g., separated by a concrete median, guardrail, or open grass ditch)."
  },
  {
    id: 1010,
    question: "What does Minnesota's Implied Consent law mean for drivers?",
    options: [
      "You consent to letting police officers search your vehicle without a warrant at any time",
      "You automatically agree to take a breath, blood, or urine test if an officer has reasonable cause to suspect DWI",
      "You consent to sharing your GPS location data with the Department of Public Safety",
      "You agree that you will always yield right-of-way to emergency vehicles in your lane"
    ],
    correctAnswerIndex: 1,
    explanation: "The Implied Consent law means that by operating a motor vehicle in Minnesota, you automatically give consent to a chemical test of your breath, blood, or urine to determine alcohol or drug concentration."
  },
  {
    id: 1011,
    question: "Refusal to submit to a chemical test requested under Minnesota's Implied Consent law will result in:",
    options: [
      "A standard verbal warning and a mandatory 1-hour online traffic retraining course",
      "Immediate revocation of your license for up to one year, and it is a separate criminal offense",
      "A minor $25 processing surcharge added to your next registration renewal fee",
      "No direct penalty as long as your ultimate BAC is proven to be under 0.08%"
    ],
    correctAnswerIndex: 1,
    explanation: "Refusing the test is a crime in Minnesota and results in an immediate administrative license revocation for up to one year."
  },
  {
    id: 1012,
    question: "You must dim your high beam headlights within how many feet of an oncoming vehicle?",
    options: [
      "1,000 feet",
      "500 feet",
      "300 feet",
      "200 feet"
    ],
    correctAnswerIndex: 0,
    explanation: "Minnesota law requires high beams to be dimmed when you are within 1,000 feet of an oncoming vehicle."
  },
  {
    id: 1013,
    question: "You must dim your high beams within how many feet when following another vehicle from behind?",
    options: [
      "1,000 feet",
      "500 feet",
      "300 feet",
      "200 feet"
    ],
    correctAnswerIndex: 3,
    explanation: "You must dim your high beam headlights when you are within 200 feet of a vehicle you are following."
  },
  {
    id: 1014,
    question: "What is the minimum safe following distance when behind another vehicle under normal driving conditions?",
    options: [
      "The 'one-car-length' rule",
      "The 'three-second' rule",
      "Exactly 50 feet",
      "No specific rule, as long as you can see their rear tires touching the pavement"
    ],
    correctAnswerIndex: 1,
    explanation: "Minnesota's manual highly recommends the 'three-second rule' as a safe, adjustable following distance in normal weather conditions."
  },
  {
    id: 1015,
    question: "Under Minnesota law, parallel parking is prohibited within how many feet of a fire hydrant?",
    options: [
      "5 feet",
      "10 feet",
      "15 feet",
      "20 feet"
    ],
    correctAnswerIndex: 1,
    explanation: "You are not permitted to park within 10 feet of a fire hydrant in Minnesota."
  },
  {
    id: 1016,
    question: "You are prohibited from parking your vehicle within how many feet of a stop sign, flashing beacon, or traffic control signal?",
    options: [
      "10 feet",
      "20 feet",
      "30 feet",
      "50 feet"
    ],
    correctAnswerIndex: 2,
    explanation: "Parking is illegal within 30 feet of any stop sign, yield sign, or traffic control signal."
  },
  {
    id: 1017,
    question: "Under Minnesota law, parking is prohibited within how many feet of a railroad crossing?",
    options: [
      "20 feet",
      "30 feet",
      "50 feet",
      "100 feet"
    ],
    correctAnswerIndex: 2,
    explanation: "You are not allowed to park a vehicle within 50 feet of the nearest rail of a railroad crossing."
  },
  {
    id: 1018,
    question: "What does a yellow diamond-shaped sign with black text or symbols represent?",
    options: [
      "A regulatory sign dictating direct traffic laws",
      "A general warning sign alerting you to upcoming conditions",
      "A guide sign showing highway service directions",
      "A school crossing sign exclusively"
    ],
    correctAnswerIndex: 1,
    explanation: "Yellow diamond-shaped signs are warning signs that alert drivers to path hazards, curves, lane merges, or changing conditions ahead."
  },
  {
    id: 1019,
    question: "What shape is a standard highway railroad crossing warning sign?",
    options: [
      "A yellow circle with a black 'RX' and crossbucks",
      "A white rectangle with black text",
      "An orange diamond with reflective lettering",
      "An upside-down red triangle"
    ],
    correctAnswerIndex: 0,
    explanation: "A round, yellow railroad warning sign with an 'X' and letters 'RR' is placed ahead of public crossings."
  },
  {
    id: 1020,
    question: "If an emergency vehicle (such as a police car, fire truck, or ambulance) approaches you from behind with flashing lights and sirens active, you must:",
    options: [
      "Maintain your speed and hold your lane strictly so they can steer around you",
      "Pull over to the right edge of the road and come to a complete stop",
      "Speed up to clear the way and turn off at the nearest intersection",
      "Pull over to the left median edge regardless of lane markings"
    ],
    correctAnswerIndex: 1,
    explanation: "Upon the approach of an emergency vehicle with active emergency lights or sirens, you must safely move your vehicle to the right-hand side of the road and stop completely until they pass."
  },
  {
    id: 1021,
    question: "What does Minnesota's 'Ted Foss Move Over Law' require you to do when approaching a stationary emergency passenger vehicle, tow truck, or patrol car with its warning lights flashing on the side of a multi-lane road?",
    options: [
      "Maintain highway speed but blow your horn as you pass",
      "Safely move to the lane farthest away from the vehicle if possible, or reduce speed significantly",
      "Come to a complete stop directly on the highway lane before slowly passing",
      "Only move over if it is night time or during severe winter blizzards"
    ],
    correctAnswerIndex: 1,
    explanation: "The Move Over Law requires drivers to safely move over one full lane from a stopped vehicle with activated flashing lights, or slow down dramatically if lane changes are unsafe."
  },
  {
    id: 1022,
    question: "When entering a multi-lane roundabout in Minnesota, what are the central rules of yielding?",
    options: [
      "Always yield to traffic already inside the roundabout loop, and stay in your chosen lane",
      "Vehicles inside must yield to incoming vehicles merging from the right",
      "You have the right-of-way if you are traveling in a straight trajectory through the center",
      "Change lanes frequently inside the roundabout to exit smoothly"
    ],
    correctAnswerIndex: 0,
    explanation: "When entering a roundabout, you must yield to vehicles already circulating inside. Furthermore, you should never change lanes or pass inside the roundabout loop."
  },
  {
    id: 1023,
    question: "Under Minnesota law, when is a driver allowed to make a left turn at a red traffic light?",
    options: [
      "Never, left turns on red are strictly illegal under all conditions",
      "Only when turning from a one-way street onto another one-way street, after coming to a complete stop and yielding",
      "At any intersection as long as there is no oncoming traffic directly in view",
      "Only in rural agricultural zones with speed limits under 45 mph"
    ],
    correctAnswerIndex: 1,
    explanation: "Left turns on red are legal in Minnesota ONLY when turning from a dedicated one-way street onto another designated one-way street, after a full stop and yield."
  },
  {
    id: 1024,
    question: "A solid yellow line on your side of the center road line means:",
    options: [
      "Passing is permitted when safe to do so",
      "Passing is allowed only during daytime hours",
      "Passing is completely prohibited on your side",
      "The lane is designated as a high-occupancy vehicle lane"
    ],
    correctAnswerIndex: 2,
    explanation: "A solid yellow line on your side of the center markings indicates that passing is forbidden for vehicles traveling in your direction."
  },
  {
    id: 1025,
    question: "A child must be secured in an approved, rear-facing child safety seat until they are:",
    options: [
      "At least 1 year old and 20 pounds",
      "At least 2 years old, or until they reach the weight/height limits of the seat's manufacturer",
      "Strictly 4 years old, regardless of height",
      "Only required if sitting in the outer front passenger seat"
    ],
    correctAnswerIndex: 1,
    explanation: "Minnesota law requires children to ride in a rear-facing safety seat until they are at least 2 years old, or have outgrown the seat's weight and height specifications."
  },
  {
    id: 1026,
    question: "When are you allowed to use a handheld mobile device while driving in Minnesota?",
    options: [
      "To check maps or texting while stopped at a red traffic light",
      "Only to type a quick message if traffic is moving under 15 mph",
      "Only in a hands-free or voice-activated system; holding a phone with your hand is strictly illegal",
      "Whenever you are on an interstate freeway with automated lane keeping assistance"
    ],
    correctAnswerIndex: 2,
    explanation: "Minnesota is a hands-free state. It is illegal to hold a phone in your hand to text, call, scroll, or use apps while operating a vehicle, even when stopped in traffic or at red lights."
  },
  {
    id: 1027,
    question: "An orange-colored triangle sign with a cut-lined red border mounted on the rear of a vehicle indicates:",
    options: [
      "The vehicle is transporting highly explosive chemicals",
      "A slow-moving vehicle designed to travel at speeds of 30 mph or less",
      "A wide-load tractor trailer carrying oversized industrial materials",
      "A vehicle operating with a minor student driver at the controls"
    ],
    correctAnswerIndex: 1,
    explanation: "This emblem represents a slow-moving vehicle, which travels at speeds of 30 mph or less (such as farm tractors, construction sweepers, etc.)."
  },
  {
    id: 1028,
    question: "If you are involved in a traffic crash in Minnesota resulting in injury, death, or total property damage of $1,000 or more, you must file an accident report within:",
    options: [
      "48 hours",
      "5 days",
      "10 days",
      "30 days"
    ],
    correctAnswerIndex: 2,
    explanation: "Every driver involved in an accident resulting in injury, death, or total property damage of $1,000 or more must file a crash report with Driver and Vehicle Services within 10 days of the incident."
  },
  {
    id: 1029,
    question: "What is the penalty for a driver who flees a police officer who is signaling a stop?",
    options: [
      "A standard highway ticket and a mandatory 60-day warning period",
      "A felony offense that can result in imprisonment, heavy fines, and license revocation",
      "A court warning and an increase in insurance premiums of up to 10%",
      "No penalty if the driver proves they did not exceed the posted speed limit while fleeing"
    ],
    correctAnswerIndex: 1,
    explanation: "Fleeing a peace officer in a motor vehicle is a serious felony crime in Minnesota, resulting in possible prison sentences of up to three years or more, large fines, and mandatory license loss."
  },
  {
    id: 1030,
    question: "In Minnesota, when parking downhill with a curb, in which direction should you turn your steering wheel?",
    options: [
      "Straight towards the center line",
      "Towards the curb / right",
      "Away from the curb / left",
      "It does not matter as long as your emergency parking brake is securely engaged"
    ],
    correctAnswerIndex: 1,
    explanation: "When parking downhill (with or without a curb), you must turn your wheels *towards the curb* (to the right) so that if the brakes fail, the vehicle rolls off the roadway."
  },
  {
    id: 1031,
    question: "When parking uphill with a curb, in which direction must you turn your front wheels?",
    options: [
      "Towards the curb / right",
      "Away from the curb / left",
      "Straight ahead",
      "In the opposite direction of the wind currents"
    ],
    correctAnswerIndex: 1,
    explanation: "When parking uphill with a curb, turn your front wheels *away from the curb* (to the left) so the back of your tire rests against the curb if the car rolls back."
  },
  {
    id: 1032,
    question: "When passing a bicyclist in your lane, Minnesota law requires a minimum clearance distance of:",
    options: [
      "At least 1 foot",
      "At least 3 feet",
      "At least 6 feet",
      "At least 10 feet"
    ],
    correctAnswerIndex: 1,
    explanation: "Minnesota law requires that you allow a minimum of 3 feet of clearance when passing a bicycle traveling in the same direction."
  },
  {
    id: 1033,
    question: "An eight-sided octagonal traffic sign is strictly reserved for:",
    options: [
      "Yield indicators",
      "Stop signs",
      "Railroad crossings",
      "Hospital navigation guides"
    ],
    correctAnswerIndex: 1,
    explanation: "An octagonal (eight-sided) shape is exclusively used for stop signs to ensure they are instantly recognizable from both front and back."
  },
  {
    id: 1034,
    question: "What does a flashing yellow traffic light mean?",
    options: [
      "Stop immediately and wait for the light to cycle through red to green",
      "Yield right of way as the light is about to turn red",
      "Proceed with caution, slowing down and scanning the intersection carefully",
      "The intersection is blocked, detour immediately to the right"
    ],
    correctAnswerIndex: 2,
    explanation: "A flashing yellow light means 'proceed with caution.' You do not need to come to a complete stop, but you must reduce speed and pay close attention to potential hazards."
  },
  {
    id: 1035,
    question: "What does a flashing red traffic light mean?",
    options: [
      "It acts as a standard stop sign — stop completely, yield, and proceed when clear",
      "The light is broken; treat the intersection as a free-flow lane",
      "Yield to left-turning traffic before proceeding without stopping",
      "Slow down to under 5 mph but do not stop if the lane is clear"
    ],
    correctAnswerIndex: 0,
    explanation: "A flashing red light has the exact same legal status as a stop sign. You must come to a complete stop, yield to cross traffic and pedestrians, and proceed when the way is clear."
  },
  {
    id: 1036,
    question: "When driving in dense fog, heavy rain, or powdery snow, which headlight setting should you use?",
    options: [
      "High beam headlights for maximum distance penetration",
      "Low beam headlights only, to avoid reflecting blinding glare back into your eyes",
      "Parking lights only to conserve battery life",
      "Do not use any lights as it makes your vehicle blend into the mist"
    ],
    correctAnswerIndex: 1,
    explanation: "Low beams should be used during fog, snow, or heavy rain. High beams will reflect off the water droplets or snowflakes, causing blinding glare and dramatically reducing your vision."
  },
  {
    id: 1037,
    question: "In Minnesota, who is legally required to wear a seat belt in a passenger vehicle?",
    options: [
      "Only the driver and front-seat passenger",
      "Only passengers under the age of 18",
      "Every occupant of the vehicle, regardless of whether they are sitting in the front or rear seats",
      "Rear passengers are exempt if the vehicle has side-curtain airbags"
    ],
    correctAnswerIndex: 2,
    explanation: "Minnesota has a mandatory seat belt law. The driver and *all* passengers in both front and back seats must be wearing a seat belt or booster seat."
  },
  {
    id: 1038,
    question: "If you are convicted of driving in Minnesota without auto insurance, what are the potential penalties?",
    options: [
      "A standard traffic citation and potential license suspension and court-ordered fines",
      "No direct penalty unless you are involved in a collision",
      "Only a warning is issued for a first-time offense",
      "A minor $10 surcharge is added to your next registration renewal"
    ],
    correctAnswerIndex: 0,
    explanation: "Driving without motor vehicle insurance in Minnesota is a misdemeanor and can result in fines, license suspension, vehicle registration revocation, and potential jail time."
  },
  {
    id: 1039,
    question: "What is 'hydroplaning'?",
    options: [
      "A form of winter skidding on solid black ice",
      "When tires lose all contact with the road surface and slide on a thin layer of water",
      "A safety system that automatically brakes individual tires to correct steering",
      "Driving through deep agricultural puddles at speeds under 10 mph"
    ],
    correctAnswerIndex: 1,
    explanation: "At speeds up to 35 mph or more, wet roads can cause a vehicle's tires to ride on a thin film of water rather than the pavement itself, which is called hydroplaning."
  },
  {
    id: 1040,
    question: "Under Minnesota's basic speed law, you must never drive faster than is:",
    options: [
      "The exact speed limit printed on the closest regulatory sign",
      "Reasonable and prudent under the existing road, weather, and traffic conditions",
      "The highway flow of traffic, even if it exceeds 85 mph in rainy weather",
      "Exactly 55 mph under any circumstance"
    ],
    correctAnswerIndex: 1,
    explanation: "The Basic Speed Law states that you must never drive faster than is reasonable and safe under current conditions, regardless of the posted speed limit."
  },
  {
    id: 1041,
    question: "What does the 'S.I.P.D.E.' scanning and driving technique stand for?",
    options: [
      "Scan, Identify, Predict, Decide, Execute",
      "Steer, Inspect, Park, Drive, Exit",
      "Speed, Intersect, Position, Distance, Emergency",
      "Signals, Intersections, Pedestrians, Detours, Enforcement"
    ],
    correctAnswerIndex: 0,
    explanation: "SIPDE is a defensive driving system: Scan the roadway, Identify potential hazards, Predict what might happen, Decide your best course of action, and Execute your decision safely."
  },
  {
    id: 1042,
    question: "When signaling a turn or stop with hand signals, what does it mean when the driver's left arm is bent upward at a 90-degree angle?",
    options: [
      "The driver is signaling a left turn",
      "The driver is signaling a right turn",
      "The driver is signaling a sudden stop or slow down",
      "The driver is waving to allow someone to pass"
    ],
    correctAnswerIndex: 1,
    explanation: "A hand and arm pointing straight up indicates a right turn. An arm extended straight out is a left turn, and downward signifies slow/stop."
  },
  {
    id: 1043,
    question: "What does a school zone speed limit law apply in Minnesota?",
    options: [
      "At all times during any legal school holiday or weekend",
      "When children are present or when the yellow warning beacons are actively flashing",
      "Only during standard high school athletic evening contests",
      "It only applies to commercial buses and garbage collection trucks"
    ],
    correctAnswerIndex: 1,
    explanation: "School zone speed limits are legally binding during school hours when children are present, or when designated flashing beacons alert drivers."
  },
  {
    id: 1044,
    question: "If another driver is exhibiting severe road rage or aggressive behavior toward you, what is the safest response?",
    options: [
      "Make aggressive gestures back to show you are not intimidated",
      "Avoid eye contact, remain calm, do not reply, and drive to a public area if followed",
      "Tap on your brakes multiple times while blocking their path to slow them down",
      "Follow them to their destination to exchange insurance details directly"
    ],
    correctAnswerIndex: 1,
    explanation: "De-escalate the situation by avoiding eye contact, staying in your lane, and ignoring provocative actions. Never exit your vehicle or pull over if followed."
  },
  {
    id: 1045,
    question: "In Minnesota, how far in advance of making a turn should you activate your turn signals?",
    options: [
      "At least 50 feet",
      "At least 100 feet",
      "At least 200 feet",
      "At least 500 feet"
    ],
    correctAnswerIndex: 1,
    explanation: "Minnesota law requires drivers to signal their intention to turn at least 100 feet before executing the actual maneuver."
  },
  {
    id: 1046,
    question: "What is the rule regarding the use of over-the-counter (OTC) drugs and driving in Minnesota?",
    options: [
      "OTC medications are always safe because they do not require a prescription",
      "You are responsible for reading labels and warnings; driving while impaired by OTC drugs carries the same legal DWI penalties as alcohol",
      "You may drive under their influence if you obtain a special sticker from your registered pharmacist",
      "You are only penalized if your blood concentration level exceeds a 0.08% chemical rating"
    ],
    correctAnswerIndex: 1,
    explanation: "Many allergy, cold, and sleep aids cause severe drowsiness. Impairment from over-the-counter drugs can result in identical DWI arrests and license suspensions."
  },
  {
    id: 1047,
    question: "When entering a multi-lane roundabout beside or behind a large commercial semi-truck, what is key for passenger vehicle drivers?",
    options: [
      "Squeeze into the space immediately next to the truck's bed to pass them quickly",
      "Give the truck plenty of room, as large trucks may require both lanes to navigate the tight roundabout curves",
      "Blow your horn continuously to alert the operator of your blind lane positioning",
      "Stay directly on their rear bumper to slipstream through the traffic circle"
    ],
    correctAnswerIndex: 1,
    explanation: "Commercial semi-trucks have a wide turning radius and often must span both lanes inside a roundabout loop. Always remain behind them and never attempt to pass them inside the circle."
  },
  {
    id: 1048,
    question: "What is the primary function of a freeway 'ramp meter' traffic signal?",
    options: [
      "To measure and record your passenger seating limit metrics of your vehicle",
      "To space out vehicles entering the highway to prevent merging bottlenecks and maintain smooth freeway flow",
      "To check whether your vehicle's license registration is current",
      "To issue speeding citations to vehicles changing states or counties"
    ],
    correctAnswerIndex: 1,
    explanation: "Ramp meters regulate the timed interval of merging vehicles, turning a mass of vehicles into a single-file, sequenced flow, which drastically reduces main-lane accidents."
  },
  {
    id: 1049,
    question: "What color is the standard regulatory, high-visibility warning emblem used on slow-moving vehicles?",
    options: [
      "An orange triangle with dark red reflective borders",
      "A bright neon green diamond",
      "A black-and-white striped horizontal barrel",
      "A solid yellow pentagon featuring outline indicators"
    ],
    correctAnswerIndex: 0,
    explanation: "The slow-moving vehicle emblem is a dedicated triangular shape of reflective orange centered within a dark red border, designed to alert drivers approaching from behind."
  },
  {
    id: 1050,
    question: "Under Minnesota state safety guidelines, children under what age should always be seated in the back seat of a vehicle?",
    options: [
      "Under 8 years old",
      "Under 13 years old",
      "Under 16 years old",
      "Under 18 years old"
    ],
    correctAnswerIndex: 1,
    explanation: "To prevent devastating impact injuries from front-seat airbag deployments, children under 13 should always be positioned in the rear seats of a vehicle."
  },
  {
    id: 1051,
    question: "What do blue background signs on Minnesota state highways communicate?",
    options: [
      "Recreational zones and structural landmarks",
      "Motorist service information such as lodging, gas, food, and hospitals",
      "Strict legal speed limits and highway lanes",
      "Construction bypass loops and lane barricades"
    ],
    correctAnswerIndex: 1,
    explanation: "Blue signs are motorist service signs that provide direct, high-visibility guidance on gas stations, nearby fast food, hotels, camping, or local medical centers."
  },
  {
    id: 1052,
    question: "What do brown background signs on public roadways represent?",
    options: [
      "General highway speed regulations",
      "Recreational, tourist, historic, or cultural interest directories",
      "Temporary winter weather detours",
      "Industrial freight delivery zones"
    ],
    correctAnswerIndex: 1,
    explanation: "Brown is the exclusive background color dedicated to pointing drivers toward state parks, public lakes, historic monuments, and recreational campgrounds."
  },
  {
    id: 1053,
    question: "What does a yellow painted line dividing traffic lanes always indicate?",
    options: [
      "Two lanes of traffic traveling in the exact same direction",
      "Traffic lanes moving in opposite directions",
      "A designated bicycle lane boundary",
      "The highway boundary showing exit ramps"
    ],
    correctAnswerIndex: 1,
    explanation: "Yellow center lines are universal, high-contrast markers used to divide paths traveling in completely opposite directional flows."
  },
  {
    id: 1054,
    question: "What does a solid white painted line on the outer edge of a roadway represent?",
    options: [
      "A lane change helper that encourages frequent passing",
      "A line showing you are traveling in a single construction zone",
      "A 'fog line' indicating the exact right edge of the paved highway",
      "An agricultural vehicle pathway guideline"
    ],
    correctAnswerIndex: 2,
    explanation: "A solid white edge line helps drivers remain on the main pavement during low-visibility conditions like snowstorms, dense fog, or dark rainy nights."
  },
  {
    id: 1055,
    question: "In what weather condition is driving traction most dangerous right when wet weather begins?",
    options: [
      "After it has been pouring heavily for several hours",
      "During the first few minutes of a light rainfall, as oil and dust rise to the surface",
      "Directly after the stormwater drains completely clear",
      "When the air temperature is at exactly 55 degrees"
    ],
    correctAnswerIndex: 1,
    explanation: "A dry road accumulates a film of grease, motor oil, and dust particles. Right as rain first starts, it mixes on the hot surface to form a highly slick emulsion. Continued heavy rain washes it away."
  },
  {
    id: 1056,
    question: "If your vehicle begins to slide or fishtail on a patches of winter black ice, you should:",
    options: [
      "Slam hard on your breaks and jerk your steering wheel back and forth quickly",
      "Ease off the accelerator gas, steer smoothly in the direction of the skid, and avoid sudden braking",
      "Accelerate to force your tires to spin out of the slick patch",
      "Shift the vehicle directly into reverse gears to locked tires"
    ],
    correctAnswerIndex: 1,
    explanation: "Never panic. Release the gas, do not slam on the conventional brakes, and look/steer in the exact direction you want the front of your car to go."
  },
  {
    id: 1057,
    question: "In Minnesota, what must you do if you accidentally collide with and damage an unattended parked car, and are unable to locate the owner?",
    options: [
      "Leave immediately, as there is no legal consequence for minor scratches",
      "Write a clearly legible note with your name, address, contact details, and incident summary, place it securely under the wiper, and report the event",
      "Wait for exactly 5 minutes, then leave without leaving details if no witnesses appear",
      "Take a photo of their license plate and file it with your personal diary"
    ],
    correctAnswerIndex: 1,
    explanation: "Failing to leave your identification details on an unattended crashed vehicle is a criminal hit-and-run offense in Minnesota."
  },
  {
    id: 1058,
    question: "What is a major warning sign or cause representing carbon monoxide risks in automobiles?",
    options: [
      "Low tire pressure warnings combined with poor motor oil quality",
      "Running your car's engine inside a completely sealed garage, or operating with a severely damaged, leaking exhaust tailpipe",
      "Allowing the windshield fluid levels to drop below minimum limits",
      "Driving on standard highways with your climate fans at high power"
    ],
    correctAnswerIndex: 1,
    explanation: "Carbon monoxide is an odorless, invisible, deadly gas. Never warm your car in a closed garage, and ensure a damaged muffler/exhaust system is replaced immediately."
  },
  {
    id: 1059,
    question: "What do green background signs on standard freeways convey?",
    options: [
      "Hazard warnings and sharp turn warnings",
      "Direction, navigation guidance, distances, and exit destination information",
      "Strict legal speed regulations",
      "Bicycle path lane markers"
    ],
    correctAnswerIndex: 1,
    explanation: "Green signs are navigational guide signs. They show upcoming exits, highway mileage numbers, and state geography routes."
  },
  {
    id: 1060,
    question: "What does keeping a steady yellow arrow traffic signal indicate for turns?",
    options: [
      "The protected turn phase is ending; prep to yield oncoming lanes or come to a safe stop",
      "On oncoming cars have completed a full stop, acceleration forms",
      "Your turn has direct right-of-way priority indefinitely",
      "The light is broken; treat it as a four-way yield stop"
    ],
    correctAnswerIndex: 0,
    explanation: "A steady yellow turn arrow warns you that the green protected arrow is ending. You must stop if it is safe to do so, or complete your turn safely if already inside the intersection."
  },
  {
    id: 1061,
    question: "Under Minnesota law, when are you legally permitted to pass another vehicle on the right side?",
    options: [
      "When the vehicle ahead is making or signaling a left-hand turn, provided there is a fully paved lane/shoulder on your right",
      "Whenever you are running late and want to skip slow highway traffic",
      "You are permitted to pass on the unpaved grass shoulder at any time",
      "Passing on the right is strictly illegal under every scenario"
    ],
    correctAnswerIndex: 0,
    explanation: "You can pass on the right only when the vehicle parsed is making a left turn, and there is a fully paved lane to the right, or on multi-lane highways without exiting the paved surface."
  },
  {
    id: 1062,
    question: "What is the penalty rating for a second or subsequent hands-free cell phone violation in Minnesota?",
    options: [
      "A minor $15 court administration warning",
      "A criminal misdemeanor fine of $275 plus additional court costs",
      "Permanent revocation of your registration plate for 3 years",
      "There is no increased penalty for subsequent violations"
    ],
    correctAnswerIndex: 1,
    explanation: "To combat texting while driving, Minnesota imposes a heavy $275 fine for any hands-free cell phone violations after your first conviction."
  },
  {
    id: 1063,
    question: "Under Minnesota traffic regulations, when do pedestrians have the legal right of way?",
    options: [
      "Only when crossing inside designated crosswalks with painted white lines",
      "At all marked and unmarked crosswalks, and at virtually all standard lane intersections",
      "Only when crossing during school recess hours",
      "Pedestrians never have the right of way over motor vehicles moving on main avenues"
    ],
    correctAnswerIndex: 1,
    explanation: "Drivers must yield to a pedestrian crossing the road within any marked crosswalk or at any intersection, even if there are no painted lines on the asphalt (unmarked crosswalk)."
  },
  {
    id: 1064,
    question: "What kind of information is displayed on a white background sign with black lettering?",
    options: [
      "General tourist directories",
      "Regulatory instructions, such as speed limit mandates or turn prohibitions",
      "Public park routes and cultural guides",
      "Highway hazard alerts"
    ],
    correctAnswerIndex: 1,
    explanation: "White vertical rectangles are regulatory signs indicating laws. Examples include 'Speed Limit 55', 'No Turn on Red', and 'One Way'."
  },
  {
    id: 1065,
    question: "What represents Minnesota's official policy on the 'Zipper Merge' guideline?",
    options: [
      "Drivers should merge early and form a single line as soon as they see a 'Lane Closed Ahead' sign",
      "Drivers should use both lanes of traffic fully until the point of merge, then take turns in a sequence",
      "The lane with fewer cars has the complete right of way over the merging lane",
      "Merge immediately at high speeds to force your way into the flow"
    ],
    correctAnswerIndex: 1,
    explanation: "The Zipper Merge keeps both lanes fully used as long as possible. This reduces traffic backups by up to 40% and ensures stable flowing speeds on construction approach vectors."
  },
  {
    id: 1066,
    question: "When parking uphill on a public street without any physical street curb, which way should you turn your wheels?",
    options: [
      "Turn your front steering wheels toward the right/road side edge",
      "Turn your steering wheels toward the left/center lane",
      "Keep them aligned straight ahead",
      "The parking brake fulfills all roles, wheels don't matter"
    ],
    correctAnswerIndex: 0,
    explanation: "When parking uphill *without* a curb, turn your front wheels to the right. If your vehicle rolls back, it will roll off the roadway, rather than turning into oncoming lane traffic."
  },
  {
    id: 1067,
    question: "A high-visibility yellow five-sided pentagon sign is reserved for indicating:",
    options: [
      "Hospital emergency access centers",
      "School speed zones, school crossings, and pedestrian buffers",
      "A public railway terminal crossbuck",
      "State boundary limits"
    ],
    correctAnswerIndex: 1,
    explanation: "Pentagon (five-sided) signs indicate school zones or school pedestrian crossing paths. Slow down and watch carefully for children."
  },
  {
    id: 1068,
    question: "If your passenger vehicle is equipped with electronic Anti-Lock Brakes (ABS), how should you brake in an emergency stop?",
    options: [
      "Pump the brake pedal as quickly and as hard as possible",
      "Apply firm, constant pressure to the brake pedal and maintain it; do not pump the brakes",
      "Hold the emergency handbrake up while pumping on the floor pedal",
      "Gently feather the brakes while turning the key off"
    ],
    correctAnswerIndex: 1,
    explanation: "With ABS, pumping the brake overrides the computer system. Simply plant your foot firmly on the pedal and steer. ABS automatically pumps the brakes for you to prevent lock-ups."
  },
  {
    id: 1069,
    question: "If your car's accelerator pedal suddenly jams down and sticks while traveling at high speed, what should you do first?",
    options: [
      "Slam the vehicle immediately into Park gears and pull the starter keys",
      "Shift the transmission to Neutral gears, steer safely to the shoulder, and apply constant braking pressure",
      "Pump your gas pedal repeatedly to dislodge the spring while accelerating",
      "Open your driver door and check your wheel alignments visually"
    ],
    correctAnswerIndex: 1,
    explanation: "Shifting to Neutral allows the engine to rev safely while cutting power to the drive wheels. Once in neutral, brake firmly and navigate the car off the highway safely before turning off the engine."
  },
  {
    id: 1070,
    question: "If you experience a violent and sudden tire blowout on the highway, what is the best sequence of reaction?",
    options: [
      "Jerk your steering wheel away from the blowout side and lock up your brakes instantly",
      "Hold your steering wheel in a firm grip, keep the vehicle straight, ease off the accelerator, and brake gently once the car slows down",
      "Mash your accelerator to keep the car's dynamic momentum balanced in a straight line",
      "Shift into a lower gear to lock up the tires"
    ],
    correctAnswerIndex: 1,
    explanation: "Sudden braking during a blowout causes a complete rollover or violent swerve. Stay calm, grip the wheel, let the car coast to a slower safe speed, and pull on the shoulder safely."
  },
  {
    id: 1071,
    question: "When are drivers allowed to enter or drive inside a designated bicycle lane in Minnesota?",
    options: [
      "Whenever normal lanes are heavily crowded with morning commuters",
      "Only when preparing to make a right-hand turn or entering a driveway, after yielding to any bicycles near you",
      "To park your vehicle temporarily while picking up deliveries",
      "You are never allowed to cross over a painted bicycle lane"
    ],
    correctAnswerIndex: 1,
    explanation: "You must never drive within a bicycle lane except when entering a private driveway or preparing for a legal turn, during which you must check your blind spots and yield to active cyclists."
  },
  {
    id: 1072,
    question: "What does keeping a flashing yellow arrow traffic signal indicate?",
    options: [
      "You must come to a complete stop and wait for a green solid arrow",
      "You may make a left turn, but you do not have right-of-way; you must yield to all oncoming traffic and cross pedestrians first",
      "Unrestricted protected right of way turns",
      "The signal is malfunctioning; proceed only on red signals"
    ],
    correctAnswerIndex: 1,
    explanation: "A flashing yellow arrow means left turns are permitted but unprotected. Oncoming traffic still has a green light and has right of way."
  },
  {
    id: 1073,
    question: "Under Minnesota state statute, if you are convicted of driving at or above 100 mph, how long will your driving privileges be revoked?",
    options: [
      "A minimum of 30 days",
      "A minimum of 3 months",
      "A minimum of 6 months",
      "A minimum of 1 year"
    ],
    correctAnswerIndex: 2,
    explanation: "Driving at or over 100 mph is a highly reckless offense. In addition to heavy speeding fines, it carries a mandatory license revocation of at least six months."
  },
  {
    id: 1074,
    question: "When is it legal to drive on the paved right-hand shoulder of a Minnesota highway?",
    options: [
      "To pass a vehicle traveling under 25 mph inside your primary lane",
      "Only during extreme vehicle emergencies, or when explicitly directed to do so by a police officer or lane control flaggers",
      "Whenever you are turning right at an intersection up to 500 feet away",
      "During peak rush hours to bypass vehicle backups"
    ],
    correctAnswerIndex: 1,
    explanation: "The shoulder is strictly not a travel lane. You may only drive on it for safe emergency stopping or under official emergency lane redirection directives."
  },
  {
    id: 1075,
    question: "For teen drivers during the first 6 months of holding a provisional license, what is the legal passenger limit?",
    options: [
      "No passenger limit as long as all occupants wear seatbelts",
      "Only 1 passenger under age 20, unless accompanied by a parent/guardian, or if passengers are immediate family",
      "Only 2 passengers of any age, regardless of adult accompaniment",
      "Only immediate children, other teens are entirely prohibited"
    ],
    correctAnswerIndex: 1,
    explanation: "Minnesota limits teen passenger numbers to reduce distractions and risk factors for new, young drivers during their first 6 months."
  },
  {
    id: 1076,
    question: "What are the nighttime driving restrictions for a Minnesota teen driver holding their provisional license for the first 6 months?",
    options: [
      "They are prohibited from driving between 10:00 PM and Midnight under all circumstances",
      "They are prohibited from driving between Midnight and 5:00 AM, except when driving to/from work, school events, or are accompanied by a licensed adult",
      "They may not ride on any highway after sunset",
      "There are no hourly restrictions for teenagers holding Class D provisional licenses"
    ],
    correctAnswerIndex: 1,
    explanation: "To keep new drivers safe, driving between midnight and 5:00 AM is prohibited for the first 6 months, with clear exceptions for employment and school-sanctioned activities."
  },
  {
    id: 1077,
    question: "Under age 18, how long must you hold an official instruction permit in Minnesota before you are eligible to take your road driving test?",
    options: [
      "At least 3 months",
      "At least 6 months",
      "At least 1 year",
      "At least 18 months"
    ],
    correctAnswerIndex: 1,
    explanation: "If you are under 18 years old, you must hold a valid instruction permit for at least 6 consecutive months before taking your DMV practical road examination."
  },
  {
    id: 1078,
    question: "What does Minnesota law specify regarding hanging items or decals on your rearview mirror and windshield?",
    options: [
      "You may hang any decorations as long as they are under 12 inches in size",
      "It is illegal to operate a vehicle with toys, air fresheners, or GPS units suspended from your mirror that obstruct the driver's clear forward view",
      "You are only restricted if you have rear-seat passengers",
      "Only state-appointed toll tags are permitted anywhere on the side mirrors"
    ],
    correctAnswerIndex: 1,
    explanation: "Any suspension from the rearview mirror or windshield sticker placement that inhibits a clear 180-degree forward vision is illegal and subject to visual obstruction citations."
  },
  {
    id: 1079,
    question: "What is the minimum legal property damage liability insurance coverage amount required in a standard Minnesota auto policy?",
    options: [
      "At least $5,000",
      "At least $10,000",
      "At least $25,000",
      "At least $50,000"
    ],
    correctAnswerIndex: 1,
    explanation: "Under Minnesota's mandatory auto insurance limits, drivers must buy at least $10,000 of coverage for destruction of property of others."
  },
  {
    id: 1080,
    question: "What is meant by the dangerous driving condition known as 'overdriving your headlights'?",
    options: [
      "Using exceptionally high-wattage bulbs that deplete battery reserves",
      "Driving at a speed where your vehicle's total emergency stopping distance exceeds the illuminated distance of your headlights",
      "Driving with high beam lights active in daytime city driving zones",
      "Adjusting your headlights to aim higher than the horizon line"
    ],
    correctAnswerIndex: 1,
    explanation: "Overdriving your headlights is a common night-accident cause. If you cannot stop within the clear distance shown by your headlight beam, you will hit an obstacle before you have time to react."
  },
  {
    id: 1081,
    question: "When a school bus is stopped with its red lights flashing and passenger stop arm fully extended, how far back must you stop your vehicle?",
    options: [
      "At least 10 feet",
      "At least 20 feet",
      "At least 50 feet",
      "At least 100 feet"
    ],
    correctAnswerIndex: 1,
    explanation: "Minnesota law requires drivers traveling in either direction behind or approaching a school bus to stop at least 20 feet back when red lights are active and the stop arm is fully out."
  },
  {
    id: 1082,
    question: "When is a driver on a divided highway with a physical median barrier (such as a concrete wall or raised grass median) required to stop for a stopped school bus on the opposite side?",
    options: [
      "You must stop in all cases regardless of a physical median separation",
      "You are not required to stop if you are traveling in the opposite direction on a legally divided highway separated by a physical median",
      "Only if school children are actively running across the median barrier",
      "Only during early morning rush hours"
    ],
    correctAnswerIndex: 1,
    explanation: "If a highway is physically divided by a raised barrier, boulevard partition, or median wall, oncoming traffic is not legally forced to stop for opposite-side buses. Follow strict caution nonetheless."
  },
  {
    id: 1083,
    question: "What is the penalty for passing a school bus on the right side while its passenger door is open and red lights are actively flashing?",
    options: [
      "A minor administrative warning slip",
      "A Class A felony charge with guaranteed jail term",
      "A gross misdemeanor violation including a fine of up to $1,000 and possible license suspension",
      "A $50 equipment parking ticket"
    ],
    correctAnswerIndex: 2,
    explanation: "Passing a school bus on the door-side while children are loading or unloading is an extremely serious gross misdemeanor offense, bringing massive fines and mandatory driving privilege reviews."
  },
  {
    id: 1084,
    question: "Under Minnesota's Ted Foss 'Move Over' Law, what must a driver do when approaching any parked emergency vehicle with amber, blue, or red flashing lights?",
    options: [
      "Maintain your exact speed and merge directly closer to the vehicle to block them",
      "Safe lane-change to leave at least one full empty lane of separation, or slow down dramatically if a lane change is impossible/unsafe",
      "Bring your vehicle to a complete stop directly on the main highway travel lane",
      "Blow your horn to indicate you are passing"
    ],
    correctAnswerIndex: 1,
    explanation: "The Move Over law protects highway patrol, tow trucks, and emergency personnel. You must merge away into a safe lane, or slow down significantly if moving over is not possible due to immediate traffic."
  },
  {
    id: 1085,
    question: "Who is required by Minnesota law to wear a seat belt or occupant constraint in a moving passenger vehicle?",
    options: [
      "Only the driver and front-seat passengers",
      "Only passengers who are under 18 years of age",
      "The driver and all passengers, seated in both front and rear seats, must wear seat belts at all times",
      "Only passenger vehicles driving above 55 mph"
    ],
    correctAnswerIndex: 2,
    explanation: "Minnesota enforces a mandatory seat belt law for all passenger vehicle spots. The driver can be cited if any passenger is not buckled up."
  },
  {
    id: 1086,
    question: "When are you legally required to turn on your vehicle's headlights under Minnesota law?",
    options: [
      "Only from midnight until 5:00 AM",
      "Whenever you are driving on dirt roads or gravel paths",
      "From sunset to sunrise, and during any precipitation event (rain, snow, sleet, hail, heavy fog), or when visibility is less than 500 feet",
      "Only when driving on interstates or toll expressways"
    ],
    correctAnswerIndex: 2,
    explanation: "Under Minnesota statute, anytime your windshield wipers are activated due to rain, ice, or snow, or when visibility falls under 500 feet, you must turn your low-beam headlights on."
  },
  {
    id: 1087,
    question: "At what speed does hydroplaning—where tires lose contact with the road and ride on a thin film of water—typically begin?",
    options: [
      "At speeds as low as 35 mph, increasing dramatically up to 55 mph",
      "Only when traveling at speeds above 80 mph",
      "Only during frozen winter blizzards",
      "At exactly 15 mph in urban roundabouts"
    ],
    correctAnswerIndex: 0,
    explanation: "Hydroplaning can occur at speeds as low as 35 mph in deep rain pooling. At 55 mph, worn tires can lose all contact with the pavement, leaving you with zero steering control."
  },
  {
    id: 1088,
    question: "Under Minnesota rules, what is the minimum distance you must park your vehicle from a fire hydrant?",
    options: [
      "At least 5 feet",
      "At least 10 feet",
      "At least 15 feet",
      "At least 25 feet"
    ],
    correctAnswerIndex: 1,
    explanation: "To allow access for fire trucks and emergency pumps, you are legally forbidden from parking closer than 10 feet from any fire hydrant."
  },
  {
    id: 1089,
    question: "What is the minimum distance you must park your vehicle from a pedestrian crosswalk at an intersection?",
    options: [
      "At least 10 feet",
      "At least 15 feet",
      "At least 20 feet",
      "At least 30 feet"
    ],
    correctAnswerIndex: 2,
    explanation: "You must park at least 20 feet away from any marked or unmarked pedestrian crosswalk at an intersection to maintain clear visual lines for crosswalk safety."
  },
  {
    id: 1090,
    question: "How far away from any flashing beacon, stop sign, or traffic control signal must you park your vehicle?",
    options: [
      "At least 15 feet",
      "At least 20 feet",
      "At least 30 feet",
      "At least 50 feet"
    ],
    correctAnswerIndex: 2,
    explanation: "To ensure drivers can clearly see traffic signals, you must park at least 30 feet away from any stop sign, flashing warning display, or structural traffic light."
  },
  {
    id: 1091,
    question: "What is the minimum distance you are permitted to park your vehicle from the nearest rail of a railroad crossing?",
    options: [
      "At least 15 feet",
      "At least 30 feet",
      "At least 50 feet",
      "At least 100 feet"
    ],
    correctAnswerIndex: 2,
    explanation: "You must never park within 50 feet of any railway tracks to prevent visibility blockages and physical hazards near trains."
  },
  {
    id: 1092,
    question: "What distance safety buffer is recommended by the standard 'three-second rule' under normal dry weather driving conditions?",
    options: [
      "It represents the exact distance in yards you must keep behind transit buses",
      "A minimum safe following distance between your vehicle and the car directly ahead",
      "The duration of time your steering column is locked when your keys are exited",
      "The duration of your turn signal flashing before parking"
    ],
    correctAnswerIndex: 1,
    explanation: "The three-second rule helps maintain a safe stopping buffer. When the vehicle in front passes a shadow or telephone pole, it should take you at least three seconds to reach that exact marker."
  },
  {
    id: 1093,
    question: "When two vehicles reach an uncontrolled intersection at the same time, which driver must yield the right of way?",
    options: [
      "The vehicle on the right must yield to the vehicle on the left",
      "The driver on the left must yield the right of way to the vehicle on the right",
      "The larger vehicle always has direct priority over smaller cars",
      "The vehicle moving at the higher speed has direct priority"
    ],
    correctAnswerIndex: 1,
    explanation: "At an uncontrolled multi-leg intersection, the driver on the left must yield the right-of-way directly to the driver on their right."
  },
  {
    id: 1094,
    question: "What does an active flashing red traffic light mean at an intersection?",
    options: [
      "Yield to all vehicles, but you do not need to come to a complete stop",
      "Treat the intersection exactly like a standard stop sign; stop completely, yield to traffic, then proceed when clear",
      "The light is warning of an oncoming school bus",
      "The road ahead is closed, turn around immediately"
    ],
    correctAnswerIndex: 1,
    explanation: "A flashing red traffic signal is identical to a stop sign. You must come to a full stop and yield to cross traffic before moving forward."
  },
  {
    id: 1095,
    question: "What does a flashing yellow traffic signal mean?",
    options: [
      "Stop completely and wait for a green arrow",
      "Proceed with caution; be alert, slow down, and prepare to stop if necessary",
      "The speed limit is temporarily doubled",
      "Come to a full stop and yield to all left turning vehicles"
    ],
    correctAnswerIndex: 1,
    explanation: "A flashing yellow light warns you of an intersection hazard or yield condition. Slow down, check cross streams, and navigate through carefully."
  },
  {
    id: 1096,
    question: "What is the standard speed limit on Minnesota streets and highways in urban or residential areas unless otherwise posted?",
    options: [
      "15 mph",
      "30 mph",
      "45 mph",
      "55 mph"
    ],
    correctAnswerIndex: 1,
    explanation: "Under Minnesota state default laws, the maximum legal limit in any urban residential or business town district is 30 mph unless signs posting a different speed limit are present."
  },
  {
    id: 1097,
    question: "What is the default speed limit on Minnesota two-lane rural highways unless otherwise posted?",
    options: [
      "45 mph",
      "55 mph",
      "65 mph",
      "70 mph"
    ],
    correctAnswerIndex: 1,
    explanation: "The default legal speed limit on standard non-residential, two-lane rural country roads in Minnesota is 55 mph unless posted otherwise."
  },
  {
    id: 1098,
    question: "What is the maximum speed limit permitted in an alleyway in Minnesota?",
    options: [
      "10 mph",
      "15 mph",
      "20 mph",
      "25 mph"
    ],
    correctAnswerIndex: 0,
    explanation: "Alleys are narrow spaces with poor visibility and high pedestrian risk. The default speed limit is strictly set at 10 mph."
  },
  {
    id: 1099,
    question: "What is the illegal Blood Alcohol Concentration (BAC) limit to drive a commercial motor vehicle in Minnesota?",
    options: [
      "0.02%",
      "0.04%",
      "0.08%",
      "0.10%"
    ],
    correctAnswerIndex: 1,
    explanation: "While the passenger vehicle limit is 0.08%, commercial vehicle operators are held to a much stricter safety standard and are legally impaired at 0.04% BAC."
  },
  {
    id: 1100,
    question: "What is the core directive of Minnesota's 'Implied Consent Law'?",
    options: [
      "By driving on Minnesota roads, you automatically give consent to a chemical test (breath, blood, or urine) to check for alcohol/drugs if requested by an officer",
      "You consent to allow anyone to operate your vehicle at any time",
      "You consent to pay any traffic tickets without a court hearing",
      "You automatically agree to buy automobile insurance within 10 days of moving"
    ],
    correctAnswerIndex: 0,
    explanation: "Implied Consent means that using public roads in Minnesota implies you agree to submit to alcohol and drug testing. Refusal to take the test is a separate crime and results in a mandatory 1-year license revocation."
  },
  {
    id: 1101,
    question: "Under Minnesota's 'Not a Drop' law, what are the impairment consequences for drivers under 21 years old?",
    options: [
      "They can drink up to 0.05% BAC if accompanied by a parent",
      "It is illegal to drive a motor vehicle with *any* trace or level of alcohol in the body, which will result in immediate suspension",
      "They are only penalized if they cause a collision",
      "They are allowed to drink on weekends only"
    ],
    correctAnswerIndex: 1,
    explanation: "Minnesota has zero tolerance ('Not a Drop') for underage drinking and driving. Any alcohol level above 0.00% BAC on a young driver's breath or blood test results in instant license loss."
  },
  {
    id: 1102,
    question: "Under 'Vanessa's Law', what happens to an unlicensed teen driver under age 18 who accumulates a crash-related moving violation or substance offense?",
    options: [
      "They must pay a minor $50 court charge with no driving impact",
      "They cannot obtain an instruction permit or provisionary license until they turn 18, and must fulfill strict classes and full testing then",
      "Their motor vehicle is permanently impounded and crushed by the state",
      "They are assigned to 500 hours of city litter detail"
    ],
    correctAnswerIndex: 1,
    explanation: "Vanessa's Law applies strict penalties to minors under 18. An offense blocks them from taking their license test until 18, when they must pay high fees, take driver's education classes, and pass all written and road tests."
  },
  {
    id: 1103,
    question: "When passing a bicycle on a public roadway, what is the minimum lateral safety distance you must maintain between your vehicle and the cyclist?",
    options: [
      "At least 1 foot",
      "At least 3 feet",
      "At least 6 feet",
      "At least 10 feet"
    ],
    correctAnswerIndex: 1,
    explanation: "Minnesota law requires motor vehicles to allow at least 3 feet of side clearance clearance when overtaking any bicycle."
  },
  {
    id: 1104,
    question: "When you are following an emergency response vehicle (like a fire engine) with active sirens, what is the minimum safe following distance you must maintain?",
    options: [
      "At least 100 feet",
      "At least 250 feet",
      "At least 500 feet",
      "At least 1,000 feet"
    ],
    correctAnswerIndex: 2,
    explanation: "You must remain at least 500 feet behind any active fire truck, ambulance, or police emergency response vehicle that has its emergency warning light beacons or sirens in operation."
  },
  {
    id: 1105,
    question: "You are driving on a dark highway. If you are overtaking and approaching a vehicle from behind in your same lane, within what distance must you dim your high beams?",
    options: [
      "Within 100 feet",
      "Within 200 feet",
      "Within 500 feet",
      "Within 1,000 feet"
    ],
    correctAnswerIndex: 1,
    explanation: "Dim your high beams to prevent blinding the driver ahead. When following another car, switch to low beams within 200 feet of their rear bumper."
  },
  {
    id: 1106,
    question: "You are driving at night on a dark rural road. Within what distance of an *oncoming* vehicle approaching from the opposite direction must you dim your high beams?",
    options: [
      "Within 200 feet",
      "Within 500 feet",
      "Within 1,000 feet",
      "Within 2,000 feet"
    ],
    correctAnswerIndex: 2,
    explanation: "To prevent blinding drivers traveling in the opposite direction, you must turn off your high beams when an oncoming vehicle is within 1,000 feet."
  },
  {
    id: 1107,
    question: "What is the minimum legal tire tread depth safety requirement in Minnesota?",
    options: [
      "At least 1/32 of an inch",
      "At least 1/16 of an inch (which can be measured with an upside-down penny)",
      "At least 1/8 of an inch",
      "At least 1/4 of an inch"
    ],
    correctAnswerIndex: 1,
    explanation: "If tire tread depth is less than 1/16 of an inch, it is legally bald, extremely prone to sliding, and highly illegal to operate on Minnesota public pavements."
  },
  {
    id: 1108,
    question: "If you move from another state or change your residential street address within Minnesota, how long do you have to notify the DMV and update your license?",
    options: [
      "Within 10 days",
      "Within 30 days",
      "Within 60 days",
      "Within 90 days"
    ],
    correctAnswerIndex: 1,
    explanation: "Minnesota law requires you to notify the DMV and apply for a replacement duplicate license within 30 days of changing your legal name or primary residential address."
  },
  {
    id: 1109,
    question: "What does a lane control signal with a solid Red X light pointing over your lane mean?",
    options: [
      "The lane is a high-speed carpool transit lane",
      "You are prohibited from driving in this lane; exit the lane as soon as possible because it is closed or oncoming",
      "Prepare to speed up through a turn toll",
      "Yield to construction barricades inside 500 feet"
    ],
    correctAnswerIndex: 1,
    explanation: "A steady red X overhead indicates that the lane is strictly closed to your stream of traffic. You must exit it immediately for safety."
  },
  {
    id: 1110,
    question: "When are you permitted to cross double solid white lines painted on a highway?",
    options: [
      "Whenever you want to pass a vehicle slower than you",
      "Only during midnight driving hours",
      "You are strictly prohibited from crossing double solid white lines; you must stay within your lane",
      "To exit into an unpaved rest shoulder"
    ],
    correctAnswerIndex: 2,
    explanation: "Double solid white lines indicate that lane changes are highly dangerous and completely prohibited. You must never cross them."
  },
  {
    id: 1111,
    question: "What must you do when a transit bus or city bus inside your lane has signaled its intention and is trying to pull back into traffic?",
    options: [
      "Accelerate quickly to slip around they can merge behind you",
      "Yield the right-of-way to the transit bus and allow it to merge back into traffic",
      "Sound your horn and proceed adjacent to the bus frame",
      "Shift lanes and make an emergency left turn"
    ],
    correctAnswerIndex: 1,
    explanation: "Minnesota statutes require drivers to yield the right-of-way to active municipal transit buses attempting to re-enter traffic lanes from a bus stop."
  },
  {
    id: 1112,
    question: "What is the rule when exiting a modern traffic roundabout in Minnesota?",
    options: [
      "You are not required to signal when leaving standard traffic circles",
      "Use your left turn signal to alert cars behind they must slow down",
      "Always signal your intention to turn right immediately before your exit point to inform other waiting vehicles",
      "Blow your horn to indicate you are emerging"
    ],
    correctAnswerIndex: 2,
    explanation: "Using your right turn signal just before your exit helps clear the roundabout bottleneck, informing waiting cars they can safely enter the circle."
  },
  {
    id: 1113,
    question: "In Minnesota, a child must ride in an approved forward-facing child safety seat or booster seat until they meet what safety thresholds?",
    options: [
      "Until they are at least 5 years old and weigh 40 pounds",
      "Until they are at least 8 years old or reach a height of 4 feet 9 inches (57 inches)",
      "Until they reach high school age",
      "Under Minnesota rules, only front-seat passengers under 5 must use safety seats"
    ],
    correctAnswerIndex: 1,
    explanation: "To ensure seat belts rest safely over the strong hip bones and shoulder center instead of the soft stomach and neck, children must use booster seats until age 8 or until they reach 4 feet 9 inches tall."
  },
  {
    id: 1114,
    question: "What is the fine for accelerating or driving past a posted, active worker road construction zone at speeds exceeding the speed limit?",
    options: [
      "A standard parking-level warning card",
      "A flat fine of $300, in addition to standard court fees and driving record points",
      "Guaranteed vehicle seizure and auction",
      "A fine of exactly $25"
    ],
    correctAnswerIndex: 1,
    explanation: "Minnesota strictly protects highway maintenance crews. Speed violations in active work areas carry a mandatory, non-negotiable $300 minimum fine."
  },
  {
    id: 1115,
    question: "What is the penalty for a driver convicted of intentionally running away or attempting to flee from a police officer in a motor vehicle?",
    options: [
      "A minor speeding license correction point",
      "A serious felony conviction, which can result in imprisonment for up to three years and hefty criminal fines",
      "Community service sweeping pedestrian intersections",
      "A temporary verbal warning from county judges"
    ],
    correctAnswerIndex: 1,
    explanation: "Fleeing a law enforcement officer in a car is a felony in Minnesota. Punishments include severe prison terms, heavy fines, and permanent loss of driving privileges."
  },
  {
    id: 1116,
    question: "If you are involved in a traffic crash resulting in injury, death, or total property damage exceeding $1,000, how long do you have to file an official crash report?",
    options: [
      "Within 48 hours",
      "Within 5 days",
      "Within 10 days",
      "Within 30 days"
    ],
    correctAnswerIndex: 2,
    explanation: "In Minnesota, any collision involving injury, death, or total damage of $1,000 or more requires you to submit an official accident report to the state within 10 days."
  },
  {
    id: 1117,
    question: "What does a solid yellow painted curb line along the side of a street indicate?",
    options: [
      "A designated lane where you are permitted to park uphill only",
      "No parking, stopping, or standing is allowed next to the curb",
      "A loading zone reserved for school bus vehicles only",
      "A bicycle lane safety zone warning sign"
    ],
    correctAnswerIndex: 1,
    explanation: "Yellow painted curbs serve as a high-visibility regulatory warning indicating strict 'No Parking' zones."
  },
  {
    id: 1118,
    question: "When are you permitted to make a right-hand turn while facing a steady red traffic signal?",
    options: [
      "Only on Sundays and national holidays",
      "At any time without stopping if there are no police cruisers nearby",
      "After coming to a complete stop, yielding to pedestrians and oncoming traffic, and provided there is no 'No Turn on Red' sign posted",
      "Right turns on red are strictly illegal under all circumstances"
    ],
    correctAnswerIndex: 2,
    explanation: "You can turn right on red only after making a full 100% stop and yielding to all crossing pedestrians and right-of-way vehicle streams, unless a regulatory sign explicitly bans it."
  },
  {
    id: 1119,
    question: "When are you legally permitted to make a left-hand turn while facing a steady red traffic signal?",
    options: [
      "Only when turning from a designated one-way street onto another one-way street, after coming to a full stop and yielding to traffic",
      "Whenever you are turning into a private residential driveway",
      "Whenever oncoming traffic appears entirely clear",
      "Left turns on red are completely illegal under all situations in Minnesota"
    ],
    correctAnswerIndex: 0,
    explanation: "In Minnesota, you may turn left on red *only* when turning from a one-way street directly onto another one-way street, after making a full stop and yielding safely."
  },
  {
    id: 1120,
    question: "How close to a curb must your vehicle be parked when executing a parallel parking maneuver?",
    options: [
      "Within 6 inches",
      "Within 12 inches",
      "Within 18 inches",
      "Within 24 inches"
    ],
    correctAnswerIndex: 1,
    explanation: "When parking alongside a street curb, your vehicle's wheels must be positioned within 12 inches (one foot) of the curb edge to keep traffic lanes clear."
  },
  {
    id: 1121,
    question: "What is the recommended hand placement position on a steering wheel for passenger vehicles equipped with steering airbag configurations?",
    options: [
      "12 o'clock and 6 o'clock",
      "10 o'clock and 2 o'clock",
      "9 o'clock and 3 o'clock, or 8 o'clock and 4 o'clock",
      "Keep both hands placed together on the bottom spoke"
    ],
    correctAnswerIndex: 2,
    explanation: "To prevent devastating arm fractures or airbag impact burns if the steering airbag deploys, you should keep your hands lower at 9-and-3 or 8-and-4."
  },
  {
    id: 1122,
    question: "In what direction should you turn your wheels when parking downhill on a street featuring a stone curb?",
    options: [
      "Turn your front steering wheels toward the curb edge",
      "Turn your front steering wheels away from the curb",
      "Keep wheels pointing straight ahead",
      "It makes no difference if your vehicle is shifted into Park"
    ],
    correctAnswerIndex: 0,
    explanation: "When parking downhill with a curb, turn your wheels toward the curb so that if the brake fails, the car rolls forward and rests safely against the curb, blocking further movement."
  },
  {
    id: 1123,
    question: "In what direction should you turn your wheels when parking uphill on a street with a physical street curb?",
    options: [
      "Turn your front wheels toward the curb",
      "Turn your front wheels away from the curb (toward the street lanes)",
      "Keep wheels perfectly straight",
      "Park with your wheels turned at a 90-degree angle to the road"
    ],
    correctAnswerIndex: 1,
    explanation: "Uphill with a curb, turn wheels away from the curb. If the car rolls backward, the back of the tire will catch against the curb and stop the vehicle's rolling motion."
  },
  {
    id: 1124,
    question: "What does an orange diamond-shaped warning sign on the roadway represent?",
    options: [
      "A scenic state recreation park trail boundary",
      "An active construction or highway maintenance work area",
      "A high-congestion school crossing zone",
      "A legal vehicle weight limit sign"
    ],
    correctAnswerIndex: 1,
    explanation: "Orange diamond signs warn drivers of upcoming construction zones, closed lanes, flaggers, or highway equipment ahead. Speed limits are often reduced."
  },
  {
    id: 1125,
    question: "What does a yellow diamond-shaped sign represent?",
    options: [
      "A federal state border marker",
      "General warning or hazard indicator of road conditions or lane designs ahead",
      "A strict parking regulation boundary",
      "A direct instruction to yield to transit vehicles"
    ],
    correctAnswerIndex: 1,
    explanation: "Yellow diamond signs are general warning signs. They alert drivers to upcoming curves, merging lanes, intersections, or pedestrian zones."
  },
  {
    id: 1126,
    question: "What does a black-and-yellow horizontal arrow sign tell a driver?",
    options: [
      "The lane is closing and you must zipper merge immediately",
      "A sharp, dangerous turn or curve in the road ahead, showing the exact direction of the turn",
      "A scenic bypass starts at this marker",
      "You are driving the wrong way down a one-way street"
    ],
    correctAnswerIndex: 1,
    explanation: "These chevron-style markers warn of sharp curves or dead-ends where you must slow down significantly and steer in the pointed direction."
  },
  {
    id: 1127,
    question: "What is the legal color representing stop signs under international highway codes?",
    options: [
      "Bright fluorescent orange",
      "Solid deep red with white letters in an octagonal (eight-sided) shape",
      "Solid neon green with black outlines",
      "Bright yellow with bold red markings"
    ],
    correctAnswerIndex: 1,
    explanation: "Stop signs are universally red with white letters in an eight-sided, octagonal design, recognizable from either front or back."
  },
  {
    id: 1128,
    question: "What is the meaning of a yellow triangle-shaped sign pointing sideways from the left side of the road?",
    options: [
      "An upcoming railway hazard zone",
      "A 'No Passing Zone' warning sign, placed at the start of a solid yellow line",
      "Yield to merging right lane traffic",
      "A school speed reduction zone"
    ],
    correctAnswerIndex: 1,
    explanation: "This pennant-shaped sign is placed on the left side of the road to warn drivers that they are entering a stretch of highway where passing other vehicles is illegal."
  },
  {
    id: 1129,
    question: "When you are driving behind a school bus, what is the significance of its flashing amber (yellow) lights?",
    options: [
      "The bus is broken down and about to pull onto the shoulder",
      "The bus is preparing to stop to load or unload children; prepare to stop your vehicle safely",
      "The bus driver is signaling a legal left-hand turn",
      "The bus is traveling in high-speed express mode"
    ],
    correctAnswerIndex: 1,
    explanation: "Flashing yellow lights on a school bus warn drivers behind it that it is about to stop. You should prepare to come to a full stop as soon as the red lights flash."
  },
  {
    id: 1130,
    question: "If a school bus's green or yellow lights are flashing, you should:",
    options: [
      "Accelerate quickly to overtake the school bus before it stops",
      "Slow down, prepare to stop, and do not attempt to pass once the lights turn red",
      "Honk your horn to warn the bus driver you are passing on their left",
      "Maintain your exact speed and ignore the flashing signal"
    ],
    correctAnswerIndex: 1,
    explanation: "Yellow lights are a warning signal. Speeding up to pass a school bus preparing to stop is extremely dangerous and often ends in severe tickets or child fatalities."
  },
  {
    id: 1131,
    question: "What are the blind spots surrounding large commercial semi-trucks often referred to as?",
    options: [
      "The Safety Zones",
      "The No-Zones (located directly in front, directly behind, and along both sides of the truck)",
      "The Quiet Zones",
      "The Wide Radius Zones"
    ],
    correctAnswerIndex: 1,
    explanation: "Large commercial trucks have massive blind spots known as 'No-Zones' where your passenger vehicle can completely disappear from the truck driver's mirrors. Avoid tailing or riding alongside."
  },
  {
    id: 1132,
    question: "How can you verify that you are not driving in a semi-truck's blind spot or 'No-Zone' when traveling behind them?",
    options: [
      "If you can see the truck driver's face or side-mirrors, they can see you",
      "If you are traveling at exactly 55 mph",
      "If your headlights are set on high-beam settings",
      "If you are tailgating close enough to see under the truck trailer"
    ],
    correctAnswerIndex: 0,
    explanation: "If you cannot see the driver's side mirrors on their truck cab, they have no way of knowing your vehicle is behind them."
  },
  {
    id: 1133,
    question: "Under Minnesota law, are you permitted to drive over or cross a fire hose laid across a street during an active fire emergency?",
    options: [
      "Yes, as long as your vehicle has sufficient suspension clearance",
      "Only if you are driving a four-wheel-drive truck",
      "Only if a fire department official on the scene gives you explicit permission to cross it",
      "Yes, because fire hoses are designed with steel casing armor blocks"
    ],
    correctAnswerIndex: 2,
    explanation: "Crossing active fire lines or pressure hoses damages life-saving water flows and is strictly illegal unless a fire chief explicitly directs you to cross."
  },
  {
    id: 1134,
    question: "What are the rules regarding driving with your vehicle's parking lights turned on in place of headlights at dusk or dawn?",
    options: [
      "It is legal because parking lights save fuel efficiency",
      "It is illegal; parking lights must only be used when parked, not as a replacement for active low-beam headlights during travel",
      "It is permitted only within city limits",
      "Only hybrid or electric vehicles are allowed to do so"
    ],
    correctAnswerIndex: 1,
    explanation: "Parking lights are for parked vehicles. They are not bright enough to illuminate the road or make your car visible to oncoming traffic."
  },
  {
    id: 1135,
    question: "When navigating through thick and heavy winter fog, which headlight configuration should you use?",
    options: [
      "Your high-beam headlights to see as far as possible",
      "Low-beam headlights, optionally with dedicated fog lamps active",
      "Keep all lights completely off to prevent blinding glare reflections",
      "Your emergency hazard warning flashers only"
    ],
    correctAnswerIndex: 1,
    explanation: "High beams reflect off millions of suspended fog water droplets, projecting a blinding white wall of light back into your eyes. Low beams point down toward the pavement for better tracking."
  },
  {
    id: 1136,
    question: "If your vehicle begins to slide on a patch of water on the highway (hydroplaning), what is the first correct step you should take?",
    options: [
      "Slam hard on your brakes to lock up the wheels",
      "Jerk your steering wheel quickly to the left and right",
      "Take your foot off the gas pedal, keep your steering wheel pointed straight, and allow the car to slow down naturally until your tires regain traction",
      "Shift the car into Neutral and floor the gas pedal"
    ],
    correctAnswerIndex: 2,
    explanation: "Do not brake or turn suddenly, as this will throw your vehicle into an uncontrollable skid. Smoothly ease off the gas and let the momentum drop until the tread cuts through the water sheet."
  },
  {
    id: 1137,
    question: "To ensure safe driving visibility, snow, ice, and frost must be removed from:",
    options: [
      "Just a small circular patch on the driver's side of the front windshield",
      "Only the main front windshield glass",
      "The front windshield, side-windows, rear windshield, headlights, taillights, and your vehicle's license plate",
      "Only the driver's side rearview mirror"
    ],
    correctAnswerIndex: 2,
    explanation: "Minnesota law requires clear visibility through all windows. Clear your hood and roof of snow too, as blowing snow can blind drivers behind you."
  },
  {
    id: 1138,
    question: "When sharing the road with a commercial snowplow, how far back should you remain to ensure your safety and the operator's view?",
    options: [
      "At least 20 feet",
      "At least 50 feet",
      "At least 100 feet",
      "At least 200 feet"
    ],
    correctAnswerIndex: 3,
    explanation: "Plows create massive whiteouts of blowing snow and travel at slow speeds. Stay back at least 200 feet to avoid flying salt, gravel, and blind zones."
  },
  {
    id: 1139,
    question: "If a blind pedestrian is waiting to cross at an intersection with a white cane raised or with a guide dog, what must you do?",
    options: [
      "Blow your horn to indicate you are passing through",
      "Come to a full stop and yield the right-of-way to the pedestrian, regardless of traffic signal status",
      "Drive around them quickly behind their back",
      "Shout out directions to them from your window"
    ],
    correctAnswerIndex: 1,
    explanation: "Minnesota requires absolute right-of-way yields to visually impaired pedestrians. Stop completely and do not move your vehicle until they have safely cleared your lane."
  },
  {
    id: 1140,
    question: "What does a round, circular yellow sign with a black 'X' and 'RR' letters warn a driver of?",
    options: [
      "An upcoming double lane closure zone",
      "An upcoming highway toll booth",
      "An upcoming railroad crossing ahead",
      "A medical helicopter landing pad nearby"
    ],
    correctAnswerIndex: 2,
    explanation: "An amber circle with a black 'X' and 'RR' is a railway warning sign. Expect tracks, and be alert for crossing gates or trains."
  },
  {
    id: 1141,
    question: "What does a crossbuck railroad sign with 'TRACKS' written below it mean?",
    options: [
      "The crossing is closed and out of service",
      "You are at a railroad crossing; yield the right-of-way to any oncoming trains, and check multiple tracks if indicated",
      "You must accelerate above 45 mph to cross safely",
      "It represents a state boundary limit"
    ],
    correctAnswerIndex: 1,
    explanation: "The white 'X' crossbuck is a regulatory yield sign at railway tracks. The sub-sign shows the exact number of tracks present. Look and listen both ways."
  },
  {
    id: 1142,
    question: "What does a sign featuring a red circle with a thick diagonal slash through an arrow indicate?",
    options: [
      "The pointed maneuver or direction is strictly prohibited by law",
      "The pointed road has high-speed lanes ahead",
      "A scenic bypass is in this direction",
      "The traffic flow in that direction is one-way only"
    ],
    correctAnswerIndex: 0,
    explanation: "A red circle with a slash represents 'No' under international traffic manual rules. For example, a crossed-out U-turn arrow means U-turns are completely illegal."
  },
  {
    id: 1143,
    question: "What does a pennant-shaped sign painted yellow with black text representing 'No Passing Zone' tell a driver?",
    options: [
      "Passing is permitted only on weekends",
      "You are entering an area where overtaking or passing other vehicles is highly dangerous and completely illegal",
      "You must change lanes immediately into a carpool lane",
      "The road splits into two distinct highways ahead"
    ],
    correctAnswerIndex: 1,
    explanation: "Overtaking or passing other cars is highly dangerous and illegal when a No Passing Zone sign is posted. Solid yellow paint confirms this."
  },
  {
    id: 1144,
    question: "When are you permitted to make a U-Turn on a Minnesota public road or highway?",
    options: [
      "Only on dry highways during daylight hours",
      "Only when traffic is congested and you want to go the other way",
      "Whenever it can be done safely without hazard, and is not prohibited by signs or within 1,000 feet of an oncoming curve or hill crest",
      "U-turns are completely illegal inside Minnesota state boundaries"
    ],
    correctAnswerIndex: 2,
    explanation: "You may perform a U-turn if it is safe, does not block traffic, and is not prohibited. It is strictly illegal on hills or curves where oncoming drivers cannot see you from 1,000 feet away."
  },
  {
    id: 1145,
    question: "Is it legal to back up your vehicle on a freeway shoulder or freeway entrance/exit ramp if you miss your designated highway exit?",
    options: [
      "Yes, as long as your hazard emergency flashers are active",
      "Yes, up to a distance of 100 yards",
      "No, backing up on any freeway travel lanes, shoulders, or ramp structures is highly dangerous and illegal",
      "Yes, but only in rural low-traffic farming counties"
    ],
    correctAnswerIndex: 2,
    explanation: "Never back up on an interstate ramp or shoulder. Drive to the next exit, merge off, and navigate back using standard county roads."
  },
  {
    id: 1146,
    question: "What is the legal consequence for a driver who fails to yield the right-of-way to a funeral procession?",
    options: [
      "It is a minor warning with no financial impact",
      "It is a misdemeanor traffic violation subject to court fines",
      "A mandatory 90-day jail term",
      "No penalty, as funeral processions do not have priority over passenger traffic"
    ],
    correctAnswerIndex: 1,
    explanation: "Funeral processions have historic right-of-way priority. Interrupting, tailgating, or passing through a funeral line is a misdemeanor traffic offense."
  },
  {
    id: 1147,
    question: "If you approach a T-intersection where your road terminates and ends at a through-highway, who must yield the right of way?",
    options: [
      "The vehicle traveling on the through-highway must yield to you",
      "The driver on the terminating road must yield the right-of-way to all vehicles traveling along the through-road",
      "The vehicle turning right has complete priority",
      "The driver traveling on the gravel lane always yields"
    ],
    correctAnswerIndex: 1,
    explanation: "At a 'T' intersection, vehicles traveling on the terminating road must yield the right-of-way to all traffic traveling along the cross street."
  },
  {
    id: 1148,
    question: "When is it legal to pass another vehicle on a hill or curve on a two-lane highway?",
    options: [
      "Whenever the car ahead is traveling beneath the posted speed limit",
      "Only if you can clarify that no oncoming vehicles are within 700 feet of your vehicle",
      "Never; passing is strictly illegal on any hill, curve, or rise where your forward view is obstructed within 700 feet",
      "Passing is legal on all hills if you flash your high-beams"
    ],
    correctAnswerIndex: 2,
    explanation: "Passing is illegal when you cannot see the road ahead clearly for at least 700 feet. Hills and curves block your line of sight, creating severe head-on crash risks."
  },
  {
    id: 1149,
    question: "When should you check your vehicle's mirror blind spots before making a lane change?",
    options: [
      "Only during heavy nighttime rainstorms",
      "Only when changing lanes on multi-lane urban interstates",
      "Every single time you plan to change lanes, turn, merge, or exit, by turning your head to match your side shoulder line",
      "Only if you do not have blind-spot camera sensors active"
    ],
    correctAnswerIndex: 2,
    explanation: "Cameras and mirrors miss objects located in your side blind spots. Always perform a physical neck-turn swap check before moving your steering column."
  },
  {
    id: 1150,
    question: "What is the recommended legal following distance behind a motorcycle traveling ahead of your passenger vehicle?",
    options: [
      "Keep a 1-second distance because motorcycles can accelerate faster",
      "Allow at least the same three-to-four second following distance, giving extra space because motorcycles can stop much faster than cars",
      "Tuck close behind them to avoid blocking traffic lanes",
      "Keep exactly 10 feet of space behind their rear tire"
    ],
    correctAnswerIndex: 1,
    explanation: "Overtaking or tailgating a motorcycle is highly dangerous. They stop on shorter distances than passenger vehicles. If they fall, a close car will run them over."
  },
  {
    id: 1151,
    question: "What should you do if your passenger vehicle experiences a sudden brake failure where the foot pedal sinks completely to the floor boards?",
    options: [
      "Turn off your ignition key and lock your steering column immediately",
      "Pump the brake pedal rapidly to rebuild hydraulic pressure, shift to a lower gear, and smoothly apply your emergency parking brake",
      "Slam your vehicle gears into Reverse immediately to lock your wheels",
      "Keep your foot floored on the gas pedal and scream for help"
    ],
    correctAnswerIndex: 1,
    explanation: "If pumping the foot brake fails to rebuild pressure, downshift to slow the transmission. Gently pull up on your mechanical parking brake to stop safely."
  },
  {
    id: 1152,
    question: "What is the legal limit for Blood Alcohol Concentration (BAC) for Class D passenger vehicle drivers aged 21 and older?",
    options: [
      "0.02%",
      "0.05%",
      "0.08%",
      "0.10%"
    ],
    correctAnswerIndex: 2,
    explanation: "Operating any motor vehicle with a BAC level of 0.08% or higher is a criminal DWI offense in Minnesota, regardless of driving performance."
  },
  {
    id: 1153,
    question: "Under Minnesota's 'Open Bottle Law', what is the regulation regarding alcohol containers inside a moving vehicle?",
    options: [
      "Passengers are permitted to drink from open bottles as long as the driver is completely sober",
      "It is illegal to have any open container of alcohol or beer in the passenger compartment of your vehicle while on a public highway",
      "Open bottles are allowed if stored inside the front glove compartment lock",
      "Open containers are permitted if they contain less than 5% alcohol by volume"
    ],
    correctAnswerIndex: 1,
    explanation: "Minnesota's open bottle law prohibits open containers of alcohol anywhere in the passenger seating compartment of a vehicle. Store open products securely in the truck area."
  },
  {
    id: 1154,
    question: "What is the penalty for your first standard DWI conviction in Minnesota?",
    options: [
      "A light warning ticket with no fee impact",
      "A misdemeanor charge, up to 90 days in jail, a $1,000 fine, and license suspension for a minimum of 30 days",
      "Immediate permanent loss of your vehicle title",
      "A community service clean-up sentence of 10 hours"
    ],
    correctAnswerIndex: 1,
    explanation: "A first-offense DWI is a misdemeanor that carries severe financial penalties, coordinate points, alcohol monitoring classes, and formal license revocations."
  },
  {
    id: 1155,
    question: "When are you permitted to use a handheld cell phone while driving a vehicle on Minnesota streets?",
    options: [
      "Whenever you are traveling below 30 mph in city limits",
      "Never; Minnesota forces a strict hands-free driving law which prohibits holding a cell phone or mobile device under virtually all standard driving scenarios",
      "Whenever you are sending a short text message during red lights",
      "Only when calling your family or friends"
    ],
    correctAnswerIndex: 1,
    explanation: "Minnesota's Hands-Free Law bands holding a phone or portable device while driving. You must use voice commands, bluetooth, or pull over safely to hold a phone."
  },
  {
    id: 1156,
    question: "If you are convicted of driving a passenger vehicle at a speed of 100 mph or faster, what is the mandatory revocation term for your driver's license?",
    options: [
      "At least 30 days",
      "At least 3 months",
      "At least 6 months",
      "At least 1 year"
    ],
    correctAnswerIndex: 2,
    explanation: "To combat reckless speeds, Minnesota imposes a non-negotiable, mandatory 6-month license revocation for anyone convicted of driving at or over 100 mph."
  },
  {
    id: 1157,
    question: "When navigating a modern multi-lane roundabout, what lane should you select before entering?",
    options: [
      "Select the left lane for right turns, and the right lane for left turns",
      "Select your lane based on your destination: right lane for right/straight exits, and left lane for left turns, U-turns, or straight exits",
      "Always stay in the absolute center of both lanes to prevent side merges",
      "You do not need to register lanes, cars merge randomly"
    ],
    correctAnswerIndex: 1,
    explanation: "Always check upcoming signage before a roundabout. Select the correct entrance lane, yield to cars inside the circle, and never weave lanes within the loop."
  },
  {
    id: 1158,
    question: "What does the 'Vanessa's Law' traffic safety statute specify regarding alcohol and drug violations committed by teen drivers under 18?",
    options: [
      "They can drink up to a 0.02% level without licensing lockouts",
      "They are barred from holding an instruction permit or driver's license until age 18, and must retake all training and tests then",
      "They are forced to display orange decals on their front license plates",
      "A minor $10 ticket is recorded on their driving diary"
    ],
    correctAnswerIndex: 1,
    explanation: "Vanessa's Law imposes zero-tolerance rules for young drivers. If they violate DWI laws or crash with passenger tickets before turning 18, their privileges are revoked until 18 under strict re-testing mandates."
  },
  {
    id: 1159,
    question: "What is the legal color representing caution and warning indicators on standard state highway signs?",
    options: [
      "Deep blue backgrounds",
      "Bright yellow background with black letters or icons",
      "Reflective orange background with white borders",
      "Neon green background with black borders"
    ],
    correctAnswerIndex: 1,
    explanation: "Yellow is the exclusive background color dedicated to caution and general warning signs (curves, slippery roads, crossing indicators, lane mergers)."
  },
  {
    id: 1160,
    question: "If your vehicle's engine is running hot and starts to overheat while you are stuck in heavy traffic, what can you do to lower engine temperature?",
    options: [
      "Turn on your vehicle's air conditioner to absolute maximum high setting",
      "Turn off the air conditioner, turn on your heater and heater fan to maximum speed, and roll down your windows to vent heat from the hot passenger core",
      "Hold your foot down on the brake pedal while revving your engine in Neutral",
      "Slam your hands on the steering wheel columns repeatedly"
    ],
    correctAnswerIndex: 1,
    explanation: "Turning on your car heater pulls hot air away from the engine block, helping cool down cooling fluids. Pull onto the shoulder safely if this fails to bring temperatures down."
  },
  {
    id: 1161,
    question: "What represents the safest reaction if you are driving on a freeway and miss your designated exit ramp?",
    options: [
      "Back up carefully along the paved shoulder to reach the exit",
      "Perform a quick U-turn across the grass service median",
      "Drive forward to the next available exit, merge off, and navigate back using standard lanes",
      "Bring your vehicle to an immediate stop in your travel lane and wait for traffic to clear"
    ],
    correctAnswerIndex: 2,
    explanation: "Reversing or turning around on a high-speed interstate is extremely hazardous and illegal. Overtake to the next exit and find a safe turnaround route."
  },
  {
    id: 1162,
    question: "When are you permitted to pass another vehicle by driving off the paved road and onto a gravel or grass shoulder?",
    options: [
      "Whenever the car ahead is driving under 30 mph",
      "Only during morning commute rush hours when lanes are congested",
      "Passing any vehicle by driving onto unpaved shoulders is completely illegal and highly dangerous",
      "Only if your passenger vehicle has four-wheel drive active"
    ],
    correctAnswerIndex: 2,
    explanation: "Driving onto unpaved shoulders to pass is highly dangerous and strictly illegal. Overtake only inside designated, paved traffic lanes."
  },
  {
    id: 1163,
    question: "If your car starts to skid or slide on a patch of black ice, what is the best sequence of reaction?",
    options: [
      "Step down hard on your brakes and lock your steering wheel tight",
      "Accelerate quickly to spin your wheels out of the slick spot",
      "Ease off the gas pedal, steer smoothly into the direction of the skid, and do not pump or slam your brakes",
      "Shift the vehicle into Neutral and pull the parking brake"
    ],
    correctAnswerIndex: 2,
    explanation: "Keep a cool head during slides. Take your foot off the gas to let tires slow down, steer gently where you want the car to go, and avoid hard braking."
  },
  {
    id: 1164,
    question: "What is the safety rule regarding driving beside big commercial semi-trucks on multi-lane highways?",
    options: [
      "Stay directly adjacent to their doors to block passing cars",
      "Avoid traveling alongside them for prolonged periods; pass them quickly on their left side, or drop back to clear their mirrors",
      "Honk your horn repeatedly to keep the driver aware of your lane side",
      "Drive as close as possible to their trailers to save fuel"
    ],
    correctAnswerIndex: 1,
    explanation: "Semi-trucks have massive blind spots along their side doors. Overtake them quickly on the left, or drop back so the driver can track you in their side mirrors."
  },
  {
    id: 1165,
    question: "What does keeping a flashing yellow arrow traffic signal indicate?",
    options: [
      "You must come to a complete stop and wait for a green solid arrow",
      "Left turns are permitted but unprotected; you must yield to all oncoming traffic and crossing pedestrians before turning",
      "You have an unrestricted, safe right of way turn",
      "The intersection signal is broken; treat it as an all-way stop sign"
    ],
    correctAnswerIndex: 1,
    explanation: "A flashing yellow left arrow means you can turn left, but must yield to oncoming cars and pedestrians who have a green light signal."
  },
  {
    id: 1166,
    question: "How far away from a school bus must you stop when its yellow flashing warning beacons active?",
    options: [
      "At least 10 feet",
      "At least 20 feet",
      "You do not need to stop yet, but prepare to come to a full stop as soon as the flashing red lights and stop arm activate",
      "At least 100 feet"
    ],
    correctAnswerIndex: 2,
    explanation: "Yellow lights are a warning signal. You do not need to stop yet, but must slow down and prepare to stop when the red lights emerge."
  },
  {
    id: 1167,
    question: "Under Minnesota state statute, what is the penalty for littering trash or bottles out of your vehicle along standard public highways?",
    options: [
      "There is no legal penalty for minor litter violations",
      "A misdemeanor conviction including a fine of up to $1,000 and court-ordered roadside cleaning service",
      "Instant 30-day vehicle impound",
      "A minor administrative warning mailer"
    ],
    correctAnswerIndex: 1,
    explanation: "Littering degrades roadways and endangers motorists. Violators face misdemeanor charges and fines up to $1,000."
  },
  {
    id: 1168,
    question: "What represents the danger of driving with tires that are severely underinflated below minimum PSI levels?",
    options: [
      "They increase fuel mileage to illegal levels",
      "They can cause tire failure, blowouts, and severe loss of steering control at highway speeds",
      "They reduce alternator voltages and dim headlights",
      "They wear out steering gears within 50 miles of driving"
    ],
    correctAnswerIndex: 1,
    explanation: "Low tire pressure creates extreme heat and friction. This weakens tire structures, leading to sudden highway blowouts."
  },
  {
    id: 1169,
    question: "Under Minnesota rules, what is the minimum legal age to obtain a Class D Instruction Permit?",
    options: [
      "At least 14 years old",
      "At least 15 years old, with completion of standard driver's education classes",
      "At least 16 years old",
      "At least 18 years old"
    ],
    correctAnswerIndex: 1,
    explanation: "You must be at least 15 years old, enrolled in an approved driver education course, and pass your written permit test to get a Class D permit."
  },
  {
    id: 1170,
    question: "What is the minimum age to obtain a Class D Provisional License in Minnesota?",
    options: [
      "At least 15 years old",
      "At least 16 years old, after holding an instruction permit for at least 6 months with zero violations",
      "At least 18 years old",
      "At least 21 years old"
    ],
    correctAnswerIndex: 1,
    explanation: "Provisional licenses require you to be at least 16, complete behind-the-wheel classes, log 50 hours of practice, and pass your DMV road test."
  },
  {
    id: 1171,
    question: "When are you permitted to use cruise control while operating your vehicle in Minnesota?",
    options: [
      "Whenever you are driving on open highways, except on wet, snowy, icy, or highly slippery road surfaces where it can cause a skid",
      "Only during heavy urban rush hour jams",
      "Whenever you are running late and want to maintain maximum speeds",
      "Cruise control is legally banned inside state boundaries"
    ],
    correctAnswerIndex: 0,
    explanation: "Never use cruise control on wet, snowy, or icy highways. If the tires lose grip, the vehicle will keep spinning its wheels and throw you into a dangerous skid."
  },
  {
    id: 1172,
    question: "What must you do when a pedestrian with a guide dog or white cane is attempting to cross an intersection near you?",
    options: [
      "Proceed quickly if they are not directly in your lane",
      "Blow your horn to make sure they know you are passing",
      "Stop your vehicle completely and remain stopped until they have crossed the entire roadway safely",
      "Guide them across by shouting directions through your window"
    ],
    correctAnswerIndex: 2,
    explanation: "Stop completely for visually impaired pedestrians with guide dogs or white canes. Do not honk or startle them, and wait until they clear the road."
  },
  {
    id: 1173,
    question: "In Minnesota, what must you do if you are involved in a traffic crash resulting in damage to property but no physical injuries?",
    options: [
      "Leave immediately and report the crash to your insurance from home",
      "Stop your vehicle immediately, move it off the main travel lanes to a safe area if possible, and exchange insurance and license details with other drivers",
      "Wait for a police cruiser to arrive before moving your vehicle off the road",
      "Leave a $100 bill on the windshield and proceed without exchanging details"
    ],
    correctAnswerIndex: 1,
    explanation: "To prevent highway secondary crashes, move fender-bender vehicles to the shoulder. Exchange names, addresses, insurance, and license details."
  },
  {
    id: 1174,
    question: "What is the purpose of Minnesota's Financial Responsibility Law?",
    options: [
      "It requires you to pay all outstanding traffic tickets within 10 days of getting them",
      "It mandates that all motor vehicle owners carry liability and no-fault insurance policy coverage on their active vehicles",
      "It forces you to declare your income profile to county courts before testing",
      "It requires you to pay tolls on all state-managed expressways"
    ],
    correctAnswerIndex: 1,
    explanation: "The Financial Responsibility Law requires all vehicle owners to maintain mandatory insurance coverage. Driving uninsured is a serious misdemeanor offense."
  },
  {
    id: 1175,
    question: "When are you legally permitted to pass another vehicle on a two-lane highway on its right side?",
    options: [
      "Whenever the vehicle is traveling below 30 mph on the shoulder",
      "When the vehicle ahead is making or signaling a left turn, and there is a fully paved lane or shoulder to the right of the vehicle",
      "Overtaking on the right is legal under any condition on rural highways",
      "Passing on the right is strictly illegal under every scenario in Minnesota"
    ],
    correctAnswerIndex: 1,
    explanation: "You can pass on the right on a two-lane highway only if the car ahead is turning left, and there is a fully paved lane or paved shoulder on your right to use safely."
  },
  {
    id: 1176,
    question: "What does keeping a solid double yellow painted center line painted on a highway mean?",
    options: [
      "Passing is permitted from either direction",
      "Passing is completely prohibited from either direction of travel",
      "You are driving on a one-way street with high-speed lanes",
      "A designated carpool lane is on your right"
    ],
    correctAnswerIndex: 1,
    explanation: "Double solid yellow lines indicate that passing or crossing over the center line is illegal and dangerous for both flows of traffic."
  },
  {
    id: 1177,
    question: "What does a dashed or broken yellow center line painted on your side of the road mean?",
    options: [
      "Passing is strictly prohibited from your lane",
      "You are permitted to pass or overtake other vehicles from your lane when it is safe which can be done without hazard",
      "A bicycle lane is approaching on your left",
      "The speed limit is temporarily doubled inside this highway sector"
    ],
    correctAnswerIndex: 1,
    explanation: "A dashed yellow line indicates that passing is legally permitted on your side of the road when oncoming lanes are clear of hazards."
  },
  {
    id: 1178,
    question: "Under Minnesota rules, what is the default speed limit inside marked school crossings and school zones?",
    options: [
      "Always 10 mph regardless of conditions",
      "Set by local city bylaws, but typically 15 to 25 mph when kids are present or when yellow flashing beacons are active",
      "Exactly 35 mph on all rural interstates",
      "There are no speed limit reductions for school zones on state highways"
    ],
    correctAnswerIndex: 1,
    explanation: "School zone limits are defined by local ordinances and posted on signs. Typically, they drop to 15-25 mph when children are present or beacons are flashing."
  },
  {
    id: 1179,
    question: "Under Minnesota state statute, what is the penalty for a driver convicted of driving with excessive speed in an active school zone?",
    options: [
      "A minor ticket card from school crossing guards",
      "Double the standard fine amount, along with court cost increases and points on your record",
      "A flat fine of exactly $15",
      "Mandatory vehicle seizure and license cancellation"
    ],
    correctAnswerIndex: 1,
    explanation: "Speeding in zones with school children is highly reckless. Violations undergo doubled fines, license points, and insurance rate spikes."
  },
  {
    id: 1180,
    question: "When are you permitted to drive beside or cross over a painted grid area indicating a modern light rail train pathway?",
    options: [
      "Whenever you are running late and want to skip slow highway queues",
      "You must never drive along or block light rail train tracks, and cross only at designated white-on-black crossbuck crossings when clear",
      "To park your passenger vehicle temporarily while waiting for arrivals",
      "Light rail trains must yield to passenger motor vehicles under state laws"
    ],
    correctAnswerIndex: 1,
    explanation: "Light rail trains are heavy, fast, and cannot turn to miss obstacles. Never stop or block train tracks. Cross only when signal gates are fully open."
  },
  {
    id: 1181,
    question: "What does a sign showing a vertical white arrow pointing up beside a curved companion arrow on a blue shield signify?",
    options: [
      "An upcoming scenic overlook loop",
      "A designated high-occupancy vehicle (HOV) or carpool bypass gate",
      "An upcoming freeway merge lane where exit streams combine",
      "A state highway division interchange"
    ],
    correctAnswerIndex: 2,
    explanation: "This merge sign warns drivers that traffic from another road is merging into their travel lane. Shift lanes or adjust speed to allow safe entry."
  },
  {
    id: 1182,
    question: "If your passenger vehicle's right-side tires drop off the paved road and onto a gravel shoulder, what is the safest way to recover?",
    options: [
      "Yank your steering wheel hard to the left to pull back onto the road immediately",
      "Slam hard on your brakes and bring the car to a sudden halt on the shoulder",
      "Ease off the gas pedal, keep a firm grip on the steering wheel, slow down gradually, and turn smoothly back onto the pavement when clear",
      "Accelerate quickly to climb over the concrete pavement edge"
    ],
    correctAnswerIndex: 2,
    explanation: "Yanking your steering wheel when off-road causes tires to hook on the pavement edge and throw you into oncoming traffic. Stay calm, coast slower, and guide the car back smoothly."
  },
  {
    id: 1183,
    question: "Under Minnesota laws, a driver must stop for a school bus with red lights flashing unless:",
    options: [
      "You are traveling behind the bus but there are three lanes of traffic",
      "You are traveling in the opposite direction on an adjacent highway separated by a physical median partition (boulevard, raised concrete, or divider barrier)",
      "The sun is fully set and it is past dark",
      "You are driving a commercial vehicle or emergency truck"
    ],
    correctAnswerIndex: 1,
    explanation: "A physical division median separates lanes. On oncoming sides of divided roadways, you do not have to stop for buses. Opposing sides of standard undivided streets must stop."
  },
  {
    id: 1184,
    question: "When driving in deep winter snow or ice, you should adjust your following distance buffer to:",
    options: [
      "Remain at your standard 3-second dry following distance",
      "Increase your following distance to at least 6 to 10 seconds or more, allowing ample room to stop on slippery conditions",
      "Tuck close behind larger trucks to let them clear a path through the snow",
      "Keep exactly 1-second of distance with active hazard lights"
    ],
    correctAnswerIndex: 1,
    explanation: "Snow and ice reduce tire friction drastically, increasing stopping distances by up to 10 times. Give yourself a generous buffer."
  },
  {
    id: 1185,
    question: "When are you permitted to drive through a designated crosswalk where a pedestrian is active?",
    options: [
      "Whenever the pedestrian is not directly standing in front of your bumper",
      "Only after the pedestrian has fully cleared your half of the roadway and is safe, or when they have completed crossing entirely",
      "If you blow your horn and drive through quickly",
      "If the crosswalk does not have active flashing yellow signal beacons"
    ],
    correctAnswerIndex: 1,
    explanation: "You must always yield to pedestrians inside crosswalks. It is illegal to pass a vehicle stopped for a pedestrian."
  },
  {
    id: 1186,
    question: "What represents the danger of tailgating—driving too closely behind another vehicle?",
    options: [
      "It reduces your vehicle's engine fuel pressure",
      "It severely cuts down your forward visual depth, leaves you no reaction buffer if the car stops suddenly, and often triggers rear-end crashes",
      "It decreases your tire lifetime profile by up to 80%",
      "It causes your high-beam headlights to malfunction"
    ],
    correctAnswerIndex: 1,
    explanation: "Tailgating is a primary cause of multi-car pileups. If the front driver brakes hard, a tailgating car will strike them before the driver can hit the brakes."
  },
  {
    id: 1187,
    question: "If you approach an intersection and see a steady yellow traffic signal, you should:",
    options: [
      "Floor your gas pedal to race through before the signal turns red",
      "Bring your vehicle to a safe stop before entering the intersection if it is safe to do so; do not enter if you can stop safely",
      "Treat it as a yellow flashing beacon and maintain your speed",
      "Blow your horn to warn other waiting cars you are passing"
    ],
    correctAnswerIndex: 1,
    explanation: "A yellow signal means red is coming. Safely stop if you are not yet inside the intersection. Enter only if stopping would cause a rear-end collision."
  },
  {
    id: 1188,
    question: "Under Minnesota state laws, what must you do before exiting a parallel parking space next to a street curb?",
    options: [
      "Blow your horn twice, turn your key off, and wait",
      "Examine your mirrors, turn your head to check your blind spots, signal your intention, and merge smoothly into traffic when clear",
      "Drive straight forward into the lane and let other drivers yield to you",
      "Keep your emergency hazards flashing during the exit"
    ],
    correctAnswerIndex: 1,
    explanation: "A parallel parking exit requires careful observation. Check mirrors, turn your neck to verify side blind spots, signal your merge, and enter traffic lanes safely."
  },
  {
    id: 1189,
    question: "What is the rule regarding passing a vehicle on a curve or hill crest on rural highways?",
    options: [
      "It is legal if the car ahead is traveling under 25 mph",
      "It is strictly illegal if your forward lane line of sight is blocked or restricted within 700 feet",
      "It is legal only when driving during clear sunny hours",
      "Passing on hills is allowed if you use your hazard lights"
    ],
    correctAnswerIndex: 1,
    explanation: "Overtaking on hills or curves is illegal due to blind spots. You must have at least 700 feet of clear road visibility to pass safely on two-lane roads."
  },
  {
    id: 1190,
    question: "What does keeping a flashing yellow light over a highway lane inside lane control signals indicate?",
    options: [
      "The lane is designated for high speed emergency vehicles only",
      "The lane can be used for making left-hand turns only, with caution",
      "You are driving the wrong direction on a one-way street",
      "The lane speed limit is reduced to 15 mph"
    ],
    correctAnswerIndex: 1,
    explanation: "A flashing yellow X over a lane indicates that the lane is reserved for making safe left turns under caution."
  },
  {
    id: 1191,
    question: "What does a solid yellow line on your side of the highway center dividing marker mean?",
    options: [
      "You are permitted to pass other vehicles when safe",
      "Passing or overtaking other vehicles is strictly illegal and prohibited on your side",
      "An upcoming school zone boundary is within 500 feet",
      "You are driving along a designated truck delivery lane"
    ],
    correctAnswerIndex: 1,
    explanation: "A solid yellow line on your side of the center line means you are prohibited from crossing over to pass."
  },
  {
    id: 1192,
    question: "Under Minnesota regulations, at what distance must your vehicle be parked away from the nearest railway crossing?",
    options: [
      "At least 15 feet",
      "At least 25 feet",
      "At least 50 feet",
      "At least 100 feet"
    ],
    correctAnswerIndex: 2,
    explanation: "You must park at least 50 feet away from any railway tracks to keep crossing points visible and clear of physical hazards."
  },
  {
    id: 1193,
    question: "What does a sign featuring a yellow circular shape with a black 'X' and 'RR' letters represent?",
    options: [
      "A designated county line bridge boundary",
      "A warning of an upcoming railroad crossing ahead",
      "A high-congestion construction loop gate",
      "A toll payment area"
    ],
    correctAnswerIndex: 1,
    explanation: "A yellow circular RR sign is an advance warning sign alerting you to upcoming railroad tracks."
  },
  {
    id: 1194,
    question: "If you approach a traffic intersection and find the mechanical signals are broken or completely dark, you must:",
    options: [
      "Maintain your normal speed and drive through with caution",
      "Treat the intersection exactly like an all-way stop (four-way stop sign), stopping completely and yielding to vehicles on the right",
      "Wait until a police cruiser arrives to direct traffic flow",
      "Reverse your vehicle and find an alternate route"
    ],
    correctAnswerIndex: 1,
    explanation: "If signals are blacked out or broken, treat the intersection as a multi-way stop. Stop completely and yield right-of-way in turn."
  },
  {
    id: 1195,
    question: "Under what conditions should child booster seats or safety seats be used in passenger vehicles?",
    options: [
      "Only for children under age 3",
      "For children under 8 years old or under 4 feet 9 inches tall, whichever comes first",
      "Only for car rides exceeding 10 miles in distance",
      "Booster seat selections are entirely optional under Minnesota rules"
    ],
    correctAnswerIndex: 1,
    explanation: "Booster seats are mandatory for children under 8 or under 4'9\". Regular lap/shoulder belts are not designed for small frames."
  },
  {
    id: 1196,
    question: "What does keeping a steady yellow arrow traffic signal indicate?",
    options: [
      "Your turn has direct right-of-way priority indefinitely",
      "The protected green turn phase is ending; proceed with caution or prepare to stop before red turns",
      "You must come to an immediate halt inside the intersection lane",
      "The signal is malfunctioning; proceed only on red signals"
    ],
    correctAnswerIndex: 1,
    explanation: "A steady yellow arrow warnings that the protected turn phase is ending. Drivers must prepare to stop or complete their turns safely."
  },
  {
    id: 1197,
    question: "When are you permitted to drive onto a paved bicycle lane in Minnesota?",
    options: [
      "Whenever main highway lanes are congested with peak rush commuters",
      "Only when preparing to make a legal turn or entering a driveway, after checking blind spots and yielding to active cyclists",
      "To park your car temporarily while run into a convenience store",
      "Bicycle lanes are designed for joint vehicle travel at speeds under 20 mph"
    ],
    correctAnswerIndex: 1,
    explanation: "Bicycle lanes are for cyclists. Drivers may cross them only to prepare for a turn or enter a driveway, after yielding to any bicycles."
  },
  {
    id: 1198,
    question: "What is the penalty for a driver convicted of texting or reading an email while operating a vehicle in Minnesota?",
    options: [
      "A minor $15 administrative warning mailer",
      "A fine of $120 for a first offense, escalating to a $275 fine and court costs for subsequent violations",
      "Instant 30-day jail term and vehicle impound",
      "Texting is permitted if you are holding the phone below dashboards"
    ],
    correctAnswerIndex: 1,
    explanation: "Texting while driving is a major cause of distracted accidents and is illegal. Convictions carry steep fines and driving record points."
  },
  {
    id: 1199,
    question: "Under Minnesota regulations, what is the maximum speed limit inside standard designated alleys unless posted?",
    options: [
      "10 mph",
      "15 mph",
      "20 mph",
      "25 mph"
    ],
    correctAnswerIndex: 0,
    explanation: "Alleys have limited visibility and potential hazard risk. The speed limit is set at 10 mph."
  },
  {
    id: 1200,
    question: "What is the primary visual indicator representing an approaching slow-moving vehicle ahead of you?",
    options: [
      "A neon green flag hanging off their side mirror",
      "A reflective orange triangle with dark red borders mounted on their rear bumper",
      "A steady flashing blue warning light beacon",
      "A white rectangular sign with black letters"
    ],
    correctAnswerIndex: 1,
    explanation: "Slow-moving vehicle symbols are orange triangles with red borders, alerting approaching drivers to prepare to slow down."
  },
  {
    id: 1201,
    question: "When are you legally required to utilize your low-beam headlights during daytime hours?",
    options: [
      "Whenever you are traveling below 25 mph on state highways",
      "Whenever your windshield wipers are active due to rain, snow, sleet, or when visibility is reduced below 500 feet",
      "Only when driving inside active construction zones in county areas",
      "Daytime headlight use is completely optional under all scenarios"
    ],
    correctAnswerIndex: 1,
    explanation: "If weather conditions require wipers, turn on low-beam headlights so other drivers can see you through the spray and rain."
  },
  {
    id: 1202,
    question: "What does keeping a solid white line painted along the right-hand edge of a highway represent?",
    options: [
      "A lane change helper encouraging you to cross freely",
      "A 'fog line' indicating the exact right edge of the paved highway",
      "A designated bicycle pathway boundary only",
      "A warning sign indicating a steep slope is within 100 feet"
    ],
    correctAnswerIndex: 1,
    explanation: "Solid white lines on the right edge are edge lines, helping drivers track the lane during low-visibility conditions like snow and fog."
  },
  {
    id: 1203,
    question: "When parallel parking alongside a street curb, what is the legal maximum distance your wheels can be from the curb pavement?",
    options: [
      "Within 6 inches",
      "Within 12 inches (one foot)",
      "Within 18 inches",
      "Within 24 inches"
    ],
    correctAnswerIndex: 1,
    explanation: "Tires must be within 12 inches of the curb when parallel parking to prevent the vehicle from protruding into active traffic."
  },
  {
    id: 1204,
    question: "If your vehicle's hood suddenly flies open while you are traveling at high speeds on the highway, what should you do first?",
    options: [
      "Slam hard on your brakes and turn your steering column hard to the right",
      "Look through the gap under the open hood or out your side window, roll onto the shoulder, and stop safely",
      "Floor your gas pedal to close the hood with wind pressure",
      "Stand up on your driver seat to look over the hood frame"
    ],
    correctAnswerIndex: 1,
    explanation: "If a hood flies open, maintain control. Look through the bottom gap or side window, signal, decelerate, and navigate safely to the shoulder."
  },
  {
    id: 1205,
    question: "What does a sign featuring a white background in a vertical rectangle shape indicate?",
    options: [
      "Scenic motorist guide or services direction",
      "A regulatory sign conveying laws, speed limits, or traffic restrictions",
      "Historical landmark indicators",
      "Upcoming high-risk construction bypass loops"
    ],
    correctAnswerIndex: 1,
    explanation: "Vertical white rectangles are regulatory signs indicating traffic laws (speed limits, turn prohibitions, lane instructions)."
  }
];

