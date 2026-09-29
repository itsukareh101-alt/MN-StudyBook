export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export const cdlQuestions: Question[] = [
  {
  "id": 1,
  "question": "Under FMCSA regulations effective February 7, 2022, who is mandated to complete Entry-Level Driver Training (ELDT) from an FMCSA-registered Training Provider (TPR)?",
  "options": [
    "First-time Class A/B CDL applicants, Class B to A upgrades, and first-time P, S, or H endorsement seekers",
    "All existing CDL holders renewing their standard commercial credentials during routine four-year license cycles during normal operation during normal",
    "Commercial drivers operating heavy multi-trailer tanker combinations across interstate freight corridors under these conditions under these conditions under these",
    "Drivers convicted of two or more serious moving violations within any commercial motor vehicle category for safe operation for"
  ],
  "correctAnswerIndex": 0,
  "explanation": "FMCSA ELDT regulations mandate certified training from an approved TPR provider for first-time Class A/B CDL applicants, Class B to A upgrades, and first-time Passenger (P), School Bus (S), or Hazardous Materials (H) endorsements."
},
  {
  "id": 2,
  "question": "What minimum score must an entry-level commercial driver achieve on the ELDT theory assessment before the training provider can submit certification to the FMCSA TPR?",
  "options": [
    "At least 70 percent on the comprehensive theory assessment",
    "At least 80 percent on the comprehensive theory assessment",
    "At least 90 percent on the comprehensive theory assessment",
    "At least 75 percent on the comprehensive theory assessment"
  ],
  "correctAnswerIndex": 1,
  "explanation": "Under 49 CFR Part 380, drivers must score at least 80% on the theory assessment to demonstrate proficiency before certification is submitted to the TPR."
},
  {
  "id": 3,
  "question": "How does the Minnesota DVS verify that an applicant has completed the mandatory ELDT requirements prior to administering a CDL skills test?",
  "options": [
    "The applicant must bring a notarized paper certificate signed by the certified driving school owner",
    "The applicant must mail official course completion transcripts to the Minnesota DPS office in advance",
    "DVS electronically checks the FMCSA Training Provider Registry (TPR) database before testing under these conditions",
    "DVS relies on verbal self-certification by the applicant during the exam check-in appointment for safe"
  ],
  "correctAnswerIndex": 2,
  "explanation": "Minnesota DVS electronically queries the FMCSA Training Provider Registry to verify that training completion has been submitted by an approved provider before administering CDL skills or hazmat knowledge tests."
},
  {
  "id": 4,
  "question": "For a driver seeking a Hazardous Materials (H) endorsement for the first time, when must the ELDT requirement be completed?",
  "options": [
    "Within 90 days after passing the state Hazardous Materials knowledge test",
    "Only after logging 100 hours of supervised hazardous materials hauling during",
    "Within 30 days of receiving the commercial driver license document under",
    "Prior to taking the official state Hazardous Materials knowledge test for"
  ],
  "correctAnswerIndex": 3,
  "explanation": "For the Hazardous Materials endorsement, the driver must complete ELDT theory training from a registered TPR provider BEFORE taking the state knowledge test."
},
  {
  "id": 5,
  "question": "Which of the following drivers is EXEMPT from the February 7, 2022 FMCSA ELDT mandate?",
  "options": [
    "Drivers issued a valid Commercial Learner's Permit (CLP) prior to Feb 7, 2022 who obtained a CDL before permit expiry",
    "Drivers upgrading an existing Class B CDL to a Class A CDL for long-haul regional and interstate freight routes during",
    "Drivers adding a School Bus (S) endorsement to transport student passengers for public and private school districts under these conditions",
    "Drivers who have never held any commercial license but possess ten years of private Class D driving experience for safe"
  ],
  "correctAnswerIndex": 0,
  "explanation": "Drivers who obtained a Commercial Learner's Permit (CLP) before February 7, 2022, and obtained their CDL before the CLP expired, are exempt from ELDT requirements for that credential."
},
  {
  "id": 6,
  "question": "What two distinct curriculum components must an entry-level driver complete under ELDT for a Class A or Class B CDL?",
  "options": [
    "Classroom theory instruction and a 500-mile solo interstate highway commercial transport trial run",
    "Theory instruction and Behind-the-Wheel (BTW) training covering both range and public road operations",
    "Online video coursework and an employer-administered commercial vehicle mechanical maintenance test under these",
    "Simulator laboratory drills and an unproctored written take-home technical knowledge workbook for safe"
  ],
  "correctAnswerIndex": 1,
  "explanation": "ELDT curricula for Class A and B CDLs require both Theory instruction and Behind-the-Wheel (BTW) training, which includes Range and Public Road competencies."
},
  {
  "id": 7,
  "question": "What vehicle configuration requires a Class A Commercial Driver's License (CDL) in Minnesota?",
  "options": [
    "Single vehicles with a GVWR of 26,001+ lbs where the towed unit does not exceed 10,000 lbs GVWR",
    "Any vehicle designed to transport sixteen or more passengers including the driver regardless of weight during normal operation during normal",
    "Combination vehicles with a GCWR of 26,001+ lbs where the towed unit exceeds 10,000 lbs GVWR under these",
    "Any commercial vehicle transporting placarded hazardous materials cargo across Minnesota state routes for safe operation for safe operation for safe"
  ],
  "correctAnswerIndex": 2,
  "explanation": "Class A CDL is required for any combination of vehicles with a Gross Combination Weight Rating (GCWR) of 26,001 or more pounds, provided the Gross Vehicle Weight Rating (GVWR) of the vehicle(s) being towed is in excess of 10,000 pounds."
},
  {
  "id": 8,
  "question": "What vehicle configuration requires a Class B Commercial Driver's License (CDL)?",
  "options": [
    "Combination vehicles with a GCWR of 26,001+ lbs where the towed trailer exceeds 10,000 lbs GVWR in this situation",
    "Small passenger shuttle buses designed to carry twelve passengers in local municipal zones during normal operation during normal operation during normal",
    "Standard pickup trucks towing dual-axle equipment trailers on Minnesota public roadways under these conditions under these conditions under these conditions under",
    "Single vehicles with a GVWR of 26,001+ lbs, or towing a trailer not in excess of 10,000 lbs GVWR"
  ],
  "correctAnswerIndex": 3,
  "explanation": "Class B CDL is required for any single vehicle with a GVWR of 26,001 or more pounds, or any such vehicle towing a vehicle not in excess of 10,000 pounds GVWR."
},
  {
  "id": 9,
  "question": "A vehicle with a GVWR of 24,000 lbs that is placarded for hazardous materials or designed to transport 16 or more passengers (including driver) requires what class of CDL?",
  "options": [
    "Class C CDL with appropriate commercial endorsements in",
    "Class A CDL with heavy combination endorsements during",
    "Standard Class D license with no endorsements under",
    "Class B CDL with heavy straight vehicle permit"
  ],
  "correctAnswerIndex": 0,
  "explanation": "Class C CDL applies to single vehicles under 26,001 lbs GVWR (or towing a vehicle under 10,000 lbs) that are designed to transport 16+ passengers (including driver) or placarded for hazardous materials."
},
  {
  "id": 10,
  "question": "Under federal and Minnesota CDL regulations, what is the Blood Alcohol Concentration (BAC) threshold at or above which a commercial driver is legally considered driving under the influence (DWI)?",
  "options": [
    "0.08 percent Blood Alcohol Concentration",
    "0.04 percent Blood Alcohol Concentration",
    "0.02 percent Blood Alcohol Concentration",
    "0.05 percent Blood Alcohol Concentration"
  ],
  "correctAnswerIndex": 1,
  "explanation": "For commercial motor vehicle operators, the legal BAC limit is 0.04% (half the standard 0.08% limit for non-commercial drivers)."
},
  {
  "id": 11,
  "question": "If a commercial driver is found to have ANY detectable amount of alcohol below 0.04% BAC while operating a commercial motor vehicle, what immediate action must law enforcement take?",
  "options": [
    "Revoke the driver's commercial license for two years in",
    "Issue a verbal warning without recording any violation during",
    "Place the driver out-of-service for at least 24 hours",
    "Require immediate retaking of all CDL knowledge exams for"
  ],
  "correctAnswerIndex": 2,
  "explanation": "Under Minnesota and federal regulations, a commercial driver with any detectable amount of alcohol under 0.04% must be placed out-of-service for 24 hours."
},
  {
  "id": 12,
  "question": "What is the penalty for a commercial driver convicted of a first-time DWI (0.04% or higher BAC or refusing an alcohol test) while operating a commercial motor vehicle?",
  "options": [
    "A 30-day suspension with mandatory defensive driving class in",
    "Permanent revocation of all driving privileges for life during",
    "A monetary fine with no suspension of commercial license",
    "Disqualification of CDL privileges for at least one year"
  ],
  "correctAnswerIndex": 3,
  "explanation": "A first conviction for driving a CMV under the influence (0.04% BAC or higher) or refusal to submit to chemical testing results in at least a 1-year CDL disqualification (3 years if transporting placarded hazardous materials)."
},
  {
  "id": 13,
  "question": "What is the CDL disqualification penalty for a second DWI or chemical test refusal conviction in a commercial or personal vehicle?",
  "options": [
    "Lifetime disqualification from holding a commercial license in",
    "A mandatory five-year suspension of commercial privileges during",
    "A mandatory three-year suspension with probation period under",
    "A one-year suspension followed by supervised road testing"
  ],
  "correctAnswerIndex": 0,
  "explanation": "A second conviction for a major offense (DWI, chemical test refusal, leaving scene of accident, felony involving CMV) results in a lifetime CDL disqualification."
},
  {
  "id": 14,
  "question": "How long is a commercial driver disqualified if convicted of two 'serious traffic violations' within a three-year period in a commercial vehicle?",
  "options": [
    "Disqualification for at least 30 days",
    "Disqualification for at least 60 days",
    "Disqualification for at least 90 days",
    "Disqualification for at least 15 days"
  ],
  "correctAnswerIndex": 1,
  "explanation": "Two serious traffic violations (excessive speeding 15+ mph over, reckless driving, improper lane change, following too closely, texting/handheld cell use) within 3 years results in at least a 60-day CDL disqualification (120 days for 3 violations)."
},
  {
  "id": 15,
  "question": "Under FMCSA and Minnesota rules, what is the maximum speed above the posted limit that is classified as a 'serious traffic violation'?",
  "options": [
    "10 miles per hour or more above the posted speed limit",
    "20 miles per hour or more above the posted speed limit",
    "15 miles per hour or more above the posted speed limit",
    "5 miles per hour or more above the posted speed limit"
  ],
  "correctAnswerIndex": 2,
  "explanation": "Excessive speeding, defined as 15 mph or more above the posted speed limit, is designated as a serious traffic violation under CDL regulations."
},
  {
  "id": 16,
  "question": "Commercial drivers are strictly prohibited from using hand-held mobile devices while driving. What does this restriction prohibit?",
  "options": [
    "Using hands-free Bluetooth audio headsets while driving in this situation in",
    "Listening to standard FM radio news broadcasts in the cab during",
    "Operating CB radio microphones mounted on cab consoles under these conditions",
    "Holding a mobile phone in hand and manual dialing of calls"
  ],
  "correctAnswerIndex": 3,
  "explanation": "FMCSA regulations strictly ban holding a mobile telephone to conduct voice communications and dialing by pressing more than a single button."
},
  {
  "id": 17,
  "question": "A commercial driver must notify their employer and the state licensing agency of a traffic conviction (other than parking) within what timeframe?",
  "options": [
    "Within 30 days of the conviction date",
    "Within 10 days of the conviction date",
    "Within 60 days of the conviction date",
    "Within 90 days of the conviction date"
  ],
  "correctAnswerIndex": 0,
  "explanation": "Commercial drivers must notify their employer and the state licensing agency within 30 days of conviction for any traffic violation (except parking), regardless of vehicle type."
},
  {
  "id": 18,
  "question": "What is the minimum tread depth required on the steering axle (front) tires of a commercial motor vehicle?",
  "options": [
    "2/32 inch in every major tire tread groove",
    "4/32 inch in every major tire tread groove",
    "6/32 inch in every major tire tread groove",
    "1/32 inch in every major tire tread groove"
  ],
  "correctAnswerIndex": 1,
  "explanation": "Commercial vehicle regulations require at least 4/32 inch tread depth in every major groove on front steering axle tires. All other tires require at least 2/32 inch."
},
  {
  "id": 19,
  "question": "What is the minimum tread depth required on non-steering axle tires (drive and trailer tires)?",
  "options": [
    "4/32 inch in every major tire tread groove",
    "1/32 inch in every major tire tread groove",
    "2/32 inch in every major tire tread groove",
    "3/32 inch in every major tire tread groove"
  ],
  "correctAnswerIndex": 2,
  "explanation": "Non-steering tires (drive and trailer axles) must have at least 2/32 inch tread depth in every major groove."
},
  {
  "id": 20,
  "question": "During a pre-trip inspection, how much steering wheel free play (slack) is permitted on a power steering system before it is considered unsafe?",
  "options": [
    "No more than approximately 30 degrees (about 6 inches on a 20-inch steering wheel)",
    "No more than approximately 45 degrees (about 9 inches on a 20-inch steering wheel)",
    "Power steering systems are designed to have zero allowable steering wheel play under these",
    "No more than approximately 10 degrees (about 2 inches on a 20-inch steering wheel)"
  ],
  "correctAnswerIndex": 3,
  "explanation": "Steering wheel play should not exceed about 10 degrees (approximately 2 inches of movement at the rim of a 20-inch steering wheel) before the front wheels begin to turn."
},
  {
  "id": 21,
  "question": "What critical suspension defect will put a commercial vehicle immediately out of service during a roadside inspection?",
  "options": [
    "One-fourth or more of the leaf springs in any leaf spring assembly are broken or missing",
    "A minor coating of road dust on the exterior casing of the front shock absorbers during",
    "Slight surface rust on the outer edges of the steel suspension mounting brackets under these conditions",
    "A replacement grease fitting installed on the spring shackle during routine servicing for safe operation for"
  ],
  "correctAnswerIndex": 0,
  "explanation": "Under the North American Standard Out-of-Service Criteria, 25% or more missing or broken leaves in any leaf spring assembly puts the vehicle out of service immediately."
},
  {
  "id": 22,
  "question": "What emergency equipment is required by law to be in the cab of every commercial motor vehicle?",
  "options": [
    "A commercial trauma first-aid kit, emergency road flares, and heavy-duty tow recovery cables in",
    "Properly rated fire extinguisher, spare electrical fuses, and three reflective warning triangles during normal",
    "Two five-gallon water jugs, heavy iron snow shovel, tire chains, and thermal survival blanket",
    "A battery jumper booster pack, heavy flashlight with spare cells, and reflective barricade tape"
  ],
  "correctAnswerIndex": 1,
  "explanation": "Commercial motor vehicles must be equipped with: 1) Properly charged and rated fire extinguisher, 2) Spare electrical fuses (unless equipped with circuit breakers), and 3) Three red reflective warning triangles."
},
  {
  "id": 23,
  "question": "When parked on the side of a two-way, undivided highway, where must you place your three reflective warning triangles?",
  "options": [
    "10 ft ahead, 50 ft behind, and 200 ft behind directly along the right road shoulder",
    "25 ft ahead, 50 ft ahead, and 100 ft ahead along the center divided roadway line",
    "100 ft ahead, 10 ft behind (traffic side), and 100 ft behind the commercial vehicle under",
    "Directly next to the left front tire, left rear tire, and rear trailer bumper step for"
  ],
  "correctAnswerIndex": 2,
  "explanation": "On a two-way undivided roadway: place one triangle 100 feet ahead of the vehicle, one 10 feet behind on the traffic side, and one 100 feet behind the vehicle."
},
  {
  "id": 24,
  "question": "When parked on the shoulder of a divided highway or one-way road, where must you place your three reflective warning triangles?",
  "options": [
    "100 feet ahead, 100 feet behind, and 200 feet behind the commercial vehicle in",
    "50 feet, 100 feet, and 150 feet along the right-hand shoulder behind the truck",
    "20 feet ahead, 50 feet behind, and 100 feet behind the commercial vehicle cab",
    "10 feet, 100 feet, and 200 feet toward approaching traffic behind the vehicle for"
  ],
  "correctAnswerIndex": 3,
  "explanation": "On a divided highway or one-way road, place warning triangles 10 feet, 100 feet, and 200 feet toward approaching traffic (all behind the vehicle)."
},
  {
  "id": 25,
  "question": "Within how many minutes of stopping on the shoulder or roadway must a commercial driver place the required emergency warning devices?",
  "options": [
    "Within 10 minutes of stopping",
    "Within 15 minutes of stopping",
    "Within 5 minutes of stopping",
    "Within 20 minutes of stopping"
  ],
  "correctAnswerIndex": 0,
  "explanation": "Federal regulations require drivers to place emergency warning devices (reflective triangles) within 10 minutes of stopping on the shoulder or roadway."
},
  {
  "id": 26,
  "question": "What is the recommended visual search distance for a commercial driver at highway cruising speeds?",
  "options": [
    "3 to 5 seconds ahead (about the distance of four car lengths forward)",
    "12 to 15 seconds ahead (about one-quarter of a mile at highway speed)",
    "25 to 30 seconds ahead (about one full mile forward on the highway)",
    "Directly focused on the rear bumper of the leading passenger car for safe"
  ],
  "correctAnswerIndex": 1,
  "explanation": "Commercial drivers should look 12 to 15 seconds ahead, which is about one-quarter mile at highway speeds, to anticipate hazards early."
},
  {
  "id": 27,
  "question": "What is the basic formula for determining minimum safe following distance for heavy commercial vehicles in good weather?",
  "options": [
    "2 seconds per 10 ft vehicle length across all posted highway speed limits in this situation",
    "1 second per 1,000 lbs of total gross commercial combination vehicle weight during normal operation",
    "1 second per 10 ft vehicle length under 40 mph, plus 1 second over 40 mph",
    "A fixed 3-second buffer regardless of commercial vehicle length or speed for safe operation for safe"
  ],
  "correctAnswerIndex": 2,
  "explanation": "The space formula is 1 second per 10 feet of vehicle length below 40 mph, plus 1 additional second for speeds 40 mph and above (e.g., a 60-foot truck at 55 mph needs 6 + 1 = 7 seconds)."
},
  {
  "id": 28,
  "question": "According to the CDL space management formula, what is the minimum following distance for a 60-foot semi-truck traveling at 55 mph on dry pavement?",
  "options": [
    "6 seconds following distance",
    "5 seconds following distance",
    "8 seconds following distance",
    "7 seconds following distance"
  ],
  "correctAnswerIndex": 3,
  "explanation": "60 feet / 10 = 6 seconds. Since speed is over 40 mph, add 1 second: 6 + 1 = 7 seconds total."
},
  {
  "id": 29,
  "question": "Why should you never follow another vehicle closely (tailgate) in a large commercial truck?",
  "options": [
    "Large commercial trucks require much greater stopping distances and tailgating invites fatal collisions",
    "Tailgating causes the tractor turbocharger wastegate to over-pressurize the intake manifold assembly during",
    "Tailgating causes the electronic logging device (ELD) to automatically record a speeding violation",
    "Tailgating reduces diesel fuel efficiency by disrupting clean aerodynamic airflow to the radiator"
  ],
  "correctAnswerIndex": 0,
  "explanation": "Commercial vehicles are much heavier and require significantly greater stopping distance; tailgating deprives the driver of necessary stopping space if the lead vehicle stops suddenly."
},
  {
  "id": 30,
  "question": "When executing a right turn in a large commercial vehicle, why should you keep the rear of your vehicle close to the curb rather than swinging wide into the right lane first?",
  "options": [
    "To prevent front steering tires from rubbing against right roadway gutters in this situation",
    "To prevent trailing vehicles from trying to pass you on your right blind side",
    "To reduce centrifugal forces acting on cargo freight inside the rear trailer under these",
    "To ensure trailer turn signals remain clearly visible to side cross traffic for safe"
  ],
  "correctAnswerIndex": 1,
  "explanation": "If you swing wide to the left before turning right (buttonhook), trailing cars may try to pass on your right. Instead, keep the rear close to the curb and turn wide as you complete the turn."
},
  {
  "id": 31,
  "question": "What is 'off-tracking' (cheating) in a combination commercial vehicle?",
  "options": [
    "Trailer tires bounce off the pavement when traversing railway grade crossings in this",
    "Electronic navigation system loses satellite reception in remote rural areas during normal operation",
    "Rear wheels follow a shorter path than front wheels, tracking closer to curb",
    "Tractor drive wheels spin faster than trailer wheels on slippery road grades for"
  ],
  "correctAnswerIndex": 2,
  "explanation": "Off-tracking occurs during turns because the rear wheels of a combination vehicle follow a shorter, tighter path than the front steering wheels."
},
  {
  "id": 32,
  "question": "When backing a commercial vehicle, why is backing toward the driver's side (sight-side) strongly preferred over the passenger's side (blind-side)?",
  "options": [
    "Trailer spring brakes release significantly faster when reversing toward the left in this situation",
    "Tractor steering gear box offers a sharper turning radius when pivoting to left during",
    "Minnesota commercial traffic statutes prohibit backing a vehicle toward right under these conditions under",
    "Driver has direct line of sight out window and better mirror views along trailer"
  ],
  "correctAnswerIndex": 3,
  "explanation": "Backing to the driver's side gives the driver a direct visual line of sight out the driver window and superior mirror angles, avoiding dangerous blind-side backing."
},
  {
  "id": 33,
  "question": "What is the primary safety rule to remember whenever you MUST back a commercial vehicle?",
  "options": [
    "Get Out And Look (G.O.A.L.), use a helper, back slowly, and avoid backing when possible",
    "Back as quickly as possible to clear active roadway lanes and minimize traffic delays during normal operation during",
    "Sound high-pressure pneumatic air horn continuously throughout entire backing movement under these conditions under these conditions under these",
    "Rely exclusively on wide-angle convex side mirrors without turning your head or body for safe operation for safe"
  ],
  "correctAnswerIndex": 0,
  "explanation": "Always avoid backing when possible. If necessary: Get Out And Look (G.O.A.L.), use a helper with pre-arranged hand signals, and back slowly while checking both mirrors."
},
  {
  "id": 34,
  "question": "What three individual distances make up total stopping distance for vehicles equipped with air brakes?",
  "options": [
    "Tire friction distance, Transmission downshift distance, and Suspension rebound distance in this",
    "Perception distance, Reaction distance, and Braking distance (which includes brake lag distance)",
    "Sightline distance, Compressor replenishment distance, and Parking brake application distance under these",
    "Speedometer calibration distance, S-cam rotation distance, and Glad hand pressurization distance for"
  ],
  "correctAnswerIndex": 1,
  "explanation": "Total stopping distance for air brake vehicles = Perception Distance + Reaction Distance + Brake Lag Distance + Effective Braking Distance."
},
  {
  "id": 35,
  "question": "What is 'brake lag' on an air brake system?",
  "options": [
    "Mechanical delay when brake shoes retract from drum during truck acceleration in this situation in",
    "Electrical latency in the tractor anti-lock braking system (ABS) controller during normal operation during normal",
    "Time needed for air to flow through brake lines to chambers (about 0.5 second)",
    "Time required for air compressor to build storage tank pressure to 100 psi for safe"
  ],
  "correctAnswerIndex": 2,
  "explanation": "Air brakes have a physical brake lag of about 0.5 seconds—the time it takes for air to flow through the lines and push the pushrods into action after pressing the pedal."
},
  {
  "id": 36,
  "question": "At 55 mph on dry pavement, approximately what is the total stopping distance for a heavy commercial truck with air brakes?",
  "options": [
    "About 200 feet (the length of five mid-size passenger cars) in",
    "About 100 feet (similar to a modern passenger car with ABS)",
    "Over 900 feet (nearly one-fifth of an entire statute mile) under",
    "Over 450 feet (more than the length of a football field)"
  ],
  "correctAnswerIndex": 3,
  "explanation": "At 55 mph on dry pavement, a heavy commercial truck with air brakes requires more than 450 feet to come to a complete stop (perception + reaction + brake lag + braking)."
},
  {
  "id": 37,
  "question": "What are the three main components of a standard commercial air brake system?",
  "options": [
    "The Service brake system, the Parking brake system, and the Emergency brake system",
    "The Hydraulic brake system, the Regenerative brake system, and the Exhaust brake system",
    "The Compressor brake system, the Glad hand system, and the S-cam mechanical system",
    "The Friction brake system, the Drum expander system, and the ABS modulator system"
  ],
  "correctAnswerIndex": 0,
  "explanation": "Air brake systems combine three systems: Service brakes (used while driving), Parking brakes (used when parked), and Emergency brakes (stop vehicle in event of system failure)."
},
  {
  "id": 38,
  "question": "What is the function of the air compressor governor in an air brake system?",
  "options": [
    "It regulates the speed of the engine crankshaft to prevent high-RPM compressor overheating in this",
    "It controls when the air compressor pumps air into the storage tanks (cut-out and cut-in)",
    "It limits the maximum hydraulic pressure delivered to the power steering fluid reservoir under these",
    "It adjusts the tension on the trailer glad hand rubber coupling seals during turns for"
  ],
  "correctAnswerIndex": 1,
  "explanation": "The governor controls when the compressor pumps air into the storage tanks, cutting out around 125 psi and cutting in around 100 psi."
},
  {
  "id": 39,
  "question": "At what pressure does the air compressor governor typically 'cut out' (stop pumping air)?",
  "options": [
    "Around 85 psi (between 80 and 90 psi)",
    "Around 175 psi (between 165 and 185 psi)",
    "Around 125 psi (between 120 and 130 psi)",
    "Around 60 psi (between 55 and 65 psi)"
  ],
  "correctAnswerIndex": 2,
  "explanation": "The compressor governor cuts out (stops compressor pumping) when tank pressure reaches around 125 psi (standard range 120-130 psi)."
},
  {
  "id": 40,
  "question": "At what pressure does the air compressor governor typically 'cut in' (start pumping air again)?",
  "options": [
    "Around 60 psi (when low pressure safety buzzer sounds) in",
    "Around 125 psi (when maximum tank storage is reached) during",
    "Around 150 psi (when emergency relief valve triggers) under these",
    "Around 100 psi (when pressure falls to normal recharge level)"
  ],
  "correctAnswerIndex": 3,
  "explanation": "The governor cuts in (starts pumping again) when tank air pressure drops to around 100 psi (standard minimum cut-in is 100 psi)."
},
  {
  "id": 41,
  "question": "Why must compressed air storage tanks be drained regularly (daily if manual drain valves)?",
  "options": [
    "Water and oil collect in the tanks, which can freeze in cold weather and cause total brake failure",
    "Accumulated moisture increases the gross combination vehicle weight beyond state legal bridge limits during normal operation during normal",
    "Excess oil vapor causes the dashboard air pressure gauges to register false high-pressure readings under these conditions under",
    "Draining tanks prevents the fuel injection system from drawing air bubbles into the combustion cylinders for safe operation"
  ],
  "correctAnswerIndex": 0,
  "explanation": "Compressors introduce moisture and oil into the air tanks. If not drained, water can cause corrosion, freeze in cold weather, and cause complete brake failure."
},
  {
  "id": 42,
  "question": "When must the low air pressure warning signal (buzzer, light, or wig-wag) activate on an air brake vehicle?",
  "options": [
    "When air pressure drops below 20 psi (before spring brakes lock the axle)",
    "Before air pressure drops below 60 psi (typically between 55 and 75 psi)",
    "When air pressure drops below 100 psi (when governor cuts in the pump)",
    "Only when the air storage reservoir is completely depleted to zero psi for"
  ],
  "correctAnswerIndex": 1,
  "explanation": "A low air pressure warning signal (buzzer, light, or drop arm) must activate before air pressure falls below 60 psi."
},
  {
  "id": 43,
  "question": "What activates the emergency spring brakes on a commercial vehicle if air pressure drops dangerously low?",
  "options": [
    "ABS electronic module commands hydraulic calipers to pinch brake rotor discs",
    "Engine exhaust retarder closes automatically to lock transmission drive gears during",
    "Mechanical springs apply brakes automatically when pressure falls to 20-45 psi",
    "Driver must manually disconnect trailer glad hand couplers from trailer nose"
  ],
  "correctAnswerIndex": 2,
  "explanation": "Spring brakes are held back by air pressure. If air pressure drops dangerously low (usually 20-45 psi), mechanical springs overcome the air and apply the brakes automatically."
},
  {
  "id": 44,
  "question": "What is the yellow, four-sided (diamond-shaped) push-pull control knob on the dashboard of a modern commercial vehicle?",
  "options": [
    "The trailer air supply control knob (push to charge, pull to isolate)",
    "The auxiliary fog light switch for adverse winter weather conditions during normal",
    "The manual engine compression Jake brake three-stage power selector under these conditions",
    "The tractor Parking Brake control knob (push to release, pull to apply)"
  ],
  "correctAnswerIndex": 3,
  "explanation": "The yellow diamond-shaped knob controls the tractor parking brakes. Push in to release, pull out to apply."
},
  {
  "id": 45,
  "question": "What is the red, eight-sided (octagonal) push-pull control knob on the dashboard?",
  "options": [
    "Trailer Air Supply valve knob (push in to supply air, pull to set brakes)",
    "Tractor Parking Emergency knob (pull to dump air from all tractor tanks) during normal",
    "Engine Emergency Shutdown knob (pull to starve fuel pump of all diesel) under these",
    "Differential Interlock knob (push to lock rear tandem axles for grip) for safe operation"
  ],
  "correctAnswerIndex": 0,
  "explanation": "The red octagonal knob is the Trailer Air Supply control. Push in to charge the trailer air tanks; pull out to apply the trailer emergency brakes."
},
  {
  "id": 46,
  "question": "Why should you never push the brake pedal down when the spring brakes are fully applied?",
  "options": [
    "It causes the automatic slack adjusters to over-extend and strip their internal ratcheting teeth in this",
    "It causes 'compounding'—combining spring force with air pressure can damage or crack brake components during",
    "It dumps all remaining air from the secondary air storage tank through the quick release valve",
    "It de-calibrates the electronic wheel speed sensors used by the tractor anti-lock braking system for safe"
  ],
  "correctAnswerIndex": 1,
  "explanation": "Pushing the brake pedal when spring brakes are on causes compounding: the force of the springs plus air pressure can rupture brake chambers, drums, or linkages."
},
  {
  "id": 47,
  "question": "What is the maximum allowable air leakage rate for a single vehicle with air brakes (static / engine off, brakes released)?",
  "options": [
    "No more than 5 psi per minute",
    "No more than 1 psi per minute",
    "No more than 2 psi per minute",
    "No more than 8 psi per minute"
  ],
  "correctAnswerIndex": 2,
  "explanation": "For a single vehicle with the engine off and brakes released, the air leakage rate should be no more than 2 psi per minute (3 psi per minute with brakes applied)."
},
  {
  "id": 48,
  "question": "What is the maximum allowable air leakage rate for a combination vehicle (tractor-trailer) with the engine off and service brakes fully applied?",
  "options": [
    "No more than 2 psi per minute",
    "No more than 6 psi per minute",
    "No more than 8 psi per minute",
    "No more than 4 psi per minute"
  ],
  "correctAnswerIndex": 3,
  "explanation": "For combination vehicles with the engine off and service brakes fully applied, the air leakage rate must not exceed 4 psi per minute (3 psi per minute with brakes released)."
},
  {
  "id": 49,
  "question": "How do you test the low air pressure warning signal during a pre-trip inspection?",
  "options": [
    "Turn key on with engine off, pump brake pedal repeatedly to reduce pressure; warning must activate by 60 psi in",
    "Idle engine at high RPM, pull both parking brake knobs, and listen for the air dryer purge valve to exhaust",
    "Disconnect the blue service line glad hand while the engine is running to simulate an air leak in the line",
    "Apply the trailer hand valve firmly while driving forward at 15 mph in the commercial vehicle yard for safe operation"
  ],
  "correctAnswerIndex": 0,
  "explanation": "With the electrical power ON and engine OFF, step on and off the brake pedal to deplete air. The low air warning light and buzzer must activate before pressure drops below 60 psi."
},
  {
  "id": 50,
  "question": "How do you test that the tractor-trailer spring brakes apply automatically during an air brake inspection?",
  "options": [
    "Accelerate truck to 25 mph on flat road and pull trailer air supply knob",
    "Pump pedal down to 20-45 psi until trailer supply and parking knobs pop out",
    "Chock wheels, build tank pressure to 125 psi, and hold pedal down 5 minutes",
    "Disconnect battery ground wire to check spring brake engagement on axles for safe operation"
  ],
  "correctAnswerIndex": 1,
  "explanation": "Continue fanning the brake pedal down until the red (trailer supply) and yellow (parking brake) knobs pop out automatically, usually between 20 and 45 psi."
},
  {
  "id": 51,
  "question": "What is the proper technique for braking down a long, steep grade with a heavy commercial vehicle (snub braking)?",
  "options": [
    "Maintain continuous light foot pressure on brake pedal throughout entire downhill descent in this situation in",
    "Shift transmission to neutral and rely entirely on trailer hand valve to regulate speed during normal",
    "Select low gear, apply brakes firmly to drop 5 mph below safe speed, release, and repeat",
    "Pump brake pedal rapidly twenty to thirty times per minute to keep brake linings cool for"
  ],
  "correctAnswerIndex": 2,
  "explanation": "Proper snub braking: shift to appropriate low gear, let speed reach safe speed, apply brakes firmly to drop 5 mph below safe speed (takes about 3 seconds), release, and repeat."
},
  {
  "id": 52,
  "question": "Why does riding the brakes (continuous light pressure) on a long downgrade cause 'brake fade' and runaway trucks?",
  "options": [
    "Continuous braking causes the air compressor governor to dump all air pressure through the emergency safety valve in",
    "Light foot pressure forces moisture from the wet tank directly into the anti-lock brake electronic sensor ring during",
    "The brake pedal return spring loses its mechanical tension and prevents the pushrod from returning to center under",
    "Excessive heat causes brake drums to expand away from linings and friction material to glaze, losing braking power"
  ],
  "correctAnswerIndex": 3,
  "explanation": "Excessive heat from continuous braking causes drums to expand away from brake shoes and friction material to glaze, causing brake fade where pressing harder produces little or no stopping power."
},
  {
  "id": 53,
  "question": "What is the primary danger of using the trailer hand valve (trolley valve) to control vehicle speed while driving?",
  "options": [
    "It applies only trailer brakes, which can easily lock the trailer wheels and cause a fatal trailer jackknife in",
    "It cuts off the supply of compressed air to the tractor steering gear box and power steering pump assembly",
    "It causes the fifth wheel locking jaws to unlock from the trailer kingpin while traveling at high speeds under",
    "It drains the tractor secondary air storage tank without activating the dashboard low-pressure buzzer for safe operation for safe"
  ],
  "correctAnswerIndex": 0,
  "explanation": "The trailer hand valve should NEVER be used for normal braking while driving; applying only trailer brakes can cause trailer wheel lockup and a violent trailer skid or jackknife."
},
  {
  "id": 54,
  "question": "What does Anti-lock Braking System (ABS) do for a commercial vehicle during hard emergency braking?",
  "options": [
    "It reduces stopping distance by at least 50 percent on every type of roadway and pavement condition",
    "It prevents wheels from locking up, helping the driver maintain directional steering control and stability during normal",
    "It automatically steers the front tractor axle away from obstacles without driver steering input under these conditions",
    "It eliminates the requirement for drivers to conduct daily pre-trip commercial brake inspections for safe operation for"
  ],
  "correctAnswerIndex": 1,
  "explanation": "ABS prevents wheel lockup during hard braking, allowing the driver to steer around obstacles and maintain vehicle control (it does not necessarily shorten stopping distance)."
},
  {
  "id": 55,
  "question": "On a combination vehicle, which line is the 'Emergency Line' (Supply Line) and what color is its glad hand connector?",
  "options": [
    "The line that carries air pressure when the driver presses the foot pedal; colored BLUE",
    "The line that supplies 12-volt electrical power to trailer tail lamps; colored GREEN during normal",
    "The line that supplies air to trailer tanks and controls emergency brakes; colored RED under",
    "The auxiliary fuel transfer line connecting dual saddle tanks; colored YELLOW for safe operation for"
  ],
  "correctAnswerIndex": 2,
  "explanation": "The Emergency (Supply) line is colored RED. It charges trailer air tanks and controls the emergency spring brakes."
},
  {
  "id": 56,
  "question": "Which glad hand line is the 'Service Line' (Control Line) on a tractor-trailer combination and what color is it?",
  "options": [
    "Line that supplies constant charging air to spring brakes; colored RED",
    "Auxiliary hydraulic return line for walking floor trailers; colored BLACK during",
    "High-voltage electrical cable supplying power to reefer; colored YELLOW under these",
    "Line carrying air pressure controlled by foot brake pedal; colored BLUE"
  ],
  "correctAnswerIndex": 3,
  "explanation": "The Service (Control) line is colored BLUE. It carries air pressure when the foot brake or trailer hand valve is applied."
},
  {
  "id": 57,
  "question": "What happens if you cross the service (blue) and emergency (red) air lines when coupling a tractor to a trailer?",
  "options": [
    "Air will not reach trailer tanks (springs stay locked) or pedal won't brake",
    "Fifth wheel locking jaws will shatter under sudden release of line pressure during",
    "Tractor diesel engine will stall instantly due to exhaust manifold pressure under these",
    "Dashboard speedometer will display erratic readings and trip an ABS warning for safe"
  ],
  "correctAnswerIndex": 0,
  "explanation": "If lines are crossed: air won't go to trailer tanks so trailer spring brakes won't release, or service line air won't properly actuate trailer service brakes."
},
  {
  "id": 58,
  "question": "What is the 'crack-the-whip' effect in multi-trailer combination vehicles?",
  "options": [
    "Tractor drive wheels hop violently when accelerating from dead stop on slick asphalt roads",
    "Rearward amplification causes rear trailer to swing much more violently than tractor in turns",
    "Loud whipping sound produced when glad hand rubber coupling seals separate under pressure under",
    "Rapid back-and-forth movement of fifth wheel slider plate when hauling heavy bulk liquids for"
  ],
  "correctAnswerIndex": 1,
  "explanation": "Rearward amplification ('crack-the-whip') means quick steering inputs are amplified toward the rear; the last trailer turns much harder and can easily roll over."
},
  {
  "id": 59,
  "question": "Why should the heaviest trailer always be positioned directly behind the tractor in a doubles or triples combination?",
  "options": [
    "To prevent excessive tire wear on front steering axle in city turns",
    "To ensure trailer refrigeration unit receives adequate cooling air during normal operation",
    "To maximize vehicle stability and prevent dangerous rollover risks under these conditions",
    "To comply with federal regulations on hazardous materials placards for safe operation"
  ],
  "correctAnswerIndex": 2,
  "explanation": "Always place the heaviest trailer in the front (first position behind tractor) and lightest in the rear to maintain combination stability and avoid rollover from crack-the-whip effect."
},
  {
  "id": 60,
  "question": "When coupling a tractor to a semitrailer, what position should the trailer be relative to the fifth wheel before backing under it?",
  "options": [
    "The trailer should be raised 4 inches higher than the fifth wheel so the kingpin drops cleanly into the jaws",
    "The trailer should be tilted backward at a 15-degree angle to align with the fifth wheel mounting plate during normal",
    "The trailer height does not matter because modern air suspensions adjust automatically during coupling under these conditions under these conditions",
    "The trailer should be slightly lower than the fifth wheel so the tractor lifts the trailer as it backs under"
  ],
  "correctAnswerIndex": 3,
  "explanation": "The trailer must be at the correct height: slightly below the center of the fifth wheel so the tractor gently lifts the trailer as it slides underneath."
},
  {
  "id": 61,
  "question": "After coupling the tractor to the trailer, how should you verify that the fifth wheel locking jaws have securely closed around the kingpin?",
  "options": [
    "Look inside fifth wheel with flashlight to ensure jaws are fully closed around kingpin shank in",
    "Rely solely on the loud clunk sound heard from cab when backing into trailer kingpin apron",
    "Tap dashboard trailer supply knob and confirm storage air pressure remains above 100 psi under these",
    "Drive forward 100 feet at highway speed to test whether trailer tracks straight behind cab for"
  ],
  "correctAnswerIndex": 0,
  "explanation": "Always visually inspect the fifth wheel connection with a flashlight to ensure the locking jaws are completely closed around the narrow shank of the kingpin."
},
  {
  "id": 62,
  "question": "What is the 'tug test' performed immediately after coupling a tractor to a semitrailer?",
  "options": [
    "Pull emergency breakaway cable by hand to test whether trailer parking brakes apply firmly in",
    "Gently pull forward against locked trailer brakes in low gear to confirm jaws are locked",
    "Vigorously pull glad hand rubber hoses to check for loose brass fittings and air leakage",
    "Rock steering wheel left and right while reversing to check for fifth wheel lateral play"
  ],
  "correctAnswerIndex": 1,
  "explanation": "The tug test: with trailer brakes locked, put tractor in low gear and gently pull forward to feel that the kingpin is firmly locked inside the fifth wheel jaws."
},
  {
  "id": 63,
  "question": "How much space should there be between the fifth wheel plate and the trailer apron after coupling?",
  "options": [
    "Between one-half inch and one inch of clearance for turning in",
    "At least two inches of space to allow suspension articulation during",
    "No space (no daylight) between the fifth wheel and trailer apron",
    "About one-quarter inch of space to prevent metal friction for safe"
  ],
  "correctAnswerIndex": 2,
  "explanation": "There should be NO space (no daylight) between the fifth wheel plate and the trailer apron; any gap indicates the kingpin is not properly seated."
},
  {
  "id": 64,
  "question": "When uncoupling a semitrailer, what must you do with the trailer landing gear (dollies)?",
  "options": [
    "Lower landing gear until two inches above ground so it does not drag when tractor pulls away in",
    "Leave landing gear in high gear without ground contact to let tractor air suspension dump air during normal",
    "Lower only driver-side landing leg and chock passenger-side trailer tandem wheels on ground under these conditions under these",
    "Lower gear to firm ground contact, then crank extra turns in low gear to lift weight off tractor"
  ],
  "correctAnswerIndex": 3,
  "explanation": "Lower landing gear until it touches the ground, then give it a few extra turns in low gear to lift some weight off the tractor fifth wheel."
},
  {
  "id": 65,
  "question": "What should you do before backing under a trailer on soft ground or hot asphalt?",
  "options": [
    "Place wooden or steel hardwood boards under the landing gear pads to prevent them from sinking into the ground",
    "Deflate trailer tires to 50 percent normal pressure to increase the contact surface area of the tires during normal",
    "Disconnect the tractor steer axle shock absorbers to increase front bumper clearance over rough terrain under these conditions under",
    "Coat the landing gear sand shoes with heavy chassis grease to prevent them from sticking to the asphalt for"
  ],
  "correctAnswerIndex": 0,
  "explanation": "On soft ground or hot asphalt, place hardwood boards under the landing gear pads to keep the landing gear from sinking and tilting the trailer."
},
  {
  "id": 66,
  "question": "Under Minnesota and federal regulations, who is responsible for ensuring that cargo is properly distributed, balanced, and secured in a commercial vehicle?",
  "options": [
    "The warehouse shipping dock supervisor in",
    "The commercial motor vehicle driver during",
    "The third-party freight broker agency under",
    "The consignee receiving the freight cargo"
  ],
  "correctAnswerIndex": 1,
  "explanation": "The driver is legally responsible for inspecting cargo, ensuring it does not exceed weight limits, is properly balanced, and is securely tied down (unless sealed/pre-loaded where inspection is prohibited)."
},
  {
  "id": 67,
  "question": "When transporting cargo, within what distance after starting a trip must the driver inspect the cargo and securement devices?",
  "options": [
    "Within the first 100 miles of beginning the trip",
    "Within the first 10 miles of beginning the trip",
    "Within the first 50 miles of beginning the trip",
    "Within the first 150 miles of beginning the trip"
  ],
  "correctAnswerIndex": 2,
  "explanation": "Drivers must inspect cargo and securement devices within the first 50 miles of a trip, and re-check every 3 hours or 150 miles (and during every duty status change)."
},
  {
  "id": 68,
  "question": "After the initial 50-mile check, how often must a commercial driver re-inspect cargo and tie-downs during transit?",
  "options": [
    "Every 5 hours or 300 miles (whichever comes first), and at the end of each duty shift",
    "Only when the vehicle stops for scheduled fuel refills or commercial weigh station checks during normal operation",
    "Every 8 hours or 400 miles, or whenever the electronic logging device records a stop under these",
    "Every 3 hours or 150 miles (whichever comes first), and after every driving break for safe operation"
  ],
  "correctAnswerIndex": 3,
  "explanation": "Federal regulations require cargo checks every 3 hours or 150 miles, and whenever the driver makes a change of duty status."
},
  {
  "id": 69,
  "question": "What is the Gross Vehicle Weight Rating (GVWR)?",
  "options": [
    "Maximum allowable total weight of a single vehicle plus complete cargo payload specified by maker in this",
    "Actual weight of empty truck and trailer before cargo, fuel, or driver is placed on the vehicle",
    "Combined scale weight of tractor and connected trailers measured at state highway weigh station under these conditions",
    "Maximum permissible weight on steering axle under federal highway bridge weight formula limits for safe operation for"
  ],
  "correctAnswerIndex": 0,
  "explanation": "GVWR is the maximum permissible total weight of a single vehicle plus its payload, as rated by the vehicle manufacturer."
},
  {
  "id": 70,
  "question": "What is the Gross Combination Weight Rating (GCWR)?",
  "options": [
    "Sum of empty tractor weight plus weight of driver and thirty gallons of diesel fuel in the tank",
    "Maximum allowable total weight of combination vehicle (power unit plus trailer and cargo) by maker during normal operation",
    "Maximum weight permitted on any individual tandem drive axle under interstate highway rules under these conditions under these",
    "Total certified payload weight of dry freight loaded into an intermodal shipping container for safe operation for safe"
  ],
  "correctAnswerIndex": 1,
  "explanation": "GCWR is the maximum allowable combined weight of the towing vehicle and the towed vehicle(s) plus all cargo and passengers, specified by the manufacturer."
},
  {
  "id": 71,
  "question": "What is the minimum number of tiedowns required for any cargo item regardless of size or weight (unless blocked on all sides)?",
  "options": [
    "At least one tiedown",
    "At least four tiedowns",
    "At least two tiedowns",
    "At least three tiedowns"
  ],
  "correctAnswerIndex": 2,
  "explanation": "No matter how small the cargo, there must be at least two tiedowns holding it (one tiedown is permitted only for items under 5 feet long and under 1,100 lbs if blocked)."
},
  {
  "id": 72,
  "question": "What is the general rule for the number of tiedowns required based on cargo length on an open flatbed trailer?",
  "options": [
    "At least one tiedown for every 20 feet of cargo length (with a minimum of one tiedown per article)",
    "At least two tiedowns for every 5 feet of cargo length regardless of whether cargo is blocked during normal",
    "At least four tiedowns for every 15 feet of cargo length across all commercial flatbed routes under these conditions",
    "At least one tiedown for every 10 feet of cargo length (with a minimum of two tiedowns per article)"
  ],
  "correctAnswerIndex": 3,
  "explanation": "On flatbeds, you need at least one tiedown for every 10 feet of cargo length, and at least two tiedowns regardless of how short the cargo is."
},
  {
  "id": 73,
  "question": "Why is a high center of gravity particularly dangerous in a commercial vehicle?",
  "options": [
    "It significantly increases the risk of vehicle rollover on curves, highway ramps, and sudden swerves in",
    "It causes the engine cooling fan clutch to disengage prematurely on steep uphill mountain climbs during",
    "It increases the air pressure required to actuate the trailer service brake diaphragm chambers under these",
    "It causes the tractor front steering axle tires to lose air pressure at high highway speeds"
  ],
  "correctAnswerIndex": 0,
  "explanation": "A high center of gravity makes a truck top-heavy, greatly increasing rollover danger during turns, off-ramp maneuvers, or sudden evasive steering."
},
  {
  "id": 74,
  "question": "What is the phenomenon of 'liquid surge' in a commercial tanker vehicle?",
  "options": [
    "Hydraulic fluid leaking from steering pump into engine oil during turns",
    "Movement of liquid cargo forward and backward, pushing truck during stops",
    "Diesel fuel splashing out of filler necks on rough railway crossings",
    "Condensation water collecting inside wet tank of air brake in winter"
  ],
  "correctAnswerIndex": 1,
  "explanation": "Liquid surge is the forward/backward sloshing of liquid in a partially filled tanker when braking or accelerating, which can shove the truck through an intersection."
},
  {
  "id": 75,
  "question": "What is the purpose of 'baffles' inside some commercial liquid tanker trailers?",
  "options": [
    "Solid internal walls that prevent liquid from sloshing side-to-side during high-speed highway turns",
    "Pneumatic heating elements that keep liquid asphalt from solidifying during cold winter transit",
    "Bulkheads with openings that slow down forward-and-back liquid surge during acceleration and braking",
    "Electronic sensors that monitor the chemical temperature and pressure of hazardous liquid loads"
  ],
  "correctAnswerIndex": 2,
  "explanation": "Baffles have holes that let liquid flow through while dampening front-to-back surge (they do NOT control side-to-side surge, which can still cause rollover)."
},
  {
  "id": 76,
  "question": "Why are 'unbaffled' (smooth bore) liquid tankers particularly difficult to drive and stop safely?",
  "options": [
    "Smooth bore tankers have smaller air brake chambers that take twice as long to build air pressure",
    "Lack of internal baffles makes the tanker outer skin weaker and prone to sudden structural failure during",
    "Smooth bore tankers cannot be equipped with modern tractor electronic anti-lock braking systems under these conditions under",
    "No internal barriers exist to restrict front-to-back liquid motion, creating powerful forward surges for safe operation for"
  ],
  "correctAnswerIndex": 3,
  "explanation": "Smooth bore tanks have nothing inside to slow down liquid movement, so forward/backward surge is very strong and requires extreme caution when stopping."
},
  {
  "id": 77,
  "question": "What shape and size are hazardous materials warning placards that must be displayed on commercial vehicles?",
  "options": [
    "Diamond-shaped, at least 9.84 inches (250 mm) square, placed on all four sides of the commercial vehicle",
    "Circular-shaped, at least 12 inches in diameter, placed exclusively on the rear bumper of the trailer during normal",
    "Rectangular-shaped, at least 15 inches wide by 8 inches tall, mounted on the front tractor grill only under",
    "Octagonal-shaped, at least 10 inches across, affixed to the driver and passenger side cab doors only for safe"
  ],
  "correctAnswerIndex": 0,
  "explanation": "Hazmat placards are square-on-point (diamond-shaped) measuring at least 250 mm (9.84 inches) on a side and must be placed on front, rear, and both sides (all 4 sides)."
},
  {
  "id": 78,
  "question": "Where must the driver keep the Hazardous Materials shipping papers while operating the commercial vehicle?",
  "options": [
    "Locked inside a metal lockbox located in the exterior side storage compartment of the tractor in",
    "In clear view within immediate reach while seatbelted, or in a pouch on the driver's door",
    "Stored in the glove compartment along with the vehicle registration and insurance identification under these conditions",
    "Taped to the inside rear door of the trailer next to the cargo load distribution manifest"
  ],
  "correctAnswerIndex": 1,
  "explanation": "Shipping papers must be in clear view within immediate reach of the driver (with seatbelt fastened) or in a pouch on the driver's door so first responders can find them instantly in an emergency."
},
  {
  "id": 79,
  "question": "When a commercial vehicle is placarded for hazardous materials, how far from the nearest rail must the driver stop at a railroad-highway crossing?",
  "options": [
    "Stop between 5 and 10 feet from the nearest rail",
    "Stop between 50 and 100 feet from the nearest rail",
    "Stop between 15 and 50 feet from the nearest rail",
    "Stop between 25 and 75 feet from the nearest rail"
  ],
  "correctAnswerIndex": 2,
  "explanation": "Vehicles required to stop at railroad crossings (placarded hazmat, buses with passengers) must stop 15 to 50 feet from the nearest rail before proceeding."
},
  {
  "id": 80,
  "question": "What must a commercial driver NEVER do while crossing railroad tracks with a manual transmission commercial vehicle?",
  "options": [
    "Look in both directions along the train tracks before advancing forward in this situation",
    "Turn off the cab heater fan and roll down windows to listen for trains",
    "Check the overhead clearance of railway signal arms before advancing under these conditions under",
    "Shift gears while the vehicle is directly crossing over the railroad tracks for safe"
  ],
  "correctAnswerIndex": 3,
  "explanation": "Never shift gears while crossing railroad tracks; shifting can cause gear grinding or stalling directly on the tracks."
},
  {
  "id": 81,
  "question": "Why is swinging into the left lane before making a right turn (a 'jug-handle' turn) dangerous in a commercial vehicle?",
  "options": [
    "Trailing drivers may assume you are turning left and attempt to pass you on your blind right side",
    "It causes the fifth wheel kingpin to uncouple from the tractor locking jaws during the maneuver during normal",
    "It automatically triggers the trailer emergency spring brakes due to line tension in the turn under these conditions",
    "It forces the air compressor to dump compressed moisture into the secondary service air lines for safe operation"
  ],
  "correctAnswerIndex": 0,
  "explanation": "Swinging wide to the left makes motorists behind think you're turning left; they may try to pass on your right, trapping them as you turn right (the 'jug-handle' trap)."
},
  {
  "id": 82,
  "question": "What should you do if another vehicle cuts into your safety space buffer ahead of you on the highway?",
  "options": [
    "Flash your high beams and tailgate closely to encourage the driver to speed up in",
    "Drop back smoothly to re-establish your proper safe following distance buffer during normal operation during",
    "Swerve onto the left shoulder immediately to maintain your exact travel speed under these conditions",
    "Honk your air horn and accelerate rapidly to pass the vehicle on the right side"
  ],
  "correctAnswerIndex": 1,
  "explanation": "If someone cuts into your space cushion, do not tailgate; ease off the accelerator to smoothly re-establish your proper following distance."
},
  {
  "id": 83,
  "question": "Why should you never park a loaded commercial trailer on soft ground or unpaved shoulders without support pads?",
  "options": [
    "Glad hand rubber coupling seals will melt from contact with road moisture in",
    "Tractor rear suspension air bags will over-inflate and rupture bladders during normal operation",
    "Landing gear legs can sink into ground, causing trailer to tilt or collapse",
    "Tractor drive tires will lose traction and spin freely when pulling away for"
  ],
  "correctAnswerIndex": 2,
  "explanation": "Loaded trailers are very heavy; unpadded landing gear legs can sink deep into soft ground, causing the trailer to tip over or collapse."
},
  {
  "id": 84,
  "question": "At 55 mph, how much clear sight distance do you need ahead of you before safely attempting to pass another vehicle?",
  "options": [
    "About 100 feet of clear sight distance ahead of your front bumper in",
    "The length of two semi-trailers (about 120 feet) of sight distance during normal",
    "About 300 feet of clear road ahead of the leading vehicle's bumper under",
    "Over one-third of a mile (about 1,800 feet) of clear sight distance"
  ],
  "correctAnswerIndex": 3,
  "explanation": "At 55 mph, you need over one-third of a mile of clear sight distance to pass safely because large trucks accelerate slowly and require significant passing distance."
},
  {
  "id": 85,
  "question": "What is 'hydroplaning' and what should you do if your commercial vehicle begins to hydroplane on standing water?",
  "options": [
    "Tires ride on a film of water losing traction; do not brake, ease off accelerator, and steer smoothly",
    "Water enters brake drums; pump service brakes rapidly while accelerating to dry out the linings during normal operation",
    "Air compressor draws water into cylinders; pull the yellow parking brake knob to shut off engine under these",
    "Tractor drive tires spin on ice; engage differential interlock and downshift to lowest gear for safe operation for"
  ],
  "correctAnswerIndex": 0,
  "explanation": "Hydroplaning occurs when tires ride on top of water instead of the road. Do not brake hard; release accelerator and keep vehicle pointed straight until tires regain grip."
},
  {
  "id": 86,
  "question": "What is 'black ice' and where does it commonly form first during freezing weather?",
  "options": [
    "Diesel soot and tire rubber that accumulates on concrete highway shoulder lanes in",
    "Thin, clear ice looking like wet pavement, forming first on bridges and overpasses",
    "Asphalt sealant that has not cured properly after highway construction work under these",
    "Ice mixed with engine oil in commercial truck parking stalls and truck stops"
  ],
  "correctAnswerIndex": 1,
  "explanation": "Black ice is a thin layer of transparent ice through which the dark road surface is visible. It looks like wet pavement and forms first on bridges and overpasses."
},
  {
  "id": 87,
  "question": "What should you do if your commercial vehicle experiences a drive-wheel skid on a slippery road?",
  "options": [
    "Slam on service brakes immediately to lock all wheels and slide vehicle to an abrupt stop",
    "Pull yellow parking brake knob on dashboard to engage rear drive axle spring brakes firmly during",
    "Stop braking, steer in direction of skid, and counter-steer smoothly as vehicle straightens under these conditions",
    "Turn steering wheel sharply in opposite direction of skid while applying full acceleration for safe operation"
  ],
  "correctAnswerIndex": 2,
  "explanation": "To correct a drive-wheel skid: stop braking, push in clutch, turn the steering wheel in the direction of the skid, and counter-steer to prevent fish-tailing as control returns."
},
  {
  "id": 88,
  "question": "What is a 'front-wheel skid' (understeer) in a commercial vehicle and how do you recover from it?",
  "options": [
    "Drive wheels lose traction and swing outward; apply trailer hand valve to pull unit straight in",
    "Trailer wheels slide toward oncoming traffic; downshift transmission and accelerate firmly during normal operation during normal",
    "Steering box locks up mechanically; apply maximum foot brake pressure to force wheels skid under these",
    "Front wheels lose traction and truck goes straight; ease off gas and let vehicle slow down"
  ],
  "correctAnswerIndex": 3,
  "explanation": "In a front-wheel skid, the truck continues in a straight line regardless of steering wheel angle. Stop braking, ease off the gas, and let the front tires regain traction."
},
  {
  "id": 89,
  "question": "What causes most commercial vehicle brake fires?",
  "options": [
    "Excessive braking heat from descending hills, and dragging adjusted brakes in this",
    "Electrical shorts in tractor alternator harness igniting washer fluid hoses during normal",
    "Static electricity generated by rapid airflow across side aerodynamic wings under these",
    "Low tire pressure allowing wheel rims to contact brake drums during transit"
  ],
  "correctAnswerIndex": 0,
  "explanation": "Most vehicle brake fires result from excessive heat caused by dragging brakes, driving with parking brakes set, improperly adjusted brakes, or overusing brakes on steep hills."
},
  {
  "id": 90,
  "question": "What type of fire extinguisher is required on a commercial motor vehicle that does NOT transport hazardous materials?",
  "options": [
    "A fire extinguisher with a UL rating of at least 20 B:C (or two 10 B:C)",
    "A fire extinguisher with a UL rating of at least 5 B:C (or two 4 B:C)",
    "A pressurized water extinguisher of at least 2.5 gallons capacity unit under these conditions under these conditions",
    "A carbon dioxide extinguisher rated exclusively for Class A wood fires for safe operation for safe operation for"
  ],
  "correctAnswerIndex": 1,
  "explanation": "Non-hazmat CMVs must have at least one UL-rated 5 B:C (or higher) fire extinguisher (or two 4 B:C units). Vehicles transporting hazardous materials require at least 10 B:C."
},
  {
  "id": 91,
  "question": "What type of fire extinguisher is required on a commercial motor vehicle transporting hazardous materials?",
  "options": [
    "A fire extinguisher with a UL rating of at least 5 B:C (or two 4 B:C)",
    "A pressurized water extinguisher of at least 2.5 gallons capacity unit during normal operation during normal operation",
    "A fire extinguisher with a UL rating of at least 10 B:C (or two 5 B:C)",
    "A dry chemical extinguisher rated exclusively for Class D metal fires for safe operation for safe operation for"
  ],
  "correctAnswerIndex": 2,
  "explanation": "Commercial motor vehicles hauling placarded hazardous materials must carry a fire extinguisher with an Underwriters Laboratories (UL) rating of 10 B:C or more."
},
  {
  "id": 92,
  "question": "How should you fight a commercial vehicle fire using a portable fire extinguisher?",
  "options": [
    "Stand downwind, aim at top of flames, and empty can in one heavy blast",
    "Open engine hood fully to expose flames before discharging extinguisher during normal operation during",
    "Pour water over wiring harness before discharging dry chemical powders under these conditions under",
    "Stay upwind, aim at base of fire, sweep side to side, keep escape open"
  ],
  "correctAnswerIndex": 3,
  "explanation": "Proper extinguisher technique (PASS): Pull pin, Aim at BASE of fire, Squeeze handle, Sweep from side to side. Stay upwind so smoke blows away from you."
},
  {
  "id": 93,
  "question": "Why should you NEVER use water to fight a burning tire fire or gasoline/diesel fuel fire?",
  "options": [
    "Water can cause burning liquid fuel to spread and burning tires to explode violently",
    "Water evaporates and suffocates the diesel engine air intake manifold assembly during normal operation",
    "Water triggers the automatic trailer emergency spring brake chambers to lock up under these",
    "Water washes the required DOT commercial inspection decals off the tractor doors for safe"
  ],
  "correctAnswerIndex": 0,
  "explanation": "Never use water on burning liquid fuels (water spreads the fire) or burning tires (water can cause burning rubber to explode and throw molten fragments)."
},
  {
  "id": 94,
  "question": "During an in-cab air brake test, what indicates a serious air brake system leak that requires immediate repair?",
  "options": [
    "Engine idle speed increases by 200 RPM when service brake pedal is fully depressed in this",
    "Air pressure drops over 3 psi per minute for straight truck or 4 psi for combination",
    "Service brake pedal vibrates slightly under continuous steady foot brake pressure under these conditions under these",
    "Tractor low-beam headlights dim momentarily when air compressor engages clutch for safe operation for safe operation"
  ],
  "correctAnswerIndex": 1,
  "explanation": "With engine off and brakes applied: leakage over 3 psi/min for straight trucks or 4 psi/min for combinations indicates a major leak that must be fixed before driving."
},
  {
  "id": 95,
  "question": "If a commercial driver's license is suspended, revoked, or canceled in ANY state, when must the driver notify their employer?",
  "options": [
    "Within 30 calendar days of receiving written notification by mail from the state in",
    "Only upon renewing commercial medical examiner certificate every two years at clinic during normal",
    "Before end of business day following the day driver received notice of the action",
    "At annual employer commercial driver qualification file review safety meeting for safe operation for"
  ],
  "correctAnswerIndex": 2,
  "explanation": "Drivers must notify their employer of any license suspension, revocation, or cancellation before the end of the business day following the day they received notice."
},
  {
  "id": 96,
  "question": "What is the penalty for operating a commercial motor vehicle while under an Out-of-Service Order (first offense)?",
  "options": [
    "A written reprimand placed in the driver's employer file for 30 calendar days",
    "A mandatory 24-hour driving rest period at a designated state highway weigh station",
    "No penalty if the driver was completing an existing scheduled freight delivery under",
    "Disqualification for at least 180 days (1-2 years for hazmat/passengers) plus fines"
  ],
  "correctAnswerIndex": 3,
  "explanation": "Violating an out-of-service order results in CDL disqualification of at least 180 days (1 year for hazmat/passengers) for a first offense, plus substantial civil penalties."
},
  {
  "id": 97,
  "question": "What should you do if a front steering tire blows out while driving at highway speed?",
  "options": [
    "Do not brake hard; hold wheel firmly, ease off gas, and steer safely to stop",
    "Lock trailer brakes immediately using red trailer air supply dashboard knob during normal operation during",
    "Shift transmission into reverse to force driveline into rapid counter-spin under these conditions under these",
    "Pull yellow parking brake knob while traveling at full highway cruising speed for safe operation"
  ],
  "correctAnswerIndex": 0,
  "explanation": "A front tire blowout pulls hard to that side. Hold the wheel firmly with both hands, do NOT slam on brakes (which can cause rollover), ease off the gas, and brake gently once the vehicle is stabilized."
},
  {
  "id": 98,
  "question": "Under FMCSA Hours of Service (HOS) rules for property-carrying commercial drivers, what is the maximum number of driving hours permitted following 10 consecutive hours off duty?",
  "options": [
    "A maximum of 14 hours of driving time",
    "A maximum of 11 hours of driving time",
    "A maximum of 10 hours of driving time",
    "A maximum of 12 hours of driving time"
  ],
  "correctAnswerIndex": 1,
  "explanation": "Property-carrying commercial drivers may drive a maximum of 11 hours after 10 consecutive hours off duty (within a 14-hour duty window)."
},
  {
  "id": 99,
  "question": "What is a 'converter dolly' used in combination vehicle operations?",
  "options": [
    "A mechanical hoist used to raise heavy palletized cargo freight inside an enclosed dry van trailer in this situation in",
    "An electronic diagnostics scanner that monitors trailer anti-lock brake wheel speed sensor data during normal operation during normal operation during",
    "A coupling device with one or two axles, a fifth wheel, and a towbar used to couple a second semitrailer",
    "An auxiliary diesel fuel tank mounted directly onto the trailer landing gear support structure for safe operation for safe operation"
  ],
  "correctAnswerIndex": 2,
  "explanation": "A converter dolly is a coupling device consisting of one or two axles, a fifth wheel, and a towbar, used to connect a trailing semitrailer to create double or triple combinations."
},
  {
  "id": 100,
  "question": "What is the first step in the standard 7-step pre-trip inspection method taught in the Minnesota CDL manual?",
  "options": [
    "Starting the engine and revving tachometer to 2000 RPM to check turbocharger boost pressure in",
    "Pumping service brake pedal twenty times to deplete air pressure in secondary reservoir tanks during",
    "Backing tractor under trailer kingpin to check fifth wheel jaw locking engagement in the yard",
    "Vehicle Overview (approaching vehicle, checking general condition, leaks, damage, and leaning) for safe operation for"
  ],
  "correctAnswerIndex": 3,
  "explanation": "Step 1 of the 7-Step Inspection Method is Vehicle Overview: approaching the vehicle, reviewing the last driver vehicle inspection report (DVIR), and checking general condition, leaning, damage, and fresh leaks under the vehicle."
},
  {
  "id": 101,
  "question": "A driver checks the vehicle before leaving the terminal. Which defect should be treated as an immediate safety concern?",
  "options": [
    "A loose steering component can affect vehicle directional control in",
    "A cracked windshield lies outside the driver's normal viewing area",
    "A faded company decal covers part of the trailer exterior",
    "A dusty frame rail shows ordinary road grime from yesterday"
  ],
  "correctAnswerIndex": 0,
  "explanation": "The manual emphasizes inspecting critical steering components because defects can cause loss of directional control."
},
  {
  "id": 102,
  "question": "During a pre-trip inspection, why should a driver inspect the area beneath the vehicle?",
  "options": [
    "To confirm the cargo company logo faces the roadway correctly",
    "To identify fresh leaks or other signs of mechanical trouble",
    "To measure whether the pavement has enough traction for departure",
    "To determine whether nearby vehicles have their headlights operating for"
  ],
  "correctAnswerIndex": 1,
  "explanation": "The vehicle overview includes checking beneath the vehicle for fresh leaks and damage."
},
  {
  "id": 103,
  "question": "A driver reviews the previous Driver Vehicle Inspection Report before departure. Why?",
  "options": [
    "It replaces the driver's current inspection whenever the report is signed",
    "It allows the driver to skip checking equipment listed as repaired",
    "It identifies previously reported defects that may require verification under these",
    "It proves the vehicle automatically passed the current inspection for safe"
  ],
  "correctAnswerIndex": 2,
  "explanation": "The inspection method includes reviewing the last Driver Vehicle Inspection Report and checking reported defects."
},
  {
  "id": 104,
  "question": "Which observation during a walk-around most strongly suggests a possible suspension problem?",
  "options": [
    "A clean reflective stripe appears along the trailer side",
    "The fuel cap has a manufacturer identification label during",
    "The cargo door has a recently replaced locking handle",
    "The vehicle leans noticeably to one side while parked"
  ],
  "correctAnswerIndex": 3,
  "explanation": "The vehicle overview includes checking for abnormal leaning, which can indicate a mechanical problem."
},
  {
  "id": 105,
  "question": "A driver notices a fresh fluid puddle beneath the engine compartment. What is the safest response?",
  "options": [
    "Identify the source and correct the defect before operating the vehicle in",
    "Ignore it if the engine starts normally and the dashboard looks normal",
    "Drive slowly until the fluid reaches normal operating temperature under these conditions",
    "Cover the puddle with absorbent material and continue the trip for safe"
  ],
  "correctAnswerIndex": 0,
  "explanation": "Fresh leaks are a condition the manual directs drivers to identify during the vehicle overview."
},
  {
  "id": 106,
  "question": "Why should a commercial driver regularly scan traffic rather than stare at one vehicle?",
  "options": [
    "Scanning keeps the driver's eyes fixed on the lane center",
    "Scanning helps identify developing hazards before they become immediate during",
    "Scanning eliminates the need to check mirrors during normal driving",
    "Scanning guarantees other drivers will maintain predictable positions for safe"
  ],
  "correctAnswerIndex": 1,
  "explanation": "The manual teaches active visual searching so drivers can identify hazards early."
},
  {
  "id": 107,
  "question": "A truck is approaching an intersection where another vehicle may turn across its path. What should the driver do?",
  "options": [
    "Accelerate to enter the intersection before the other vehicle moves in",
    "Reduce attention to the crossing vehicle and watch only the signal",
    "Anticipate the conflict and be prepared to slow or stop under",
    "Move toward the centerline to discourage the other vehicle for safe"
  ],
  "correctAnswerIndex": 2,
  "explanation": "Commercial drivers should anticipate conflicts and maintain enough space to respond safely."
},
  {
  "id": 108,
  "question": "A heavy vehicle is traveling downhill and begins gaining speed. Which approach is emphasized?",
  "options": [
    "Shift to neutral and use only the parking brake when needed",
    "Keep increasing speed until the engine reaches its normal highway load",
    "Use the trailer hand valve continuously as the primary speed control",
    "Use an appropriate lower gear before the descent becomes uncontrolled for"
  ],
  "correctAnswerIndex": 3,
  "explanation": "The manual emphasizes selecting the proper gear before descending long or steep grades."
},
  {
  "id": 109,
  "question": "Why is selecting a lower gear before a steep downgrade important?",
  "options": [
    "It helps control speed and reduces dependence on service brakes",
    "It allows the driver to coast without using the drivetrain",
    "It increases trailer surge so the load stays centered under",
    "It guarantees the vehicle will stop without service braking for"
  ],
  "correctAnswerIndex": 0,
  "explanation": "Proper gearing helps control speed and reduces overheating of the service brakes."
},
  {
  "id": 110,
  "question": "A truck approaches a curve faster than conditions allow. What should the driver avoid?",
  "options": [
    "Reducing speed smoothly before entering the curve in",
    "Braking sharply while already deep into the curve",
    "Maintaining a stable lane position through the curve",
    "Looking through the curve toward the intended path"
  ],
  "correctAnswerIndex": 1,
  "explanation": "The manual warns that excessive speed in curves can lead to loss of control or rollover."
},
  {
  "id": 111,
  "question": "What is the safest response when a commercial vehicle begins to skid?",
  "options": [
    "Make abrupt steering inputs to force the vehicle back into line",
    "Accelerate aggressively so the drive tires regain traction during normal operation",
    "Remove the cause of the skid and avoid sudden control inputs",
    "Apply the parking brake to stabilize every type of skid for"
  ],
  "correctAnswerIndex": 2,
  "explanation": "The manual emphasizes smooth control and correcting the cause of a skid rather than abrupt inputs."
},
  {
  "id": 112,
  "question": "A driver enters a wet roadway after a long dry period. Why can conditions be especially slippery?",
  "options": [
    "Wet pavement always provides more tire grip than dry pavement in",
    "Commercial tires automatically become harder after rainfall during normal operation during",
    "Water removes all surface contaminants before traffic arrives under these conditions",
    "Oil and other residue can mix with water on the pavement"
  ],
  "correctAnswerIndex": 3,
  "explanation": "The manual notes that wet roads can be especially slippery when water mixes with roadway residue."
},
  {
  "id": 113,
  "question": "When visibility is reduced by fog, what should a commercial driver generally do?",
  "options": [
    "Slow down and increase following distance while using proper lights in",
    "Increase speed so the vehicle spends less time inside the fog",
    "Follow the vehicle ahead closely to use its lights as guidance",
    "Turn off all lights to reduce glare from suspended moisture for"
  ],
  "correctAnswerIndex": 0,
  "explanation": "Reduced visibility requires lower speed, more space, and appropriate lighting."
},
  {
  "id": 114,
  "question": "A driver encounters strong crosswinds while operating an empty trailer. Why can the vehicle be affected?",
  "options": [
    "An empty trailer has no tires touching the pavement in",
    "The trailer presents a large side area to the wind",
    "Crosswinds automatically disable trailer anti-lock braking systems under these conditions",
    "Wind can only affect tank vehicles and passenger buses for"
  ],
  "correctAnswerIndex": 1,
  "explanation": "Large commercial vehicles, especially empty trailers, can be affected by strong side winds."
},
  {
  "id": 115,
  "question": "What should a driver do when approaching a work zone with narrowed lanes?",
  "options": [
    "Reduce attention because construction traffic is usually predictable in this situation in",
    "Maintain speed and rely on other vehicles to merge around the truck",
    "Slow as needed, watch for changing lanes, and follow signs under these",
    "Move onto the shoulder whenever the normal lane appears narrow for safe"
  ],
  "correctAnswerIndex": 2,
  "explanation": "The manual stresses caution in work zones, altered lanes, and unpredictable construction activity."
},
  {
  "id": 116,
  "question": "A driver sees a sign warning that a lane will end ahead. What should happen first?",
  "options": [
    "Accelerate onto the shoulder before the lane disappears in this situation",
    "Stop in the lane and wait for a gap to appear",
    "Move immediately without checking mirrors because the lane is ending under",
    "Plan the merge early while maintaining a safe space cushion for"
  ],
  "correctAnswerIndex": 3,
  "explanation": "Early planning and maintaining a safe space cushion reduce conflicts near lane closures."
},
  {
  "id": 117,
  "question": "A commercial vehicle is being tailgated while climbing a hill. What can help reduce the risk?",
  "options": [
    "Stay in the right lane when practical and avoid unnecessary passing",
    "Move left immediately so faster traffic cannot pass during normal operation",
    "Brake repeatedly to force the following vehicle farther back under these",
    "Accelerate beyond the vehicle's safe operating speed for safe operation for"
  ],
  "correctAnswerIndex": 0,
  "explanation": "The manual advises heavy vehicles to stay right when slower uphill travel causes tailgating."
},
  {
  "id": 118,
  "question": "Why should a truck driver avoid assuming a smaller vehicle will stop as slowly as the truck?",
  "options": [
    "Passenger vehicles always require more braking distance than trucks in",
    "Smaller vehicles may stop faster, leaving less time to react",
    "All vehicles have identical stopping distances at equal speeds under",
    "Truck tires provide enough braking force to compensate automatically for"
  ],
  "correctAnswerIndex": 1,
  "explanation": "The manual specifically notes that a smaller vehicle may stop faster than a heavy truck."
},
  {
  "id": 119,
  "question": "A vehicle cuts into a truck's following distance. What should the truck driver do?",
  "options": [
    "Accelerate closely behind the vehicle to discourage another merge in",
    "Move onto the shoulder to preserve the original following interval",
    "Ease off smoothly and rebuild the needed space ahead under",
    "Use the parking brake briefly to create an immediate gap"
  ],
  "correctAnswerIndex": 2,
  "explanation": "When another vehicle enters the space cushion, the truck should reduce speed and rebuild space."
},
  {
  "id": 120,
  "question": "Why should a commercial driver look well ahead rather than focus only on nearby traffic?",
  "options": [
    "Long-distance scanning makes mirror checks unnecessary during highway travel in this",
    "Looking farther ahead prevents all sudden hazards from developing during normal",
    "A driver can safely ignore side traffic when looking far ahead",
    "Early visual detection provides more time to adjust speed or position"
  ],
  "correctAnswerIndex": 3,
  "explanation": "The manual teaches looking far enough ahead to recognize developing hazards and plan responses."
},
  {
  "id": 121,
  "question": "When backing a commercial vehicle, why is a spotter useful when available?",
  "options": [
    "The spotter can help identify hazards hidden from the driver's view",
    "The spotter replaces the driver's responsibility for controlling the vehicle during",
    "The spotter permits faster backing because mirrors become unnecessary under these",
    "The spotter may stand directly behind the vehicle for better visibility"
  ],
  "correctAnswerIndex": 0,
  "explanation": "A helper can identify hazards outside the driver's view, but the driver remains responsible for control."
},
  {
  "id": 122,
  "question": "What should a driver do if the spotter disappears from view while backing?",
  "options": [
    "Continue slowly because the spotter is assumed to be clear",
    "Stop immediately and reestablish communication before continuing during normal operation",
    "Turn sharply toward the last location where the spotter stood",
    "Accelerate briefly to finish the backing maneuver sooner for safe"
  ],
  "correctAnswerIndex": 1,
  "explanation": "If the driver loses sight of the helper, stopping is the safe response."
},
  {
  "id": 123,
  "question": "Why is backing toward the driver's side generally preferred?",
  "options": [
    "It eliminates every blind spot around a combination vehicle in this situation",
    "It allows the driver to back without using mirrors during normal operation",
    "It gives the driver a better direct view of the backing path",
    "It guarantees the trailer will follow the tractor without correction for safe"
  ],
  "correctAnswerIndex": 2,
  "explanation": "Backing toward the driver's side generally provides better visibility than blind-side backing."
},
  {
  "id": 124,
  "question": "A driver must back into a confined area. What should be done before moving?",
  "options": [
    "Begin backing immediately while watching only the rear camera in this",
    "Sound the horn continuously and assume pedestrians will move away during",
    "Turn the steering wheel fully before checking the surroundings under these",
    "Inspect the area and identify obstacles, clearance, and the intended path"
  ],
  "correctAnswerIndex": 3,
  "explanation": "The manual emphasizes knowing the backing path and checking the area before moving."
},
  {
  "id": 125,
  "question": "Which statement best describes the danger of blind-side backing?",
  "options": [
    "The driver has reduced visibility of the vehicle's path and hazards in",
    "The trailer automatically turns farther than the tractor in every direction during",
    "Air brakes apply less force whenever the driver backs toward the right",
    "Blind-side backing is prohibited for every commercial vehicle for safe operation for"
  ],
  "correctAnswerIndex": 0,
  "explanation": "Blind-side backing reduces the driver's ability to see the path and surrounding hazards."
},
  {
  "id": 126,
  "question": "A driver is preparing to pass another vehicle on a two-lane road. What is most important before beginning?",
  "options": [
    "Move left immediately and rely on the other driver to brake",
    "Ensure adequate clear distance and enough time to complete the pass",
    "Begin passing whenever the vehicle ahead is traveling below the limit",
    "Use the shoulder if opposing traffic appears during the maneuver for"
  ],
  "correctAnswerIndex": 1,
  "explanation": "Large vehicles need substantial distance and time to pass safely."
},
  {
  "id": 127,
  "question": "Why does a commercial vehicle need more room to pass than a passenger car?",
  "options": [
    "Its mirrors eliminate the need for a long passing interval in this",
    "Its trailer automatically increases speed once the tractor signals during normal operation",
    "It accelerates more slowly and requires more distance to complete the maneuver",
    "Its larger tires allow it to stop instantly if traffic appears for"
  ],
  "correctAnswerIndex": 2,
  "explanation": "Heavy vehicles generally accelerate more slowly and need greater passing distance."
},
  {
  "id": 128,
  "question": "What should a driver do if an oncoming vehicle appears while beginning a pass?",
  "options": [
    "Continue accelerating because the truck has priority once passing in this situation",
    "Use the shoulder immediately regardless of traffic conditions during normal operation during",
    "Stop in the opposing lane until the other vehicle passes under these",
    "Return to the original lane only when it can be done safely"
  ],
  "correctAnswerIndex": 3,
  "explanation": "A pass must be abandoned or completed only in a way that avoids conflict with oncoming traffic."
},
  {
  "id": 129,
  "question": "Why should a driver check mirrors before changing lanes?",
  "options": [
    "Mirrors help identify vehicles occupying or approaching the intended lane in this situation",
    "Mirror checks are required only when the lane change is to the left",
    "Mirrors guarantee that no vehicle is hidden in every blind spot under these",
    "Mirror checks allow the driver to change lanes without signaling for safe operation"
  ],
  "correctAnswerIndex": 0,
  "explanation": "Mirror checks are essential for identifying nearby traffic before lane changes."
},
  {
  "id": 130,
  "question": "What is a key limitation of convex mirrors on commercial vehicles?",
  "options": [
    "They provide a magnified view that eliminates blind spots in this",
    "They make objects appear smaller and farther away than they are",
    "They show only vehicles behind the trailer and never beside it",
    "They automatically measure the exact distance to approaching traffic for safe"
  ],
  "correctAnswerIndex": 1,
  "explanation": "Convex mirrors provide a wider view but make objects appear smaller and farther away."
},
  {
  "id": 131,
  "question": "Why should a driver avoid staring continuously at one mirror?",
  "options": [
    "One mirror normally provides complete coverage around a tractor-trailer in",
    "Continuous mirror viewing prevents the vehicle from drifting laterally during",
    "Attention must be shared among mirrors, roadway, and developing hazards",
    "Looking away from a mirror automatically activates the warning lights"
  ],
  "correctAnswerIndex": 2,
  "explanation": "Commercial drivers need a balanced visual scan rather than fixation on one area."
},
  {
  "id": 132,
  "question": "What does 'space management' mean for a commercial driver?",
  "options": [
    "Keeping the truck exactly centered regardless of traffic conditions in this",
    "Leaving a fixed distance that never changes with speed or weather",
    "Using the shoulder as a permanent escape route during congestion under",
    "Maintaining usable space around the vehicle for safe maneuvering for safe"
  ],
  "correctAnswerIndex": 3,
  "explanation": "Space management means maintaining usable space around the vehicle to provide options."
},
  {
  "id": 133,
  "question": "Why should slippery conditions increase the following distance of a commercial vehicle?",
  "options": [
    "Tire traction is reduced, increasing the distance needed to stop",
    "Air brakes work faster whenever pavement becomes wet during normal",
    "Wet pavement makes heavy vehicles substantially lighter under these conditions",
    "Following distance becomes less important when traffic slows for safe"
  ],
  "correctAnswerIndex": 0,
  "explanation": "Reduced traction increases stopping distance, so additional space is necessary."
},
  {
  "id": 134,
  "question": "A driver approaches a railroad crossing with a manual transmission. What should the driver plan to avoid?",
  "options": [
    "Checking both directions before entering the crossing in",
    "Changing gears while crossing the tracks during normal",
    "Ensuring enough room to clear the tracks completely",
    "Following any required stopping rule before crossing for"
  ],
  "correctAnswerIndex": 1,
  "explanation": "The manual warns drivers not to shift gears while crossing railroad tracks."
},
  {
  "id": 135,
  "question": "Why should a driver know the vehicle's clearance before entering a low-clearance area?",
  "options": [
    "Trailer length determines overhead clearance more than vehicle height in this",
    "Air suspension always lowers the vehicle enough for any posted opening",
    "The vehicle's height can exceed the available overhead clearance under these",
    "Clearance signs apply only to passenger vehicles and school buses for"
  ],
  "correctAnswerIndex": 2,
  "explanation": "Drivers must know vehicle height and compare it with posted clearance."
},
  {
  "id": 136,
  "question": "A commercial driver approaches a bridge with a posted weight limit below the vehicle's actual allowed weight. What should happen?",
  "options": [
    "Enter slowly because bridge limits apply only to stopped vehicles in this situation",
    "Use the shoulder so the bridge carries less of the vehicle weight during",
    "Continue if the trailer is empty even when the combination exceeds the limit",
    "Do not enter unless the vehicle meets the posted restriction for safe operation"
  ],
  "correctAnswerIndex": 3,
  "explanation": "Posted bridge restrictions must be obeyed by commercial vehicles."
},
  {
  "id": 137,
  "question": "What is the main purpose of cargo securement?",
  "options": [
    "Prevent cargo from shifting, falling, leaking, or becoming a hazard in",
    "Keep cargo perfectly centered even when the roadway curves during normal",
    "Increase the vehicle's rated payload beyond the manufacturer's limit under these",
    "Allow the driver to skip cargo inspections after the first stop"
  ],
  "correctAnswerIndex": 0,
  "explanation": "Cargo securement keeps the load from shifting or falling and protects other road users."
},
  {
  "id": 138,
  "question": "A driver notices a tie-down has loosened during a cargo inspection. What should happen?",
  "options": [
    "Ignore it if the cargo remains inside the trailer walls in",
    "Stop when safe and correct the securement before continuing during normal",
    "Increase speed so wind pressure tightens the tie-down automatically under these",
    "Wait until the next scheduled fuel stop regardless of the risk"
  ],
  "correctAnswerIndex": 1,
  "explanation": "Loose securement devices must be corrected before the load can safely continue."
},
  {
  "id": 139,
  "question": "Why is uneven cargo distribution dangerous?",
  "options": [
    "It always increases engine horsepower and reduces stopping distance in this",
    "It prevents the driver from using any transmission gear above first",
    "It can affect steering, braking, axle loading, and vehicle stability under",
    "It only matters when the cargo consists of hazardous materials for"
  ],
  "correctAnswerIndex": 2,
  "explanation": "Uneven loading can affect handling, braking, axle weights, and stability."
},
  {
  "id": 140,
  "question": "What is the purpose of blocking cargo when required?",
  "options": [
    "It replaces every required tiedown regardless of cargo type in this situation",
    "It guarantees cargo will not move in any direction under any force",
    "It allows cargo to exceed the vehicle's rated weight capacity under these",
    "It helps prevent cargo movement in the direction of the block for"
  ],
  "correctAnswerIndex": 3,
  "explanation": "Blocking can prevent movement in a particular direction but does not replace all securement requirements."
},
  {
  "id": 141,
  "question": "Why can a high center of gravity make a truck more difficult to control?",
  "options": [
    "It increases rollover risk during turns and sudden steering in",
    "It lowers the truck's effective height during sharp curves during",
    "It makes service brakes automatically apply with less pedal pressure",
    "It prevents wind from affecting the vehicle's upper surfaces for"
  ],
  "correctAnswerIndex": 0,
  "explanation": "A high center of gravity increases rollover risk during turns and abrupt maneuvers."
},
  {
  "id": 142,
  "question": "A driver is carrying a partially filled liquid tank. Why can the load be difficult to control?",
  "options": [
    "Liquid cargo remains fixed because tanks prevent all internal movement in this situation",
    "Liquid can surge and shift the vehicle's weight during braking during normal operation",
    "Partially filled tanks always have a lower center of gravity than full tanks",
    "Liquid surge occurs only when the vehicle is parked on level ground for"
  ],
  "correctAnswerIndex": 1,
  "explanation": "Liquid surge can move the load and affect braking and handling."
},
  {
  "id": 143,
  "question": "What is the major concern with side-to-side liquid movement in a tanker?",
  "options": [
    "It reduces engine cooling because the liquid blocks radiator airflow",
    "It prevents the service brake system from building air pressure",
    "It can increase rollover risk during turns and sudden steering",
    "It causes the steering wheel to become mechanically disconnected for"
  ],
  "correctAnswerIndex": 2,
  "explanation": "Side-to-side liquid movement can destabilize a tanker and increase rollover risk."
},
  {
  "id": 144,
  "question": "Why are smooth-bore tankers especially difficult during stops?",
  "options": [
    "The tank contains no liquid, so the tractor carries all weight",
    "Smooth-bore tanks automatically disable anti-lock braking systems during normal operation during",
    "The trailer brakes cannot operate when the tank is partially filled",
    "Unrestricted liquid movement can produce strong forward and backward surge for"
  ],
  "correctAnswerIndex": 3,
  "explanation": "Smooth-bore tanks lack internal barriers that reduce forward-and-backward liquid movement."
},
  {
  "id": 145,
  "question": "What is the main purpose of baffles in some liquid tanks?",
  "options": [
    "They reduce forward-and-backward surge by slowing liquid movement in this situation",
    "They completely prevent side-to-side movement during all turns during normal operation",
    "They convert liquid cargo into a solid load during emergency braking",
    "They automatically control the tank's brake pressure during curves for safe"
  ],
  "correctAnswerIndex": 0,
  "explanation": "Baffles reduce forward-and-backward surge, though they do not eliminate all liquid movement."
},
  {
  "id": 146,
  "question": "A driver is operating a vehicle with a long rear overhang. What should be considered during turns?",
  "options": [
    "The rear automatically follows the front wheels without any path difference in",
    "The rear can swing outward and strike objects or vehicles during normal",
    "The rear overhang reduces the need for mirror checks during turns under",
    "The rear always swings inward by the same distance on every turn"
  ],
  "correctAnswerIndex": 1,
  "explanation": "Rear overhang can swing outward and create a hazard near objects and traffic."
},
  {
  "id": 147,
  "question": "What is off-tracking in a combination vehicle?",
  "options": [
    "The tractor loses radio contact with the trailer during highway travel in",
    "Trailer brakes apply before tractor brakes during every normal stop during normal",
    "Rear wheels follow a shorter path than the front wheels during turns",
    "The engine loses traction whenever the vehicle enters a curve for safe"
  ],
  "correctAnswerIndex": 2,
  "explanation": "Off-tracking occurs because rear wheels follow a tighter path during a turn."
},
  {
  "id": 148,
  "question": "Why can a combination vehicle off-track toward the inside of a turn?",
  "options": [
    "The trailer steering axle always turns farther than the tractor axle in",
    "The fifth wheel forces the trailer to follow the exact front-wheel path",
    "The trailer automatically moves outward to compensate for cornering under these conditions",
    "The rear axle follows a shorter turning path than the front axle"
  ],
  "correctAnswerIndex": 3,
  "explanation": "The rear wheels track inside the path of the front wheels during turns."
},
  {
  "id": 149,
  "question": "After coupling a trailer, why is a visual fifth-wheel inspection important?",
  "options": [
    "It confirms the locking mechanism is properly engaged around the kingpin",
    "It proves the trailer brakes have reached maximum air pressure during",
    "It confirms the cargo is evenly distributed across the trailer floor",
    "It eliminates the need for a low-speed tug test after coupling"
  ],
  "correctAnswerIndex": 0,
  "explanation": "The manual requires confirming the fifth-wheel connection is properly locked."
},
  {
  "id": 150,
  "question": "What is the purpose of a coupling tug test?",
  "options": [
    "It measures the trailer's maximum legal cargo capacity in this",
    "It checks that the tractor and trailer remain securely connected",
    "It tests the engine governor's ability to control air pressure",
    "It verifies that trailer tires have equal tread depth for"
  ],
  "correctAnswerIndex": 1,
  "explanation": "A gentle tug against locked trailer brakes helps verify the coupling is secure."
},
  {
  "id": 151,
  "question": "Why should there be no visible gap between the fifth wheel and trailer apron after coupling?",
  "options": [
    "A gap allows the trailer to pivot more safely at highway speed",
    "A gap is required so the trailer suspension can articulate freely during",
    "A gap can indicate improper seating of the kingpin connection under these",
    "A gap proves the fifth wheel jaws have opened completely for safe"
  ],
  "correctAnswerIndex": 2,
  "explanation": "No daylight should be visible between the fifth wheel and trailer apron after proper coupling."
},
  {
  "id": 152,
  "question": "Before uncoupling a semitrailer, why must the landing gear be placed securely on the ground?",
  "options": [
    "It allows the trailer to remain suspended from the fifth wheel",
    "It increases the tractor's steering axle weight after separation during normal",
    "It keeps the trailer brakes released while the tractor departs under",
    "It supports the trailer after the tractor is disconnected for safe"
  ],
  "correctAnswerIndex": 3,
  "explanation": "Landing gear supports the trailer once the tractor is disconnected."
},
  {
  "id": 153,
  "question": "What can happen if landing gear sinks into soft ground?",
  "options": [
    "The trailer can tilt, shift, or collapse unexpectedly in this",
    "The trailer automatically becomes easier to couple at highway speed",
    "The tractor gains additional traction because weight transfers forward under",
    "The landing gear becomes permanently locked in the raised position"
  ],
  "correctAnswerIndex": 0,
  "explanation": "Soft ground can allow landing gear to sink, destabilizing the trailer."
},
  {
  "id": 154,
  "question": "What is the purpose of the red emergency air line on a tractor-trailer?",
  "options": [
    "It carries the electrical signal used by trailer turn lamps",
    "It supplies trailer air and controls the emergency brake system",
    "It supplies hydraulic fluid to the trailer's service brakes under",
    "It controls the tractor's steering wheel through the fifth wheel"
  ],
  "correctAnswerIndex": 1,
  "explanation": "The red emergency line supplies air to the trailer reservoirs and controls emergency braking."
},
  {
  "id": 155,
  "question": "What is the purpose of the blue service line?",
  "options": [
    "It supplies continuous air for the trailer emergency spring brakes in",
    "It carries electrical power for the trailer's exterior lighting during normal",
    "It carries air pressure used to apply the trailer service brakes",
    "It transfers engine coolant from the tractor to the trailer for"
  ],
  "correctAnswerIndex": 2,
  "explanation": "The blue service line carries control pressure when the service brakes are applied."
},
  {
  "id": 156,
  "question": "Why must the emergency and service air lines be connected correctly?",
  "options": [
    "Incorrect connections only affect the trailer's interior lighting in",
    "Incorrect connections increase the engine's coolant temperature immediately during",
    "Incorrect connections change the vehicle's legal weight rating under",
    "Incorrect connections can prevent proper trailer braking or charging"
  ],
  "correctAnswerIndex": 3,
  "explanation": "Crossed air lines can prevent the trailer from charging or braking correctly."
},
  {
  "id": 157,
  "question": "What is rearward amplification in a doubles or triples combination?",
  "options": [
    "Steering movement can become increasingly amplified toward the rear in",
    "Rear trailers always brake sooner than the tractor during stops",
    "The rear trailer becomes lighter as speed increases on curves",
    "The last trailer automatically steers independently around corners for safe"
  ],
  "correctAnswerIndex": 0,
  "explanation": "Rearward amplification can make the last trailer move much more than the tractor."
},
  {
  "id": 158,
  "question": "Why should the heaviest trailer generally be placed closest to the tractor in doubles?",
  "options": [
    "It guarantees the rear trailer cannot roll over during any turn",
    "It helps improve stability and reduces dangerous rearward amplification during normal",
    "It eliminates the need for a converter dolly inspection under these",
    "It allows the driver to use higher speeds on every curve"
  ],
  "correctAnswerIndex": 1,
  "explanation": "The manual recommends placing the heaviest trailer first to improve stability."
},
  {
  "id": 159,
  "question": "What is the primary danger of a rollover in a combination vehicle?",
  "options": [
    "A rollover automatically repairs the vehicle's suspension system in this situation in this",
    "Rollover reduces the load's center of gravity before the vehicle stops during normal",
    "A sudden loss of stability can cause the vehicle to leave its path",
    "A rollover affects only the rear trailer and never the tractor for safe"
  ],
  "correctAnswerIndex": 2,
  "explanation": "Loss of stability can cause the combination vehicle to overturn and leave its path."
},
  {
  "id": 160,
  "question": "Why should a driver be especially cautious when entering a curve with a high center of gravity?",
  "options": [
    "Higher weight placement reduces lateral forces during cornering in",
    "High loads prevent the trailer from off-tracking during turns",
    "High loads make emergency steering corrections less severe under",
    "Higher weight placement increases the chance of rollover for"
  ],
  "correctAnswerIndex": 3,
  "explanation": "A high center of gravity increases rollover risk in curves."
},
  {
  "id": 161,
  "question": "A driver is operating doubles on a slippery road. What should be expected?",
  "options": [
    "Reduced traction can make rearward amplification and control problems worse",
    "Slippery pavement prevents the rear trailer from moving laterally during",
    "The converter dolly automatically adds braking force to every axle",
    "Doubles always require less following distance than single trailers for"
  ],
  "correctAnswerIndex": 0,
  "explanation": "Low traction can make combination control more difficult, especially with multiple trailers."
},
  {
  "id": 162,
  "question": "Why are empty trailers sometimes difficult to control on slippery roads?",
  "options": [
    "Empty trailers have no suspension movement and therefore cannot skid",
    "Less weight on the tires can reduce available traction during",
    "Empty trailers automatically lock all wheels whenever pavement is wet",
    "An empty trailer cannot be affected by crosswinds or turbulence"
  ],
  "correctAnswerIndex": 1,
  "explanation": "An empty trailer can have less tire loading and therefore less available traction."
},
  {
  "id": 163,
  "question": "What is a converter dolly used for?",
  "options": [
    "It converts hydraulic brakes into air brakes on a single truck",
    "It raises trailer landing gear automatically during uncoupling during normal operation",
    "It connects an additional semitrailer in a doubles or triples combination",
    "It measures cargo weight while the combination is moving for safe"
  ],
  "correctAnswerIndex": 2,
  "explanation": "A converter dolly provides the coupling connection for an additional semitrailer."
},
  {
  "id": 164,
  "question": "Why is a converter dolly inspection especially important?",
  "options": [
    "The dolly determines the tractor's engine horsepower during acceleration in this",
    "The dolly controls the trailer's cargo distribution automatically during normal operation",
    "The dolly replaces the need to inspect the rear trailer tires",
    "Its coupling and safety components must be secure before movement for"
  ],
  "correctAnswerIndex": 3,
  "explanation": "The dolly is a critical coupling component and must be inspected like other equipment."
},
  {
  "id": 165,
  "question": "What is a key concern when driving a tanker with a partially filled tank?",
  "options": [
    "The liquid's movement can change the vehicle's handling during braking in",
    "The tank becomes immune to rollover because the liquid is lower",
    "The liquid automatically locks the cargo against every tank wall under",
    "Partially filled tanks always require less stopping distance than full tanks"
  ],
  "correctAnswerIndex": 0,
  "explanation": "Liquid movement can affect handling and braking in partially filled tanks."
},
  {
  "id": 166,
  "question": "Why can a full liquid tank sometimes handle differently from a partially filled tank?",
  "options": [
    "A full tank always has a higher center of gravity than every partial tank",
    "A full tank generally has less free space for liquid to surge during normal",
    "A full tank cannot roll over because the liquid has no movement under these",
    "A full tank automatically increases braking traction on every axle for safe operation for"
  ],
  "correctAnswerIndex": 1,
  "explanation": "Less free space means less liquid movement than in a partially filled tank."
},
  {
  "id": 167,
  "question": "What is a key rule when transporting hazardous materials?",
  "options": [
    "Hide hazardous material information so other drivers do not panic in this",
    "Place all shipping papers in the trailer so they cannot be lost",
    "Follow the required placarding, shipping paper, routing, and safety rules under these",
    "Use ordinary cargo securement methods without checking material requirements for safe operation"
  ],
  "correctAnswerIndex": 2,
  "explanation": "Hazardous materials transportation requires specific documentation, placarding, and operating procedures."
},
  {
  "id": 168,
  "question": "Why must hazardous-material shipping papers be readily accessible to the driver?",
  "options": [
    "They are needed mainly to calculate the truck's fuel economy",
    "They replace the driver's CDL when transporting regulated materials during",
    "They allow the driver to ignore required hazardous-material placards under",
    "They provide important information during inspections and emergencies for safe"
  ],
  "correctAnswerIndex": 3,
  "explanation": "Shipping papers provide critical information and must be readily accessible."
},
  {
  "id": 169,
  "question": "What is the purpose of hazardous-material placards?",
  "options": [
    "They identify the general hazard presented by the transported material",
    "They provide the exact weight of every individual package during",
    "They replace the need for hazardous-material shipping papers under these",
    "They indicate the driver's personal emergency contact information for safe"
  ],
  "correctAnswerIndex": 0,
  "explanation": "Placards communicate the hazard associated with regulated material being transported."
},
  {
  "id": 170,
  "question": "Why should a hazardous-material vehicle use the required route restrictions?",
  "options": [
    "Route restrictions apply only to empty commercial vehicles in this situation",
    "Certain materials may be restricted from particular roads or areas during",
    "Hazardous materials are permitted on every road if placards are displayed",
    "Route restrictions are optional when the driver is behind schedule for"
  ],
  "correctAnswerIndex": 1,
  "explanation": "Hazardous-material transportation can be subject to route restrictions."
},
  {
  "id": 171,
  "question": "What should a driver do if a hazardous-material load is leaking?",
  "options": [
    "Touch the leaking material to identify it before calling for help in this",
    "Continue driving until reaching the destination if the leak is small during normal",
    "Protect yourself and others, keep away from the hazard, and follow emergency procedures",
    "Wash the material from the trailer immediately using roadway water for safe operation"
  ],
  "correctAnswerIndex": 2,
  "explanation": "A hazardous-material leak requires protecting people, avoiding exposure, and following emergency procedures."
},
  {
  "id": 172,
  "question": "Why should a commercial driver know the emergency response information for a hazardous load?",
  "options": [
    "It allows the driver to determine the vehicle's maximum speed",
    "It replaces the requirement to inspect the cargo before departure",
    "It permits the driver to transport any material without placards",
    "It helps guide safe actions if an incident occurs for"
  ],
  "correctAnswerIndex": 3,
  "explanation": "Emergency response information supports safer decisions during a hazardous-material incident."
},
  {
  "id": 173,
  "question": "What is the first priority during a commercial vehicle fire?",
  "options": [
    "Protect people from immediate danger and call for emergency assistance",
    "Save cargo before moving away from the vehicle during normal",
    "Open every cargo compartment immediately to inspect the fire under",
    "Continue driving until the engine temperature returns to normal for"
  ],
  "correctAnswerIndex": 0,
  "explanation": "Life safety and emergency response take priority over cargo or vehicle protection."
},
  {
  "id": 174,
  "question": "Why should a driver avoid opening a burning cargo compartment unnecessarily?",
  "options": [
    "Opening it automatically activates the trailer's parking brakes in this",
    "Opening it can supply oxygen and intensify the fire during",
    "Opening it lowers the cargo temperature enough to extinguish flames",
    "Opening it prevents emergency responders from reaching the vehicle for"
  ],
  "correctAnswerIndex": 1,
  "explanation": "Opening a burning compartment can feed the fire with additional oxygen."
},
  {
  "id": 175,
  "question": "A school bus driver approaches a loading area. Why are danger zones important?",
  "options": [
    "Students are always visible through the rearview mirror from the driver's seat",
    "Danger zones apply only when the bus is traveling on highways during",
    "Students may be difficult to see near and around the bus under",
    "Danger zones disappear whenever the warning lights are operating for safe operation"
  ],
  "correctAnswerIndex": 2,
  "explanation": "The manual emphasizes danger zones because children can be difficult to see around a school bus."
},
  {
  "id": 176,
  "question": "How far can the school bus danger zone extend in front of the bus?",
  "options": [
    "It extends exactly 5 feet regardless of bus length or surroundings in this situation",
    "It extends only 10 feet because the front bumper blocks farther views during normal",
    "It extends 100 feet whenever the bus is stopped at a school under these",
    "It may extend as much as 30 feet, with the first 10 most dangerous"
  ],
  "correctAnswerIndex": 3,
  "explanation": "The school-bus section states the danger zone may extend as much as 30 feet in front, with the first 10 feet most dangerous."
},
  {
  "id": 177,
  "question": "Why must school bus mirrors be properly adjusted before operation?",
  "options": [
    "They help the driver monitor danger zones, students, traffic, and clearance in",
    "They allow the driver to eliminate every blind spot around the bus",
    "They are used only to identify vehicles approaching from the rear under",
    "They replace direct observation when students are loading or unloading for safe"
  ],
  "correctAnswerIndex": 0,
  "explanation": "Proper mirror adjustment helps the driver monitor danger zones and surrounding traffic."
},
  {
  "id": 178,
  "question": "What should a school bus driver do before allowing students to cross the roadway?",
  "options": [
    "Wave students across while keeping the bus moving slowly in this",
    "Follow the required stopping, warning, and student-safety procedures during normal operation",
    "Allow students to cross behind the bus without checking traffic under",
    "Use the horn as the only warning that students may proceed"
  ],
  "correctAnswerIndex": 1,
  "explanation": "School-bus operations require specific procedures for safely loading and unloading students."
},
  {
  "id": 179,
  "question": "Why is an emergency evacuation plan important on a school bus?",
  "options": [
    "It guarantees every emergency will occur outside the roadway in this",
    "It allows the driver to leave before students during every incident",
    "Students may need organized directions during a fire or crash under",
    "It replaces the need to inspect emergency exits before service for"
  ],
  "correctAnswerIndex": 2,
  "explanation": "An organized evacuation procedure helps students respond safely during emergencies."
},
  {
  "id": 180,
  "question": "What should a school bus driver do at a railroad crossing when required to stop?",
  "options": [
    "Shift gears while crossing so the bus can accelerate faster in",
    "Stop on the tracks if traffic ahead prevents immediate movement during",
    "Rely only on the crossing signal without checking for trains under",
    "Stop as required, look and listen, and proceed only when safe"
  ],
  "correctAnswerIndex": 3,
  "explanation": "The school-bus section emphasizes safe railroad-crossing procedures, including stopping when required."
},
  {
  "id": 181,
  "question": "Why should a bus driver know the location of emergency exits?",
  "options": [
    "They may be needed if normal doors cannot be used",
    "They are used only for ventilation during hot weather during",
    "They replace the normal passenger door during every stop under",
    "They allow passengers to exit without following emergency instructions for"
  ],
  "correctAnswerIndex": 0,
  "explanation": "Emergency exits can be essential if the normal entrance becomes unusable."
},
  {
  "id": 182,
  "question": "What is the main purpose of an anti-lock braking system on a school bus?",
  "options": [
    "It guarantees the shortest possible stop on every surface",
    "It helps prevent wheel lockup and maintain steering control",
    "It eliminates the need for proper braking technique under",
    "It automatically steers around stopped vehicles during emergencies for"
  ],
  "correctAnswerIndex": 1,
  "explanation": "ABS helps prevent wheel lockup and assists the driver in maintaining control."
},
  {
  "id": 183,
  "question": "What is a key consideration when transporting passengers in a commercial bus?",
  "options": [
    "Passenger vehicles can be driven more aggressively because passengers sit inside",
    "Standing passengers eliminate the need for careful acceleration during normal operation",
    "Passenger safety requires smooth driving, secure exits, and proper loading under",
    "Passengers should remain unrestrained so they can exit faster during stops"
  ],
  "correctAnswerIndex": 2,
  "explanation": "Passenger transport requires smooth control and attention to loading, exits, and passenger safety."
},
  {
  "id": 184,
  "question": "Why should a bus driver avoid sudden acceleration with standing passengers?",
  "options": [
    "Sudden acceleration improves passenger stability by shifting weight rearward",
    "Standing passengers are protected automatically by the suspension system",
    "Bus regulations require rapid acceleration whenever passengers are standing",
    "Passengers can lose balance and be injured for safe"
  ],
  "correctAnswerIndex": 3,
  "explanation": "Sudden acceleration can cause standing passengers to lose balance and fall."
},
  {
  "id": 185,
  "question": "Why should a bus driver avoid sudden braking with passengers aboard?",
  "options": [
    "Passengers can be thrown forward or lose balance in this",
    "Sudden braking prevents all passenger movement inside the bus during",
    "Passenger weight makes abrupt braking safer than gradual braking under",
    "Emergency braking is required whenever the bus approaches a stop"
  ],
  "correctAnswerIndex": 0,
  "explanation": "Sudden braking can injure passengers, especially those standing or not properly secured."
},
  {
  "id": 186,
  "question": "A bus is approaching a crowded passenger stop. What should the driver prioritize?",
  "options": [
    "Accelerating through the stop before pedestrians enter the area in this",
    "Safe positioning, controlled speed, and awareness of pedestrians and passengers during",
    "Stopping wherever convenient even if passengers must walk into traffic under",
    "Using the horn continuously so passengers know the bus is approaching"
  ],
  "correctAnswerIndex": 1,
  "explanation": "Passenger loading areas require controlled speed, safe positioning, and pedestrian awareness."
},
  {
  "id": 187,
  "question": "Why is passenger loading near traffic especially hazardous?",
  "options": [
    "Passengers always remain inside the bus until traffic completely stops",
    "Traffic cannot pass a stopped commercial bus under any circumstances",
    "Passengers may step into the path of moving vehicles under",
    "Bus mirrors provide a complete view of every pedestrian position"
  ],
  "correctAnswerIndex": 2,
  "explanation": "Passengers can be exposed to surrounding traffic while boarding or exiting."
},
  {
  "id": 188,
  "question": "What should a commercial driver do if an emergency vehicle approaches?",
  "options": [
    "Accelerate to remain ahead of the emergency vehicle in",
    "Stop immediately in the travel lane regardless of location",
    "Move unpredictably between lanes to create a larger gap",
    "Follow applicable traffic laws and yield as required for"
  ],
  "correctAnswerIndex": 3,
  "explanation": "Commercial drivers must follow applicable emergency-vehicle yielding requirements."
},
  {
  "id": 189,
  "question": "Why is fatigue dangerous for commercial drivers?",
  "options": [
    "It can reduce attention, judgment, reaction time, and awareness in",
    "Fatigue improves reaction time because the driver becomes more cautious",
    "Fatigue affects only night driving and not daytime operation under",
    "Fatigue can be eliminated by opening a window while driving"
  ],
  "correctAnswerIndex": 0,
  "explanation": "Fatigue can impair several abilities needed for safe commercial driving."
},
  {
  "id": 190,
  "question": "A driver begins feeling too tired to operate safely. What is the appropriate response?",
  "options": [
    "Increase speed to reach the destination before fatigue worsens",
    "Stop at a safe location and rest before continuing",
    "Use loud music as a substitute for adequate rest",
    "Drink a stimulant and continue regardless of impairment for"
  ],
  "correctAnswerIndex": 1,
  "explanation": "A fatigued driver should stop safely and rest rather than rely on temporary stimulation."
},
  {
  "id": 191,
  "question": "Why is distracted driving particularly dangerous in a large commercial vehicle?",
  "options": [
    "Large vehicles can stop instantly if the driver notices late in",
    "Commercial vehicles have no blind spots when the driver is distracted",
    "The vehicle needs more time and distance to respond to hazards",
    "Distracted drivers can rely on automatic systems for every maneuver for"
  ],
  "correctAnswerIndex": 2,
  "explanation": "Large vehicles have greater stopping and maneuvering demands, making attention especially important."
},
  {
  "id": 192,
  "question": "What is the purpose of maintaining a safety cushion around a commercial vehicle?",
  "options": [
    "It allows the driver to maintain maximum speed through every hazard",
    "It eliminates the need to anticipate other drivers' actions during normal",
    "It ensures nearby traffic cannot legally enter the driver's lane under",
    "It provides time and space to respond to unexpected events for"
  ],
  "correctAnswerIndex": 3,
  "explanation": "A safety cushion provides room and time to react to changing conditions."
},
  {
  "id": 193,
  "question": "Why should commercial drivers anticipate mistakes by other road users?",
  "options": [
    "Other drivers may make unexpected moves that require quick responses in this",
    "Commercial drivers have legal priority over smaller vehicles at all times during",
    "Anticipation allows the truck to ignore normal traffic-control devices under these conditions",
    "Other road users are required to predict the truck's exact stopping distance"
  ],
  "correctAnswerIndex": 0,
  "explanation": "Anticipating errors helps commercial drivers maintain options when others act unpredictably."
},
  {
  "id": 194,
  "question": "What should a driver do when visibility is blocked by a hill or curve?",
  "options": [
    "Accelerate through the blind area before opposing traffic appears in this",
    "Reduce speed enough to maintain control and avoid entering unseen hazards",
    "Pass immediately because hidden traffic cannot see the truck either under",
    "Move toward the centerline to improve the view around the curve"
  ],
  "correctAnswerIndex": 1,
  "explanation": "Limited sight distance requires controlled speed and caution because hazards may be hidden."
},
  {
  "id": 195,
  "question": "Why is driving too fast for conditions dangerous even when below the posted speed limit?",
  "options": [
    "The posted speed limit always guarantees a safe speed for every condition",
    "Commercial vehicles are legally required to travel at the posted limit during",
    "Road, weather, traffic, and visibility can require a lower safe speed under",
    "Lower speeds are dangerous because they reduce tire traction for safe operation"
  ],
  "correctAnswerIndex": 2,
  "explanation": "Safe speed depends on conditions, not only the posted maximum."
},
  {
  "id": 196,
  "question": "What should a driver do when a tire loses air pressure while traveling?",
  "options": [
    "Apply the parking brake immediately while traveling at highway speed in",
    "Accelerate so centrifugal force keeps the vehicle centered during normal operation",
    "Continue normally because tire pressure loss does not affect handling under",
    "Maintain control, reduce speed smoothly, and stop safely to inspect it"
  ],
  "correctAnswerIndex": 3,
  "explanation": "A tire problem can affect handling; the driver should maintain control and stop safely."
},
  {
  "id": 197,
  "question": "What is a major danger of a steering tire blowout?",
  "options": [
    "The vehicle may pull sharply and become difficult to control",
    "The trailer automatically separates from the tractor during normal operation",
    "The air compressor immediately stops producing pressure under these conditions",
    "The parking brake automatically releases from the tractor for safe"
  ],
  "correctAnswerIndex": 0,
  "explanation": "A steering-tire blowout can cause a strong pull and loss of directional control."
},
  {
  "id": 198,
  "question": "What should a driver avoid after a steering tire blowout?",
  "options": [
    "Hold the steering wheel firmly and maintain directional control in",
    "Avoid sudden hard braking that could worsen loss of control",
    "Ease off the accelerator while stabilizing the vehicle under these",
    "Move toward a safe location when control is regained for"
  ],
  "correctAnswerIndex": 1,
  "explanation": "The manual teaches maintaining control and avoiding abrupt braking after a blowout."
},
  {
  "id": 199,
  "question": "Why should commercial drivers inspect tires for cuts, bulges, and other damage?",
  "options": [
    "Tire appearance has no relationship to commercial vehicle safety in this",
    "Damaged tires improve traction by increasing pavement contact during normal operation",
    "Tire defects can lead to sudden failure and loss of control",
    "Tire defects matter only when the vehicle is carrying passengers for"
  ],
  "correctAnswerIndex": 2,
  "explanation": "Tire defects can cause failures that threaten vehicle control."
},
  {
  "id": 200,
  "question": "Why are steering axle tires held to a greater minimum tread standard than other tires?",
  "options": [
    "Steering tires carry no vehicle weight during normal driving",
    "Steering tires are used only during emergency braking during",
    "Steering tires cannot lose traction on wet pavement under",
    "Steering tires are critical to directional control for safe"
  ],
  "correctAnswerIndex": 3,
  "explanation": "Steering tires are essential to directional control, so their condition is critical."
}
];
