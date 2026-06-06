export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export const motorcycleQuestions: Question[] = [
  {
    id: 1,
    question: "You are preparing to ride a motorcycle on a public roadway in Minnesota. Under state law, which of the following combinations represents individuals who are legally mandated to wear a DOT-approved helmet?",
    options: [
      "A 25-year-old operating with a valid motorcycle endorsement and a 16-year-old passenger.",
      "A 30-year-old operating with an instruction permit and any passenger under 18 years of age.",
      "Only the operator if they are riding on interstate highways with speed limits exceeding 55 mph.",
      "All operators and passengers, regardless of their age, licensing status, or type of roadway."
    ],
    correctAnswerIndex: 1,
    explanation: "Minnesota law mandates helmet use for all operators under 18, all passengers under 18, and all operators driving with an instruction permit, regardless of age. Fulfilling the legal standard protects vulnerable or unendorsed riders from severe trauma."
  },
  {
    id: 2,
    question: "While traveling down a Minnesota highway at 60 mph, you notice your motorcycle's integrated high windshield blocks most of the direct wind blast from your face. What are your legal obligations regarding eye protection?",
    options: [
      "No additional protection is required because an integrated windshield satisfies all state visibility requirements.",
      "You must still wear a compliant face shield, goggles, or safety glasses because windshields do not meet legal standards.",
      "Eye protection is only mandatory if you exit the highway onto unpaved surfaces or if it begins to rain.",
      "Only passengers are legally required to wear eye protection if a windshield is present on the vehicle."
    ],
    correctAnswerIndex: 1,
    explanation: "Under Minnesota law, a windshield does not substitute for required eye protection. All operators and passengers must wear an approved face shield, goggles, or protective glasses to safeguard against flying debris, wind-induced tearing, and insects."
  },
  {
    id: 3,
    question: "You have just obtained a motorcycle instruction permit in Minnesota. You plan to commute to a new job that requires working varied shifts. Which restriction applies to your travel hours?",
    options: [
      "You are legally prohibited from operating a motorcycle during hours of darkness.",
      "You are only permitted to operate the motorcycle between the hours of 9:00 AM and 5:00 PM.",
      "You are restricted from riding during peak morning and evening metropolitan rush hours.",
      "There are no time-of-day restrictions, provided you remain within state borders."
    ],
    correctAnswerIndex: 0,
    explanation: "Minnesota instruction permits come with strict operational boundaries: you cannot carry passengers, you cannot ride on interstates, and you cannot ride after dark when reduced visibility increases risks for novice operators."
  },
  {
    id: 4,
    question: "While operating a motorcycle under a valid Minnesota instruction permit, an adult coworker asks you for a ride home from work. What is the legal status of carrying this passenger?",
    options: [
      "It is legal only if the passenger holds a valid commercial driver's license with a motorcycle endorsement.",
      "It is legal if the passenger is an immediate family member who is at least 21 years of age.",
      "It is strictly illegal to carry any passenger on a public roadway while operating on a permit.",
      "It is legal provided both you and the passenger wear high-visibility vests and DOT-approved helmets."
    ],
    correctAnswerIndex: 2,
    explanation: "Carrying a passenger shifts the center of gravity and alters the braking and handling dynamics of a motorcycle. Minnesota law completely prohibits permit holders from carrying passengers to minimize risk during the learning phase."
  },
  {
    id: 5,
    question: "You are cruising at 50 mph on a dry, two-lane highway behind a passenger vehicle. To maintain an adequate safety margin under normal conditions, what is the minimum following distance you should establish?",
    options: [
      "A distance equal to approximately five car lengths.",
      "A minimum time gap of at least one full second.",
      "A minimum time gap of at least two full seconds.",
      "A minimum time gap of at least four full seconds."
    ],
    correctAnswerIndex: 2,
    explanation: "A minimum two-second following distance provides an adequate spatial cushion to perceive a hazard, react, and execute an emergency stop or swerve. Increasing this gap is necessary when track or weather conditions deteriorate."
  },
  {
    id: 6,
    question: "You are riding in heavy traffic behind an SUV. To optimize your visibility and ensure the driver can actively see your presence in their mirrors, where should you position your motorcycle in the lane?",
    options: [
      "The left portion of the lane, close to oncoming traffic lines.",
      "The right portion of the lane, close to the shoulder and debris field.",
      "The center portion of the lane, aligning with the driver's rearview mirror.",
      "Directly on the painted lane divider line to maximize alternative escape routes."
    ],
    correctAnswerIndex: 2,
    explanation: "Occupying the center of the lane positions you directly inside the interior rearview mirror of the driver ahead. This avoids the side mirror blind spots and prevents other drivers from encroaching on your lane space."
  },
  {
    id: 7,
    question: "An oncoming driver suddenly turns left directly across your path of travel. To execute a maximum-efficiency emergency stop on a straight, dry roadway, you must:",
    options: [
      "Squeeze the front brake firmly while pumping the rear brake pedal rapidly to prevent rear lockup.",
      "Apply both the front and rear brakes firmly and smoothly at the same time without locking the wheels.",
      "Stomp heavily on the rear brake pedal and avoid the front brake to prevent going over the handlebars.",
      "Slam on the front brake aggressively and intentionally lean the motorcycle over to slide on its side."
    ],
    correctAnswerIndex: 1,
    explanation: "Maximum stopping efficiency is achieved by applying both brakes simultaneously and progressively. Pumping the brakes or relying on one wheel drastically increases stopping distance and eliminates critical control."
  },
  {
    id: 8,
    question: "While analyzing your motorcycle’s mechanical thresholds during an advanced braking drill, you calculate total stopping force. Approximately how much traction and stopping power does the front brake provide?",
    options: [
      "Approximately 25 percent of the vehicle's total stopping capability.",
      "Approximately 50 percent of the vehicle's total stopping capability.",
      "Only about 10 percent, acting primarily as a stabilizing force.",
      "At least 70 percent of the vehicle's total stopping capability."
    ],
    correctAnswerIndex: 3,
    explanation: "Due to weight transfer during deceleration, the front tire is loaded heavily, providing at least 70% of the total stopping power. Proper, assertive application of the front brake lever is critical to minimizing stopping distance."
  },
  {
    id: 9,
    question: "You are navigating a sweeping county highway at 45 mph. As you approach a sharp right-hand bend, what physical control input must you apply to initiate the turn cleanly?",
    options: [
      "Turn the handlebars to the left while shifting your weight aggressively to the right side.",
      "Press forward on the right handlebar grip to lean the motorcycle to the right.",
      "Pull back firmly on the right handlebar grip while keeping your body completely upright.",
      "Shift your weight to the inside footpeg without applying any physical handlebar pressure."
    ],
    correctAnswerIndex: 1,
    explanation: "At speeds above 15 mph, countersteering is required to initiate a lean. Pressing forward on the right handlebar grip causes the motorcycle to lean right and execute a stable, predictable right-hand turn."
  },
  {
    id: 10,
    question: "You are mid-way through a continuous, radiused turn on an exit ramp. To optimize tire traction, suspension stability, and ground clearance through the apex, how should you manage the throttle?",
    options: [
      "Roll off the throttle completely to reduce speed and tighten your turning radius.",
      "Apply aggressive, rapid throttle openings to force the rear suspension down.",
      "Maintain a steady throttle or roll on slightly and smoothly throughout the turn.",
      "Pull the clutch lever in to coast through the arc without engine drag interference."
    ],
    correctAnswerIndex: 2,
    explanation: "A steady or slightly increasing throttle stabilizes the motorcycle’s suspension, prevents chassis pitch changes, and distributes weight balanced between the front and rear tire contact patches."
  },
  {
    id: 11,
    question: "While traveling down a city street, you are boxed in by traffic and cannot avoid riding over a piece of dimensional lumber dropped by a truck. What is the safest tactical approach?",
    options: [
      "Approach the object at a 45-degree angle while applying heavy front brake pressure.",
      "Sit back heavily in the seat, open the throttle, and pull up firmly on the handlebars.",
      "Pull the clutch in, lean the bike sharply, and slide across using body momentum.",
      "Rise slightly off the seat, keep knees squeezed against the tank, and cross at a 90-degree angle."
    ],
    correctAnswerIndex: 3,
    explanation: "Rising off the seat allows your legs to absorb the shock, keeping your body from being thrown. Crossing at a 90-degree angle ensures the tires traverse the hazard without sliding off the edge of the object."
  },
  {
    id: 12,
    question: "A sudden summer rain shower begins while you are commuting through a high-traffic urban zone. At what point is the pavement surface traction at its lowest threshold?",
    options: [
      "Just as the rain begins, because water mixes with accumulated oil and grease deposits.",
      "After approximately two hours of continuous, heavy downpour which floods the asphalt.",
      "During the late evening hours, when falling temperatures cause ambient moisture condensation.",
      "As soon as the storm clears and the sun begins to evaporate the standing water layers."
    ],
    correctAnswerIndex: 0,
    explanation: "Oil and grease accumulate in the pavement pores over time. When rain first starts, these fluids float on top of the water film before being washed away, creating highly unpredictable, slick conditions."
  },
  {
    id: 13,
    question: "You are attending a social gathering in Minnesota and plan to ride your motorcycle home. Under state statutes, what is the legal threshold for Blood Alcohol Concentration (BAC) where you are considered driving under the influence (DWI)?",
    options: [
      "0.02 percent or higher.",
      "0.05 percent or higher.",
      "0.08 percent or higher.",
      "0.10 percent or higher."
    ],
    correctAnswerIndex: 2,
    explanation: "In Minnesota, a BAC of 0.08% or higher is the statutory limit for criminal impairment across all motor vehicles. Alcohol degrades critical visual tracking, balance, and spatial assessment skills required for stable single-track operation."
  },
  {
    id: 14,
    question: "A law enforcement officer stops your motorcycle in Minnesota under suspicion of operating while impaired. Under the state's Implied Consent Law, what occurs if you refuse a requested chemical test?",
    options: [
      "You will face an automatic 30-day suspension of riding privileges with no criminal penalties.",
      "Your license will be immediately revoked for a minimum of one year and you will face a criminal charge.",
      "No administrative penalty applies because chemical compliance is strictly voluntary prior to formal arrest.",
      "You will receive a statutory warning and be mandated to attend a basic motorcycle safety course."
    ],
    correctAnswerIndex: 1,
    explanation: "Minnesota’s Implied Consent Law means that driving on public roads implies consent to chemical testing. Refusal results in immediate administrative revocation of driving privileges for one year and separate criminal prosecution."
  },
  {
    id: 15,
    question: "You are an adult motorcycle operator carrying a passenger on a short trip. Under Minnesota law, under what circumstance is your passenger legally required to wear a helmet?",
    options: [
      "If the passenger is under 18 years of age.",
      "Only if the passenger does not hold a valid driver's license.",
      "All passengers are mandated to wear helmets regardless of age or operator experience.",
      "No passengers are required to wear helmets if the operator is older than 21."
    ],
    correctAnswerIndex: 0,
    explanation: "Minnesota statute requires all motorcycle operators and passengers under the age of 18 to wear a DOT-approved safety helmet. Regardless of the law, proper gear minimizes traumatic brain injury risk for all riders."
  },
  {
    id: 16,
    question: "You are organizing a group ride with four other motorcyclists on an open highway. To optimize safety, communication, and visibility, what formation should the group maintain?",
    options: [
      "Single-file formation directly in the center of the lane with one-second gaps.",
      "A V-shape formation that spans across multiple highway lanes simultaneously.",
      "A staggered formation, with the lead rider in the left third and the second in the right third.",
      "Side-by-side pairs to lock out the lane and prevent passenger cars from passing."
    ],
    correctAnswerIndex: 2,
    explanation: "A staggered formation allows a group to remain compact while preserving a two-second following distance from the rider directly ahead in the same track, maintaining adequate space to swerve or brake."
  },
  {
    id: 17,
    question: "Your motorcycle group is traveling in a staggered formation on a rural road. As you approach a series of sharp, blind curves with narrow shoulders, how should the formation change?",
    options: [
      "Transition immediately to a single-file line to give each rider maximum lane space.",
      "Compress the staggered formation tighter to prevent separation during cornering.",
      "Switch to a side-by-side formation to clearly define your lane position to oncoming traffic.",
      "Spread out into adjacent oncoming traffic lanes to widen the cornering radius."
    ],
    correctAnswerIndex: 0,
    explanation: "Group riders should transition to single-file when approaching curves, narrow sections, or poor surfaces. This provides each individual rider with the entire lane width to select optimal cornering lines and manage surface hazards."
  },
  {
    id: 18,
    question: "A rider who recently completed their basic training course joins your weekend group ride. To maximize safety and minimize stress on this novice individual, where should they be positioned?",
    options: [
      "At the absolute front of the group as the designated lead rider.",
      "Directly behind the leader, in the second position within the formation.",
      "At the absolute rear of the group, behind the designated sweep rider.",
      "In the middle of a side-by-side pairing to offer physical protection."
    ],
    correctAnswerIndex: 1,
    explanation: "Placing a novice rider in the second position allows the group leader to monitor their riding through the rearview mirrors, sets a predictable pace, and prevents the 'rubber-band' effect that occurs at the back of a group."
  },
  {
    id: 19,
    question: "You are operating a motorcycle in Minnesota during a heavy traffic delay. Under the state's lane filtering regulations, under what conditions are you permitted to filter between vehicles?",
    options: [
      "When traffic is completely stopped, and your speed does not exceed 25 mph or 15 mph over surrounding traffic.",
      "Any time highway traffic drops below the posted speed limit, up to a maximum speed of 45 mph.",
      "Only when utilizing your hazardous emergency flashers on multi-lane interstate highways.",
      "When attempting to catch up with a group of riders who have broken away ahead."
    ],
    correctAnswerIndex: 0,
    explanation: "Minnesota's lane filtering statute permits low-speed filtering through stopped or slow-moving traffic. The operator's speed must not exceed 25 mph, and must not exceed the speed of surrounding traffic by more than 15 mph."
  },
  {
    id: 20,
    question: "You and a friend are riding your motorcycles to an event in Minnesota. What is the maximum number of motorcycles legally permitted to operate side-by-side within a single traffic lane?",
    options: [
      "Only one; side-by-side lane sharing is an illegal obstruction under all state codes.",
      "Up to three, provided they maintain a strict, overlapping staggered pattern.",
      "There is no legal limitation on lane capacity, provided no collisions occur.",
      "No more than two motorcycles may operate abreast in a single lane."
    ],
    correctAnswerIndex: 3,
    explanation: "Minnesota law permits a maximum of two motorcycles to travel abreast in a single traffic lane, provided both operators consent. Riding more than two abreast eliminates vital lateral escape space."
  },
  {
    id: 21,
    question: "You are riding on a multi-lane highway on a misty morning. Which specific zone of the traffic lane typically presents the highest risk of traction loss from chemical and oil accumulation?",
    options: [
      "The left wheel track portion, where heavy commercial vehicle tires run.",
      "The right wheel track portion, where cars track loose shoulder debris.",
      "The center portion of the lane, where vehicles drop lubricants and fluids.",
      "The outer edges of the painted white lines defining the highway boundary."
    ],
    correctAnswerIndex: 2,
    explanation: "Automobile engine and drivetrain leaks aggregate down the center strip of a lane. This strip becomes slick when moist, so riding in the left or right wheel tracks is generally safer for tire traction."
  },
  {
    id: 22,
    question: "You have just come to a complete stop at a high-traffic urban intersection behind a large box truck. What operational state should your motorcycle be in while you wait?",
    options: [
      "Shifted into neutral with both hands removed from the handlebars to prevent fatigue.",
      "Shifted into second gear with the clutch pulled to enable rapid, smooth high-speed escape.",
      "Shifted into first gear with the clutch lever pulled in and your mirrors actively monitored.",
      "Shut down via the engine cut-off switch to avoid exhaust carbon monoxide buildup."
    ],
    correctAnswerIndex: 2,
    explanation: "Remaining in first gear with the clutch pulled keeps you ready to accelerate out of the way if a distracted driver approaches from behind without slowing, potentially avoiding a rear-end collision."
  },
  {
    id: 23,
    question: "You are planning a daytime trip across Minnesota during clear, bright summer conditions. What are the statutory requirements regarding your motorcycle's headlight operation?",
    options: [
      "The headlight must be illuminated at all times when operating on public streets or highways.",
      "The headlight is only legally required from 30 minutes after sunset to 30 minutes before sunrise.",
      "The headlight is only required if visibility drops below 500 feet due to rain, fog, or smoke.",
      "The headlight must be turned off during the day to prevent alternator overheating and bulb failure."
    ],
    correctAnswerIndex: 0,
    explanation: "Minnesota law requires a motorcycle's headlight or daytime running lamps to be on during all operating hours. Continuous illumination increases the profile of the motorcycle, helping oncoming drivers notice your presence."
  },
  {
    id: 24,
    question: "While riding on a clear afternoon, you consider toggling your headlight to high beam. What is the best practice regarding high beam usage during daylight hours?",
    options: [
      "It is illegal under state vehicle codes because it can cause daytime glare for oncoming cars.",
      "It is recommended because it increases your visual conspicuity to oncoming traffic.",
      "It should only be used when actively executing a pass on a two-lane undivided highway.",
      "It should be avoided because it rapidly drains battery voltage and causes regulatory electrical failure."
    ],
    correctAnswerIndex: 1,
    explanation: "Using your high beam during daylight hours increases your visibility to oncoming drivers without blinding them. This practice helps counter the visual complexity of daytime traffic environments."
  },
  {
    id: 25,
    question: "You need to perform a U-turn on a two-lane highway near a rolling hill crest in Minnesota. What is the minimum visibility required to legally execute this maneuver?",
    options: [
      "You must have a clear view of the roadway for at least 200 feet in both directions.",
      "You must have a clear view of the roadway for at least 500 feet in both directions.",
      "You must have a clear view of the roadway for at least 1,000 feet in both directions.",
      "U-turns are completely illegal on all rural highways regardless of clearing distance."
    ],
    correctAnswerIndex: 2,
    explanation: "Minnesota statutes prohibit U-turns on curves or hill crests where your vehicle cannot be seen by drivers approaching from either direction within 1,000 feet. This rule helps prevent high-speed rear-end or head-on crashes."
  },
  {
    id: 26,
    question: "While traveling at 60 mph, your motorcycle's handlebars suddenly begin to vibrate and oscillate violently from side to side (a high-speed wobble). What is the correct response?",
    options: [
      "Accelerate aggressively to pull the front wheel off the ground and stabilize the chassis.",
      "Slam on the front brake lever immediately to force the front tire into alignment.",
      "Grip the handlebars firmly, ease off the throttle smoothly, and avoid immediate braking inputs.",
      "Lean as far back as possible on the seat and pull the bars sharply to the left side."
    ],
    correctAnswerIndex: 2,
    explanation: "Fighting a wobble or braking abruptly can worsen chassis instability. Gripping firmly without over-bracing, rolling off the throttle smoothly, and slowing down gradually helps the motorcycle's geometry stabilize."
  },
  {
    id: 27,
    question: "While riding in the left lane of an expressway, your rear tire experiences an immediate blowout. How should you manage your controls to maintain stability?",
    options: [
      "Apply the rear brake firmly to lock up the wheel and stabilize the deflated tire carcass.",
      "Grip the handlebars firmly, ease off the throttle, and apply light front brake pressure if needed.",
      "Lean the motorcycle deeply toward the shoulder to use side-wall tread traction.",
      "Shift your body weight completely to the side of the flat tire to balance forces."
    ],
    correctAnswerIndex: 1,
    explanation: "Applying the brake on a flat tire can detach it from the rim, causing a total loss of control. Easing off the throttle, maintaining a straight path, and using gentle front brake pressure allows you to slow down safely."
  },
  {
    id: 28,
    question: "You are being overtaken by a large commercial semi-truck on an open highway. To counter the aerodynamic draft and pressure wave as the truck passes, you should:",
    options: [
      "Move to the left portion of your lane to stay closer to the truck's cab.",
      "Move to the right portion of your lane to escape the crosswind gust entirely.",
      "Maintain the center portion of your lane to preserve an optimal safety buffer.",
      "Ride out onto the paved shoulder until the commercial vehicle completes the pass."
    ],
    correctAnswerIndex: 2,
    explanation: "Large trucks create a bow wave of air that can push a motorcycle sideways. Staying in the center portion of the lane maximizes your space buffer on both sides, helping you absorb the wind turbulence safely."
  },
  {
    id: 29,
    question: "You are checking your motorcycle's rearview mirrors before initiating a lane change. Why is a physical over-the-shoulder head check still mandatory?",
    options: [
      "Because mirrors do not show vehicles traveling directly next to or slightly behind your motorcycle.",
      "Because head checks are required by law to maintain optimal alertness metrics.",
      "To signal your intent to change lanes to drivers before activating your blinker.",
      "Mirrors are completely unreliable due to normal single-track chassis vibration profile."
    ],
    correctAnswerIndex: 0,
    explanation: "Motorcycle mirrors have blind spots that can easily hide a passenger car. A quick head check is the only reliable way to ensure the lane next to you is clear before moving."
  },
  {
    id: 30,
    question: "You must cross a set of active industrial railroad tracks that run nearly parallel to your current lane of travel. How should you steer across them?",
    options: [
      "Angle away from the tracks first, then turn and cross them at an angle of at least 45 degrees.",
      "Cross them at a very shallow 10-degree angle to minimize your total transit time across the iron.",
      "Ride directly along the top of the metal rail until a wide gap opens up in traffic.",
      "Slow down to a complete stop on the first rail, then accelerate over the second rail."
    ],
    correctAnswerIndex: 0,
    explanation: "Tracks that run parallel to your path can catch your tires and cause a crash if approached at a shallow angle. Angling outward and crossing at 45 to 90 degrees allows the tires to cross the rails safely."
  },
  {
    id: 31,
    question: "During an aggressive stop on clean, dry pavement, you apply too much pressure to the rear pedal, locking the rear wheel. The motorcycle begins to slide sideways in a straight line. You should:",
    options: [
      "Release the rear brake pedal immediately to allow the tire to regain traction.",
      "Keep the rear wheel locked and steer straight until you come to a complete stop.",
      "Slam on the front brake lever aggressively to induce a front-wheel skid for balance.",
      "Lean the chassis heavily in the opposite direction of the rear-wheel slide."
    ],
    correctAnswerIndex: 1,
    explanation: "If the rear wheel locks and skates out of alignment, releasing the brake can cause the tire to grab traction violently when sideways, potentially throwing the rider in a high-side crash. Keep it locked until stopped."
  },
  {
    id: 32,
    question: "You are conducting a pre-ride inspection of your motorcycle's tires. Under Minnesota state statutes, what is the absolute minimum legal tread depth required for safe operation?",
    options: [
      "1/32 of an inch across all manageable center grooves.",
      "2/32 (or 1/16) of an inch measured at any point on the tread.",
      "3/32 of an inch across the primary contact patch area.",
      "4/32 of an inch to comply with wet-weather traction mandates."
    ],
    correctAnswerIndex: 1,
    explanation: "Minnesota law prohibits operating a motorcycle with tire tread worn below 2/32 (1/16) inch. Sub-standard tread cannot channel water away, increasing the risk of hydroplaning and wet-surface slides."
  },
  {
    id: 33,
    question: "You are approaching a long steel-mesh drawbridge that is damp from morning fog. To cross this surface safely, you should:",
    options: [
      "Weave slightly from side to side to keep the tire edge treads engaged with the metal grids.",
      "Downshift two gears and apply aggressive throttle inputs to cross as quickly as possible.",
      "Ride straight, maintain a steady speed, and avoid sudden acceleration or hard braking.",
      "Pull the clutch lever in and drag both feet on the grating for lateral balance."
    ],
    correctAnswerIndex: 2,
    explanation: "Steel-mesh bridge gratings can cause a motorcycle to wander or feel loose. Maintaining a relaxed grip, steady throttle, and a straight line allows the bike to track across the bridge smoothly without breaking traction."
  },
  {
    id: 34,
    question: "You are navigating a busy downtown intersection during a heavy downpour. Which of the following road hazards becomes as slick as ice when wet?",
    options: [
      "The aggregate asphalt sections located between painted crosswalk blocks.",
      "The painted road markings, plastic arrows, and steel utility manhole covers.",
      "The fresh concrete surfaces found within newly constructed roundabout zones.",
      "The longitudinal grooved pavement sections engineered for highway water drainage."
    ],
    correctAnswerIndex: 1,
    explanation: "Painted markings, thermal plastics, and metal covers are non-porous and become slick when wet. Avoid braking hard or leaning heavily when crossing these surfaces in wet weather."
  },
  {
    id: 35,
    question: "You are purchasing a new helmet face shield to replace a damaged one. To maximize safety, a compliant shield must be:",
    options: [
      "Constructed of impact-resistant material and kept free of light-scattering scratches.",
      "Tinted dark enough to function effectively during both day and night riding conditions.",
      "Kept open slightly at all times to allow engine fumes to escape your eyes.",
      "Substituted entirely by wearing standard prescription glasses or sunglasses."
    ],
    correctAnswerIndex: 0,
    explanation: "Face shields protect eyes from flying insects, pebbles, and windblast. They must be impact-resistant and free of scratches, as surface defects can scatter light and compromise vision at night."
  },
  {
    id: 36,
    question: "You are modifying your street motorcycle to carry your teenager as a passenger in Minnesota. What equipment does state law mandate you install?",
    options: [
      "A rigid fiberglass sidecar assembly attached securely to the primary frame rails.",
      "An upgraded propulsion engine possessing at least 500cc of displacement volume.",
      "A dedicated passenger seat and permanent, separate footrests for the passenger.",
      "An integrated tall windshield assembly paired with a rear high-visibility crash bar."
    ],
    correctAnswerIndex: 2,
    explanation: "Minnesota statute requires that any motorcycle carrying a passenger must be equipped with a dedicated passenger seat and separate passenger footrests. This gear helps the passenger stay stable and secure."
  },
  {
    id: 37,
    question: "You are parking your motorcycle on a downhill street next to a concrete curb. What is the safest layout to secure the bike?",
    options: [
      "Position the bike at a 90-degree angle with the front tire resting flush against the curb.",
      "Position the bike at an angle with the rear wheel touching the curb, shifted into first gear.",
      "Position the bike parallel to the roadway with both tires pressed flat against the curb.",
      "Position the bike directly on the flat concrete sidewalk next to the closest building entrance."
    ],
    correctAnswerIndex: 1,
    explanation: "Parking at an angle with the rear wheel against the curb ensures the bike won't slide or roll off its stand. Leaving the transmission in first gear acts as a parking brake to secure the vehicle."
  },
  {
    id: 38,
    question: "You are approaching an unfamiliar, winding country road. When should you complete your speed adjustments for upcoming curves?",
    options: [
      "Before you enter the curve, while the motorcycle is still fully upright.",
      "Directly at the apex of the curve, while maintaining your maximum lean angle.",
      "As you exit the corner and begin rolling open the throttle for straightaway travel.",
      "Only if you feel the front tire beginning to slip or push outward across the line."
    ],
    correctAnswerIndex: 0,
    explanation: "Slowing down before entering a curve helps preserve your tire traction for cornering forces. Braking while leaned over reduces your traction margin and can upset chassis balance."
  },
  {
    id: 39,
    question: "A piece of furniture falls off a truck directly in front of you. You must execute an immediate emergency swerve to avoid a collision. What is the primary rule regarding braking during this maneuver?",
    options: [
      "Apply maximum front and rear brake pressure while leaning into the swerve path.",
      "Do not apply the brakes while swerving; separate the braking and swerving inputs.",
      "Apply heavy rear brake pressure only to slide the back of the bike around the obstacle.",
      "Squeeze the front brake lever aggressively to compress the forks during the steering turn."
    ],
    correctAnswerIndex: 1,
    explanation: "A motorcycle requires traction to swerve. Applying the brakes while executing a hard swerve can exceed tire traction limits, causing a slide. Brake before or after the swerve, but not during."
  },
  {
    id: 40,
    question: "You are embarking on an all-day ride across southern Minnesota during a 95°F summer heatwave. To counter dehydration and physical exhaustion, you should:",
    options: [
      "Drink water before and during the ride, and take frequent rest stops in shaded zones.",
      "Consume caffeinated sodas and high-sugar energy drinks to keep your alertness high.",
      "Increase your highway speed to generate a higher wind-chill cooling effect on your skin.",
      "Remove your riding jacket, gloves, and protective gear to maximize bare skin exposure."
    ],
    correctAnswerIndex: 0,
    explanation: "Riding in hot weather accelerates dehydration due to wind blast. Drinking water and taking regular breaks helps maintain your alertness. Wearing protective gear actually insulates your skin from drying winds."
  },
  {
    id: 41,
    question: "You are applying the S.I.P.D.E. defensive riding process while navigating a high-density commercial corridor. What does the first letter 'S' represent?",
    options: [
      "Shift: Ensuring your transmission is in the correct gear before entering intersections.",
      "Scan: Systematically searching the road environment ahead for potential hazards.",
      "Swerve: Pre-emptively practicing rapid avoidance swerves within your own lane space.",
      "Speed: Accelerating to match the pace of fastest moving traffic elements."
    ],
    correctAnswerIndex: 1,
    explanation: "The 'S' in S.I.P.D.E. stands for Scan. Continuous scanning of your 2, 4, and 12-second paths helps you identify hazards early, giving you more time to react and adjust."
  },
  {
    id: 42,
    question: "You are selecting personal protective gear for your daily commute. Which of the following provides the best protection for your lower extremities?",
    options: [
      "Lightweight canvas high-top sneakers with reinforced athletic ankle wraps.",
      "Sturdy, over-the-ankle leather boots with oil-resistant, non-slip soles.",
      "Heavy-duty industrial steel-toed sandals paired with thick wool athletic socks.",
      "Standard running shoes with double-knotted laces and thin synthetic uppers."
    ],
    correctAnswerIndex: 1,
    explanation: "Over-the-ankle leather riding boots protect ankles from exhaust burns and road impacts. Non-slip soles provide secure footing when stopped on slick or uneven pavement."
  },
  {
    id: 43,
    question: "You are practicing slow-speed tight maneuvers in a parking lot. How do you utilize the clutch 'friction zone' effectively?",
    options: [
      "Locate the hot center section of the rear tire where maximum friction occurs during acceleration.",
      "Find the range of clutch lever travel where engine power starts to transfer to the rear wheel.",
      "Measure the thermal heat buildup inside your front brake calipers during heavy stops.",
      "Identify the mechanical contact area where your fingers grip the front brake lever assembly."
    ],
    correctAnswerIndex: 1,
    explanation: "The friction zone is the area of clutch lever travel where power transfers to the rear wheel. Slipping the clutch within this zone allows for precise speed control during low-speed maneuvers."
  },
  {
    id: 44,
    question: "While riding past a rural homestead, an unleashed dog suddenly sprints onto the roadway to chase and intercept your motorcycle. What is the best tactical response?",
    options: [
      "Extend your foot and attempt to kick at the animal to protect your front tire path.",
      "Apply both brakes hard to stop the motorcycle immediately and confront the animal.",
      "Slow down as you approach, then accelerate smoothly to break the dog's interception line.",
      "Swerve aggressively into the oncoming lane of traffic to outmaneuver the animal's path."
    ],
    correctAnswerIndex: 2,
    explanation: "Dogs rely on matching your speed to intercept you. By slowing down as you approach, you change their target angle. Accelerating past then breaks their interception line, keeping you out of reach."
  },
  {
    id: 45,
    question: "You are loading heavy camping gear into your motorcycle's luggage system for a long weekend trip. How should this extra weight be distributed?",
    options: [
      "Pack all heavy items as high and as far rearward as possible on the passenger seat.",
      "Keep the load low and distribute the weight evenly between both side saddlebags.",
      "Overinflate the front tire significantly to offset the rear bias of the gear load.",
      "Place the heaviest gear inside a backpack to be worn high on your shoulders."
    ],
    correctAnswerIndex: 1,
    explanation: "Keeping weight low and centered helps preserve the motorcycle's handling balance. Misplaced, heavy, or unevenly distributed cargo can destabilize the chassis and cause severe handling issues."
  },
  {
    id: 46,
    question: "You are preparing to exit a highway and notice your turn signal has been blinking for several miles after a lane change. Why is failing to cancel a turn signal a significant safety hazard?",
    options: [
      "It can cause the alternating current generator to overload and blow the main fuse.",
      "It can mislead other drivers into thinking you plan to turn, causing them to pull out in path.",
      "Minnesota statutes mandate that motorcycle turn signals must automatically deactivate within 5 blinks.",
      "It drains high-voltage battery reserve power and dims your primary safety headlight."
    ],
    correctAnswerIndex: 1,
    explanation: "Many motorcycles do not have self-canceling turn signals. Leaving a signal blinking can deceive other motorists, leading them to turn or pull into your path, causing a crash."
  },
  {
    id: 47,
    question: "You are riding in a congested suburban area when a car door suddenly opens in your path. To shut down your engine instantly without releasing your grip on the handlebars, which control should you operate?",
    options: [
      "The manual fuel petcock valve located under the left side of the storage tank.",
      "The engine cut-off switch located on the right handlebar grip assembly.",
      "The mechanical key ignition cylinder located near the steering head casting.",
      "The clutch lever adjusted to engage the anti-theft flywheel interlock system."
    ],
    correctAnswerIndex: 1,
    explanation: "The engine cut-off switch is located next to the right handle grip. This placement allows the rider to shut down the engine instantly in an emergency while maintaining full hand grip on the steering controls."
  },
  {
    id: 48,
    question: "You are riding in a group of motorcycles on a scenic road. A car driver behind you starts executing aggressive passing maneuvers. Why does riding in a staggered formation offer a greater safety margin than riding side-by-side?",
    options: [
      "Side-by-side riding does not provide a physical lateral safety cushion to swerve or brake.",
      "Staggered formations present an intimidating profile that prevents cars from passing.",
      "Side-by-side riding is strictly illegal on highways with speed limits under 30 mph.",
      "Staggered formations allow adjacent passenger vehicles to safely merge into your lane."
    ],
    correctAnswerIndex: 0,
    explanation: "Riding side-by-side leaves no lateral space to react to hazards. A staggered formation provides a safe buffer zone around each motorcycle, allowing individual riders to swerve or stabilize without colliding with other group members."
  },
  {
    id: 49,
    question: "You are crossing a high, open bridge span in Minnesota when you are struck by a sudden, intense side-wind gust of 40 mph. What is the safest way to maintain your lane position?",
    options: [
      "Come to an immediate, hard stop and place your motorcycle perpendicular to the lane lines.",
      "Stand fully upright on your footpegs to raise your body's wind resistance profile.",
      "Lean the bike into the wind, maintain a firm but relaxed grip on the bars, and hold steady speed.",
      "Shift into your highest overdrive gear and weave from side to side to deflect air forces."
    ],
    correctAnswerIndex: 2,
    explanation: "In high wind conditions, leaning the bike gently into the wind counters the lateral force. Maintain a firm but relaxed grip on the handlebars and hold a steady speed, remaining alert for sudden wind drops behind obstructions."
  },
  {
    id: 50,
    question: "You are planning a trip to Duluth, Minnesota, which will require several hours of highway riding. To manage physical fatigue and keep your mental reflexes sharp, what is the best rest strategy?",
    options: [
      "Ride continuously for at least six hours to complete the trip as quickly as possible.",
      "Schedule regular rest stops at least once every two hours or every 100 miles.",
      "Consume continuous high-caffeine energy drinks while riding to mask muscular exhaustion.",
      "Restrict your travel strictly to late-night hours when ambient traffic density is low."
    ],
    correctAnswerIndex: 1,
    explanation: "Motorcycle riding requires constant physical effort and mental focus. Stopping at least every two hours or 100 miles prevents the onset of fatigue, keeping your reaction times sharp."
  },
  {
    id: 51,
    question: "You are riding on a paved rural highway when you round a curve and see a patch of loose gravel spilled across the roadway. What is the safest way to ride through it?",
    options: [
      "Lean your motorcycle deeply into the curve and accelerate to spin the tire through.",
      "Apply your front brake hard straight on to skid your way through the patch.",
      "Execute an aggressive, high-speed swerve at the last millisecond to clear the gravel.",
      "Decelerate before the patch, keep the bike upright, and avoid sudden throttle or brake changes."
    ],
    correctAnswerIndex: 3,
    explanation: "Gravel and sand can cause your tires to lose traction. Slow down before entering the loose debris, keep the motorcycle upright, and hold steady throttle and steering inputs to cross the hazard safely."
  },
  {
    id: 52,
    question: "You are stopped at a red light on a steep incline in Duluth. When the light turns green, what is the best technique to launch smoothly without rolling backward?",
    options: [
      "Shift into neutral, place both feet on the pavement, and rev the engine aggressively.",
      "Keep the motorcycle in first gear and hold your position using the rear brake.",
      "Rely entirely on your front brake lever while keeping the transmission in neutral.",
      "Keep slipping the clutch at high engine RPM while dragging both boots on the pavement."
    ],
    correctAnswerIndex: 1,
    explanation: "Using the rear brake to hold the bike on hills keeps your right hand free to operate the throttle, and your left hand free to operate the clutch friction zone. This technique lets you pull away smoothly without rolling backward."
  },
  {
    id: 53,
    question: "You are riding down a downtown street lined with parallel-parked cars. To minimize your risk of hitting a door or a car pulling out, what safety hazard should you watch for?",
    options: [
      "An occupant opening a door into your path, or a parked vehicle pulling out without warning.",
      "The parked vehicles acting as a windblock to disrupt your lateral balance.",
      "Your headlight reflecting off side mirrors and causing glare in your eyes.",
      "High-speed wind tunnels generated by air flowing between the parked vehicles."
    ],
    correctAnswerIndex: 0,
    explanation: "Parked cars are source of hazards: occupants frequently open doors or pull away from the curb without checking for motorcycles. Maintain a safe lane position and watch for signs of movement inside parked vehicles."
  },
  {
    id: 54,
    question: "You park your motorcycle on a hot asphalt surface next to a diner. What precaution should you take to prevent the kickstand from sinking and causing the bike to top over?",
    options: [
      "Leave the motorcycle's engine idling so the chassis vibration stabilizes it.",
      "Place a solid support plate (like wood, metal, or dynamic plastic) under the kickstand tip.",
      "Rend a specialized street anchor harness whenever parking overnight.",
      "Deflate both tires by 50% to increase the contact patch of the bike."
    ],
    correctAnswerIndex: 1,
    explanation: "Hot pavement can soften, allowing a kickstand to sink under the weight of the bike. Placing a small plate under the kickstand distributes the weight, keeping the motorcycle upright."
  },
  {
    id: 55,
    question: "You are preparing for your morning commute and plan to complete a pre-ride safety inspection. According to standard training manuals, what does the 'T-CLOCS' acronym represent?",
    options: [
      "Tires, Controls, Lights, Oils, Chassis, and Stands.",
      "Tax, Title, Credentials, License, Registration, and Insurance.",
      "Throttle, Clutch, Lubrication, Overdrive, Cable, and Sparkplugs.",
      "Traction, Cornering, Leaning, Oversteering, Clearance, and Stopping."
    ],
    correctAnswerIndex: 0,
    explanation: "T-CLOCS is the Motorcycle Safety Foundation's standard inspection routine: Tires/Wheels, Controls, Lights/Electrics, Oils/Fluids, Chassis, and Stands/Suspension. Regular checks help prevent mechanical failures."
  },
  {
    id: 56,
    question: "You are traveling behind a large commercial semi-truck on a two-lane highway. To ensure you are visible to the driver and have a clear view of hazards, you should:",
    options: [
      "Ride close to the rear bumper of the trailer to maximize fuel-saving aerodynamic drafting.",
      "Stay far enough back to see the truck's side mirrors, making sure the truck driver can see you.",
      "Position yourself directly behind the twin tires so other cars cannot cut into your lane.",
      "Ride parallel to the driver's side door to stay visible to the driver at all times."
    ],
    correctAnswerIndex: 1,
    explanation: "Because semi-trucks do not have a center rearview mirror, drivers rely on side mirrors. If you cannot see their mirrors, you are in their blind spot. Keeping a safe following distance also improves your view of the road ahead."
  },
  {
    id: 57,
    question: "You are adjusting your motorcycle's rearview mirrors before starting your trip. To ensure correct visibility, how should they be positioned?",
    options: [
      "Adjust them so you can see the top of your helmet to verify its fit.",
      "Adjust them so you see half of your lane and a portion of the opposite lane.",
      "Adjust them so you can see the road directly behind you and a sliver of your shoulders.",
      "Adjust them inward to align with the frame, minimizing aerodynamic wind drag."
    ],
    correctAnswerIndex: 2,
    explanation: "Mirrors should be adjusted when you are in your normal riding position. Seeing a small part of your arm/shoulder provides a reference point for tracking vehicles behind and next to you."
  },
  {
    id: 58,
    question: "You are practicing low-speed, tight U-turns in an empty parking lot. To turn as tightly as possible without tipping over, you should:",
    options: [
      "Lean your body with the motorcycle as far as possible into the turn.",
      "Counterweight by leaning your upper body opposite the direction of the turn.",
      "Stand fully upright on your footpegs and release both hands from the bars.",
      "Keep your body rigid while looking down at the front wheel's paint path."
    ],
    correctAnswerIndex: 1,
    explanation: "During slow-speed turns (under 5 mph), leaning with the bike can cause it to tip inward. Keeping your body upright or leaning it opposite the turn (counterweighting) balances the bike, allowing for tighter turns."
  },
  {
    id: 59,
    question: "You are riding on a cool spring morning in Minnesota. How does the low temperature affect your tires and traction?",
    options: [
      "Traction is increased because cold pavement hardens the tire's synthetic rubber compounds.",
      "Low temperatures decrease tire pressure and prevent tires from warming up, reducing traction.",
      "Traction is completely unaffected by temperature unless ice is present on the lane surface.",
      "Cold air alters your brake fluid properties, making the calipers twice as responsive."
    ],
    correctAnswerIndex: 1,
    explanation: "Tires require warmth to become flexible and generate traction. On cold days, rubber remains stiff and does not grip the road as well. Combined with lower tire pressures from cold air, riders must use extra care."
  },
  {
    id: 60,
    question: "You are riding in the right lane of a multi-lane highway when a passenger vehicle begins tailgating you. What is the safest way to manage this risk?",
    options: [
      "Slam on your brakes to signal to the tailgater to back off immediately.",
      "Increase your following distance from the vehicle ahead of you to allow safer stopping space.",
      "Turn your head and gesture angrily at the tailgating driver.",
      "Accelerate aggressively to exceed the speed limit and escape the vehicle."
    ],
    correctAnswerIndex: 1,
    explanation: "If you are being tailgated, increasing your following distance from the vehicle in front provides extra space for progressive, smooth stops. This prevents you from having to brake hard, which could cause the tailgater to hit you."
  },
  {
    id: 61,
    question: "While commuting in a heavy rain shower, you feel your front tire starting to float on standing water (hydroplaning). How can you recover traction?",
    options: [
      "Ride in the tire tracks left by the vehicle ahead of you where water has been displaced.",
      "Open your throttle wide to skim across the surface of the puddle.",
      "Apply steady rear brake pressure to flatten the rear tire's footprint.",
      "Move close to the road shoulder where standing water is deepest."
    ],
    correctAnswerIndex: 0,
    explanation: "The tires of vehicles ahead displace standing water. Riding in these fresh tracks reduces the depth of water your tires must channel, lowering the risk of hydroplaning and improving your traction."
  },
  {
    id: 62,
    question: "You are riding on a winding road in October. Why should you be cautious when approaching patches of fallen autumn leaves?",
    options: [
      "Accumulated leaves can generate static electricity that can disrupt your ignition.",
      "Dry leaves reflect sunlight, causing glare that can blind you.",
      "Dry and wet leaves drastically reduce tire traction, behaving similarly to ice.",
      "Leaves can stick to your helmet face shield and block your view."
    ],
    correctAnswerIndex: 2,
    explanation: "Fallen leaves are slippery. Wet leaves can act like ice under a motorcycle tire, causing sudden and unexpected traction loss. Reduce your lean angle and avoid hard braking when crossing them."
  },
  {
    id: 63,
    question: "You are preparing your safety gear for a weekend ride. To ensure your safety helmet works correctly in a crash, how must the chin strap be secured?",
    options: [
      "The strap should be left unbuckled to make it easy to remove in an emergency.",
      "The strap must be fastened securely at all times during operation.",
      "The strap should be loose enough to fit several fingers under your chin.",
      "The strap must be replaced with an elastic strap to absorb impacts."
    ],
    correctAnswerIndex: 1,
    explanation: "In a crash, a helmet can only protect your head if it stays secure. Leaving the chin strap unbuckled or overly loose can allow the helmet to fly off your head during an initial impact, leaving you unprotected."
  },
  {
    id: 64,
    question: "You are riding on a dark, unlit rural highway. What does the term 'overriding your headlight' mean?",
    options: [
      "Your speed is so fast that your stopping distance exceeds the distance of road illuminated by your headlight.",
      "You are riding with your high beams on in a well-lit downtown area.",
      "Your auxiliary LED lighting draws too much current, causing alternator failure.",
      "You are operating with your headlight off to conserve fuel."
    ],
    correctAnswerIndex: 0,
    explanation: "Overriding your headlight is a dangerous night condition where your traveling speed does not allow you to stop within the distance illuminated by your headlight. If an obstacle appears, you cannot stop in time."
  },
  {
    id: 65,
    question: "You plan to change lanes on a busy highway. How can you warn drivers behind you that you are preparing to slow down and turn?",
    options: [
      "Extend your left arm out and wave it in circles.",
      "Briefly tap your brake lever or pedal multiple times to flash your brake light.",
      "Pull your clutch lever in and rev your engine.",
      "Turn on your hazard lights and ride on the shoulder."
    ],
    correctAnswerIndex: 1,
    explanation: "Briefly tapping your brake lever or pedal causes your brake lights to flash. This visual cue helps catch the attention of drivers behind you, especially if they are distracted."
  },
  {
    id: 66,
    question: "You are riding in dense city traffic on a multi-lane street. Where is your motorcycle most likely to enter a passenger car's blind spots?",
    options: [
      "Directly behind the car's bumper.",
      "Directly in front of the car's grille.",
      "Slightly behind and to the left or right of the car's rear fenders.",
      "Riding abreast in the same lane next to the car."
    ],
    correctAnswerIndex: 2,
    explanation: "The blind spots of most vehicles are located diagonally behind their rear doors. Avoid riding in these blind spots; either accelerate safely past or fall back so the driver can see you."
  },
  {
    id: 67,
    question: "You are riding in a group of motorcycles and need to signal to the riders behind you to slow down. What is the correct hand signal?",
    options: [
      "Extend your left arm straight out, pointing towards the shoulder.",
      "Extend your left arm downward with the palm facing backward and wave down slightly.",
      "Bend your left arm upward at a 90-degree angle with a closed fist.",
      "Point a finger downwards towards your left footpeg."
    ],
    correctAnswerIndex: 1,
    explanation: "The hand signal to slow down or stop is your left arm extended down with your palm facing backward, moving your arm in a waving motion to warn following riders of deceleration."
  },
  {
    id: 68,
    question: "While Minnesota law has a statutory Blood Alcohol Concentration (BAC) limit of 0.08% for adults, what is the legal limit for riders under age 21?",
    options: [
      "0.00% (Absolute Zero tolerance under state law).",
      "0.02% to account for natural food fermentation.",
      "0.05% if the rider is accompanied by a parent.",
      "0.08%, which is identical to the adult legal limit."
    ],
    correctAnswerIndex: 0,
    explanation: "Minnesota has a strict zero-tolerance law ('Not a Drop' law) for underage operators. Any measurable amount of alcohol in an underage driver's system leads to the immediate loss of their license."
  },
  {
    id: 69,
    question: "You are strapping external gear onto your motorcycle's rear package rack. What is the best way to secure this gear?",
    options: [
      "Use sturdy elastic bungee cords or webbed tie-down straps, checking them during stops.",
      "Wrap standard duct tape around the gear and the rear fender.",
      "Use standard household twine or string.",
      "Rest the gear loosely on the rack and hold it in place with your body physical posture."
    ],
    correctAnswerIndex: 0,
    explanation: "Riders must secure cargo. Loose items or slack straps can untangle and get caught in the rear wheel, chain, or belt drive, which can cause an immediate lockup and crash."
  },
  {
    id: 70,
    question: "You are completing your regular maintenance checks. How often should you check and adjust your motorcycle's drive chain slack?",
    options: [
      "Only when the chain starts making a clanging noise.",
      "Once every three or four years during oil changes.",
      "According to your owner's manual, typically during pre-ride check intervals.",
      "Only after riding through deep mud or standing water."
    ],
    correctAnswerIndex: 2,
    explanation: "Drive chain tension and lubrication should be inspected as part of regular pre-ride checks and adjusted as recommended by the manual. A chain that is too loose can slip, locking the rear wheel."
  },
  {
    id: 71,
    question: "While riding on a highway, your motorcycle's throttle suddenly gets stuck open. What is the safest way to regain control?",
    options: [
      "Squeeze the clutch lever and activate the engine cut-off switch simultaneously.",
      "Stomp on the gear shift lever to force the transmission into neutral.",
      "Turn off the key ignition to lock the steering column.",
      "Lean forward and attempt to manually pull the throttle cable near the engine."
    ],
    correctAnswerIndex: 0,
    explanation: "Squeezing the clutch immediately cuts power to the rear wheel, preventing the bike from accelerating. Activating the engine cut-off switch shuts down the engine safely, allowing you to stop."
  },
  {
    id: 72,
    question: "You are purchasing a new winter riding jacket. What colors and features are most effective for keeping you visible to other drivers?",
    options: [
      "All-black leather with matte finishes.",
      "Fluorescent orange, yellow, or green with retroreflective panels.",
      "Soft pastels and light grays that blend with the horizon.",
      "Dark ruby red and deep brown forest tones."
    ],
    correctAnswerIndex: 1,
    explanation: "Bright fluorescent colors help you stand out during the day, while retroreflective panels reflect vehicle headlights at night. Wearing visible gear helps prevent crashes."
  },
  {
    id: 73,
    question: "You are testing your stopping distances at different speeds. How does your total stopping distance at 50 mph compare to your stopping distance at 25 mph?",
    options: [
      "It is exactly twice as far.",
      "It is about four times as far.",
      "It is exactly the same because motorcycle brakes are highly efficient.",
      "It is significantly shorter because tires generate more grip at speed."
    ],
    correctAnswerIndex: 1,
    explanation: "Stopping distance increases with the square of your speed. Doubling your speed multiplies the physical kinetic energy by four times, requiring four times the distance to stop."
  },
  {
    id: 74,
    question: "You are approaching an intersection when you see a driver in a side street preparing to pull out. How should you use your horn?",
    options: [
      "Honk aggressively and constantly to force the driver to yield.",
      "Tap the horn quickly to alert the driver, while preparing to swerve or stop.",
      "Avoid using the horn as it is illegal in built-up areas.",
      "Only use the horn after a collision has occurred."
    ],
    correctAnswerIndex: 1,
    explanation: "A brief, polite tap of your horn can make a distracted driver look up. Never assume they will remain stopped, though; always prepare to evade or stop if they pull out."
  },
  {
    id: 75,
    question: "You are transitioning from riding a conventional two-wheeled motorcycle to a three-wheeled motorcycle. How does the steering technique differ?",
    options: [
      "Three-wheeled bikes do not lean and require you to steer the bars in the direction of the turn.",
      "Three-wheeled bikes rely entirely on countersteering at all operating speeds.",
      "Three-wheeled bikes cannot make tight, low-speed left-hand turns.",
      "There is no difference in the steering and control techniques."
    ],
    correctAnswerIndex: 0,
    explanation: "Because three-wheeled motorcycles cannot lean, they do not turn using countersteering. Instead, you turn the handlebars directly in the direction of your turn to steer."
  },
  {
    id: 76,
    question: "During a highway ride, your front handlebars begin to oscillate rapidly. What mechanical issues are most likely to cause this handlebar wobble?",
    options: [
      "A dirty windshield or bent footpegs.",
      "Uneven tire pressure, misaligned wheels, or poorly distributed cargo weight.",
      "Riding with your high beam headlight on.",
      "Using premium fuel instead of regular fuel."
    ],
    correctAnswerIndex: 1,
    explanation: "Wobbles point to chassis or load imbalances. Uneven tire tire pressure, worn steering bearings, or placing too much weight too far back on the luggage rack can cause wobbles."
  },
  {
    id: 77,
    question: "You are approaching a toll booth in summer. Why should you be cautious when stopping in this area?",
    options: [
      "Softened asphalt tar can mix with leaked engine oil and fluids, making the road extremely slick.",
      "Toll booth concrete is chemically slicked to prevent tires from tracking rubber.",
      "High exhaust temperatures can melt tire tread particles onto the lane.",
      "Continuous vehicle tracking can polish the stones until they are slippery."
    ],
    correctAnswerIndex: 0,
    explanation: "Areas where vehicles stop and idle, such as toll booths or intersections, collect high concentrations of leaked oils and fluids. Hot summer temperatures soften asphalt tar, which mixes with these oils to create very slick zones."
  },
  {
    id: 78,
    question: "You apply too much front brake in an emergency stop, locking the front wheel. What should you do immediately to prevent a crash?",
    options: [
      "Squeeze the lever even harder to force the wheel to slide straight.",
      "Release the front brake lever immediately, then reapply it smoothly with less force.",
      "Lean forward and drag both feet on the pavement.",
      "Lean the bike to one side to slide safely on the engine guards."
    ],
    correctAnswerIndex: 1,
    explanation: "A locked front wheel causes a loss of steering control and balance, leading to a crash. If the front wheel locks, release the brake immediately to let the tire spin and regain steering, then reapply it smoothly."
  },
  {
    id: 79,
    question: "You are caught riding in heavy fog. How should you adjust your riding habits to ensure safety?",
    options: [
      "Increase following distance to at least 4 seconds, reduce speed, and wear high-visibility gear.",
      "Follow closely behind the vehicle ahead to stay out of their spray.",
      "Focus your eyes directly on your front fender to track lane position.",
      "Ride with your hazard lights on while weaving within your lane."
    ],
    correctAnswerIndex: 0,
    explanation: "Dense fog reduces your visibility and slows reaction times. Increasing your following distance to at least 4 seconds and slowing down provides a safety cushion. Bright gear helps other drivers see you."
  },
  {
    id: 80,
    question: "You are riding at night on a two-lane highway. Under Minnesota law, when must you dim your high beam headlight?",
    options: [
      "Within 500 feet of an oncoming vehicle or within 200 feet when following another vehicle.",
      "Within 1,000 feet of any vehicle on any road.",
      "Only when oncoming drivers flash their high beams at you.",
      "Motorcycles are never required to dim high beams because of their small footprint."
    ],
    correctAnswerIndex: 0,
    explanation: "Minnesota statute requires operators to dim high beams within 500 feet of oncoming traffic and within 200 feet of a vehicle they are following to prevent blinding other motorists."
  },
  {
    id: 81,
    question: "Under normal, dry riding conditions, why is a minimum two-second following distance recommended?",
    options: [
      "It is the minimum time gap required to allow you to perceive and react to hazards.",
      "It is the legal distance required to prevent tailgating citations under state codes.",
      "It is the optimal distance to save fuel by capitalizing on the lead vehicle's aerodynamic draft.",
      "It is the time gap required to keep your engine coolant temperature from rising."
    ],
    correctAnswerIndex: 0,
    explanation: "A two-second following distance provides a safe spatial cushion to notice a hazard, react, and stop or swerve. Increase this distance when riding on slick pavement, in heavy wind, or behind large trucks."
  },
  {
    id: 82,
    question: "You are taking a sweeping corner on a highway when you see a pothole in your path. If you must use your brakes while leaned over, you should:",
    options: [
      "Apply the front brake with maximum force and lean the motorcycle deeper into the corner.",
      "Squeeze both brakes smoothly and progressively with lighter pressure than on a straight, uprighting the motorcycle if possible.",
      "Use only the rear brake with maximum pressure to slide the rear tire.",
      "Do not use either brake; steer off onto the outer road shoulder to stop."
    ],
    correctAnswerIndex: 1,
    explanation: "Because traction is divided between steering and braking forces when cornering, applying maximum brake pressure can exceed tire grip limits. Gradual, smooth application of both brakes helps you slow safely, and straightening the bike whenever possible restores safety margins."
  },
  {
    id: 83,
    question: "You are preparing for a long ride. When is the most accurate time to check your tire air pressure?",
    options: [
      "Immediately after riding on the high road at highway speeds for an hour.",
      "Only when the steering handlebar begins to wobble at low speeds.",
      "When the tires are completely cold, before you start riding.",
      "When the ambient air temperature rises above 70 degrees Fahrenheit."
    ],
    correctAnswerIndex: 2,
    explanation: "Checking tire pressure when tires are cold guarantees an accurate reading. Riding heats the tires, causing the air inside to expand. This expansion raises the pressure, leading to an artificially high reading."
  },
  {
    id: 84,
    question: "You are preparing to ride through several busy downtown intersections. To prevent crashes, you should know that the most common cause of multi-vehicle motorcycle collisions is:",
    options: [
      "Another vehicle tailgating the motorcycle from behind.",
      "An oncoming vehicle turning left directly across the motorcycle's oncoming path.",
      "A vehicle backing out of a parking space on the right side.",
      "A vehicle passing the motorcycle on a multi-lane roadway."
    ],
    correctAnswerIndex: 1,
    explanation: "The most common collision at intersections is a vehicle turning left in front of an oncoming motorcycle. Drivers often misjudge the motorcycle's distance or speed, or fail to see the rider entirely."
  },
  {
    id: 85,
    question: "You are descending a long mountain pass. How do you utilize 'engine braking' to manage your speed?",
    options: [
      "Turn the engine off with the cut-off switch to stop the bike.",
      "Slow down, then downshift into a lower gear and ease out the clutch to let engine compression slow the bike.",
      "Stomp heavily on the rear brake pedal to lock the drive chain.",
      "Pull the clutch lever in and coast in neutral to reduce speed."
    ],
    correctAnswerIndex: 1,
    explanation: "Engine braking uses the internal resistance of the motor to slow down the vehicle. Downshifting and using engine compression reduces the need for constant brake application, preventing brake fade from heat buildup."
  },
  {
    id: 86,
    question: "You are riding on a multi-lane street when you approach railroad tracks running diagonally across the lane. You should:",
    options: [
      "Swerve slightly to cross the tracks at an angle of at least 45 degrees, if safe.",
      "Cross the steel rails as parallel as possible to minimize side-to-side tire slip.",
      "Apply the front brake hard exactly as your front tire makes contact with the metal rail.",
      "Stand fully on the footpegs and close your eyes to avoid target fixation."
    ],
    correctAnswerIndex: 0,
    explanation: "Diagional tracks can trap a tire or cause a slip if crossed at a shallow angle. Swerving slightly is the safest way to ensure your tires cross the tracks at an angle of 45 to 90 degrees."
  },
  {
    id: 87,
    question: "You are riding at night. How can you warn drivers behind you that you are preparing to stop or turn in an unexpected area?",
    options: [
      "Briefly tap the brake lever or pedal multiple times to flash the brake light when slowing.",
      "Turn off the rear tail light to prevent blinding distracted motorists behind you.",
      "Ride with your hazard lights blinking while weaving from left to right within your lane.",
      "Always ride on the gravel shoulder when riding after midnight."
    ],
    correctAnswerIndex: 0,
    explanation: "Tapping the brake pedal or lever flashes your brake light. This flashing catches the attention of trailing motorists, helping prevent rear-end collisions."
  },
  {
    id: 88,
    question: "You are riding in freezing temperatures in late November. Why should you use extra care when crossing bridges and overpasses?",
    options: [
      "They have narrower lanes than normal stretches of highways.",
      "They freeze first and can contain patches of ice even when standard roads are dry and clear.",
      "They are built from special materials that dissolve motorcycle tire tread.",
      "They lack speed limit signs, causing drivers to accelerate excessively."
    ],
    correctAnswerIndex: 1,
    explanation: "Bridges and overpasses have freezing air flowing underneath them, causing their surface temperatures to drop faster than standard roads. They can freeze and develop black ice even when surrounding asphalt is dry."
  },
  {
    id: 89,
    question: "You cannot avoid a small piece of wood lying in your lane. How should you ride over it safely?",
    options: [
      "Hold the handlebars loosely, lean forward, and apply the front brake right as you hit it.",
      "Swerve aggressively at the last millisecond to slide around it.",
      "Rise slightly off the seat, keep the motorcycle straight, maintain a steady speed, and hold the handlebars firmly.",
      "Lay the motorcycle on its side to slide safely past the obstacle."
    ],
    correctAnswerIndex: 2,
    explanation: "To cross an obstacle safely, keep the motorcycle straight and upright. Rising off the seat lets your legs absorb the shock, keeping you in full control."
  },
  {
    id: 90,
    question: "You are inspecting your tires before a road trip. When should your motorcycle tires be replaced?",
    options: [
      "The tire surface shows visible fabric or cord, or tread has worn down to 2/32 inch.",
      "The tire rubber feels warm to the touch after a 20-minute ride.",
      "You have ridden more than 1,000 miles on the tires.",
      "The tire pressure drops by 1 PSI over a three-month period."
    ],
    correctAnswerIndex: 0,
    explanation: "Operating tires with under 2/32 (1/16) inch tread, or tires with visible cords, is dangerous. Substandard tread cannot clear water or debris, causing slides. Tires must be replaced immediately when worn."
  },
  {
    id: 91,
    question: "You are riding in dense traffic on a multi-lane highway when congestion slows. Why does Minnesota law prohibit high-speed lane filtering?",
    options: [
      "It limits your escape options, minimizes your safety buffers, and can startle drivers who do not expect a passing motorcycle.",
      "It causes your motorcycle engine cooling lines to expand and freeze.",
      "It wears out the chain drive sprocket twice as fast.",
      "It reduces alternator voltage and dims your headlight."
    ],
    correctAnswerIndex: 0,
    explanation: "Minnesota law permits lane filtering under low-speed conditions (traffic moving under 25 mph, and filtering at no more than 15 mph above traffic). High-speed lane splitting is prohibited because it drastically reduces space buffers and leaves zero room for reaction if a driver changes lanes."
  },
  {
    id: 92,
    question: "You are traveling at 55 mph when you hear a loud pop and feel the rear wheel slide from side to side (flat tire). How should you react?",
    options: [
      "Apply the front brake with maximum force and steer toward the ditch.",
      "Ease off the throttle gradually, hold the bars firmly, avoid sudden braking, and coast to a stop on the shoulder.",
      "Shift the motorcycle into neutral and lean into the opposite lane.",
      "Stomp hard on the rear brake to lock the tire and prevent the wheel spinning."
    ],
    correctAnswerIndex: 1,
    explanation: "A rear blowout can cause the motorcycle to fish-tail. Keeping a firm grip, avoiding sudden brake inputs which can destabilize the bike, and slowly closing the throttle allows you to roll to a safe stop."
  },
  {
    id: 93,
    question: "While riding through a construction zone, you see an orange diamond-shaped warning sign with a motorcycle symbol and a bumpy texture. What does this mean?",
    options: [
      "A motorcycle racing event is occurring ahead in the right lane.",
      "A motorcycle parking area is located 1,000 feet ahead.",
      "Construction has left uneven pavements, grooved surfaces, or loose gravel that requires caution.",
      "You must accelerate to clear a dirt path quickly."
    ],
    correctAnswerIndex: 2,
    explanation: "These orange warning signs alert riders to road surface conditions like milled asphalt, grooved lanes, or steel plates, which can challenge two-wheeled traction and require extra caution."
  },
  {
    id: 94,
    question: "You notice that your motorcycle's headlight turns on automatically as soon as you turn key ignition. What is the legal and safety purpose of this design?",
    options: [
      "To prevent excess battery voltage build-ups while riding.",
      "To maximize the motorcycle's daytime visibility to motorists, helping prevent collisions.",
      "To warm up the headlight bulb prior to an evening ride.",
      "To comply with state laws requiring you to burn off surplus alternator current."
    ],
    correctAnswerIndex: 1,
    explanation: "Operating your headlight during the day makes your motorcycle much more visible to oncoming traffic, which helps prevent drivers from turning across your path."
  },
  {
    id: 95,
    question: "You are entering a high-speed curve on a highway. To initiate a turn to the right at speeds above 15 mph, how must you steer?",
    options: [
      "Push forward on the right handlebar grip (press right, lean right, turn right).",
      "Pull back on the right handlebar grip with maximum force.",
      "Shift your weight to the left side of the seat and look downward.",
      "Press down firmly on the left footpeg while keeping the handlebars centered."
    ],
    correctAnswerIndex: 0,
    explanation: "Above 15 mph, motorcycles turn via countersteering. Pushing forward on the right handlebar grip causes the motorcycle to lean to the right, initiating a stable, controlled right turn."
  },
  {
    id: 96,
    question: "You are servicing your motorcycle inside your closed garage. What symptom should alert you to dangerous carbon monoxide buildup?",
    options: [
      "A slight skin rash, coughing, and a sudden high fever.",
      "A sudden headache, dizziness, confusion, nausea, or fatigue.",
      "Increased hearing sensitivity and muscle cramps.",
      "A rapid steering wobble and rear brake fade."
    ],
    correctAnswerIndex: 1,
    explanation: "Carbon monoxide is a highly toxic, odorless, and invisible exhaust gas. Symptoms of poisoning include headache, nausea, and dizziness. Never run an engine in a closed space."
  },
  {
    id: 97,
    question: "You are riding after a rainstorm and must cross a wet wooden deck bridge. How should you proceed safely?",
    options: [
      "Squeeze both front and rear brakes hard to slide sideways.",
      "Swerve back and forth continuously to keep the tires warm.",
      "Maintain a steady speed, ride straight across, and avoid sudden braking, turning, or acceleration.",
      "Accelerate aggressively to spend as little time as possible on the bridge."
    ],
    correctAnswerIndex: 2,
    explanation: "Wet wood and metal grates offer almost zero traction. To cross them safely, keep the motorcycle upright, maintain a steady throttle, and avoid aggressive steering or braking inputs."
  },
  {
    id: 98,
    question: "You are riding on a hot summer afternoon when a sudden light rain shower begins. Why is the pavement most slippery during the first few minutes of rain?",
    options: [
      "The rain mixes with accumulated oil drippings on the road, creating an extremely slippery film.",
      "The rainwater is chemically reactive with motorcycle rubber compounds.",
      "The tire tracks of passenger vehicles get instantly flooded.",
      "Light rain causes rapid ambient air cooling that dissolves asphalt grip."
    ],
    correctAnswerIndex: 0,
    explanation: "Slight moisture floats dry engine oil and grease drippings to the road surface, making it highly slippery. A heavy or prolonged rain will eventually wash these lubricants away, slightly restoring traction."
  },
  {
    id: 99,
    question: "You are learning to ride. What is the primary function of the clutch lever located on the left handlebar?",
    options: [
      "To decelerate the front wheel during a traction slide.",
      "To disconnect engine power from the rear wheel to allow gear shifting or starting.",
      "To engage the rear locking mechanism when parking on inclines.",
      "To toggle the high beam headlight safely from the handlebar."
    ],
    correctAnswerIndex: 1,
    explanation: "The clutch disengages the power transfer from the engine to the transmission, allowing you to change gears, stop without stalling, or control power delivery at low speeds."
  },
  {
    id: 100,
    question: "You are riding in near-freezing temperatures on a late autumn day. How can the cold affect your safety as an operator?",
    options: [
      "It sharpens your sensory nerve endings, enhancing your braking timing.",
      "It causes numbness, stiffness, and delays your reaction times, which can lead to hypothermia.",
      "It hardens tire rubber to provide twice as much grip on fast corners.",
      "It has no measurable physical effects if you wear leather boots."
    ],
    correctAnswerIndex: 1,
    explanation: "Cold weather can cause shivering, fatigue, and numb appendages, which slows your reaction times and impairs your coordination. Proper windproof and insulated gear is vital."
  },
  {
    id: 101,
    question: "You are riding in a staggered formation in a group when the rider directly ahead of you leaves the highway. What is the safest way to maintain the formation?",
    options: [
      "Swerve into their empty lane track immediately to maintain a tight line.",
      "Remain in your position and let the cohort safely re-form its staggered pattern in order.",
      "Accelerate to pass the new front rider on the left shoulder.",
      "Instantly stop your motorcycle in the lane to consult a map."
    ],
    correctAnswerIndex: 1,
    explanation: "Riders in a staggered group should adjust their positions safely to fill gaps. The easiest way is for trailing riders to move up to the next staggered position in a coordinated, orderly manner."
  },
  {
    id: 102,
    question: "You are packing for a trip that will extend into the night. Why is it dangerous to ride with a tinted face shield or sunglasses after sunset?",
    options: [
      "It causes your motorcycle high beams to reflect inward.",
      "It reduces the light reaching your eyes, severely making it difficult to spot black asphalt hazards.",
      "It creates static electricity inside the helmet shell.",
      "It is only dangerous if you are riding with a passenger."
    ],
    correctAnswerIndex: 1,
    explanation: "Tinted face shields and sunglasses reduce visibility in low light, making potholes, road debris, and lane markings difficult or impossible to see. Switch to a clear shield or clear goggles at dusk."
  },
  {
    id: 103,
    question: "You are practicing taking tight highway curves. What is the best visual strategy to guide your motorcycle through the curve?",
    options: [
      "Keep your eyes pinned to the front tire to monitor immediate road contact.",
      "Turn your head and keep your eyes focused through the curve toward your desired exit path.",
      "Focus your eyes on the solid center lane divider lines.",
      "Constantly glance behind you to check for trailing vehicles."
    ],
    correctAnswerIndex: 1,
    explanation: "Your motorcycle follows your line of sight (target path). Keeping your head turned and eyes focused through the curve to your exit point helps you steer a smooth, accurate path."
  },
  {
    id: 104,
    question: "You are carrying a passenger who has never ridden on a motorcycle before. What is the most critical hazard they present?",
    options: [
      "They may lean the opposite way during turns, or shift weight unexpectedly, upsetting your steering balance.",
      "They may accidentally adjust your rearview mirrors during normal riding.",
      "They will naturally cause your front tire pressure to rise too high.",
      "They will constantly look at your dashboard and distract your view."
    ],
    correctAnswerIndex: 0,
    explanation: "Inexperienced passengers often panic and lean away from the turn, which fights your countersteering and can upset the balance of the bike. Instruct them to hold onto you and lean with the bike."
  },
  {
    id: 105,
    question: "During a pre-ride check, you squeeze your rear brake pedal and feel no resistance; it goes all the way down. What does this indicate?",
    options: [
      "A normal automatic brake pad self-adjustment process.",
      "A dangerous mechanical issue, such as a fluid leak or air in the hydraulic brake line.",
      "That the tires are cold and need to be heated up by riding.",
      "That the motorcycle engine oil is leaking into the intake."
    ],
    correctAnswerIndex: 1,
    explanation: "A spongy brake pedal or a complete lack of resistance indicates an active hydraulic failure, such as fluid loss or air in the line. Never ride a motorcycle with compromised brakes."
  },
  {
    id: 106,
    question: "You must execute a sudden emergency stop on dry pavement. To prevent skidding and stop in the shortest distance, you should:",
    options: [
      "Squeeze both brakes smoothly and progressively up to the limit of traction without locking either tire.",
      "Apply the rear brake until the tire locks up, then slide into the stop.",
      "Use the front brake only, squeezing with maximum instantaneous force.",
      "Shift into neutral and let the wind slow the bike down."
    ],
    correctAnswerIndex: 0,
    explanation: "Applying progressive, smooth force to both brakes up to the edge of traction permits the tires to slow down rapidly, stopping the bike quickly and safely without causing a skid."
  },
  {
    id: 107,
    question: "You are riding in multi-lane highway traffic. What is meant by keeping a 'space cushion' around your motorcycle?",
    options: [
      "The foam padded seat structure of the bike.",
      "An open margin of safety on all sides of you in traffic to allow room to react, brake, or swerve.",
      "The air pocket between your chest and the steering handlebar.",
      "An inflatable safety vest worn under your jacket."
    ],
    correctAnswerIndex: 1,
    explanation: "Maintaining an open pocket of space on all sides of your motorcycle ensures that you have time and room to react if other road users make unexpected moves or if road conditions deteriorate."
  },
  {
    id: 108,
    question: "You are following a passenger vehicle on a wet asphalt street. How should you adjust your following distance compared to dry roads?",
    options: [
      "Keep it at 1 second to ride in their dry tire spray lanes.",
      "Increase it to at least 3 or 4 seconds to assure sufficient reaction time without skidding.",
      "Keep it at 2 seconds, the same as dry roads.",
      "Pull over and wait for the road to dry completely."
    ],
    correctAnswerIndex: 1,
    explanation: "Reduced traction on wet streets increases your stopping distance significantly. Expanding your following distance to 3-4 seconds or more gives you a safe margin to brake progressively and avoid skids."
  },
  {
    id: 109,
    question: "You are preparing to pass a slow-moving RV on a two-lane highway. What is the safest lane approach for this pass?",
    options: [
      "Weave close to their rear bumper, honk your horn, and pass on the right-hand unpaved shoulder.",
      "Signal, check mirrors and blind spots with a shoulder check, move into the passing lane with a clean space margin, and return with a healthy gap.",
      "Ride beside their door in the same lane to force them to yield space.",
      "Accelerate to 90 mph immediately without using signals."
    ],
    correctAnswerIndex: 1,
    explanation: "Standard passing protocols involve signaling, checking your mirrors and blind spots with a shoulder head check, moving out with a buffer, accelerating past, and signaling your return only when you can see their headlight in your mirror."
  },
  {
    id: 110,
    question: "You are riding on a highway in a rain shower and see a large puddle ahead. What are the greatest hazards associated with riding through standing water?",
    options: [
      "Water spraying onto fuel tanks and washing off polish coatings.",
      "Hydroplaning, hidden road hazards (like deep potholes) beneath the water, and wet brakes showing poor responsiveness.",
      "Water immediately rusting the motorcycle wheel hubs completely.",
      "Water getting into the exhaust pipe and locking the rear wheel."
    ],
    correctAnswerIndex: 1,
    explanation: "Standing water can cause hydroplaning (where tire tread cannot pump water out, losing contact with the road), mask deep potholes, and reduce your braking performance until the brakes dry."
  },
  {
    id: 111,
    question: "You are approaching an intersection when you notice a driver in the oncoming lane waiting to turn left. What should you do?",
    options: [
      "Assume they see you and maintain your exact speed and lane split.",
      "Decelerate slightly, cover your brakes and clutch, choose a visible lane position, and prepare for evasive action.",
      "Swerve side to side inside the lane to distract them.",
      "Squeeze only the rear brake to slow to a crawl on the crosswalk."
    ],
    correctAnswerIndex: 1,
    explanation: "Do not assume oncoming drivers see you. Tapping or covering your brake and clutch controls prepares you to stop or swerve immediately if the driver turns across your path."
  },
  {
    id: 112,
    question: "Under Minnesota law, if you carry a passenger on your motorcycle, what equipment is required?",
    options: [
      "Dedicated passenger footpegs or rests, and a secure seat fit for two.",
      "A protective roll bar surrounding the passenger's torso.",
      "A secondary windshield and dual side exhaust pipes.",
      "A backup mechanical brake lever for the passenger to use."
    ],
    correctAnswerIndex: 0,
    explanation: "Minnesota law requires passenger-equipped bikes to feature dedicated passenger foot rests (footpegs) and passengers must keep their feet on the rests when the motorcycle is in motion."
  },
  {
    id: 113,
    question: "Your motorcycle's front wheel begins to oscillate rapidly (wobble) at highway speeds. What is the safest way to manage this wobble?",
    options: [
      "Slam on both brakes hard and push the handlebars aggressively sideways.",
      "Grip the handlebars firmly, gradually ease off the throttle, do not apply brakes, and pull over safely.",
      "Stand fully on the footpegs and wave your arms to alert other highway drivers.",
      "Lean fully forward and try to hold the front wheel axle manually."
    ],
    correctAnswerIndex: 1,
    explanation: "Applying brakes during a high-speed wobble can worsen the instability. Maintain a firm grip on the handlebars, roll off the throttle progressively to slow down, and steer to the shoulder once the wobble dampens."
  },
  {
    id: 114,
    question: "Under Minnesota law, carrying passengers is strictly regulated. Under what condition can you legally carry a passenger?",
    options: [
      "Only if they have a valid motorcycle instruction permit.",
      "Only if the motorcycle is equipped with passenger seat and pegs, and the operator holds a valid motorcycle license endorsement.",
      "Only if both riders are under age 18 and riding on a state highway.",
      "At any time, provided the passenger sits on the fuel tank."
    ],
    correctAnswerIndex: 1,
    explanation: "Minnesota law prohibits holders of motorcycle instruction permits from carrying passengers. You must have a full motorcycle driver license endorsement (Class M) to carry passengers."
  },
  {
    id: 115,
    question: "You are practicing emergency braking. Approximately what percentage of your motorcycle's total stopping power is provided by the front brake under dry conditions?",
    options: [
      "About 70%",
      "About 30%",
      "About 90%",
      "About 5%"
    ],
    correctAnswerIndex: 0,
    explanation: "The front brake provides about 70 percent of a motorcycle's stopping power under dry conditions because deceleration transfers the bike's weight forward onto the front wheel, increasing front tire traction."
  },
  {
    id: 116,
    question: "You are carrying a heavy passenger for the first time. How will this affect your motorcycle's performance?",
    options: [
      "The bike accelerates faster due to increased rear axle weight friction.",
      "The bike accelerates slower, handles heavier, and requires a significantly longer distance to brake and stop safely.",
      "It makes U-turns and slow speed maneuvering much lighter.",
      "It has zero effect on the distance required to halt."
    ],
    correctAnswerIndex: 1,
    explanation: "A passenger's added weight increases the vehicle's momentum. This makes the motorcycle slower to accelerate, heavier to turn at slow speeds, and dramatically increases your stopping distance."
  },
  {
    id: 117,
    question: "Before merging or changing lanes, you check your rearview mirrors. Why must you also perform a shoulder head check?",
    options: [
      "To check if your passenger is matching your body angle.",
      "To check if your turn signals are operating correctly.",
      "To inspect your blind spots, which cannot be seen in the rearview mirrors.",
      "To confirm your exhaust pipe is not emitting visible smoke."
    ],
    correctAnswerIndex: 2,
    explanation: "Rearview mirrors provide a limited view. A quick look over your shoulder (head check) is the only way to ensure that there are no vehicles in your blind spots before you execute a turn or lane change."
  },
  {
    id: 118,
    question: "You must cross a patch of road covered in spilled engine oil or sand. What is the safest way to cross this slippery surface?",
    options: [
      "Accelerate and lean the bike in the turn direction.",
      "Keep the motorcycle upright, maintain steady throttle, and avoid sudden turning, braking, or accelerating.",
      "Lock both brakes to slide straight across as fast as possible.",
      "Stand on the footpegs and weave the bike side to side."
    ],
    correctAnswerIndex: 1,
    explanation: "On extremely slick surfaces, sudden changes in velocity or direction will trigger a slide. Gliding over the slick patch upright with a steady throttle is the safest approach."
  },
  {
    id: 119,
    question: "You are purchasing a new DOT-approved helmet. What is the proper way to wear a motorcycle helmet to ensure optimal safety?",
    options: [
      "Sitting loosely on the back of your head without snapping the chin strap.",
      "Fitting snugly all around your head with the chin strap buckled securely.",
      "Placed over a baseball cap or beanie matching your outfit.",
      "Tilted forward so it covers your forehead and nose."
    ],
    correctAnswerIndex: 1,
    explanation: "An unbuckled or loose helmet can easily fly off your head during a slide or bounce, leaving you with zero protection. It must fit snugly and be buckled securely."
  },
  {
    id: 120,
    question: "You are riding on a two-lane road when an oncoming car suddenly drifts across the double yellow line directly into your path. What is your safest reaction?",
    options: [
      "Swerve left into their oncoming lane of travel to bypass them.",
      "Flash your lights, honk your horn, and swerve to the right side of your lane or shoulder to exit their path.",
      "Hold both brakes hard and stay center to brace for contact.",
      "Quickly slide the motorcycle onto its side to slide."
    ],
    correctAnswerIndex: 1,
    explanation: "Avoid swerving left, as the oncoming car might correct suddenly. Swerving right toward the shoulder or side gives you an escape route with less danger of a head-on collision."
  },
  {
    id: 121,
    question: "You are carrying a passenger on your motorcycle. Under Minnesota law, what are the passenger's legal requirements?",
    options: [
      "Hold on to the driver's shoulders at all times.",
      "Sit on the rear fender with their feet dangling close to the road.",
      "Wear a DOT-approved helmet if they are under age 18, and keep their feet on passenger footpegs.",
      "Lean in the opposite direction of the driver in all corners."
    ],
    correctAnswerIndex: 2,
    explanation: "Under Minnesota law, passengers under 18 must wear helmet protection, and passengers of any age must use passenger footrests and keep feet on the pegs."
  },
  {
    id: 122,
    question: "Your motorcycle begins handling strangely, and you suspect a tire has gone flat. How can you identify which tire is losing air?",
    options: [
      "If the front goes flat, the steering will feel heavy; if the rear goes flat, the back of the bike will slide or sway side-to-side.",
      "You cannot tell which tire is flat unless you stop and use an air pressure gauge.",
      "If the front goes flat, the engine will start to backfire loudly.",
      "If the rear goes flat, the front brake lever will feel soft and spongy."
    ],
    correctAnswerIndex: 0,
    explanation: "A front flat tire makes steering feel heavy and unresponsive. A rear flat tire causes the back of the motorcycle to fishtail, sway, or slide from side to side."
  },
  {
    id: 123,
    question: "You are riding on a multi-lane roadway. Why should you avoid riding of your motorcycle in the blind spot of a passenger vehicle or truck?",
    options: [
      "The car's exhaust could damage your helmet face shield.",
      "They may change lanes at any moment and collide with you because they do not see you.",
      "Riding in blind spots causes your engine to consume more fuel.",
      "It is a violation of local parkway speed ordinances."
    ],
    correctAnswerIndex: 1,
    explanation: "Blind spots are areas where drivers cannot see you in their mirrors. If you ride in a blind spot, the driver may change lanes into you without realizing you are there."
  },
  {
    id: 124,
    question: "You are adjusting your posture on a long ride. What is the recommended proper hand grip and wrist position on the handlebars?",
    options: [
      "Grip the handlebars loosely while keeping your wrists flat or slightly down, ready to react.",
      "Grip the handlebars as tightly as possible to reduce engine vibration.",
      "Hold the handlebars with your left hand only and rest your right hand on your thigh.",
      "Keep your wrists raised high above the level of the grips."
    ],
    correctAnswerIndex: 0,
    explanation: "Hold the grips firmly but with relaxed wrists, keeping your wrists flat or slightly down. This prevents you from accidentally rolling open the throttle if you hit a bump."
  },
  {
    id: 125,
    question: "You are crossing the Mississippi River on a bridge featuring steel open-mesh grates. What physical sensation should you expect?",
    options: [
      "The tires will lock up automatically and stop the motorcycle.",
      "The motorcycle will feel shaky or wander slightly, but you should stay calm, maintain a steady speed, and ride straight across.",
      "The bike will lean aggressively into the river wind pool.",
      "You must stand up on the seat and ride on one wheel only."
    ],
    correctAnswerIndex: 1,
    explanation: "Steel mesh grates often cause tires to wander or wiggle slightly. This is normal behavior: do not fight the handlebar, keep a steady speed, and look straight ahead."
  },
  {
    id: 126,
    question: "You are shopping for proper riding apparel. Why is wearing heavy denim or sturdy leather jackets recommended for all motorcycle rides?",
    options: [
      "They protect you from rain and make you look like a professional racer.",
      "They help keep your body temperature high enough to avoid sweating.",
      "They offer crucial abrasion resistance to protect your skin during slides and guard against serious road rash.",
      "They prevent your engine oil from splashing onto your clothes."
    ],
    correctAnswerIndex: 2,
    explanation: "Sturdy materials like leather or heavy motorcycle denim protect your skin from friction heat and road contact injuries if you slide during a fall."
  },
  {
    id: 127,
    question: "You are riding in a group of several motorcycles on a two-lane road. How should the group pass a slower vehicle safely?",
    options: [
      "The entire group should pass at the exact same time side-by-side.",
      "Riders should pass one at a time, with each rider completing the pass safely before the next rider begins.",
      "The leader should pass, and the rest should follow tailgating the passed car.",
      "Passing is completely illegal when riding in a group formation."
    ],
    correctAnswerIndex: 1,
    explanation: "Group members must pass individually. Each rider must check traffic, signal, execute their pass, and return to their spot before the next rider initiates their pass."
  },
  {
    id: 128,
    question: "You are descending a steep hill. What can happen if you rely on and apply ONLY the rear brake to slow down?",
    options: [
      "The front tire will fold sideways instantly.",
      "You will stop in half the distance compared to using both brakes.",
      "Your stopping distance will be much longer, and you risk locking the rear tire and skidding.",
      "The engine will automatically switch into high reverse gear."
    ],
    correctAnswerIndex: 2,
    explanation: "Relying on the rear brake alone leaves 70% of your braking capacity unused. This greatly increases your stopping distance and makes a rear-wheel slide much more likely."
  },
  {
    id: 129,
    question: "You are riding down a rural highway when a large insect hits your face shield, obstructing your view. What is your safest reaction?",
    options: [
      "Swerve aggressively to use the wind to blow the bug away.",
      "Keep a steady speed, keep your eyes on the road, open your visor slightly if needed, and pull over when safe to wipe it clean.",
      "Take your hands off the handlebars immediately to scrape the bug off.",
      "Squeeze both brakes hard to halt in the middle of your lane."
    ],
    correctAnswerIndex: 1,
    explanation: "Do not let yourself be distracted. Maintain steering control, stay straight, and pull over safely to a stop on the shoulder to clean your visor."
  },
  {
    id: 130,
    question: "While riding, you notice engine oil or coolant leaking and spraying onto your rear tire. What should you do?",
    options: [
      "Lean deeper in curves to scrub the oil off the tire treads.",
      "Accelerate to let wind friction dry the tire surfaces.",
      "Avoid leaning, reduce your speed gradually, and pull over to check for the leak source.",
      "Apply the rear brake with maximum force to lock the tire and wipe it off."
    ],
    correctAnswerIndex: 2,
    explanation: "Oil or coolant on tire rubber destroys tires' traction. Avoid leans, slow down gradually without hard braking, and pull off the roadway to isolate the problem."
  },
  {
    id: 131,
    question: "Under Minnesota law, if a rider under the age of 18 is caught operating a motorcycle without a DOT-compliant helmet, what are the legal ramifications?",
    options: [
      "They may be cited for an equipment violation and have their operating privileges suspended or permit invalid status issued.",
      "They are only issued an oral warning on the first three offences.",
      "They must pay a nominal $5 administrative fee with no license impact.",
      "Their engine will be seized and impounded permanently by the state patrol."
    ],
    correctAnswerIndex: 0,
    explanation: "Operating a motorcycle in Minnesota under 18 without a legal helmet is a traffic safety violation that leads to citations, fines, and potential permit suspension."
  },
  {
    id: 132,
    question: "You hold a Minnesota motorcycle instruction permit. What is the maximum legal speed limit you are allowed to travel on state highways?",
    options: [
      "Permit holders are restricted to a maximum speed of 45 mph at all times.",
      "There is no special numerical speed limit; permit holders must follow all posted speed limits.",
      "They are only allowed to ride on streets posted at 30 mph or less.",
      "They must ride at least 15 mph under the posted speed limit to ensure safety."
    ],
    correctAnswerIndex: 1,
    explanation: "While motorcycle permit holders have restrictions such as no night riding and no passengers, they must follow standard posted speed limits."
  },
  {
    id: 133,
    question: "You have completed your studying and are riding home. Under Minnesota law, at what Blood Alcohol Concentration (BAC) is it illegal for a person over 21 to operate any motor vehicle?",
    options: [
      "0.02 percent or higher.",
      "0.05 percent or higher.",
      "0.08 percent or higher.",
      "0.10 percent or higher."
    ],
    correctAnswerIndex: 2,
    explanation: "In Minnesota, a BAC of 0.08% or higher is the legal threshold for Driving While Impaired (DWI) for drivers holding a standard license."
  },
  {
    id: 134,
    question: "You are riding in near-freezing temperatures. How does hypothermia or extreme cold exposure physically limit your motorcycle riding capabilities?",
    options: [
      "It makes your vision clearer by shrinking the pupils.",
      "It causes numbness, slows muscle reflexes, impairs physical coordination, and delays critical decision-making.",
      "It causes your motorcycle suspension to stiffen in curves.",
      "It has no impact if you have a passenger to buffer the wind."
    ],
    correctAnswerIndex: 1,
    explanation: "Cold wind and chilling temperatures drain body heat. Resulting hypothermia impairs fine motor tasks, delays reactions, and leads to fatal riding errors."
  },
  {
    id: 135,
    question: "You are riding on a city street and must cross a set of railroad tracks that run parallel to your lane of travel. How should you proceed?",
    options: [
      "Ride across them at a sharp angle of at least 45 degrees, preferably closer to 90 degrees.",
      "Swerve back and forth continuously until you slip past them.",
      "Ride directly on top of the steel track to gain traction.",
      "Accelerate to your maximum speed to jump the track gaps."
    ],
    correctAnswerIndex: 0,
    explanation: "Parallel tracks can catch your tires and trigger a crash. Move far enough away from the tracks to cross them at an angle of 45 to 90 degrees to cross safely."
  },
  {
    id: 136,
    question: "You are riding when your motorcycle's throttle suddenly sticks open. What is your safest immediate sequence of actions?",
    options: [
      "Squeeze the clutch lever to disengage the engine from the rear wheel, hit the engine cutoff switch, and apply the brakes.",
      "Turn off the ignition key immediately to lock the steering column.",
      "Downshift as fast as possible without disengaging the clutch.",
      "Slam on the front brake to force the engine to stall."
    ],
    correctAnswerIndex: 0,
    explanation: "Squeezing the clutch prevents the engine from propelling you forward. Running the cutoff switch powers down the engine so you can brake to a safe stop."
  },
  {
    id: 137,
    question: "You are riding through a curved exit ramp in autumn and suddenly encounter a patch of wet leaves. How should you adjust your riding?",
    options: [
      "Apply the front brake with maximum pressure to clean the tires.",
      "Increase speed to pass through the leaves as fast as possible.",
      "Reduce your lean angle, keep the bike as upright as possible, and maintain a steady, smooth throttle input.",
      "Lean significantly deeper to cut through the leaf layer to the pavement."
    ],
    correctAnswerIndex: 2,
    explanation: "Wet leaves are exceptionally slippery. Staying upright and avoiding sudden brakes or steering inputs reduces the force required from traction to maintain your path."
  },
  {
    id: 138,
    question: "Under Minnesota law, if you carry bundles, cargo, or packages on your motorcycle, how must they be secured?",
    options: [
      "Cargo must not be carried unless you are riding on designated county truck roads.",
      "Cargo must be secured properly and must not prevent the operator from keeping both hands on the handlebars.",
      "Cargo is limited to a maximum weight of 10 pounds including the rack.",
      "You must secure all cargo with rigid steel chains rather than bungee straps."
    ],
    correctAnswerIndex: 1,
    explanation: "Cargo must be stored or strapped so it doesn't shift, unbalance the bike, or interfere with control levers, and the rider must keep both hands free to steer."
  },
  {
    id: 139,
    question: "During a pre-ride safety inspection, you inspect your tire tread. How do you identify when your tires are worn below safe limits?",
    options: [
      "If the tire looks shiny, the tread is in ideal condition.",
      "Check the tread wear indicators built into the tire grooves, or ensure tread is at least 2/32 inch (or 1/32 inch in some states).",
      "Verify that the tires expand by 5 inches when fully inflated.",
      "Look for bald spots, which provide better dry drag-strip traction."
    ],
    correctAnswerIndex: 1,
    explanation: "Tire tread wear bars or indicators flush with the tire tread surface signify that the tire is worn out and must be replaced immediately to protect against hydroplaning."
  },
  {
    id: 140,
    question: "You are riding on a quiet residential street when a dog begins sprinting from a yard to chase you. What is the safest way to avoid the animal?",
    options: [
      "Kick at the animal to drive it away from the motorcycle wheels.",
      "Accelerate instantly toward the animal to scare it into stopping.",
      "Slow down gradually as you approach, then accelerate crisply past the animal to throw off its intercept timing.",
      "Swerve into the opposing lane to completely bypass the animal."
    ],
    correctAnswerIndex: 2,
    explanation: "Animals guess your speed to intercept you. Slowing down as you approach alters their angle, and accelerating past leaves them behind safely."
  },
  {
    id: 141,
    question: "You are riding on a road with a center turning lane enclosed by solid double yellow lines on both sides. Under what condition can you ride in this center lane?",
    options: [
      "Only when overtaking three or more vehicles on the right.",
      "Never; standard vehicles and motorcycles are prohibited from driving or riding in this lane.",
      "Whenever traffic is moving slower than 20 mph in the main travel lanes.",
      "To park your motorcycle temporarily to make a phone call."
    ],
    correctAnswerIndex: 1,
    explanation: "Double solid yellow lines signify a strictly prohibited area. Driving or riding in this center lane is illegal and highly dangerous."
  },
  {
    id: 142,
    question: "You must park your motorcycle on fresh, hot asphalt on a sunny summer day. What safety precaution should you take?",
    options: [
      "The asphalt chemicals can corrode aluminum rims.",
      "Place a solid support plate (such as a metal or hard plastic disc) under the side stand to prevent it from sinking and tipping your bike over.",
      "The tires will melt and weld permanently to the road surface.",
      "Engine oil will boil if parked on hot asphalt."
    ],
    correctAnswerIndex: 1,
    explanation: "Hot asphalt softens and loses structural integrity. Parked motorcycles can sink and tip. Placing a small metal plate or plastic coaster under the side stand spreads the weight to prevent sinking."
  },
  {
    id: 143,
    question: "You want to maximize your daytime visibility to oncoming and crossing motorists. What attire is most effective?",
    options: [
      "An all-black leather suit with silver metal studs.",
      "A bright orange, neon yellow, or lime green jacket paired with a light-colored helmet.",
      "Dark denim jeans with dark boots.",
      "A dark blue windbreaker with standard reflective piping."
    ],
    correctAnswerIndex: 1,
    explanation: "Fluorescent and high-contrast neon colors (especially orange, yellow, and green) stand out dramatically in daylight and low-light environments, making you much easier to spot."
  },
  {
    id: 144,
    question: "You are riding in the late afternoon with bright direct sunlight behind you. Why should you use hand signals in addition to your motorcycle's electronic turn signals?",
    options: [
      "To save wear and tear on your motorcycle's turn signal bulbs.",
      "To satisfy a mandatory Minnesota dual-signaling permit requirement.",
      "Because intense sunlight can wash out electronic lights, making it highly difficult for drivers behind to see them.",
      "Only when you are carrying a passenger who is unable to see the indicators."
    ],
    correctAnswerIndex: 2,
    explanation: "Bright sunlight can wash out motorcycle turn signals. Using manual hand signals provides extra visibility to ensure drivers notice your intent."
  },
  {
    id: 145,
    question: "You are riding near a large commercial semi-truck. Which side of the truck contains the largest and most hazardous blind spot?",
    options: [
      "The immediate right side of the truck, extending backward.",
      "The immediate left side of the truck, right next to the driver door.",
      "The front area within 5 feet of the truck grill.",
      "There are no blind spots on commercial vehicle mirrors."
    ],
    correctAnswerIndex: 0,
    explanation: "While trucks have blind spots on all sides, the right side has the largest and most dangerous blind spot, extending across multiple lanes. Avoid riding in this zone."
  },
  {
    id: 146,
    question: "You are examining your safety gear. Why do helmet manufacturers recommend replacing your riding helmet every 3 to 5 years?",
    options: [
      "To update the helmet style to match newer motorcycle graphics.",
      "Because the protective inner EPS foam lining degrades, hardens, and loses its shock-absorbing capability over time.",
      "State laws require you to retake your licensing test if your helmet is older than 3 years.",
      "Newer helmets are made of waterproof alloys that do not exist in older linings."
    ],
    correctAnswerIndex: 1,
    explanation: "Helmets degrade over time from sweat, hair oils, UV exposure, and heat. The protective polystyrene foam liner compresses and hardens, failing to absorb impacts effectively."
  },
  {
    id: 147,
    question: "You are signaling drivers behind you. What is the proper hand signal to indicate that you are slowing down or stopping?",
    options: [
      "Left arm extended straight out horizontally.",
      "Left arm out, bent upward at a 90-degree angle.",
      "Left arm extended downward with the palm facing backward or toward the rear.",
      "Waving both arms up and down repeatedly."
    ],
    correctAnswerIndex: 2,
    explanation: "Extend your left arm downward with your palm facing to the rear to signal to drivers behind that you are slowing or stopping."
  },
  {
    id: 148,
    question: "You are approaching a T-junction and need to turn left. What is the proper hand signal to indicate a left-hand turn?",
    options: [
      "Left arm extended straight out horizontally.",
      "Left arm bent upward at a 90-degree angle.",
      "Right arm extended straight up into the air.",
      "Left index finger pointing to the motorcycle gas tank."
    ],
    correctAnswerIndex: 0,
    explanation: "Extending your left arm straight out horizontally is the universal hand signal for a left turn."
  },
  {
    id: 149,
    question: "You are preparing to turn into a side street on the right. What is the proper hand signal to indicate your right-hand turn?",
    options: [
      "Left arm extended straight out horizontally.",
      "Left arm out, bent upward at a 90-degree angle with palm flat.",
      "Right arm bent downward at a 90-degree angle.",
      "Pointing your left foot out to the side."
    ],
    correctAnswerIndex: 1,
    explanation: "Extending your left arm out and bending it upward at a 90-degree angle signals a right turn."
  },
  {
    id: 150,
    question: "You are riding on an open highway when you encounter strong, gusty crosswinds. How should you adapt your style to maintain your path?",
    options: [
      "Shift into neutral and let the wind steer you safely.",
      "Lean slightly into the wind to maintain your path, and avoid riding right next to large trucks that block the wind.",
      "Grip the handlebars loosely with one hand and lean backward.",
      "Accelerate to 85 mph to cut through the crosswind currents faster."
    ],
    correctAnswerIndex: 1,
    explanation: "Leaning slightly into the wind counters the lateral force. Watch out when passing large trucks: they block the wind temporarily, but you will experience a sudden gust when you clear them."
  },
  {
    id: 151,
    question: "You are executing a tight U-turn at under 10 mph. How does the steering technique of counterweighting differ from countersteering?",
    options: [
      "It is only used when parking the bike on soft surfaces.",
      "At slow speeds (under 15 mph), you lean your body in the opposite direction of the turn to balance the motorcycle's weight.",
      "You pull the clutch lever completely while keeping the throttle wide open.",
      "It is used exclusively above 60 mph on wet curves."
    ],
    correctAnswerIndex: 1,
    explanation: "At slow speeds, you balance the bike during tight turns by leaning your body outward (counterweighting) while leaning the motorcycle inward."
  },
  {
    id: 152,
    question: "You are caught riding in a sudden, severe storm with poor visibility and heavy rain. What is your safest option?",
    options: [
      "Speed up to reach your destination before the roads pool.",
      "Ride close to the bumper of a passenger car to follow their tracks.",
      "Pull off the road entirely at an exit or safe location, and wait out the storm in a dry, protected spot.",
      "Lay your motorcycle down on the grassy shoulder and wait."
    ],
    correctAnswerIndex: 2,
    explanation: "Severe storms present high risks of hydroplaning, blinding wind, and failing traction. Pulling over to wait it out is the safest approach."
  },
  {
    id: 153,
    question: "You are decelerating on a steep downhill descent. How does the downhill grade impact your motorcycle's braking dynamics?",
    options: [
      "The rear brake becomes twice as effective due to gravity.",
      "Weight transfers heavily to the front wheel, making the front brake even more critical while the rear tire is more prone to locking and skidding.",
      "Weight transfers upward, lifting both tires off the surface.",
      "It makes both brakes behave identically with no weight shift."
    ],
    correctAnswerIndex: 1,
    explanation: "Descending shifts weight forward. This increases front wheel traction but makes the rear wheel light and very easy to lock up. Apply the rear brake smoothly and use the front brake progressively."
  },
  {
    id: 154,
    question: "You must park your motorcycle on a steep incline. What is the safest parking procedure?",
    options: [
      "Leave the motorcycle in neutral and rely on the steering lock.",
      "Angle the motorcycle with the rear tire touching the curb, and leave the transmission in first gear.",
      "Park parallel to the curb with the kickstand on the downhill side.",
      "Park with the front tire touching the curb and leave the bike in neutral."
    ],
    correctAnswerIndex: 1,
    explanation: "Parking with the rear wheel touching the curb prevents the bike from sliding. Leaving the transmission in first gear acts as a brake to keep the motorcycle from rolling."
  },
  {
    id: 155,
    question: "You are parking your motorcycle parallel to a city curb. Under standard parallel parking guidelines, how close must your vehicle be to the curb line?",
    options: [
      "Within 3 feet of the curb line.",
      "Within 12 inches (or state-specified close distance) of the curb line.",
      "At least 5 feet away from the curb to allow bicycle traffic.",
      "Directly on top of the curb on the grassy shoulder."
    ],
    correctAnswerIndex: 1,
    explanation: "Parallel parked motorcycles must comply with standard parking rules, typically parked within 12 inches of the curb line."
  },
  {
    id: 156,
    question: "You are riding on an unlit rural road at night. What does 'over-riding' your motorcycle's headlight mean?",
    options: [
      "Toggling your high beams on and off rapidly to confuse oncoming motorists.",
      "Riding at a speed where your total stopping distance is greater than the distance illuminated by your headlight.",
      "Using custom LED bulbs that drain the battery on dark roads.",
      "Covering your headlight lens with a protective dark film."
    ],
    correctAnswerIndex: 1,
    explanation: "At night, if you ride too fast, you can't stop within the area illuminated by your headlight. If a hazard appears, you will hit it before you can stop."
  },
  {
    id: 157,
    question: "Under Minnesota law, how can you confirm if a motorcycle helmet is fully DOT compliant?",
    options: [
      "A rigid outer shell, shock-absorbing EPS lining, a secured chin strap, and a official 'DOT' label on the back.",
      "A dark tinted visor and integrated Bluetooth speakers.",
      "A carbon-fiber pattern decal and a leather neck curtain.",
      "It must be yellow/orange and weigh less than 1 pound."
    ],
    correctAnswerIndex: 0,
    explanation: "DOT-compliant helmets require a high-density polystyrene liner, a sturdy chin strap, and a official 'DOT' certification stamp on the rear shell."
  },
  {
    id: 158,
    question: "You are cornering and suddenly notice a pothole on your line. Why is 'target fixation' a critical hazard in this situation?",
    options: [
      "It causes your dashboard indicators to burn out quickly.",
      "You will steer directly toward the hazard you are staring at instead of looking at your escape path.",
      "It makes your helmet visor fog up from your breathing.",
      "It causes the engine to experience a temporary fuel lines block."
    ],
    correctAnswerIndex: 1,
    explanation: "Motorcycles go where you look. Staring at an obstacle (pothole, car) makes you steer directly into it. Always look toward your escape path instead."
  },
  {
    id: 159,
    question: "You are waiting at a red light in traffic. What is the safest lane position to adopt while stopped behind a passenger car?",
    options: [
      "Directly in the center of the lane, close to their rear bumper.",
      "Off to one side of the lane (left or right portion) with the bike in first gear, monitoring your mirrors for rear-end hazards.",
      "On the sidewalk next to the crosswalk.",
      "Right underneath the vehicle's exhaust pipe."
    ],
    correctAnswerIndex: 1,
    explanation: "Positioning to the side gives you an escape route if a vehicle fails to stop behind you. Keeping the bike in first gear allows you to move out of danger quickly if a car approaches too fast from behind."
  },
  {
    id: 160,
    question: "You are performing regular drive-chain maintenance. What is a standard safe slack measurement for most street motorcycles?",
    options: [
      "Between 3 and 4 inches of play.",
      "No slack at all; the chain must be tight with zero movement.",
      "Typically about 3/4 inch to 1 and 1/4 inches of play, depending on manufacturer specifications.",
      "At least 6 inches of play to ensure smooth shifts."
    ],
    correctAnswerIndex: 2,
    explanation: "Most motorcycle chains require roughly 3/4 to 1.25 inches (20-30 mm) of slack to allow the suspension to move up and down without snapping the chain."
  },
  {
    id: 161,
    question: "During a pre-ride check of your fluids, how should you check the engine oil level on most modern motorcycles?",
    options: [
      "With the engine running at high speed on the side stand.",
      "With the motorcycle held upright on a level surface, using either the sight glass or the dipstick as specified.",
      "By removing the oil filter and checking for solid deposits.",
      "By measuring how much oil leaks onto the floor overnight."
    ],
    correctAnswerIndex: 1,
    explanation: "Check the oil with the bike upright, not resting on the side stand, to ensure an accurate reading through the sight glass or on the dipstick."
  },
  {
    id: 162,
    question: "Under Minnesota law, what are the requirements if you choose to attach a passenger sidecar to your motorcycle?",
    options: [
      "No, sidecars are completely prohibited on all public roadways.",
      "Yes, provided the sidecar is securely bolted and does not block path visibility, and the motorcycle is registered.",
      "Only if you operate a automatic moped with a 50cc engine.",
      "Only on unpaved gravel paths."
    ],
    correctAnswerIndex: 1,
    explanation: "Sidecars are legal in Minnesota if they are registered and mounted securely according to manufacturer and law guidelines."
  },
  {
    id: 163,
    question: "You are shifting down to decelerate, but your rear wheel suddenly hops and chatters. What is the most likely cause?",
    options: [
      "Failing to pump the front brake lever before shifting.",
      "Releasing the clutch too rapidly after downshifting without matching engine speed (rev-matching).",
      "Riding on extremely hot asphalt pavement.",
      "Using low-octane unleaded fuel."
    ],
    correctAnswerIndex: 1,
    explanation: "Releasing the clutch too quickly after downshifting makes the rear wheel drag and chatter as it tries to match engine speed. Smooth clutch control or rev-matching prevents this."
  },
  {
    id: 164,
    question: "You are riding on a city street lined with parked cars. Which lane position provides the best protection from opening doors and merging vehicles?",
    options: [
      "The right portion of the lane, close to their doors.",
      "The center or left portion of the lane, to stay clear of opening doors, pulling-out cars, and emerging pedestrians.",
      "Weaving between the parked cars to stay out of traffic.",
      "Riding directly on the sidewalk."
    ],
    correctAnswerIndex: 1,
    explanation: "Riding in the center or left portion of your lane keeps you clear of opening car doors ('dooring') and motorists pulling out without looking."
  },
  {
    id: 165,
    question: "You are turning at an intersection and see a flashing yellow arrow traffic signal. what does this mean?",
    options: [
      "An immediate and mandatory emergency complete stop.",
      "You may turn left cautiously, but you must yield to oncoming traffic and pedestrians first.",
      "The signal is broken and you must proceed at 45 mph.",
      "You have the right-of-way and all oncoming vehicles must stop."
    ],
    correctAnswerIndex: 1,
    explanation: "A flashing yellow arrow means left turns are allowed but unprotected. You must yield to oncoming traffic and pedestrians before turning."
  },
  {
    id: 166,
    question: "You are riding behind a commercial dump truck carrying loose dirt and gravel. What is the safest strategy to avoid flying debris?",
    options: [
      "Follow closely to block the wind from hitting your chest.",
      "Increase your following distance to stay out of the path of falling rocks, or pass the vehicle safely when legal.",
      "Ride in the center of the lane to absorb any stones with your engine guard.",
      "Honk your horn repeatedly until the truck driver pulls over."
    ],
    correctAnswerIndex: 1,
    explanation: "Insecure truck loads can drop rocks, gravel, or debris. Increasing your following distance prevents cracked face shields, dented headlights, and traction slides."
  },
  {
    id: 167,
    question: "You are pulled over by law enforcement in Minnesota. What documents must you legally carry and present upon request?",
    options: [
      "Your valid driver's license with Class M endorsement or permit, vehicle registration, and proof of valid motorcycle insurance.",
      "Just your driver's license with no extra paperwork.",
      "Your high school diploma and a valid safety certificate.",
      "A written reference from a licensed motorcycle mechanic."
    ],
    correctAnswerIndex: 0,
    explanation: "Minnesota law requires operators to carry their license or permit, proof of insurance, and registration to show to law enforcement upon request."
  },
  {
    id: 168,
    question: "You attend an evening social event. On average, how long does it take for a healthy adult body to eliminate the alcohol from one standard drink?",
    options: [
      "About 15 minutes.",
      "About one hour.",
      "About three hours.",
      "About six hours."
    ],
    correctAnswerIndex: 1,
    explanation: "The human liver filters alcohol at a steady rate of about one standard drink per hour. Coffee, cold showers, or exercise do not speed up this process."
  },
  {
    id: 169,
    question: "You are stopped at a red light that fails to detect your motorcycle to trigger a green cycle. Under Minnesota's 'Affirmative Defense' rule, under what conditions can you cautiously proceed?",
    options: [
      "Immediately, if there are no other cars at the intersection.",
      "Only after coming to a complete stop, waiting an unreasonable amount of time, and verifying that no cross-traffic or pedestrians are approaching.",
      "Whenever cross-traffic has a yellow light.",
      "Never; motorcyclists must wait for a passenger car to trigger the signal."
    ],
    correctAnswerIndex: 1,
    explanation: "Minnesota's 'Affirmative Defense' rule allows motorcycles and bicycles to proceed cautiously through a red light if it fails to detect them, after a complete stop and verifying cross-traffic is clear."
  },
  {
    id: 170,
    question: "You are starting your motorcycle on a steep uphill grade. What is the primary function of the clutch 'friction zone' during this maneuver?",
    options: [
      "It locks the front wheel to prevent rolling backward.",
      "It is the point where the clutch starts transferring power to the rear wheel, allowing you to hold position and launch smoothly without rolling back.",
      "It is a dangerous wear-point that should be avoided on hills.",
      "It automatically shifts the transmission into neutral."
    ],
    correctAnswerIndex: 1,
    explanation: "Slightly slipping the clutch within its friction zone allows you to apply power to hold the bike's position and accelerate smoothly on a hill while releasing the brakes."
  },
  {
    id: 171,
    question: "You are entering a turn and find yourself squeezing the front brake lever too aggressively. What is the most immediate hazard of this action?",
    options: [
      "An immediate clean stop with zero slide risk.",
      "A front-wheel lockup or slide, causing the motorcycle to fall instantly (low-side crash).",
      "The rear tire lifting 5 feet off the pavement.",
      "High-speed engine backfiring."
    ],
    correctAnswerIndex: 1,
    explanation: "Braking when the front wheel is turned reduces cornering traction. Hard inputs can easily lock the front tire, washing it out and causing a crash."
  },
  {
    id: 172,
    question: "You are riding on a two-lane undivided highway and prepare to pass a large oncoming commercial truck. What hazard should you anticipate?",
    options: [
      "The truck will automatically pull over onto the shoulder to let you pass.",
      "A gust of wind or air blast that can push you outward; you should maintain your path with a firm grip.",
      "An increase in tire traction from exhaust heat.",
      "A sudden loss of all headlight illumination."
    ],
    correctAnswerIndex: 1,
    explanation: "Large oncoming vehicles push a large wave of air. Be prepared for a wind blast that can push you toward the shoulder as the truck passes."
  },
  {
    id: 173,
    question: "You are riding when a 3-inch wooden tree branch falls onto the pavement directly in your path, and you cannot swerve around it. What is the safest technique to cross this obstacle?",
    options: [
      "Lean forward, slam on the front brake, and swerve as you hit it.",
      "Keep the bike straight, stand slightly on the footpegs, accelerate slightly right before contact to lift the front, and ease off throttle over the obstacle.",
      "Lock both brakes to slide sideways over the log.",
      "Turn the handlebars back and forth quickly to bounce over."
    ],
    correctAnswerIndex: 1,
    explanation: "Standing on the pegs lets your legs act as shock absorbers. Keeping the bike straight and releasing the brakes before impact helps the suspension absorb the bump safely."
  },
  {
    id: 174,
    question: "You are riding a manual motorcycle. What is the proper, standard sequence of actions for upshifting to a higher gear?",
    options: [
      "Close throttle, squeeze clutch lever, click the shift lever up, ease clutch out while opening throttle.",
      "Hold throttle wide open, tap the shift lever down twice, and stomp on the rear brake.",
      "Squeeze front brake, click shift lever down, and pop the clutch out instantly.",
      "Turn off the engine cutoff switch, click up, and restart the motor."
    ],
    correctAnswerIndex: 0,
    explanation: "Standard upshifting requires closing the throttle, pulling the clutch, clicking up the shift lever, and smoothly engaging the clutch while rolling on the throttle."
  },
  {
    id: 175,
    question: "You are slowing down to stop at a toll junction. Why is it vital to check your rearview mirrors during this deceleration?",
    options: [
      "To check if your turn signals are flashing correctly.",
      "To ensure your passenger is sitting upright.",
      "To monitor vehicles behind you and ensure they are slowing down, avoiding rear-end collisions.",
      "To check if any road debris has stuck to your rear license plate."
    ],
    correctAnswerIndex: 2,
    explanation: "Many motorcycle crashes involve being rear-ended at stops. Monitoring your mirrors lets you spot distracted drivers approaching too fast so you can escape."
  },
  {
    id: 176,
    question: "You are strapping on your helmet. What is the proper and safest way to secure the chin strap?",
    options: [
      "Fastened loosely so you can slip a hand underneath.",
      "Tucked inside your collar without buckling to ensure rapid removal.",
      "Threaded through the double-D rings or buckle mechanism snugly, with room for only one finger underneath.",
      "Wrapped around the helmet shell itself."
    ],
    correctAnswerIndex: 2,
    explanation: "The chin strap must be adjusted snugly. If it is loose or unbuckled, the helmet will fly off during a crash, leaving you unprotected."
  },
  {
    id: 177,
    question: "You are riding on a multi-lane expressway and see a steady 'red X' overhead lane signal. What does this indicate?",
    options: [
      "The lane is designated for high-speed motorcycle racing.",
      "The lane is closed to all traffic; you must move out of it safely.",
      "Emergency service vehicles only are permitted to park there.",
      "The lane contains a toll collection booth ahead."
    ],
    correctAnswerIndex: 1,
    explanation: "A steady red X overhead indicator means the lane is closed. You must move out of it as soon as possible."
  },
  {
    id: 178,
    question: "You notice your motorcycle suspension is unusually bouncy on rough roads. How do worn-out shock absorbers impact your braking safety?",
    options: [
      "They help the tires stay warmer and provide more traction.",
      "They can cause the tires to bounce and lose contact with the road, significantly increasing your stopping distance.",
      "They have zero effect on braking or traction.",
      "They automatically disable front and rear wheel ABS."
    ],
    correctAnswerIndex: 1,
    explanation: "Worn shocks fail to keep the tires pressed firmly against the pavement. This leads to wheel bounce, traction loss, and much longer stopping distances."
  },
  {
    id: 179,
    question: "You are traveling at 55 mph when your rear tire suddenly blows out. What is the safest way to use your brakes while stopping?",
    options: [
      "Slam on both brakes with maximum force immediately.",
      "Avoid using the brakes unless absolutely necessary; if needed, apply the brake on the non-flat tire gently.",
      "Lock up the flat tire's wheel to slide straight across.",
      "Use the front brake only, pressing as hard as possible."
    ],
    correctAnswerIndex: 1,
    explanation: "Braking on a flat tire can squeeze the tire off the rim, causing a total loss of control. Slow down using engine braking and steer straight, using gentle braking only on the good tire if necessary."
  },
  {
    id: 180,
    question: "You find your motorcycle drifting or running wide on sharp highway curves. What is the most common cause of this steering error?",
    options: [
      "Using premium synthetic motor oil.",
      "Entering the turn too fast for conditions, or looking at the shoulder (target fixating) instead of through the curve.",
      "Having too much tread depth on both tires.",
      "Riding with your headlight high beam activated."
    ],
    correctAnswerIndex: 1,
    explanation: "Entering a curve too fast is the most common cause of running wide. Looking at the shoulder or guardrail (target fixation) instead of through the curve also contributes to this error."
  },
  {
    id: 181,
    question: "You wear standard prescription eyeglasses. Under Minnesota law, what are the requirements regarding your eye protection?",
    options: [
      "They satisfy all requirements if they are sunglasses.",
      "They are not legal eye protection unless they have shatter-resistant lenses, or you wear a compliant helmet shield over them.",
      "They are never allowed under any riding conditions.",
      "They are only legal if they are tinted bright orange."
    ],
    correctAnswerIndex: 1,
    explanation: "Standard glasses can shatter from flying debris. Legal eye protection must meet safety standards (like ANSI Z87.1) for shatter-resistance."
  },
  {
    id: 182,
    question: "You are riding in the rain. Why do asphalt painted road markings (such as crosswalks, arrows, and lane stripes) demand extra caution?",
    options: [
      "Rain makes paint markings twice as visible and sticky.",
      "Paint markings become extremely slippery when wet, and can hide beneath reflective puddles.",
      "Rain has no impact on paint surfaces.",
      "Rain causes paint markings to glow brightly in the dark."
    ],
    correctAnswerIndex: 1,
    explanation: "Asphalt paint lacks texture to drain water. When wet, painted lines become as slick as ice. Avoid braking or turning hard on painted markings during rain."
  },
  {
    id: 183,
    question: "You are approaching a highway toll plaza or a busy urban intersection stop. Why should you avoid stopping in the dead center of the lane?",
    options: [
      "The asphalt contains heat sensors that can burn tires.",
      "Oil and fluid drippings from other vehicles build up in the center of the lane, making it extremely slick when wet.",
      "The concrete releases magnetic waves that interfere with engine electronics.",
      "Toll booths require you to slide the motorcycle to a halt."
    ],
    correctAnswerIndex: 1,
    explanation: "At stop points, stationary vehicles drop oil, grease, and coolant. These fluids collect in the center of the lane, making it a slick hazard, especially during rain."
  },
  {
    id: 184,
    question: "You are riding in heavy traffic in Minnesota. What are the legal conditions for lane-splitting or filtering through stalled vehicles?",
    options: [
      "It is strictly illegal under all circumstances in Minnesota.",
      "Only when traffic is moving at 25 mph or less, and the rider does not exceed traffic speed by more than 15 mph.",
      "Only on multi-lane freeways during morning rush hours, up to 45 mph.",
      "It is legal at any speed as long as the rider stays strictly on the dashed lane line."
    ],
    correctAnswerIndex: 1,
    explanation: "As of July 1, 2025, Minnesota law permits lane splitting when traffic is moving at 25 mph or less, provided the rider does not exceed 15 mph over the speed of traffic. Lane filtering is also permitted through completely stopped traffic at a maximum of 15 mph. Both are prohibited in roundabouts, school zones, freeway on-ramps, and single-lane work zones."
  },
  {
    id: 185,
    question: "You are structuring your personal motorcycle insurance policy. Why is it incorrect to assume that standard automotive 'no-fault' personal injury protection applies to your motorcycle?",
    options: [
      "Yes, it covers motorcycles identically to standard four-wheeled passenger cars.",
      "No, motorcycle insurance is excluded from standard 'no-fault' policies, and requires dedicated motorcycle-specific coverage.",
      "Only if you are carrying a licensed passenger under 18.",
      "Only on state parkways on weekends."
    ],
    correctAnswerIndex: 1,
    explanation: "Minnesota's No-Fault Auto Insurance Act excludes motorcycles. You must purchase dedicated motorcycle insurance to secure valid medical and liability coverage."
  },
  {
    id: 186,
    question: "You are planning a long highway ride. What is the primary safety benefit of wearing earplugs or hearing protection?",
    options: [
      "It helps you tune into local radio frequencies.",
      "It protects your hearing from permanent wind noise damage, reducing fatigue, while still allowing you to hear traffic sounds.",
      "It completely blocks out emergency siren sounds to keep you calm.",
      "It makes the motorcycle engine run quieter."
    ],
    correctAnswerIndex: 1,
    explanation: "Wind noise at highway speeds exceeds safe decibel limits and can cause permanent hearing damage. Earplugs reduce wind drone while keeping sirens and horns audible."
  },
  {
    id: 187,
    question: "You are riding in dense morning fog on a state route. What is the safest way to maintain visibility to oncoming and trailing drivers?",
    options: [
      "Ride with your high beam activated and keep your hazard blinkers on if equipped, maintaining a safe following distance.",
      "Turn off your headlights to prevent blinding other drivers.",
      "Swerve back and forth continuously while sounding your horn.",
      "Ride close to the bumper of a large semi-truck."
    ],
    correctAnswerIndex: 0,
    explanation: "Low beam or high beam headlights along with hazard flashes make you much more visible in fog. Avoid tailgating and expand your space cushion."
  },
  {
    id: 188,
    question: "Under Minnesota law, what are the requirements for an operator to carry a passenger on their motorcycle?",
    options: [
      "There is no age restriction for the operator, provided they hold a valid Class M license endorsement.",
      "The operator must be at least 18 years old.",
      "The operator must be at least 21 years old.",
      "Passengers are only allowed if the driver is over 65."
    ],
    correctAnswerIndex: 0,
    explanation: "Minnesota law does not set a minimum age for the driver to carry passengers, but the driver must hold a full motorcycle endorsement (not a permit)."
  },
  {
    id: 189,
    question: "While traveling, your throttle is stuck open, and your clutch cable snaps simultaneously. How should you shut down engine power?",
    options: [
      "Coast to a stop and wait for the gas tank to run dry.",
      "Use the engine cutoff switch to power down the engine, and brake to a stop.",
      "Shift into a higher gear with maximum throttle.",
      "Slide the motorcycle onto its side on the pavement."
    ],
    correctAnswerIndex: 1,
    explanation: "The engine cutoff switch shuts off ignition power immediately. This lets you slow down and stop safely, even if the clutch line fails."
  },
  {
    id: 190,
    question: "You are feeling extremely fatigued after working a double shift. How does sleep-deprivation physically impair your motorcycle control?",
    options: [
      "It causes your tires to wear out faster.",
      "It slows reaction times, dulls sensory perception, compromises balance, and can cause micro-sleep episodes.",
      "It causes the engine oil pressure to drop.",
      "It is only dangerous if you are carrying cargo."
    ],
    correctAnswerIndex: 1,
    explanation: "Fatigue impairs judgment, coordination, and reaction time. Do not ride if you are exhausted: take frequent rests, or stay overnight."
  },
  {
    id: 191,
    question: "You are riding on a newly graveled country lane. What proper safety equipment is designed to protect your eyes and face from flying stones or large insects?",
    options: [
      "A standard pair of designer plastic sunglasses.",
      "A helmet face shield or shatter-resistant safety goggles.",
      "A cloth bandana wrapped around your forehead.",
      "Leaning forward close to the fuel tank."
    ],
    correctAnswerIndex: 1,
    explanation: "Shatter-resistant face shields or goggles protect your eyes from debris, bugs, and stones that can cause eye injury or distract you at speed."
  },
  {
    id: 192,
    question: "You are buying safety footwear. What specific design characteristics must high-quality protective motorcycle boots possess?",
    options: [
      "Thin rubber soles with high slip resistance and no laces.",
      "Sturdy material (like leather), over-the-ankle height, slip-resistant soles, and tucked-in secure laces.",
      "Canvas uppers with high-heeled platforms.",
      "Open-toed sandals built with steel mesh inserts."
    ],
    correctAnswerIndex: 1,
    explanation: "Over-the-ankle boots protect ankles from heat and impacts. Slip-resistant soles keep your feet planted at stops, and tucked laces prevent catching on levers."
  },
  {
    id: 193,
    question: "To establish a safe pre-ride inspection routine, which areas are checked under the MSF's 'T-CLOCS' safety checklist?",
    options: [
      "Time, Clutch, Lights, Oil, Chain, Side stand.",
      "Tires and Wheels, Controls, Lights and Electrics, Oil and Fluids, Chassis, Stands.",
      "Throttle, Cables, Lever, Odometer, Cylinder, Spark.",
      "Turn Signal, Carburetor, Linkage, Off-switch, Coolant, Suspension."
    ],
    correctAnswerIndex: 1,
    explanation: "T-CLOCS is the MSF's pre-ride inspection checklist: Tires/Wheels, Controls, Lights/Electrics, Oils/Fluids, Chassis, and Stands."
  },
  {
    id: 194,
    question: "During your T-CLOCS pre-ride walkaround, what specific problems should you look for on your control cables?",
    options: [
      "Make sure the cables are painted to match the fairings.",
      "Look for fraying, kinks, cuts, or sticking in the cable operation, and replace damaged cables immediately.",
      "Verify that the cables can flex at least 15 inches sideways.",
      "Ensure the cable covers are completely dry and dusty."
    ],
    correctAnswerIndex: 1,
    explanation: "Frayed or sticky cables can snap or jam while riding. Regular inspection and lubrication prevent control failures."
  },
  {
    id: 195,
    question: "You are tensioning your motorcycle drive chain. Why is it dangerous to tighten the chain with too little slack?",
    options: [
      "The chain will slip off the sprockets and spin freely.",
      "It limits rear suspension travel, wears out bearings quickly, and can snap the chain under load.",
      "It causes the engine to consume three times more fuel.",
      "It makes the tires lose tread depth immediately."
    ],
    correctAnswerIndex: 1,
    explanation: "A tight chain binds as the swingarm moves, which can wear out shaft seals, damage sprockets, and snap the chain under load."
  },
  {
    id: 196,
    question: "You see potholed paving ahead and cannot avoid it. What is the recommended body posture to adopt as you ride over the rough surface?",
    options: [
      "Lean fully backward with your arms straight and stiff.",
      "Keep your knees locked and sit firmly back on the seat.",
      "Rise slightly off the seat, bend your elbows and knees to absorb impacts, and keep look straight forward.",
      "Slide forward onto the fuel tank and close your eyes."
    ],
    correctAnswerIndex: 2,
    explanation: "Rising slightly off the seat lets your knees and elbows flex, absorbing the bump so you can maintain stability."
  },
  {
    id: 197,
    question: "Under Minnesota law, when are you legally permitted to operate your motorcycle on the paved right-hand shoulder of a freeway?”,",
    options: [
      "Only when overtaking slow-moving farm vehicles on the right.",
      "Only during heavy peak rush hours to bypass traffic jams.",
      "Only in emergency situations, or when directed by law enforcement/construction flags.",
      "Whenever you are riding with a passenger on a permit."
    ],
    correctAnswerIndex: 2,
    explanation: "The shoulder is for emergency use only. Riding there to bypass traffic is illegal and carries heavy penalties."
  },
  {
    id: 198,
    question: "You are riding through a designated highway work or construction zone. What is the safest way to proceed?",
    options: [
      "Accelerate to clear the dusty area as fast as possible.",
      "Reduce speed, monitor signs, watch for loose gravel, pavers, or metal grates, and maintain a larger space cushion.",
      "Weave between traffic cones to practice low-speed turns.",
      "Turn off your headlights to prevent drawing dust towards your face."
    ],
    correctAnswerIndex: 1,
    explanation: "Work zones present signs like loose gravel, uneven lanes, and heavy machinery. Slowing down and staying alert is the safest approach."
  },
  {
    id: 199,
    question: "You are riding in a group formation. What is the safest, most effective way to communicate a road hazard (such as debris or a pothole) to trailing riders?",
    options: [
      "Point with your hand (for hazards on the left) or extend your foot toward the road (for hazards on the right).",
      "Slam on your brakes suddenly to force them to stop.",
      "Turn off your motorcycle key temporarily.",
      "Honk your horn twice and accelerate rapidly."
    ],
    correctAnswerIndex: 0,
    explanation: "Pointing with your hand or extending your foot warns riders behind of hazards (potholes, debris) so they can avoid them."
  },
  {
    id: 200,
    question: "For a motorcycle to be fully street-legal under Minnesota law, what standard equipment must always be installed and functional?",
    options: [
      "At least one headlight, a taillight, a brake light, turn signals, at least one rearview mirror, a horn, and a functioning muffler system.",
      "A racing exhaust pipe and dual high-intensity neon underglow bars.",
      "A passenger backrest and leather side saddlebags.",
      "At least three rearview mirrors and an automatic cruise control."
    ],
    correctAnswerIndex: 0,
    explanation: "Minnesota law requires specific safety equipment, including headlights, taillights, brake lights, turn signals, a horn, mirrors, and a legal muffler, to operate on public roads."
  }
];

