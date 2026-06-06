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
    question: "You are operating a motorcycle under a Minnesota motorcycle instruction permit. Who must wear a helmet?",
    options: [
      "Only passengers under 18 years of age, while the operator may ride unhelmeted during day hours.",
      "Only the operator, regardless of age, while any passenger on the motorcycle must wear a helmet.",
      "All riders under age 18, and any operator riding under a motorcycle instruction permit.",
      "All operators and passengers, regardless of age, license status, or type of roadway used."
    ],
    correctAnswerIndex: 2,
    explanation: "Minnesota law mandates helmet use for all motorcycle riders under age 18 and any operator riding with an instruction permit."
  },
  {
    id: 2,
    question: "Your motorcycle is equipped with a tall windshield that extends above your eye line. Under Minnesota law, what eye protection is required?",
    options: [
      "You are exempt from wearing eye protection if the windshield is approved by the Department of Public Safety.",
      "You must wear approved eye protection (visors, goggles, or safety glasses) regardless of windshield height.",
      "You only need eye protection when riding after sunset or on unpaved roads with high dust concentration.",
      "You are only required to wear eye protection if your passenger does not have an integrated helmet visor."
    ],
    correctAnswerIndex: 1,
    explanation: "Minnesota law requires all motorcycle operators to wear compliant eye protection even if the vehicle has a windshield."
  },
  {
    id: 3,
    question: "You are driving a motorcycle with a Minnesota instruction permit on a clear night. Which restriction is active?",
    options: [
      "You are prohibited from riding after sunset and are not permitted to carry any passengers on the motorcycle.",
      "You are allowed to ride at night only if accompanied by a fully licensed rider in a staggered lane formation.",
      "You are restricted to riding on non-interstate highways and must maintain a speed below 45 miles per hour.",
      "You must operate with your headlights on high beam and are required to wear high-visibility safety clothing."
    ],
    correctAnswerIndex: 0,
    explanation: "Minnesota motorcycle permit holders are strictly prohibited from riding at night (after dark) and carrying passengers."
  },
  {
    id: 4,
    question: "While operating under a Minnesota motorcycle instruction permit, who can legally ride as a passenger on your motorcycle?",
    options: [
      "A licensed motorcycle instructor who is actively monitoring your riding form from a tandem seat position.",
      "An immediate family member who is at least 18 years old and holds a valid class M driver license.",
      "Any passenger, provided they are wearing a Department of Transportation approved safety helmet.",
      "No passenger of any age or relationship is permitted to ride on your motorcycle under any circumstances."
    ],
    correctAnswerIndex: 3,
    explanation: "Minnesota instruction permits strictly prohibit carrying any passenger on the motorcycle."
  },
  {
    id: 5,
    question: "You are riding at 55 mph behind a passenger car on a dry, clean highway. What is the minimum safe following distance?",
    options: [
      "A minimum of one second, which allows enough time to match any sudden changes in the lead vehicle's speed.",
      "A minimum of two seconds, which provides a safe space cushion to react and avoid striking the lead car.",
      "A minimum of three seconds, which is required only when riding in a staggered group formation.",
      "A minimum of four seconds, which is the legal standard for all vehicles traveling on interstate highways."
    ],
    correctAnswerIndex: 1,
    explanation: "A minimum two-second following distance under ideal conditions provides an adequate buffer to react, swerve, or stop safely."
  },
  {
    id: 6,
    question: "You are riding behind a large vehicle and want to ensure you are highly visible to the driver ahead. Which portion of the lane should you occupy?",
    options: [
      "The left portion of the lane, which keeps you visible in their driver-side mirror and avoids oncoming wind.",
      "The right portion of the lane, which ensures you can be seen in their passenger-side mirror and shoulder room.",
      "The center portion of the lane, which positions you directly in their rearview mirror and avoids road oil.",
      "The lane divider line, which maximizes your visibility to vehicles in both your lane and adjacent lanes."
    ],
    correctAnswerIndex: 2,
    explanation: "Riding in the center of the lane positions you directly in the rearview mirror of the driver ahead, making you easier to spot."
  },
  {
    id: 7,
    question: "An animal suddenly darts into your path. How should you apply the brakes to stop in the shortest possible distance?",
    options: [
      "Apply the rear brake firmly while tapping the front brake lever repeatedly to simulate anti-lock braking.",
      "Slam on the front brake lever aggressively while avoiding the rear brake to prevent rear wheel fishtailing.",
      "Apply only the rear brake to maintain steering control, then lean the motorcycle to slide safely onto its side.",
      "Squeeze the front brake and press the rear brake firmly and smoothly at the same time to maximize stopping force."
    ],
    correctAnswerIndex: 3,
    explanation: "Using both brakes simultaneously and smoothly to their maximum capability yields the shortest and safest stopping distance."
  },
  {
    id: 8,
    question: "You need to perform a rapid stop. How much of your motorcycle's total stopping power is typically generated by the front brake?",
    options: [
      "Approximately 70 percent, because weight transfers forward during braking and increases front tire grip.",
      "Approximately 50 percent, as braking force is divided equally between the front and rear tires.",
      "Approximately 30 percent, with the remaining 70 percent distributed to the rear wheel for stability.",
      "Approximately 90 percent, because the rear brake has virtually no effect during any deceleration maneuver."
    ],
    correctAnswerIndex: 0,
    explanation: "The front brake provides at least 70 percent of a motorcycle's stopping power because forward weight transfer increases front tire traction."
  },
  {
    id: 9,
    question: "You are riding at 35 mph and need to initiate a left turn. What physical input is required on the handlebars?",
    options: [
      "Pull back on the left handlebar option while shifting your body weight to the outer side of the motorcycle.",
      "Press forward on the left handlebar grip to lean the motorcycle to the left and initiate the turn.",
      "Turn the handlebars to the right while leaning your hips to the left to balance the centrifugal force.",
      "Hold the handlebars straight and lean your torso far to the left to guide the tires around the curve."
    ],
    correctAnswerIndex: 1,
    explanation: "To turn a motorcycle at speeds above 15 mph, you must countersteer by pressing the handlebar in the direction of the turn (press left to lean left, turn left)."
  },
  {
    id: 10,
    question: "You are mid-way through a sharp curve. How should you adjust the throttle to maintain maximum stability and traction?",
    options: [
      "Roll off the throttle completely to slow the motorcycle down and prevent sliding off the outer edge.",
      "Pull in the clutch lever and coast through the curve to eliminate any rear wheel torque variations.",
      "Apply the throttle aggressively to lift the chassis and reduce the lean angle throughout the bend.",
      "Roll on the throttle smoothly and slightly to stabilize the suspension and maintain tire contact patch."
    ],
    correctAnswerIndex: 3,
    explanation: "Smoothly maintaining or slightly increasing throttle through a turn transfers weight to the rear, stabilizing the suspension and tire grip."
  },
  {
    id: 11,
    question: "You cannot avoid riding over a two-inch wooden branch on the highway. What is the safest technique?",
    options: [
      "Rise slightly off the seat, keep knees squeezed against the tank, and cross the hazard at a 90-degree angle.",
      "Sit back firmly on the seat, downshift, and accelerate aggressively to lift the front tire over the branch.",
      "Squeeze the front brake hard, lean the bike as far as possible, and slide over the branch sideways.",
      "Pull in the clutch lever, lock the rear brake, and steer at a 45-degree angle to skid past the branch."
    ],
    correctAnswerIndex: 0,
    explanation: "Rising off the seat allows your legs to absorb the shock, and striking the hazard at a 90-degree angle prevents the tires from slipping."
  },
  {
    id: 12,
    question: "It has just started raining on a hot afternoon. When will the road surface be the most slippery for a motorcyclist?",
    options: [
      "After two hours of continuous heavy downpour, when large puddles pool and trigger deep hydroplaning.",
      "During the first few minutes of rainfall, when oil and grease mix with water before being washed away.",
      "Just as the storm ends and the sun begins to dry the wet pavement, creating a humid atmospheric film.",
      "During the night following the rainstorm, when dew forms on top of the residual damp asphalt surface."
    ],
    correctAnswerIndex: 1,
    explanation: "Initial rain mixes with accumulated oil and grease, creating an extremely slick emulsion until the rainfall washes it off."
  },
  {
    id: 13,
    question: "You are 21 years or older. Under Minnesota law, you are driving under the influence (DWI) if your blood alcohol concentration (BAC) reaches:",
    options: [
      "A concentration of 0.02 percent or higher, which can impair basic vision and tracking reflexes.",
      "A concentration of 0.05 percent or higher, which is the legal standard for commercial vehicle drivers.",
      "A concentration of 0.08 percent or higher, which is the threshold for a standard criminal DWI charge.",
      "A concentration of 0.10 percent or higher, which represents immediate and severe physical intoxication."
    ],
    correctAnswerIndex: 2,
    explanation: "In Minnesota, a Blood Alcohol Concentration (BAC) of 0.08 percent or higher is the legal limit for standard operators."
  },
  {
    id: 14,
    question: "A law enforcement officer suspects you of riding impaired. Under Minnesota's Implied Consent Law, what is the consequence of refusing a breath test?",
    options: [
      "An automatic 30-day suspension of your motorcycle endorsement with no criminal charges filed against you.",
      "Immediate revocation of your driver license for a minimum of one year and a separate criminal charge.",
      "No physical driver license penalties, as chemical testing remains strictly voluntary under state law.",
      "A mandatory requirement to attend a state-approved defensive driving course and pay a low administrative fee."
    ],
    correctAnswerIndex: 1,
    explanation: "By driving on Minnesota roads, you consent to chemical testing; refusing a test leads to immediate license revocation for one year."
  },
  {
    id: 15,
    question: "You are carrying a passenger on your motorcycle in Minnesota. Who is legally required to wear a DOT-approved safety helmet?",
    options: [
      "Only passengers under 18 years of age, while older passengers are exempt if the operator has a full license.",
      "Only the motorcycle operator, while passengers of any age are exempt from wearing protective headgear.",
      "All motorcycle passengers regardless of age, while the operator is exempt if they are over 21 years old.",
      "All operators and passengers under 18 years of age, and anyone riding with an instruction permit."
    ],
    correctAnswerIndex: 3,
    explanation: "Minnesota law requires approved helmets for all operators and passengers under 18, and all permit holders."
  },
  {
    id: 16,
    question: "You are riding in a group of five motorcycles on a clear, high-speed highway. What is the recommended default formation?",
    options: [
      "A single-file line in the center of the lane to maximize wind drafting and visibility to passing trucks.",
      "A staggered formation, with the leader in the left portion and the second rider in the right portion.",
      "Riding side-by-side in pairs within a single lane to minimize the physical length of the group column.",
      "A V-shape formation occupying multiple parallel lanes simultaneously to assert control of the highway."
    ],
    correctAnswerIndex: 1,
    explanation: "A staggered formation allows riders to stay grouped closely while preserving adequate stopping and swerving distance for each rider."
  },
  {
    id: 17,
    question: "Your riding group is in a staggered formation. When should you switch to a single-file line?",
    options: [
      "When entering sharp turns, narrow bridges, or executing highway on-ramp and off-ramp maneuvers.",
      "When traveling on long, straight interstate highways where crosswinds are relatively light and uniform.",
      "When stopping at municipal red lights or multi-way stop signs to reduce the total size of the columns.",
      "When passing through quiet residential zones with speed limits under 30 miles per hour."
    ],
    correctAnswerIndex: 0,
    explanation: "Staggered groups must form a single line during curves, narrow roads, or highway access points to maximize individual maneuvering room."
  },
  {
    id: 18,
    question: "You are planning a group ride that includes an inexperienced novice rider. Where should this rider be placed in the formation?",
    options: [
      "At the very front, leading the entire group so they can set a comfortable and safe travel pace for all.",
      "At the very rear of the group, behind the sweep rider, so they do not hold up the more experienced riders.",
      "Directly behind the leader, which is the second position in the group, allowing them to be monitored.",
      "In the middle of the group, sandwiched closely between pairs of riders to protect them from crosswinds."
    ],
    correctAnswerIndex: 2,
    explanation: "Placing a novice in the second position allows the leader to supervise their pace and keeps them in view of other riders."
  },
  {
    id: 19,
    question: "Under Minnesota's lane filtering laws (effective July 1, 2025), when is a motorcycle allowed to filter between lanes of slow traffic?",
    options: [
      "Only when traffic is moving at 25 mph or less, keeping the motorcycle speed under 15 mph above traffic.",
      "Only on designated urban expressways during morning peak hours at speeds up to 45 miles per hour.",
      "Whenever a rider is operating in a group of three or more motorcycles on a multi-lane highway.",
      "Only if the motorcycle is equipped with emergency flashers and the rider has a clean driving record."
    ],
    correctAnswerIndex: 0,
    explanation: "Minnesota's lane filtering law allows riding between slow vehicles under strict limits: traffic speed must be 25 mph or less, and motorcycle speed must be under 15 mph faster than traffic."
  },
  {
    id: 20,
    question: "You are riding with a friend. Under Minnesota law, how many motorcycles are permitted to ride side-by-side (abreast) in a single lane?",
    options: [
      "Only one; riding side-by-side is strictly prohibited because it eliminates your safety escape buffer.",
      "There is no static legal limit, provided the riders do not interfere with adjacent highway lanes.",
      "Up to three motorcycles, as long as they maintain a staggered pattern and do not block oncoming cars.",
      "Up to two motorcycles, provided both operators consent and maintain a safe speed and coordination."
    ],
    correctAnswerIndex: 3,
    explanation: "Minnesota law allows a maximum of two motorcycles to travel abreast in a single lane with mutual consent."
  },
  {
    id: 21,
    question: "You are riding on a multi-lane road in dry conditions. Which part of the traffic lane typically gathers the most slippery oil and grease?",
    options: [
      "The left wheel track portion, where heavy commercial vehicle tires leave rubber deposits and debris.",
      "The right wheel track portion, where passenger cars track loose gravel and sand from highway shoulders.",
      "The center portion of the lane, where vehicles drip oil, grease, and other fluids while traveling.",
      "The outer dashed lane lines, which accumulate synthetic paint chemicals and reflective glass beads."
    ],
    correctAnswerIndex: 2,
    explanation: "Vehicle fluids drip down the middle of lanes, making the center strip hazardous, particularly when damp."
  },
  {
    id: 22,
    question: "You have come to a complete stop at a busy intersection. What gear should the motorcycle be in while you wait?",
    options: [
      "Neutral gear, so you can release the handlebar clutch and rest your hands to reduce physical fatigue.",
      "First gear, with the clutch pulled in, so you are prepared to accelerate rapidly if a hazard approaches.",
      "Second gear, which prevents accidental rear wheel spin or slide when launching on slick city asphalt.",
      "The highest gear possible, ensuring you can quickly match high-speed traffic when pulling away."
    ],
    correctAnswerIndex: 1,
    explanation: "Staying in first gear with the clutch engaged keeps you ready to move out of the way if a vehicle approaches too fast from behind."
  },
  {
    id: 23,
    question: "You are riding during a bright, clear afternoon. When are you legally required to operate your motorcycle's headlight in Minnesota?",
    options: [
      "Only from 30 minutes after sunset to 30 minutes before sunrise, similar to standard passenger vehicles.",
      "Only during atmospheric conditions like heavy rain, dense snow, thick fog, or high-level dust storms.",
      "At all times when operating on public streets or highways to increase visibility to other motorists.",
      "Only when riding through designated high-risk industrial corridors or school zones during active hours."
    ],
    correctAnswerIndex: 2,
    explanation: "Minnesota law mandates that a motorcycle's headlight or daytime running lights must be on at all times during operation."
  },
  {
    id: 24,
    question: "You are riding during a bright, sunny afternoon. Under Minnesota guidelines, is it recommended to use your high beam headlight?",
    options: [
      "No, because high beams are strictly illegal during daylight hours and can cause distracting dashboard glare.",
      "No, as high-intensity headlights can drain your battery alternator during extended slow-speed riding.",
      "Only when you are actively overtaking another vehicle on a two-lane highway with oncoming traffic.",
      "Yes, because daytime high-beam use makes you more visible to oncoming traffic without blinding drivers."
    ],
    correctAnswerIndex: 3,
    explanation: "Using high beams in daylight is encouraged in motorcycle safety guides as it helps highlight your presence to oncoming drivers."
  },
  {
    id: 25,
    question: "You want to execute a U-turn near a curve or hill crest. Under Minnesota law, what is the minimum visibility required in both directions?",
    options: [
      "At least 300 feet, allowing oncoming traffic to identify your vehicle and brake safely.",
      "At least 500 feet, which is the standard safety stopping distance at highway speeds.",
      "At least 1,000 feet, ensuring oncoming drivers can spot you in time to react and slow down.",
      "At least 1,500 feet, to allow passenger cars time to swerve around your turning arc."
    ],
    correctAnswerIndex: 2,
    explanation: "Minnesota law prohibits U-turns on hills or curves unless you are visible to drivers coming from either direction for at least 1,000 feet."
  },
  {
    id: 26,
    question: "Your motorcycle's front wheel begins to wobble or shake violently at high speed. What is the safest immediate reaction?",
    options: [
      "Accelerate aggressively to pull the front wheel straight and stabilize the steering column.",
      "Grip the handlebars firmly, ease off the throttle smoothly, and avoid immediate braking inputs.",
      "Squeeze the front brake lever hard to immediately stop the wheel from shaking back and forth.",
      "Shift weight as far back as possible on the seat and pull the handlebars forcefully to retrieve balance."
    ],
    correctAnswerIndex: 1,
    explanation: "Roll off the throttle smoothly, hold the bars firmly without fighting the wobble, and avoid braking until the bike stabilizes."
  },
  {
    id: 27,
    question: "Your rear tire suddenly goes flat or blows out while you are traveling at highway speed. How should you react?",
    options: [
      "Slam on the rear brake immediately to lock the wheel and slide to a controlled stop on the shoulder.",
      "Keep the bike straight, ease off the throttle, and apply the front brake gently if deceleration is needed.",
      "Lean the motorcycle heavily toward the shoulder curb while shifting your weight to the opposite side.",
      "Shift into a higher gear to keep momentum and prevent the deflated tire from slipping off the rim wall."
    ],
    correctAnswerIndex: 1,
    explanation: "Control a blowout by easing off the throttle, steering straight, and applying the front brake (non-flat tire) gently if braking is necessary."
  },
  {
    id: 28,
    question: "You are being passed by a large corporate truck on a multi-lane highway. Which lane position is safest to adopt?",
    options: [
      "The left portion of the lane, keeping you close to the truck to avoid their passenger-side blind spot.",
      "The right portion of the lane, which positions you near the outer shoulder to maximize physical distance.",
      "The center portion of the lane, which provides a balanced buffer from wind turbulence and air pockets.",
      "Riding directly on the paved outer shoulder until the passing commercial vehicle has completely cleared."
    ],
    correctAnswerIndex: 2,
    explanation: "The center of the lane provides optimal space to manage wind blasts and air turbulence generated by large passing trucks."
  },
  {
    id: 29,
    question: "Why must you perform a head check over your shoulder before changing lanes, despite checking your rearview mirrors?",
    options: [
      "Because rearview mirrors have blind spots and cannot show vehicles driving directly next to your rear fender.",
      "Because motorcycle mirrors vibrate at speed, causing distant vehicles to appear closer than they are.",
      "To signal your physical presence and turning intention directly to any motorists in nearby traffic lanes.",
      "To satisfy a state requirement that forces operators to cycle their neck muscles during lane changes."
    ],
    correctAnswerIndex: 0,
    explanation: "Checking over your shoulder is the only way to confirm a vehicle is not positioned in your mirror blind spots."
  },
  {
    id: 30,
    question: "You need to cross steel railroad tracks that run nearly parallel to your lane of travel. What is the safest crossing angle?",
    options: [
      "Turn and cross them at an angle of at least 45 degrees, which prevents tires from catching in the tracks.",
      "Cross them at a very shallow 10-degree angle to finish the transition as quickly and smoothly as possible.",
      "Ride directly on top of the slippery steel rail plates to maintain a straight line of travel through traffic.",
      "Shift into neutral and coast across at a 15-degree angle to eliminate rear wheel engine torque variations."
    ],
    correctAnswerIndex: 0,
    explanation: "A sharp crossing angle of 45 to 90 degrees prevents the narrow motorcycle tires from getting trapped in the track grooves."
  },
  {
    id: 31,
    question: "During a hard emergency stop, you lock your rear brake and the rear wheel begins to skid. What is the correct response?",
    options: [
      "Release the rear brake immediately to restore wheel traction and prevent your rear wheel from sliding.",
      "Keep the rear brake locked and steer straight until you come to a complete stop on the paved surface.",
      "Slam on the front brake aggressively to balance the decelerating force and drag both feet for stability.",
      "Lean the motorcycle heavily in the opposite direction of the skid to force the tires back into alignment."
    ],
    correctAnswerIndex: 1,
    explanation: "Abruptly releasing a locked rear brake during a skid can cause a violent high-side crash if the wheels are out of alignment. Keep it locked and stop straight."
  },
  {
    id: 32,
    question: "You are inspecting your tires. Under Minnesota state statutes, what is the minimum legal tread depth for motorcycle tires?",
    options: [
      "At least 1/32 of an inch, measured at any single point along the center-line tire contact path.",
      "At least 2/32 (or 1/16) of an inch, measured at any surface point along the tire tread grooves.",
      "At least 3/32 of an inch, measured across the shoulders and center of both front and rear tires.",
      "At least 4/32 of an inch, which is measured near the tire wear bars built into the tire carcasses."
    ],
    correctAnswerIndex: 1,
    explanation: "Minnesota law establishes a minimum safety tread depth of 2/32 inch (1/16 inch) in any major tire groove."
  },
  {
    id: 33,
    question: "You are approaching wet steel bridge gratings or open expansion joints. What is the safest riding technique?",
    options: [
      "Weave back and forth gently to keep your tire edge tread patterns actively cutting through the water film.",
      "Pull in the clutch lever and drag both of your boots along the metal surface for physical balance.",
      "Downshift two gears and accelerate aggressively to clear the slick metal grating as quickly as possible.",
      "Ride straight, maintain a steady speed, and avoid any sudden accelerations or harsh braking inputs."
    ],
    correctAnswerIndex: 3,
    explanation: "Wet steel surfaces offer very little traction. Maintain a steady throttle, keep the motorcycle straight, and avoid abrupt changes."
  },
  {
    id: 34,
    question: "You are riding in wet weather. Why do painted road markings (arrows, lines) require extra caution?",
    options: [
      "Because the heavy synthetic paint materials can corrode warm rubber and reduce tire structural strength.",
      "Because wet road paint offers virtually zero traction, acting like ice and increasing slide risk.",
      "Because wet painted lines can reflect headlamp beams, creating a blinding glare that blocks visibility.",
      "Because the state uses magnetic paints that can trigger errors in a motorcycle's engine computer."
    ],
    correctAnswerIndex: 1,
    explanation: "Wet road paint is non-porous and extremely slick, offering poor traction. Avoid sudden deceleration or turning on painted paths."
  },
  {
    id: 35,
    question: "You are selecting eye protection for night riding. Under safety guides, what face shield should you use?",
    options: [
      "A tinted face shield to reduce blinding headlight glare from oncoming vehicles and roadside lighting.",
      "No face shield is needed if you wear specialized contact lenses that screen out headlight reflection.",
      "A yellow-polarized face shield to highlight lane boundaries and road signs in poor lighting conditions.",
      "A clean, clear face shield to ensure maximum light transmission and keep your nighttime field of view."
    ],
    correctAnswerIndex: 3,
    explanation: "Always use a scratch-free, clear shield at night. Tinted eye protection limits visibility and can cause fatal accidents."
  },
  {
    id: 36,
    question: "Under Minnesota law, if you carry a passenger on your motorcycle, what equipment is legally required?",
    options: [
      "A motorcycle sidecar assembly mounted securely to the main lateral frame and registered with the DVS.",
      "An engine of at least 500cc displacement to handle the extra passenger load limits without lagging.",
      "A dedicated seat designed for two people or passenger seat and permanent, separate passenger footrests.",
      "An integrated windshield that extends above the passenger's eyes and a safety grab-handle assembly."
    ],
    correctAnswerIndex: 2,
    explanation: "Minnesota law requires a passenger seat and separate passenger footrests if a motorcycle is carrying a passenger."
  },
  {
    id: 37,
    question: "You are parking your motorcycle against a street curb. What is the recommended parking orientation?",
    options: [
      "Park at a 90-degree angle with the front wheel touching the curb, keeping the exhaust pipe on the sidewalk.",
      "Park at an angle with the rear wheel touching the curb, which ensures stability and better visibility.",
      "Park perfectly parallel with both tires touching the curb, which consumes the least amount of lane space.",
      "Park on the paved pedestrian sidewalk, aligned parallel to the entryway of your current destination."
    ],
    correctAnswerIndex: 1,
    explanation: "Parking with the rear wheel against the curb at an angle keeps your motorcycle stable and prevents rolling into traffic."
  },
  {
    id: 38,
    question: "You are approaching a sharp, high-speed bend on a highway. When should you adjust your speed?",
    options: [
      "Before you enter the curve, while the motorcycle is still fully upright and traveling in a straight line.",
      "Midway through the curve, while the motorcycle is in its deepest lean angle and traction is maxed out.",
      "During the final third of the curve, as you begin to stand the bike straight and accelerate away.",
      "Only if you feel the tires starting to lose traction or slide outward toward the highway shoulders."
    ],
    correctAnswerIndex: 0,
    explanation: "Complete all deceleration and braking before entering a curve. Braking while leaning reduces traction and can trigger a slide."
  },
  {
    id: 39,
    question: "You must execute a tight, rapid swerve to avoid road debris. Under safety rules, how should you manage braking?",
    options: [
      "Apply both brakes firmly while swerving to reduce speed and minimize the impact force of the hazard.",
      "Do not apply brakes while swerving; complete the swerve first, then brake once the bike is upright.",
      "Use the rear brake only while swerving, keeping the front brake free to maintain steering controls.",
      "Squeeze the front brake hard while initiating the swerve to load weight onto the front tire contacts."
    ],
    correctAnswerIndex: 1,
    explanation: "Braking while executing a sharp turn or swerve can lock the tires and cause a crash. Keep steering and braking inputs separate."
  },
  {
    id: 40,
    question: "You are riding on a hot summer day. How can you best prevent dehydration and fatigue while riding?",
    options: [
      "Drink plenty of water before and during the ride, and schedule frequent stops to rest in shaded areas.",
      "Drink caffeinated or energy drinks at your stops to stay mentally sharp and combat muscle drowsiness.",
      "Increase your highway speed to maximize the cool wind effect across your body and reduce sweat build.",
      "Avoid wearing a heavy protective jacket or safety gear to allow direct wind cooling over your skin."
    ],
    correctAnswerIndex: 0,
    explanation: "Riding causes rapid, unnoticed perspiration. Drink water and rest often; safety gear helps insulate you from hot wind drafts."
  },
  {
    id: 41,
    question: "You are practicing defensive riding in traffic. What does the first letter 'S' in the acronym S.I.P.D.E. stand for?",
    options: [
      "Shift, which means downshifting your gears before turning to ensure constant engine power and control.",
      "Scan, which means systematically searching the road ahead for potential hazards and traffic hazards.",
      "Swerve, which means practicing immediate escape maneuvers in empty lanes to test your tire traction.",
      "Speed, which means maintaining a constant acceleration rate to matches adjacent highway traffic flow."
    ],
    correctAnswerIndex: 1,
    explanation: "S.I.P.D.E. stands for Scan, Identify, Predict, Decide, and Execute. 'Scan' means searching your riding environment for obstacles."
  },
  {
    id: 42,
    question: "You are selecting protective riding gear. What footwear provides the best protection for a motorcycle rider?",
    options: [
      "Lightweight canvas running shoes with high uppers that flex easily during rapid gear shift transitions.",
      "Sturdy, over-the-ankle leather boots with slip-resistant soles and securely tucked laces or straps.",
      "Heavy steel-toed boots with a tall, rigid heel that locks firmly onto your motorcycle's footpegs.",
      "Flexible water-resistant shoes with dual-tied laces that allow maximum ventilation in hot weather."
    ],
    correctAnswerIndex: 1,
    explanation: "Over-the-ankle leather boots protect your feet and ankles from road debris, exhaust heat, and impacts."
  },
  {
    id: 43,
    question: "You are practicing low-speed control. What is meant by the 'friction zone' on a motorcycle?",
    options: [
      "The warm center portion of the tire tread where rubber temperature rises to generate traction.",
      "The area of clutch lever travel where engine power begins to pull and transfer to the rear wheel.",
      "The specific heat buildup point inside the brake calipers during heavy emergency stopping actions.",
      "The mechanical contact surface between your brake lever and fingers during deceleration maneuvers."
    ],
    correctAnswerIndex: 1,
    explanation: "The friction zone is the range of clutch lever travel where power is partially transmitted, allowing smooth starts and slow-speed control."
  },
  {
    id: 44,
    question: "A dog begins chasing your motorcycle while you are riding on a country road. What is the safest response?",
    options: [
      "Kick out with your boot to scare the animal away from the front wheel and maintain your current speed.",
      "Slam on both brakes immediately to come to a stop and yell at the animal to disrupt its aggression.",
      "Slow down as you approach the dog, then accelerate cleanly past to disrupt its intercept trajectory.",
      "Swerve aggressively into the other lane to steer around the dog and sound your horn continuously."
    ],
    correctAnswerIndex: 2,
    explanation: "Dogs intercept by matching your speed. Slowing down shifts their intercept angle, and accelerating leaves them behind safely."
  },
  {
    id: 45,
    question: "You are packing extra cargo on your motorcycle for an extended trip. How should this cargo be loaded?",
    options: [
      "Loaded low and balanced evenly on both sides of the motorcycle, preferably near the center of gravity.",
      "Packed high on a passenger rack to keep weight away from the wheels and prevent tire overheating.",
      "Overinflating the front tire by ten pounds to compensate for heavy luggage stored in low bags.",
      "Stored inside a loose backpack worn high on your passenger's shoulders to improve lateral leaning."
    ],
    correctAnswerIndex: 0,
    explanation: "Keep cargo low and close to the center of gravity to preserve the motorcycle's steering and balance."
  },
  {
    id: 46,
    question: "Why is it critical to check that your turn signals are turned off after completing a turn?",
    options: [
      "To prevent draining your motorcycle's battery alternator during extended highway riding schedules.",
      "To avoid misleading other motorists who might think you plan to turn again and pull in front of you.",
      "Because Minnesota statutes require motorcycle signals to automatically shut down within five seconds.",
      "To prevent the indicator bulb filament from overheating and breaking under continuous electrical load."
    ],
    correctAnswerIndex: 1,
    explanation: "Many motorcycle signals do not self-cancel. Leaving them blinking can confuse other drivers, leading to accidents."
  },
  {
    id: 47,
    question: "Where is the engine cut-off switch located and what is its primary safety purpose?",
    options: [
      "On the left handlebar, to adjust your idle mixture speed and fuel flow on cold morning starts.",
      "On the right handlebar, to shut down the engine quickly without removing hands from the steering.",
      "Near the fuel tank valve, to shut down fuel lines in cases of sudden carburetor flooding or leak.",
      "Under your seat panel, to serve as an anti-theft steering column lockout and ignition interlock."
    ],
    correctAnswerIndex: 1,
    explanation: "The engine cut-off switch is on the right handlebar so you can stop the motor instantly in an emergency."
  },
  {
    id: 48,
    question: "When riding in a group, why is a staggered formation preferred over riding side-by-side?",
    options: [
      "Side-by-side riding is only legally permitted on highways with speed limits under 30 miles per hour.",
      "Side-by-side riding leaves no safety margins for swerving or braking within the half-lane boundary.",
      "Staggered formations create a larger visual presence that clears adjacent highway traffic quicker.",
      "Staggered formations allow cars to easily merge in between your riders and break up the group column."
    ],
    correctAnswerIndex: 1,
    explanation: "Riding abreast robs you of space to swerve or brake during emergencies. Staggering maintains your safety zone."
  },
  {
    id: 49,
    question: "You are riding on an open highway and encounter heavy lateral crosswinds. What is the safest response?",
    options: [
      "Pull over to the paved shoulder immediately and park on the lane divider until wind currents subside.",
      "Stand up on the footpegs to lower your aerodynamic profile and shift your center of gravity downward.",
      "Lean slightly into the wind, grip the handlebars firmly, and maintain a constant, steady speed.",
      "Weave back and forth across your lane to reduce the continuous drag against your fairings and tires."
    ],
    correctAnswerIndex: 2,
    explanation: "Counter lateral wind by leaning slightly into it. Keep a firm, relaxed grip and anticipate wind blocks (such as trucks)."
  },
  {
    id: 50,
    question: "You are planning a long-distance motorcycle trip. How should you schedule your ride to prevent fatigue?",
    options: [
      "Ride at least six hours straight to finish the trip quickly and avoid nighttime riding hazards.",
      "Schedule frequent rest stops at least every two hours or 100 miles to stay physically alert and sharp.",
      "Drink caffeinated or energy drinks continuously during your ride to keep your reflexes highly loaded.",
      "Ride only during late night hours when interstate highway traffic is extremely light and uniform."
    ],
    correctAnswerIndex: 1,
    explanation: "Motorcycling is physically demanding. Pausing every 2 hours or 100 miles helps prevent concentration lapses."
  },
  {
    id: 51,
    question: "You are initiating a high-speed lane change next to a heavy commercial truck. What is your immediate priority?",
    options: [
      "Accelerate rapidly past the truck's cab before signaling your intention to move in front of it.",
      "Check for the truck driver's face in their side mirror to ensure you are clear of their blind spot.",
      "Signal your lane change for at least five full seconds while maintaining your position in the rear blind spot.",
      "Move directly behind the truck's rear bumper to maximize your side clearance before crossing lanes."
    ],
    correctAnswerIndex: 1,
    explanation: "If you can see the driver's face in their side mirror, they can potentially see you, helping you avoid their blind spot."
  },
  {
    id: 52,
    question: "You are riding through a residential area. Which hazard represents the most immediate threat requiring a lane position adjust?",
    options: [
      "A vehicle displaying active brake lights parked along the curb, which may suddenly pull into your path.",
      "A pedestrian walking on the opposite sidewalk who is facing away from your direction of travel.",
      "An oncoming passenger car that is traveling strictly within the center of its designated lane.",
      "A residential trash container positioned at the edge of a driveway awaiting municipal collection."
    ],
    correctAnswerIndex: 0,
    explanation: "A car showing brake lights might suddenly open its door or pull into traffic, presenting an immediate hazard."
  },
  {
    id: 53,
    question: "You must perform a sudden stop on a wet asphalt surface. What is the most effective braking adjustment?",
    options: [
      "Pump the front brake lever aggressively to prevent the tire from slipping or losing directional traction.",
      "Apply the front and rear brakes smoothly, reducing the initial pressure on the front brake to prevent lockup.",
      "Rely almost exclusively on the rear brake to slow the vehicle while keeping the front wheel completely free.",
      "Pull the clutch lever in immediately and coast to a stop without applying any physical braking pressure."
    ],
    correctAnswerIndex: 1,
    explanation: "Smooth application of both brakes while limiting initial front pressure helps prevent locking on wet pavement."
  },
  {
    id: 54,
    question: "You are negotiating a sharp curve on a winding road. Which of the following scenarios is most dangerous?",
    options: [
      "Staying in the center portion of the lane, where grease deposits are concentrated on dry, warm pavement.",
      "Failing to look through the curve to the exit point, which causes the rider to drift toward the outside.",
      "Maintaining a steady, constant throttle setting rather than decelerating throughout the entire bend.",
      "Wearing a modular helmet with the chin bar secured in the locked position during daylight hours."
    ],
    correctAnswerIndex: 1,
    explanation: "Failing to look through the curve leads to target fixation and causes the motorcycle to drift wide."
  },
  {
    id: 55,
    question: "You are cornering at speed. What is the immediate risk of downshifting into a lower gear while in the turn?",
    options: [
      "The engine may stall abruptly, causing a complete failure of the motorcycle's primary electrical system.",
      "The rear wheel may lock or skid, leading to an immediate loss of control or a high-side accident.",
      "The front suspension may compress excessively and cause the frame to drag along the pavement surface.",
      "The drive chain may slip off the sprocket teeth, disabling any future throttle response or acceleration."
    ],
    correctAnswerIndex: 1,
    explanation: "Sudden downshifting can cause engine braking to lock the rear tire, triggering a slide or crash."
  },
  {
    id: 56,
    question: "What is the primary safety purpose of changing your lane position when riding in a normal traffic flow?",
    options: [
      "To actively claim your lane space and prevent other motorists from attempting to share the lane with you.",
      "To signal your direct intention of making an immediate turn or lane change at the upcoming intersection.",
      "To systematically avoid road hazards, see further ahead, and stay visible to other drivers around you.",
      "To reduce the uniform wear and tear on the center strip of your motorcycle's front and rear tires."
    ],
    correctAnswerIndex: 2,
    explanation: "Adjusting positions keeps you in sight, avoids potholes and debris, and opens up your path of vision."
  },
  {
    id: 57,
    question: "You are forced to ride through a large patch of gravel on a turned lane. What is the safest riding adjustment?",
    options: [
      "Lean the motorcycle aggressively and turn the handlebars quickly to clear the gravel patch in a single move.",
      "Apply the front brake firmly to drop your speed as you enter, then accelerate out of the gravel area.",
      "Keep the motorcycle completely upright, maintain a steady speed, and avoid any sudden direction changes.",
      "Pull the clutch in and drag both feet on the pavement surface to prevent the motorcycle from tipping."
    ],
    correctAnswerIndex: 2,
    explanation: "Keeping the motorcycle vertical and avoiding sudden actions prevents tires from washing out on unstable surfaces."
  },
  {
    id: 58,
    question: "You are passing a row of parked cars on a city street. Which hazard is most safety-critical to anticipate?",
    options: [
      "The parked car's alarm may sound suddenly and startle you, causing you to lose steering alignment.",
      "The parked car may have a flat tire that causes the vehicle to tilt slightly into your path of travel.",
      "A driver inside the parked car may open their door or the vehicle may pull out into the path of traffic.",
      "The parked car's catalytic converter may emit hot gases that dry out your front tire's rubber compound."
    ],
    correctAnswerIndex: 2,
    explanation: "A driver may open their door or pull the vehicle out without seeing an oncoming motorcycle."
  },
  {
    id: 59,
    question: "You must execute a sudden swerve to avoid a hazard. Where should you focus your eyes during the swerve?",
    options: [
      "Look directly at the obstacle ahead to ensure your front tire completely clears the outer edge of its volume.",
      "Look down at your front fender to monitor your physical wheel angle and steering clearance accurately.",
      "Look in the direction of your target escape path, focusing strictly on where you want the motorcycle to go.",
      "Look at your rearview mirrors to confirm that trailing vehicles are not also swerving to avoid the object."
    ],
    correctAnswerIndex: 2,
    explanation: "Looking at your target escape path helps steer the motorcycle where it needs to go instead of hitting the obstacle."
  },
  {
    id: 60,
    question: "Which of the following is the most common cause of multi-vehicle motorcycle collisions at intersections?",
    options: [
      "Another motorist turning left in front of an oncoming motorcycle because they did not see the vehicle.",
      "A motorcycle operator downshifting too slowly, causing the engine to stall within the intersection grid.",
      "A trailing vehicle tailgating too closely, resulting in a rear-end collision when the light turns green.",
      "Road construction debris or loose gravel gathering at the center of the intersection lane boundaries."
    ],
    correctAnswerIndex: 0,
    explanation: "A driver turning left across an oncoming lane is the most frequent intersection crash scenario for motorcycles."
  },
  {
    id: 61,
    question: "You are carrying a passenger on your motorcycle. What instruction should you give them before riding?",
    options: [
      "Hold on to your shoulders and lean actively in the opposite direction of any turns to help keep balance.",
      "Keep their feet on the passenger footrests at all times, even when the motorcycle is at a complete stop.",
      "Look over your shoulder continuously to monitor trailing traffic and alert you to potential rear hazards.",
      "Adjust their seating position often during sharp turns to help distribute the motorcycle's center of gravity."
    ],
    correctAnswerIndex: 1,
    explanation: "Passenger foot placement is vital for balance; feet must stay on the pegs to prevent tipping when stopping."
  },
  {
    id: 62,
    question: "You are riding in extremely cold temperatures. What is the primary safety hazard of prolonged cold exposure?",
    options: [
      "The tires will lose their structural integrity, leading to a blowout of the front or rear inner tube.",
      "Your reaction times and physical coordination will degrade significantly due to numbness and shivering.",
      "The engine oil will thicken in the crankcase, causing complete engine seizure while running at highway speed.",
      "The headlight filament will become brittle and burn out, reducing your night visibility to unsafe levels."
    ],
    correctAnswerIndex: 1,
    explanation: "Cold causes physical numbness and mental slowing, which impairs your ability to respond to road hazards quickly."
  },
  {
    id: 63,
    question: "When is riding in the blind spot of another vehicle on a multi-lane highway most dangerous?",
    options: [
      "When traveling at slow speeds on structured urban streets where intersections regulate traffic columns.",
      "When adjacent traffic is executing lane changes, merging onto off-ramps, or encountering sudden hazards.",
      "Transitioning through dry, clean road surfaces where there are no oil or moisture accumulations on pavement.",
      "When riding behind a vehicle with a rear-mounted bicycle rack that obscures their rear license status."
    ],
    correctAnswerIndex: 1,
    explanation: "In blind spots, adjacent drivers may swerve or change lanes into your space when reacting to traffic changes."
  },
  {
    id: 64,
    question: "You are being closely tailgated by a passenger car on a two-lane road. What is the safest response?",
    options: [
      "Slam on your brakes to scare the tailgating driver and force them to drop back to a safe following buffer.",
      "Increase your speed significantly to outrun the tailgater and establish a safe distance gap in front.",
      "Increase your own following distance from the vehicle ahead so you have more time to react and stop smoothly.",
      "Move to the extreme outer shoulder edge of the lane to let the tailgating vehicle pass you within your lane."
    ],
    correctAnswerIndex: 2,
    explanation: "Increasing space in front gives you more room to slow gradually, preventing sudden stops that could get you rear-ended."
  },
  {
    id: 65,
    question: "How should you adjust your visual scanning routine when operating a motorcycle after dark?",
    options: [
      "Switch your eyes constantly between the oncoming headlamps and your instrument cluster to monitor system health.",
      "Focus your eyes strictly on the yellow center line of the highway to ensure you remain centered in your lane.",
      "Scan more actively for reflective markers, shadows, hazards, and the illuminated boundaries of your headlight.",
      "Stare directly at the headlights of trailing vehicles in your mirrors to gauge their exact speed changes."
    ],
    correctAnswerIndex: 2,
    explanation: "Night limits visibility, requiring you to actively search boundaries and markers to spot path changes early."
  },
  {
    id: 66,
    question: "As you pull past a large semi-truck, what wind effect should you prepare for as you clear the front cab?",
    options: [
      "A strong visual distraction from the flashing side markers of the truck cab as you clear the front bumper.",
      "A sudden blast of air pushing you outward as you emerge from the truck's protective wind block profile.",
      "A drag effect pulling your front tire closer to the truck's rear wheel axle as you enter their draft space.",
      "A total loss of engine compression due to air pockets generated by the truck's aerodynamic front shape."
    ],
    correctAnswerIndex: 1,
    explanation: "Exiting the truck's wind shelter exposes you to immediate crosswinds that can push you off course."
  },
  {
    id: 67,
    question: "Your front brake lever suddenly fails or loses all fluid pressure. What is your immediate priority?",
    options: [
      "Shift the motorcycle into neutral gear immediately and coast until you roll to a gentle stop on the shoulder.",
      "Apply the rear brake smoothly, downshift to use engine braking, and steer the motorcycle toward a safe stop.",
      "Slam on the rear brake hard to lock the tire and force the motorcycle to slide onto its side on the pavement.",
      "Pump the rear brake lever continuously while pulling the clutch in to prevent engine torque from transferring."
    ],
    correctAnswerIndex: 1,
    explanation: "Utilizing the rear brake and engine compression allows for controlled deceleration when front brakes fail."
  },
  {
    id: 68,
    question: "What is the safest way to execute a start from a complete stop on a steep uphill grade?",
    options: [
      "Accelerate aggressively in second gear and release the clutch quickly to prevent the motorcycle from rolling.",
      "Hold the rear brake, find your clutch friction zone, and release the brake smoothly as you roll on throttle.",
      "Squeeze the front brake hard to hold the bike, rev the engine to its limit, and release the clutch abruptly.",
      "Allow the motorcycle to roll backward slightly to gain starting momentum before applying sudden throttle."
    ],
    correctAnswerIndex: 1,
    explanation: "Applying the rear brake keeps the motorcycle steady while you find the friction zone to transition safely uphill."
  },
  {
    id: 69,
    question: "When is it most critical to use physical hand signals in addition to your motorcycle's turn signals?",
    options: [
      "When traveling on a clear, dark interstate highway with extremely fast-moving, trailing commercial trucks.",
      "When riding in bright, direct sunlight that can overpower or wash out the visual visibility of active bulbs.",
      "When operating in a large staggered group formation through tight municipal school or hospital speed zones.",
      "When executing high-speed lane filtrations through slow bumper-to-bumper urban highway traffic columns."
    ],
    correctAnswerIndex: 1,
    explanation: "Bright daylight can wash out indicator lights, making supplemental hand signals crucial for communication."
  },
  {
    id: 70,
    question: "Why is it important to turn your head and look through a turn rather than just scanning with your eyes?",
    options: [
      "To satisfy state guidelines that mandate head movement to prevent neck stiffness during long riding hours.",
      "To keep your eyes level with the horizon, which helps the inner ear balance and stabilizes the motorcycle.",
      "To ensure your body remains fully aligned with the physical frame geometry of the motorcycle fairing.",
      "To help steer the motorcycle smoothly along your intended line of travel and spot any oncoming hazards."
    ],
    correctAnswerIndex: 3,
    explanation: "Turning your head aligns your vision with your path, naturally guiding the handlebars and warning of upcoming hazards."
  },
  {
    id: 71,
    question: "You encounter unexpected loose sand midway through a curved exit ramp. What is the safest immediate action?",
    options: [
      "Reduce your lean angle by steering slightly straight and maintain a steady, light throttle.",
      "Apply the front brake firmly to drop speed and shift your body weight to the inside edge.",
      "Change down two gears immediately to use maximum engine braking to stabilize the tires.",
      "Lean further into the curve while applying the rear brake to slide the rear tire safely."
    ],
    correctAnswerIndex: 0,
    explanation: "Straightening the motorcycle slightly reduces the side load on the tires, enhancing traction over loose sand."
  },
  {
    id: 72,
    question: "You are riding behind another motorcycle. When is maintaining a staggered formation most dangerous?",
    options: [
      "When riding through a localized patch of wet leaves, oil slicks, or pavement hazards.",
      "When entering a long, straight-line segment of a well-lit public interstate highway.",
      "When traveling under 30 mph in a quiet residential area during morning hours.",
      "When stopping at a designated multi-way intersection alongside parallel traffic cues."
    ],
    correctAnswerIndex: 0,
    explanation: "Hazards require both riders to have the full width of the lane to swerve or brake, making staggering unsafe."
  },
  {
    id: 73,
    question: "You must perform an emergency stop with a passenger on a dry surface. How does the extra weight affect your technique?",
    options: [
      "Apply the rear brake with more force than usual, as weight transfer to the front is slightly reduced.",
      "Rely entirely on the front brake, since the added passenger weight prevents rear tire lockup.",
      "Pump both brakes rapidly to prevent the increased momentum from causing a sudden low-side slide.",
      "Release the clutch fully and brake with the rear wheel only to avoid destabilizing the passenger."
    ],
    correctAnswerIndex: 0,
    explanation: "A passenger adds weight over the rear tire, increasing its traction and allowing safer, firmer rear-braking force."
  },
  {
    id: 74,
    question: "You are stopped at an intersection where a large vehicle blocks your view of oncoming left-turning traffic. What is the safest way to proceed?",
    options: [
      "Creep forward slowly and pause to check for oncoming vehicles before fully entering the intersection.",
      "Accelerate rapidly through the intersection to minimize the time you spend in potential blind spots.",
      "Monitor the traffic signal closely and proceed at standard speed once the light transitions to green.",
      "Sound your horn continuously while crossing to alert any obscured drivers of your presence."
    ],
    correctAnswerIndex: 0,
    explanation: "Creeping forward allows you to check for hidden oncoming vehicles while keeping an escape path."
  },
  {
    id: 75,
    question: "You are wearing standard leather apparel. Why is a highly reflective safety vest strongly recommended even in daylight?",
    options: [
      "It helps drivers distinguish you from the background environment and judge your speed and distance.",
      "It is legally mandated in Minnesota for all riders operating under a full endorsement.",
      "It matches reflective roadway markings, which reduces direct dashboard glare during sunny periods.",
      "It insulates your torso from high-speed wind blasts, reducing muscle fatigue over long trips."
    ],
    correctAnswerIndex: 0,
    explanation: "Contrast helps drivers detect motorcycles sooner and estimate their approaching speed more accurately."
  },
  {
    id: 76,
    question: "At speeds above 15 mph, how does countersteering physically initiate a lean to the right?",
    options: [
      "Pressing the right handlebar grip forward turns the front wheel left, causing the bike to lean right.",
      "Pulling the left handlebar grip backward shifts body weight inward, forcing the chassis rightward.",
      "Turning the handlebars slightly rightward changes the tire contact patch to the outer tire edge.",
      "Shifting your hips to the right side of the seat pivots the steering head assembly to the right."
    ],
    correctAnswerIndex: 0,
    explanation: "Pressing right pulls the wheel left, creating a momentary outward track that forces the motorcycle to lean right."
  },
  {
    id: 77,
    question: "You are riding in damp weather just above freezing. Which road structures are most dangerous?",
    options: [
      "Shaded areas and bridge decks, because they freeze sooner and retain ice longer than roads.",
      "Smooth urban concrete roads, as they absorb salt chemicals and cause tire compounds to slip.",
      "Center lane dividers on high-speed highways, where vehicle exhaust warming prevents ice formation.",
      "Paved highway shoulders, where gravel particles mix with rain and trigger sudden hydroplaning."
    ],
    correctAnswerIndex: 0,
    explanation: "Elevated and shaded surfaces cool faster and lack ground insulation, making them freeze before other paved roads."
  },
  {
    id: 78,
    question: "Under Minnesota guidelines, when is using a modulating motorcycle headlight legal?",
    options: [
      "During daylight hours only, to increase your visual presence without blinding oncoming drivers.",
      "During nighttime hours only, to help spotlight dark roadside hazards and wild animals.",
      "Whenever you are traveling in a staggered group formation of three or more motorcycles.",
      "Only when operating on gravel roads or within designated high-risk construction corridors."
    ],
    correctAnswerIndex: 0,
    explanation: "Headlight modulators are legal in daylight to improve visibility; they can be highly distracting or illegal at night."
  },
  {
    id: 79,
    question: "You are approaching a toll booth or intersection where vehicle fluid drips are heavy. What is the immediate priority?",
    options: [
      "Position your tires in the left or right wheel tracks and maintain a steady, upright path.",
      "Ride through the center lane portion while executing gentle, rapid swerves to clean the tires.",
      "Downshift aggressively to first gear to keep your engine RPMs high and prevent tire slipping.",
      "Pull the clutch in and brake firmly with your rear brake to clear the toll lane quickly."
    ],
    correctAnswerIndex: 0,
    explanation: "The center of toll lanes is extremely slick from stopped vehicles; wheel tracks provide better traction."
  },
  {
    id: 80,
    question: "Your engine throttle suddenly sticks open while riding on a busy highway. What is the safest response?",
    options: [
      "Squeeze the clutch lever fully, flip the engine cut-off switch, and brake safely to the shoulder.",
      "Apply the rear brake hard to slow the bike down while forcing the throttle grip to turn backward.",
      "Shift into neutral gear immediately and rev the engine continuously to clear any fuel blockages.",
      "Lean the motorcycle into a safe, circular path to bleed speed while tapping the front brake."
    ],
    correctAnswerIndex: 0,
    explanation: "Disengaging the engine via the clutch and cutting ignition power prevents runaway speed while maintaining control."
  },
  {
    id: 81,
    question: "How can you verify that a motorcycle helmet provides legal, lab-tested protection under Minnesota law?",
    options: [
      "Check for a permanent Department of Transportation (DOT) sticker sealed on the rear of the helmet outer shell.",
      "Inspect the helmet's chin strap to ensure it is constructed of woven polyester fibers.",
      "Verify that the outer shell is finished with highly reflective or high-visibility fluorescent colors.",
      "Weigh the helmet to confirm that its total mass exceeds three pounds to ensure impact protection."
    ],
    correctAnswerIndex: 0,
    explanation: "A DOT symbol on the helmet's exterior indicates compliance with federal safety performance standards."
  },
  {
    id: 82,
    question: "Which of the following is an early sign of physical or mental fatigue while riding?",
    options: [
      "Finding yourself missing road signs or failing to remember details of the last few miles traveled.",
      "Feeling your motorcycle's front tire feedback change on standard asphalt road surfaces.",
      "Noting an increase in fuel consumption due to minor variations in your throttle grip pressure.",
      "Experiencing a slight cooling sensation across your neck and shoulders from high-speed crosswinds."
    ],
    correctAnswerIndex: 0,
    explanation: "Inattention, missed cues, and 'highway hypnosis' are critical early markers of dangerous fatigue."
  },
  {
    id: 83,
    question: "When checking your motorcycle's tire pressure, when will you get the most accurate measurement?",
    options: [
      "Before you begin riding, when the tires are cool and have not built up heat from road friction.",
      "Midway through a long-distance highway trip, when the tires are warm and have stabilized pressure.",
      "Immediately after riding at high speed, when the air inside has expanded to its maximum volume.",
      "In the heat of the afternoon, when ambient temperature actively rises to match the tire pressure."
    ],
    correctAnswerIndex: 0,
    explanation: "Tire manufacturer pressure specs are written for 'cold' tires, before road friction raises temperature."
  },
  {
    id: 84,
    question: "You cannot avoid riding through a deep puddle of standing water on the highway. What is the safest approach?",
    options: [
      "Keep the motorcycle upright, maintain a steady speed, and avoid making sharp direction shifts.",
      "Accelerate gently to lift the front tire and prevent water from splashing onto the spark plug.",
      "Apply the rear brake firmly to slow down and lean the bike to the side to slice through the pool.",
      "Shift into first gear and drag both of your boots to stabilize the motorcycle from side waves."
    ],
    correctAnswerIndex: 0,
    explanation: "Sudden throttle or steering adjustments on standing water can induce hydroplaning and immediate loss of control."
  },
  {
    id: 85,
    question: "You are carrying a passenger on a winding road. How should they position their body during turns?",
    options: [
      "Lean smoothly with the operator, looking over the operator's shoulder in the direction of the turn.",
      "Remain completely upright and perpendicular to the seat to counteract the motorcycle's lean angle.",
      "Lean further into the turn than the operator to help the motorcycle carve through the curve.",
      "Lean in the opposite direction of the turn to prevent the footpegs from scraping the pavement."
    ],
    correctAnswerIndex: 0,
    explanation: "Leaning with the operator keeps the motorcycle's handling predictable and prevents unexpected weight shifting."
  },
  {
    id: 86,
    question: "You enter a construction zone with uneven lane heights and milled asphalt. What is the safest technique?",
    options: [
      "Maintain a relaxed grip, cross uneven edges at a sharp angle, and keep a steady speed.",
      "Grip the handlebars tightly, accelerate quickly, and lean heavily to slide over the lip.",
      "Ride directly along the lane seam to balance your tires on both levels of the pavement.",
      "Pull the clutch lever in and coast across the uneven lane lip to avoid tire traction changes."
    ],
    correctAnswerIndex: 0,
    explanation: "Crossing at an angle with a relaxed grip prevents the front tire from catching on the ridge and destabilizing."
  },
  {
    id: 87,
    question: "You notice your front brake lever feels spongy when squeezed. What does this condition indicate?",
    options: [
      "There is air in the hydraulic brake lines, which significantly reduces your braking efficiency.",
      "The brake pad wear indicators are dirty and require cleaning with a high-pressure water spray.",
      "The return spring inside the master cylinder has been adjusted for lighter urban riding.",
      "Your brake rotors are cooling down after an extended period of high-speed deceleration."
    ],
    correctAnswerIndex: 0,
    explanation: "Sponginess indicates air bubbles in the hydraulic lines, which compress and reduce physical braking force."
  },
  {
    id: 88,
    question: "You are riding on an open highway next to a bridge railing and experience sudden wind gusts. What is your immediate priority?",
    options: [
      "Lean slightly into the wind, maintain a steady throttle, and allow extra space in your lane.",
      "Abruptly chop the throttle and brake hard with the rear brake to lower your speed and profile.",
      "Stand up on the footpegs to let the wind pass underneath your body and reduce physical drag.",
      "Pull over to the left lane shoulder immediately and lay the motorcycle down on its side."
    ],
    correctAnswerIndex: 0,
    explanation: "Staying relaxed, leaning into the gust, and claiming extra side buffer prevents getting pushed into other lanes."
  },
  {
    id: 89,
    question: "You are overtaking a slow vehicle on a two-lane highway. When is it safe to return to the lane?",
    options: [
      "When you can see the passed vehicle's headlight clearly in your motorcycle's rearview mirrors.",
      "As soon as your rear tire clears the front bumper of the passed vehicle by at least two feet.",
      "When you have accelerated to a speed at least twenty miles per hour faster than the passed car.",
      "Only after signaling your return for a minimum of ten seconds to alert oncoming vehicle lanes."
    ],
    correctAnswerIndex: 0,
    explanation: "Seeing their headlight in your mirror ensures you have created a safe following cushion before merging back."
  },
  {
    id: 90,
    question: "You are turning from a paved highway onto a loose gravel secondary road. How should you adjust your riding?",
    options: [
      "Ease off the brakes, slow down before the transition, and keep the motorcycle as upright as possible.",
      "Accelerate into the gravel to bite into the stones and lean the bike deep to maintain turning arc.",
      "Squeeze the front brake firmly to settle the suspension as the tires enter the loose gravel.",
      "Pull in the clutch and coast through the turn without engine power to prevent rear tires from spinning."
    ],
    correctAnswerIndex: 0,
    explanation: "Gravel has poor traction; slowing down and turning with the bike upright reduces side-slip risks."
  },
  {
    id: 91,
    question: "Your riding group is traveling in a staggered pattern. When the lead rider moves left, what must you do?",
    options: [
      "Maintain your position and spacing, allowing the staggered pattern to automatically adjust itself.",
      "Accelerate immediately to occupy the empty left lane space beside the leading motorcycle.",
      "Signal and shift to the left portion of the lane to preserve the staggered interval behind the leader.",
      "Drop back to a single-file line to prevent your group from spreading and blocking other lane traffic."
    ],
    correctAnswerIndex: 0,
    explanation: "Staggered riders must maintain their relative positions and intervals to preserve individual safe buffers."
  },
  {
    id: 92,
    question: "You are riding on a hot afternoon and begin to experience dry eyes, headache, and muscle cramps. What is your immediate priority?",
    options: [
      "Stop at the next safe exit, find shade, and drink a generous amount of water or sports drinks.",
      "Speed up to increase wind-chill cooling across your helmet vents and reduce body heat.",
      "Squeeze your handgrip muscles repeatedly to restore physical blood flow to your extremities.",
      "Turn on your high-beam headlight to ensure that other motorists compensate for your slow reaction."
    ],
    correctAnswerIndex: 0,
    explanation: "These are classic signs of dehydration and heat exhaustion, which require immediate rest and rehydration."
  },
  {
    id: 93,
    question: "You are purchasing a safety helmet. How should a properly sized helmet feel when secured on your head?",
    options: [
      "Snug and firm all around, with the cheek pads pressing slightly against your jaw and cheeks.",
      "Loose and comfortable, allowing you to easily rotate your head inside the helmet shell.",
      "Tight enough to cause direct pain across your forehead to ensure it cannot move at speed.",
      "Spaced away from your ears to allow you to wear standard external stereo headphones."
    ],
    correctAnswerIndex: 0,
    explanation: "A helmet must fit snugly without hot spots to distribute impact forces evenly across the padding."
  },
  {
    id: 94,
    question: "You are riding in heavy, stop-and-go highway traffic. Which of the following positions is most dangerous?",
    options: [
      "Riding directly in the center strip of the lane behind a delivery van that leaks fluids.",
      "Maintaining a three-second following distance from the passenger vehicle directly in front.",
      "Positioned in the left wheel track where you can see oncoming drivers in opposite lanes.",
      "Wearing highly reflective safety apparel that contrasts against the grey highway surface."
    ],
    correctAnswerIndex: 0,
    explanation: "Stop-and-go traffic concentrates oil drippings in the center lane, which are hazardous when traction is needed."
  },
  {
    id: 95,
    question: "You are parking your motorcycle near a slope. Why should you always lock the steering column?",
    options: [
      "To prevent the motorcycle from rolling forward off its stand and to deter potential theft.",
      "To satisfy Minnesota statutes that require steering physical locks on all public roadways.",
      "To isolate the front fork suspension from wind gusts that could tip the bike sideways.",
      "To keep the headlight array aligned directly with the center line of the parking space."
    ],
    correctAnswerIndex: 0,
    explanation: "Steering lock stabilizes the front assembly and prevents rolling, while also securing the vehicle from theft."
  },
  {
    id: 96,
    question: "Why should you double your standard following distance when riding behind a vehicle in wet conditions?",
    options: [
      "Water spray reduces your vision, and wet pavement increases the physical distance needed to stop.",
      "Wet conditions trigger a biological delay in your physical reaction times and muscle reflexes.",
      "The water on your brake pads reduces the hydraulic line fluid pressure by half.",
      "It prevents the engine from running too cool due to cold road water splashing on the exhaust."
    ],
    correctAnswerIndex: 0,
    explanation: "Wet roads reduce tire traction, requiring significantly more distance to come to a controlled, slide-free stop."
  },
  {
    id: 97,
    question: "You are parking your motorcycle uphill along a curb. What is the safest way to leave your vehicle?",
    options: [
      "Positioned in first gear with the rear tire angled firmly against the stone curb.",
      "Left in neutral gear with the steering column turned straight to prevent tipping.",
      "Resting on its side stand parallel to the curb with the engine left running at idle.",
      "Angled downhill with the front tire resting straight against the curb barrier."
    ],
    correctAnswerIndex: 0,
    explanation: "Engaging first gear and placing the rear tire against the curb prevents gravity from rolling the bike backward."
  },
  {
    id: 98,
    question: "Under Minnesota guides, why should you dim your high beam headlight when approaching oncoming traffic at night?",
    options: [
      "To prevent blinding oncoming drivers, which could cause them to drift into your lane of travel.",
      "To prevent the high-beam bulb filament from burning out under high electrical current load.",
      "Because high-intensity lights can trigger photic errors in roadside traffic flow sensors.",
      "To reduce safety glare on your own windshield that blocks your view of the road surface."
    ],
    correctAnswerIndex: 0,
    explanation: "Blinded drivers lose lane orientation and can head toward the light source, posing a severe head-on collision risk."
  },
  {
    id: 99,
    question: "Your motorcycle is equipped with a steering damper. What is its primary safety benefit?",
    options: [
      "It reduces high-speed front-end wobbles and stabilizes steering over rugged surfaces.",
      "It increases the physical turning radius of the handlebars during low-speed parking turns.",
      "It locks the front forks automatically when the motorcycle senses a high-side slide.",
      "It dampens wind drafts by adjusting the physical height of the front fairing windshield."
    ],
    correctAnswerIndex: 0,
    explanation: "Steering dampers absorb rapid, unstable oscillations (wobbles) of the front fork assembly, keeping control."
  },
  {
    id: 100,
    question: "You are stopped at a red light in traffic. Why is it recommended to check your mirrors and keep the bike in gear?",
    options: [
      "To identify any fast-approaching vehicle from behind and accelerate to safety if they fail to stop.",
      "To monitor your passenger's posture and ensure they are ready to brace for potential impacts.",
      "To satisfy state statutes that mandate keeping gears engaged at all stop locations.",
      "To keep engine temperature stable by keeping the clutch basket fully lubricated and warm."
    ],
    correctAnswerIndex: 0,
    explanation: "Readying an escape path stands as your primary defense against getting rear-ended at intersections."
  }
];
