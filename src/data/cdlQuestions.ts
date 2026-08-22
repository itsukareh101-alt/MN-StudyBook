export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export const cdlQuestions: Question[] = [
  {
    "id": 1001,
    "question": "Under FMCSA regulations effective February 7, 2022, who is mandated to complete Entry-Level Driver Training (ELDT) from an FMCSA-registered Training Provider (TPR)?",
    "options": [
      "First-time Class A/B CDL applicants, Class B to A upgrades, and first-time P, S, or H endorsement seekers",
      "All existing CDL holders renewing their standard commercial credentials during routine four-year license cycles",
      "Commercial drivers operating heavy multi-trailer tanker combinations across interstate freight corridors",
      "Drivers convicted of two or more serious moving violations within any commercial motor vehicle category"
    ],
    "correctAnswerIndex": 0,
    "explanation": "FMCSA ELDT regulations mandate certified training from an approved TPR provider for first-time Class A/B CDL applicants, Class B to A upgrades, and first-time Passenger (P), School Bus (S), or Hazardous Materials (H) endorsements."
  },
  {
    "id": 1002,
    "question": "What minimum score must an entry-level commercial driver achieve on the ELDT theory assessment before the training provider can submit certification to the FMCSA TPR?",
    "options": [
      "At least 80 percent on the comprehensive theory assessment",
      "At least 70 percent on the comprehensive theory assessment",
      "At least 90 percent on the comprehensive theory assessment",
      "At least 75 percent on the comprehensive theory assessment"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Under 49 CFR Part 380, drivers must score at least 80% on the theory assessment to demonstrate proficiency before certification is submitted to the TPR."
  },
  {
    "id": 1003,
    "question": "How does the Minnesota DVS verify that an applicant has completed the mandatory ELDT requirements prior to administering a CDL skills test?",
    "options": [
      "DVS electronically checks the FMCSA Training Provider Registry (TPR) database before testing",
      "The applicant must bring a notarized paper certificate signed by the certified driving school owner",
      "The applicant must mail official course completion transcripts to the Minnesota DPS office in advance",
      "DVS relies on verbal self-certification by the applicant during the exam check-in appointment"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Minnesota DVS electronically queries the FMCSA Training Provider Registry to verify that training completion has been submitted by an approved provider before administering CDL skills or hazmat knowledge tests."
  },
  {
    "id": 1004,
    "question": "For a driver seeking a Hazardous Materials (H) endorsement for the first time, when must the ELDT requirement be completed?",
    "options": [
      "Prior to taking the official state Hazardous Materials knowledge test",
      "Within 90 days after passing the state Hazardous Materials knowledge test",
      "Only after logging 100 hours of supervised hazardous materials hauling",
      "Within 30 days of receiving the commercial driver license document"
    ],
    "correctAnswerIndex": 0,
    "explanation": "For the Hazardous Materials endorsement, the driver must complete ELDT theory training from a registered TPR provider BEFORE taking the state knowledge test."
  },
  {
    "id": 1005,
    "question": "Which of the following drivers is EXEMPT from the February 7, 2022 FMCSA ELDT mandate?",
    "options": [
      "Drivers issued a valid Commercial Learner's Permit (CLP) prior to Feb 7, 2022 who obtained a CDL before permit expiry",
      "Drivers upgrading an existing Class B CDL to a Class A CDL for long-haul regional and interstate freight routes",
      "Drivers adding a School Bus (S) endorsement to transport student passengers for public and private school districts",
      "Drivers who have never held any commercial license but possess ten years of private Class D driving experience"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Drivers who obtained a Commercial Learner's Permit (CLP) before February 7, 2022, and obtained their CDL before the CLP expired, are exempt from ELDT requirements for that credential."
  },
  {
    "id": 1006,
    "question": "What two distinct curriculum components must an entry-level driver complete under ELDT for a Class A or Class B CDL?",
    "options": [
      "Theory instruction and Behind-the-Wheel (BTW) training covering both range and public road operations",
      "Classroom theory instruction and a 500-mile solo interstate highway commercial transport trial run",
      "Online video coursework and an employer-administered commercial vehicle mechanical maintenance test",
      "Simulator laboratory drills and an unproctored written take-home technical knowledge workbook"
    ],
    "correctAnswerIndex": 0,
    "explanation": "ELDT curricula for Class A and B CDLs require both Theory instruction and Behind-the-Wheel (BTW) training, which includes Range and Public Road competencies."
  },
  {
    "id": 1007,
    "question": "What vehicle configuration requires a Class A Commercial Driver's License (CDL) in Minnesota?",
    "options": [
      "Combination vehicles with a GCWR of 26,001+ lbs where the towed unit exceeds 10,000 lbs GVWR",
      "Single vehicles with a GVWR of 26,001+ lbs where the towed unit does not exceed 10,000 lbs GVWR",
      "Any vehicle designed to transport sixteen or more passengers including the driver regardless of weight",
      "Any commercial vehicle transporting placarded hazardous materials cargo across Minnesota state routes"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Class A CDL is required for any combination of vehicles with a Gross Combination Weight Rating (GCWR) of 26,001 or more pounds, provided the Gross Vehicle Weight Rating (GVWR) of the vehicle(s) being towed is in excess of 10,000 pounds."
  },
  {
    "id": 1008,
    "question": "What vehicle configuration requires a Class B Commercial Driver's License (CDL)?",
    "options": [
      "Single vehicles with a GVWR of 26,001+ lbs, or towing a trailer not in excess of 10,000 lbs GVWR",
      "Combination vehicles with a GCWR of 26,001+ lbs where the towed trailer exceeds 10,000 lbs GVWR",
      "Small passenger shuttle buses designed to carry twelve passengers in local municipal zones",
      "Standard pickup trucks towing dual-axle equipment trailers on Minnesota public roadways"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Class B CDL is required for any single vehicle with a GVWR of 26,001 or more pounds, or any such vehicle towing a vehicle not in excess of 10,000 pounds GVWR."
  },
  {
    "id": 1009,
    "question": "A vehicle with a GVWR of 24,000 lbs that is placarded for hazardous materials or designed to transport 16 or more passengers (including driver) requires what class of CDL?",
    "options": [
      "Class C CDL with appropriate commercial endorsements",
      "Class A CDL with heavy combination endorsements",
      "Standard Class D license with no endorsements",
      "Class B CDL with heavy straight vehicle permit"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Class C CDL applies to single vehicles under 26,001 lbs GVWR (or towing a vehicle under 10,000 lbs) that are designed to transport 16+ passengers (including driver) or placarded for hazardous materials."
  },
  {
    "id": 1010,
    "question": "Under federal and Minnesota CDL regulations, what is the Blood Alcohol Concentration (BAC) threshold at or above which a commercial driver is legally considered driving under the influence (DWI)?",
    "options": [
      "0.04 percent Blood Alcohol Concentration",
      "0.08 percent Blood Alcohol Concentration",
      "0.02 percent Blood Alcohol Concentration",
      "0.05 percent Blood Alcohol Concentration"
    ],
    "correctAnswerIndex": 0,
    "explanation": "For commercial motor vehicle operators, the legal BAC limit is 0.04% (half the standard 0.08% limit for non-commercial drivers)."
  },
  {
    "id": 1011,
    "question": "If a commercial driver is found to have ANY detectable amount of alcohol below 0.04% BAC while operating a commercial motor vehicle, what immediate action must law enforcement take?",
    "options": [
      "Place the driver out-of-service for at least 24 hours",
      "Revoke the driver's commercial license for two years",
      "Issue a verbal warning without recording any violation",
      "Require immediate retaking of all CDL knowledge exams"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Under Minnesota and federal regulations, a commercial driver with any detectable amount of alcohol under 0.04% must be placed out-of-service for 24 hours."
  },
  {
    "id": 1012,
    "question": "What is the penalty for a commercial driver convicted of a first-time DWI (0.04% or higher BAC or refusing an alcohol test) while operating a commercial motor vehicle?",
    "options": [
      "Disqualification of CDL privileges for at least one year",
      "A 30-day suspension with mandatory defensive driving class",
      "Permanent revocation of all driving privileges for life",
      "A monetary fine with no suspension of commercial license"
    ],
    "correctAnswerIndex": 0,
    "explanation": "A first conviction for driving a CMV under the influence (0.04% BAC or higher) or refusal to submit to chemical testing results in at least a 1-year CDL disqualification (3 years if transporting placarded hazardous materials)."
  },
  {
    "id": 1013,
    "question": "What is the CDL disqualification penalty for a second DWI or chemical test refusal conviction in a commercial or personal vehicle?",
    "options": [
      "Lifetime disqualification from holding a commercial license",
      "A mandatory five-year suspension of commercial privileges",
      "A mandatory three-year suspension with probation period",
      "A one-year suspension followed by supervised road testing"
    ],
    "correctAnswerIndex": 0,
    "explanation": "A second conviction for a major offense (DWI, chemical test refusal, leaving scene of accident, felony involving CMV) results in a lifetime CDL disqualification."
  },
  {
    "id": 1014,
    "question": "How long is a commercial driver disqualified if convicted of two 'serious traffic violations' within a three-year period in a commercial vehicle?",
    "options": [
      "Disqualification for at least 60 days",
      "Disqualification for at least 30 days",
      "Disqualification for at least 90 days",
      "Disqualification for at least 15 days"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Two serious traffic violations (excessive speeding 15+ mph over, reckless driving, improper lane change, following too closely, texting/handheld cell use) within 3 years results in at least a 60-day CDL disqualification (120 days for 3 violations)."
  },
  {
    "id": 1015,
    "question": "Under FMCSA and Minnesota rules, what is the maximum speed above the posted limit that is classified as a 'serious traffic violation'?",
    "options": [
      "15 miles per hour or more above the posted speed limit",
      "10 miles per hour or more above the posted speed limit",
      "20 miles per hour or more above the posted speed limit",
      "5 miles per hour or more above the posted speed limit"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Excessive speeding, defined as 15 mph or more above the posted speed limit, is designated as a serious traffic violation under CDL regulations."
  },
  {
    "id": 1016,
    "question": "Commercial drivers are strictly prohibited from using hand-held mobile devices while driving. What does this restriction prohibit?",
    "options": [
      "Holding a mobile phone in hand and manual dialing of calls",
      "Using hands-free Bluetooth audio headsets while driving",
      "Listening to standard FM radio news broadcasts in the cab",
      "Operating CB radio microphones mounted on cab consoles"
    ],
    "correctAnswerIndex": 0,
    "explanation": "FMCSA regulations strictly ban holding a mobile telephone to conduct voice communications and dialing by pressing more than a single button."
  },
  {
    "id": 1017,
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
    "id": 1018,
    "question": "What is the minimum tread depth required on the steering axle (front) tires of a commercial motor vehicle?",
    "options": [
      "4/32 inch in every major tire tread groove",
      "2/32 inch in every major tire tread groove",
      "6/32 inch in every major tire tread groove",
      "1/32 inch in every major tire tread groove"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Commercial vehicle regulations require at least 4/32 inch tread depth in every major groove on front steering axle tires. All other tires require at least 2/32 inch."
  },
  {
    "id": 1019,
    "question": "What is the minimum tread depth required on non-steering axle tires (drive and trailer tires)?",
    "options": [
      "2/32 inch in every major tire tread groove",
      "4/32 inch in every major tire tread groove",
      "1/32 inch in every major tire tread groove",
      "3/32 inch in every major tire tread groove"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Non-steering tires (drive and trailer axles) must have at least 2/32 inch tread depth in every major groove."
  },
  {
    "id": 1020,
    "question": "During a pre-trip inspection, how much steering wheel free play (slack) is permitted on a power steering system before it is considered unsafe?",
    "options": [
      "No more than approximately 10 degrees (about 2 inches on a 20-inch steering wheel)",
      "No more than approximately 30 degrees (about 6 inches on a 20-inch steering wheel)",
      "No more than approximately 45 degrees (about 9 inches on a 20-inch steering wheel)",
      "Power steering systems are designed to have zero allowable steering wheel play"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Steering wheel play should not exceed about 10 degrees (approximately 2 inches of movement at the rim of a 20-inch steering wheel) before the front wheels begin to turn."
  },
  {
    "id": 1021,
    "question": "What critical suspension defect will put a commercial vehicle immediately out of service during a roadside inspection?",
    "options": [
      "One-fourth or more of the leaf springs in any leaf spring assembly are broken or missing",
      "A minor coating of road dust on the exterior casing of the front shock absorbers",
      "Slight surface rust on the outer edges of the steel suspension mounting brackets",
      "A replacement grease fitting installed on the spring shackle during routine servicing"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Under the North American Standard Out-of-Service Criteria, 25% or more missing or broken leaves in any leaf spring assembly puts the vehicle out of service immediately."
  },
  {
    "id": 1022,
    "question": "What emergency equipment is required by law to be in the cab of every commercial motor vehicle?",
    "options": [
      "Properly rated fire extinguisher, spare electrical fuses, and three reflective warning triangles",
      "A commercial trauma first-aid kit, emergency road flares, and heavy-duty tow recovery cables",
      "Two five-gallon water jugs, heavy iron snow shovel, tire chains, and thermal survival blanket",
      "A battery jumper booster pack, heavy flashlight with spare cells, and reflective barricade tape"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Commercial motor vehicles must be equipped with: 1) Properly charged and rated fire extinguisher, 2) Spare electrical fuses (unless equipped with circuit breakers), and 3) Three red reflective warning triangles."
  },
  {
    "id": 1023,
    "question": "When parked on the side of a two-way, undivided highway, where must you place your three reflective warning triangles?",
    "options": [
      "100 ft ahead, 10 ft behind (traffic side), and 100 ft behind the commercial vehicle",
      "10 ft ahead, 50 ft behind, and 200 ft behind directly along the right road shoulder",
      "25 ft ahead, 50 ft ahead, and 100 ft ahead along the center divided roadway line",
      "Directly next to the left front tire, left rear tire, and rear trailer bumper step"
    ],
    "correctAnswerIndex": 0,
    "explanation": "On a two-way undivided roadway: place one triangle 100 feet ahead of the vehicle, one 10 feet behind on the traffic side, and one 100 feet behind the vehicle."
  },
  {
    "id": 1024,
    "question": "When parked on the shoulder of a divided highway or one-way road, where must you place your three reflective warning triangles?",
    "options": [
      "10 feet, 100 feet, and 200 feet toward approaching traffic behind the vehicle",
      "100 feet ahead, 100 feet behind, and 200 feet behind the commercial vehicle",
      "50 feet, 100 feet, and 150 feet along the right-hand shoulder behind the truck",
      "20 feet ahead, 50 feet behind, and 100 feet behind the commercial vehicle cab"
    ],
    "correctAnswerIndex": 0,
    "explanation": "On a divided highway or one-way road, place warning triangles 10 feet, 100 feet, and 200 feet toward approaching traffic (all behind the vehicle)."
  },
  {
    "id": 1025,
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
    "id": 1026,
    "question": "What is the recommended visual search distance for a commercial driver at highway cruising speeds?",
    "options": [
      "12 to 15 seconds ahead (about one-quarter of a mile at highway speed)",
      "3 to 5 seconds ahead (about the distance of four car lengths forward)",
      "25 to 30 seconds ahead (about one full mile forward on the highway)",
      "Directly focused on the rear bumper of the leading passenger car"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Commercial drivers should look 12 to 15 seconds ahead, which is about one-quarter mile at highway speeds, to anticipate hazards early."
  },
  {
    "id": 1027,
    "question": "What is the basic formula for determining minimum safe following distance for heavy commercial vehicles in good weather?",
    "options": [
      "1 second per 10 ft vehicle length under 40 mph, plus 1 second over 40 mph",
      "2 seconds per 10 ft vehicle length across all posted highway speed limits",
      "1 second per 1,000 lbs of total gross commercial combination vehicle weight",
      "A fixed 3-second buffer regardless of commercial vehicle length or speed"
    ],
    "correctAnswerIndex": 0,
    "explanation": "The space formula is 1 second per 10 feet of vehicle length below 40 mph, plus 1 additional second for speeds 40 mph and above (e.g., a 60-foot truck at 55 mph needs 6 + 1 = 7 seconds)."
  },
  {
    "id": 1028,
    "question": "According to the CDL space management formula, what is the minimum following distance for a 60-foot semi-truck traveling at 55 mph on dry pavement?",
    "options": [
      "7 seconds following distance",
      "6 seconds following distance",
      "5 seconds following distance",
      "8 seconds following distance"
    ],
    "correctAnswerIndex": 0,
    "explanation": "60 feet / 10 = 6 seconds. Since speed is over 40 mph, add 1 second: 6 + 1 = 7 seconds total."
  },
  {
    "id": 1029,
    "question": "Why should you never follow another vehicle closely (tailgate) in a large commercial truck?",
    "options": [
      "Large commercial trucks require much greater stopping distances and tailgating invites fatal collisions",
      "Tailgating causes the tractor turbocharger wastegate to over-pressurize the intake manifold assembly",
      "Tailgating causes the electronic logging device (ELD) to automatically record a speeding violation",
      "Tailgating reduces diesel fuel efficiency by disrupting clean aerodynamic airflow to the radiator"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Commercial vehicles are much heavier and require significantly greater stopping distance; tailgating deprives the driver of necessary stopping space if the lead vehicle stops suddenly."
  },
  {
    "id": 1030,
    "question": "When executing a right turn in a large commercial vehicle, why should you keep the rear of your vehicle close to the curb rather than swinging wide into the right lane first?",
    "options": [
      "To prevent trailing vehicles from trying to pass you on your right blind side",
      "To prevent front steering tires from rubbing against right roadway gutters",
      "To reduce centrifugal forces acting on cargo freight inside the rear trailer",
      "To ensure trailer turn signals remain clearly visible to side cross traffic"
    ],
    "correctAnswerIndex": 0,
    "explanation": "If you swing wide to the left before turning right (buttonhook), trailing cars may try to pass on your right. Instead, keep the rear close to the curb and turn wide as you complete the turn."
  },
  {
    "id": 1031,
    "question": "What is 'off-tracking' (cheating) in a combination commercial vehicle?",
    "options": [
      "Rear wheels follow a shorter path than front wheels, tracking closer to curb",
      "Trailer tires bounce off the pavement when traversing railway grade crossings",
      "Electronic navigation system loses satellite reception in remote rural areas",
      "Tractor drive wheels spin faster than trailer wheels on slippery road grades"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Off-tracking occurs during turns because the rear wheels of a combination vehicle follow a shorter, tighter path than the front steering wheels."
  },
  {
    "id": 1032,
    "question": "When backing a commercial vehicle, why is backing toward the driver's side (sight-side) strongly preferred over the passenger's side (blind-side)?",
    "options": [
      "Driver has direct line of sight out window and better mirror views along trailer",
      "Trailer spring brakes release significantly faster when reversing toward the left",
      "Tractor steering gear box offers a sharper turning radius when pivoting to left",
      "Minnesota commercial traffic statutes prohibit backing a vehicle toward right"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Backing to the driver's side gives the driver a direct visual line of sight out the driver window and superior mirror angles, avoiding dangerous blind-side backing."
  },
  {
    "id": 1033,
    "question": "What is the primary safety rule to remember whenever you MUST back a commercial vehicle?",
    "options": [
      "Get Out And Look (G.O.A.L.), use a helper, back slowly, and avoid backing when possible",
      "Back as quickly as possible to clear active roadway lanes and minimize traffic delays",
      "Sound high-pressure pneumatic air horn continuously throughout entire backing movement",
      "Rely exclusively on wide-angle convex side mirrors without turning your head or body"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Always avoid backing when possible. If necessary: Get Out And Look (G.O.A.L.), use a helper with pre-arranged hand signals, and back slowly while checking both mirrors."
  },
  {
    "id": 1034,
    "question": "What three individual distances make up total stopping distance for vehicles equipped with air brakes?",
    "options": [
      "Perception distance, Reaction distance, and Braking distance (which includes brake lag distance)",
      "Tire friction distance, Transmission downshift distance, and Suspension rebound distance",
      "Sightline distance, Compressor replenishment distance, and Parking brake application distance",
      "Speedometer calibration distance, S-cam rotation distance, and Glad hand pressurization distance"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Total stopping distance for air brake vehicles = Perception Distance + Reaction Distance + Brake Lag Distance + Effective Braking Distance."
  },
  {
    "id": 1035,
    "question": "What is 'brake lag' on an air brake system?",
    "options": [
      "Time needed for air to flow through brake lines to chambers (about 0.5 second)",
      "Mechanical delay when brake shoes retract from drum during truck acceleration",
      "Electrical latency in the tractor anti-lock braking system (ABS) controller",
      "Time required for air compressor to build storage tank pressure to 100 psi"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Air brakes have a physical brake lag of about 0.5 seconds—the time it takes for air to flow through the lines and push the pushrods into action after pressing the pedal."
  },
  {
    "id": 1036,
    "question": "At 55 mph on dry pavement, approximately what is the total stopping distance for a heavy commercial truck with air brakes?",
    "options": [
      "Over 450 feet (more than the length of a football field)",
      "About 200 feet (the length of five mid-size passenger cars)",
      "About 100 feet (similar to a modern passenger car with ABS)",
      "Over 900 feet (nearly one-fifth of an entire statute mile)"
    ],
    "correctAnswerIndex": 0,
    "explanation": "At 55 mph on dry pavement, a heavy commercial truck with air brakes requires more than 450 feet to come to a complete stop (perception + reaction + brake lag + braking)."
  },
  {
    "id": 1037,
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
    "id": 1038,
    "question": "What is the function of the air compressor governor in an air brake system?",
    "options": [
      "It controls when the air compressor pumps air into the storage tanks (cut-out and cut-in)",
      "It regulates the speed of the engine crankshaft to prevent high-RPM compressor overheating",
      "It limits the maximum hydraulic pressure delivered to the power steering fluid reservoir",
      "It adjusts the tension on the trailer glad hand rubber coupling seals during turns"
    ],
    "correctAnswerIndex": 0,
    "explanation": "The governor controls when the compressor pumps air into the storage tanks, cutting out around 125 psi and cutting in around 100 psi."
  },
  {
    "id": 1039,
    "question": "At what pressure does the air compressor governor typically 'cut out' (stop pumping air)?",
    "options": [
      "Around 125 psi (between 120 and 130 psi)",
      "Around 85 psi (between 80 and 90 psi)",
      "Around 175 psi (between 165 and 185 psi)",
      "Around 60 psi (between 55 and 65 psi)"
    ],
    "correctAnswerIndex": 0,
    "explanation": "The compressor governor cuts out (stops compressor pumping) when tank pressure reaches around 125 psi (standard range 120-130 psi)."
  },
  {
    "id": 1040,
    "question": "At what pressure does the air compressor governor typically 'cut in' (start pumping air again)?",
    "options": [
      "Around 100 psi (when pressure falls to normal recharge level)",
      "Around 60 psi (when low pressure safety buzzer sounds)",
      "Around 125 psi (when maximum tank storage is reached)",
      "Around 150 psi (when emergency relief valve triggers)"
    ],
    "correctAnswerIndex": 0,
    "explanation": "The governor cuts in (starts pumping again) when tank air pressure drops to around 100 psi (standard minimum cut-in is 100 psi)."
  },
  {
    "id": 1041,
    "question": "Why must compressed air storage tanks be drained regularly (daily if manual drain valves)?",
    "options": [
      "Water and oil collect in the tanks, which can freeze in cold weather and cause total brake failure",
      "Accumulated moisture increases the gross combination vehicle weight beyond state legal bridge limits",
      "Excess oil vapor causes the dashboard air pressure gauges to register false high-pressure readings",
      "Draining tanks prevents the fuel injection system from drawing air bubbles into the combustion cylinders"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Compressors introduce moisture and oil into the air tanks. If not drained, water can cause corrosion, freeze in cold weather, and cause complete brake failure."
  },
  {
    "id": 1042,
    "question": "When must the low air pressure warning signal (buzzer, light, or wig-wag) activate on an air brake vehicle?",
    "options": [
      "Before air pressure drops below 60 psi (typically between 55 and 75 psi)",
      "When air pressure drops below 20 psi (before spring brakes lock the axle)",
      "When air pressure drops below 100 psi (when governor cuts in the pump)",
      "Only when the air storage reservoir is completely depleted to zero psi"
    ],
    "correctAnswerIndex": 0,
    "explanation": "A low air pressure warning signal (buzzer, light, or drop arm) must activate before air pressure falls below 60 psi."
  },
  {
    "id": 1043,
    "question": "What activates the emergency spring brakes on a commercial vehicle if air pressure drops dangerously low?",
    "options": [
      "Mechanical springs apply brakes automatically when pressure falls to 20-45 psi",
      "ABS electronic module commands hydraulic calipers to pinch brake rotor discs",
      "Engine exhaust retarder closes automatically to lock transmission drive gears",
      "Driver must manually disconnect trailer glad hand couplers from trailer nose"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Spring brakes are held back by air pressure. If air pressure drops dangerously low (usually 20-45 psi), mechanical springs overcome the air and apply the brakes automatically."
  },
  {
    "id": 1044,
    "question": "What is the yellow, four-sided (diamond-shaped) push-pull control knob on the dashboard of a modern commercial vehicle?",
    "options": [
      "The tractor Parking Brake control knob (push to release, pull to apply)",
      "The trailer air supply control knob (push to charge, pull to isolate)",
      "The auxiliary fog light switch for adverse winter weather conditions",
      "The manual engine compression Jake brake three-stage power selector"
    ],
    "correctAnswerIndex": 0,
    "explanation": "The yellow diamond-shaped knob controls the tractor parking brakes. Push in to release, pull out to apply."
  },
  {
    "id": 1045,
    "question": "What is the red, eight-sided (octagonal) push-pull control knob on the dashboard?",
    "options": [
      "Trailer Air Supply valve knob (push in to supply air, pull to set brakes)",
      "Tractor Parking Emergency knob (pull to dump air from all tractor tanks)",
      "Engine Emergency Shutdown knob (pull to starve fuel pump of all diesel)",
      "Differential Interlock knob (push to lock rear tandem axles for grip)"
    ],
    "correctAnswerIndex": 0,
    "explanation": "The red octagonal knob is the Trailer Air Supply control. Push in to charge the trailer air tanks; pull out to apply the trailer emergency brakes."
  },
  {
    "id": 1046,
    "question": "Why should you never push the brake pedal down when the spring brakes are fully applied?",
    "options": [
      "It causes 'compounding'—combining spring force with air pressure can damage or crack brake components",
      "It causes the automatic slack adjusters to over-extend and strip their internal ratcheting teeth",
      "It dumps all remaining air from the secondary air storage tank through the quick release valve",
      "It de-calibrates the electronic wheel speed sensors used by the tractor anti-lock braking system"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Pushing the brake pedal when spring brakes are on causes compounding: the force of the springs plus air pressure can rupture brake chambers, drums, or linkages."
  },
  {
    "id": 1047,
    "question": "What is the maximum allowable air leakage rate for a single vehicle with air brakes (static / engine off, brakes released)?",
    "options": [
      "No more than 2 psi per minute",
      "No more than 5 psi per minute",
      "No more than 1 psi per minute",
      "No more than 8 psi per minute"
    ],
    "correctAnswerIndex": 0,
    "explanation": "For a single vehicle with the engine off and brakes released, the air leakage rate should be no more than 2 psi per minute (3 psi per minute with brakes applied)."
  },
  {
    "id": 1048,
    "question": "What is the maximum allowable air leakage rate for a combination vehicle (tractor-trailer) with the engine off and service brakes fully applied?",
    "options": [
      "No more than 4 psi per minute",
      "No more than 2 psi per minute",
      "No more than 6 psi per minute",
      "No more than 8 psi per minute"
    ],
    "correctAnswerIndex": 0,
    "explanation": "For combination vehicles with the engine off and service brakes fully applied, the air leakage rate must not exceed 4 psi per minute (3 psi per minute with brakes released)."
  },
  {
    "id": 1049,
    "question": "How do you test the low air pressure warning signal during a pre-trip inspection?",
    "options": [
      "Turn key on with engine off, pump brake pedal repeatedly to reduce pressure; warning must activate by 60 psi",
      "Idle engine at high RPM, pull both parking brake knobs, and listen for the air dryer purge valve to exhaust",
      "Disconnect the blue service line glad hand while the engine is running to simulate an air leak in the line",
      "Apply the trailer hand valve firmly while driving forward at 15 mph in the commercial vehicle yard"
    ],
    "correctAnswerIndex": 0,
    "explanation": "With the electrical power ON and engine OFF, step on and off the brake pedal to deplete air. The low air warning light and buzzer must activate before pressure drops below 60 psi."
  },
  {
    "id": 1050,
    "question": "How do you test that the tractor-trailer spring brakes apply automatically during an air brake inspection?",
    "options": [
      "Pump pedal down to 20-45 psi until trailer supply and parking knobs pop out",
      "Accelerate truck to 25 mph on flat road and pull trailer air supply knob",
      "Chock wheels, build tank pressure to 125 psi, and hold pedal down 5 minutes",
      "Disconnect battery ground wire to check spring brake engagement on axles"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Continue fanning the brake pedal down until the red (trailer supply) and yellow (parking brake) knobs pop out automatically, usually between 20 and 45 psi."
  },
  {
    "id": 1051,
    "question": "What is the proper technique for braking down a long, steep grade with a heavy commercial vehicle (snub braking)?",
    "options": [
      "Select low gear, apply brakes firmly to drop 5 mph below safe speed, release, and repeat",
      "Maintain continuous light foot pressure on brake pedal throughout entire downhill descent",
      "Shift transmission to neutral and rely entirely on trailer hand valve to regulate speed",
      "Pump brake pedal rapidly twenty to thirty times per minute to keep brake linings cool"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Proper snub braking: shift to appropriate low gear, let speed reach safe speed, apply brakes firmly to drop 5 mph below safe speed (takes about 3 seconds), release, and repeat."
  },
  {
    "id": 1052,
    "question": "Why does riding the brakes (continuous light pressure) on a long downgrade cause 'brake fade' and runaway trucks?",
    "options": [
      "Excessive heat causes brake drums to expand away from linings and friction material to glaze, losing braking power",
      "Continuous braking causes the air compressor governor to dump all air pressure through the emergency safety valve",
      "Light foot pressure forces moisture from the wet tank directly into the anti-lock brake electronic sensor ring",
      "The brake pedal return spring loses its mechanical tension and prevents the pushrod from returning to center"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Excessive heat from continuous braking causes drums to expand away from brake shoes and friction material to glaze, causing brake fade where pressing harder produces little or no stopping power."
  },
  {
    "id": 1053,
    "question": "What is the primary danger of using the trailer hand valve (trolley valve) to control vehicle speed while driving?",
    "options": [
      "It applies only trailer brakes, which can easily lock the trailer wheels and cause a fatal trailer jackknife",
      "It cuts off the supply of compressed air to the tractor steering gear box and power steering pump assembly",
      "It causes the fifth wheel locking jaws to unlock from the trailer kingpin while traveling at high speeds",
      "It drains the tractor secondary air storage tank without activating the dashboard low-pressure buzzer"
    ],
    "correctAnswerIndex": 0,
    "explanation": "The trailer hand valve should NEVER be used for normal braking while driving; applying only trailer brakes can cause trailer wheel lockup and a violent trailer skid or jackknife."
  },
  {
    "id": 1054,
    "question": "What does Anti-lock Braking System (ABS) do for a commercial vehicle during hard emergency braking?",
    "options": [
      "It prevents wheels from locking up, helping the driver maintain directional steering control and stability",
      "It reduces stopping distance by at least 50 percent on every type of roadway and pavement condition",
      "It automatically steers the front tractor axle away from obstacles without driver steering input",
      "It eliminates the requirement for drivers to conduct daily pre-trip commercial brake inspections"
    ],
    "correctAnswerIndex": 0,
    "explanation": "ABS prevents wheel lockup during hard braking, allowing the driver to steer around obstacles and maintain vehicle control (it does not necessarily shorten stopping distance)."
  },
  {
    "id": 1055,
    "question": "On a combination vehicle, which line is the 'Emergency Line' (Supply Line) and what color is its glad hand connector?",
    "options": [
      "The line that supplies air to trailer tanks and controls emergency brakes; colored RED",
      "The line that carries air pressure when the driver presses the foot pedal; colored BLUE",
      "The line that supplies 12-volt electrical power to trailer tail lamps; colored GREEN",
      "The auxiliary fuel transfer line connecting dual saddle tanks; colored YELLOW"
    ],
    "correctAnswerIndex": 0,
    "explanation": "The Emergency (Supply) line is colored RED. It charges trailer air tanks and controls the emergency spring brakes."
  },
  {
    "id": 1056,
    "question": "Which glad hand line is the 'Service Line' (Control Line) on a tractor-trailer combination and what color is it?",
    "options": [
      "Line carrying air pressure controlled by foot brake pedal; colored BLUE",
      "Line that supplies constant charging air to spring brakes; colored RED",
      "Auxiliary hydraulic return line for walking floor trailers; colored BLACK",
      "High-voltage electrical cable supplying power to reefer; colored YELLOW"
    ],
    "correctAnswerIndex": 0,
    "explanation": "The Service (Control) line is colored BLUE. It carries air pressure when the foot brake or trailer hand valve is applied."
  },
  {
    "id": 1057,
    "question": "What happens if you cross the service (blue) and emergency (red) air lines when coupling a tractor to a trailer?",
    "options": [
      "Air will not reach trailer tanks (springs stay locked) or pedal won't brake",
      "Fifth wheel locking jaws will shatter under sudden release of line pressure",
      "Tractor diesel engine will stall instantly due to exhaust manifold pressure",
      "Dashboard speedometer will display erratic readings and trip an ABS warning"
    ],
    "correctAnswerIndex": 0,
    "explanation": "If lines are crossed: air won't go to trailer tanks so trailer spring brakes won't release, or service line air won't properly actuate trailer service brakes."
  },
  {
    "id": 1058,
    "question": "What is the 'crack-the-whip' effect in multi-trailer combination vehicles?",
    "options": [
      "Rearward amplification causes rear trailer to swing much more violently than tractor in turns",
      "Tractor drive wheels hop violently when accelerating from dead stop on slick asphalt roads",
      "Loud whipping sound produced when glad hand rubber coupling seals separate under pressure",
      "Rapid back-and-forth movement of fifth wheel slider plate when hauling heavy bulk liquids"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Rearward amplification ('crack-the-whip') means quick steering inputs are amplified toward the rear; the last trailer turns much harder and can easily roll over."
  },
  {
    "id": 1059,
    "question": "Why should the heaviest trailer always be positioned directly behind the tractor in a doubles or triples combination?",
    "options": [
      "To maximize vehicle stability and prevent dangerous rollover risks",
      "To prevent excessive tire wear on front steering axle in city turns",
      "To ensure trailer refrigeration unit receives adequate cooling air",
      "To comply with federal regulations on hazardous materials placards"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Always place the heaviest trailer in the front (first position behind tractor) and lightest in the rear to maintain combination stability and avoid rollover from crack-the-whip effect."
  },
  {
    "id": 1060,
    "question": "When coupling a tractor to a semitrailer, what position should the trailer be relative to the fifth wheel before backing under it?",
    "options": [
      "The trailer should be slightly lower than the fifth wheel so the tractor lifts the trailer as it backs under",
      "The trailer should be raised 4 inches higher than the fifth wheel so the kingpin drops cleanly into the jaws",
      "The trailer should be tilted backward at a 15-degree angle to align with the fifth wheel mounting plate",
      "The trailer height does not matter because modern air suspensions adjust automatically during coupling"
    ],
    "correctAnswerIndex": 0,
    "explanation": "The trailer must be at the correct height: slightly below the center of the fifth wheel so the tractor gently lifts the trailer as it slides underneath."
  },
  {
    "id": 1061,
    "question": "After coupling the tractor to the trailer, how should you verify that the fifth wheel locking jaws have securely closed around the kingpin?",
    "options": [
      "Look inside fifth wheel with flashlight to ensure jaws are fully closed around kingpin shank",
      "Rely solely on the loud clunk sound heard from cab when backing into trailer kingpin apron",
      "Tap dashboard trailer supply knob and confirm storage air pressure remains above 100 psi",
      "Drive forward 100 feet at highway speed to test whether trailer tracks straight behind cab"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Always visually inspect the fifth wheel connection with a flashlight to ensure the locking jaws are completely closed around the narrow shank of the kingpin."
  },
  {
    "id": 1062,
    "question": "What is the 'tug test' performed immediately after coupling a tractor to a semitrailer?",
    "options": [
      "Gently pull forward against locked trailer brakes in low gear to confirm jaws are locked",
      "Pull emergency breakaway cable by hand to test whether trailer parking brakes apply firmly",
      "Vigorously pull glad hand rubber hoses to check for loose brass fittings and air leakage",
      "Rock steering wheel left and right while reversing to check for fifth wheel lateral play"
    ],
    "correctAnswerIndex": 0,
    "explanation": "The tug test: with trailer brakes locked, put tractor in low gear and gently pull forward to feel that the kingpin is firmly locked inside the fifth wheel jaws."
  },
  {
    "id": 1063,
    "question": "How much space should there be between the fifth wheel plate and the trailer apron after coupling?",
    "options": [
      "No space (no daylight) between the fifth wheel and trailer apron",
      "Between one-half inch and one inch of clearance for turning",
      "At least two inches of space to allow suspension articulation",
      "About one-quarter inch of space to prevent metal friction"
    ],
    "correctAnswerIndex": 0,
    "explanation": "There should be NO space (no daylight) between the fifth wheel plate and the trailer apron; any gap indicates the kingpin is not properly seated."
  },
  {
    "id": 1064,
    "question": "When uncoupling a semitrailer, what must you do with the trailer landing gear (dollies)?",
    "options": [
      "Lower gear to firm ground contact, then crank extra turns in low gear to lift weight off tractor",
      "Lower landing gear until two inches above ground so it does not drag when tractor pulls away",
      "Leave landing gear in high gear without ground contact to let tractor air suspension dump air",
      "Lower only driver-side landing leg and chock passenger-side trailer tandem wheels on ground"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Lower landing gear until it touches the ground, then give it a few extra turns in low gear to lift some weight off the tractor fifth wheel."
  },
  {
    "id": 1065,
    "question": "What should you do before backing under a trailer on soft ground or hot asphalt?",
    "options": [
      "Place wooden or steel hardwood boards under the landing gear pads to prevent them from sinking into the ground",
      "Deflate trailer tires to 50 percent normal pressure to increase the contact surface area of the tires",
      "Disconnect the tractor steer axle shock absorbers to increase front bumper clearance over rough terrain",
      "Coat the landing gear sand shoes with heavy chassis grease to prevent them from sticking to the asphalt"
    ],
    "correctAnswerIndex": 0,
    "explanation": "On soft ground or hot asphalt, place hardwood boards under the landing gear pads to keep the landing gear from sinking and tilting the trailer."
  },
  {
    "id": 1066,
    "question": "Under Minnesota and federal regulations, who is responsible for ensuring that cargo is properly distributed, balanced, and secured in a commercial vehicle?",
    "options": [
      "The commercial motor vehicle driver",
      "The warehouse shipping dock supervisor",
      "The third-party freight broker agency",
      "The consignee receiving the freight cargo"
    ],
    "correctAnswerIndex": 0,
    "explanation": "The driver is legally responsible for inspecting cargo, ensuring it does not exceed weight limits, is properly balanced, and is securely tied down (unless sealed/pre-loaded where inspection is prohibited)."
  },
  {
    "id": 1067,
    "question": "When transporting cargo, within what distance after starting a trip must the driver inspect the cargo and securement devices?",
    "options": [
      "Within the first 50 miles of beginning the trip",
      "Within the first 100 miles of beginning the trip",
      "Within the first 10 miles of beginning the trip",
      "Within the first 150 miles of beginning the trip"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Drivers must inspect cargo and securement devices within the first 50 miles of a trip, and re-check every 3 hours or 150 miles (and during every duty status change)."
  },
  {
    "id": 1068,
    "question": "After the initial 50-mile check, how often must a commercial driver re-inspect cargo and tie-downs during transit?",
    "options": [
      "Every 3 hours or 150 miles (whichever comes first), and after every driving break",
      "Every 5 hours or 300 miles (whichever comes first), and at the end of each duty shift",
      "Only when the vehicle stops for scheduled fuel refills or commercial weigh station checks",
      "Every 8 hours or 400 miles, or whenever the electronic logging device records a stop"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Federal regulations require cargo checks every 3 hours or 150 miles, and whenever the driver makes a change of duty status."
  },
  {
    "id": 1069,
    "question": "What is the Gross Vehicle Weight Rating (GVWR)?",
    "options": [
      "Maximum allowable total weight of a single vehicle plus complete cargo payload specified by maker",
      "Actual weight of empty truck and trailer before cargo, fuel, or driver is placed on the vehicle",
      "Combined scale weight of tractor and connected trailers measured at state highway weigh station",
      "Maximum permissible weight on steering axle under federal highway bridge weight formula limits"
    ],
    "correctAnswerIndex": 0,
    "explanation": "GVWR is the maximum permissible total weight of a single vehicle plus its payload, as rated by the vehicle manufacturer."
  },
  {
    "id": 1070,
    "question": "What is the Gross Combination Weight Rating (GCWR)?",
    "options": [
      "Maximum allowable total weight of combination vehicle (power unit plus trailer and cargo) by maker",
      "Sum of empty tractor weight plus weight of driver and thirty gallons of diesel fuel in the tank",
      "Maximum weight permitted on any individual tandem drive axle under interstate highway rules",
      "Total certified payload weight of dry freight loaded into an intermodal shipping container"
    ],
    "correctAnswerIndex": 0,
    "explanation": "GCWR is the maximum allowable combined weight of the towing vehicle and the towed vehicle(s) plus all cargo and passengers, specified by the manufacturer."
  },
  {
    "id": 1071,
    "question": "What is the minimum number of tiedowns required for any cargo item regardless of size or weight (unless blocked on all sides)?",
    "options": [
      "At least two tiedowns",
      "At least one tiedown",
      "At least four tiedowns",
      "At least three tiedowns"
    ],
    "correctAnswerIndex": 0,
    "explanation": "No matter how small the cargo, there must be at least two tiedowns holding it (one tiedown is permitted only for items under 5 feet long and under 1,100 lbs if blocked)."
  },
  {
    "id": 1072,
    "question": "What is the general rule for the number of tiedowns required based on cargo length on an open flatbed trailer?",
    "options": [
      "At least one tiedown for every 10 feet of cargo length (with a minimum of two tiedowns per article)",
      "At least one tiedown for every 20 feet of cargo length (with a minimum of one tiedown per article)",
      "At least two tiedowns for every 5 feet of cargo length regardless of whether cargo is blocked",
      "At least four tiedowns for every 15 feet of cargo length across all commercial flatbed routes"
    ],
    "correctAnswerIndex": 0,
    "explanation": "On flatbeds, you need at least one tiedown for every 10 feet of cargo length, and at least two tiedowns regardless of how short the cargo is."
  },
  {
    "id": 1073,
    "question": "Why is a high center of gravity particularly dangerous in a commercial vehicle?",
    "options": [
      "It significantly increases the risk of vehicle rollover on curves, highway ramps, and sudden swerves",
      "It causes the engine cooling fan clutch to disengage prematurely on steep uphill mountain climbs",
      "It increases the air pressure required to actuate the trailer service brake diaphragm chambers",
      "It causes the tractor front steering axle tires to lose air pressure at high highway speeds"
    ],
    "correctAnswerIndex": 0,
    "explanation": "A high center of gravity makes a truck top-heavy, greatly increasing rollover danger during turns, off-ramp maneuvers, or sudden evasive steering."
  },
  {
    "id": 1074,
    "question": "What is the phenomenon of 'liquid surge' in a commercial tanker vehicle?",
    "options": [
      "Movement of liquid cargo forward and backward, pushing truck during stops",
      "Hydraulic fluid leaking from steering pump into engine oil during turns",
      "Diesel fuel splashing out of filler necks on rough railway crossings",
      "Condensation water collecting inside wet tank of air brake in winter"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Liquid surge is the forward/backward sloshing of liquid in a partially filled tanker when braking or accelerating, which can shove the truck through an intersection."
  },
  {
    "id": 1075,
    "question": "What is the purpose of 'baffles' inside some commercial liquid tanker trailers?",
    "options": [
      "Bulkheads with openings that slow down forward-and-back liquid surge during acceleration and braking",
      "Solid internal walls that prevent liquid from sloshing side-to-side during high-speed highway turns",
      "Pneumatic heating elements that keep liquid asphalt from solidifying during cold winter transit",
      "Electronic sensors that monitor the chemical temperature and pressure of hazardous liquid loads"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Baffles have holes that let liquid flow through while dampening front-to-back surge (they do NOT control side-to-side surge, which can still cause rollover)."
  },
  {
    "id": 1076,
    "question": "Why are 'unbaffled' (smooth bore) liquid tankers particularly difficult to drive and stop safely?",
    "options": [
      "No internal barriers exist to restrict front-to-back liquid motion, creating powerful forward surges",
      "Smooth bore tankers have smaller air brake chambers that take twice as long to build air pressure",
      "Lack of internal baffles makes the tanker outer skin weaker and prone to sudden structural failure",
      "Smooth bore tankers cannot be equipped with modern tractor electronic anti-lock braking systems"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Smooth bore tanks have nothing inside to slow down liquid movement, so forward/backward surge is very strong and requires extreme caution when stopping."
  },
  {
    "id": 1077,
    "question": "What shape and size are hazardous materials warning placards that must be displayed on commercial vehicles?",
    "options": [
      "Diamond-shaped, at least 9.84 inches (250 mm) square, placed on all four sides of the commercial vehicle",
      "Circular-shaped, at least 12 inches in diameter, placed exclusively on the rear bumper of the trailer",
      "Rectangular-shaped, at least 15 inches wide by 8 inches tall, mounted on the front tractor grill only",
      "Octagonal-shaped, at least 10 inches across, affixed to the driver and passenger side cab doors only"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Hazmat placards are square-on-point (diamond-shaped) measuring at least 250 mm (9.84 inches) on a side and must be placed on front, rear, and both sides (all 4 sides)."
  },
  {
    "id": 1078,
    "question": "Where must the driver keep the Hazardous Materials shipping papers while operating the commercial vehicle?",
    "options": [
      "In clear view within immediate reach while seatbelted, or in a pouch on the driver's door",
      "Locked inside a metal lockbox located in the exterior side storage compartment of the tractor",
      "Stored in the glove compartment along with the vehicle registration and insurance identification",
      "Taped to the inside rear door of the trailer next to the cargo load distribution manifest"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Shipping papers must be in clear view within immediate reach of the driver (with seatbelt fastened) or in a pouch on the driver's door so first responders can find them instantly in an emergency."
  },
  {
    "id": 1079,
    "question": "When a commercial vehicle is placarded for hazardous materials, how far from the nearest rail must the driver stop at a railroad-highway crossing?",
    "options": [
      "Stop between 15 and 50 feet from the nearest rail",
      "Stop between 5 and 10 feet from the nearest rail",
      "Stop between 50 and 100 feet from the nearest rail",
      "Stop between 25 and 75 feet from the nearest rail"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Vehicles required to stop at railroad crossings (placarded hazmat, buses with passengers) must stop 15 to 50 feet from the nearest rail before proceeding."
  },
  {
    "id": 1080,
    "question": "What must a commercial driver NEVER do while crossing railroad tracks with a manual transmission commercial vehicle?",
    "options": [
      "Shift gears while the vehicle is directly crossing over the railroad tracks",
      "Look in both directions along the train tracks before advancing forward",
      "Turn off the cab heater fan and roll down windows to listen for trains",
      "Check the overhead clearance of railway signal arms before advancing"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Never shift gears while crossing railroad tracks; shifting can cause gear grinding or stalling directly on the tracks."
  },
  {
    "id": 1081,
    "question": "Why is swinging into the left lane before making a right turn (a 'jug-handle' turn) dangerous in a commercial vehicle?",
    "options": [
      "Trailing drivers may assume you are turning left and attempt to pass you on your blind right side",
      "It causes the fifth wheel kingpin to uncouple from the tractor locking jaws during the maneuver",
      "It automatically triggers the trailer emergency spring brakes due to line tension in the turn",
      "It forces the air compressor to dump compressed moisture into the secondary service air lines"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Swinging wide to the left makes motorists behind think you're turning left; they may try to pass on your right, trapping them as you turn right (the 'jug-handle' trap)."
  },
  {
    "id": 1082,
    "question": "What should you do if another vehicle cuts into your safety space buffer ahead of you on the highway?",
    "options": [
      "Drop back smoothly to re-establish your proper safe following distance buffer",
      "Flash your high beams and tailgate closely to encourage the driver to speed up",
      "Swerve onto the left shoulder immediately to maintain your exact travel speed",
      "Honk your air horn and accelerate rapidly to pass the vehicle on the right side"
    ],
    "correctAnswerIndex": 0,
    "explanation": "If someone cuts into your space cushion, do not tailgate; ease off the accelerator to smoothly re-establish your proper following distance."
  },
  {
    "id": 1083,
    "question": "Why should you never park a loaded commercial trailer on soft ground or unpaved shoulders without support pads?",
    "options": [
      "Landing gear legs can sink into ground, causing trailer to tilt or collapse",
      "Glad hand rubber coupling seals will melt from contact with road moisture",
      "Tractor rear suspension air bags will over-inflate and rupture bladders",
      "Tractor drive tires will lose traction and spin freely when pulling away"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Loaded trailers are very heavy; unpadded landing gear legs can sink deep into soft ground, causing the trailer to tip over or collapse."
  },
  {
    "id": 1084,
    "question": "At 55 mph, how much clear sight distance do you need ahead of you before safely attempting to pass another vehicle?",
    "options": [
      "Over one-third of a mile (about 1,800 feet) of clear sight distance",
      "About 100 feet of clear sight distance ahead of your front bumper",
      "The length of two semi-trailers (about 120 feet) of sight distance",
      "About 300 feet of clear road ahead of the leading vehicle's bumper"
    ],
    "correctAnswerIndex": 0,
    "explanation": "At 55 mph, you need over one-third of a mile of clear sight distance to pass safely because large trucks accelerate slowly and require significant passing distance."
  },
  {
    "id": 1085,
    "question": "What is 'hydroplaning' and what should you do if your commercial vehicle begins to hydroplane on standing water?",
    "options": [
      "Tires ride on a film of water losing traction; do not brake, ease off accelerator, and steer smoothly",
      "Water enters brake drums; pump service brakes rapidly while accelerating to dry out the linings",
      "Air compressor draws water into cylinders; pull the yellow parking brake knob to shut off engine",
      "Tractor drive tires spin on ice; engage differential interlock and downshift to lowest gear"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Hydroplaning occurs when tires ride on top of water instead of the road. Do not brake hard; release accelerator and keep vehicle pointed straight until tires regain grip."
  },
  {
    "id": 1086,
    "question": "What is 'black ice' and where does it commonly form first during freezing weather?",
    "options": [
      "Thin, clear ice looking like wet pavement, forming first on bridges and overpasses",
      "Diesel soot and tire rubber that accumulates on concrete highway shoulder lanes",
      "Asphalt sealant that has not cured properly after highway construction work",
      "Ice mixed with engine oil in commercial truck parking stalls and truck stops"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Black ice is a thin layer of transparent ice through which the dark road surface is visible. It looks like wet pavement and forms first on bridges and overpasses."
  },
  {
    "id": 1087,
    "question": "What should you do if your commercial vehicle experiences a drive-wheel skid on a slippery road?",
    "options": [
      "Stop braking, steer in direction of skid, and counter-steer smoothly as vehicle straightens",
      "Slam on service brakes immediately to lock all wheels and slide vehicle to an abrupt stop",
      "Pull yellow parking brake knob on dashboard to engage rear drive axle spring brakes firmly",
      "Turn steering wheel sharply in opposite direction of skid while applying full acceleration"
    ],
    "correctAnswerIndex": 0,
    "explanation": "To correct a drive-wheel skid: stop braking, push in clutch, turn the steering wheel in the direction of the skid, and counter-steer to prevent fish-tailing as control returns."
  },
  {
    "id": 1088,
    "question": "What is a 'front-wheel skid' (understeer) in a commercial vehicle and how do you recover from it?",
    "options": [
      "Front wheels lose traction and truck goes straight; ease off gas and let vehicle slow down",
      "Drive wheels lose traction and swing outward; apply trailer hand valve to pull unit straight",
      "Trailer wheels slide toward oncoming traffic; downshift transmission and accelerate firmly",
      "Steering box locks up mechanically; apply maximum foot brake pressure to force wheels skid"
    ],
    "correctAnswerIndex": 0,
    "explanation": "In a front-wheel skid, the truck continues in a straight line regardless of steering wheel angle. Stop braking, ease off the gas, and let the front tires regain traction."
  },
  {
    "id": 1089,
    "question": "What causes most commercial vehicle brake fires?",
    "options": [
      "Excessive braking heat from descending hills, and dragging adjusted brakes",
      "Electrical shorts in tractor alternator harness igniting washer fluid hoses",
      "Static electricity generated by rapid airflow across side aerodynamic wings",
      "Low tire pressure allowing wheel rims to contact brake drums during transit"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Most vehicle brake fires result from excessive heat caused by dragging brakes, driving with parking brakes set, improperly adjusted brakes, or overusing brakes on steep hills."
  },
  {
    "id": 1090,
    "question": "What type of fire extinguisher is required on a commercial motor vehicle that does NOT transport hazardous materials?",
    "options": [
      "A fire extinguisher with a UL rating of at least 5 B:C (or two 4 B:C)",
      "A fire extinguisher with a UL rating of at least 20 B:C (or two 10 B:C)",
      "A pressurized water extinguisher of at least 2.5 gallons capacity unit",
      "A carbon dioxide extinguisher rated exclusively for Class A wood fires"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Non-hazmat CMVs must have at least one UL-rated 5 B:C (or higher) fire extinguisher (or two 4 B:C units). Vehicles transporting hazardous materials require at least 10 B:C."
  },
  {
    "id": 1091,
    "question": "What type of fire extinguisher is required on a commercial motor vehicle transporting hazardous materials?",
    "options": [
      "A fire extinguisher with a UL rating of at least 10 B:C (or two 5 B:C)",
      "A fire extinguisher with a UL rating of at least 5 B:C (or two 4 B:C)",
      "A pressurized water extinguisher of at least 2.5 gallons capacity unit",
      "A dry chemical extinguisher rated exclusively for Class D metal fires"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Commercial motor vehicles hauling placarded hazardous materials must carry a fire extinguisher with an Underwriters Laboratories (UL) rating of 10 B:C or more."
  },
  {
    "id": 1092,
    "question": "How should you fight a commercial vehicle fire using a portable fire extinguisher?",
    "options": [
      "Stay upwind, aim at base of fire, sweep side to side, keep escape open",
      "Stand downwind, aim at top of flames, and empty can in one heavy blast",
      "Open engine hood fully to expose flames before discharging extinguisher",
      "Pour water over wiring harness before discharging dry chemical powders"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Proper extinguisher technique (PASS): Pull pin, Aim at BASE of fire, Squeeze handle, Sweep from side to side. Stay upwind so smoke blows away from you."
  },
  {
    "id": 1093,
    "question": "Why should you NEVER use water to fight a burning tire fire or gasoline/diesel fuel fire?",
    "options": [
      "Water can cause burning liquid fuel to spread and burning tires to explode violently",
      "Water evaporates and suffocates the diesel engine air intake manifold assembly",
      "Water triggers the automatic trailer emergency spring brake chambers to lock up",
      "Water washes the required DOT commercial inspection decals off the tractor doors"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Never use water on burning liquid fuels (water spreads the fire) or burning tires (water can cause burning rubber to explode and throw molten fragments)."
  },
  {
    "id": 1094,
    "question": "During an in-cab air brake test, what indicates a serious air brake system leak that requires immediate repair?",
    "options": [
      "Air pressure drops over 3 psi per minute for straight truck or 4 psi for combination",
      "Engine idle speed increases by 200 RPM when service brake pedal is fully depressed",
      "Service brake pedal vibrates slightly under continuous steady foot brake pressure",
      "Tractor low-beam headlights dim momentarily when air compressor engages clutch"
    ],
    "correctAnswerIndex": 0,
    "explanation": "With engine off and brakes applied: leakage over 3 psi/min for straight trucks or 4 psi/min for combinations indicates a major leak that must be fixed before driving."
  },
  {
    "id": 1095,
    "question": "If a commercial driver's license is suspended, revoked, or canceled in ANY state, when must the driver notify their employer?",
    "options": [
      "Before end of business day following the day driver received notice of the action",
      "Within 30 calendar days of receiving written notification by mail from the state",
      "Only upon renewing commercial medical examiner certificate every two years at clinic",
      "At annual employer commercial driver qualification file review safety meeting"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Drivers must notify their employer of any license suspension, revocation, or cancellation before the end of the business day following the day they received notice."
  },
  {
    "id": 1096,
    "question": "What is the penalty for operating a commercial motor vehicle while under an Out-of-Service Order (first offense)?",
    "options": [
      "Disqualification for at least 180 days (1-2 years for hazmat/passengers) plus fines",
      "A written reprimand placed in the driver's employer file for 30 calendar days",
      "A mandatory 24-hour driving rest period at a designated state highway weigh station",
      "No penalty if the driver was completing an existing scheduled freight delivery"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Violating an out-of-service order results in CDL disqualification of at least 180 days (1 year for hazmat/passengers) for a first offense, plus substantial civil penalties."
  },
  {
    "id": 1097,
    "question": "What should you do if a front steering tire blows out while driving at highway speed?",
    "options": [
      "Do not brake hard; hold wheel firmly, ease off gas, and steer safely to stop",
      "Lock trailer brakes immediately using red trailer air supply dashboard knob",
      "Shift transmission into reverse to force driveline into rapid counter-spin",
      "Pull yellow parking brake knob while traveling at full highway cruising speed"
    ],
    "correctAnswerIndex": 0,
    "explanation": "A front tire blowout pulls hard to that side. Hold the wheel firmly with both hands, do NOT slam on brakes (which can cause rollover), ease off the gas, and brake gently once the vehicle is stabilized."
  },
  {
    "id": 1098,
    "question": "Under FMCSA Hours of Service (HOS) rules for property-carrying commercial drivers, what is the maximum number of driving hours permitted following 10 consecutive hours off duty?",
    "options": [
      "A maximum of 11 hours of driving time",
      "A maximum of 14 hours of driving time",
      "A maximum of 10 hours of driving time",
      "A maximum of 12 hours of driving time"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Property-carrying commercial drivers may drive a maximum of 11 hours after 10 consecutive hours off duty (within a 14-hour duty window)."
  },
  {
    "id": 1099,
    "question": "What is a 'converter dolly' used in combination vehicle operations?",
    "options": [
      "A coupling device with one or two axles, a fifth wheel, and a towbar used to couple a second semitrailer",
      "A mechanical hoist used to raise heavy palletized cargo freight inside an enclosed dry van trailer",
      "An electronic diagnostics scanner that monitors trailer anti-lock brake wheel speed sensor data",
      "An auxiliary diesel fuel tank mounted directly onto the trailer landing gear support structure"
    ],
    "correctAnswerIndex": 0,
    "explanation": "A converter dolly is a coupling device consisting of one or two axles, a fifth wheel, and a towbar, used to connect a trailing semitrailer to create double or triple combinations."
  },
  {
    "id": 1100,
    "question": "What is the first step in the standard 7-step pre-trip inspection method taught in the Minnesota CDL manual?",
    "options": [
      "Vehicle Overview (approaching vehicle, checking general condition, leaks, damage, and leaning)",
      "Starting the engine and revving tachometer to 2000 RPM to check turbocharger boost pressure",
      "Pumping service brake pedal twenty times to deplete air pressure in secondary reservoir tanks",
      "Backing tractor under trailer kingpin to check fifth wheel jaw locking engagement in the yard"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Step 1 of the 7-Step Inspection Method is Vehicle Overview: approaching the vehicle, reviewing the last driver vehicle inspection report (DVIR), and checking general condition, leaning, damage, and fresh leaks under the vehicle."
  }
];
