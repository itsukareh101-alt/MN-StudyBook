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
    question: "A Minnesota resident is moving from another state with a valid license. How long generally remains to obtain a Minnesota license?",
    options: [
      "60 days after becoming a Minnesota resident",
      "30 days after becoming a Minnesota resident",
      "90 days after becoming a Minnesota resident",
      "120 days after becoming a Minnesota resident"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Driver’s Manual supports this answer: 60 days after becoming a Minnesota resident."
  },
  {
    id: 1002,
    question: "A Minnesota resident is moving from another state with a commercial license. How long generally remains to obtain the Minnesota commercial license?",
    options: [
      "60 days after becoming a Minnesota resident",
      "90 days after becoming a Minnesota resident",
      "120 days after becoming a Minnesota resident",
      "30 days after becoming a Minnesota resident"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Driver’s Manual supports this answer: 30 days after becoming a Minnesota resident."
  },
  {
    id: 1003,
    question: "A driver whose Minnesota license expired more than one year but less than five years must generally complete which tests before applying again?",
    options: [
      "Written and road tests before applying",
      "Vision and skills tests before applying",
      "Written and vision tests before applying",
      "Road and vision tests before applying"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Driver’s Manual supports this answer: Written and vision tests before applying."
  },
  {
    id: 1004,
    question: "A new Minnesota driver who has never been licensed must generally complete which sequence?",
    options: [
      "Road test, permit, vision test, then written test",
      "Written test, vision test, permit, then road test",
      "Vision test, road test, permit, then written test",
      "Permit, road test, written test, then vision test"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Driver’s Manual supports this answer: Written test, vision test, permit, then road test."
  },
  {
    id: 1005,
    question: "For an applicant under 18 taking the Minnesota written test, what minimum age is listed?",
    options: [
      "At least 15 years old when applying",
      "At least 16 years old when applying",
      "At least 14 years old when applying",
      "At least 17 years old when applying"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Driver’s Manual supports this answer: At least 15 years old when applying."
  },
  {
    id: 1006,
    question: "A 17-year-old wants a provisional license. How long must the instruction permit generally have been held?",
    options: [
      "Three months without qualifying convictions",
      "Four months without qualifying convictions",
      "Nine months without qualifying convictions",
      "Six months without qualifying convictions"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Driver’s Manual supports this answer: Six months without qualifying convictions."
  },
  {
    id: 1007,
    question: "A 19-year-old applying for a road test must generally have held an instruction permit for at least how long?",
    options: [
      "Nine months before the road test",
      "Twelve months before the road test",
      "Three months before the road test",
      "Six months before the road test"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Driver’s Manual supports this answer: Three months before the road test."
  },
  {
    id: 1008,
    question: "A Minnesota driver is preparing for a road test. Which vehicle condition is specifically required?",
    options: [
      "Working seats, locks, air conditioning and speakers",
      "Working headlights, taillights, brake lights and signals",
      "Working windows, mirrors, horn and radio controls",
      "Working tires, heater, wipers and interior lighting"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Driver’s Manual supports this answer: Working headlights, taillights, brake lights and signals."
  },
  {
    id: 1009,
    question: "Before a road test, what insurance proof may be accepted according to the manual?",
    options: [
      "An original card, declaration page or electronic proof here",
      "A handwritten note, receipt or verbal confirmation only here",
      "A registration card, title document or repair invoice only",
      "A bank statement, lease agreement or utility bill only"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Driver’s Manual supports this answer: An original card, declaration page or electronic proof here."
  },
  {
    id: 1010,
    question: "A driver changes legal name through marriage. What must be presented?",
    options: [
      "A handwritten statement explaining the legal name change here",
      "A current vehicle registration showing the legal name change",
      "A school record showing the legal name change here",
      "Certified documentation proving the legal name change when appropriate"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Driver’s Manual supports this answer: Certified documentation proving the legal name change when appropriate."
  },
  {
    id: 1011,
    question: "A driver is applying for a REAL ID. Which additional residency evidence is required?",
    options: [
      "Three documents proving current Minnesota residency",
      "Four documents proving current Minnesota residency",
      "Two documents proving current Minnesota residency",
      "One document proving current Minnesota residency"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Driver’s Manual supports this answer: Two documents proving current Minnesota residency."
  },
  {
    id: 1012,
    question: "A driver under 18 has an instruction permit. Which phone-use rule applies?",
    options: [
      "Handheld phone use is permitted whenever stopped at lights",
      "Phone use is prohibited except calling 911 during emergencies",
      "Hands-free phone use is always permitted while driving here",
      "Phone use is permitted whenever traffic is moving slowly"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Driver’s Manual supports this answer: Phone use is prohibited except calling 911 during emergencies."
  },
  {
    id: 1013,
    question: "A driver is stopped in traffic and wants to text. Under Minnesota law, what applies?",
    options: [
      "Texting remains prohibited while stopped in traffic under these conditions",
      "Texting becomes legal whenever the vehicle is completely stopped here",
      "Texting is legal whenever hazard lights are activated when appropriate",
      "Texting is legal whenever the transmission is placed in park"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Driver’s Manual supports this answer: Texting remains prohibited while stopped in traffic under these conditions."
  },
  {
    id: 1014,
    question: "A driver wants to use a phone for an immediate threat to life and safety. What exception applies?",
    options: [
      "Hand-held use is allowed whenever another driver requests assistance",
      "Hand-held use is allowed whenever navigation information is needed",
      "Hand-held use is allowed whenever traffic is temporarily stopped",
      "Hand-held use is allowed to obtain emergency assistance here"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Driver’s Manual supports this answer: Hand-held use is allowed to obtain emergency assistance here."
  },
  {
    id: 1015,
    question: "A driver is approaching a stopped school bus with flashing red lights. How far away must the driver stop?",
    options: [
      "At least 30 feet from the school bus",
      "At least 50 feet from the school bus",
      "At least 20 feet from the school bus",
      "At least 10 feet from the school bus"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Driver’s Manual supports this answer: At least 20 feet from the school bus."
  },
  {
    id: 1016,
    question: "A driver approaches a school bus with flashing red lights on a divided highway. When may the driver continue?",
    options: [
      "When traveling toward the bus on the divided highway",
      "When traveling opposite the bus on the divided highway",
      "When traveling behind the bus on the divided highway",
      "When traveling beside the bus on the divided highway"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Driver’s Manual supports this answer: When traveling opposite the bus on the divided highway."
  },
  {
    id: 1017,
    question: "A school bus has flashing red lights but its stop arm does not extend. What must approaching drivers do?",
    options: [
      "Stop at least 20 feet from the bus here",
      "Continue carefully because no stop arm extends when appropriate",
      "Stop only if children are visible beside the bus",
      "Continue unless the driver sees a crossing guard here"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Driver’s Manual supports this answer: Stop at least 20 feet from the bus here."
  },
  {
    id: 1018,
    question: "A driver sees a yellow diamond warning sign. What general message does it provide?",
    options: [
      "A regulation requiring a specific driver action when appropriate",
      "A service location such as fuel or lodging nearby",
      "A destination guide showing routes and distances ahead here",
      "A warning about conditions or hazards ahead when appropriate"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Driver’s Manual supports this answer: A warning about conditions or hazards ahead when appropriate."
  },
  {
    id: 1019,
    question: "A driver sees a white rectangular sign displaying a speed limit. What sign category is this?",
    options: [
      "Guide sign identifying a destination or route",
      "Service sign identifying a nearby facility here",
      "Regulatory sign stating a traffic requirement here",
      "Warning sign identifying a roadway hazard here"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Driver’s Manual supports this answer: Regulatory sign stating a traffic requirement here."
  },
  {
    id: 1020,
    question: "A driver sees an orange roadway sign approaching a construction area. What does it generally indicate?",
    options: [
      "Emergency medical services and hospital locations ahead",
      "Temporary work or maintenance conditions ahead here",
      "Permanent recreational or cultural attractions ahead here",
      "Permanent regulatory requirements for lane movement ahead"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Driver’s Manual supports this answer: Temporary work or maintenance conditions ahead here."
  },
  {
    id: 1021,
    question: "A driver sees a blue roadway sign near an interstate. What type of information is most likely provided?",
    options: [
      "Motorist services such as food, fuel or lodging here",
      "Construction warnings such as lane shifts or closures here",
      "Regulatory commands such as speed limits or turn restrictions",
      "Recreational destinations such as parks, lakes or historic sites"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Driver’s Manual supports this answer: Motorist services such as food, fuel or lodging here."
  },
  {
    id: 1022,
    question: "A driver sees a brown roadway sign while traveling. What information is most likely being provided?",
    options: [
      "Temporary construction or maintenance information under these conditions",
      "Motorist service information such as fuel or lodging",
      "Regulatory information such as speed or lane restrictions",
      "Recreational or cultural destination information under these conditions"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Driver’s Manual supports this answer: Recreational or cultural destination information under these conditions."
  },
  {
    id: 1023,
    question: "At an uncontrolled intersection, two vehicles arrive at about the same time. Who generally yields?",
    options: [
      "The faster vehicle yields to the slower vehicle under these conditions here",
      "The larger vehicle yields to the smaller vehicle under these conditions here",
      "The driver on the left yields to the driver on the right",
      "The driver on the right yields to the driver on the left"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Driver’s Manual supports this answer: The driver on the left yields to the driver on the right."
  },
  {
    id: 1024,
    question: "At an uncontrolled T-intersection, which driver generally must yield?",
    options: [
      "The driver closest to the intersection yields to everyone here",
      "The driver on the terminating road yields to through traffic",
      "The driver on the through road yields to terminating traffic",
      "The driver traveling faster yields to the other vehicle here"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Driver’s Manual supports this answer: The driver on the terminating road yields to through traffic."
  },
  {
    id: 1025,
    question: "A driver approaches a green circular signal and wants to turn left. What must the driver do?",
    options: [
      "Yield to oncoming traffic and pedestrians before turning when appropriate",
      "Turn immediately because the green signal gives complete priority here",
      "Wait until the signal turns red before completing the turn",
      "Treat the intersection exactly like an uncontrolled intersection when appropriate"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Driver’s Manual supports this answer: Yield to oncoming traffic and pedestrians before turning when appropriate."
  },
  {
    id: 1026,
    question: "A driver faces a flashing red traffic signal. How should it be treated?",
    options: [
      "As a flashing yellow, slowing while continuing through here",
      "As a steady red, remaining stopped until green appears",
      "As a malfunction, proceeding without yielding to traffic here",
      "As a stop sign, stopping before proceeding when clear"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Driver’s Manual supports this answer: As a stop sign, stopping before proceeding when clear."
  },
  {
    id: 1027,
    question: "A driver faces a flashing yellow traffic signal. What does it require?",
    options: [
      "Accelerate through the intersection before cross traffic arrives under these conditions",
      "Treat the signal exactly like a stop sign at every intersection",
      "Proceed cautiously after reducing speed and checking traffic under these conditions",
      "Stop completely and remain stopped until a green signal appears here"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Driver’s Manual supports this answer: Proceed cautiously after reducing speed and checking traffic under these conditions."
  },
  {
    id: 1028,
    question: "A driver sees a flashing yellow arrow for a left turn. What applies?",
    options: [
      "Turn requires a complete stop before every movement begins here",
      "Turn may proceed after yielding to oncoming traffic and pedestrians",
      "Turn has protected priority over oncoming traffic and pedestrians here",
      "Turn is prohibited until a steady green arrow appears here"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Driver’s Manual supports this answer: Turn may proceed after yielding to oncoming traffic and pedestrians."
  },
  {
    id: 1029,
    question: "A driver sees a steady yellow arrow while preparing to turn. What should the driver understand?",
    options: [
      "The protected turn phase is ending, so prepare to stop",
      "The protected turn phase is beginning, so accelerate immediately here",
      "The turn has become protected from all opposing traffic here",
      "The signal is malfunctioning and should be treated as flashing"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Driver’s Manual supports this answer: The protected turn phase is ending, so prepare to stop."
  },
  {
    id: 1030,
    question: "A driver approaches a solid red light and wants to turn right. What is required before turning?",
    options: [
      "Slow slightly and turn without stopping if traffic appears distant",
      "Accelerate through the intersection before opposing traffic moves when appropriate",
      "Stop only when pedestrians or police officers are visibly present",
      "Make a complete stop and yield before proceeding when clear"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Driver’s Manual supports this answer: Make a complete stop and yield before proceeding when clear."
  },
  {
    id: 1031,
    question: "When may a driver make a left turn on red under Minnesota rules?",
    options: [
      "From any one-way street onto any two-way street when clear",
      "From any two-way street onto another two-way street when clear",
      "From a one-way street onto another one-way street when clear",
      "From any two-way street onto any one-way street when clear"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Driver’s Manual supports this answer: From a one-way street onto another one-way street when clear."
  },
  {
    id: 1032,
    question: "A driver wants to pass another vehicle on a two-lane highway posted 55 mph or higher. What special rule applies when passing lawfully?",
    options: [
      "The speed limit remains unchanged during every lawful pass here",
      "The speed limit increases by 10 mph while lawfully passing",
      "The speed limit increases by 15 mph while lawfully passing",
      "The speed limit increases by 20 mph while lawfully passing"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Driver’s Manual supports this answer: The speed limit increases by 10 mph while lawfully passing."
  },
  {
    id: 1033,
    question: "A driver approaches a solid yellow line on the driver's side of center. What does it generally mean?",
    options: [
      "Passing is prohibited from the driver's direction there when appropriate",
      "Passing is permitted whenever the opposing lane appears clear here",
      "Passing is permitted only when another driver signals approval here",
      "Passing is permitted only for vehicles traveling below the limit"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Driver’s Manual supports this answer: Passing is prohibited from the driver's direction there when appropriate."
  },
  {
    id: 1034,
    question: "A driver sees double solid yellow center lines. What do they generally indicate?",
    options: [
      "Passing is permitted in both directions when visibility is good",
      "Passing is permitted only for drivers traveling below 55 mph",
      "Passing is permitted whenever no vehicle is immediately approaching here",
      "Passing is prohibited in both directions there under these conditions"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Driver’s Manual supports this answer: Passing is prohibited in both directions there under these conditions."
  },
  {
    id: 1035,
    question: "A driver considers passing near an intersection. Which restriction applies?",
    options: [
      "Do not pass within 50 feet of an intersection",
      "Do not pass within 200 feet of an intersection",
      "Do not pass within 100 feet of an intersection",
      "Do not pass within 25 feet of an intersection"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Driver’s Manual supports this answer: Do not pass within 100 feet of an intersection."
  },
  {
    id: 1036,
    question: "A driver approaches a hill where the road ahead cannot be seen for 700 feet. What should the driver do?",
    options: [
      "Pass if the driver activates the left turn signal first here",
      "Do not pass where the required sight distance is unavailable here",
      "Pass if the vehicle ahead is traveling below the posted speed",
      "Pass if the opposing lane appears empty for several seconds here"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Driver’s Manual supports this answer: Do not pass where the required sight distance is unavailable here."
  },
  {
    id: 1037,
    question: "When passing another vehicle, when should the driver return to the right lane?",
    options: [
      "After seeing the entire passed vehicle in the rearview mirror here",
      "Immediately after the front bumper clears the passed vehicle when appropriate",
      "As soon as the driver's front wheels reach the other vehicle",
      "Only after the passed vehicle flashes its headlights twice when appropriate"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Driver’s Manual supports this answer: After seeing the entire passed vehicle in the rearview mirror here."
  },
  {
    id: 1038,
    question: "A driver is being passed on a two-lane road. What should the driver do?",
    options: [
      "Move onto the shoulder and accelerate around the passing vehicle",
      "Increase speed so the passing vehicle cannot merge ahead here",
      "Move left toward the centerline to discourage the passing vehicle",
      "Stay in the lane and avoid increasing speed when appropriate"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Driver’s Manual supports this answer: Stay in the lane and avoid increasing speed when appropriate."
  },
  {
    id: 1039,
    question: "When is passing on the right permitted?",
    options: [
      "By using the shoulder whenever the normal lane is congested here",
      "By using a bicycle lane whenever no bicyclist is immediately visible",
      "When safe and the vehicle ahead is turning left when appropriate",
      "Whenever the driver wants to avoid a slower vehicle ahead here"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Driver’s Manual supports this answer: When safe and the vehicle ahead is turning left when appropriate."
  },
  {
    id: 1040,
    question: "A driver misses a desired freeway exit. What should the driver do?",
    options: [
      "Make a U-turn at the next opening and reenter the freeway here",
      "Continue to the next exit and avoid backing or making a U-turn",
      "Stop on the shoulder and back toward the missed exit when appropriate",
      "Cross the median and return toward the missed exit under these conditions"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Driver’s Manual supports this answer: Continue to the next exit and avoid backing or making a U-turn."
  },
  {
    id: 1041,
    question: "When backing from a driveway onto a public road, what is the safest required approach?",
    options: [
      "Back into the nearest lane and then drive forward",
      "Back across all lanes until reaching the opposite side",
      "Back into the far lane and continue reversing forward",
      "Back diagonally across traffic before checking the roadway here"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Driver’s Manual supports this answer: Back into the nearest lane and then drive forward."
  },
  {
    id: 1042,
    question: "Before backing a vehicle, what should the driver do?",
    options: [
      "Check only the rearview mirror and begin reversing slowly when appropriate",
      "Check only the backup camera because it covers the rear area",
      "Sound the horn once and reverse without additional observation when appropriate",
      "Walk around the vehicle and check all areas for hazards here"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Driver’s Manual supports this answer: Walk around the vehicle and check all areas for hazards here."
  },
  {
    id: 1043,
    question: "While backing, what should the driver continue using instead of relying only on mirrors?",
    options: [
      "Only the side mirrors because the rear window is obstructed",
      "Only the rearview mirror because it provides the widest view",
      "Direct observation through the rear window while backing when appropriate",
      "Only the rear camera display mounted near the dashboard here"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Driver’s Manual supports this answer: Direct observation through the rear window while backing when appropriate."
  },
  {
    id: 1044,
    question: "A driver parks parallel to a curb. How close should the vehicle generally be?",
    options: [
      "Within 24 inches of the curb when properly parked",
      "Within 12 inches of the curb when properly parked",
      "Within 6 inches of the curb when properly parked",
      "Within 18 inches of the curb when properly parked"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Driver’s Manual supports this answer: Within 12 inches of the curb when properly parked."
  },
  {
    id: 1045,
    question: "A driver parks near a fire hydrant. What minimum distance applies?",
    options: [
      "At least 10 feet away from the fire hydrant",
      "At least 5 feet away from the fire hydrant",
      "At least 15 feet away from the fire hydrant",
      "At least 20 feet away from the fire hydrant"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Driver’s Manual supports this answer: At least 10 feet away from the fire hydrant."
  },
  {
    id: 1046,
    question: "A driver considers parking near a railroad crossing. What minimum distance applies?",
    options: [
      "At least 20 feet from the nearest rail",
      "At least 30 feet from the nearest rail",
      "At least 100 feet from the nearest rail",
      "At least 50 feet from the nearest rail"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Driver’s Manual supports this answer: At least 50 feet from the nearest rail."
  },
  {
    id: 1047,
    question: "A driver considers parking near a stop sign or traffic signal. What restriction applies?",
    options: [
      "Stay at least 20 feet away on the public road side",
      "Stay at least 50 feet away on the public road side",
      "Stay at least 30 feet away on the public road side",
      "Stay at least 10 feet away on the public road side"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Driver’s Manual supports this answer: Stay at least 30 feet away on the public road side."
  },
  {
    id: 1048,
    question: "A driver considers parking near an intersection crosswalk. What restriction applies?",
    options: [
      "Do not park within 30 feet of the crosswalk there",
      "Do not park within 20 feet of the crosswalk there",
      "Do not park within 5 feet of the crosswalk there",
      "Do not park within 10 feet of the crosswalk there"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Driver’s Manual supports this answer: Do not park within 20 feet of the crosswalk there."
  },
  {
    id: 1049,
    question: "A driver is parked beside moving traffic and wants to open the door. What should happen first?",
    options: [
      "Check for approaching vehicles, motorcycles, bicyclists and pedestrians under these conditions",
      "Open the door slightly first, then check for approaching traffic here",
      "Use the mirror only because pedestrians are outside the traffic lane",
      "Turn on hazard lights before opening the door without checking here"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Driver’s Manual supports this answer: Check for approaching vehicles, motorcycles, bicyclists and pedestrians under these conditions."
  },
  {
    id: 1050,
    question: "A driver is approaching a freeway exit. What is the safest preparation described in the manual?",
    options: [
      "Brake sharply in the travel lane before signaling for the exit here",
      "Remain in the travel lane until the final moment, then cross over",
      "Slow below freeway speed well before reaching the deceleration lane when appropriate",
      "Signal, move into the deceleration lane, then slow before exiting when appropriate"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Driver’s Manual supports this answer: Signal, move into the deceleration lane, then slow before exiting when appropriate."
  },
  {
    id: 1051,
    question: "A driver misses a freeway exit because the lane is congested. What should the driver avoid?",
    options: [
      "Reducing speed before the next exit while maintaining lane position here",
      "Following signs to another route that reaches the same destination here",
      "Backing up or making a U-turn to reach the missed exit",
      "Continuing to the next exit and returning through normal roads here"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Driver’s Manual supports this answer: Backing up or making a U-turn to reach the missed exit."
  },
  {
    id: 1052,
    question: "A driver approaches a work zone with altered lanes and construction vehicles. What is emphasized?",
    options: [
      "Use the shoulder whenever the normal travel lane appears narrowed",
      "Increase caution and watch for unpredictable construction movements when appropriate",
      "Maintain normal speed because workers are protected from traffic here",
      "Follow the vehicle ahead closely to reduce lane-change confusion here"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Driver’s Manual supports this answer: Increase caution and watch for unpredictable construction movements when appropriate."
  },
  {
    id: 1053,
    question: "A driver approaches a work-zone bottleneck where both lanes are open before the merge point. What concept is emphasized?",
    options: [
      "Use both lanes until the designated merge point when appropriate here",
      "Move immediately into the open lane regardless of the posted signs",
      "Use the shoulder to bypass vehicles before the designated merge point",
      "Stop in the shorter lane until another driver waves you forward"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Driver’s Manual supports this answer: Use both lanes until the designated merge point when appropriate here."
  },
  {
    id: 1054,
    question: "A driver encounters a motorcycle traveling between lanes. What does the current manual state?",
    options: [
      "Motorcycles may never travel between vehicles under Minnesota law under these conditions",
      "Motorcycles may share lanes only when traffic is moving at highway speed",
      "Motorcycles may share lanes only after receiving a special police escort here",
      "Motorcycles may legally share lanes in Minnesota under stated conditions when appropriate"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Driver’s Manual supports this answer: Motorcycles may legally share lanes in Minnesota under stated conditions when appropriate."
  },
  {
    id: 1055,
    question: "A driver sees a bicycle ahead. What should the driver remember about sharing the road?",
    options: [
      "Bicyclists must always yield to cars because cars are larger here",
      "Bicyclists may be passed closely whenever the driver sounds the horn",
      "Bicyclists are legitimate road users and require adequate space when appropriate",
      "Bicyclists must always remain on sidewalks instead of travel lanes here"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Driver’s Manual supports this answer: Bicyclists are legitimate road users and require adequate space when appropriate."
  },
  {
    id: 1056,
    question: "A driver approaches a large truck. Which area deserves special caution?",
    options: [
      "The truck's license plate because trucks cannot change lanes near intersections",
      "The truck's blind spots and longer stopping distance require extra space",
      "The truck's rear bumper because trucks always stop faster than cars",
      "The truck's headlights because commercial vehicles must yield at intersections here"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Driver’s Manual supports this answer: The truck's blind spots and longer stopping distance require extra space."
  },
  {
    id: 1057,
    question: "A driver is following a motorcycle. Why should the driver allow extra space?",
    options: [
      "Motorcycles can stop quickly and are smaller in the driver's view",
      "Motorcycles always require three lanes to stop safely in traffic here",
      "Motorcycles are prohibited from braking quickly on Minnesota roads when appropriate",
      "Motorcycles cannot use their brakes while traveling below the speed limit"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Driver’s Manual supports this answer: Motorcycles can stop quickly and are smaller in the driver's view."
  },
  {
    id: 1058,
    question: "A driver approaches a pedestrian at an unmarked intersection crosswalk. What applies?",
    options: [
      "Yield only when the pedestrian reaches the center of the roadway",
      "Continue first because unmarked crosswalks have no legal effect when appropriate",
      "Honk first and continue because pedestrians must wait for vehicles here",
      "Yield to the pedestrian when the pedestrian is crossing when appropriate"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Driver’s Manual supports this answer: Yield to the pedestrian when the pedestrian is crossing when appropriate."
  },
  {
    id: 1059,
    question: "A driver approaches a school zone with children present. What should guide speed?",
    options: [
      "Maintain the maximum posted highway speed until a child enters traffic",
      "Accelerate through the area to reduce the time spent near pedestrians",
      "Follow the posted school-zone speed and watch carefully for children here",
      "Use the normal roadway speed because school zones change unpredictably here"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Driver’s Manual supports this answer: Follow the posted school-zone speed and watch carefully for children here."
  },
  {
    id: 1060,
    question: "A driver sees an orange slow-moving-vehicle emblem. What does it identify?",
    options: [
      "A vehicle that must stop before every railroad crossing when appropriate",
      "A vehicle traveling at 30 mph or less under these conditions",
      "A vehicle carrying hazardous materials on public roads under these conditions",
      "A vehicle exceeding the normal speed limit in a work zone"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Driver’s Manual supports this answer: A vehicle traveling at 30 mph or less under these conditions."
  },
  {
    id: 1061,
    question: "A driver approaches a railroad crossing with warning signals active. What should the driver do?",
    options: [
      "Stop and remain stopped until the crossing can be entered safely",
      "Accelerate across the tracks before the warning system becomes louder here",
      "Stop only if the crossing gate physically reaches the roadway here",
      "Drive around lowered gates when no train is immediately visible here"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Driver’s Manual supports this answer: Stop and remain stopped until the crossing can be entered safely."
  },
  {
    id: 1062,
    question: "A driver sees a yield sign. What shape and color combination identifies it?",
    options: [
      "A diamond-shaped yellow-and-black warning sign here",
      "An octagonal red-and-white regulatory sign here",
      "A circular yellow-and-black railroad warning sign",
      "A downward-pointing red-and-white triangle when appropriate"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Driver’s Manual supports this answer: A downward-pointing red-and-white triangle when appropriate."
  },
  {
    id: 1063,
    question: "A driver sees a stop sign. Which shape identifies it?",
    options: [
      "A four-sided diamond used for roadway warnings",
      "A three-sided triangle used for yielding traffic",
      "An eight-sided octagon reserved for stop signs",
      "A five-sided pentagon used for school warnings"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Driver’s Manual supports this answer: An eight-sided octagon reserved for stop signs."
  },
  {
    id: 1064,
    question: "A driver sees a railroad advance warning sign. Which design is used?",
    options: [
      "An orange diamond sign with a black construction symbol here",
      "A circular yellow sign with a black X and RR",
      "A rectangular blue sign with white service symbols when appropriate",
      "A pentagonal yellow sign with a black school symbol here"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Driver’s Manual supports this answer: A circular yellow sign with a black X and RR."
  },
  {
    id: 1065,
    question: "A driver sees a solid white line separating lanes traveling the same direction. What does it generally mean?",
    options: [
      "Changing lanes is discouraged across that line here",
      "Traffic directions are opposite across that line here",
      "Passing is required before crossing that line here",
      "The lane is reserved exclusively for emergency vehicles"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Driver’s Manual supports this answer: Changing lanes is discouraged across that line here."
  },
  {
    id: 1066,
    question: "A driver sees double solid white lines separating same-direction lanes. What should the driver understand?",
    options: [
      "Cross freely whenever traffic behind is moving slowly here",
      "Cross only when traveling below the posted speed limit",
      "Cross whenever the destination requires an immediate lane change",
      "Do not cross the lines where crossing is prohibited"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Driver’s Manual supports this answer: Do not cross the lines where crossing is prohibited."
  },
  {
    id: 1067,
    question: "A driver sees a broken yellow center line on a two-way road. What does it generally indicate?",
    options: [
      "Traffic travels in the same direction on both sides",
      "The lane is reserved for left-turning vehicles only here",
      "Passing is permitted when the maneuver is safe here",
      "Passing is prohibited in both directions on that roadway"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Driver’s Manual supports this answer: Passing is permitted when the maneuver is safe here."
  },
  {
    id: 1068,
    question: "A driver sees a shared center lane marked with yellow lines. What is its intended use?",
    options: [
      "Parking temporarily while waiting for traffic to clear",
      "Starting left turns from either direction when permitted",
      "Passing slower traffic traveling in either direction here",
      "Driving continuously until the next controlled intersection here"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Driver’s Manual supports this answer: Starting left turns from either direction when permitted."
  },
  {
    id: 1069,
    question: "A driver sees a red circle with a slash over a maneuver symbol. What does it generally mean?",
    options: [
      "The displayed action is prohibited at that location here",
      "The displayed action is recommended whenever traffic is light",
      "The displayed action is permitted only for emergency vehicles",
      "The displayed action is required before entering the intersection"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Driver’s Manual supports this answer: The displayed action is prohibited at that location here."
  },
  {
    id: 1070,
    question: "A driver uses hand signals because vehicle signals fail. Which arm position indicates a left turn?",
    options: [
      "Left arm bent upward beside the driver's window",
      "Left arm bent downward beside the driver's window",
      "Right arm extended straight outward from the vehicle",
      "Left arm extended straight outward from the vehicle"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Driver’s Manual supports this answer: Left arm extended straight outward from the vehicle."
  },
  {
    id: 1071,
    question: "Which hand signal indicates a right turn when the left arm is used?",
    options: [
      "Left arm bent downward at the elbow here",
      "Right arm extended straight outward from the vehicle",
      "Left arm bent upward at the elbow here",
      "Left arm extended straight outward from the vehicle"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Driver’s Manual supports this answer: Left arm bent upward at the elbow here."
  },
  {
    id: 1072,
    question: "Which hand signal indicates slowing or stopping when the left arm is used?",
    options: [
      "Right arm bent upward toward the sky here",
      "Left arm bent downward toward the roadway here",
      "Left arm bent upward toward the sky here",
      "Left arm extended straight outward from the vehicle"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Driver’s Manual supports this answer: Left arm bent downward toward the roadway here."
  },
  {
    id: 1073,
    question: "A driver approaches an emergency vehicle using sirens and warning lights. What should the driver generally do?",
    options: [
      "Move safely to the right side and stop when required here",
      "Maintain speed and remain directly alongside the emergency vehicle when appropriate",
      "Accelerate through the intersection so the emergency vehicle can follow here",
      "Move left across traffic without checking because emergency vehicles have priority"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Driver’s Manual supports this answer: Move safely to the right side and stop when required here."
  },
  {
    id: 1074,
    question: "A driver approaches a stopped emergency or service vehicle with flashing lights. What should the driver do under move-over requirements?",
    options: [
      "Maintain speed because only police vehicles receive protection under these conditions here",
      "Stop directly beside the emergency vehicle until traffic becomes lighter when appropriate",
      "Accelerate past the emergency vehicle before another car can approach when appropriate",
      "Move over when possible and slow down when moving over is unsafe"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Driver’s Manual supports this answer: Move over when possible and slow down when moving over is unsafe."
  },
  {
    id: 1075,
    question: "A driver approaches a roundabout. Who has the right-of-way?",
    options: [
      "The largest vehicle has priority over all circulating traffic when appropriate",
      "The vehicle entering from the left always has priority over others",
      "Traffic already circulating in the roundabout has priority under these conditions",
      "Traffic entering the roundabout always has priority over circulating traffic here"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Driver’s Manual supports this answer: Traffic already circulating in the roundabout has priority under these conditions."
  },
  {
    id: 1076,
    question: "A driver is entering a multi-lane roundabout. What should the driver do before entering?",
    options: [
      "Change lanes inside the circle whenever another vehicle approaches here",
      "Choose the correct lane and yield to circulating traffic here",
      "Enter first and choose a lane after reaching the circle",
      "Stop inside the roundabout before choosing the desired lane here"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Driver’s Manual supports this answer: Choose the correct lane and yield to circulating traffic here."
  },
  {
    id: 1077,
    question: "A driver is turning left from a green signal and sees a pedestrian entering the crosswalk. What must happen?",
    options: [
      "Yield to the pedestrian before completing the turn when appropriate",
      "Continue because the green signal gives the driver absolute priority",
      "Honk and continue because pedestrians must wait for turning traffic",
      "Stop only if the pedestrian reaches the vehicle's travel lane"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Driver’s Manual supports this answer: Yield to the pedestrian before completing the turn when appropriate."
  },
  {
    id: 1078,
    question: "A driver approaches a crosswalk without a stop line. Where should the vehicle stop when required?",
    options: [
      "After the crosswalk so pedestrians remain behind the vehicle here",
      "Inside the crosswalk if the intersection appears clear when appropriate",
      "Beside the crosswalk so pedestrians can pass behind the vehicle",
      "Before the crosswalk rather than inside it under these conditions"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Driver’s Manual supports this answer: Before the crosswalk rather than inside it under these conditions."
  },
  {
    id: 1079,
    question: "A driver stops behind another vehicle at an intersection. What space is useful?",
    options: [
      "Enough room for only a motorcycle to pass between the vehicles here",
      "Enough room to block the crosswalk while remaining near the stop line",
      "Enough room to see the rear bumper and maneuver if needed here",
      "Enough room to touch the other vehicle's rear bumper closely when appropriate"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Driver’s Manual supports this answer: Enough room to see the rear bumper and maneuver if needed here."
  },
  {
    id: 1080,
    question: "A driver is making a left turn at an intersection. Where should the front wheels remain while stopped?",
    options: [
      "Angled toward the centerline to prepare for acceleration",
      "Straight ahead until the driver begins the turn",
      "Turned sharply left toward the intended travel direction",
      "Turned sharply right toward the nearest curb here"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Driver’s Manual supports this answer: Straight ahead until the driver begins the turn."
  },
  {
    id: 1081,
    question: "A driver experiences a tire blowout on the highway. What response is recommended?",
    options: [
      "Grip the wheel firmly, ease off the accelerator, and slow gradually",
      "Brake hard immediately, then steer sharply onto the shoulder when appropriate",
      "Accelerate quickly to stabilize the damaged tire before braking when appropriate",
      "Turn sharply toward the shoulder while applying the parking brake here"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Driver’s Manual supports this answer: Grip the wheel firmly, ease off the accelerator, and slow gradually."
  },
  {
    id: 1082,
    question: "A driver experiences a stuck gas pedal. What action can reduce engine power to the wheels?",
    options: [
      "Shift immediately into park while traveling at highway speed here",
      "Turn off the ignition and lock the steering wheel immediately",
      "Press the accelerator harder to force the pedal mechanism loose",
      "Shift to neutral and safely move toward the roadside here"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Driver’s Manual supports this answer: Shift to neutral and safely move toward the roadside here."
  },
  {
    id: 1083,
    question: "A driver's windshield wipers fail during blinding rain or snow. What should the driver do?",
    options: [
      "Stop immediately in the travel lane and turn off all lights",
      "Continue at the same speed without hazard lights until reaching home",
      "Slow down, activate hazard lights, and move to a safe location",
      "Accelerate to leave the storm before visibility decreases further when appropriate"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Driver’s Manual supports this answer: Slow down, activate hazard lights, and move to a safe location."
  },
  {
    id: 1084,
    question: "A vehicle hood suddenly opens and blocks the driver's view. What should the driver do?",
    options: [
      "Continue at normal speed while relying only on the side mirrors",
      "Activate hazards, reduce speed, and steer toward a safe location here",
      "Accelerate until the hood closes from the increased airflow when appropriate",
      "Brake sharply in the lane without checking surrounding traffic when appropriate"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Driver’s Manual supports this answer: Activate hazards, reduce speed, and steer toward a safe location here."
  },
  {
    id: 1085,
    question: "A driver experiences a complete light failure on a dark road. What should the driver do?",
    options: [
      "Slow down and remain on the pavement until safely reaching the shoulder here",
      "Accelerate toward the shoulder immediately to reduce exposure time under these conditions here",
      "Stop in the lane and wait for another vehicle to illuminate the road",
      "Drive on the shoulder at normal speed until the lights return when appropriate"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Driver’s Manual supports this answer: Slow down and remain on the pavement until safely reaching the shoulder here."
  },
  {
    id: 1086,
    question: "A driver becomes involved in a crash causing an injury. What should the driver do?",
    options: [
      "Leave immediately to avoid blocking traffic and call later from home here",
      "Move the injured person into traffic before contacting emergency services when appropriate",
      "Drive to the nearest repair shop before exchanging any information when appropriate",
      "Stay at the scene and call 911 or law enforcement when able"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Driver’s Manual supports this answer: Stay at the scene and call 911 or law enforcement when able."
  },
  {
    id: 1087,
    question: "A driver is involved in a property-damage-only crash. What does the manual advise first?",
    options: [
      "Leave the scene immediately if both vehicles remain drivable under these conditions",
      "Exit the vehicle where it stopped even if traffic is moving nearby",
      "Move to a safe location away from traffic before exiting when appropriate",
      "Remain stopped in the traffic lane until police arrive under these conditions"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Driver’s Manual supports this answer: Move to a safe location away from traffic before exiting when appropriate."
  },
  {
    id: 1088,
    question: "After a crash, which information should drivers exchange?",
    options: [
      "Only license plate numbers when property damage is visible here",
      "Driver license and insurance information with involved drivers when appropriate",
      "Only first names and phone numbers if vehicles remain drivable",
      "Only insurance company names if police are not present here"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Driver’s Manual supports this answer: Driver license and insurance information with involved drivers when appropriate."
  },
  {
    id: 1089,
    question: "A driver becomes distracted while using a GPS. Which type of distraction is looking away from the road?",
    options: [
      "Visual distraction caused by diverting the driver's eyes here",
      "Mechanical distraction caused by removing hands from the wheel",
      "Cognitive distraction caused by thinking about unrelated issues here",
      "Auditory distraction caused by hearing roadway warning sounds here"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Driver’s Manual supports this answer: Visual distraction caused by diverting the driver's eyes here."
  },
  {
    id: 1090,
    question: "A driver removes a hand from the wheel to reach for an item. Which distraction type is involved?",
    options: [
      "Visual distraction from looking toward the road ahead",
      "Cognitive distraction from thinking about another subject here",
      "Environmental distraction from changing outdoor weather conditions here",
      "Mechanical or physical distraction from removing a hand"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Driver’s Manual supports this answer: Mechanical or physical distraction from removing a hand."
  },
  {
    id: 1091,
    question: "A driver is mentally focused on an unrelated problem while driving. Which distraction type applies?",
    options: [
      "Mechanical distraction caused by moving a hand from the wheel",
      "Environmental distraction caused by roadway construction activity under these conditions",
      "Cognitive distraction caused by being lost in thought when appropriate",
      "Visual distraction caused by looking away from the roadway here"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Driver’s Manual supports this answer: Cognitive distraction caused by being lost in thought when appropriate."
  },
  {
    id: 1092,
    question: "A driver notices fatigue developing during a trip. What principle should guide the response?",
    options: [
      "Increase speed so the trip ends sooner and exposure to fatigue decreases",
      "Recognize that fatigue reduces alertness and judgment while driving under these conditions",
      "Assume caffeine completely restores safe reaction ability for driving under these conditions",
      "Continue driving because fatigue only affects long-distance highway travel under these conditions"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Driver’s Manual supports this answer: Recognize that fatigue reduces alertness and judgment while driving under these conditions."
  },
  {
    id: 1093,
    question: "A driver is considering driving after drinking alcohol. What approach does the manual recommend?",
    options: [
      "Do not drive after drinking; use another transportation option under these conditions",
      "Wait briefly, then drive if the driver feels alert enough when appropriate",
      "Drink coffee first, then drive if no obvious impairment remains when appropriate",
      "Eat a large meal first, then drive if the driver feels normal"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Driver’s Manual supports this answer: Do not drive after drinking; use another transportation option under these conditions."
  },
  {
    id: 1094,
    question: "Which factors are identified as major contributors to blood alcohol concentration?",
    options: [
      "Age, vehicle size, and road surface condition",
      "Driving speed, tire pressure, and outside temperature",
      "Distance traveled, traffic volume, and engine displacement",
      "Amount consumed, drinking rate, and body weight"
    ],
    correctAnswerIndex: 3,
    explanation: "The Minnesota Driver’s Manual supports this answer: Amount consumed, drinking rate, and body weight."
  },
  {
    id: 1095,
    question: "A driver asks whether food, coffee, exercise or cold showers can quickly eliminate alcohol. What is correct?",
    options: [
      "Exercise rapidly removes alcohol by increasing circulation and sweating here",
      "Cold showers rapidly remove alcohol by lowering body temperature here",
      "None of these methods quickly removes alcohol from the body",
      "Coffee rapidly removes alcohol by increasing alertness and metabolism here"
    ],
    correctAnswerIndex: 2,
    explanation: "The Minnesota Driver’s Manual supports this answer: None of these methods quickly removes alcohol from the body."
  },
  {
    id: 1096,
    question: "A driver has a BAC below the legal threshold but feels impaired. What should the driver do?",
    options: [
      "Drive if another passenger agrees that the driver appears capable here",
      "Avoid driving because impairment can exist below legal thresholds when appropriate",
      "Drive normally because any BAC below the threshold is automatically safe",
      "Drive only on residential streets because lower speeds eliminate impairment here"
    ],
    correctAnswerIndex: 1,
    explanation: "The Minnesota Driver’s Manual supports this answer: Avoid driving because impairment can exist below legal thresholds when appropriate."
  },
  {
    id: 1097,
    question: "A driver considers an over-the-counter medication before driving. What should be checked?",
    options: [
      "Read the label for warnings about driving or operating machinery here",
      "Assume nonprescription medicine cannot affect driving ability under these conditions here",
      "Take an extra dose if the driver expects to drive longer",
      "Ignore warnings because only prescription medicines affect driving under these conditions"
    ],
    correctAnswerIndex: 0,
    explanation: "The Minnesota Driver’s Manual supports this answer: Read the label for warnings about driving or operating machinery here."
  }
];