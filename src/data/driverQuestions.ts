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
    question: "What is the default speed limit on urban or town roads in Minnesota?",
    options: ["20 mph", "30 mph", "40 mph", "55 mph"],
    correctAnswerIndex: 1,
    explanation: "The standard speed limit on Minnesota urban or town roads is 30 mph unless posted otherwise."
  },
  {
    id: 1002,
    question: "What is the maximum speed limit in a Minnesota residential alley?",
    options: ["10 mph", "15 mph", "20 mph", "25 mph"],
    correctAnswerIndex: 0,
    explanation: "The default speed limit in alleys is 10 mph for safety."
  },
  {
    id: 1003,
    question: "If two vehicles reach an uncontrolled intersection at the same time, who yields?",
    options: [
      "The driver on the left yields to the right",
      "The driver on the right yields to the left",
      "The driver going faster has priority",
      "The larger vehicle has priority"
    ],
    correctAnswerIndex: 0,
    explanation: "At uncontrolled intersections, the driver on the left must yield to the vehicle on their right."
  },
  {
    id: 1004,
    question: "Under Minnesota law, you must turn on headlights if visibility is less than:",
    options: ["1,000 feet", "750 feet", "500 feet", "300 feet"],
    correctAnswerIndex: 2,
    explanation: "Headlights must be used if visibility is reduced to 500 feet or less, and during rain, snow, or fog."
  },
  {
    id: 1005,
    question: "What is the legal blood alcohol concentration (BAC) limit for drivers age 21 or older in Minnesota?",
    options: ["0.02%", "0.05%", "0.08%", "0.10%"],
    correctAnswerIndex: 2,
    explanation: "A BAC of 0.08% or higher is the legal threshold for a DWI arrest in Minnesota."
  },
  {
    id: 1006,
    question: "Under Minnesota's 'Not a Drop' law, what is the legal alcohol limit for drivers under 21?",
    options: ["0.00% (any detectable amount)", "0.02%", "0.05%", "0.08%"],
    correctAnswerIndex: 0,
    explanation: "It is illegal for drivers under 21 to operate a vehicle with any trace of alcohol."
  },
  {
    id: 1007,
    question: "Under Vanessa's Law, an unlicensed teen driver who gets an alcohol or crash violation:",
    options: [
      "Cannot get a permit or license until age 18",
      "Must pay a fifty dollar fine and continue driving",
      "Is restricted to daytime driving only",
      "Must attend a parent-supervised driver class"
    ],
    correctAnswerIndex: 0,
    explanation: "Vanessa's Law suspends licensing privileges for unlicensed teens until age 18 for severe violations."
  },
  {
    id: 1008,
    question: "How far back must you stop for a school bus with flashing red lights and an extended stop arm?",
    options: ["At least 10 feet", "At least 20 feet", "At least 30 feet", "At least 50 feet"],
    correctAnswerIndex: 1,
    explanation: "You must stop at least 20 feet away from a stopped school bus with active red warning lights."
  },
  {
    id: 1009,
    question: "When are you NOT required to stop for a school bus with flashing red lights?",
    options: [
      "When on the opposite side of a physically divided highway",
      "When driving under 20 mph in neighborhood lanes",
      "When you are trailing behind in a separate lane",
      "When dropping off students in school parking lots"
    ],
    correctAnswerIndex: 0,
    explanation: "On a separated or divided highway, oncoming traffic is exempt from stopping."
  },
  {
    id: 1010,
    question: "What does Minnesota's Implied Consent law require you to submit to?",
    options: [
      "A chemical test for alcohol/drugs if requested by police",
      "Warrantless searches of your personal vehicle trunk",
      "Yielding right-of-way to all commercial vehicles",
      "Maintaining fifty thousand dollars in auto insurance"
    ],
    correctAnswerIndex: 0,
    explanation: "Implied Consent means that driving on public roads implies agreement to breath, blood, or urine tests."
  },
  {
    id: 1011,
    question: "What is the penalty for refusing a chemical test under Implied Consent?",
    options: [
      "License revocation for up to one year and a criminal charge",
      "A fifty dollar registration lookup fee",
      "An automatic increase in commercial insurance rates",
      "A mandatory three-month safe driving weekend class"
    ],
    correctAnswerIndex: 0,
    explanation: "Refusing a chemical test is a crime and leads to immediate license revocation."
  },
  {
    id: 1012,
    question: "You must dim high beams within how many feet of an oncoming vehicle?",
    options: ["Within 1,000 feet", "Within 500 feet", "Within 300 feet", "Within 200 feet"],
    correctAnswerIndex: 0,
    explanation: "Dim your high beams when an oncoming vehicle is within 1,000 feet."
  },
  {
    id: 1013,
    question: "You must dim high beams within how many feet of a vehicle you are following?",
    options: ["Within 1,000 feet", "Within 500 feet", "Within 300 feet", "Within 200 feet"],
    correctAnswerIndex: 3,
    explanation: "Dim your high beams when following another vehicle within 200 feet."
  },
  {
    id: 1014,
    question: "What is the recommended safe following distance in normal dry weather?",
    options: ["One car length per ten mph", "The three-second rule", "Fifty feet on all urban roads", "Whenever you can see their rear tires on the road"],
    correctAnswerIndex: 1,
    explanation: "The three-second rule provides a safe, dynamic following distance in ideal weather."
  },
  {
    id: 1015,
    question: "You are prohibited from parking within how many feet of a fire hydrant?",
    options: ["5 feet", "10 feet", "15 feet", "20 feet"],
    correctAnswerIndex: 1,
    explanation: "Do not park a vehicle within 10 feet of a fire hydrant."
  },
  {
    id: 1016,
    question: "You are prohibited from parking within how many feet of a stop sign or traffic signal?",
    options: ["10 feet", "20 feet", "30 feet", "50 feet"],
    correctAnswerIndex: 2,
    explanation: "Do not park a vehicle within 30 feet of any stop sign, yield sign, or signal."
  },
  {
    id: 1017,
    question: "You are prohibited from parking within how many feet of a railroad crossing?",
    options: ["20 feet", "30 feet", "50 feet", "100 feet"],
    correctAnswerIndex: 2,
    explanation: "Do not park a vehicle within 50 feet of the nearest rail of a railroad crossing."
  },
  {
    id: 1018,
    question: "What type of message does a yellow diamond-shaped sign convey?",
    options: [
      "A general warning of hazards ahead",
      "Regulatory speed and lane limits",
      "Motorist services and campground guides",
      "School zone speed boundaries"
    ],
    correctAnswerIndex: 0,
    explanation: "Yellow diamond signs warn drivers of curves, merges, hills, or other hazards."
  },
  {
    id: 1019,
    question: "What shape and color is an advanced railroad crossing warning sign?",
    options: [
      "A yellow circle with a black 'X' and 'RR'",
      "An orange diamond with a black locomotive",
      "A white rectangle with regulatory notices",
      "An upside-down red triangle"
    ],
    correctAnswerIndex: 0,
    explanation: "A circular yellow sign with an 'X' and 'RR' indicates a railroad crossing is ahead."
  },
  {
    id: 1020,
    question: "An emergency vehicle approaches from behind with sirens on. What should you do?",
    options: [
      "Pull to the right edge of the road and stop",
      "Maintain speed and hold your exact lane",
      "Accelerate to find a side street to turn onto",
      "Pull to the left-hand median barrier and stop"
    ],
    correctAnswerIndex: 0,
    explanation: "Safely yield right-of-way by moving to the right edge of the road and stopping completely."
  },
  {
    id: 1021,
    question: "What does the Ted Foss Move Over Law require you to do when approaching a stopped emergency vehicle?",
    options: [
      "Safely move over a lane, or slow down if changing lanes is unsafe",
      "Flash your high beams and speed past quickly",
      "Stop directly behind the emergency vehicle on the lane",
      "Honk your horn as you pass to alert responders"
    ],
    correctAnswerIndex: 0,
    explanation: "You must move over one lane for stopped emergency/service vehicles with flashing lights."
  },
  {
    id: 1022,
    question: "When entering a multi-lane roundabout, which vehicles have the right of way?",
    options: [
      "Vehicles already inside the roundabout",
      "Vehicles entering from the right lanes",
      "The driver traveling at the highest speed",
      "The vehicle in the outer lane of the circle"
    ],
    correctAnswerIndex: 0,
    explanation: "Yield to all circulating vehicles inside the roundabout before entering."
  },
  {
    id: 1023,
    question: "When is a left turn on red legal in Minnesota?",
    options: [
      "From a one-way street onto another one-way street, after stopping",
      "At any intersection when no oncoming traffic is visible",
      "Only inside rural areas during late night hours",
      "Left turns on red are never legal in Minnesota"
    ],
    correctAnswerIndex: 0,
    explanation: "You may only turn left on red when turning from a one-way onto another one-way street."
  },
  {
    id: 1024,
    question: "What does a solid yellow line on your side of the road mean?",
    options: [
      "Passing is prohibited from your direction",
      "Passing is allowed if the road is clear",
      "The lane is designated as a carpool transit lane",
      "Passing is permitted only for agricultural vehicles"
    ],
    correctAnswerIndex: 0,
    explanation: "Passing is illegal if there is a solid yellow line on your side of the center line."
  },
  {
    id: 1025,
    question: "Under Minnesota law, how long must a child be secured in a rear-facing safety seat?",
    options: [
      "Until age 2, or they exceed the seat's height/weight limits",
      "Until they are twelve months old and 25 pounds",
      "Until they are exactly four years old",
      "Only if riding in the front passenger seat"
    ],
    correctAnswerIndex: 0,
    explanation: "Children must be in rear-facing seats until at least age 2 or until they exceed manufacturer limits."
  },
  {
    id: 1026,
    question: "When are you permitted to hold a cell phone in your hand while driving in Minnesota?",
    options: [
      "Under no circumstances (hands-free only)",
      "When stopped at a red traffic light",
      "When texting at speeds under 15 mph in city limits",
      "When using maps or GPS on highway lanes"
    ],
    correctAnswerIndex: 0,
    explanation: "Minnesota law prohibits holding a cell phone or portable device while driving, even at stops."
  },
  {
    id: 1027,
    question: "An orange triangular sign with a red border on the rear of a vehicle indicates:",
    options: [
      "The vehicle travels at 30 mph or less",
      "The vehicle is carrying hazardous materials",
      "The vehicle is carrying an oversized wide load",
      "The vehicle is operated by a student driver"
    ],
    correctAnswerIndex: 0,
    explanation: "This triangular emblem marks slow-moving vehicles like farm tractors or roadway sweepers."
  },
  {
    id: 1028,
    question: "In Minnesota, a crash involving injury, death, or property damage of $1,000+ must be reported within:",
    options: ["48 hours", "5 days", "10 days", "30 days"],
    correctAnswerIndex: 2,
    explanation: "A crash report must be filed within 10 days of the incident if damage exceeds $1,000 or causes injury."
  },
  {
    id: 1029,
    question: "In Minnesota, fleeing a peace officer in a motor vehicle is classified as:",
    options: [
      "A felony offense",
      "A petty misdemeanor warning",
      "An administrative license warning",
      "A simple civil citation"
    ],
    correctAnswerIndex: 0,
    explanation: "Fleeing police in a vehicle is a serious felony carrying prison time and license loss."
  },
  {
    id: 1030,
    question: "When parking downhill along a street curb, which way should you turn your steering wheel?",
    options: ["Towards the curb", "Away from the curb", "Keep the wheels straight", "Halfway to the left"],
    correctAnswerIndex: 0,
    explanation: "Turn wheels towards the curb so the car will roll into the curb if the brakes fail."
  },
  {
    id: 1031,
    question: "When parking uphill along a street curb, which way should you turn your steering wheel?",
    options: ["Away from the curb", "Towards the curb", "Keep the wheels straight", "Towards the street traffic"],
    correctAnswerIndex: 0,
    explanation: "Turn wheels away from the curb so the back of the front tire will rest against the curb."
  },
  {
    id: 1032,
    question: "What is the minimum clearance distance required when passing a bicycle in Minnesota?",
    options: ["1 foot of clearance", "3 feet of clearance", "6 feet of clearance", "10 feet of clearance"],
    correctAnswerIndex: 1,
    explanation: "Drivers must maintain at least 3 feet of clearance when overtaking a bicycle."
  },
  {
    id: 1033,
    question: "An eight-sided octagonal traffic sign is strictly reserved for:",
    options: ["Yield signs", "Stop signs", "Railroad warnings", "Construction alerts"],
    correctAnswerIndex: 1,
    explanation: "An octagonal shape is globally unique to stop signs for instant recognition."
  },
  {
    id: 1034,
    question: "What does an active flashing yellow traffic signal at an intersection mean?",
    options: ["Stop and wait for green", "Yield to all cross-traffic", "Proceed with caution", "Detour immediately"],
    correctAnswerIndex: 2,
    explanation: "A flashing yellow light warns you to slow down, scan, and proceed cautiously."
  },
  {
    id: 1035,
    question: "What does an active flashing red traffic light mean at an intersection?",
    options: [
      "Treat the light exactly like a stop sign",
      "Malfunctioning signal, drive straight through",
      "Yield to left-turning traffic without stopping",
      "Slow down to 5 mph but do not stop"
    ],
    correctAnswerIndex: 0,
    explanation: "A flashing red light means stop fully, yield, and proceed when the intersection is clear."
  },
  {
    id: 1036,
    question: "Which headlight setting should you use in dense fog, rain, or snow?",
    options: ["High beams", "Low beams", "Parking lights only", "No lights needed in daytime"],
    correctAnswerIndex: 1,
    explanation: "Low beams reduce back-scatter reflection from fog, snow, or rain, improving visibility."
  },
  {
    id: 1037,
    question: "Under Minnesota law, who is required to wear a seat belt in a passenger vehicle?",
    options: [
      "Only the driver and front passenger",
      "Only backseat passengers under 18",
      "All occupants in both front and rear seats",
      "No one if the vehicle has side-airbags"
    ],
    correctAnswerIndex: 2,
    explanation: "Minnesota law requires all seat positions to wear seat belts or proper child restraints."
  },
  {
    id: 1038,
    question: "What is the penalty for driving without motor vehicle insurance in Minnesota?",
    options: [
      "Fines, license suspension, registration revocation, and jail time",
      "A minor warning with no financial impact",
      "A ten dollar surcharge on license plate sticker renewals",
      "An automatic suspension of vehicle warranty services"
    ],
    correctAnswerIndex: 0,
    explanation: "Driving uninsured is a misdemeanor with severe financial and licensing penalties."
  },
  {
    id: 1039,
    question: "What happens to your tires during hydroplaning on wet surfaces?",
    options: [
      "They lose contact with the road and slide on a thin layer of water",
      "The brakes overheat from absorbing too much rainwater",
      "The tires inflate due to dynamic water pressure",
      "The steering locks up due to electrical shorting"
    ],
    correctAnswerIndex: 0,
    explanation: "In heavy rain, tires can lose physical contact with the pavement and glide over water."
  },
  {
    id: 1040,
    question: "What does Minnesota's Basic Speed Law declare?",
    options: [
      "You must drive at the posted speed limit at all hours",
      "Never drive faster than is reasonable and safe for conditions",
      "Always match the speed of surrounding highway traffic",
      "Drive at exactly 55 mph under any road scenario"
    ],
    correctAnswerIndex: 1,
    explanation: "You must adjust speed based on weather, traffic, and road conditions regardless of the limit."
  },
  {
    id: 1041,
    question: "In defensive driving, what does the acronym S.I.P.D.E. stand for?",
    options: [
      "Scan, Identify, Predict, Decide, Execute",
      "Steer, Inspect, Park, Drive, Exit",
      "Speed, Intersect, Position, Distance, Emergency",
      "Signals, Intersections, Pedestrians, Detours, Enforcement"
    ],
    correctAnswerIndex: 0,
    explanation: "SIPDE is a standard systematic process used to recognize and respond to road hazards."
  },
  {
    id: 1042,
    question: "A driver extending their left arm straight upward at a 90-degree angle is signaling:",
    options: ["A right turn", "A left turn", "A slow down or stop", "An invitation to pass"],
    correctAnswerIndex: 0,
    explanation: "Left arm bent upward indicates a right turn; extended straight indicates a left turn."
  },
  {
    id: 1043,
    question: "When do school zone speed limits apply in Minnesota?",
    options: [
      "When children are present or yellow beacons flash",
      "At all hours during school holidays",
      "Only when buses are actively loading",
      "During early morning hours only"
    ],
    correctAnswerIndex: 0,
    explanation: "School zone limits apply specifically during active school times or when warned by flashing beacons."
  },
  {
    id: 1044,
    question: "Another motorist is exhibiting intense road rage and tailgating you. What should you do?",
    options: [
      "Avoid eye contact, remain calm, and drive to a public area if followed",
      "Brake-check them to force them to stay back",
      "Make gestures to show you are not intimidated",
      "Pull over on the shoulder and step out of your car"
    ],
    correctAnswerIndex: 0,
    explanation: "De-escalate by staying calm and staying in your car. Go to a police station or public area if followed."
  },
  {
    id: 1045,
    question: "How far in advance must you activate your turn signals before making a turn?",
    options: ["At least 50 feet", "At least 100 feet", "At least 200 feet", "At least 500 feet"],
    correctAnswerIndex: 1,
    explanation: "Minnesota law requires signaling for at least 100 feet before executing any turn."
  },
  {
    id: 1046,
    question: "Which of the following is true regarding over-the-counter (OTC) drugs and driving?",
    options: [
      "Impaired driving on OTC drugs carries the same penalties as alcohol DWI",
      "OTC drugs are always safe because they don't require a prescription",
      "You can drive on them if a pharmacist gives verbal permission",
      "They only carry penalties if your BAC rating is above 0.08%"
    ],
    correctAnswerIndex: 0,
    explanation: "Driving while impaired by any drug (prescription, OTC, or illegal) is a crime under DWI laws."
  },
  {
    id: 1047,
    question: "When sharing a roundabout with a large commercial truck, what should you do?",
    options: [
      "Stay behind the truck and give it plenty of room to turn",
      "Squeeze past to get in front before the curves",
      "Honk your horn to indicate you are in its blind spot",
      "Tailgate closely to pass through before it blocks the lane"
    ],
    correctAnswerIndex: 0,
    explanation: "Truck trailers swing wide and may span both lanes inside a roundabout loop."
  },
  {
    id: 1048,
    question: "What is the primary function of freeway ramp meter traffic signals?",
    options: [
      "To space out merging cars and prevent bottlenecks",
      "To measure passenger weight metrics for occupancy",
      "To verify license plates with the state database",
      "To issue automatic speed enforcement tickets"
    ],
    correctAnswerIndex: 0,
    explanation: "Ramp meters regulate the interval of merging traffic to ease main-lane highway flow."
  },
  {
    id: 1049,
    question: "A slow-moving vehicle emblem is shaped like:",
    options: [
      "An orange triangle with a red border",
      "A yellow pentagon pointing upwards",
      "A white rectangle with black lettering",
      "A red octagon with white border stripes"
    ],
    correctAnswerIndex: 0,
    explanation: "The orange reflective triangle with a red border is the unique emblem for slow-moving vehicles."
  },
  {
    id: 1050,
    question: "To reduce danger from airbags, children of what age should ride in the rear seat?",
    options: ["Under 8 years old", "Under 13 years old", "Under 16 years old", "Under 18 years old"],
    correctAnswerIndex: 1,
    explanation: "Children under 13 should sit in the back seat to prevent injuries from passenger airbag deployments."
  },
  {
    id: 1051,
    question: "What do blue background signs on highways communicate to drivers?",
    options: [
      "Motorist services (food, gas, lodging, hospital)",
      "Scenic parks, historical landmarks, reserves",
      "Regulatory speed and lane direction limits",
      "Upcoming construction detours and bypasses"
    ],
    correctAnswerIndex: 0,
    explanation: "Blue signs guide drivers to gas stations, motels, restaurants, and medical centers."
  },
  {
    id: 1052,
    question: "What do brown background signs on public roads represent?",
    options: [
      "Recreational, public park, or cultural interest directories",
      "General speed bounds and school zone warnings",
      "Winter snow emergency routes and detours",
      "Industrial loading zones and weight limitations"
    ],
    correctAnswerIndex: 0,
    explanation: "Brown is dedicated to pointing drivers toward state parks, lakes, forests, and historic sites."
  },
  {
    id: 1053,
    question: "A yellow painted center line dividing road lanes always indicates:",
    options: [
      "Traffic moving in opposite directions",
      "Traffic moving in the same direction",
      "A lane reserved for public carpooling",
      "The extreme outer edge of the highway"
    ],
    correctAnswerIndex: 0,
    explanation: "Yellow lines divide traffic moving in opposing directions."
  },
  {
    id: 1054,
    question: "What does a solid white line on the outer right-hand edge of a road indicate?",
    options: [
      "The fog line, marking the right-hand edge of the pavement",
      "A lane transition zone where passing is encouraged",
      "A warning of a steep roadside drop ahead",
      "A lane reserved exclusively for agricultural vehicles"
    ],
    correctAnswerIndex: 0,
    explanation: "The solid white line (fog line) helps drivers stay on pavement in rain, snow, or fog."
  },
  {
    id: 1055,
    question: "During rain, when are roadway surfaces most slippery?",
    options: [
      "In the first few minutes of rain, as dust and oil float up",
      "After a heavy downpour lasting several hours",
      "Once storm drains have completely cleared the water",
      "When the ambient air temperature is exactly 55°F"
    ],
    correctAnswerIndex: 0,
    explanation: "Rain mixes with oil/dust on the dry road to create a very slick film initially, before being washed away."
  },
  {
    id: 1056,
    question: "If your vehicle begins to slide or fishtail on winter ice, what should you do?",
    options: [
      "Ease off the gas, steer in the direction of the skid, and don't slam brakes",
      "Slam on high-beams and pump the brakes rapidly",
      "Accelerate firmly to force the tires to bite the ice",
      "Shift the transmission to Reverse immediately"
    ],
    correctAnswerIndex: 0,
    explanation: "Steering in the direction of the skid helps the front tires regain steering control; do not slam on brakes."
  },
  {
    id: 1057,
    question: "If you collide with an unattended parked vehicle and cannot find the owner, what must you do?",
    options: [
      "Leave a note with your name, address, and details, and report it",
      "Wait 5 minutes and leave if nobody shows up",
      "Take a photo of their license plate and drive off",
      "Do nothing unless the damage looks costly"
    ],
    correctAnswerIndex: 0,
    explanation: "Leaving a detailed note and notifying police is legally required; leaving without doing so is a hit-and-run."
  },
  {
    id: 1058,
    question: "What is a major cause of deadly carbon monoxide buildup inside a vehicle?",
    options: [
      "Running the engine in a closed garage or having an exhaust leak",
      "Driving with low tire pressure or low engine oil",
      "Running out of windshield washer fluid",
      "Driving at mountains with heater fans set to high"
    ],
    correctAnswerIndex: 0,
    explanation: "Carbon monoxide is an odorless, lethal exhaust gas. Ensure leaks are patched and never idle in closed spaces."
  },
  {
    id: 1059,
    question: "What do green background signs on freeways communicate?",
    options: [
      "Navigational info (exits, distances, destinations)",
      "Traffic warnings, sharp turns, hazards ahead",
      "Regulatory speed restrictions and school buffers",
      "Active bicycle paths and crossing lanes"
    ],
    correctAnswerIndex: 0,
    explanation: "Green signs help with navigation, providing directions, distances, and exit numbers."
  },
  {
    id: 1060,
    question: "What does a steady yellow turn arrow signal indicate?",
    options: [
      "The protected turn stage is ending; prepare to stop",
      "Your turn is protected; speed up to cross",
      "You have automatic priority over oncoming lanes",
      "Malfunctioning signal head; treat as a yield"
    ],
    correctAnswerIndex: 0,
    explanation: "A steady yellow arrow means the protected phase is ending; prepare to stop if safety permits."
  },
  {
    id: 1061,
    question: "When is passing on the right legal in Minnesota?",
    options: [
      "When the vehicle ahead is turning left, on fully paved paths",
      "Whenever you want to bypass slower highway cars",
      "By driving on the gravel shoulder of a two-lane road",
      "Passing on the right is never legal in Minnesota"
    ],
    correctAnswerIndex: 0,
    explanation: "You can pass on the right only on paved roads if the vehicle ahead is making a left turn, without leaving pavement."
  },
  {
    id: 1062,
    question: "What is the fine for a second or subsequent hands-free cell phone violation in Minnesota?",
    options: ["$275 plus court costs", "$50 plus court costs", "$100 plus court costs", "$500 plus court costs"],
    correctAnswerIndex: 0,
    explanation: "While the first offense has a $50 fine, subsequent hands-free violations carry a heavy $275 ticket."
  },
  {
    id: 1063,
    question: "At intersections with unmarked crosswalks, who must be yielded to?",
    options: [
      "Pedestrians attempting to cross the intersection",
      "Only pedestrians in painted walkways",
      "The vehicle going faster has right of way",
      "Pedestrians must yield to all vehicular speeds"
    ],
    correctAnswerIndex: 0,
    explanation: "Every intersection has an unmarked crosswalk. You must yield to pedestrians attempting to cross."
  },
  {
    id: 1064,
    question: "What type of highway sign features a vertical white rectangle with black text?",
    options: [
      "A regulatory sign (conveying specific traffic laws)",
      "A guide sign (scenic parks, food, gas)",
      "A warning sign (construction detour loops)",
      "A cultural recreational landmark directory"
    ],
    correctAnswerIndex: 0,
    explanation: "Vertical white rectangles indicate regulatory traffic laws, like speed limits or lane restrictions."
  },
  {
    id: 1065,
    question: "What is Minnesota's policy regarding the Zipper Merge in construction zones?",
    options: [
      "Use both lanes to the merge point, then take sequential turns",
      "Merge into a single lane as soon as warning signs appear",
      "Vehicles in the left lane have automatic priority",
      "Speed up in the closing lane to force a gap"
    ],
    correctAnswerIndex: 0,
    explanation: "The Zipper Merge utilizes both lanes fully until the bottleneck, reducing backup lengths by up to 40%."
  },
  {
    id: 1066,
    question: "When parking uphill on a street with no curb, which way should you turn your wheels?",
    options: [
      "Turn wheels to the right (towards shoulder)",
      "Turn wheels to the left (towards street)",
      "Keep the wheels aligned straight",
      "Turn wheels toward active passing traffic"
    ],
    correctAnswerIndex: 0,
    explanation: "Turn wheels to the right so if the car rolls backward, it rolls off the pavement rather than into traffic."
  },
  {
    id: 1067,
    question: "A five-sided pentagonal traffic sign is strictly used to identify:",
    options: [
      "School zones and school crossings",
      "Hospital access and ambulance bays",
      "Railroad crossing gate locations",
      "County speed limit boundaries"
    ],
    correctAnswerIndex: 0,
    explanation: "Pentagon shapes indicate a school zone or school crossing; watch out for children."
  },
  {
    id: 1068,
    question: "With Anti-Lock Brakes (ABS), how should you brake in an emergency?",
    options: [
      "Apply firm, constant pressure and hold it down on steering",
      "Pump the brake pedal as fast as possible to unlock gears",
      "Flicker light pressure while applying the parking brake",
      "Feather the brake slowly after cutting the ignition"
    ],
    correctAnswerIndex: 0,
    explanation: "ABS pumps the brakes electronically. Hold the pedal down firmly and steer; do not pump it yourself."
  },
  {
    id: 1069,
    question: "If your gas pedal jams and sticks down, what should you do first?",
    options: [
      "Shift to Neutral, apply brakes firmly, and steer off the road",
      "Invert the ignition keys to lock steering gearboxes",
      "Pump the gas pedal aggressively to dislodge springs",
      "Open the door to check your wheel alignment"
    ],
    correctAnswerIndex: 0,
    explanation: "Shifting to Neutral cuts engine power to the wheels, allowing you to decelerate and pull over safely."
  },
  {
    id: 1070,
    question: "What is the safest immediate response to a high-speed tire blowout on the highway?",
    options: [
      "Keep a firm grip on the wheel, ease off the gas, and brake gently",
      "Slam hard on your brakes immediately and steer to the shoulder",
      "Accelerate to stabilize the vehicle",
      "Downshift immediately to first gear to lock up wheels"
    ],
    correctAnswerIndex: 0,
    explanation: "Stay calm, hold the steering wheel straight, let the car slow down gradually, and exit the highway."
  },
  {
    id: 1071,
    question: "When is a driver permitted to drive inside a designated bicycle lane?",
    options: [
      "Only when preparing to turn or enter a driveway, after yielding",
      "During rush hours to bypass highway congestion lines",
      "To stop temporarily for commercial deliveries",
      "Never; vehicles are completely banned from bicycle lanes"
    ],
    correctAnswerIndex: 0,
    explanation: "You must only enter a bike lane to execute legal turns, yielding to any active cyclists first."
  },
  {
    id: 1072,
    question: "What does keeping a flashing yellow arrow traffic signal indicate for turns?",
    options: [
      "Left turns are allowed, but you must yield to oncoming traffic",
      "Left turns are protected and have direct right of way",
      "You must stop fully and wait for a solid green arrow",
      "Malfunctioning signal head; treat as a four-way yield"
    ],
    correctAnswerIndex: 0,
    explanation: "A flashing yellow arrow means you can turn left, but you must yield to oncoming cars and pedestrians."
  },
  {
    id: 1073,
    question: "What does crossing double solid white lines on a highway indicate?",
    options: [
      "It is strictly prohibited",
      "It is permitted when traffic is light",
      "It is allowed to exit a carpool lane",
      "It represents an emergency vehicle zone"
    ],
    correctAnswerIndex: 0,
    explanation: "Double solid white lines separate lanes of traffic traveling in the same direction where crossing is illegal."
  },
  {
    id: 1074,
    question: "To signal you are slowing or stopping with hand signals, how should your left arm be positioned?",
    options: [
      "Pointed straight down with your palm facing rear",
      "Extended straight out horizontally",
      "Bent upward at a 90-degree angle",
      "Waving back and forth in a circle"
    ],
    correctAnswerIndex: 0,
    explanation: "Left arm pointing down signifies slowing down or coming to a complete stop."
  },
  {
    id: 1075,
    question: "What is the base fine for a first-time violation of Minnesota's hands-free driving law?",
    options: ["$120", "$50", "$275", "$150"],
    correctAnswerIndex: 1,
    explanation: "The first violation of the hands-free cell phone law carries a $50 base fine plus court surcharges."
  },
  {
    id: 1076,
    question: "What is the default speed limit on standard two-lane rural highways in MN unless posted otherwise?",
    options: ["45 mph", "55 mph", "65 mph", "70 mph"],
    correctAnswerIndex: 1,
    explanation: "In Minnesota, the default speed limit on rural two-lane highways is 55 mph."
  },
  {
    id: 1077,
    question: "What does a flashing yellow light signal at a pedestrian crosswalk mean?",
    options: [
      "Pedestrians are crossing; slow down and prepare to stop",
      "The crosswalk is currently closed; maintain speeds",
      "You have direct right of way; do not slow down",
      "A school speed limit zone has transitioned to end"
    ],
    correctAnswerIndex: 0,
    explanation: "A flashing yellow light warns that a pedestrian is crossing or entering, requiring caution."
  },
  {
    id: 1078,
    question: "Fleeing a peace officer that results in bodily injury is charged as:",
    options: [
      "A felony",
      "A gross misdemeanor",
      "A petty misdemeanor",
      "An administrative warning infraction"
    ],
    correctAnswerIndex: 0,
    explanation: "If driver flight leads to bodily injury, they are subject to severe felony prosecution."
  },
  {
    id: 1079,
    question: "When is turning right at a solid red light permitted?",
    options: [
      "After making a complete stop and yielding to traffic and pedestrians",
      "By slowing down to under 5 mph without stopping",
      "Anytime the intersection contains no oncoming vehicles",
      "Right turns on solid red are never legal in Minnesota"
    ],
    correctAnswerIndex: 0,
    explanation: "You must come to a complete stop first, check for vehicles and pedestrians, then turn when clear."
  },
  {
    id: 1080,
    question: "What is the purpose of a shared center lane marked by solid and dashed yellow lines?",
    options: [
      "To allow vehicles from both directions to start left turns",
      "To act as a passing lane to bypass slow drivers",
      "To serve as a high-speed carpool bypass route",
      "For emergency parking and vehicle staging only"
    ],
    correctAnswerIndex: 0,
    explanation: "Shared center lanes are restricted entirely to starting left turns and cannot be used for driving."
  },
  {
    id: 1081,
    question: "Under Minnesota law, when is it illegal to use high beam headlights?",
    options: [
      "Within 1,000 feet of oncoming vehicles or 200 feet of trailing vehicles",
      "Whenever driving in heavy winter blizzards and snow",
      "When operating on unfamiliar two-lane county highways",
      "High-beam headlight use is legal at any place and time"
    ],
    correctAnswerIndex: 0,
    explanation: "To prevent blinding others, high beams must be dimmed within 1,000 feet of oncoming traffic and 200 feet of a vehicle ahead."
  },
  {
    id: 1082,
    question: "What must you do when approaching a utility truck stopped with flashing amber lights?",
    options: [
      "Reduce your speed significantly and pass with caution",
      "Keep your current speed to clear the lane quickly",
      "Honk your horn to indicate you are arriving",
      "Come to a complete stop until their light is off"
    ],
    correctAnswerIndex: 0,
    explanation: "Amber warning lights require approaching drivers to slow down and execute a safe, cautious pass."
  },
  {
    id: 1083,
    question: "When parallel parking, your wheels must be within how many inches of the curb?",
    options: ["6 inches", "12 inches", "18 inches", "24 inches"],
    correctAnswerIndex: 1,
    explanation: "Your vehicle's tires must be parallel to and within 12 inches of the street curb."
  },
  {
    id: 1084,
    question: "An alcohol violation committed under age 18 results in Vanessa's Law which:",
    options: [
      "Revokes driving privileges or postpones licensing until age 18",
      "Triggers a minor text reminder sent to parents",
      "Has no legal impact once a fine under $50 is paid",
      "Permanently bans the driver from holding any credit card"
    ],
    correctAnswerIndex: 0,
    explanation: "Vanessa's Law suspends/delays license privileges for teens under 18 who commit alcohol offenses."
  },
  {
    id: 1085,
    question: "What is the proper sequence of actions before initiating a lane change?",
    options: [
      "Check mirrors, signal, check blind spot over shoulder, then merge",
      "Signal, check mirrors, and change lanes quickly",
      "Over-shoulder check, merge lane, then flash signals",
      "Check rearview mirror, slow down, then slide in"
    ],
    correctAnswerIndex: 0,
    explanation: "Always check mirrors, signal intent, click your head back to check your physical blind spot, then slide over."
  },
  {
    id: 1086,
    question: "When parking uphill on a street with no curb, you should turn your wheels:",
    options: [
      "To the right (towards the road edge)",
      "To the left (towards the street center)",
      "Keep the wheels completely straight",
      "Slightly outward towards passing traffic"
    ],
    correctAnswerIndex: 0,
    explanation: "Turn wheels right so the car rolls away from the active roadway in case of brake failures."
  },
  {
    id: 1087,
    question: "What does a red circle with a white slash across it represent?",
    options: [
      "That the indicated action is prohibited",
      "That you have direct highway right-of-way",
      "An upcoming multi-car collision hotspot zone",
      "A designated construction utility access bypass"
    ],
    correctAnswerIndex: 0,
    explanation: "A red circle with a slash is the universal sign signifying a forbidden action (e.g., No Left Turn, No U-Turn)."
  },
  {
    id: 1088,
    question: "What is the shape and color of a standard Yield sign?",
    options: [
      "An upside-down triangle that is red and white",
      "A yellow diamond with black writing",
      "An eight-sided red octagon with white border",
      "A yellow circle with a black cross"
    ],
    correctAnswerIndex: 0,
    explanation: "A Yield sign is a red-and-white, three-sided, downward-pointing triangle."
  },
  {
    id: 1089,
    question: "Under Minnesota law, holding a phone is permitted only for:",
    options: [
      "Calling 911 in a life-threatening emergency",
      "Viewing high-priority emergency emails",
      "Answering a phone call from an employer",
      "Entering a new destination on your map app"
    ],
    correctAnswerIndex: 0,
    explanation: "The only exception to the hands-free driving law is reporting a direct emergency, fire, or crash."
  },
  {
    id: 1090,
    question: "Minnesota's Open Bottle Law prohibits:",
    options: [
      "Keeping open containers of alcohol in the passenger area",
      "Operating any vehicle with a passenger over age 21",
      "Purchasing wine from grocery stores on holiday weekends",
      "Recycling empty glass bottles at public county parks"
    ],
    correctAnswerIndex: 0,
    explanation: "It is illegal to have opened alcohol containers anywhere in the vehicle cabin, including the glovebox."
  },
  {
    id: 1091,
    question: "What do orange background signs on public streets represent?",
    options: [
      "Construction or maintenance warning areas",
      "Recreational county parks and lakes",
      "Regulatory school zone speed limits",
      "Scenic guide routes and bypass highways"
    ],
    correctAnswerIndex: 0,
    explanation: "Orange is reserved exclusively for highway construction, work zones, and detour notices."
  },
  {
    id: 1092,
    question: "When driving in dense fog, you should:",
    options: [
      "Reduce your speed and adjust to your sight distance",
      "Maintain highway speed to avoid being rear-ended",
      "Turn on your emergency hazard flashers and accelerate",
      "Drive with only your orange parking lights turned on"
    ],
    correctAnswerIndex: 0,
    explanation: "Slow down so you can stop safely within the visual distance enabled by the heavy fog."
  },
  {
    id: 1093,
    question: "What do solid white lines between lanes of traffic going the same direction mean?",
    options: [
      "Lane changes are discouraged; stay in your lane",
      "Lane changes are encouraged and completely safe",
      "The lanes flow in opposite directions",
      "The lane is a dedicated transit/carpool zone"
    ],
    correctAnswerIndex: 0,
    explanation: "Solid white lines separate lanes going in the same direction but advise against changing lanes."
  },
  {
    id: 1094,
    question: "A broken (dashed) yellow center line on a two-lane road means:",
    options: [
      "Passing other vehicles is permitted if clear",
      "Passing is strictly illegal in both directions",
      "The road is one-way traffic only",
      "Slow down to 10 mph for upcoming hazards"
    ],
    correctAnswerIndex: 0,
    explanation: "Dashed yellow center lines indicate that passing is allowed on that section of the road."
  },
  {
    id: 1095,
    question: "Which of the following functions does alcohol affect first?",
    options: [
      "Judgment and self-control",
      "Reaction times and reflexes",
      "Balance and muscle coordination",
      "Physical vision sharpness"
    ],
    correctAnswerIndex: 0,
    explanation: "Alcohol affects a driver's mental judgment and decision-making long before visible motor impairment."
  },
  {
    id: 1096,
    question: "A solid white line on the right edge of a highway is called:",
    options: ["The fog line", "The yield line", "The median line", "The carpool separator"],
    correctAnswerIndex: 0,
    explanation: "The solid white right-edge line is called a fog line and guides drivers in poor visibility."
  },
  {
    id: 1097,
    question: "At an uncontrolled T-intersection, who must yield right-of-way?",
    options: [
      "The driver on the terminating road must yield to the through road",
      "The driver on the through road must yield to terminating traffic",
      "The vehicle driving straight ahead goes first in all conditions",
      "The vehicles must stop and take sequential alphabetical turns"
    ],
    correctAnswerIndex: 0,
    explanation: "At T-intersections, drivers on the ending street yield to through street vehicles."
  },
  {
    id: 1098,
    question: "When making a left turn at a green circular traffic light (no arrow), you must:",
    options: [
      "Yield to oncoming traffic and pedestrians before turning",
      "Turn immediately since you have the right-of-way",
      "Wait for the light to turn red before turning",
      "Treat the light like a four-way stop intersection"
    ],
    correctAnswerIndex: 0,
    explanation: "A solid green light means you can turn left, but must yield to oncoming traffic and cross-pedestrians."
  },
  {
    id: 1099,
    question: "What is the maximum speed limit on rural interstate highways in MN unless posted?",
    options: ["55 mph", "60 mph", "65 mph", "70 mph"],
    correctAnswerIndex: 3,
    explanation: "Under standard conditions, rural interstate highways in Minnesota have a maximum speed limit of 70 mph."
  },
  {
    id: 1100,
    question: "What is the driver's license reinstatement fee after a Minnesota alcohol DWI revocation?",
    options: ["$50", "$250", "$680", "$1,000"],
    correctAnswerIndex: 2,
    explanation: "Minnesota charges a heavy administrative fee of $680 to reinstate your license after a DUI revocation."
  }
];
