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
    question: "Under Minnesota default rules, what is the maximum speed limit on urban or town roads unless signs indicate otherwise?",
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
    question: "You are driving through a public residential alleyway in Minnesota. What is the maximum statutory speed limit?",
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
    id: 1003,
    question: "Two vehicles reach an uncontrolled intersection at the exact same time. Which driver must yield the right of way?",
    options: [
      "The driver positioned on the left side must yield to the driver on the right.",
      "The driver positioned on the right side must yield to the driver on the left.",
      "The driver traveling at a higher speed has absolute priority and goes first.",
      "The larger vehicle has legal right of way and proceeds through the intersection."
    ],
    correctAnswerIndex: 0,
    explanation: "At an uncontrolled intersection, the driver on the left must yield the right-of-way to the vehicle on the right."
  },
  {
    id: 1004,
    question: "You are driving in heavy rain and visibility is limited. Under Minnesota law, you must activate your headlights if visibility is reduced to:",
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
    question: "You are driving a passenger vehicle in Minnesota and are age 21 or older. What is the Blood Alcohol Concentration (BAC) legal limit for driving under the influence?",
    options: [
      "0.02% or higher",
      "0.05% or higher",
      "0.08% or higher",
      "0.10% or higher"
    ],
    correctAnswerIndex: 2,
    explanation: "In Minnesota, a Blood Alcohol Concentration (BAC) of 0.08% or higher is the legal threshold for driving under the influence (DWI)."
  },
  {
    id: 1006,
    question: "Under Minnesota's 'Not a Drop' law, what is the legal consequence for an underage driver operating a vehicle with a detectable level of alcohol?",
    options: [
      "Their driving privileges will be suspended immediately.",
      "They will be issued a warning and forced to take a class.",
      "They are only penalized if their BAC meets or exceeds 0.08%.",
      "Their parents will be issued a standard minor-use fee."
    ],
    correctAnswerIndex: 0,
    explanation: "Minnesota's 'Not a Drop' law makes it illegal for anyone under age 21 to drive with *any* detectable level of alcohol in their blood or body."
  },
  {
    id: 1007,
    question: "Under Vanessa's Law, what is the penalty for an unlicensed teen driver under age 18 who commits a crash-related moving violation?",
    options: [
      "They cannot receive an instruction permit or provisionary license until they turn 18, and must retake all tests.",
      "They are restricted to driving during daytime school hours only until they pay a standard administrative warning fee.",
      "They must perform fifty hours of community cleanup work and receive a permanent driving warning on their record.",
      "They will have their primary vehicle impounded and sold at a public auction, with all fees charged to parents."
    ],
    correctAnswerIndex: 0,
    explanation: "Under Vanessa's Law, unlicensed teens who commit crash-related or alcohol violations cannot get an instruction permit or license until age 18. At 18, they must pass classroom and behind-the-wheel training, pay reinstatement fees (up to $680), and retake both written and practice exams."
  },
  {
    id: 1008,
    question: "A school bus has stopped with its red warning lights flashing and stop arm extended. What is the minimum distance you must stop your vehicle?",
    options: [
      "At least 10 feet back",
      "At least 20 feet back",
      "At least 30 feet back",
      "At least 50 feet back"
    ],
    correctAnswerIndex: 1,
    explanation: "Under Minnesota law, you must stop your vehicle at least 20 feet away from a school bus that has its red lights flashing and stop arm extended."
  },
  {
    id: 1009,
    question: "In which of the following traffic scenarios are you NOT legally required to stop for a school bus with its red lights flashing?",
    options: [
      "When traveling in the opposite direction on a physically divided, multi-lane highway.",
      "When traveling at speeds below twenty miles per hour in a quiet residential development.",
      "When trailing the school bus closely and performing a rapid lane merge into an exit ramp.",
      "When the bus driver signals that they are only dropping off senior high school students."
    ],
    correctAnswerIndex: 0,
    explanation: "You are not required to stop if you are traveling in the opposite direction on a physically divided highway (e.g., separated by a concrete median, guardrail, or open grass ditch)."
  },
  {
    id: 1010,
    question: "Under Minnesota's Implied Consent law, what do you automatically agree to by operating a motor vehicle on public roads?",
    options: [
      "To submit to a chemical test of your breath, blood, or urine to check for alcohol representation.",
      "To permit a peace officer to perform warrantless searches of your trunk or glove compartment.",
      "To yield the right of way to any commercial transit bus or high-occupancy vehicle merging on roads.",
      "To maintain comprehensive liability auto insurance coverage of at least fifty thousand dollars."
    ],
    correctAnswerIndex: 0,
    explanation: "The Implied Consent law means that by operating a motor vehicle in Minnesota, you automatically give consent to a chemical test of your breath, blood, or urine to determine alcohol or drug concentration."
  },
  {
    id: 1011,
    question: "Under Minnesota law, what is the direct consequence of refusing to submit to a chemical test under the Implied Consent system?",
    options: [
      "Your driver's license will be revoked for up to one year, and you will be charged with a crime.",
      "Your vehicle will be registered as a high-risk transport, costing you an extra fifty dollar charge.",
      "Your insurance carrier will be notified to raise your premium by a mandatory five hundred dollars.",
      "You will be assigned to a three-month course on safe driving and released with a minor warning."
    ],
    correctAnswerIndex: 0,
    explanation: "Refusing the test is a crime in Minnesota and results in an immediate administrative license revocation for up to one year."
  },
  {
    id: 1012,
    question: "You are driving at night on an unlit highway. Within how many feet of an oncoming vehicle must you dim your high beam headlights?",
    options: [
      "Within 1,000 feet",
      "Within 500 feet",
      "Within 300 feet",
      "Within 200 feet"
    ],
    correctAnswerIndex: 0,
    explanation: "Minnesota law requires high beams to be dimmed when you are within 1,000 feet of an oncoming vehicle."
  },
  {
    id: 1013,
    question: "You are following another vehicle from behind at night. Within how many feet of their rear bumper must you dim your high beam headlights?",
    options: [
      "Within 1,000 feet",
      "Within 500 feet",
      "Within 300 feet",
      "Within 200 feet"
    ],
    correctAnswerIndex: 3,
    explanation: "You must dim your high beam headlights when you are within 200 feet of a vehicle you are following."
  },
  {
    id: 1014,
    question: "What is the recommended minimum safe following distance between your vehicle and the car ahead under normal dry weather conditions?",
    options: [
      "A constant interval of at least one vehicle length per ten miles per hour.",
      "A dynamic buffer defined by the standard and easy-to-use three-second rule.",
      "A fixed physical gap of at least fifty feet on urban roads and eighty on freeway lanes.",
      "A visual target where you can see the rear tires of the leading car touching asphalt."
    ],
    correctAnswerIndex: 1,
    explanation: "Minnesota's manual highly recommends the 'three-second rule' as a safe, adjustable following distance in normal weather conditions."
  },
  {
    id: 1015,
    question: "Under Minnesota traffic regulations, you are legally prohibited from parking your vehicle within how many feet of a fire hydrant?",
    options: [
      "Within 5 feet",
      "Within 10 feet",
      "Within 15 feet",
      "Within 20 feet"
    ],
    correctAnswerIndex: 1,
    explanation: "You are not permitted to park within 10 feet of a fire hydrant in Minnesota."
  },
  {
    id: 1016,
    question: "You are looking for a parking spot near an intersection. You are prohibited from parking within how many feet of a stop sign?",
    options: [
      "Within 10 feet",
      "Within 20 feet",
      "Within 30 feet",
      "Within 50 feet"
    ],
    correctAnswerIndex: 2,
    explanation: "Parking is illegal within 30 feet of any stop sign, yield sign, or traffic control signal."
  },
  {
    id: 1017,
    question: "You must park your vehicle near a railway line. Under Minnesota law, parking is prohibited within how many feet of a railroad crossing?",
    options: [
      "Within 20 feet",
      "Within 30 feet",
      "Within 50 feet",
      "Within 100 feet"
    ],
    correctAnswerIndex: 2,
    explanation: "You are not allowed to park a vehicle within 50 feet of the nearest rail of a railroad crossing."
  },
  {
    id: 1018,
    question: "You are driving on a state route and observe a yellow diamond-shaped traffic sign. What type of message does this sign convey?",
    options: [
      "A general warning alerting you to upcoming road hazards or changing conditions.",
      "A direct regulatory instruction detailing legal speed limits and turn restrictions.",
      "A motorist service guide highlighting lodging, campgrounds, and hospital facilities.",
      "A school zone speed limit directive that requires a complete visual scan of lanes."
    ],
    correctAnswerIndex: 0,
    explanation: "Yellow diamond-shaped signs are warning signs that alert drivers to path hazards, curves, lane merges, or changing conditions ahead."
  },
  {
    id: 1019,
    question: "What is the distinctive shape and color combination of a standard advanced railroad crossing warning sign?",
    options: [
      "A yellow circle featuring a black 'X' symbol and the letters 'RR'.",
      "An orange diamond featuring a black steam engine locomotive silhouette.",
      "A white vertical rectangle containing black regulatory railroad directives.",
      "An upside-down red triangle featuring bright reflective hazard stripes."
    ],
    correctAnswerIndex: 0,
    explanation: "A round, yellow railroad warning sign with an 'X' and letters 'RR' is placed ahead of public crossings."
  },
  {
    id: 1020,
    question: "An emergency vehicle approaches your car from behind with its flashing lights and sirens active. What is your immediate priority?",
    options: [
      "Pull over to the right-hand edge of the roadway and come to a complete stop.",
      "Maintain your exact lane position and speed to allow them to maneuver around you.",
      "Accelerate immediately and search for a safe cross-intersection to turn away.",
      "Pull over to the nearest left-hand median barrier or open shoulder lane."
    ],
    correctAnswerIndex: 0,
    explanation: "Upon the approach of an emergency vehicle with active emergency lights or sirens, you must safely move your vehicle to the right-hand side of the road and stop completely until they pass."
  },
  {
    id: 1021,
    question: "Under the Ted Foss Move Over Law, what must you do when approaching a stopped emergency vehicle with flashing warning lights on a multi-lane highway?",
    options: [
      "Safely move over one full lane from the vehicle, or reduce your speed significantly if merging is unsafe.",
      "Maintain your speed but drift to the far edge of your lane while flashing your headlights warningly.",
      "Bring your vehicle to a complete stop on the highway lane directly behind their parked patrol unit.",
      "Sound your horn continuously as you pass to alert the officers of your vehicle's lane trajectory."
    ],
    correctAnswerIndex: 0,
    explanation: "The Move Over Law requires drivers to safely move over one full lane from a stopped vehicle with activated flashing lights, or slow down dramatically if lane changes are unsafe."
  },
  {
    id: 1022,
    question: "You are preparing to enter a modern multi-lane traffic roundabout. What is the fundamental yielding rule?",
    options: [
      "Yield to all traffic already inside the roundabout loop, and maintain your chosen lane trajectory.",
      "Vehicles circulating inside must yield to incoming vehicles merging from right-hand entrance ramps.",
      "Accelerate to claim right-of-way if you are traveling in a straight path through the circle.",
      "Signal left and weave frequently between lanes inside the roundabout to navigate exits smoothly."
    ],
    correctAnswerIndex: 0,
    explanation: "When entering a roundabout, you must yield to vehicles already circulating inside. Furthermore, you should never change lanes or pass inside the roundabout loop."
  },
  {
    id: 1023,
    question: "Under Minnesota state law, when is a driver legally permitted to make a left turn at a red traffic signal?",
    options: [
      "Only when turning from a designated one-way street onto another one-way street after making a complete stop.",
      "At any intersection as long as there is no oncoming traffic directly in view or pedestrians crossing.",
      "Only during nighttime hours when operating inside rural agricultural developments with low traffic volumes.",
      "Left turns on red are strictly prohibited at all public intersections under all possible conditions."
    ],
    correctAnswerIndex: 0,
    explanation: "Left turns on red are legal in Minnesota ONLY when turning from a dedicated one-way street onto another designated one-way street, after a full stop and yield."
  },
  {
    id: 1024,
    question: "There is a solid yellow line painted on your side of the center highway line. What does this markings mean?",
    options: [
      "Passing other vehicles is completely prohibited from your side of the roadway.",
      "Passing other vehicles is permitted during dry daylight hours if no hazard is visible.",
      "Passing other vehicles is allowed ONLY to bypass agricultural tractors and slow buses.",
      "The lane is a high-occupancy carpool transit lane closed to normal traffic streams."
    ],
    correctAnswerIndex: 0,
    explanation: "A solid yellow line on your side of the center markings indicates that passing is forbidden for vehicles traveling in your direction."
  },
  {
    id: 1025,
    question: "Under Minnesota law, how long is a child legally required to be secured in an approved, rear-facing child safety seat?",
    options: [
      "Until they are at least two years old, or until they exceed the seat manufacturer's height/weight limits.",
      "Until they are at least twelve months old and weigh more than twenty-five pounds under state limits.",
      "Until they are strictly four years old, regardless of physical torso measurements or occupant weight.",
      "Only if they are seated in the front passenger seat where active front airbags could direct impact."
    ],
    correctAnswerIndex: 0,
    explanation: "Minnesota law requires children to ride in a rear-facing safety seat until they are at least 2 years old, or have outgrown the seat's weight and height specifications."
  },
  {
    id: 1026,
    question: "When is a driver legally permitted to hold a mobile phone in their hand while operating a vehicle on Minnesota roads?",
    options: [
      "It is strictly illegal to hold a mobile phone at any point while driving, including when stopped in traffic.",
      "Only when stopped at a red traffic light or when waiting in a slow-moving construction zone pipeline.",
      "Only to compose or read a text message when traveling at speeds under fifteen miles per hour in town.",
      "Whenever they are operating an interstate vehicle equipped with automated highway lane centering tools."
    ],
    correctAnswerIndex: 0,
    explanation: "Minnesota is a hands-free state. It is illegal to hold a phone in your hand to text, call, scroll, or use apps while operating a vehicle, even when stopped in traffic or at red lights."
  },
  {
    id: 1027,
    question: "You are approaching a vehicle from behind and notice an orange triangular sign with a red border mounted on its rear. What does this indicate?",
    options: [
      "The vehicle is designed to travel at speeds of thirty miles per hour or less.",
      "The vehicle is carrying highly volatile, hazardous, or explosive chemical materials.",
      "The vehicle is a wide-load truck carrying oversized industrial machinery or steel structures.",
      "The vehicle is driven by a minor student driver operating under school transport guidance."
    ],
    correctAnswerIndex: 0,
    explanation: "This emblem represents a slow-moving vehicle, which travels at speeds of 30 mph or less (such as farm tractors, construction sweepers, etc.)."
  },
  {
    id: 1028,
    question: "You are involved in a traffic crash in Minnesota that results in injury, death, or total property damage of $1,000 or more. You must file a crash report within:",
    options: [
      "48 hours of the incident",
      "5 days of the incident",
      "10 days of the incident",
      "30 days of the incident"
    ],
    correctAnswerIndex: 2,
    explanation: "Every driver involved in an accident resulting in injury, death, or total property damage of $1,000 or more must file a crash report with Driver and Vehicle Services within 10 days of the incident."
  },
  {
    id: 1029,
    question: "Under Minnesota law, what is the criminal classification and potential penalty for a driver who flees a peace officer signaling a stop?",
    options: [
      "A serious felony offense that can result in imprisonment, significant fines, and license revocation.",
      "A misdemeanor traffic citation that results in a two hundred dollar fine and a six-month warning.",
      "An administrative registration warning that temporarily puts a hold on license plate sticker renewals.",
      "No official criminal penalty is assessed if the driver did not exceed speed limits during the flight."
    ],
    correctAnswerIndex: 0,
    explanation: "Fleeing a peace officer in a motor vehicle is a serious felony crime in Minnesota, resulting in possible prison sentences of up to three years or more, large fines, and mandatory license loss."
  },
  {
    id: 1030,
    question: "You are parking your vehicle on a downhill slope along a street curb. Which way should you turn your steering wheel?",
    options: [
      "Turn the wheels towards the curb (to the right) to rest the tires against the pavement edge.",
      "Turn the wheels away from the curb (to the left) to guide the vehicle back into the lane flows.",
      "Keep the wheels aligned perfectly straight to prevent side forces on your steering column gear.",
      "The wheel rotation does not matter as long as your emergency parking brake is securely locked."
    ],
    correctAnswerIndex: 0,
    explanation: "When parking downhill (with or without a curb), you must turn your wheels *towards the curb* (to the right) so that if the brakes fail, the vehicle rolls off the roadway."
  },
  {
    id: 1031,
    question: "You are parking your vehicle on an uphill slope along a street curb. Which way should you turn your steering wheel?",
    options: [
      "Turn the wheels away from the curb (to the left) so the tires rest against the curb if it rolls.",
      "Turn the wheels towards the curb (to the right) to keep the vehicle aligned with the grass edge.",
      "Keep the wheels pointing perfectly straight to distribute weight evenly across your front forks.",
      "Turn the wheels toward the active traffic flow to alert merging drivers of your parked chassis."
    ],
    correctAnswerIndex: 0,
    explanation: "When parking uphill with a curb, turn your front wheels *away from the curb* (to the left) so the back of your tire rests against the curb if the car rolls back."
  },
  {
    id: 1032,
    question: "When overtaking a bicyclist traveling in your lane, what is the minimum clearance distance required under Minnesota law?",
    options: [
      "At least 1 foot of clearance",
      "At least 3 feet of clearance",
      "At least 6 feet of clearance",
      "At least 10 feet of clearance"
    ],
    correctAnswerIndex: 1,
    explanation: "Minnesota law requires that you allow a minimum of 3 feet of clearance when passing a bicycle traveling in the same direction."
  },
  {
    id: 1033,
    question: "Under international and state traffic sign standards, an eight-sided octagonal shape is strictly reserved for:",
    options: [
      "Yield indicators",
      "Stop signs",
      "Railroad warnings",
      "Construction alerts"
    ],
    correctAnswerIndex: 1,
    explanation: "An octagonal (eight-sided) shape is exclusively used for stop signs to ensure they are instantly recognizable from both front and back."
  },
  {
    id: 1034,
    question: "You are approaching an intersection and observe a flashing yellow traffic signal. What is the correct response?",
    options: [
      "Stop immediately and wait for the light to cycle through red to green.",
      "Yield right of way as the light is about to turn red within three seconds.",
      "Proceed with caution, slowing down and scanning the crossing lanes carefully.",
      "The intersection is blocked, detour immediately to the right-hand shoulder."
    ],
    correctAnswerIndex: 2,
    explanation: "A flashing yellow light means 'proceed with caution.' You do not need to come to a complete stop, but you must reduce speed and pay close attention to potential hazards."
  },
  {
    id: 1035,
    question: "What does an active flashing red traffic light mean at a public intersection?",
    options: [
      "Treat the light exactly like a stop sign; stop completely, yield, and proceed when clear.",
      "The signal is malfunctioning or broken; proceed through the crossing lanes without stopping.",
      "Yield to oncoming left-turning traffic before exiting the lane without coming to a stop.",
      "Slow your speed below five miles per hour but do not stop if the crossing lane is empty."
    ],
    correctAnswerIndex: 0,
    explanation: "A flashing red light has the exact same legal status as a stop sign. You must come to a complete stop, yield to cross traffic and pedestrians, and proceed when the way is clear."
  },
  {
    id: 1036,
    question: "You are driving through dense fog, heavy rain, or powdery snow during the day. Which headlight setting should you select?",
    options: [
      "High beam headlights to maximize forward penetration of light into the distance.",
      "Low beam headlights to prevent reflecting blinding glare directly back into your eyes.",
      "Parking lights only to keep your battery charged and reduce electrical current load.",
      "Turn off all lights to prevent your vehicle from casting shadows in the white fog."
    ],
    correctAnswerIndex: 1,
    explanation: "Low beams should be used during fog, snow, or heavy rain. High beams will reflect off the water droplets or snowflakes, causing blinding glare and dramatically reducing your vision."
  },
  {
    id: 1037,
    question: "In Minnesota, who is legally required to wear a seat belt in a passenger vehicle?",
    options: [
      "Only the driver and the front-seat passenger.",
      "Only backseat passengers under eighteen years old.",
      "Every occupant of the vehicle in both front and rear seats.",
      "Rear occupants are exempt if the vehicle has side-curtain airbags."
    ],
    correctAnswerIndex: 2,
    explanation: "Minnesota has a mandatory seat belt law. The driver and *all* passengers in both front and back seats must be wearing a seat belt or booster seat."
  },
  {
    id: 1038,
    question: "If you are convicted of operating a motor vehicle in Minnesota without auto insurance, what are the potential penalties?",
    options: [
      "Fines, driver's license suspension, registration revocation, and potential jail time.",
      "A standard warning citation with zero financial impact if you are not in a crash.",
      "A minor ten dollar surcharge added to your next annual plate registration fee.",
      "The state will suspend your vehicle warranty and double your tire replacement costs."
    ],
    correctAnswerIndex: 0,
    explanation: "Driving without motor vehicle insurance in Minnesota is a misdemeanor and can result in fines, license suspension, vehicle registration revocation, and potential jail time."
  },
  {
    id: 1039,
    question: "What physical event occurs when your motor vehicle undergoes 'hydroplaning' during heavy rain?",
    options: [
      "The tires lose all contact with the road and slide on a thin layer of standing water.",
      "The brake pads overheat from water absorption, causing a total loss of stopping force.",
      "The engine stalls because water enters the intake valves of the exhaust pipeline.",
      "The steering column locks up because the power steering system suffers electrical shorting."
    ],
    correctAnswerIndex: 0,
    explanation: "At speeds up to 35 mph or more, wet roads can cause a vehicle's tires to ride on a thin film of water rather than the pavement itself, which is called hydroplaning."
  },
  {
    id: 1040,
    question: "Under Minnesota's Basic Speed Law, you are legally commanded to never drive faster than is:",
    options: [
      "The exact number printed on the closest regulatory speed limit sign.",
      "Reasonable and prudent under existing road, weather, and traffic conditions.",
      "The speed of surrounding highway traffic, even if they are driving over 80 mph.",
      "Exactly 55 mph under any scenario to prevent structural wear of the engine."
    ],
    correctAnswerIndex: 1,
    explanation: "The Basic Speed Law states that you must never drive faster than is reasonable and safe under current conditions, regardless of the posted speed limit."
  },
  {
    id: 1041,
    question: "What does the S.I.P.D.E. defensive driving system stand for?",
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
      "The driver is signaling a right turn.",
      "The driver is signaling a left turn.",
      "The driver is signaling a slow down.",
      "The driver is waving to allow passing."
    ],
    correctAnswerIndex: 0,
    explanation: "A hand and arm pointing straight up indicates a right turn. An arm extended straight out is a left turn, and downward signifies slow/stop."
  },
  {
    id: 1043,
    question: "When does a school zone speed limit law apply in Minnesota?",
    options: [
      "When children are present or when yellow flashing warning beacons are active.",
      "At all hours during standard school holidays and weekend athletic events.",
      "Only when commercial school buses are loading and unloading in the lane.",
      "Specifically during early morning hours regardless of the school calendar."
    ],
    correctAnswerIndex: 0,
    explanation: "School zone speed limits are legally binding during school hours when children are present, or when designated flashing beacons alert drivers."
  },
  {
    id: 1044,
    question: "Another motorist is exhibiting intense road rage and tailgating your vehicle. What is the safest immediate action?",
    options: [
      "Avoid eye contact, remain calm, and drive to a public area if they follow you.",
      "Tap your brakes repeatedly to force them to slow down and stay back from you.",
      "Make aggressive gestures back to demonstrate you are not intimidated by them.",
      "Pull over immediately to the highway shoulder and step out to talk to them."
    ],
    correctAnswerIndex: 0,
    explanation: "De-escalate the situation by avoiding eye contact, staying in your lane, and ignoring provocative actions. Never exit your vehicle or pull over if followed."
  },
  {
    id: 1045,
    question: "You are preparing to make a turn at an intersection. Under Minnesota law, how far in advance should you activate your turn signals?",
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
    question: "What is Minnesota's policy regarding the use of over-the-counter (OTC) medications and driving?",
    options: [
      "Driving while impaired by OTC drugs carries the same legal DWI penalties as alcohol.",
      "OTC medications are always safe to use because they do not require a prescription.",
      "You are permitted to drive under their influence if a pharmacist issues a warning slip.",
      "You are only penalized if your blood concentration level exceeds a 0.08% rating."
    ],
    correctAnswerIndex: 0,
    explanation: "Many allergy, cold, and sleep aids cause severe drowsiness. Impairment from over-the-counter drugs can result in identical DWI arrests and license suspensions."
  },
  {
    id: 1047,
    question: "You are entering a multi-lane roundabout alongside a large semi-truck. What is the safest path to follow?",
    options: [
      "Stay behind the truck and allow it plenty of room, as it may span both lanes to turn.",
      "Squeeze into the space directly next to the truck's bed to pass it before the curve.",
      "Blow your horn continuously to alert the truck driver of your blind-spot position.",
      "Tailgate the truck closely to slipstream through the roundabout and clear traffic."
    ],
    correctAnswerIndex: 0,
    explanation: "Commercial semi-trucks have a wide turning radius and often must span both lanes inside a roundabout loop. Always remain behind them and never attempt to pass them inside the circle."
  },
  {
    id: 1048,
    question: "What is the primary function of a freeway ramp meter traffic signal?",
    options: [
      "To space out merging vehicles to prevent bottlenecks and hold smooth highway flow.",
      "To measure and record the passenger weight metrics of entering commuter cars.",
      "To verify whether your vehicle's license registration is current in the DMV database.",
      "To issue automatic speeding citations to vehicles changing counties on the highway."
    ],
    correctAnswerIndex: 0,
    explanation: "Ramp meters regulate the timed interval of merging vehicles, turning a mass of vehicles into a single-file, sequenced flow, which drastically reduces main-lane accidents."
  },
  {
    id: 1049,
    question: "What color is the standard regulatory, high-visibility warning emblem used on slow-moving vehicles?",
    options: [
      "Reflective orange centered within a dark red border",
      "Bright neon green centered within a dark yellow border",
      "A black-and-white striped horizontal pattern design",
      "A solid yellow pentagon outlining emergency directives"
    ],
    correctAnswerIndex: 0,
    explanation: "The slow-moving vehicle emblem is a dedicated triangular shape of reflective orange centered within a dark red border, designed to alert drivers approaching from behind."
  },
  {
    id: 1050,
    question: "To reduce danger from front seat airbag deployment, children of what age should be positioned in the rear seat?",
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
    question: "What do blue background signs on Minnesota state highways communicate to motorists?",
    options: [
      "Motorist services such as food, gas, lodging, and medical centers.",
      "Recreational activities, state parks, and historic landmark sites.",
      "Strict regulatory directions detailing legal speed limits and lanes.",
      "Upcoming construction zone bypass loops and lane merge barriers."
    ],
    correctAnswerIndex: 0,
    explanation: "Blue signs are motorist service signs that provide direct, high-visibility guidance on gas stations, nearby fast food, hotels, camping, or local medical centers."
  },
  {
    id: 1052,
    question: "What do brown background signs on public roadways represent?",
    options: [
      "Recreational, public park, historic, or cultural interest directories.",
      "General highway speed regulations and school zone traffic limitations.",
      "Temporary winter weather corridor guidelines and snow emergency instructions.",
      "Industrial freight delivery zones and commercial weight limits on routes."
    ],
    correctAnswerIndex: 0,
    explanation: "Brown is the exclusive background color dedicated to pointing drivers toward state parks, public lakes, historic monuments, and recreational campgrounds."
  },
  {
    id: 1053,
    question: "What does keeping a yellow painted line dividing traffic lanes always indicate on highways?",
    options: [
      "Traffic lanes moving in completely opposite geographic directions.",
      "Two lanes of traffic traveling in the exact same lane destination.",
      "A designated bicycle lane boundary restricted from general use.",
      "The outer highway boundary indicating upcoming freeway exit ramps."
    ],
    correctAnswerIndex: 0,
    explanation: "Yellow center lines are universal, high-contrast markers used to divide paths traveling in completely opposite directional flows."
  },
  {
    id: 1054,
    question: "What does a solid white painted line on the outer right-hand edge of a highway represent?",
    options: [
      "A fog line indicating the exact right-hand edge of the paved highway road.",
      "A lane change helper that encourages frequent passing in rural developments.",
      "A warning sign indicating a steep slope is within one hundred feet of lanes.",
      "A designated lane boundary reserved exclusively for agricultural vehicles."
    ],
    correctAnswerIndex: 0,
    explanation: "A solid white edge line helps drivers remain on the main pavement during low-visibility conditions like snowstorms, dense fog, or dark rainy nights."
  },
  {
    id: 1055,
    question: "During which weather period is roadway traction most severely compromised right as wet weather begins?",
    options: [
      "During the first few minutes of rain, as road oil and dust rise to the surface.",
      "After a heavy rainstorm has poured on the pavement for several consecutive hours.",
      "Directly after the stormwater drainage grates have fully cleared the shoulder.",
      "When the ambient air temperature drops to exactly fifty-five degrees Fahrenheit."
    ],
    correctAnswerIndex: 0,
    explanation: "A dry road accumulates a film of grease, motor oil, and dust particles. Right as rain first starts, it mixes on the hot surface to form a highly slick emulsion."
  },
  {
    id: 1056,
    question: "Your vehicle begins to slide or fishtail on a patch of winter black ice. What is the safest response?",
    options: [
      "Ease off the gas, steer smoothly in the direction of the skid, and avoid braking.",
      "Slam hard on your brakes and turn your steering wheel back and forth rapidly.",
      "Accelerate firmly to force your drive tires to spin and bite through the ice.",
      "Shift the transmission directly into reverse gears to lock up the slide path."
    ],
    correctAnswerIndex: 0,
    explanation: "Never panic. Release the gas, do not slam on the conventional brakes, and look/steer in the exact direction you want the front of your car to go."
  },
  {
    id: 1057,
    question: "You accidentally collide with and damage an unattended parked vehicle. If you cannot find the owner, what must you do?",
    options: [
      "Leave a note with your name, address, phone number, and report the crash to the police.",
      "Wait for exactly five minutes, and leave without leaving details if no one appears.",
      "Take a photo of their license plate for your private records and leave the scene.",
      "Leave immediately, as minor scratches do not carry any legal notification duties."
    ],
    correctAnswerIndex: 0,
    explanation: "Failing to leave your identification details on an unattended crashed vehicle is a criminal hit-and-run offense in Minnesota."
  },
  {
    id: 1058,
    question: "What is a main cause and risk factor for toxic carbon monoxide accumulation inside a motor vehicle?",
    options: [
      "Running the engine in a closed garage, or driving with a damaged, leaking exhaust system.",
      "Operating a vehicle with low tire pressures or using low-grade motor oil in winter.",
      "Allowing the windshield washer fluid levels to fall below minimum recommended guidelines.",
      "Driving on high-altitude mountain pathways with your cabin climate fans set to high."
    ],
    correctAnswerIndex: 0,
    explanation: "Carbon monoxide is an odorless, invisible, deadly gas. Never warm your car in a closed garage, and ensure a damaged muffler/exhaust system is replaced immediately."
  },
  {
    id: 1059,
    question: "What do green background signs on standard freeways communicate to motorists?",
    options: [
      "Direction, navigation guidance, mileage distances, and exit destinations.",
      "Upcoming traffic hazards, lane merges, and sharp curve limits on roads.",
      "Strict legal speed regulations and school pedestrian zones on lanes.",
      "Designated public bicycle pathways and multi-use recreational trail networks."
    ],
    correctAnswerIndex: 0,
    explanation: "Green signs are navigational guide signs. They show upcoming exits, highway mileage numbers, and state geography routes."
  },
  {
    id: 1060,
    question: "What does keeping a yellow steady arrow traffic signal represent for left turns?",
    options: [
      "The protected turn phase is ending; prepare to yield to oncoming traffic or stop.",
      "Oncoming lanes have completed a full stop, scan lanes and accelerate through.",
      "Your turn has direct right-of-way priority over cars turning right from cross roads.",
      "The signal is malfunctioning; treat the intersection as an uncontrolled yield."
    ],
    correctAnswerIndex: 0,
    explanation: "A steady yellow turn arrow warns you that the green protected arrow is ending. You must stop if it is safe to do so, or complete your turn safely if already inside the intersection."
  },
  {
    id: 1061,
    question: "Under Minnesota traffic laws, when are you legally permitted to pass another vehicle on the right side?",
    options: [
      "When the vehicle ahead is signaling a left turn, and there is a fully paved lane to use.",
      "Whenever you are running late and want to bypass slower cars on a two-lane state highway.",
      "By using the unpaved gravel shoulder as a travel lane to maintain your speed.",
      "Passing on the right is strictly illegal under every possible roadway scenario."
    ],
    correctAnswerIndex: 0,
    explanation: "You can pass on the right only when the vehicle parsed is making a left turn, and there is a fully paved lane to the right, or on multi-lane highways without exiting the paved surface."
  },
  {
    id: 1062,
    question: "What is the penalty for a second or subsequent hands-free cell phone violation in Minnesota?",
    options: [
      "A criminal misdemeanor fine of $275 plus additional court administration costs.",
      "A standard traffic warning slip with zero legal impact on your permanent record.",
      "A temporary seven-day suspension of your vehicle's license plate registration.",
      "A court order to perform forty hours of traffic school training on weekends."
    ],
    correctAnswerIndex: 0,
    explanation: "To combat texting while driving, Minnesota imposes a heavy $275 fine for any hands-free cell phone violations after your first conviction."
  },
  {
    id: 1063,
    question: "You are approaching an intersection with no painted pavement lines. What is the rule of pedestrian right of way?",
    options: [
      "Pedestrians have right of way at all crossings, both marked and unmarked.",
      "Pedestrians only have right of way when crossing inside painted white pavement lanes.",
      "Pedestrians must yield right of way to vehicles unless a school crossing guard holds a sign.",
      "Pedestrians have right of way only during school recess hours in residential developments."
    ],
    correctAnswerIndex: 0,
    explanation: "Drivers must yield to a pedestrian crossing the road within any marked crosswalk or at any intersection, even if there are no painted lines on the asphalt (unmarked crosswalk)."
  },
  {
    id: 1064,
    question: "What type of highway sign features a vertical white rectangular shape with black lettering?",
    options: [
      "A regulatory sign conveying specific traffic laws, speed limits, or restrictions.",
      "A guide sign displaying scenic motorist directories or fuel and lodging outlets.",
      "A temporary warning sign detailing high-risk construction bypass loops ahead.",
      "An informational sign indicating cultural landmarks and public recreational parks."
    ],
    correctAnswerIndex: 0,
    explanation: "White vertical rectangles are regulatory signs indicating laws. Examples include 'Speed Limit 55', 'No Turn on Red', and 'One Way'."
  },
  {
    id: 1065,
    question: "What does Minnesota's official policy state regarding the 'Zipper Merge' in construction zones?",
    options: [
      "Drivers should use both lanes fully until the merge point, then take sequential turns.",
      "Drivers should merge into a single lane as soon as they see a construction warning sign.",
      "The vehicle in the left-hand lane has automatic right of way over merging cars.",
      "Drivers should speed up in the closing lane to force their way into flowing traffic."
    ],
    correctAnswerIndex: 0,
    explanation: "The Zipper Merge keeps both lanes fully used as long as possible. This reduces traffic backups by up to 40% and ensures stable flowing speeds on construction approach vectors."
  },
  {
    id: 1066,
    question: "You are parking your vehicle uphill on a street that has no physical stone curb. Which way should you turn your wheels?",
    options: [
      "Turn the front wheels toward the right (shoulder) so it rolls off the pavement.",
      "Turn the front wheels toward the left (center lane) to brace against the roadway.",
      "Keep the front wheels aligned perfectly straight to avoid strain on the gearboxes.",
      "Turn the front wheels outward toward the active traffic lanes to block rolling."
    ],
    correctAnswerIndex: 0,
    explanation: "When parking uphill *without* a curb, turn your front wheels to the right. If your vehicle rolls back, it will roll off the roadway, rather than turning into oncoming lane traffic."
  },
  {
    id: 1067,
    question: "A high-visibility yellow five-sided pentagonal traffic sign is strictly reserved for identifying:",
    options: [
      "School zones, school crosswalk buffers, and student pedestrian safety corridors.",
      "Hospital emergency access routes, ambulance terminals, and public clinics.",
      "A public railway crossing gate assembly featuring reflective warning stripes.",
      "County or state boundary limits detailing speed restriction enforcement."
    ],
    correctAnswerIndex: 0,
    explanation: "Pentagon (five-sided) signs indicate school zones or school pedestrian crossing paths. Slow down and watch carefully for children."
  },
  {
    id: 1068,
    question: "Your vehicle's brakes are backed by an electronic Anti-Lock Braking System (ABS). How should you brake in an emergency?",
    options: [
      "Apply firm, constant pressure to the brake pedal and hold it down; do not pump.",
      "Pump the brake pedal as rapidly as possible to prevent the calipers from locking.",
      "Apply light intermittent pressure while pulling the mechanical emergency handbrake line.",
      "Feather the brake pedal slowly while switching the ignition key to the off positions."
    ],
    correctAnswerIndex: 0,
    explanation: "With ABS, pumping the brake overrides the computer system. Simply plant your foot firmly on the pedal and steer. ABS automatically pumps the brakes for you to prevent lock-ups."
  },
  {
    id: 1069,
    question: "Your vehicle's accelerator pedal suddenly jams and sticks down. What is your first reaction priority?",
    options: [
      "Shift to Neutral, apply firm brakes, and steer safely off the roadway shoulder.",
      "Slam the transmission gear level into Park and turn off the engine ignition switch.",
      "Pump the gas pedal aggressively to dislodge the mechanical linkage spring.",
      "Open your driver's door and check your wheel and tire alignments visually."
    ],
    correctAnswerIndex: 0,
    explanation: "Shifting to Neutral allows the engine to rev safely while cutting power to the drive wheels. Once in neutral, brake firmly and navigate the car off the highway safely before turning off the engine."
  },
  {
    id: 1070,
    question: "You experience a sudden, violent tire blowout while driving at high speed on the freeway. What is the safest response?",
    options: [
      "Keep a firm grip on the steering wheel, stay straight, ease off gas, and brake gently.",
      "Slam hard on your brakes immediately and steer away from the side of the blown tire.",
      "Mash your gas pedal to increase velocity and stabilize the vehicle's yaw rotation.",
      "Shift into a lower gear immediately to lock up the remaining tires on the axle."
    ],
    correctAnswerIndex: 0,
    explanation: "Sudden braking during a blowout causes a complete rollover or violent swerve. Stay calm, grip the wheel, let the car coast to a slower safe speed, and pull on the shoulder safely."
  },
  {
    id: 1071,
    question: "When is a motorist permitted to drive inside a designated public bicycle lane in Minnesota?",
    options: [
      "Only when preparing to make a right turn, after checking blind spots and yielding.",
      "Whenever normal travel lanes are congested with traffic during rush hour commutes.",
      "To park your vehicle temporarily while picking up package deliveries from stores.",
      "Motorists are strictly prohibited from entering a painted bicycle lane under any conditions."
    ],
    correctAnswerIndex: 0,
    explanation: "You must never drive within a bicycle lane except when entering a private driveway or preparing for a legal turn, during which you must check your blind spots and yield to active cyclists."
  },
  {
    id: 1072,
    question: "What does keeping a flashing yellow arrow traffic signal indicate for turns?",
    options: [
      "Left turns are allowed, but you must yield to oncoming traffic and crossing pedestrians.",
      "Left turns are protected; you have right of way over oncoming lanes of traffic.",
      "You must come to a complete stop and wait for a solid green arrow signal.",
      "The signal head is broken; treat the intersection as a standard four-way stop."
    ],
    correctAnswerIndex: 0,
    explanation: "A flashing yellow arrow means left turns are permitted but unprotected. Oncoming traffic still has a green light and has right of way."
  },
  {
    id: 1073,
    question: "Under Minnesota law, if you are convicted of driving at a speed of 100 mph or above, what is the mandatory penalty?",
    options: [
      "Your driving privileges will be revoked for a minimum duration of six months.",
      "Your driver's license will be suspended for fifteen days and you will pay a small fee.",
      "Your vehicle's registration plate will be permanently confiscated and melted down.",
      "You will be ordered to complete fifty hours of county roadway trash cleanup."
    ],
    correctAnswerIndex: 0,
    explanation: "Driving at or over 100 mph is a highly reckless offense. In addition to heavy speeding fines, it carries a mandatory license revocation of at least six months."
  },
  {
    id: 1074,
    question: "When is it legal to drive on the paved right-hand shoulder of a Minnesota highway?",
    options: [
      "Only during vehicle emergencies, or when directed by pavement flags or police.",
      "To pass a slower vehicle traveling in your lane on a high-speed rural route.",
      "Whenever you are preparing to turn right at any crossroads within five hundred feet.",
      "During rush hour periods to exit the freeway lanes into a nearby service ramp."
    ],
    correctAnswerIndex: 0,
    explanation: "The shoulder is strictly not a travel lane. You may only drive on it for safe emergency stopping or under official emergency lane redirection directives."
  },
  {
    id: 1075,
    question: "For teen drivers during the first six months of holding a provisional license, what is the passenger restriction?",
    options: [
      "Only one passenger under age 20 is allowed, unless they are immediate family or with an adult.",
      "No passenger limit applies as long as everyone in the vehicle wears seat belts.",
      "Only two passengers of any age are permitted, regardless of adult accompaniment.",
      "All non-family passengers under twenty-one are strictly banned from riding inside."
    ],
    correctAnswerIndex: 0,
    explanation: "Minnesota limits teen passenger numbers to reduce distractions and risk factors for new, young drivers during their first 6 months."
  },
  {
    id: 1076,
    question: "What are the nighttime driving restrictions for a teen driver during their first six months of licensure?",
    options: [
      "Prohibited from driving between Midnight and 5 AM, with employment and school exceptions.",
      "Prohibited from driving after sunset on any public interstates or high-speed bypasses.",
      "Prohibited from driving during weekend overnight hours unless they get parent sign-off.",
      "There are no hourly restrictions for teenagers holding Class D provisional licenses."
    ],
    correctAnswerIndex: 0,
    explanation: "To keep new drivers safe, driving between midnight and 5:00 AM is prohibited for the first 6 months, with clear exceptions for employment and school-sanctioned activities."
  },
  {
    id: 1077,
    question: "If you are under eighteen years of age, how long must you hold an instruction permit before taking your road test?",
    options: [
      "For at least three consecutive months",
      "For at least six consecutive months",
      "For at least twelve consecutive months",
      "For at least eighteen consecutive months"
    ],
    correctAnswerIndex: 1,
    explanation: "If you are under 18 years old, you must hold a valid instruction permit for at least 6 consecutive months before taking your DMV practical road examination."
  },
  {
    id: 1078,
    question: "What does Minnesota law specify regarding decorations or decals hanging from your rearview mirror?",
    options: [
      "It is illegal to suspend any items that obstruct the driver's clear forward view.",
      "You may hang any lightweight items as long as they are smaller than twelve inches.",
      "Hanging items are permitted on city streets but forbidden on high-speed roadways.",
      "Only vehicle scent air fresheners are permitted to be hung from rearview mounts."
    ],
    correctAnswerIndex: 0,
    explanation: "Any suspension from the rearview mirror or windshield sticker placement that inhibits a clear 180-degree forward vision is illegal and subject to visual obstruction citations."
  },
  {
    id: 1079,
    question: "What is the minimum legal property damage liability insurance coverage amount required in Minnesota?",
    options: [
      "At least $10,000 in coverage",
      "At least $25,000 in coverage",
      "At least $50,000 in coverage",
      "At least $100,000 in coverage"
    ],
    correctAnswerIndex: 0,
    explanation: "Under Minnesota's mandatory auto insurance limits, drivers must buy at least $10,000 of coverage for destruction of property of others."
  },
  {
    id: 1080,
    question: "What does the hazardous night driving term 'overdriving your headlights' mean?",
    options: [
      "Operating at a speed where your vehicle's total stopping distance exceeds your headlight beam.",
      "Installing high-intensity aftermarket bulbs that overwhelm your vehicle's alternator loop.",
      "Driving with your high beams active inside well-lit urban districts during daylight.",
      "Adjusting your headlight beams too high, throwing light above the horizon line."
    ],
    correctAnswerIndex: 0,
    explanation: "If you cannot stop within the clear distance shown by your headlight beam, you will hit an obstacle before you have time to react."
  },
  {
    id: 1081,
    question: "When following an active emergency response vehicle with sirens running, what is the minimum distance you must keep?",
    options: [
      "At least 150 feet behind",
      "At least 300 feet behind",
      "At least 500 feet behind",
      "At least 1,000 feet behind"
    ],
    correctAnswerIndex: 2,
    explanation: "You must remain at least 500 feet behind any active fire truck, ambulance, or police emergency response vehicle that has its warning lights or sirens active."
  },
  {
    id: 1082,
    question: "What is the statutory Blood Alcohol Concentration (BAC) legal limit for operators of commercial motor vehicles in Minnesota?",
    options: [
      "0.02% or higher",
      "0.04% or higher",
      "0.08% or higher",
      "0.10% or higher"
    ],
    correctAnswerIndex: 1,
    explanation: "While the passenger vehicle limit is 0.08%, commercial vehicle operators are held to a much stricter safety standard and are legally impaired at 0.04% BAC."
  },
  {
    id: 1083,
    question: "Under Minnesota safety regulations, what is the minimum legal tire tread depth for passenger cars?",
    options: [
      "At least 1/32 of an inch",
      "At least 1/16 of an inch",
      "At least 1/8 of an inch",
      "At least 1/4 of an inch"
    ],
    correctAnswerIndex: 1,
    explanation: "If tire tread depth is less than 1/16 of an inch, it is legally bald, extremely prone to sliding, and highly illegal to operate on Minnesota public pavements."
  },
  {
    id: 1084,
    question: "If you change your residential address within the state of Minnesota, how long do you have to update your record?",
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
    id: 1085,
    question: "An overhead lane signal displays a solid Red X over your lane block. What does this indicate?",
    options: [
      "Your lane is closed or oncoming; you must safely exit the lane immediately.",
      "Your lane is a restricted toll lane reserved for high-occupancy carpools.",
      "Your lane is undergoing sweeping; maintain speed but prepare to merge ahead.",
      "Your lane is an active construction zone; limit your speed to thirty miles per hour."
    ],
    correctAnswerIndex: 0,
    explanation: "A steady red X overhead indicates that the lane is strictly closed to your stream of traffic. You must exit it immediately for safety."
  },
  {
    id: 1086,
    question: "A public transit bus inside a bus stop signaling bay has activated its signal. What are you required to do?",
    options: [
      "Yield the right of way to the transit bus and allow it to merge back in.",
      "Accelerate immediately to get around the bus frame before it pulls out of dock.",
      "Sound your vehicle's horn twice and proceed past the bus lane at standard speed.",
      "Change travel lanes to the left to block oncoming cars from slowing down."
    ],
    correctAnswerIndex: 0,
    explanation: "Minnesota statutes require drivers to yield the right-of-way to active municipal transit buses attempting to re-enter traffic lanes from a bus stop."
  },
  {
    id: 1087,
    question: "When is a driver permitted to cross double solid white lines painted on a highway?",
    options: [
      "Crossing double solid white lines is completely prohibited under all conditions.",
      "Only during nighttime hours when operating inside rural development zones.",
      "To overtake agricultural vehicles traveling below twenty-five miles per hour.",
      "Specifically when preparing to exit the highway lanes into a rest stop zone."
    ],
    correctAnswerIndex: 0,
    explanation: "Double solid white lines indicate that lane changes are highly dangerous and completely prohibited. You must never cross them."
  },
  {
    id: 1088,
    question: "To signal your intention to turn using standard hand signals, how should you position your left arm?",
    options: [
      "Extend your left arm straight out horizontally through the driver side window.",
      "Raise your left arm up at a ninety-degree angle through your side window.",
      "Point your left arm downward at a ninety-degree angle toward the asphalt land.",
      "Extend your left arm out and wave your hand forward in slow, circular motions."
    ],
    correctAnswerIndex: 0,
    explanation: "An arm extended straight out horizontally is the universal hand signal for initiating a left turn."
  },
  {
    id: 1089,
    question: "What is the penalty fee for a first-time violation of Minnesota's hands-free cell phone driving law?",
    options: [
      "A principal fine of $50 plus standard local court fees and surcharges.",
      "A principal fine of $120 plus standard local court fees and surcharges.",
      "A principal fine of $275 plus standard local court fees and surcharges.",
      "A simple visual warning which is logged into your personal driving history."
    ],
    correctAnswerIndex: 0,
    explanation: "Under Minnesota law, the first citation for a hands-free phone text or call violation is a $50 fine plus court costs."
  },
  {
    id: 1090,
    question: "What is the default legal speed limit on standard two-lane rural highways in Minnesota unless posted otherwise?",
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
    id: 1091,
    question: "What does keeping a flashing yellow light signal at a crosswalk represent for drivers?",
    options: [
      "A pedestrian has activated the crossing button; slow down and prepare to stop.",
      "The crosswalk is temporarily closed to pedestrians; maintain your urban speed.",
      "You are granted an exclusive right of way to proceed without looking for hazards.",
      "A minor school zone starts; you must check your rearview mirror for student buses."
    ],
    correctAnswerIndex: 0,
    explanation: "A flashing yellow crosswalk light tells you a pedestrian is actively entering or crossing, requiring extreme care."
  },
  {
    id: 1092,
    question: "If a motorist flees a peace officer and the pursuit results in bodily injury, the driver is guilty of:",
    options: [
      "A severe felony offense carrying high-tier imprisonment and huge cash fines.",
      "A gross misdemeanor charge resulting in the loss of vehicle license plates.",
      "A misdemeanor citation carrying a five hundred dollar penalty and a warning.",
      "An administrative infraction that suspends the vehicle warranty for five years."
    ],
    correctAnswerIndex: 0,
    explanation: "Fleeing an officer resulting in physical injury elevates the crime to a high-class felony with severe penalties."
  },
  {
    id: 1093,
    question: "When turning right at an intersection showing a solid red signal light, what is the legal sequence?",
    options: [
      "Come to a complete stop, look for pedestrians and cross-traffic, then turn if clear.",
      "Slow down below five miles per hour, yield to cars on the left, then turn.",
      "Keep moving at standard speed if your turn lane is physically painted off from lanes.",
      "Right turns on solid red signal lights are strictly prohibited in Minnesota."
    ],
    correctAnswerIndex: 0,
    explanation: "You must always stop fully at red lights. After verifying it is safe and that no pedestrians or cyclists are crossing, you may turn right."
  },
  {
    id: 1094,
    question: "What is the purpose of a shared center lane marked by solid and dashed yellow lines?",
    options: [
      "To allow vehicles from both directions to make left turns from the lane.",
      "To act as a passing lane for high-speed cars to overtake slow highway vehicles.",
      "To provide a dedicated lane for public transit buses to bypass traffic backups.",
      "To serve as an emergency parking lane for disabled vehicles awaiting tow trucks."
    ],
    correctAnswerIndex: 0,
    explanation: "Shared center lanes are restricted entirely to starting left turn maneuvers and must never be used for passing or general travel."
  },
  {
    id: 1095,
    question: "Under Minnesota law, when is it illegal to use high beam headlights?",
    options: [
      "When driving on well-lit city streets or when close ahead/behind other cars.",
      "Whenever your vehicle is navigating through heavy snowstorms or downpours.",
      "When operating on unfamiliar two-lane rural highways during midnight hours.",
      "High beam headlight use is legal on any roadway and at any hour of the day."
    ],
    correctAnswerIndex: 0,
    explanation: "Using high beams in lit cities or near other drivers blinds them, creating severe safety risks."
  },
  {
    id: 1096,
    question: "You are traveling on a single-lane highway and approach a stopped utility truck with flashing amber lights. You must:",
    options: [
      "Reduce speed significantly and proceed with cautious buffering around them.",
      "Maintain your speed and hold your track closely to minimize passing margins.",
      "Blow your horn and flash your lights to warn the worker of your lane arrival.",
      "Slam on your brakes and wait for oncoming traffic to clear before stopping."
    ],
    correctAnswerIndex: 0,
    explanation: "Approach stopped utility or maintenance vehicles with activated amber lights at a reduced, safe speed."
  },
  {
    id: 1097,
    question: "Under Minnesota's hands-free driving law, which handheld phone activity is legally permitted?",
    options: [
      "Handheld phone activity is completely prohibited while operating a vehicle.",
      "Typing a short message if the vehicle is stopped at a red traffic signal.",
      "Holding the device in your hand to view GPS route maps while driving slow.",
      "Answering a voice call by holding the phone directly near your ear on walks."
    ],
    correctAnswerIndex: 0,
    explanation: "Except for certain emergency calls, you are legally forbidden from holding a cell phone for any reason while driving."
  },
  {
    id: 1098,
    question: "When parallel parking your vehicle alongside a curb, what is the maximum legal distance allowed?",
    options: [
      "No further than 6 inches from the curb pavement edge.",
      "No further than 12 inches from the curb pavement edge.",
      "No further than 18 inches from the curb pavement edge.",
      "No further than 24 inches from the curb pavement edge."
    ],
    correctAnswerIndex: 1,
    explanation: "Your parked wheels must be within 12 inches of the curb to keep the driving lane clear and safe."
  },
  {
    id: 1099,
    question: "If an underage driver under age 18 gets an alcohol violation, how does it affect their driving record?",
    options: [
      "It remains on their record, delays full licensing, and carries heavy reinstatements.",
      "It is automatically expunged after they pay a minor, one-time fifty dollar fine.",
      "It only affects their record if the incident resulted in serious property damage.",
      "It is recorded as a warning that is permanently hidden from auto insurers."
    ],
    correctAnswerIndex: 0,
    explanation: "Alcohol offenses under age 18 trigger major long-term license delays, classes, exams, and massive reinstatement fees ($680)."
  },
  {
    id: 1100,
    question: "You are preparing to make a lane change on a multi-lane highway. What is the safest visual sequence?",
    options: [
      "Check your mirrors, activate signally, look over your shoulder, then merge.",
      "Activate signally, look in your side mirrors, then merge into the next lane.",
      "Look over your shoulder, verify lanes are open, then emerge with flashers.",
      "Check your rearview mirror, decelerate slightly, then weave into the gap."
    ],
    correctAnswerIndex: 0,
    explanation: "A safe lane-change sequence is: check mirrors, activate turn signal, perform direct head shoulder check of your blind spot, then complete the lane transition smoothly."
  }
];
